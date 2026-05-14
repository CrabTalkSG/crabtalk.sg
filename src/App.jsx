import React, { useEffect, useState } from "react";

const img = (name) => `/images/${name}`;

const whatsappLink = "https://wa.me/6598398671";
const telegramLink = "https://t.me/CrabTalkSG";
const mapsLink = "https://maps.app.goo.gl/1GKdK2y6jpbqfg8N8?g_st=ac";

const heroImages = [
  img("product-yellow-roe-crab-06.jpg"),
  img("product-live-crab-premium.jpg"),
  img("product-boston-lobster-display.jpg"),
  img("feature-8days-original-thumbnail.jpg"),
  img("feature-botak-jazz-tiktok.jpg"),
];

const content = {
  en: {
    brandSub: "31 Commonwealth Crescent #01-41/42/43 S(149644)",
    nav: {
      seafood: "Seafood",
      how: "How It Works",
      telegram: "Telegram",
      features: "Features",
      visit: "Visit",
      whatsapp: "WhatsApp",
    },
    eyebrow: "Live Seafood • Fresh Daily • Singapore",
    heroTitle: "Premium live seafood for home cooking.",
    heroCopy:
      "Pick your live crabs, lobsters, oysters, clams, and premium fish directly from Crab Talk. Fresh daily selections for families, gatherings, and seafood lovers who want restaurant-quality seafood at home.",
    visitUs: "Visit us:",
    address: "31 Commonwealth Crescent #01-41/42/43 S(149644)",
    whatsappReserve: "WhatsApp to Reserve",
    telegramJoin: "Join Telegram Updates",
    maps: "Open Google Maps",
    heroBadge: "Daily arrivals vary. Telegram updates first.",

    whyChoose: [
      {
        title: "Freshness You Can See",
        text: "Choose live seafood directly from our tanks before bringing it home.",
      },
      {
        title: "Reserve Before Coming",
        text: "Popular items move fast. Message us to check today’s availability first.",
      },
      {
        title: "Daily Telegram Updates",
        text: "Join our Telegram group to see fresh arrivals, limited drops and sold-out updates.",
      },
    ],

    freshKicker: "Fresh Daily Selection",
    freshTitle: "Choose your seafood",
    freshDesc:
      "Our focus is live seafood supply: selected, packed, and ready for home cooking. Availability depends on daily stock.",

    freshSelection: [
      {
        title: "Live Mud Crabs",
        text: "Meaty, active mud crabs selected for steaming, chilli crab, black pepper crab, or ginger scallion crab.",
        image: img("product-live-crab-premium.jpg"),
      },
      {
        title: "Sri Lanka Roe Crabs",
        text: "Premium roe crabs with rich flavour, firm meat, and beautiful roe. Popular for home steaming and family occasions.",
        image: img("product-yellow-roe-crab-06.jpg"),
      },
      {
        title: "Live Lobsters",
        text: "Boston lobster and green lobster selections depending on daily arrival. Suitable for steaming, yee mee, or bee hoon.",
        image: img("product-boston-lobster-display.jpg"),
      },
      {
        title: "Fresh Oysters",
        text: "Cold, clean, and suitable for seafood platters, gatherings, or premium home dining.",
        image: img("product-oysters-premium-02.jpg"),
      },
      {
        title: "Manila Clams",
        text: "Great for steaming, chilli lala, white wine style, or seafood soup.",
        image: img("product-manila-clams-01.jpg"),
      },
      {
        title: "Soon Hock & Premium Fish",
        text: "Live fish options for steaming, Hong Kong style, or home cooking.",
        image: img("product-live-soon-hock-premium-fish.jpg"),
      },
    ],

    howKicker: "How It Works",
    howTitle: "Simple seafood buying experience",
    howDesc:
      "Designed mainly for customers who want to buy live seafood and cook it fresh at home.",
    steps: [
      {
        number: "01",
        title: "Check Today’s Stock",
        text: "Join Telegram or message us on WhatsApp to check available seafood, sizes and recommendations.",
      },
      {
        number: "02",
        title: "Reserve Your Pick",
        text: "Reserve your preferred crab, lobster, oysters, clams or premium fish before coming down.",
      },
      {
        number: "03",
        title: "Collect & Cook Fresh",
        text: "Bring home and cook your way, or ask us about nearby cooking options when available.",
      },
    ],

    telegramKicker: "Daily Seafood Updates",
    telegramTitle: "Join Crab Talk on Telegram",
    telegramText:
      "Get faster updates on today’s arrivals, limited seafood drops, popular sizes, reservation reminders and sold-out notices.",
    telegramButton: "Join t.me/CrabTalkSG",
    telegramPoints: [
      "🦀 See fresh arrivals before heading down",
      "🦞 Limited items and promo updates",
      "⚠️ Sold-out notices and reservation reminders",
    ],

    featuresKicker: "Media & Social Features",
    featuresTitle: "As seen online",
    featuresDesc:
      "Crab Talk has been featured by local food media and content creators for live seafood, lobster yee mee, and our market-style seafood experience.",
    viewFeature: "View feature →",

    featureCards: [
      {
        title: "Featured on 8 Days",
        text: "Crab Talk’s live seafood and hawker-style cooked seafood collaboration was featured by 8 Days.",
        image: img("feature-8days-original-thumbnail.jpg"),
        link: "https://www.8days.sg/eatanddrink/hawkerfood/commonwealth-crab-talk-fai-kee-live-seafood-hawker-collab-856541",
      },
      {
        title: "Featured by Botak Jazz",
        text: "Botak Jazz tried the lobster yee mee and shared the experience on TikTok.",
        image: img("botak-jazz-feature.jpg"),
        link: "https://www.tiktok.com/@botakjazz/video/7602204733155364116",
      },
      {
        title: "AI in Daily Seafood Work",
        text: "Story feature on how Crab Talk uses AI in daily operations and customer communication.",
        image: img("AI-feature.jpeg"),
        link: "https://www.facebook.com/share/v/1Djwg4h7UP/",
      },
    ],

    visitKicker: "Visit Crab Talk",
    visitTitle: "Walk in or reserve before coming",
    visitText:
      "For the best selection, join Telegram for updates or message us before visiting. Live seafood availability changes daily, especially for roe crabs, lobsters, oysters, Soon Hock, and premium items.",
    getDirections: "Get Directions",
    footer: "© Crab Talk SG — Live Seafood Supply @ Crab Talk",
  },

  zh: {
    brandSub: "31 Commonwealth Crescent #01-41/42/43 S(149644)",
    nav: {
      seafood: "海鲜",
      how: "购买方式",
      telegram: "Telegram",
      features: "媒体报道",
      visit: "到店",
      whatsapp: "WhatsApp",
    },
    eyebrow: "活海鲜 • 每日新鲜到货 • 新加坡",
    heroTitle: "适合家里烹煮的高级活海鲜。",
    heroCopy:
      "在 Crab Talk 直接挑选活螃蟹、龙虾、生蚝、蛤蜊和高级活鱼。适合家庭聚餐、周末加菜，以及想在家享受餐厅级海鲜的顾客。",
    visitUs: "地址：",
    address: "31 Commonwealth Crescent #01-41/42/43 S(149644)",
    whatsappReserve: "WhatsApp 预订",
    telegramJoin: "加入 Telegram 看每日更新",
    maps: "打开 Google Maps",
    heroBadge: "每日到货不同，Telegram 优先更新。",

    whyChoose: [
      {
        title: "新鲜看得见",
        text: "顾客可直接从水缸挑选活海鲜，再带回家烹煮。",
      },
      {
        title: "建议先预订",
        text: "热门海鲜很快售完。来之前可先联系我们确认当天货源。",
      },
      {
        title: "Telegram 每日更新",
        text: "加入我们的 Telegram，查看新货、限量海鲜和售完通知。",
      },
    ],

    freshKicker: "每日新鲜选择",
    freshTitle: "选择你的海鲜",
    freshDesc:
      "我们主要供应活海鲜：现选、打包，适合带回家新鲜烹煮。货源以每日到货为准。",

    freshSelection: [
      {
        title: "活肉蟹",
        text: "肉质饱满、活力好的泥蟹，适合清蒸、辣椒蟹、黑胡椒蟹或姜葱炒蟹。",
        image: img("product-live-crab-premium.jpg"),
      },
      {
        title: "斯里兰卡膏蟹",
        text: "高级膏蟹，蟹膏香浓、肉质结实，非常适合清蒸或家庭聚餐。",
        image: img("product-yellow-roe-crab-06.jpg"),
      },
      {
        title: "活龙虾",
        text: "每日视货源供应波士顿龙虾或青龙虾，适合清蒸、伊面或米粉。",
        image: img("product-boston-lobster-display.jpg"),
      },
      {
        title: "新鲜生蚝",
        text: "冰鲜干净，适合海鲜拼盘、聚会或高级家庭餐。",
        image: img("product-oysters-premium-02.jpg"),
      },
      {
        title: "马尼拉蛤蜊",
        text: "适合清蒸、辣椒啦啦、白酒煮法或海鲜汤。",
        image: img("product-manila-clams-01.jpg"),
      },
      {
        title: "笋壳鱼与高级活鱼",
        text: "适合清蒸、港式蒸鱼或家庭烹煮的活鱼选择。",
        image: img("product-live-soon-hock-premium-fish.jpg"),
      },
    ],

    howKicker: "购买方式",
    howTitle: "简单方便的活海鲜购买体验",
    howDesc: "主要适合想购买活海鲜并带回家新鲜烹煮的顾客。",
    steps: [
      {
        number: "01",
        title: "查看当天货源",
        text: "加入 Telegram 或通过 WhatsApp 联系我们，确认当天海鲜、尺寸和推荐。",
      },
      {
        number: "02",
        title: "预订想要的海鲜",
        text: "来店前可先预订螃蟹、龙虾、生蚝、蛤蜊或高级活鱼。",
      },
      {
        number: "03",
        title: "取货回家烹煮",
        text: "带回家用自己喜欢的方式烹煮；如有需要，也可询问当天附近是否有烹煮选择。",
      },
    ],

    telegramKicker: "每日海鲜更新",
    telegramTitle: "加入 Crab Talk Telegram",
    telegramText:
      "更快看到每日新货、限量海鲜、热门尺寸、预订提醒和售完通知。",
    telegramButton: "加入 t.me/CrabTalkSG",
    telegramPoints: [
      "🦀 来店前先看当天新货",
      "🦞 限量海鲜与促销更新",
      "⚠️ 售完通知与预订提醒",
    ],

    featuresKicker: "媒体与社交平台报道",
    featuresTitle: "线上推荐与报道",
    featuresDesc:
      "Crab Talk 曾被本地美食媒体和内容创作者介绍，内容包括活海鲜、龙虾伊面和市场式海鲜体验。",
    viewFeature: "查看报道 →",

    featureCards: [
      {
        title: "8 Days 报道",
        text: "Crab Talk 的活海鲜和熟食合作模式曾被 8 Days 介绍。",
        image: img("feature-8days-original-thumbnail.jpg"),
        link: "https://www.8days.sg/eatanddrink/hawkerfood/commonwealth-crab-talk-fai-kee-live-seafood-hawker-collab-856541",
      },
      {
        title: "Botak Jazz 推荐",
        text: "Botak Jazz 在 TikTok 分享了龙虾伊面的体验。",
        image: img("botak-jazz-feature.jpg"),
        link: "https://www.tiktok.com/@botakjazz/video/7602204733155364116",
      },
      {
        title: "AI 日常经营故事",
        text: "关于 Crab Talk 如何在日常经营和客户沟通中使用 AI 的故事。",
        image: img("AI-feature.jpeg"),
        link: "https://www.facebook.com/share/v/1Djwg4h7UP/",
      },
    ],

    visitKicker: "到访 Crab Talk",
    visitTitle: "欢迎到店，也建议先预订",
    visitText:
      "想要更多选择，建议先加入 Telegram 看更新，或来店前联系我们。膏蟹、龙虾、生蚝、笋壳鱼和高级海鲜货源每天不同。",
    getDirections: "路线导航",
    footer: "© Crab Talk SG — Live Seafood Supply @ Crab Talk",
  },

  ja: {
    brandSub: "31 Commonwealth Crescent #01-41/42/43 S(149644)",
    nav: {
      seafood: "海鮮",
      how: "購入方法",
      telegram: "Telegram",
      features: "掲載情報",
      visit: "アクセス",
      whatsapp: "WhatsApp",
    },
    eyebrow: "活き海鮮 • 毎日入荷 • シンガポール",
    heroTitle: "ご自宅で楽しめるプレミアム活き海鮮。",
    heroCopy:
      "Crab Talk では、活き蟹、ロブスター、牡蠣、アサリ、高級活魚を直接お選びいただけます。ご家庭での食事、週末のごちそう、海鮮好きの方におすすめです。",
    visitUs: "住所：",
    address: "31 Commonwealth Crescent #01-41/42/43 S(149644)",
    whatsappReserve: "WhatsAppで予約",
    telegramJoin: "Telegramで入荷情報を見る",
    maps: "Google Mapsを開く",
    heroBadge: "入荷状況は毎日変わります。Telegramで優先更新。",

    whyChoose: [
      {
        title: "見て分かる新鮮さ",
        text: "水槽から活きた海鮮を直接選び、ご自宅へお持ち帰りいただけます。",
      },
      {
        title: "来店前の予約がおすすめ",
        text: "人気商品は早く売り切れるため、事前に在庫確認がおすすめです。",
      },
      {
        title: "Telegramで毎日更新",
        text: "新入荷、限定商品、売り切れ情報をTelegramでお知らせします。",
      },
    ],

    freshKicker: "毎日の新鮮セレクション",
    freshTitle: "海鮮を選ぶ",
    freshDesc:
      "Crab Talk は活き海鮮の販売が中心です。お選びいただいた海鮮を包装し、ご自宅で新鮮に調理できます。",

    freshSelection: [
      {
        title: "活きマッドクラブ",
        text: "身入りの良い活き蟹。蒸し蟹、チリクラブ、ブラックペッパークラブ、ジンジャースキャリオンにおすすめです。",
        image: img("product-live-crab-premium.jpg"),
      },
      {
        title: "スリランカ産 蟹味噌・卵入り蟹",
        text: "濃厚な蟹味噌としっかりした身が特徴。蒸し料理や家族の食事に人気です。",
        image: img("product-yellow-roe-crab-06.jpg"),
      },
      {
        title: "活きロブスター",
        text: "入荷状況によりボストンロブスターやグリーンロブスターをご用意。蒸し料理、伊麺、ビーフンにおすすめです。",
        image: img("product-boston-lobster-display.jpg"),
      },
      {
        title: "新鮮な牡蠣",
        text: "冷たく清潔で、海鮮プレートや週末のごちそうにぴったりです。",
        image: img("product-oysters-premium-02.jpg"),
      },
      {
        title: "マニラアサリ",
        text: "蒸し料理、チリ風、白ワイン風、海鮮スープにおすすめです。",
        image: img("product-manila-clams-01.jpg"),
      },
      {
        title: "スーンホック＆高級活魚",
        text: "蒸し魚、香港風調理、ご家庭での海鮮料理に適した活魚をご用意しています。",
        image: img("product-live-soon-hock-premium-fish.jpg"),
      },
    ],

    howKicker: "購入方法",
    howTitle: "シンプルな活き海鮮の購入体験",
    howDesc:
      "活き海鮮を購入し、ご自宅で新鮮に調理したいお客様向けです。",
    steps: [
      {
        number: "01",
        title: "本日の在庫を確認",
        text: "TelegramまたはWhatsAppで本日の入荷、サイズ、おすすめ商品を確認できます。",
      },
      {
        number: "02",
        title: "希望の商品を予約",
        text: "蟹、ロブスター、牡蠣、アサリ、高級活魚などを来店前に予約できます。",
      },
      {
        number: "03",
        title: "受け取り・自宅で調理",
        text: "お持ち帰り後、お好みの方法で調理できます。状況により近隣の調理オプションも確認可能です。",
      },
    ],

    telegramKicker: "毎日の海鮮入荷情報",
    telegramTitle: "Crab Talk の Telegram に参加",
    telegramText:
      "本日の入荷、限定商品、人気サイズ、予約案内、売り切れ情報をより早く確認できます。",
    telegramButton: "t.me/CrabTalkSG に参加",
    telegramPoints: [
      "🦀 来店前に本日の入荷を確認",
      "🦞 限定商品とプロモーション情報",
      "⚠️ 売り切れ情報と予約リマインダー",
    ],

    featuresKicker: "メディア・SNS掲載",
    featuresTitle: "オンラインで紹介されました",
    featuresDesc:
      "Crab Talk は、活き海鮮、ロブスター伊麺、市場スタイルの海鮮体験で、地元メディアやクリエイターに紹介されています。",
    viewFeature: "掲載を見る →",

    featureCards: [
      {
        title: "8 Days 掲載",
        text: "Crab Talk の活き海鮮とホーカー調理コラボが 8 Days に掲載されました。",
        image: img("feature-8days-original-thumbnail.jpg"),
        link: "https://www.8days.sg/eatanddrink/hawkerfood/commonwealth-crab-talk-fai-kee-live-seafood-hawker-collab-856541",
      },
      {
        title: "Botak Jazz に紹介",
        text: "Botak Jazz が TikTok でロブスター伊麺の体験を紹介しました。",
        image: img("botak-jazz-feature.jpg"),
        link: "https://www.tiktok.com/@botakjazz/video/7602204733155364116",
      },
      {
        title: "AI活用ストーリー",
        text: "Crab Talk が日々の業務や顧客対応でAIを活用しているストーリーです。",
        image: img("AI-feature.jpeg"),
        link: "https://www.facebook.com/share/v/1Djwg4h7UP/",
      },
    ],

    visitKicker: "Crab Talk へお越しください",
    visitTitle: "来店前の確認・予約がおすすめ",
    visitText:
      "より良い商品を選ぶために、Telegramで入荷情報を確認するか、来店前にお問い合わせください。蟹、ロブスター、牡蠣、スーンホック、高級海鮮は日によって入荷が変わります。",
    getDirections: "道順を見る",
    footer: "© Crab Talk SG — Live Seafood Supply @ Crab Talk",
  },
};

