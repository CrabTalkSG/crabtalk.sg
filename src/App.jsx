import { useEffect, useMemo, useState } from "react";

const GOOGLE_TAG_ID = "G-V94NDT5ZCR";

const LINKS = {
  whatsapp:
    "https://wa.me/6598398671?text=Hi%20Crab%20Talk%2C%20I%20would%20like%20to%20check%20today%27s%20live%20seafood%20availability.",
  telegram: "https://t.me/CrabTalkSG",
  tiktok: "https://www.tiktok.com/@liveseafood_crabtalksg",
  maps: "https://maps.app.goo.gl/1GKdK2y6jpbqfg8N8?g_st=ac",
  eightDays:
    "https://www.8days.sg/eatanddrink/hawkerfood/commonwealth-crab-talk-fai-kee-live-seafood-hawker-collab-856541",
  botakJazz: "https://www.tiktok.com/@botakjazz/video/7602204733155364116",
  aiFeature: "https://www.facebook.com/share/v/1Djwg4h7UP/",
};

const ADDRESS = "31 Commonwealth Crescent #01-41/42/43 S(149644)";

const HOURS = [
  { day: "Monday", hours: "12pm – 5pm" },
  { day: "Tuesday", hours: "8am – 7pm" },
  { day: "Wednesday", hours: "8am – 7pm" },
  { day: "Thursday", hours: "8am – 7pm" },
  { day: "Friday", hours: "8am – 8pm" },
  { day: "Saturday", hours: "8am – 8pm" },
  { day: "Sunday", hours: "8am – 5pm" },
];

