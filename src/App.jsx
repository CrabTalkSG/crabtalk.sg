import React, { useEffect, useMemo, useState } from "react";

const WA_LINK = "https://wa.me/6598398671";
const MAP_LINK = "https://maps.app.goo.gl/1GKdK2y6jpbqfg8N8?g_st=ac";
const TELEGRAM_LINK = "https://t.me/CrabTalkSG";

const img = (file) => `/images/${file}`;

const languages = {
  en: "EN",
  zh: "中文",
  ja: "日本語",
};

const copy = {
  en: {
    nav: {
      selection: "Selection",
      home: "Home Cooking",
      features: "Features",
      visit: "Visit",
    },
    heroBadge: "Live seafood • Home cooking • Cooked nearby by request",
    heroTitle: "Live Seafood Supply @ Crab Talk",
    heroText:
      "Choose premium live seafood from our tanks and bring it home fresh, or ask about cooking options nearby when capacity allows.",
    address: "31 Commonwealth Crescent #01-41/42/43 S(149644)",
    whatsapp: "WhatsApp to Reserve",
    directions: "Get Directions",
    telegram: "Join Telegram",
    freshTitle: "Fresh Daily Selection",
    freshSub:
      "Availability changes daily. Walk-in is welcome, pre-order is recommended for premium crabs, lobsters, oysters, and live fish.",
    homeTitle: "Best For Home Cooking",
    homeText:
      "Pick your live seafood and prepare it your way at home: steamed crab, chilli crab, black pepper crab, lobster noodles, live fish steaming, oysters, and clams.",
    faiKeeTitle: "Nearby Cooking Option",
    faiKeeText:
      "Selected seafood can be cooked nearby by Fai Kee when timeslots are available. Pre-booking is strongly recommended as capacity may be limited.",
    featureTitle: "Featured & Shared Online",
    featureSub:
      "Crab Talk has been featured by food media and creators for our live seafood concept at Commonwealth.",
    reviewsTitle: "Why Customers Visit Crab Talk",
    reviewsSub:
      "Customers often mention fresh live seafood, friendly service, practical cooking advice, and the convenience of buying seafood in a market setting.",
    hoursTitle: "Opening Hours",
    locationTitle: "Visit Us",
    note:
      "Operating hours and seafood availability may change during peak periods. Message us before coming down for specific items.",
  },
  zh: {
    nav: {
      selection: "海鲜选择",
      home: "回家料理",
      features: "媒体介绍",
      visit: "到访",
    },
    heroBadge: "活海鲜 • 回家料理 • 可询问附近代煮",
    heroTitle: "Crab Talk 活海鲜供应",
    heroText:
      "现场挑选优质活海鲜，可带回家新鲜料理；如需附近代煮，可先询问当天时段。",
    address: "31 Commonwealth Crescent #01-41/42/43 S(149644)",
    whatsapp: "WhatsApp 预订",
    directions: "Google 地图",
    telegram: "加入 Telegram",
    freshTitle: "每日新鲜选择",
    freshSub:
      "货量每日不同。欢迎直接到店，优质螃蟹、龙虾、生蚝及活鱼建议提前预订。",
    homeTitle: "适合回家料理",
    homeText:
      "挑选活海鲜后回家料理：清蒸螃蟹、辣椒螃蟹、黑胡椒螃蟹、龙虾面、清蒸活鱼、生蚝和蛤蜊等。",
    faiKeeTitle: "附近代煮选择",
    faiKeeText:
      "部分海鲜可在附近 Fai Kee 代煮，视当天时段与厨房容量而定。建议提前预约。",
    featureTitle: "媒体与创作者介绍",
    featureSub:
      "Crab Talk 的活海鲜概念曾被美食媒体及创作者分享。",
    reviewsTitle: "顾客为什么选择 Crab Talk",
    reviewsSub:
      "顾客常提到活海鲜新鲜、服务友善、料理建议实用，以及市场购买海鲜的便利性。",
    hoursTitle: "营业时间",
    locationTitle: "到店地址",
    note:
      "营业时间和海鲜供应可能因高峰期调整。若要指定海鲜，建议先发信息确认。",
  },
  ja: {
    nav: {
      selection: "海鮮ラインナップ",
      home: "自宅調理",
      features: "掲載・紹介",
      visit: "アクセス",
    },
    heroBadge: "活き海鮮 • 自宅調理 • 近隣調理は要確認",
    heroTitle: "Crab Talk 活き海鮮販売",
    heroText:
      "水槽から新鮮な活き海鮮を選び、ご自宅で調理できます。近隣での調理対応は当日の空き状況をご確認ください。",
    address: "31 Commonwealth Crescent #01-41/42/43 S(149644)",
    whatsapp: "WhatsAppで予約",
    directions: "Google Maps",
    telegram: "Telegramに参加",
    freshTitle: "本日の新鮮ラインナップ",
    freshSub:
      "入荷状況は日によって変わります。プレミアム蟹、ロブスター、牡蠣、活魚は事前予約がおすすめです。",
    homeTitle: "自宅調理におすすめ",
    homeText:
      "活き海鮮を選んで、ご自宅で蒸し蟹、チリクラブ、ブラックペッパークラブ、ロブスター麺、活魚の蒸し料理などを楽しめます。",
    faiKeeTitle: "近隣調理オプション",
    faiKeeText:
      "一部の海鮮は近隣の Fai Kee で調理可能な場合があります。対応は当日の空き状況によりますので事前予約をおすすめします。",
    featureTitle: "メディア・SNS紹介",
    featureSub:
      "Crab Talk の活き海鮮コンセプトは、フードメディアやクリエイターにも紹介されています。",
    reviewsTitle: "Crab Talk が選ばれる理由",
    reviewsSub:
      "新鮮な活き海鮮、親切な接客、実用的な調理アドバイス、マーケットで買える便利さがよく評価されています。",
    hoursTitle: "営業時間",
    locationTitle: "アクセス",
    note:
      "営業時間と入荷状況はピーク時に変更となる場合があります。特定の商品は事前にお問い合わせください。",
  },
};

