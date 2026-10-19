(function(){
  'use strict';

  var SHOP_URL = 'https://shop.crabtalk.sg/';
  // Carry only genuine incoming campaign parameters through the current visit.
  // Never manufacture a campaign for the internal website-to-store handoff.
  var campaignKeys = ['utm_source','utm_medium','utm_campaign','utm_id','utm_term','utm_content','gclid','gbraid','wbraid','fbclid','ttclid'];
  var campaignStorageKey = 'crabtalk_campaign_visit_v1';
  function visitCampaign(){
    var incoming = new URLSearchParams(window.location.search);
    var params = {};
    campaignKeys.forEach(function(key){
      var value = incoming.get(key);
      if(value) params[key] = value;
    });
    var now = Date.now();
    try {
      if(Object.keys(params).length){
        sessionStorage.setItem(campaignStorageKey, JSON.stringify({params:params, at:now}));
      } else {
        var previous = JSON.parse(sessionStorage.getItem(campaignStorageKey) || 'null');
        if(previous && now - previous.at < 30 * 60 * 1000){
          campaignKeys.forEach(function(key){ if(previous.params[key]) params[key] = previous.params[key]; });
        } else sessionStorage.removeItem(campaignStorageKey);
      }
    } catch(e) { /* Links still work when browser storage is unavailable. */ }
    return params;
  }
  var campaign = visitCampaign();
  function preserveCampaign(link){
    try {
      var url = new URL(link.href, window.location.href);
      if(url.protocol !== 'https:' || url.hostname !== 'shop.crabtalk.sg') return;
      // A deliberately tagged destination owns its campaign; do not mix campaigns.
      if(campaignKeys.some(function(key){ return url.searchParams.has(key); })) return;
      Object.keys(campaign).forEach(function(key){ url.searchParams.set(key, campaign[key]); });
      if(Object.keys(campaign).length) link.href = url.href;
    } catch(e) { /* Ignore non-URL entry points. */ }
  }
  function language(){
    var lang = (document.documentElement.lang || 'en').toLowerCase();
    if(lang.indexOf('ja') === 0) return 'ja';
    if(lang.indexOf('zh') === 0) return 'zh';
    return 'en';
  }

  function labels(){
    var lang = language();
    if(lang === 'ja') return {
      order:'オンライン注文',
      orderAria:'Crab Talkオンラインストアを開く'
    };
    if(lang === 'zh') return {
      order:'网上订购',
      orderAria:'打开Crab Talk网上商店'
    };
    return {
      order:'Order Online',
      orderAria:'Open the Crab Talk online store'
    };
  }

  function configureShopLinks(root){
    (root || document).querySelectorAll('[data-shop-link]').forEach(function(link){
      var destination = link.getAttribute('href');
      // Keep valid collection and product destinations; only fill empty entry points.
      if(!destination || destination === '#') link.setAttribute('href', SHOP_URL);
      link.setAttribute('aria-label', link.getAttribute('aria-label') || labels().orderAria);
    });
  }

  function injectLegacyEntryPoints(){
    if(document.querySelector('.site-header')) return;
    var copy = labels();
    var nav = document.querySelector('.nav-links, .navlinks, nav.nav, header nav');
    if(nav && !nav.querySelector('[data-shop-link]')){
      var navLink = document.createElement('a');
      navLink.className = 'ct-legacy-shop-link';
      navLink.textContent = copy.order;
      navLink.setAttribute('data-shop-link','');
      navLink.setAttribute('data-shop-source','legacy_header');
      nav.appendChild(navLink);
    }
    if(!document.querySelector('.ct-legacy-floating-store,[data-shop-floating]')){
      var floating = document.createElement('a');
      floating.className = 'ct-legacy-floating-store';
      floating.textContent = copy.order;
      floating.setAttribute('data-shop-link','');
      floating.setAttribute('data-shop-source','legacy_floating');
      floating.setAttribute('data-shop-floating','');
      floating.setAttribute('aria-label',copy.orderAria);
      document.body.appendChild(floating);
    }
  }

  function sendEvent(name, params){
    if(typeof window.gtag === 'function') window.gtag('event', name, params || {});
  }

  function init(){
    document.body.classList.add('has-store-integration');
    injectLegacyEntryPoints();
    configureShopLinks(document);
    document.querySelectorAll('a[href]').forEach(preserveCampaign);
    document.addEventListener('click', function(event){
      var link = event.target.closest('a[href]');
      if(!link) return;
      try { if(new URL(link.href).hostname !== 'shop.crabtalk.sg') return; }
      catch(e) { return; }
      sendEvent('online_store_click', {
        link_url: link.href,
        link_text: (link.textContent || '').trim().slice(0,100),
        page_path: window.location.pathname,
        button_location: link.getAttribute('data-shop-source') || 'unspecified',
        shop_domain: 'shop.crabtalk.sg'
      });
    });
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
