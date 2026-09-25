import crypto from 'node:crypto';

const SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly';
const TOKEN_URL = 'https://oauth2.googleapis.com/token';
const GSC_API = 'https://www.googleapis.com/webmasters/v3';
const DEFAULT_SITE = 'sc-domain:crabtalk.sg';
const REPORT_MARKER = 'GSC_DAILY_REPORT';

const TRACKED_QUERIES = [
  'crab talk',
  'live crab singapore',
  'buy live crab singapore',
  'yellow roe crab singapore',
  'live mud crab singapore',
  'live prawns singapore',
  'live lobster singapore',
  'manila clams singapore',
  'soon hock singapore',
  'cooked crab delivery singapore'
];

const PRIORITY_PATHS = [
  '/',
  '/live-crab-singapore',
  '/buy-live-crab-singapore',
  '/fresh-crab-singapore',
  '/live-mud-crab-singapore',
  '/yellow-roe-crab-singapore',
  '/live-prawns-singapore',
  '/live-lobster-singapore',
  '/manila-clams-singapore',
  '/soon-hock-fish-singapore'
];

function base64url(value) {
  return Buffer.from(value).toString('base64url');
}

function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

function addDays(date, days) {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() + days);
  return next;
}

function round(value, places = 2) {
  const factor = 10 ** places;
  return Math.round((Number(value || 0) + Number.EPSILON) * factor) / factor;
}

function percentDelta(current, previous) {
  const curr = Number(current || 0);
  const prev = Number(previous || 0);
  if (prev === 0) return curr === 0 ? 0 : null;
  return round(((curr - prev) / prev) * 100, 1);
}

function cleanPrivateKey(value) {
  return String(value || '').replace(/\\n/g, '\n').trim();
}

async function getAccessToken() {
  const clientEmail = process.env.GSC_CLIENT_EMAIL;
  const privateKey = cleanPrivateKey(process.env.GSC_PRIVATE_KEY);

  if (!clientEmail || !privateKey) {
    throw new Error('Missing GSC_CLIENT_EMAIL or GSC_PRIVATE_KEY');
  }

  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claims = base64url(JSON.stringify({
    iss: clientEmail,
    scope: SCOPE,
    aud: TOKEN_URL,
    iat: now,
    exp: now + 3600
  }));
  const unsigned = `${header}.${claims}`;
  const signer = crypto.createSign('RSA-SHA256');
  signer.update(unsigned);
  signer.end();
  const signature = signer.sign(privateKey).toString('base64url');
  const assertion = `${unsigned}.${signature}`;

  const response = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion
    })
  });

  const data = await response.json();
  if (!response.ok || !data.access_token) {
    throw new Error(`Google OAuth failed: ${response.status} ${JSON.stringify(data)}`);
  }
  return data.access_token;
}