const hours = [
  ["Thursday", "8 am – 7 pm"],
  ["Friday", "8 am – 8 pm"],
  ["Saturday", "8 am – 8 pm"],
  ["Sunday", "8 am – 5 pm"],
  ["Monday", "12 pm – 5 pm"],
  ["Tuesday", "8 am – 7 pm"],
  ["Wednesday", "8 am – 7 pm"],
];

const heroSlides = [
  {
    image: img("feature-8days-original-thumbnail.jpg"),
    title: "As Featured on 8 Days",
  },
  {
    image: img("product-live-crab-premium.jpg"),
    title: "Premium Live Crabs",
  },
  {
    image: img("product-yellow-roe-crab-06.jpg"),
    title: "Sri Lanka Yellow Roe Crabs",
  },
  {
    image: img("dish-lobster-yee-mee-fai-kee-hero.jpg"),
    title: "Lobster Yee Mee",
  },
  {
    image: img("stall-crab-talk-front-01.jpg"),
    title: "Visit Us at Commonwealth",
  },
];

const products = [
  {
    title: {
      en: "Live Mud Crabs",
      zh: "活泥蟹",
      ja: "活きマッドクラブ",
    },
    text: {
      en: "Meaty, active crabs selected for steaming, chilli crab, black pepper crab, or ginger scallion crab.",
      zh: "肉质饱满，适合清蒸、辣椒蟹、黑胡椒蟹或姜葱蟹。",
      ja: "身入りの良い活き蟹。蒸し蟹、チリクラブ、ブラックペッパー、姜葱炒めにおすすめ。",
    },
    image: img("product-live-crab-premium.jpg"),
    tag: "Live",
  },
  {
    title: {
      en: "Sri Lanka Roe Crabs",
      zh: "斯里兰卡膏蟹",
      ja: "スリランカ産 Roe Crab",
    },
    text: {
      en: "Premium roe crabs, popular for rich roe, firm meat, and special home dining occasions.",
      zh: "膏香浓郁、肉质结实，适合家庭聚餐和特别场合。",
      ja: "濃厚な蟹味噌としっかりした身が人気。特別な食卓に最適。",
    },
    image: img("product-yellow-roe-crab-06.jpg"),
    tag: "Premium",
  },
  {
    title: {
      en: "Live Lobsters",
      zh: "活龙虾",
      ja: "活きロブスター",
    },
    text: {
      en: "Boston lobster and green lobster options depending on daily arrival.",
      zh: "视每日到货情况供应波士顿龙虾、青龙虾等。",
      ja: "入荷状況によりボストンロブスター、グリーンロブスターなどをご用意。",
    },
    image: img("product-boston-lobster-display.jpg"),
    tag: "Daily Arrival",
  },
  {
    title: {
      en: "Fresh Oysters",
      zh: "新鲜生蚝",
      ja: "新鮮な牡蠣",
    },
    text: {
      en: "Cold, clean, and suitable for seafood platters, gatherings, or premium home meals.",
      zh: "鲜冷干净，适合海鲜拼盘、聚会或高级家庭餐。",
      ja: "冷たく新鮮。シーフードプレートやホームパーティーにおすすめ。",
    },
    image: img("product-oysters-premium-02.jpg"),
    tag: "Fresh",
  },
  {
    title: {
      en: "Manila Clams",
      zh: "马尼拉蛤蜊",
      ja: "マニラアサリ",
    },
    text: {
      en: "Great for steaming, white wine style, chilli lala, soup, or quick home cooking.",
      zh: "适合清蒸、白酒煮、辣椒啦啦、汤类或简单家常料理。",
      ja: "蒸し料理、白ワイン蒸し、チリララ、スープなどに最適。",
    },
    image: img("product-manila-clams-01.jpg"),
    tag: "Home Cook",
  },
  {
    title: {
      en: "Live Soon Hock & Premium Fish",
      zh: "活笋壳鱼与优质活鱼",
      ja: "活きSoon Hock・高級魚",
    },
    text: {
      en: "Live fish options for steaming, Hong Kong style, Teochew style, or home cooking.",
      zh: "适合清蒸、港式蒸、潮州式或家庭料理。",
      ja: "香港蒸し、潮州風、家庭での蒸し料理におすすめ。",
    },
    image: img("product-live-soon-hock-premium-fish.jpg"),
    fallback: img("product-live-soon-hock-01.jpg"),
    tag: "Live Fish",
  },
];