export default function App() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [lang, setLang] = useState("en");

  const t = content[lang];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="site">
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #021216;
          color: white;
        }

        .site {
          min-height: 100vh;
          background:
            radial-gradient(circle at 8% 8%, rgba(25, 190, 210, 0.30), transparent 30%),
            radial-gradient(circle at 92% 10%, rgba(255, 205, 96, 0.16), transparent 30%),
            radial-gradient(circle at 50% 55%, rgba(9, 88, 101, 0.20), transparent 36%),
            linear-gradient(180deg, #021216 0%, #062830 48%, #021216 100%);
          overflow-x: hidden;
        }

        a {
          color: inherit;
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(18px);
          background: rgba(2, 18, 22, 0.88);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .topbar-inner {
          max-width: 1180px;
          margin: 0 auto;
          padding: 14px 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand-mark {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, #ffd166, #18c7df);
          color: #021216;
          font-size: 22px;
          box-shadow: 0 0 28px rgba(24, 199, 223, 0.35);
        }

        .brand-title {
          font-size: 20px;
          font-weight: 900;
          letter-spacing: 0.2px;
        }

        .brand-sub {
          margin-top: 3px;
          font-size: 12px;
          color: #9fd9e4;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 14px;
        }

        .nav a {
          color: #d7f6ff;
          text-decoration: none;
          opacity: 0.88;
        }

        .nav a:hover {
          opacity: 1;
          color: #ffd166;
        }

        .nav-cta {
          padding: 10px 16px;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffd166, #ffb703);
          color: #021216 !important;
          font-weight: 900;
          box-shadow: 0 12px 30px rgba(255, 183, 3, 0.22);
        }

        .language-switcher {
          display: flex;
          gap: 6px;
          padding: 5px;
          border-radius: 999px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
        }

        .language-switcher button {
          border: 0;
          cursor: pointer;
          padding: 8px 10px;
          border-radius: 999px;
          background: transparent;
          color: #d7f6ff;
          font-weight: 800;
          font-size: 12px;
        }

        .language-switcher button.active {
          background: linear-gradient(135deg, #ffd166, #ffb703);
          color: #021216;
        }

        .hero {
          max-width: 1180px;
          margin: 0 auto;
          padding: 56px 22px 38px;
          display: grid;
          grid-template-columns: 1.02fr 0.98fr;
          gap: 34px;
          align-items: center;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          gap: 8px;
          padding: 8px 13px;
          border-radius: 999px;
          background: rgba(255, 209, 102, 0.12);
          border: 1px solid rgba(255, 209, 102, 0.30);
          color: #ffd166;
          font-size: 13px;
          font-weight: 900;
          margin-bottom: 18px;
        }

        h1 {
          margin: 0;
          font-size: clamp(38px, 5.2vw, 74px);
          line-height: 0.95;
          letter-spacing: -2.2px;
        }

        .hero-copy {
          margin: 22px 0 0;
          max-width: 620px;
          font-size: clamp(16px, 2vw, 20px);
          line-height: 1.65;
          color: #c7e8ef;
        }

        .address {
          margin-top: 20px;
          padding: 15px 17px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.11);
          color: #ffffff;
          font-size: 15px;
          line-height: 1.5;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 24px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 19px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 900;
          font-size: 15px;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .btn-primary {
          color: #021216;
          background: linear-gradient(135deg, #ffd166, #ffb703);
          box-shadow: 0 14px 34px rgba(255, 183, 3, 0.24);
        }

        .btn-secondary {
          color: white;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.16);
        }

        .btn-telegram {
          color: white;
          background: linear-gradient(135deg, #20a8e0, #0b7ea2);
          box-shadow: 0 14px 34px rgba(32, 168, 224, 0.22);
        }

        .hero-frame {
          position: relative;
          border-radius: 30px;
          padding: 10px;
          background:
            linear-gradient(135deg, rgba(255, 209, 102, 0.45), rgba(30, 198, 220, 0.22)),
            rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.38);
        }

        .hero-image-box {
          height: 380px;
          border-radius: 23px;
          overflow: hidden;
          background: #061e23;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #061e23;
        }

        .hero-badge {
          position: absolute;
          left: 24px;
          bottom: 24px;
          padding: 11px 14px;
          border-radius: 16px;
          background: rgba(2, 18, 22, 0.84);
          border: 1px solid rgba(255, 255, 255, 0.14);
          backdrop-filter: blur(10px);
          font-size: 13px;
          color: #d7f6ff;
        }

        .trust-row {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 22px 34px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .trust-card {
          padding: 18px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.10);
        }

        .trust-card h3 {
          margin: 0 0 7px;
          font-size: 18px;
        }

        .trust-card p {
          margin: 0;
          color: #b7d8df;
          font-size: 14px;
          line-height: 1.5;
        }

        .section {
          max-width: 1180px;
          margin: 0 auto;
          padding: 48px 22px;
        }

        .section-head {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 24px;
          margin-bottom: 22px;
        }

        .section-kicker {
          color: #ffd166;
          font-size: 13px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1.8px;
          margin-bottom: 8px;
        }

        h2 {
          margin: 0;
          font-size: clamp(28px, 3.4vw, 46px);
          letter-spacing: -1.2px;
        }

        .section-desc {
          max-width: 520px;
          margin: 0;
          color: #b7d8df;
          line-height: 1.65;
          font-size: 15px;
        }

        .selection-grid,
        .steps-grid,
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .product-card,
        .step-card,
        .feature-card {
          overflow: hidden;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.055);
          border: 1px solid rgba(255, 255, 255, 0.11);
          box-shadow: 0 18px 42px rgba(0, 0, 0, 0.18);
        }

        .product-card:hover,
        .feature-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 209, 102, 0.38);
        }

        .product-image-wrap,
        .feature-image-wrap {
          height: 215px;
          background: #061e23;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-image-wrap {
          height: 185px;
        }

        .product-image,
        .feature-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #061e23;
          padding: 5px;
        }

        .product-body,
        .feature-body {
          padding: 19px 20px 21px;
        }

        .product-body h3,
        .feature-body h3,
        .step-card h3 {
          margin: 0 0 9px;
          font-size: 22px;
          letter-spacing: -0.4px;
        }

        .product-body p,
        .feature-body p,
        .step-card p {
          margin: 0;
          color: #c0dce2;
          font-size: 15px;
          line-height: 1.6;
        }

        .feature-card {
          text-decoration: none;
          color: white;
        }

        .feature-link {
          display: inline-block;
          margin-top: 13px;
          color: #ffd166;
          font-weight: 900;
          font-size: 14px;
        }

        .step-card {
          padding: 26px;
        }

        .step-number {
          color: rgba(255, 209, 102, 0.34);
          font-size: 44px;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 10px;
        }

        .telegram-box,
        .visit-box {
          border-radius: 30px;
          padding: 36px;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 26px;
          align-items: center;
          background:
            radial-gradient(circle at top right, rgba(255, 209, 102, 0.18), transparent 34%),
            linear-gradient(135deg, rgba(22, 199, 223, 0.14), rgba(255, 209, 102, 0.08)),
            rgba(255, 255, 255, 0.055);
          border: 1px solid rgba(255, 255, 255, 0.13);
          box-shadow: 0 22px 70px rgba(0, 0, 0, 0.20);
        }

        .telegram-box p,
        .visit-box p {
          margin: 12px 0 0;
          color: #c5e4ea;
          line-height: 1.7;
        }

        .telegram-points,
        .visit-actions {
          display: grid;
          gap: 12px;
        }

        .telegram-point {
          padding: 13px 15px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.10);
          color: #d7f6ff;
          font-size: 15px;
          line-height: 1.45;
        }

        .footer {
          padding: 32px 22px 46px;
          text-align: center;
          color: #88b8c2;
          font-size: 13px;
        }

        .mobile-sticky {
          display: none;
        }

        @media (max-width: 960px) {
          .hero {
            grid-template-columns: 1fr;
          }

          .hero-image-box {
            height: 330px;
          }

          .trust-row,
          .selection-grid,
          .feature-grid,
          .steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .telegram-box,
          .visit-box {
            grid-template-columns: 1fr;
          }

          .topbar-inner {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 680px) {
          .topbar-inner {
            padding: 12px 16px;
          }

          .brand-mark {
            width: 38px;
            height: 38px;
            font-size: 20px;
          }

          .brand-title {
            font-size: 18px;
          }

          .brand-sub {
            font-size: 11px;
          }

          .nav {
            display: none;
          }

          .language-switcher {
            width: 100%;
            justify-content: space-between;
          }

          .language-switcher button {
            flex: 1;
          }

          .hero,
          .section,
          .trust-row {
            padding-left: 16px;
            padding-right: 16px;
          }

          .hero {
            padding-top: 32px;
            gap: 24px;
          }

          .hero-copy {
            font-size: 16px;
          }

          .hero-image-box {
            height: 245px;
          }

          .trust-row,
          .selection-grid,
          .feature-grid,
          .steps-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .section-head {
            display: block;
          }

          .section-desc {
            margin-top: 12px;
          }

          .product-image-wrap {
            height: 188px;
          }

          .feature-image-wrap {
            height: 178px;
          }

          .step-card,
          .telegram-box,
          .visit-box {
            padding: 22px;
            border-radius: 22px;
          }

          .hero-actions {
            flex-direction: column;
          }

          .btn {
            width: 100%;
          }

          .mobile-sticky {
            position: fixed;
            left: 10px;
            right: 10px;
            bottom: 10px;
            z-index: 70;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
            padding: 9px;
            border-radius: 999px;
            background: rgba(2, 18, 22, 0.90);
            border: 1px solid rgba(255, 255, 255, 0.14);
            backdrop-filter: blur(16px);
            box-shadow: 0 18px 45px rgba(0, 0, 0, 0.35);
          }

          .mobile-sticky a {
            padding: 11px 7px;
            border-radius: 999px;
            text-align: center;
            text-decoration: none;
            font-size: 12px;
            font-weight: 900;
          }

          .mobile-whatsapp {
            background: linear-gradient(135deg, #ffd166, #ffb703);
            color: #021216;
          }

          .mobile-telegram {
            background: linear-gradient(135deg, #20a8e0, #0b7ea2);
            color: white;
          }

          .mobile-map {
            background: rgba(255, 255, 255, 0.10);
            color: white;
          }

          .footer {
            padding-bottom: 92px;
          }
        }

        @media (max-width: 420px) {
          .hero-image-box {
            height: 220px;
          }

          .product-image-wrap {
            height: 174px;
          }

          .feature-image-wrap {
            height: 168px;
          }

          .address {
            font-size: 14px;
          }
        }
      `}</style>

      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand">
            <div className="brand-mark">🦀</div>
            <div>
              <div className="brand-title">Crab Talk SG</div>
              <div className="brand-sub">{t.brandSub}</div>
            </div>
          </div>

          <nav className="nav">
            <a href="#selection">{t.nav.seafood}</a>
            <a href="#how">{t.nav.how}</a>
            <a href="#telegram">{t.nav.telegram}</a>
            <a href="#features">{t.nav.features}</a>
            <a href="#visit">{t.nav.visit}</a>
            <a className="nav-cta" href={whatsappLink}>
              {t.nav.whatsapp}
            </a>
          </nav>

          <div className="language-switcher">
            <button
              className={lang === "en" ? "active" : ""}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <button
              className={lang === "zh" ? "active" : ""}
              onClick={() => setLang("zh")}
            >
              中文
            </button>
            <button
              className={lang === "ja" ? "active" : ""}
              onClick={() => setLang("ja")}
            >
              日本語
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div>
            <div className="eyebrow">{t.eyebrow}</div>

            <h1>{t.heroTitle}</h1>

            <p className="hero-copy">{t.heroCopy}</p>

            <div className="address">
              <strong>{t.visitUs}</strong>
              <br />
              {t.address}
            </div>

            <div className="hero-actions">
              <a className="btn btn-primary" href={whatsappLink}>
                {t.whatsappReserve}
              </a>
              <a
                className="btn btn-telegram"
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.telegramJoin}
              </a>
              <a
                className="btn btn-secondary"
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.maps}
              </a>
            </div>
          </div>

          <div className="hero-frame">
            <div className="hero-image-box">
              <img
                className="hero-image"
                src={heroImages[heroIndex]}
                alt="Crab Talk premium live seafood"
              />
            </div>
            <div className="hero-badge">{t.heroBadge}</div>
          </div>
        </section>

        <div className="trust-row">
          {t.whyChoose.map((item) => (
            <div className="trust-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <section className="section" id="selection">
          <div className="section-head">
            <div>
              <div className="section-kicker">{t.freshKicker}</div>
              <h2>{t.freshTitle}</h2>
            </div>
            <p className="section-desc">{t.freshDesc}</p>
          </div>

          <div className="selection-grid">
            {t.freshSelection.map((item) => (
              <article className="product-card" key={item.title}>
                <div className="product-image-wrap">
                  <img className="product-image" src={item.image} alt={item.title} />
                </div>
                <div className="product-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="how">
          <div className="section-head">
            <div>
              <div className="section-kicker">{t.howKicker}</div>
              <h2>{t.howTitle}</h2>
            </div>
            <p className="section-desc">{t.howDesc}</p>
          </div>

          <div className="steps-grid">
            {t.steps.map((item) => (
              <article className="step-card" key={item.title}>
                <div className="step-number">{item.number}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="telegram">
          <div className="telegram-box">
            <div>
              <div className="section-kicker">{t.telegramKicker}</div>
              <h2>{t.telegramTitle}</h2>
              <p>{t.telegramText}</p>

              <div className="hero-actions">
                <a
                  className="btn btn-telegram"
                  href={telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.telegramButton}
                </a>
                <a className="btn btn-primary" href={whatsappLink}>
                  {t.whatsappReserve}
                </a>
              </div>
            </div>

            <div className="telegram-points">
              {t.telegramPoints.map((point) => (
                <div className="telegram-point" key={point}>
                  {point}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="features">
          <div className="section-head">
            <div>
              <div className="section-kicker">{t.featuresKicker}</div>
              <h2>{t.featuresTitle}</h2>
            </div>
            <p className="section-desc">{t.featuresDesc}</p>
          </div>

          <div className="feature-grid">
            {t.featureCards.map((item) => (
              <a
                className="feature-card"
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="feature-image-wrap">
                  <img className="feature-image" src={item.image} alt={item.title} />
                </div>
                <div className="feature-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="feature-link">{t.viewFeature}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="section" id="visit">
          <div className="visit-box">
            <div>
              <div className="section-kicker">{t.visitKicker}</div>
              <h2>{t.visitTitle}</h2>
              <p>{t.visitText}</p>
            </div>

            <div className="visit-actions">
              <a className="btn btn-primary" href={whatsappLink}>
                {t.whatsappReserve}
              </a>
              <a
                className="btn btn-telegram"
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.telegramJoin}
              </a>
              <a
                className="btn btn-secondary"
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.getDirections}
              </a>
            </div>
          </div>
        </section>
      </main>

      <div className="mobile-sticky">
        <a className="mobile-whatsapp" href={whatsappLink}>
          WhatsApp
        </a>
        <a
          className="mobile-telegram"
          href={telegramLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a>
        <a
          className="mobile-map"
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Map
        </a>
      </div>

      <footer className="footer">{t.footer}</footer>
    </div>
  );
}