async function gscQuery(token, siteUrl, body) {
  const response = await fetch(`${GSC_API}/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${token}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify({ type: 'web', dataState: 'final', ...body })
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(`Search Console query failed: ${response.status} ${JSON.stringify(data)}`);
  }
  return data.rows || [];
}

async function verifyPropertyAccess(token, siteUrl) {
  const response = await fetch(`${GSC_API}/sites/${encodeURIComponent(siteUrl)}`, {
    headers: { authorization: `Bearer ${token}` }
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(`Search Console property access failed: ${response.status} ${JSON.stringify(data)}`);
  }
  return data.permissionLevel || 'unknown';
}

function totalsFromRows(rows) {
  const row = rows[0] || {};
  return {
    clicks: round(row.clicks, 0),
    impressions: round(row.impressions, 0),
    ctr: round((row.ctr || 0) * 100, 2),
    position: round(row.position, 2)
  };
}

function keyedRows(rows) {
  return new Map(rows.map(row => [String(row.keys?.[0] || ''), row]));
}

function compareRows(currentRows, previousRows, limit = 10) {
  const previous = keyedRows(previousRows);
  const comparisons = currentRows.map(row => {
    const key = String(row.keys?.[0] || '');
    const prev = previous.get(key) || {};
    return {
      key,
      clicks: round(row.clicks, 0),
      previousClicks: round(prev.clicks, 0),
      deltaClicks: round((row.clicks || 0) - (prev.clicks || 0), 0),
      impressions: round(row.impressions, 0),
      previousImpressions: round(prev.impressions, 0),
      deltaImpressions: round((row.impressions || 0) - (prev.impressions || 0), 0),
      ctr: round((row.ctr || 0) * 100, 2),
      position: round(row.position, 2),
      previousPosition: prev.position == null ? null : round(prev.position, 2),
      positionImprovement: prev.position == null ? null : round(prev.position - row.position, 2)
    };
  });

  const winners = [...comparisons]
    .filter(item => item.deltaClicks > 0 || item.deltaImpressions > 0)
    .sort((a, b) => b.deltaClicks - a.deltaClicks || b.deltaImpressions - a.deltaImpressions)
    .slice(0, limit);

  const losers = [...comparisons]
    .filter(item => item.deltaClicks < 0 || item.deltaImpressions < 0)
    .sort((a, b) => a.deltaClicks - b.deltaClicks || a.deltaImpressions - b.deltaImpressions)
    .slice(0, limit);

  return { winners, losers };
}

function trackedQueryRows(rows) {
  const normalized = rows.map(row => ({ query: String(row.keys?.[0] || '').toLowerCase(), row }));
  return TRACKED_QUERIES.map(term => {
    const matches = normalized.filter(item => item.query.includes(term));
    const clicks = matches.reduce((sum, item) => sum + (item.row.clicks || 0), 0);
    const impressions = matches.reduce((sum, item) => sum + (item.row.impressions || 0), 0);
    const weightedPosition = impressions
      ? matches.reduce((sum, item) => sum + (item.row.position || 0) * (item.row.impressions || 0), 0) / impressions
      : null;
    return {
      query: term,
      clicks: round(clicks, 0),
      impressions: round(impressions, 0),
      ctr: impressions ? round((clicks / impressions) * 100, 2) : 0,
      position: weightedPosition == null ? null : round(weightedPosition, 2),
      matchedRows: matches.length
    };
  });
}

function priorityPageRows(rows) {
  const map = keyedRows(rows);
  return PRIORITY_PATHS.map(path => {
    const candidates = [
      `https://www.crabtalk.sg${path === '/' ? '/' : path}`,
      `https://crabtalk.sg${path === '/' ? '/' : path}`
    ];
    const row = candidates.map(url => map.get(url)).find(Boolean);
    return {
      path,
      clicks: round(row?.clicks, 0),
      impressions: round(row?.impressions, 0),
      ctr: round((row?.ctr || 0) * 100, 2),
      position: row?.position == null ? null : round(row.position, 2)
    };
  });
}

function ctrOpportunities(rows) {
  return rows
    .filter(row => (row.impressions || 0) >= 30 && (row.position || 99) <= 15 && (row.ctr || 0) < 0.04)
    .sort((a, b) => (b.impressions || 0) - (a.impressions || 0))
    .slice(0, 12)
    .map(row => ({
      query: String(row.keys?.[0] || ''),
      clicks: round(row.clicks, 0),
      impressions: round(row.impressions, 0),
      ctr: round((row.ctr || 0) * 100, 2),
      position: round(row.position, 2)
    }));
}

function compactDimensionRows(rows, keyName) {
  return rows.slice(0, 12).map(row => ({
    [keyName]: String(row.keys?.[0] || ''),
    clicks: round(row.clicks, 0),
    impressions: round(row.impressions, 0),
    ctr: round((row.ctr || 0) * 100, 2),
    position: round(row.position, 2)
  }));
}

