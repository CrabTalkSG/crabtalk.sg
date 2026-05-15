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

const img = (name) => `/images/${name}`;

const copy = {
  en: {
    navBrand: "Crab Talk",
    navSelection: "Fresh Selection",
    navHow: "How It Works",
    navReviews: "Reviews",
    navFind: "Find Us",
    navWhatsapp: "WhatsApp",

    language: "Language",
    brandLine: "Live Seafood Supply",

    heroBadge: "Live Seafood Supply @ Crab Talk",
    heroTitle: "Pick Your Live Seafood From Our Tanks",
    heroText:
      "Visit Crab Talk at Commonwealth Crescent to choose live crabs, roe crabs, lobsters, oysters, Manila clams, Soon Hock and more. Select your seafood fresh from the tank, then let us clean, cut and pack it for easy home cooking.",
    heroNote:
      "Crab Talk is a live seafood stall, not an online shop. WhatsApp is mainly for checking today’s arrival, availability and reservation enquiries.",
    ctaVisit: "Visit Our Stall Today",
    ctaWhatsapp: "WhatsApp to Check Today’s Arrival",
    ctaTelegram: "Join Telegram Updates",
    today: "Today",

    freshTitle: "Fresh Daily Selection",
    freshSub:
      "Pick your own fresh seafood from our live tanks. Daily selection depends on arrival, size and season.",

    howTitle: "How It Works",
    howSub:
      "Come down, choose from the live tanks, and let us prepare your seafood for home cooking.",

    step1Title: "Visit our stall",
    step1Text: "Come to 31 Commonwealth Crescent #01-41/42/43 S(149644).",
    step2Title: "Pick from the live tanks",
    step2Text: "Choose your own live seafood directly from our tanks.",
    step3Title: "We clean, cut and pack",
    step3Text:
      "Need help preparing your seafood for home cooking? Let us know at the stall.",
    step4Title: "Cook at home",
    step4Text:
      "Bring home fresh seafood for steaming, chilli crab, black pepper crab, bee hoon, hotpot or family meals.",

    whyTitle: "Why Customers Visit Crab Talk",
    whySub:
      "A simple market-style experience for customers who want to see their seafood before buying.",
    why1Title: "Live seafood tanks",
    why1Text:
      "See the seafood before you buy. Choose live crabs, lobsters, clams, fish and more directly from our tanks.",
    why2Title: "Selected daily",
    why2Text:
      "Our seafood range changes with the daily arrival, so customers can check what is fresh before deciding.",
    why3Title: "Cleaning and cutting available",
    why3Text:
      "Where suitable, we can help clean, cut and pack your seafood for easier home cooking.",
    why4Title: "Friendly home-cooking advice",
    why4Text:
      "Tell us your pax, budget and cooking style. We can suggest suitable seafood and portion sizes.",

    homeTitle: "Made for Home Cooking",
    homeText:
      "Perfect for customers who want restaurant-quality ingredients without restaurant pricing. Steam it, make chilli crab, black pepper crab, ginger scallion crab, bee hoon, soup, hotpot or simple family meals.",

    cookingTitle: "Optional Nearby Cooking",
    cookingText:
      "Selected seafood may sometimes be cooked nearby by Fai Kee, subject to their capacity, dish suitability and time slot availability. Crab Talk’s main focus remains live seafood supply for home cooking.",

    featuresTitle: "Featured & Shared",
    featuresSub:
      "Crab Talk has been featured by food media and creators, helping more customers discover live seafood at Commonwealth Crescent.",

    reviewsTitle: "What Customers Usually Mention",
    reviewsSub:
      "Customers often highlight freshness, friendly advice, transparent selection from the tanks and convenience for home cooking.",

    faqTitle: "FAQ",
    visitTitle: "Find Us",
    visitSub:
      "For the best selection, visit earlier or WhatsApp us before coming down.",
    openingHours: "Opening Hours",
    disclaimer:
      "Seafood availability, sizes and prices change daily. Photos are for reference. Please WhatsApp or visit the stall for latest arrivals.",
  },

  zh: {
    navBrand: "Crab Talk",
    navSelection: "每日海鲜",
    navHow: "购买方式",
    navReviews: "评价",
    navFind: "地址",
    navWhatsapp: "WhatsApp",

    language: "语言",
    brandLine: "活海鲜供应",

    heroBadge: "Crab Talk 活海鲜供应",
    heroTitle: "到店从水缸亲自挑选活海鲜",
    heroText:
      "欢迎到 Commonwealth Crescent 的 Crab Talk 选购活蟹、膏蟹、龙虾、生蚝、马尼拉蛤、笋壳鱼等海鲜。顾客可现场从水缸挑选，我们也可视情况协助清理、切配和包装，方便带回家料理。",
    heroNote:
      "Crab Talk 是活海鲜档口，不是线上商店。WhatsApp 主要用于查询今日到货、货量和预留。",
    ctaVisit: "今天到店挑选",
    ctaWhatsapp: "WhatsApp 查询今日到货",
    ctaTelegram: "加入 Telegram 更新",
    today: "今日",

    freshTitle: "每日新鲜海鲜",
    freshSub:
      "亲自从活海鲜水缸中挑选。每日货源会根据到货、大小和季节有所不同。",

    howTitle: "购买方式",
    howSub: "到店、看水缸、选海鲜，我们帮您准备好带回家料理。",

    step1Title: "到店",
    step1Text: "前往 31 Commonwealth Crescent #01-41/42/43 S(149644)。",
    step2Title: "从水缸挑选",
    step2Text: "亲自从我们的活海鲜水缸中选择您要的海鲜。",
    step3Title: "清理、切配、包装",
    step3Text: "如需要带回家料理，可在档口询问清理和切配协助。",
    step4Title: "带回家料理",
    step4Text: "适合清蒸、辣椒蟹、黑胡椒蟹、米粉、火锅或家庭聚餐。",

    whyTitle: "为什么顾客选择 Crab Talk",
    whySub: "适合想亲眼看到海鲜后再购买的顾客。",
    why1Title: "活海鲜水缸",
    why1Text: "顾客可现场看到和挑选活蟹、龙虾、蛤、鱼等海鲜。",
    why2Title: "每日精选",
    why2Text: "货源每日不同，可根据当天到货选择新鲜海鲜。",
    why3Title: "可协助清理切配",
    why3Text: "视海鲜种类和现场情况，我们可协助处理，方便回家料理。",
    why4Title: "家庭料理建议",
    why4Text: "告诉我们人数、预算和想煮的菜式，我们可给出合适建议。",

    homeTitle: "适合家庭料理",
    homeText:
      "适合想在家享用优质海鲜的顾客。可清蒸、辣椒蟹、黑胡椒蟹、姜葱蟹、米粉、汤品、火锅或家常料理。",

    cookingTitle: "附近代煮选项",
    cookingText:
      "部分海鲜有时可由附近 Fai Kee 烹煮，但需视他们当天人手、菜式和时段安排而定。Crab Talk 的主要重点仍是活海鲜供应和家庭料理。",

    featuresTitle: "媒体与达人分享",
    featuresSub:
      "Crab Talk 曾被媒体和美食达人介绍，让更多顾客认识 Commonwealth Crescent 的活海鲜。",

    reviewsTitle: "顾客常提到",
    reviewsSub:
      "顾客常提到海鲜新鲜、推荐实在、现场挑选透明，以及适合带回家料理。",

    faqTitle: "常见问题",
    visitTitle: "地址与营业时间",
    visitSub: "想要更多选择，建议早点到店或先 WhatsApp 查询。",
    openingHours: "营业时间",
    disclaimer:
      "海鲜货量、大小和价格每日不同。图片仅供参考，请 WhatsApp 或到店查询最新货源。",
  },

  ja: {
    navBrand: "Crab Talk",
    navSelection: "海鮮ラインナップ",
    navHow: "購入方法",
    navReviews: "レビュー",
    navFind: "アクセス",
    navWhatsapp: "WhatsApp",

    language: "言語",
    brandLine: "ライブシーフード",

    heroBadge: "Crab Talk ライブシーフード",
    heroTitle: "水槽から自分で選ぶライブシーフード",
    heroText:
      "Commonwealth Crescent の Crab Talk では、活ガニ、蟹味噌入り蟹、ロブスター、牡蠣、マニラクラム、Soon Hock などを店頭で選べます。水槽から選んだ海鮮を、必要に応じて清掃・カット・包装して、ご家庭で調理しやすくします。",
    heroNote:
      "Crab Talk はオンラインショップではなく、ライブシーフードの店舗です。WhatsApp は主に本日の入荷、在庫、取り置き確認用です。",
    ctaVisit: "店舗へ行く",
    ctaWhatsapp: "WhatsAppで本日の入荷確認",
    ctaTelegram: "Telegram更新に参加",
    today: "本日",

    freshTitle: "毎日の新鮮ラインナップ",
    freshSub:
      "水槽から自分で選べるライブシーフード。入荷、サイズ、季節により内容は変わります。",

    howTitle: "購入方法",
    howSub:
      "来店して、水槽から選び、家庭料理用に準備して持ち帰るシンプルな流れです。",

    step1Title: "店舗へ来店",
    step1Text: "31 Commonwealth Crescent #01-41/42/43 S(149644) へお越しください。",
    step2Title: "水槽から選ぶ",
    step2Text: "ライブシーフードを水槽から直接選べます。",
    step3Title: "清掃・カット・包装",
    step3Text:
      "家庭料理用の準備が必要な場合は、店頭でご相談ください。",
    step4Title: "自宅で調理",
    step4Text:
      "蒸し料理、チリクラブ、ブラックペッパークラブ、ビーフン、鍋料理、家族の食事におすすめです。",

    whyTitle: "Crab Talk が選ばれる理由",
    whySub: "購入前に海鮮を自分の目で確認したいお客様に向いています。",
    why1Title: "ライブ水槽",
    why1Text:
      "活ガニ、ロブスター、貝、魚などを水槽から見て選べます。",
    why2Title: "毎日入荷",
    why2Text:
      "入荷内容は日によって変わるため、その日の新鮮な海鮮を選べます。",
    why3Title: "清掃・カット対応",
    why3Text:
      "海鮮の種類や状況により、ご家庭で調理しやすいように準備可能です。",
    why4Title: "家庭料理の相談",
    why4Text:
      "人数、予算、調理方法に合わせて、サイズや組み合わせを提案できます。",

    homeTitle: "家庭料理に最適",
    homeText:
      "レストラン品質の食材を家で楽しみたい方に。蒸し料理、チリクラブ、ブラックペッパークラブ、ジンジャースキャリオン、ビーフン、スープ、鍋料理におすすめです。",

    cookingTitle: "近くでの調理オプション",
    cookingText:
      "一部の海鮮は近くの Fai Kee で調理できる場合がありますが、混雑状況、料理内容、時間枠により異なります。Crab Talk の主なサービスはライブシーフード販売です。",

    featuresTitle: "メディア・SNS紹介",
    featuresSub:
      "Crab Talk はメディアやフードクリエイターにも紹介され、Commonwealth Crescent のライブシーフードとして注目されています。",

    reviewsTitle: "お客様がよく評価する点",
    reviewsSub:
      "新鮮さ、親切な提案、水槽から選べる安心感、家庭料理への便利さがよく評価されています。",

    faqTitle: "よくある質問",
    visitTitle: "アクセス・営業時間",
    visitSub:
      "品揃えを重視する場合は、早めの来店または WhatsApp での確認がおすすめです。",
    openingHours: "営業時間",
    disclaimer:
      "入荷状況、サイズ、価格は日によって変わります。写真は参考用です。最新情報は WhatsApp または店頭でご確認ください。",
  },
};