const features = [
  {
    title: "8 Days Feature",
    text: "Live seafood and nearby cooking concept at Commonwealth Crescent.",
    image: img("feature-8days-original-thumbnail.jpg"),
    link: "https://www.8days.sg/eatanddrink/hawkerfood/commonwealth-crab-talk-fai-kee-live-seafood-hawker-collab-856541",
  },
  {
    title: "Botak Jazz TikTok",
    text: "Lobster yee mee feature and live seafood dining experience.",
    image: img("feature-botak-jazz-tiktok.jpg"),
    link: "https://www.tiktok.com/@botakjazz/video/7602204733155364116",
  },
  {
    title: "Crab Seller Using AI",
    text: "A look at how Crab Talk uses AI tools for daily business work.",
    image: img("AI-feature.jpeg"),
    link: "https://www.facebook.com/share/v/1Djwg4h7UP/",
  },
];

const homeIdeas = [
  "Steamed Roe Crab",
  "Chilli Crab",
  "Black Pepper Crab",
  "Lobster Noodles",
  "Steamed Soon Hock",
  "Fresh Oysters",
  "Manila Clams",
];

function SmartImage({ src, fallback, alt, className }) {
  const [source, setSource] = useState(src);

  return (
    <img
      src={source}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => {
        if (fallback && source !== fallback) setSource(fallback);
      }}
    />
  );
}