const copy = {
  en: {
    navHome: "Home",
    navSelection: "Selection",
    navHow: "How It Works",
    navFeatures: "Features",
    navVisit: "Visit",
    lang: "Language",
    badge: "Live Seafood Supply @ Crab Talk",
    heroTitle: "Pick your own live seafood from the tank.",
    heroText:
      "Visit Crab Talk at Commonwealth Crescent for live crabs, roe crabs, lobsters, oysters, Manila clams, Soon Hock and premium seafood. Selected fresh daily for home cooking, family meals and weekend gatherings.",
    heroNote:
      "Walk in to choose your seafood personally. Availability changes daily.",
    ctaWhatsapp: "WhatsApp Today’s Availability",
    ctaDirections: "Get Directions",
    ctaTelegram: "Join Telegram Updates",
    today: "Today",
    openHours: "Opening Hours",
    selectionTitle: "Fresh Daily Selection",
    selectionSub:
      "Our focus is live seafood supply. Choose from the tanks, ask for recommendations, and bring home seafood that fits your meal plan.",
    howTitle: "How It Works",
    howSub:
      "Simple, transparent and built for customers who want to see the seafood before buying.",
    step1Title: "1. Visit the stall",
    step1Text:
      "Come to Crab Talk and select your own live seafood directly from the tanks.",
    step2Title: "2. Ask for recommendations",
    step2Text:
      "Tell us your pax, budget and cooking style. We help recommend suitable sizes and seafood combinations.",
    step3Title: "3. Prepare for home cooking",
    step3Text:
      "Cleaning and cutting assistance may be available where suitable. Please check with us at the stall.",
    homeTitle: "Built for Home Cooking",
    homeText:
      "Perfect for customers who want restaurant-quality ingredients without restaurant markups. Steam, chilli crab, black pepper, ginger scallion, bee hoon, hotpot or simple home recipes.",
    faikeeTitle: "Optional Nearby Cooking",
    faikeeText:
      "Selected seafood can sometimes be cooked nearby by Fai Kee, subject to their operating capacity, dish suitability and time slot availability. Please check before ordering.",
    featuresTitle: "As Featured & Shared",
    featuresSub:
      "Crab Talk has been shared by food media and creators, helping more customers discover live seafood at Commonwealth Crescent.",
    reviewsTitle: "What Customers Usually Mention",
    reviewsSub:
      "Customers often highlight fresh seafood, helpful recommendations, friendly service and the convenience of choosing seafood directly from the tank.",
    faqTitle: "FAQ",
    visitTitle: "Visit Crab Talk",
    visitSub:
      "For the freshest selection, visit earlier or WhatsApp us before coming down.",
    disclaimer:
      "Seafood availability, sizes and prices change daily. Photos are for reference. Please WhatsApp or visit the stall for latest arrivals.",
  },
  zh: {
    navHome: "首页",
    navSelection: "海鲜选择",
    navHow: "购买方式",
    navFeatures: "媒体推荐",
    navVisit: "到店",
    lang: "语言",
    badge: "Crab Talk 活海鲜供应",
    heroTitle: "到店亲自从水缸挑选活海鲜。",
    heroText:
      "欢迎到 Commonwealth Crescent 的 Crab Talk，选购活蟹、膏蟹、龙虾、生蚝、马尼拉蛤、笋壳鱼及优质海鲜。每日新鲜供应，适合家庭料理、聚餐和周末加菜。",
    heroNote: "建议亲临门店挑选。每日货量和品种会有所不同。",
    ctaWhatsapp: "WhatsApp 查询今日货源",
    ctaDirections: "Google 地图导航",
    ctaTelegram: "加入 Telegram 更新",
    today: "今日",
    openHours: "营业时间",
    selectionTitle: "每日新鲜海鲜",
    selectionSub:
      "我们主打活海鲜供应。顾客可现场挑选，也可询问适合人数、预算和煮法的建议。",
    howTitle: "购买方式",
    howSub: "简单透明，让顾客亲眼看到海鲜后再决定。",
    step1Title: "1. 到店挑选",
    step1Text: "到 Crab Talk 现场，从水缸中挑选您要的活海鲜。",
    step2Title: "2. 询问建议",
    step2Text: "告诉我们人数、预算和想煮的菜式，我们会建议适合的大小和搭配。",
    step3Title: "3. 带回家料理",
    step3Text: "部分海鲜可视情况提供清理或切配协助，请到店确认。",
    homeTitle: "适合家庭料理",
    homeText:
      "适合想在家享用优质海鲜的顾客。可清蒸、辣椒蟹、黑胡椒、姜葱、米粉、火锅或家常料理。",
    faikeeTitle: "附近熟食代煮选项",
    faikeeText:
      "部分海鲜可视情况由附近 Fai Kee 烹煮，但需视他们当天人手、菜式和时段安排而定，请先确认。",
    featuresTitle: "媒体与达人分享",
    featuresSub: "Crab Talk 曾被媒体和美食达人介绍，让更多顾客认识 Commonwealth Crescent 的活海鲜。",
    reviewsTitle: "顾客常提到",
    reviewsSub:
      "顾客经常提到海鲜新鲜、推荐实在、服务友善，也喜欢能现场从水缸挑选。",
    faqTitle: "常见问题",
    visitTitle: "欢迎到店",
    visitSub: "想要更多选择，建议早点到店或先 WhatsApp 查询。",
    disclaimer:
      "海鲜货量、大小和价格每日不同。图片仅供参考，请 WhatsApp 或到店查询最新货源。",
  },
  ja: {
    navHome: "ホーム",
    navSelection: "海鮮ラインナップ",
    navHow: "購入方法",
    navFeatures: "紹介記事",
    navVisit: "アクセス",
    lang: "言語",
    badge: "Crab Talk ライブシーフード",
    heroTitle: "水槽から自分で選ぶ新鮮なライブシーフード。",
    heroText:
      "Commonwealth Crescent の Crab Talk では、活ガニ、蟹味噌入り蟹、ロブスター、牡蠣、マニラクラム、Soon Hock などを販売しています。家庭料理、家族の食事、週末の集まりにおすすめです。",
    heroNote: "店頭で実物を見て選べます。入荷内容は日によって変わります。",
    ctaWhatsapp: "WhatsAppで本日の入荷確認",
    ctaDirections: "Google Mapで行く",
    ctaTelegram: "Telegram更新に参加",
    today: "本日",
    openHours: "営業時間",
    selectionTitle: "毎日の新鮮ラインナップ",
    selectionSub:
      "ライブシーフード販売が中心です。水槽から選び、人数・予算・調理方法に合わせて相談できます。",
    howTitle: "購入方法",
    howSub: "実物を確認してから選べる、分かりやすい購入スタイルです。",
    step1Title: "1. 店頭へ来店",
    step1Text: "Crab Talk に来店し、水槽から直接ライブシーフードを選びます。",
    step2Title: "2. おすすめを相談",
    step2Text: "人数、予算、調理方法を伝えると、適したサイズや組み合わせを提案します。",
    step3Title: "3. 家で調理",
    step3Text: "状況により、清掃やカットのサポートが可能な場合があります。店頭で確認してください。",
    homeTitle: "家庭料理に最適",
    homeText:
      "レストラン品質の食材を家で楽しみたい方に。蒸し料理、チリクラブ、ブラックペッパー、ジンジャースキャリオン、ビーフン、鍋料理などに向いています。",
    faikeeTitle: "近くでの調理オプション",
    faikeeText:
      "一部の海鮮は近くの Fai Kee で調理できる場合がありますが、混雑状況、料理内容、時間枠により異なります。事前にご確認ください。",
    featuresTitle: "メディア・クリエイター紹介",
    featuresSub:
      "Crab Talk はメディアやフードクリエイターにも紹介され、Commonwealth Crescent のライブシーフードとして注目されています。",
    reviewsTitle: "お客様がよく評価する点",
    reviewsSub:
      "新鮮な海鮮、親切な提案、フレンドリーな接客、水槽から選べる点がよく評価されています。",
    faqTitle: "よくある質問",
    visitTitle: "店舗情報",
    visitSub: "品揃えを重視する場合は、早めの来店または WhatsApp での確認がおすすめです。",
    disclaimer:
      "入荷状況、サイズ、価格は日によって変わります。写真は参考用です。最新情報は WhatsApp または店頭でご確認ください。",
  },
};