async function buildReport() {
  const token = await getAccessToken();
  const siteUrl = process.env.GSC_SITE_URL || DEFAULT_SITE;
  const permissionLevel = await verifyPropertyAccess(token, siteUrl);

  const end = addDays(new Date(), -3);
  const start = addDays(end, -27);
  const previousEnd = addDays(start, -1);
  const previousStart = addDays(previousEnd, -27);

  const currentPeriod = { startDate: formatDate(start), endDate: formatDate(end) };
  const previousPeriod = { startDate: formatDate(previousStart), endDate: formatDate(previousEnd) };

  const [
    currentTotalsRows,
    previousTotalsRows,
    currentQueryRows,
    previousQueryRows,
    currentPageRows,
    previousPageRows,
    deviceRows,
    countryRows
  ] = await Promise.all([
    gscQuery(token, siteUrl, { ...currentPeriod, rowLimit: 1 }),
    gscQuery(token, siteUrl, { ...previousPeriod, rowLimit: 1 }),
    gscQuery(token, siteUrl, { ...currentPeriod, dimensions: ['query'], rowLimit: 5000 }),
    gscQuery(token, siteUrl, { ...previousPeriod, dimensions: ['query'], rowLimit: 5000 }),
    gscQuery(token, siteUrl, { ...currentPeriod, dimensions: ['page'], rowLimit: 1500 }),
    gscQuery(token, siteUrl, { ...previousPeriod, dimensions: ['page'], rowLimit: 1500 }),
    gscQuery(token, siteUrl, { ...currentPeriod, dimensions: ['device'], rowLimit: 10 }),
    gscQuery(token, siteUrl, { ...currentPeriod, dimensions: ['country'], rowLimit: 25 })
  ]);

  const current = totalsFromRows(currentTotalsRows);
  const previous = totalsFromRows(previousTotalsRows);
  const queryChanges = compareRows(currentQueryRows, previousQueryRows, 10);
  const pageChanges = compareRows(currentPageRows, previousPageRows, 10);

  return {
    marker: REPORT_MARKER,
    generatedAt: new Date().toISOString(),
    siteUrl,
    permissionLevel,
    dataState: 'final',
    currentPeriod,
    previousPeriod,
    summary: {
      current,
      previous,
      deltaPercent: {
        clicks: percentDelta(current.clicks, previous.clicks),
        impressions: percentDelta(current.impressions, previous.impressions),
        ctr: percentDelta(current.ctr, previous.ctr),
        positionImprovement: round(previous.position - current.position, 2)
      }
    },
    trackedQueries: trackedQueryRows(currentQueryRows),
    priorityPages: priorityPageRows(currentPageRows),
    ctrOpportunities: ctrOpportunities(currentQueryRows),
    queryWinners: queryChanges.winners,
    queryLosers: queryChanges.losers,
    pageWinners: pageChanges.winners,
    pageLosers: pageChanges.losers,
    devices: compactDimensionRows(deviceRows, 'device'),
    countries: compactDimensionRows(countryRows, 'country')
  };
}

export default async function handler(request, response) {
  if (request.method !== 'GET') {
    return response.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const cronSecret = process.env.CRON_SECRET;
  const authHeader = request.headers.authorization;
  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return response.status(401).json({ ok: false, error: 'Unauthorized' });
  }

  if (!process.env.GSC_CLIENT_EMAIL || !process.env.GSC_PRIVATE_KEY) {
    console.log(JSON.stringify({ marker: 'GSC_CONFIG_PENDING', generatedAt: new Date().toISOString() }));
    return response.status(200).json({ ok: true, configured: false });
  }

  try {
    const report = await buildReport();
    console.log(JSON.stringify(report));
    return response.status(200).json({
      ok: true,
      configured: true,
      marker: REPORT_MARKER,
      generatedAt: report.generatedAt,
      currentPeriod: report.currentPeriod
    });
  } catch (error) {
    console.error(JSON.stringify({
      marker: 'GSC_REPORT_ERROR',
      generatedAt: new Date().toISOString(),
      message: error instanceof Error ? error.message : String(error)
    }));
    return response.status(500).json({ ok: false, error: 'GSC report failed' });
  }
}