function App() {
  const [lang, setLang] = useState("en");
  const [slide, setSlide] = useState(0);

  const t = copy[lang];

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((current) => (current + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const currentSlide = heroSlides[slide];

  const productCards = useMemo(() => products, []);

  return (
    <div className="page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #03181d;
          color: #ffffff;
          font-family: Arial, Helvetica, sans-serif;
        }

        a {
          color: inherit;
        }

        .page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(0, 183, 255, 0.16), transparent 34rem),
            radial-gradient(circle at top right, rgba(255, 198, 93, 0.10), transparent 36rem),
            linear-gradient(180deg, #03181d 0%, #061f26 45%, #021115 100%);
          color: #ffffff;
        }

        .container {
          width: min(1160px, calc(100% - 36px));
          margin: 0 auto;
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 20;
          backdrop-filter: blur(18px);
          background: rgba(2, 17, 21, 0.78);
          border-bottom: 1px solid rgba(255, 255, 255, 0.10);
        }

        .topbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          min-height: 76px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }

        .brand-mark {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, #00b7ff, #f7c76a);
          color: #03181d;
          font-size: 24px;
          box-shadow: 0 12px 36px rgba(0, 183, 255, 0.25);
        }

        .brand-title {
          font-size: 19px;
          font-weight: 900;
          letter-spacing: 0.2px;
          white-space: nowrap;
        }

        .brand-sub {
          font-size: 12px;
          color: #a9c7ce;
          margin-top: 3px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 340px;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .nav a {
          text-decoration: none;
          color: #cfe8ef;
          font-size: 14px;
          font-weight: 700;
          opacity: 0.92;
        }

        .lang-switch {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 5px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
        }

        .lang-switch button {
          border: 0;
          color: #cfe8ef;
          background: transparent;
          padding: 8px 10px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
        }

        .lang-switch button.active {
          color: #021115;
          background: #f7c76a;
        }

        .hero {
          padding: 54px 0 38px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 34px;
          align-items: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 13px;
          border: 1px solid rgba(247, 199, 106, 0.35);
          border-radius: 999px;
          color: #f7d990;
          background: rgba(247, 199, 106, 0.08);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.2px;
        }

        h1 {
          font-size: clamp(42px, 6vw, 76px);
          line-height: 0.96;
          margin: 22px 0 18px;
          letter-spacing: -2.4px;
        }

        .hero-text {
          color: #c6dce2;
          font-size: 18px;
          line-height: 1.65;
          max-width: 620px;
          margin: 0 0 18px;
        }

        .address-line {
          color: #ffffff;
          font-weight: 800;
          margin: 18px 0 0;
          font-size: 15px;
        }

        .cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 26px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 48px;
          padding: 0 18px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 900;
          font-size: 14px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
        }

        .btn:hover {
          transform: translateY(-2px);
          border-color: rgba(247, 199, 106, 0.55);
        }

        .btn-primary {
          background: linear-gradient(135deg, #00b7ff, #24d2ff);
          color: #021115;
          border-color: transparent;
          box-shadow: 0 16px 42px rgba(0, 183, 255, 0.25);
        }

        .btn-gold {
          background: linear-gradient(135deg, #f7c76a, #ffe2a0);
          color: #06151a;
          border-color: transparent;
        }

        .btn-ghost {
          color: #d8edf2;
          background: rgba(255, 255, 255, 0.06);
        }

        .hero-card {
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.06);
          border-radius: 30px;
          padding: 14px;
          box-shadow: 0 28px 90px rgba(0, 0, 0, 0.35);
        }

        .hero-image-frame {
          width: 100%;
          height: 370px;
          border-radius: 22px;
          overflow: hidden;
          background: #041519;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-image-frame img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        .slide-caption {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          padding: 14px 5px 2px;
          color: #d7eef4;
          font-weight: 900;
        }

        .dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.28);
        }

        .dot.active {
          background: #f7c76a;
        }

        .section {
          padding: 44px 0;
        }

        .section-head {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 22px;
        }

        .section-kicker {
          color: #f7c76a;
          font-weight: 900;
          font-size: 13px;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        h2 {
          font-size: clamp(30px, 4vw, 46px);
          line-height: 1.05;
          letter-spacing: -1.3px;
          margin: 0;
        }

        .section-sub {
          max-width: 610px;
          color: #bfd6dc;
          line-height: 1.6;
          font-size: 16px;
          margin: 10px 0 0;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .product-card {
          border: 1px solid rgba(255, 255, 255, 0.13);
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.045));
          border-radius: 26px;
          overflow: hidden;
          box-shadow: 0 18px 60px rgba(0, 0, 0, 0.22);
        }

        .product-photo {
          height: 190px;
          background: #06191e;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .product-photo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        .product-body {
          padding: 18px 18px 20px;
        }

        .tag {
          display: inline-flex;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(247, 199, 106, 0.12);
          color: #f7d990;
          font-size: 12px;
          font-weight: 900;
          margin-bottom: 12px;
        }

        .product-body h3 {
          margin: 0 0 10px;
          font-size: 21px;
          line-height: 1.15;
        }

        .product-body p {
          margin: 0;
          color: #c2d8de;
          line-height: 1.55;
          font-size: 15px;
        }

        .two-col {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 18px;
        }

        .panel {
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.06);
          padding: 26px;
          box-shadow: 0 18px 60px rgba(0, 0, 0, 0.22);
        }

        .panel.home {
          background:
            linear-gradient(135deg, rgba(0, 183, 255, 0.14), rgba(247, 199, 106, 0.08)),
            rgba(255, 255, 255, 0.06);
        }

        .panel h3 {
          margin: 0 0 12px;
          font-size: 26px;
        }

        .panel p {
          margin: 0;
          color: #c7dce2;
          line-height: 1.65;
        }

        .idea-list {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 20px;
        }

        .idea {
          padding: 9px 12px;
          border-radius: 999px;
          color: #dff5fa;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.10);
          font-size: 13px;
          font-weight: 800;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .feature-card {
          border: 1px solid rgba(255, 255, 255, 0.13);
          background: rgba(255, 255, 255, 0.06);
          border-radius: 26px;
          overflow: hidden;
          text-decoration: none;
          box-shadow: 0 18px 60px rgba(0, 0, 0, 0.22);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          border-color: rgba(247, 199, 106, 0.45);
        }

        .feature-photo {
          height: 180px;
          background: #06191e;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .feature-photo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        .feature-body {
          padding: 18px;
        }

        .feature-body h3 {
          margin: 0 0 8px;
          font-size: 20px;
        }

        .feature-body p {
          margin: 0;
          color: #c2d8de;
          line-height: 1.55;
          font-size: 14px;
        }

        .visit-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .info-list {
          display: grid;
          gap: 11px;
          margin-top: 18px;
        }

        .info-row {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.10);
          color: #d7edf2;
        }

        .info-row strong {
          color: #ffffff;
        }

        .note {
          color: #a9c7ce;
          font-size: 13px;
          line-height: 1.55;
          margin-top: 18px;
        }

        .footer {
          padding: 34px 0 46px;
          color: #8fb0b8;
          font-size: 13px;
          border-top: 1px solid rgba(255, 255, 255, 0.10);
          margin-top: 30px;
        }

        .floating-wa {
          position: fixed;
          right: 18px;
          bottom: 18px;
          z-index: 30;
          display: none;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #00b7ff, #f7c76a);
          color: #021115;
          text-decoration: none;
          font-size: 25px;
          box-shadow: 0 16px 46px rgba(0, 0, 0, 0.35);
        }

        @media (max-width: 980px) {
          .nav {
            display: none;
          }

          .hero-grid,
          .two-col,
          .visit-grid {
            grid-template-columns: 1fr;
          }

          .hero {
            padding-top: 34px;
          }

          .hero-image-frame {
            height: 320px;
          }

          .product-grid,
          .feature-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .section-head {
            display: block;
          }
        }

        @media (max-width: 640px) {
          .container {
            width: min(100% - 26px, 1160px);
          }

          .topbar-inner {
            min-height: 70px;
          }

          .brand-mark {
            width: 38px;
            height: 38px;
            font-size: 20px;
          }

          .brand-title {
            font-size: 16px;
          }

          .brand-sub {
            max-width: 180px;
            font-size: 11px;
          }

          .lang-switch button {
            padding: 7px 8px;
            font-size: 11px;
          }

          h1 {
            font-size: 40px;
            letter-spacing: -1.5px;
          }

          .hero-text {
            font-size: 16px;
          }

          .cta-row {
            display: grid;
            grid-template-columns: 1fr;
          }

          .btn {
            width: 100%;
          }

          .hero-image-frame {
            height: 250px;
          }

          .product-grid,
          .feature-grid {
            grid-template-columns: 1fr;
          }

          .product-photo {
            height: 165px;
          }

          .feature-photo {
            height: 165px;
          }

          .panel {
            padding: 22px;
            border-radius: 24px;
          }

          .product-card,
          .feature-card {
            border-radius: 22px;
          }

          .section {
            padding: 34px 0;
          }

          .floating-wa {
            display: flex;
          }
        }
      `}</style>

      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand">
            <div className="brand-mark">🦀</div>
            <div>
              <div className="brand-title">Crab Talk SG</div>
              <div className="brand-sub">{t.address}</div>
            </div>
          </div>

          <nav className="nav">
            <a href="#selection">{t.nav.selection}</a>
            <a href="#home-cooking">{t.nav.home}</a>
            <a href="#features">{t.nav.features}</a>
            <a href="#visit">{t.nav.visit}</a>
          </nav>

          <div className="lang-switch" aria-label="Language selector">
            {Object.entries(languages).map(([key, label]) => (
              <button
                key={key}
                className={lang === key ? "active" : ""}
                onClick={() => setLang(key)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="badge">✦ {t.heroBadge}</div>
              <h1>{t.heroTitle}</h1>
              <p className="hero-text">{t.heroText}</p>
              <p className="address-line">📍 {t.address}</p>

              <div className="cta-row">
                <a className="btn btn-primary" href={WA_LINK} target="_blank" rel="noreferrer">
                  {t.whatsapp}
                </a>
                <a className="btn btn-gold" href={MAP_LINK} target="_blank" rel="noreferrer">
                  {t.directions}
                </a>
                <a className="btn btn-ghost" href={TELEGRAM_LINK} target="_blank" rel="noreferrer">
                  {t.telegram}
                </a>
              </div>
            </div>

            <div className="hero-card">
              <div className="hero-image-frame">
                <SmartImage src={currentSlide.image} alt={currentSlide.title} />
              </div>
              <div className="slide-caption">
                <span>{currentSlide.title}</span>
                <div className="dots">
                  {heroSlides.map((_, index) => (
                    <span
                      key={index}
                      className={`dot ${index === slide ? "active" : ""}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="selection">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-kicker">Live Seafood</div>
                <h2>{t.freshTitle}</h2>
                <p className="section-sub">{t.freshSub}</p>
              </div>
            </div>

            <div className="product-grid">
              {productCards.map((item) => (
                <article className="product-card" key={item.title.en}>
                  <div className="product-photo">
                    <SmartImage
                      src={item.image}
                      fallback={item.fallback}
                      alt={item.title[lang]}
                    />
                  </div>
                  <div className="product-body">
                    <span className="tag">{item.tag}</span>
                    <h3>{item.title[lang]}</h3>
                    <p>{item.text[lang]}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="home-cooking">
          <div className="container two-col">
            <div className="panel home">
              <div className="section-kicker">Recommended</div>
              <h3>{t.homeTitle}</h3>
              <p>{t.homeText}</p>

              <div className="idea-list">
                {homeIdeas.map((idea) => (
                  <span className="idea" key={idea}>
                    {idea}
                  </span>
                ))}
              </div>
            </div>

            <div className="panel">
              <div className="section-kicker">By Request</div>
              <h3>{t.faiKeeTitle}</h3>
              <p>{t.faiKeeText}</p>
            </div>
          </div>
        </section>

        <section className="section" id="features">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-kicker">Social Proof</div>
                <h2>{t.featureTitle}</h2>
                <p className="section-sub">{t.featureSub}</p>
              </div>
            </div>

            <div className="feature-grid">
              {features.map((feature) => (
                <a
                  className="feature-card"
                  href={feature.link}
                  target="_blank"
                  rel="noreferrer"
                  key={feature.title}
                >
                  <div className="feature-photo">
                    <SmartImage src={feature.image} alt={feature.title} />
                  </div>
                  <div className="feature-body">
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="panel">
              <div className="section-kicker">Customer Feedback</div>
              <h3>{t.reviewsTitle}</h3>
              <p>{t.reviewsSub}</p>
            </div>
          </div>
        </section>

        <section className="section" id="visit">
          <div className="container visit-grid">
            <div className="panel">
              <div className="section-kicker">Location</div>
              <h3>{t.locationTitle}</h3>
              <p>{t.address}</p>

              <div className="cta-row">
                <a className="btn btn-gold" href={MAP_LINK} target="_blank" rel="noreferrer">
                  {t.directions}
                </a>
                <a className="btn btn-primary" href={WA_LINK} target="_blank" rel="noreferrer">
                  {t.whatsapp}
                </a>
                <a className="btn btn-ghost" href={TELEGRAM_LINK} target="_blank" rel="noreferrer">
                  {t.telegram}
                </a>
              </div>

              <p className="note">{t.note}</p>
            </div>

            <div className="panel">
              <div className="section-kicker">Business Hours</div>
              <h3>{t.hoursTitle}</h3>

              <div className="info-list">
                {hours.map(([day, time]) => (
                  <div className="info-row" key={day}>
                    <strong>{day}</strong>
                    <span>{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          © Crab Talk SG • Live Seafood Supply @ Crab Talk • {t.address}
        </div>
      </footer>

      <a className="floating-wa" href={WA_LINK} target="_blank" rel="noreferrer">
        💬
      </a>
    </div>
  );
}

export default App;