const img = (name) => `/images/${name}`;

const heroSlides = [
  {
    image: img("product-live-crab-premium.jpg"),
    label: "Live mud crabs selected daily",
  },
  {
    image: img("product-yellow-roe-crab-06.jpg"),
    label: "Sri Lanka yellow roe crabs",
  },
  {
    image: img("stall-crab-talk-front-02.jpg"),
    label: "Visit our Commonwealth Crescent stall",
  },
  {
    image: img("feature-8days-original-thumbnail.jpg"),
    label: "As featured by 8 Days",
  },
];

const freshSelection = [
  {
    title: {
      en: "Live Mud Crabs",
      zh: "活泥蟹",
      ja: "活マッドクラブ",
    },
    desc: {
      en: "Meaty, active crabs selected for steaming, chilli crab, black pepper or ginger scallion crab.",
      zh: "肉质饱满，适合清蒸、辣椒蟹、黑胡椒或姜葱做法。",
      ja: "蒸し料理、チリクラブ、ブラックペッパー、ジンジャースキャリオンにおすすめ。",
    },
    image: img("product-live-crab-premium.jpg"),
  },
  {
    title: {
      en: "Sri Lanka Roe Crabs",
      zh: "斯里兰卡膏蟹",
      ja: "スリランカ蟹味噌入り蟹",
    },
    desc: {
      en: "Popular for rich roe, firm meat and premium home dining occasions.",
      zh: "膏香浓郁，肉质结实，适合家庭宴客和节日聚餐。",
      ja: "濃厚な蟹味噌としっかりした身質で、特別な食事に人気です。",
    },
    image: img("product-yellow-roe-crab-06.jpg"),
  },
  {
    title: {
      en: "Live Lobsters",
      zh: "活龙虾",
      ja: "活ロブスター",
    },
    desc: {
      en: "Boston lobster and green lobster options depending on daily arrival.",
      zh: "每日视货源供应波士顿龙虾、青龙虾等选择。",
      ja: "入荷状況により、ボストンロブスターやグリーンロブスターをご用意。",
    },
    image: img("product-boston-lobster-display.jpg"),
  },
  {
    title: {
      en: "Fresh Oysters",
      zh: "新鲜生蚝",
      ja: "新鮮な牡蠣",
    },
    desc: {
      en: "Cold, clean and suitable for seafood platters, gatherings or weekend treats.",
      zh: "适合海鲜拼盘、聚餐或周末加菜。",
      ja: "シーフードプレート、集まり、週末のごちそうにおすすめ。",
    },
    image: img("product-oysters-premium-02.jpg"),
  },
  {
    title: {
      en: "Manila Clams",
      zh: "马尼拉蛤",
      ja: "マニラクラム",
    },
    desc: {
      en: "Great for steaming, chilli lala, white wine style, soup or hotpot.",
      zh: "适合清蒸、辣椒啦啦、白酒煮、汤品或火锅。",
      ja: "蒸し料理、チリララ、白ワイン風、スープ、鍋料理におすすめ。",
    },
    image: img("product-manila-clams-01.jpg"),
  },
  {
    title: {
      en: "Soon Hock & Premium Fish",
      zh: "笋壳鱼与优质活鱼",
      ja: "Soon Hock と高級魚",
    },
    desc: {
      en: "Live fish options for steaming, Hong Kong style preparation or home cooking.",
      zh: "适合清蒸、港式蒸鱼或家庭料理。",
      ja: "蒸し料理、香港風、家庭料理に向いた活魚です。",
    },
    image: img("product-live-soon-hock-01.jpg"),
  },
];

const featureCards = [
  {
    title: "8 Days Feature",
    text: "Crab Talk and the Commonwealth Crescent live seafood experience featured by 8 Days.",
    image: img("feature-8days-original-thumbnail.jpg"),
    link: LINKS.eightDays,
    button: "Read Feature",
  },
  {
    title: "Botak Jazz TikTok",
    text: "Popular TikTok feature showing the lobster yee mee experience.",
    image: img("feature-botak-jazz-tiktok.jpg"),
    link: LINKS.botakJazz,
    button: "Watch TikTok",
  },
  {
    title: "AI in Daily Work",
    text: "Story feature on how a crab seller uses AI for daily work and customer communication.",
    image: img("AI-feature.jpeg"),
    link: LINKS.aiFeature,
    button: "View Feature",
  },
];