const heroSlides = [
  {
    image: img("product-live-crab-premium.jpg"),
    label: "Pick live crabs from our tanks",
  },
  {
    image: img("product-yellow-roe-crab-06.jpg"),
    label: "Sri Lanka roe crabs, selected fresh",
  },
  {
    image: img("stall-crab-talk-front-02.jpg"),
    label: "Visit Crab Talk at Commonwealth Crescent",
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
      en: "Meaty, active crabs suitable for steaming, chilli crab, black pepper or ginger scallion crab.",
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
      en: "Rich roe, firm meat and popular for premium home dining occasions.",
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
    a: "Crab Talk is mainly a walk-in live seafood stall. You can WhatsApp us to check availability or reserve, but the best experience is to visit and choose your seafood directly from the tanks.",
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

  const translated = (field) => field[language] || field.en;
  const selectedHero = heroSlides[heroIndex];

  useEffect(() => {
    const title =
      "Crab Talk SG | Live Seafood Supply at Commonwealth Crescent";
    const description =
      "Visit Crab Talk at 31 Commonwealth Crescent #01-41/42/43 S(149644) to pick live crabs, roe crabs, lobsters, oysters, Manila clams, Soon Hock and premium seafood from the tanks.";

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
    setMeta(
      "og:image",
      "/images/feature-8days-original-thumbnail.jpg",
      "property"
    );

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

  return (
    <>
      <style>{`
        :root {
          --ink: #06343b;
          --ink2: #0b4750;
          --muted: #607477;
          --softText: #7a8c8f;
          --teal: #003f4a;
          --teal2: #006f7f;
          --aqua: #00a6b8;
          --gold: #d8b45f;
          --gold2: #fff3c5;
          --cream: #fffdf7;
          --bg: #f7fbfa;
          --card: #ffffff;
          --line: rgba(6, 52, 59, 0.12);
          --lineStrong: rgba(6, 52, 59, 0.18);
          --shadow: 0 18px 48px rgba(6, 52, 59, 0.12);
          --shadowSoft: 0 10px 28px rgba(6, 52, 59, 0.08);
          --radius: 24px;
          --radiusLarge: 32px;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--bg);
          color: var(--ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
        }

        a {
          color: inherit;
        }

        img {
          max-width: 100%;
        }

        .page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(0, 166, 184, 0.14), transparent 34rem),
            radial-gradient(circle at 85% 6%, rgba(216, 180, 95, 0.18), transparent 24rem),
            linear-gradient(180deg, #ffffff 0%, #f7fbfa 48%, #f4faf9 100%);
        }

        .container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255, 255, 255, 0.94);
          border-bottom: 1px solid var(--line);
          backdrop-filter: blur(18px);
        }

        .nav {
          min-height: 74px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          min-width: max-content;
        }

        .logoMark {
          width: 42px;
          height: 42px;
          border-radius: 14px;
          background: linear-gradient(135deg, #003f4a, #00a6b8);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          box-shadow: 0 10px 24px rgba(0, 63, 74, 0.2);
        }

        .logoText strong {
          display: block;
          font-size: 22px;
          font-weight: 950;
          color: #06343b;
          letter-spacing: -0.03em;
          line-height: 1;
        }

        .logoText span {
          display: block;
          margin-top: 4px;
          font-size: 12px;
          color: #6b7c7f;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .navLinks {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          font-size: 14px;
          color: var(--muted);
          font-weight: 800;
        }

        .navLinks a {
          text-decoration: none;
        }

        .navLinks a:hover {
          color: var(--teal2);
        }

        .navActions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .languageSelect {
          border: 1px solid var(--lineStrong);
          border-radius: 999px;
          background: #ffffff;
          color: var(--ink);
          font-weight: 900;
          padding: 10px 12px;
          outline: none;
          box-shadow: 0 6px 16px rgba(6, 52, 59, 0.06);
        }

        .button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 45px;
          padding: 12px 18px;
          border-radius: 999px;
          border: 1px solid transparent;
          text-decoration: none;
          font-weight: 950;
          line-height: 1;
          white-space: nowrap;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease;
        }

        .button:hover {
          transform: translateY(-2px);
        }

        .buttonPrimary {
          background: linear-gradient(135deg, #003f4a, #00899a);
          color: #ffffff;
          box-shadow: 0 14px 28px rgba(0, 63, 74, 0.24);
        }

        .buttonGold {
          background: linear-gradient(135deg, #fff0b7, #d8b45f);
          color: #06343b;
          box-shadow: 0 14px 28px rgba(216, 180, 95, 0.22);
        }

        .buttonGhost {
          background: #ffffff;
          border-color: var(--lineStrong);
          color: var(--ink);
          box-shadow: 0 10px 24px rgba(6, 52, 59, 0.06);
        }

        .hero {
          padding: 52px 0 34px;
        }

        .heroGrid {
          display: grid;
          grid-template-columns: 1.02fr 0.98fr;
          gap: 44px;
          align-items: center;
        }

        .eyebrowRow {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 20px;
        }

        .pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 999px;
          border: 1px solid var(--lineStrong);
          background: #ffffff;
          color: var(--ink);
          box-shadow: 0 8px 20px rgba(6, 52, 59, 0.06);
          font-size: 12px;
          font-weight: 950;
          letter-spacing: 0.11em;
          text-transform: uppercase;
        }

        .pillGold {
          background: var(--gold2);
          border-color: rgba(216, 180, 95, 0.48);
        }

        .hero h1 {
          margin: 0;
          max-width: 760px;
          font-size: clamp(40px, 5vw, 64px);
          line-height: 0.98;
          letter-spacing: -0.06em;
          color: var(--ink);
        }

        .heroText {
          margin: 22px 0 0;
          max-width: 760px;
          color: #38565b;
          font-size: clamp(17px, 1.75vw, 21px);
          line-height: 1.62;
        }

        .heroNote {
          margin: 16px 0 0;
          max-width: 720px;
          color: var(--teal2);
          font-size: 15px;
          line-height: 1.55;
          font-weight: 900;
          padding-left: 14px;
          border-left: 4px solid var(--gold);
        }

        .heroCtas {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 26px;
        }

        .addressCard {
          margin-top: 24px;
          display: flex;
          align-items: center;
          gap: 14px;
          max-width: 660px;
          padding: 16px;
          border-radius: 20px;
          border: 1px solid rgba(216, 180, 95, 0.42);
          background: rgba(255, 255, 255, 0.86);
          box-shadow: var(--shadowSoft);
        }

        .addressPin {
          width: 44px;
          height: 44px;
          border-radius: 16px;
          display: grid;
          place-items: center;
          background: #edf8f7;
          color: var(--teal2);
          font-size: 22px;
          flex: 0 0 auto;
        }

        .addressCard strong {
          display: block;
          font-size: 16px;
          line-height: 1.35;
        }

        .addressCard a {
          display: inline-block;
          margin-top: 5px;
          color: var(--teal2);
          text-decoration: none;
          font-weight: 950;
        }

        .heroFrame {
          border-radius: 30px;
          padding: 14px;
          background: linear-gradient(135deg, rgba(0, 166, 184, 0.16), rgba(216, 180, 95, 0.2));
          border: 1px solid rgba(6, 52, 59, 0.14);
          box-shadow: var(--shadow);
        }

        .heroImageWrap {
          position: relative;
          overflow: hidden;
          border-radius: 22px;
          aspect-ratio: 4 / 3;
          background: #f8fbfb;
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
          left: 14px;
          right: 14px;
          bottom: 14px;
          padding: 11px 14px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.92);
          color: var(--ink);
          font-size: 14px;
          font-weight: 950;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
          backdrop-filter: blur(12px);
        }

        .heroDots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 14px;
        }

        .dot {
          width: 9px;
          height: 9px;
          border: 0;
          border-radius: 999px;
          background: rgba(6, 52, 59, 0.22);
          cursor: pointer;
        }

        .dotActive {
          width: 28px;
          background: var(--teal2);
        }

        section {
          padding: 48px 0;
        }

        .sectionHeader {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 28px;
          margin-bottom: 24px;
        }

        .sectionKicker {
          margin: 0 0 8px;
          color: var(--teal2);
          font-size: 13px;
          font-weight: 950;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .sectionHeader h2 {
          margin: 0;
          font-size: clamp(30px, 3.4vw, 44px);
          line-height: 1.05;
          letter-spacing: -0.045em;
        }

        .sectionHeader p {
          margin: 0;
          max-width: 580px;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.62;
        }

        .howSection {
          padding-top: 32px;
        }

        .howGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .stepCard {
          position: relative;
          min-height: 238px;
          padding: 22px;
          border-radius: var(--radius);
          background: #ffffff;
          border: 1px solid var(--line);
          box-shadow: var(--shadowSoft);
        }

        .stepNumber {
          width: 40px;
          height: 40px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #003f4a, #00a6b8);
          color: #ffffff;
          font-weight: 950;
        }

        .stepCard h3 {
          margin: 0;
          font-size: 20px;
          line-height: 1.18;
          letter-spacing: -0.03em;
        }

        .stepCard p {
          margin: 10px 0 0;
          color: var(--muted);
          font-size: 15.5px;
          line-height: 1.55;
        }

        .selectionGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .productCard {
          overflow: hidden;
          border-radius: 24px;
          background: #ffffff;
          border: 1px solid var(--line);
          box-shadow: var(--shadowSoft);
        }

        .productImage {
          height: 178px;
          padding: 10px;
          background: #f6fbfa;
          border-bottom: 1px solid var(--line);
        }

        .productImage img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          border-radius: 16px;
        }

        .productBody {
          padding: 19px;
        }

        .productBody h3 {
          margin: 0;
          font-size: 22px;
          letter-spacing: -0.035em;
          line-height: 1.15;
        }

        .productBody p {
          margin: 10px 0 0;
          color: var(--muted);
          font-size: 15.5px;
          line-height: 1.55;
        }

        .whyGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .whyCard {
          padding: 22px;
          border-radius: var(--radius);
          background: #ffffff;
          border: 1px solid var(--line);
          box-shadow: var(--shadowSoft);
        }

        .whyIcon {
          width: 44px;
          height: 44px;
          border-radius: 16px;
          display: grid;
          place-items: center;
          margin-bottom: 14px;
          background: #edf8f7;
          color: var(--teal2);
          font-size: 22px;
        }

        .whyCard h3 {
          margin: 0;
          font-size: 20px;
          line-height: 1.16;
          letter-spacing: -0.03em;
        }

        .whyCard p {
          margin: 10px 0 0;
          color: var(--muted);
          font-size: 15.5px;
          line-height: 1.55;
        }

        .twoCol {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
        }

        .infoPanel {
          overflow: hidden;
          border-radius: var(--radiusLarge);
          background: #ffffff;
          border: 1px solid var(--line);
          box-shadow: var(--shadowSoft);
        }

        .infoPanel img {
          width: 100%;
          height: 210px;
          object-fit: contain;
          display: block;
          background: #f6fbfa;
          border-bottom: 1px solid var(--line);
        }

        .infoPanelBody {
          padding: 24px;
        }

        .infoPanelBody h3 {
          margin: 0;
          font-size: 27px;
          line-height: 1.08;
          letter-spacing: -0.04em;
        }

        .infoPanelBody p {
          margin: 12px 0 0;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.65;
        }

        .featureGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .featureCard {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          min-height: 100%;
          border-radius: 24px;
          background: #ffffff;
          border: 1px solid var(--line);
          box-shadow: var(--shadowSoft);
          text-decoration: none;
        }

        .featureCard img {
          width: 100%;
          height: 178px;
          object-fit: contain;
          display: block;
          background: #f6fbfa;
          border-bottom: 1px solid var(--line);
        }

        .featureBody {
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
          padding: 19px;
        }

        .featureBody h3 {
          margin: 0;
          font-size: 21px;
          letter-spacing: -0.03em;
        }

        .featureBody p {
          margin: 0;
          flex: 1;
          color: var(--muted);
          font-size: 15.5px;
          line-height: 1.55;
        }

        .featureButton {
          color: var(--teal2);
          font-weight: 950;
        }

        .reviewsGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .reviewCard {
          padding: 22px;
          border-radius: var(--radius);
          background: #ffffff;
          border: 1px solid var(--line);
          box-shadow: var(--shadowSoft);
        }

        .stars {
          margin-bottom: 12px;
          color: #d29d19;
          font-size: 18px;
          letter-spacing: 2px;
        }

        .reviewCard p {
          margin: 0;
          color: var(--muted);
          font-size: 15.5px;
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
          border-radius: var(--radius);
          background: #ffffff;
          border: 1px solid var(--line);
          box-shadow: var(--shadowSoft);
        }

        .faqItem h3 {
          margin: 0;
          font-size: 18px;
          letter-spacing: -0.02em;
        }

        .faqItem p {
          margin: 10px 0 0;
          color: var(--muted);
          font-size: 15.5px;
          line-height: 1.6;
        }

        .visitBox {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 26px;
          padding: 28px;
          border-radius: var(--radiusLarge);
          background: linear-gradient(135deg, #003f4a, #007889);
          color: #ffffff;
          box-shadow: var(--shadow);
        }

        .visitBox h2 {
          margin: 0;
          font-size: clamp(30px, 3.5vw, 46px);
          line-height: 1.05;
          letter-spacing: -0.045em;
        }

        .visitBox p {
          margin: 14px 0 0;
          color: rgba(255, 255, 255, 0.84);
          font-size: 16.5px;
          line-height: 1.65;
        }

        .visitAddress {
          margin-top: 18px;
          padding: 16px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.16);
          font-weight: 900;
          line-height: 1.45;
        }

        .hoursList {
          padding: 18px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.16);
        }

        .hoursList h3 {
          margin: 0 0 10px;
          font-size: 22px;
        }

        .hourRow {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.14);
        }

        .hourRow:last-child {
          border-bottom: 0;
        }

        .hourRow strong {
          color: #ffffff;
        }

        .hourRow span {
          color: rgba(255, 255, 255, 0.84);
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
          align-items: center;
          gap: 20px;
        }

        .socials {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .socials a {
          color: var(--teal2);
          font-weight: 950;
          text-decoration: none;
        }

        .mobileCta {
          display: none;
        }

        @media (max-width: 1080px) {
          .navLinks {
            gap: 12px;
            font-size: 13px;
          }

          .heroGrid {
            grid-template-columns: 1fr;
          }

          .hero h1 {
            max-width: 900px;
          }

          .heroText {
            max-width: 900px;
          }

          .howGrid,
          .whyGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .selectionGrid,
          .featureGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .twoCol,
          .visitBox {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 860px) {
          .nav {
            min-height: auto;
            padding: 14px 0;
            align-items: flex-start;
          }

          .navLinks {
            display: none;
          }

          .navActions .buttonPrimary {
            display: none;
          }

          .sectionHeader {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }

        @media (max-width: 640px) {
          .container {
            width: min(100% - 28px, 1180px);
          }

          .logoMark {
            width: 40px;
            height: 40px;
            border-radius: 13px;
          }

          .logoText strong {
            font-size: 19px;
          }

          .logoText span {
            font-size: 10.5px;
          }

          .languageSelect {
            max-width: 94px;
            padding: 9px 8px;
            font-size: 12px;
          }

          .hero {
            padding: 32px 0 26px;
          }

          .eyebrowRow {
            margin-bottom: 16px;
          }

          .pill {
            font-size: 10.5px;
            padding: 8px 11px;
          }

          .hero h1 {
            font-size: clamp(35px, 11vw, 48px);
          }

          .heroText {
            font-size: 16.5px;
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
            padding: 9px;
            border-radius: 24px;
          }

          .heroImageWrap {
            border-radius: 18px;
          }

          .heroCaption {
            font-size: 12.5px;
            left: 10px;
            right: 10px;
            bottom: 10px;
          }

          section {
            padding: 40px 0;
          }

          .howGrid,
          .whyGrid,
          .selectionGrid,
          .featureGrid,
          .reviewsGrid,
          .faqGrid {
            grid-template-columns: 1fr;
          }

          .stepCard {
            min-height: auto;
          }

          .productImage,
          .featureCard img {
            height: 168px;
          }

          .infoPanel img {
            height: 188px;
          }

          .visitBox {
            padding: 22px;
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
            z-index: 60;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }

          .mobileCta .button {
            min-height: 48px;
            box-shadow: 0 14px 30px rgba(6, 52, 59, 0.2);
          }

          .footer {
            padding-bottom: 92px;
          }
        }
      `}</style>

      <div className="page">
        <header className="topbar">
          <div className="container nav">
            <a className="logo" href="#home" aria-label="Crab Talk home">
              <div className="logoMark">🦀</div>
              <div className="logoText">
                <strong>Crab Talk</strong>
                <span>{t.brandLine}</span>
              </div>
            </a>

            <nav className="navLinks" aria-label="Main navigation">
              <a href="#home">{t.navBrand}</a>
              <a href="#selection">{t.navSelection}</a>
              <a href="#how">{t.navHow}</a>
              <a href="#reviews">{t.navReviews}</a>
              <a href="#visit">{t.navFind}</a>
            </nav>

            <div className="navActions">
              <select
                className="languageSelect"
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
                aria-label={t.language}
              >
                <option value="en">EN</option>
                <option value="zh">中文</option>
                <option value="ja">日本語</option>
              </select>

              <a className="button buttonPrimary" href={LINKS.whatsapp}>
                {t.navWhatsapp}
              </a>
            </div>
          </div>
        </header>

        <main>
          <section className="hero" id="home">
            <div className="container heroGrid">
              <div>
                <div className="eyebrowRow">
                  <span className="pill pillGold">{t.heroBadge}</span>
                  <span className="pill">
                    {t.today}: {todayHours.day} {todayHours.hours}
                  </span>
                </div>

                <h1>{t.heroTitle}</h1>

                <p className="heroText">{t.heroText}</p>
                <p className="heroNote">{t.heroNote}</p>

                <div className="heroCtas">
                  <a
                    className="button buttonGold"
                    href={LINKS.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.ctaVisit}
                  </a>

                  <a className="button buttonPrimary" href={LINKS.whatsapp}>
                    {t.ctaWhatsapp}
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
                      {t.ctaVisit}
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

          <section className="howSection" id="how">
            <div className="container">
              <div className="sectionHeader">
                <div>
                  <p className="sectionKicker">Clear buying process</p>
                  <h2>{t.howTitle}</h2>
                </div>
                <p>{t.howSub}</p>
              </div>

              <div className="howGrid">
                <article className="stepCard">
                  <div className="stepNumber">1</div>
                  <h3>{t.step1Title}</h3>
                  <p>{t.step1Text}</p>
                </article>

                <article className="stepCard">
                  <div className="stepNumber">2</div>
                  <h3>{t.step2Title}</h3>
                  <p>{t.step2Text}</p>
                </article>

                <article className="stepCard">
                  <div className="stepNumber">3</div>
                  <h3>{t.step3Title}</h3>
                  <p>{t.step3Text}</p>
                </article>

                <article className="stepCard">
                  <div className="stepNumber">4</div>
                  <h3>{t.step4Title}</h3>
                  <p>{t.step4Text}</p>
                </article>
              </div>
            </div>
          </section>

          <section id="selection">
            <div className="container">
              <div className="sectionHeader">
                <div>
                  <p className="sectionKicker">Live seafood tanks</p>
                  <h2>{t.freshTitle}</h2>
                </div>
                <p>{t.freshSub}</p>
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

          <section>
            <div className="container">
              <div className="sectionHeader">
                <div>
                  <p className="sectionKicker">Why visit us</p>
                  <h2>{t.whyTitle}</h2>
                </div>
                <p>{t.whySub}</p>
              </div>

              <div className="whyGrid">
                <article className="whyCard">
                  <div className="whyIcon">🦀</div>
                  <h3>{t.why1Title}</h3>
                  <p>{t.why1Text}</p>
                </article>

                <article className="whyCard">
                  <div className="whyIcon">🌊</div>
                  <h3>{t.why2Title}</h3>
                  <p>{t.why2Text}</p>
                </article>

                <article className="whyCard">
                  <div className="whyIcon">🔪</div>
                  <h3>{t.why3Title}</h3>
                  <p>{t.why3Text}</p>
                </article>

                <article className="whyCard">
                  <div className="whyIcon">💬</div>
                  <h3>{t.why4Title}</h3>
                  <p>{t.why4Text}</p>
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
                  <h3>{t.cookingTitle}</h3>
                  <p>{t.cookingText}</p>
                </div>
              </article>
            </div>
          </section>

          <section id="features">
            <div className="container">
              <div className="sectionHeader">
                <div>
                  <p className="sectionKicker">Social proof</p>
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

          <section id="reviews">
            <div className="container">
              <div className="sectionHeader">
                <div>
                  <p className="sectionKicker">Customer confidence</p>
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
                  <p className="sectionKicker" style={{ color: "#fff0b7" }}>
                    Commonwealth Crescent
                  </p>
                  <h2>{t.visitTitle}</h2>
                  <p>{t.visitSub}</p>

                  <div className="visitAddress">{ADDRESS}</div>

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
                      {t.ctaVisit}
                    </a>
                  </div>
                </div>

                <div className="hoursList">
                  <h3>{t.openingHours}</h3>

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