const faqItems = [
  {
    q: "Can I buy directly online?",
    a: "Crab Talk is mainly a walk-in live seafood stall. You can WhatsApp us to check availability, but the best experience is to visit and choose your seafood directly from the tanks.",
  },
  {
    q: "Do you help with cleaning or cutting?",
    a: "Cleaning and cutting assistance may be available depending on seafood type, timing and stall workload. Please check with us when ordering.",
  },
  {
    q: "Are prices fixed every day?",
    a: "Live seafood prices change with size, season and daily arrival. Please check the latest availability and pricing before coming down.",
  },
  {
    q: "Can the seafood be cooked nearby?",
    a: "Some seafood may be suitable for nearby cooking by Fai Kee, but it depends on their capacity, timing and dish type. Please confirm before ordering.",
  },
  {
    q: "What should I order for family dinner?",
    a: "Tell us your pax and budget. We can recommend a balanced mix such as crabs, lobster, clams, oysters or fish depending on what is fresh that day.",
  },
];

function getTodayHours() {
  const jsDay = new Date().getDay();
  const map = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };
  const today = map[jsDay];
  return HOURS.find((item) => item.day === today);
}

function App() {
  const [language, setLanguage] = useState("en");
  const [heroIndex, setHeroIndex] = useState(0);
  const t = copy[language];

  const todayHours = useMemo(() => getTodayHours(), []);

  useEffect(() => {
    const title =
      "Crab Talk SG | Live Seafood Supply at Commonwealth Crescent";
    const description =
      "Visit Crab Talk at 31 Commonwealth Crescent #01-41/42/43 S(149644) for live crabs, roe crabs, lobsters, oysters, Manila clams, Soon Hock and premium seafood.";

    document.title = title;

    const setMeta = (name, content, attr = "name") => {
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:image", "/images/feature-8days-original-thumbnail.jpg", "property");

    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      favicon = document.createElement("link");
      favicon.rel = "icon";
      document.head.appendChild(favicon);
    }
    favicon.href =
      "data:image/svg+xml," +
      encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
          <rect width="64" height="64" rx="14" fill="#ffffff"/>
          <text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle" font-size="38">🦀</text>
        </svg>
      `);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!GOOGLE_TAG_ID) return;

    const existingScript = document.querySelector(
      `script[src="https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}"]`
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`;
      document.head.appendChild(script);
    }

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    gtag("js", new Date());
    gtag("config", GOOGLE_TAG_ID);
  }, []);

  const selectedHero = heroSlides[heroIndex];

  const translated = (field) => field[language] || field.en;

  return (
    <>
      <style>{`
        :root {
          --ink: #0a2630;
          --muted: #5a6b73;
          --ocean: #0b6378;
          --ocean-dark: #073946;
          --aqua: #21a8c7;
          --gold: #d6b765;
          --gold-soft: #fff2bf;
          --cream: #fbfaf5;
          --card: #ffffff;
          --line: rgba(10, 38, 48, 0.12);
          --shadow: 0 18px 45px rgba(6, 36, 45, 0.12);
          --radius: 24px;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--cream);
          color: var(--ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
        }

        a {
          color: inherit;
        }

        .page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(33, 168, 199, 0.12), transparent 32rem),
            linear-gradient(180deg, #ffffff 0%, #fbfaf5 42%, #f5fbfc 100%);
        }

        .container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 20;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid var(--line);
        }

        .nav {
          height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          min-width: max-content;
        }

        .brandIcon {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, var(--ocean), var(--aqua));
          box-shadow: 0 12px 28px rgba(11, 99, 120, 0.24);
          color: white;
          font-size: 26px;
        }

        .brandText strong {
          display: block;
          font-size: 22px;
          letter-spacing: 0.04em;
          line-height: 1;
          color: var(--ink);
        }

        .brandText span {
          display: block;
          margin-top: 4px;
          font-size: 12px;
          color: var(--muted);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .navLinks {
          display: flex;
          align-items: center;
          gap: 18px;
          font-size: 14px;
          color: var(--muted);
        }

        .navLinks a {
          text-decoration: none;
          font-weight: 700;
        }

        .navLinks a:hover {
          color: var(--ocean);
        }

        .navActions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .languageSelect {
          border: 1px solid var(--line);
          border-radius: 999px;
          padding: 10px 12px;
          background: white;
          color: var(--ink);
          font-weight: 800;
          outline: none;
        }

        .button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 46px;
          padding: 13px 18px;
          border-radius: 999px;
          border: 1px solid transparent;
          text-decoration: none;
          font-weight: 900;
          letter-spacing: 0.01em;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          cursor: pointer;
          white-space: nowrap;
        }

        .button:hover {
          transform: translateY(-2px);
        }

        .buttonPrimary {
          background: linear-gradient(135deg, #0b7c8d, #19b4d2);
          color: white;
          box-shadow: 0 16px 32px rgba(11, 124, 141, 0.24);
        }

        .buttonGold {
          background: linear-gradient(135deg, #f3df95, #d4b35c);
          color: #082730;
          box-shadow: 0 16px 32px rgba(212, 179, 92, 0.25);
        }

        .buttonGhost {
          background: white;
          color: var(--ink);
          border-color: var(--line);
        }

        .hero {
          padding: 66px 0 54px;
        }

        .heroGrid {
          display: grid;
          grid-template-columns: 1.02fr 0.98fr;
          gap: 48px;
          align-items: center;
        }

        .eyebrowRow {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 24px;
        }

        .pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 16px;
          border-radius: 999px;
          background: white;
          border: 1px solid var(--line);
          color: var(--ink);
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          box-shadow: 0 8px 22px rgba(6, 36, 45, 0.06);
        }

        .pillGold {
          background: var(--gold-soft);
          border-color: rgba(214, 183, 101, 0.45);
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(42px, 5.2vw, 68px);
          line-height: 0.98;
          letter-spacing: -0.06em;
          color: var(--ink);
          max-width: 820px;
        }

        .heroText {
          margin: 24px 0 0;
          color: #38535d;
          font-size: clamp(18px, 2vw, 23px);
          line-height: 1.65;
          max-width: 760px;
        }

        .heroNote {
          margin: 18px 0 0;
          color: var(--ocean);
          font-weight: 900;
        }

        .heroCtas {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }

        .addressCard {
          margin-top: 28px;
          display: flex;
          gap: 14px;
          align-items: center;
          max-width: 660px;
          padding: 18px;
          border-radius: 20px;
          border: 1px solid rgba(214, 183, 101, 0.45);
          background: rgba(255, 255, 255, 0.76);
          box-shadow: 0 12px 30px rgba(6, 36, 45, 0.08);
        }

        .addressPin {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: #eef8fa;
          color: var(--ocean);
          font-size: 22px;
          flex: 0 0 auto;
        }

        .addressCard strong {
          display: block;
          font-size: 17px;
        }

        .addressCard a {
          margin-top: 5px;
          display: inline-block;
          text-decoration: none;
          color: var(--ocean);
          font-weight: 900;
        }

        .heroMedia {
          position: relative;
        }

        .heroFrame {
          border-radius: 34px;
          padding: 18px;
          background: linear-gradient(135deg, rgba(11, 99, 120, 0.2), rgba(214, 183, 101, 0.24));
          border: 1px solid rgba(10, 38, 48, 0.14);
          box-shadow: var(--shadow);
        }

        .heroImageWrap {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          background: white;
          aspect-ratio: 4 / 3;
        }

        .heroImageWrap img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          background: #f8fbfb;
        }

        .heroCaption {
          position: absolute;
          left: 16px;
          right: 16px;
          bottom: 16px;
          padding: 12px 14px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          color: var(--ink);
          font-weight: 900;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
        }

        .heroDots {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-top: 16px;
        }

        .dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          border: 0;
          background: rgba(10, 38, 48, 0.22);
          cursor: pointer;
        }

        .dotActive {
          background: var(--ocean);
          width: 26px;
          border-radius: 999px;
        }

        section {
          padding: 58px 0;
        }

        .sectionHeader {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 26px;
          margin-bottom: 26px;
        }

        .sectionKicker {
          margin: 0 0 8px;
          color: var(--ocean);
          font-weight: 950;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          font-size: 13px;
        }

        .sectionHeader h2 {
          margin: 0;
          font-size: clamp(30px, 3.5vw, 46px);
          line-height: 1.05;
          letter-spacing: -0.04em;
        }

        .sectionHeader p {
          margin: 0;
          max-width: 560px;
          color: var(--muted);
          line-height: 1.65;
          font-size: 17px;
        }

        .selectionGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .productCard {
          overflow: hidden;
          border-radius: 26px;
          background: white;
          border: 1px solid var(--line);
          box-shadow: 0 12px 32px rgba(6, 36, 45, 0.08);
        }

        .productImage {
          height: 190px;
          padding: 10px;
          background: #f7fbfb;
          border-bottom: 1px solid var(--line);
        }

        .productImage img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          border-radius: 18px;
        }

        .productBody {
          padding: 20px;
        }

        .productBody h3 {
          margin: 0;
          font-size: 23px;
          letter-spacing: -0.03em;
        }

        .productBody p {
          margin: 10px 0 0;
          color: var(--muted);
          line-height: 1.55;
          font-size: 16px;
        }

        .howGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .stepCard,
        .infoPanel,
        .reviewCard,
        .faqItem {
          background: white;
          border: 1px solid var(--line);
          border-radius: var(--radius);
          box-shadow: 0 12px 30px rgba(6, 36, 45, 0.07);
        }

        .stepCard {
          padding: 24px;
        }

        .stepIcon {
          width: 46px;
          height: 46px;
          border-radius: 16px;
          display: grid;
          place-items: center;
          background: #eef8fa;
          color: var(--ocean);
          font-size: 22px;
          margin-bottom: 16px;
        }

        .stepCard h3 {
          margin: 0;
          font-size: 22px;
        }

        .stepCard p {
          margin: 10px 0 0;
          color: var(--muted);
          line-height: 1.6;
        }

        .twoCol {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
        }

        .infoPanel {
          overflow: hidden;
        }

        .infoPanel img {
          width: 100%;
          height: 220px;
          object-fit: contain;
          background: #f7fbfb;
          display: block;
          border-bottom: 1px solid var(--line);
        }

        .infoPanelBody {
          padding: 24px;
        }

        .infoPanelBody h3 {
          margin: 0;
          font-size: 26px;
          letter-spacing: -0.03em;
        }

        .infoPanelBody p {
          margin: 12px 0 0;
          color: var(--muted);
          line-height: 1.65;
        }

        .featureGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .featureCard {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border-radius: 26px;
          background: white;
          border: 1px solid var(--line);
          box-shadow: 0 12px 32px rgba(6, 36, 45, 0.08);
          text-decoration: none;
        }

        .featureCard img {
          width: 100%;
          height: 190px;
          object-fit: contain;
          background: #f7fbfb;
          border-bottom: 1px solid var(--line);
        }

        .featureBody {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }

        .featureBody h3 {
          margin: 0;
          font-size: 22px;
        }

        .featureBody p {
          margin: 0;
          color: var(--muted);
          line-height: 1.55;
          flex: 1;
        }

        .featureButton {
          color: var(--ocean);
          font-weight: 950;
        }

        .reviewsGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .reviewCard {
          padding: 22px;
        }

        .stars {
          color: #d29d19;
          letter-spacing: 2px;
          font-size: 18px;
          margin-bottom: 12px;
        }

        .reviewCard p {
          margin: 0;
          color: var(--muted);
          line-height: 1.6;
        }

        .reviewCard strong {
          display: block;
          margin-top: 14px;
          color: var(--ink);
        }

        .faqGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .faqItem {
          padding: 22px;
        }

        .faqItem h3 {
          margin: 0;
          font-size: 18px;
        }

        .faqItem p {
          margin: 10px 0 0;
          color: var(--muted);
          line-height: 1.6;
        }

        .visitBox {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          padding: 28px;
          border-radius: 30px;
          background: linear-gradient(135deg, #073946, #0b6378);
          color: white;
          box-shadow: var(--shadow);
        }

        .visitBox h2 {
          margin: 0;
          font-size: clamp(30px, 4vw, 48px);
          letter-spacing: -0.04em;
        }

        .visitBox p {
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.65;
          font-size: 17px;
        }

        .hoursList {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 22px;
          padding: 18px;
        }

        .hourRow {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }

        .hourRow:last-child {
          border-bottom: 0;
        }

        .hourRow strong {
          color: white;
        }

        .hourRow span {
          color: rgba(255, 255, 255, 0.82);
          text-align: right;
        }

        .footer {
          padding: 28px 0 40px;
          border-top: 1px solid var(--line);
          color: var(--muted);
          font-size: 14px;
        }

        .footerInner {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          align-items: center;
        }

        .socials {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .socials a {
          color: var(--ocean);
          font-weight: 900;
          text-decoration: none;
        }

        .mobileCta {
          display: none;
        }

        @media (max-width: 980px) {
          .nav {
            height: auto;
            padding: 14px 0;
            align-items: flex-start;
          }

          .navLinks {
            display: none;
          }

          .brandIcon {
            width: 44px;
            height: 44px;
          }

          .brandText strong {
            font-size: 19px;
          }

          .navActions {
            gap: 8px;
          }

          .navActions .buttonPrimary {
            display: none;
          }

          .hero {
            padding: 42px 0 34px;
          }

          .heroGrid,
          .twoCol,
          .visitBox {
            grid-template-columns: 1fr;
          }

          .hero h1 {
            font-size: clamp(38px, 10vw, 56px);
          }

          .selectionGrid,
          .featureGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .howGrid,
          .reviewsGrid,
          .faqGrid {
            grid-template-columns: 1fr;
          }

          .sectionHeader {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 640px) {
          .container {
            width: min(100% - 28px, 1180px);
          }

          .languageSelect {
            max-width: 96px;
            padding: 9px 8px;
            font-size: 12px;
          }

          .hero {
            padding-top: 32px;
          }

          .eyebrowRow {
            margin-bottom: 18px;
          }

          .pill {
            font-size: 11px;
            padding: 9px 12px;
          }

          .heroText {
            font-size: 17px;
          }

          .heroCtas {
            flex-direction: column;
          }

          .button {
            width: 100%;
          }

          .addressCard {
            align-items: flex-start;
          }

          .heroFrame {
            padding: 10px;
            border-radius: 24px;
          }

          .heroImageWrap {
            border-radius: 18px;
          }

          section {
            padding: 42px 0;
          }

          .selectionGrid,
          .featureGrid {
            grid-template-columns: 1fr;
          }

          .productImage,
          .featureCard img {
            height: 170px;
          }

          .infoPanel img {
            height: 190px;
          }

          .footerInner {
            flex-direction: column;
            align-items: flex-start;
          }

          .mobileCta {
            position: fixed;
            left: 14px;
            right: 14px;
            bottom: 14px;
            z-index: 30;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }

          .mobileCta .button {
            width: 100%;
            min-height: 48px;
            box-shadow: 0 14px 30px rgba(6, 36, 45, 0.18);
          }

          .footer {
            padding-bottom: 92px;
          }
        }
      `}</style>

      <div className="page">
        <header className="topbar">
          <div className="container nav">
            <a className="brand" href="#home" aria-label="Crab Talk home">
              <div className="brandIcon">🦀</div>
              <div className="brandText">
                <strong>CRAB TALK</strong>
                <span>Live Seafood Supply</span>
              </div>
            </a>

            <nav className="navLinks" aria-label="Main navigation">
              <a href="#home">{t.navHome}</a>
              <a href="#selection">{t.navSelection}</a>
              <a href="#how">{t.navHow}</a>
              <a href="#features">{t.navFeatures}</a>
              <a href="#visit">{t.navVisit}</a>
            </nav>

            <div className="navActions">
              <select
                className="languageSelect"
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
                aria-label={t.lang}
              >
                <option value="en">EN</option>
                <option value="zh">中文</option>
                <option value="ja">日本語</option>
              </select>

              <a className="button buttonPrimary" href={LINKS.whatsapp}>
                WhatsApp
              </a>
            </div>
          </div>
        </header>

        <main>
          <section className="hero" id="home">
            <div className="container heroGrid">
              <div>
                <div className="eyebrowRow">
                  <span className="pill pillGold">{t.badge}</span>
                  <span className="pill">
                    {t.today}: {todayHours.day} {todayHours.hours}
                  </span>
                </div>

                <h1>{t.heroTitle}</h1>

                <p className="heroText">{t.heroText}</p>
                <p className="heroNote">{t.heroNote}</p>

                <div className="heroCtas">
                  <a className="button buttonPrimary" href={LINKS.whatsapp}>
                    {t.ctaWhatsapp}
                  </a>
                  <a
                    className="button buttonGold"
                    href={LINKS.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.ctaDirections}
                  </a>
                  <a
                    className="button buttonGhost"
                    href={LINKS.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.ctaTelegram}
                  </a>
                </div>

                <div className="addressCard">
                  <div className="addressPin">📍</div>
                  <div>
                    <strong>{ADDRESS}</strong>
                    <a
                      href={LINKS.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.ctaDirections}
                    </a>
                  </div>
                </div>
              </div>

              <div className="heroMedia">
                <div className="heroFrame">
                  <div className="heroImageWrap">
                    <img src={selectedHero.image} alt={selectedHero.label} />
                    <div className="heroCaption">{selectedHero.label}</div>
                  </div>
                </div>

                <div className="heroDots" aria-label="Hero image selector">
                  {heroSlides.map((slide, index) => (
                    <button
                      key={slide.image}
                      className={`dot ${index === heroIndex ? "dotActive" : ""}`}
                      onClick={() => setHeroIndex(index)}
                      aria-label={`Show ${slide.label}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="selection">
            <div className="container">
              <div className="sectionHeader">
                <div>
                  <p className="sectionKicker">Live seafood</p>
                  <h2>{t.selectionTitle}</h2>
                </div>
                <p>{t.selectionSub}</p>
              </div>

              <div className="selectionGrid">
                {freshSelection.map((item) => (
                  <article className="productCard" key={item.title.en}>
                    <div className="productImage">
                      <img src={item.image} alt={translated(item.title)} />
                    </div>
                    <div className="productBody">
                      <h3>{translated(item.title)}</h3>
                      <p>{translated(item.desc)}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="how">
            <div className="container">
              <div className="sectionHeader">
                <div>
                  <p className="sectionKicker">Simple process</p>
                  <h2>{t.howTitle}</h2>
                </div>
                <p>{t.howSub}</p>
              </div>

              <div className="howGrid">
                <article className="stepCard">
                  <div className="stepIcon">🛒</div>
                  <h3>{t.step1Title}</h3>
                  <p>{t.step1Text}</p>
                </article>

                <article className="stepCard">
                  <div className="stepIcon">💬</div>
                  <h3>{t.step2Title}</h3>
                  <p>{t.step2Text}</p>
                </article>

                <article className="stepCard">
                  <div className="stepIcon">🍽️</div>
                  <h3>{t.step3Title}</h3>
                  <p>{t.step3Text}</p>
                </article>
              </div>
            </div>
          </section>

          <section>
            <div className="container twoCol">
              <article className="infoPanel">
                <img
                  src={img("dish-chilli-crab-table-shot.jpg")}
                  alt="Home cooked seafood dishes"
                />
                <div className="infoPanelBody">
                  <h3>{t.homeTitle}</h3>
                  <p>{t.homeText}</p>
                </div>
              </article>

              <article className="infoPanel">
                <img
                  src={img("dish-lobster-yee-mee-fai-kee-hero.jpg")}
                  alt="Optional nearby cooking"
                />
                <div className="infoPanelBody">
                  <h3>{t.faikeeTitle}</h3>
                  <p>{t.faikeeText}</p>
                </div>
              </article>
            </div>
          </section>

          <section id="features">
            <div className="container">
              <div className="sectionHeader">
                <div>
                  <p className="sectionKicker">Media & creators</p>
                  <h2>{t.featuresTitle}</h2>
                </div>
                <p>{t.featuresSub}</p>
              </div>

              <div className="featureGrid">
                {featureCards.map((feature) => (
                  <a
                    className="featureCard"
                    href={feature.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={feature.title}
                  >
                    <img src={feature.image} alt={feature.title} />
                    <div className="featureBody">
                      <h3>{feature.title}</h3>
                      <p>{feature.text}</p>
                      <span className="featureButton">{feature.button} →</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section>
            <div className="container">
              <div className="sectionHeader">
                <div>
                  <p className="sectionKicker">Trust points</p>
                  <h2>{t.reviewsTitle}</h2>
                </div>
                <p>{t.reviewsSub}</p>
              </div>

              <div className="reviewsGrid">
                <article className="reviewCard">
                  <div className="stars">★★★★★</div>
                  <p>
                    Fresh live seafood, clear recommendations and helpful service
                    for customers planning meals at home.
                  </p>
                  <strong>Freshness</strong>
                </article>

                <article className="reviewCard">
                  <div className="stars">★★★★★</div>
                  <p>
                    Customers can see and choose from the tanks, making the buying
                    process more transparent.
                  </p>
                  <strong>Live selection</strong>
                </article>

                <article className="reviewCard">
                  <div className="stars">★★★★★</div>
                  <p>
                    Friendly advice on sizes, cooking style and seafood pairing for
                    family meals or gatherings.
                  </p>
                  <strong>Helpful recommendations</strong>
                </article>
              </div>
            </div>
          </section>

          <section>
            <div className="container">
              <div className="sectionHeader">
                <div>
                  <p className="sectionKicker">Questions</p>
                  <h2>{t.faqTitle}</h2>
                </div>
              </div>

              <div className="faqGrid">
                {faqItems.map((item) => (
                  <article className="faqItem" key={item.q}>
                    <h3>{item.q}</h3>
                    <p>{item.a}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="visit">
            <div className="container">
              <div className="visitBox">
                <div>
                  <p className="sectionKicker" style={{ color: "#f3df95" }}>
                    Commonwealth Crescent
                  </p>
                  <h2>{t.visitTitle}</h2>
                  <p>{t.visitSub}</p>

                  <div className="heroCtas">
                    <a className="button buttonGold" href={LINKS.whatsapp}>
                      {t.ctaWhatsapp}
                    </a>
                    <a
                      className="button buttonGhost"
                      href={LINKS.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.ctaDirections}
                    </a>
                  </div>
                </div>

                <div className="hoursList">
                  <h3 style={{ margin: "0 0 10px" }}>{t.openHours}</h3>
                  {HOURS.map((item) => (
                    <div className="hourRow" key={item.day}>
                      <strong>{item.day}</strong>
                      <span>{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="container footerInner">
            <div>
              <strong>Crab Talk SG</strong>
              <br />
              {ADDRESS}
              <br />
              {t.disclaimer}
            </div>

            <div className="socials">
              <a
                href={LINKS.telegram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a>
              <a href={LINKS.tiktok} target="_blank" rel="noopener noreferrer">
                TikTok
              </a>
              <a href={LINKS.maps} target="_blank" rel="noopener noreferrer">
                Google Maps
              </a>
            </div>
          </div>
        </footer>

        <div className="mobileCta">
          <a className="button buttonPrimary" href={LINKS.whatsapp}>
            WhatsApp
          </a>
          <a
            className="button buttonGold"
            href={LINKS.maps}
            target="_blank"
            rel="noopener noreferrer"
          >
            Directions
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
