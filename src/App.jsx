import React, { useEffect, useMemo, useState } from "react";

const IMG = "/images/";

const WHATSAPP_LINK = "https://wa.me/6598398671";
const TELEGRAM_LINK = "https://t.me/CrabTalkSG";
const MAPS_LINK = "https://maps.app.goo.gl/1GKdK2y6jpbqfg8N8?g_st=ac";
const TIKTOK_LINK = "https://www.tiktok.com/@botakjazz/video/7602204733155364116";
const DAYS_LINK =
  "https://www.8days.sg/eatanddrink/hawkerfood/commonwealth-crab-talk-fai-kee-live-seafood-hawker-collab-856541";
const AI_FEATURE_LINK = "https://www.facebook.com/share/v/1Djwg4h7UP/";

const copy = {
  en: {
    navHome: "Home",
    navSelection: "Fresh Selection",
    navHomeCooking: "Home Cooking",
    navFeatures: "Features",
    navReviews: "Reviews",
    navFaq: "FAQ",
    navVisit: "Visit Us",

    topBadge: "Live seafood • Commonwealth Crescent",
    heroTitle: "Premium Live Seafood, Selected Fresh Daily.",
    heroText:
      "Choose live crabs, lobsters, oysters, clams and premium fish at Crab Talk. Buy for home cooking, or check with us for nearby cooking options depending on availability.",
    orderWhatsapp: "Order on WhatsApp",
    joinTelegram: "Join Telegram Updates",
    getDirections: "Get Directions",
    address:
      "31 Commonwealth Crescent #01-41/42/43, Singapore 149644",

    trust1Title: "Live & Fresh",
    trust1Text: "Selected from tanks and daily arrivals.",
    trust2Title: "Premium Choices",
    trust2Text: "Mud crabs, roe crabs, lobsters, oysters and more.",
    trust3Title: "Easy Reservation",
    trust3Text: "WhatsApp us before visiting to check stock.",

    sectionSelectionEyebrow: "Fresh Daily Selection",
    sectionSelectionTitle: "Popular live seafood at Crab Talk",
    sectionSelectionText:
      "Photos are shown as reference. Availability, size and price change according to daily stock.",

    mudCrabTitle: "Live Mud Crabs",
    mudCrabText:
      "Meaty, active crabs suitable for steaming, chilli crab, black pepper crab, or ginger scallion crab.",
    roeCrabTitle: "Sri Lanka Roe Crabs",
    roeCrabText:
      "Popular for rich roe, firm meat and premium seafood meals at home.",
    lobsterTitle: "Live Lobsters",
    lobsterText:
      "Boston lobster and green lobster options depending on daily arrival.",
    oysterTitle: "Fresh Oysters",
    oysterText:
      "Cold, clean and suitable for seafood platters or weekend gatherings.",
    clamsTitle: "Manila Clams",
    clamsText:
      "Great for steaming, chilli lala, soup, white wine style or home cooking.",
    soonHockTitle: "Live Soon Hock & Premium Fish",
    soonHockText:
      "Live fish options for steaming, Hong Kong style, or home cooking.",

    homeCookingEyebrow: "Main Focus",
    homeCookingTitle: "Buy live seafood for home cooking",
    homeCookingText:
      "Crab Talk is built for customers who want to choose their seafood personally and cook it fresh at home.",
    homeCookingPoint1: "Check daily live stock before visiting.",
    homeCookingPoint2: "Reserve popular items early to avoid disappointment.",
    homeCookingPoint3: "Ask for suitable cooking recommendations based on your seafood choice.",

    faiKeeEyebrow: "Nearby Cooking Option",
    faiKeeTitle: "Cooking by Fai Kee, subject to availability",
    faiKeeText:
      "For customers who prefer cooked seafood, nearby cooking options may be available during operating hours. Please check with Crab Talk first, as cooking capacity depends on queue and demand.",
    faiKeeNote:
      "Recommended to pre-check before coming, especially during peak meal periods.",

    featuresEyebrow: "Media & Community",
    featuresTitle: "Featured by food media and creators",
    feature8daysTitle: "Featured on 8 Days",
    feature8daysText:
      "Crab Talk and the live seafood hawker collaboration were featured by 8 Days.",
    featureBotakTitle: "Featured by Botak Jazz",
    featureBotakText:
      "Botak Jazz featured the lobster yee mee experience in his TikTok video.",
    featureAITitle: "Crab seller using AI for daily work",
    featureAIText:
      "A story about how Crab Talk uses AI tools in daily business operations.",
    readFeature: "View Feature",

    reviewsEyebrow: "Public Feedback",
    reviewsTitle: "What customers usually mention",
    reviewsText:
      "For the latest verified reviews, open our Google Maps profile. Review content and ratings may change over time.",
    review1Title: "Friendly service",
    review1Text:
      "Customers often mention patient explanations and seafood recommendations.",
    review2Title: "Live seafood selection",
    review2Text:
      "Visitors come for live crabs, lobsters, oysters, clams and premium fish.",
    review3Title: "Value for home cooking",
    review3Text:
      "Customers can choose live seafood and prepare it their preferred way at home.",
    viewGoogleReviews: "View Latest Google Reviews",

    hoursTitle: "Operating Hours",
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday",
    hoursMon: "12 pm – 5 pm",
    hoursTue: "8 am – 7 pm",
    hoursWed: "8 am – 7 pm",
    hoursThu: "8 am – 7 pm",
    hoursFri: "8 am – 8 pm",
    hoursSat: "8 am – 8 pm",
    hoursSun: "8 am – 5 pm",

    faqEyebrow: "FAQ",
    faqTitle: "Before you visit",
    faq1Q: "Should I reserve before coming?",
    faq1A:
      "Yes. Live seafood stock changes daily, so WhatsApp us before visiting if you are looking for a specific item or size.",
    faq2Q: "Can I buy seafood for home cooking?",
    faq2A:
      "Yes. This is our main focus. You can select live seafood and bring it home to cook fresh.",
    faq3Q: "Do you always have cooking available nearby?",
    faq3A:
      "Nearby cooking may be available, but it depends on queue, operating hours and kitchen capacity. Please check before coming.",
    faq4Q: "Are prices fixed every day?",
    faq4A:
      "Prices may change depending on seafood size, season, supply and daily arrival.",

    footerText:
      "Live Seafood Supply @ Crab Talk • 31 Commonwealth Crescent #01-41/42/43, Singapore 149644",
  },

  zh: {
    navHome: "首页",
    navSelection: "每日海鲜",
    navHomeCooking: "带回家煮",
    navFeatures: "媒体介绍",
    navReviews: "评价",
    navFaq: "常见问题",
    navVisit: "到店",

    topBadge: "活海鲜 • Commonwealth Crescent",
    heroTitle: "每日新鲜精选的高级活海鲜",
    heroText:
      "在 Crab Talk 选购活螃蟹、龙虾、生蚝、蛤蜊和高级活鱼。适合带回家烹煮，也可先向我们确认附近熟食烹调安排。",
    orderWhatsapp: "WhatsApp 预订",
    joinTelegram: "加入 Telegram",
    getDirections: "Google Maps 导航",
    address:
      "31 Commonwealth Crescent #01-41/42/43, Singapore 149644",

    trust1Title: "鲜活选择",
    trust1Text: "根据鱼缸和每日到货挑选。",
    trust2Title: "高级海鲜",
    trust2Text: "泥蟹、膏蟹、龙虾、生蚝等。",
    trust3Title: "方便预订",
    trust3Text: "到店前可先 WhatsApp 查询库存。",

    sectionSelectionEyebrow: "每日新鲜选择",
    sectionSelectionTitle: "Crab Talk 人气活海鲜",
    sectionSelectionText:
      "图片仅供参考。供应、尺寸和价格会根据每日库存调整。",

    mudCrabTitle: "活泥蟹",
    mudCrabText:
      "肉质饱满，适合清蒸、辣椒蟹、黑胡椒蟹或姜葱蟹。",
    roeCrabTitle: "斯里兰卡膏蟹",
    roeCrabText:
      "膏香浓郁，肉质结实，适合高级家庭海鲜餐。",
    lobsterTitle: "活龙虾",
    lobsterText:
      "波士顿龙虾和青龙虾视每日到货供应。",
    oysterTitle: "新鲜生蚝",
    oysterText:
      "适合海鲜拼盘、聚餐或周末家庭享用。",
    clamsTitle: "马尼拉蛤蜊",
    clamsText:
      "适合清蒸、辣椒啦啦、汤类或白酒做法。",
    soonHockTitle: "活笋壳鱼与高级鱼类",
    soonHockText:
      "适合清蒸、港式蒸或家庭烹调。",

    homeCookingEyebrow: "主要推荐",
    homeCookingTitle: "买活海鲜，带回家新鲜烹煮",
    homeCookingText:
      "Crab Talk 适合想亲自挑选活海鲜，并在家中以自己喜欢的方式烹调的顾客。",
    homeCookingPoint1: "到店前先确认每日活海鲜库存。",
    homeCookingPoint2: "热门海鲜建议提前预订。",
    homeCookingPoint3: "可询问适合的烹调方式建议。",

    faiKeeEyebrow: "附近熟食选择",
    faiKeeTitle: "Fai Kee 烹调需视现场情况",
    faiKeeText:
      "若想要熟食，可先向 Crab Talk 查询附近烹调安排。实际是否能烹调取决于排队情况和厨房负荷。",
    faiKeeNote:
      "用餐高峰时段建议先确认，避免白跑一趟。",

    featuresEyebrow: "媒体与创作者",
    featuresTitle: "媒体和创作者介绍",
    feature8daysTitle: "8 Days 介绍",
    feature8daysText:
      "8 Days 曾介绍 Crab Talk 与熟食摊位的合作模式。",
    featureBotakTitle: "Botak Jazz 介绍",
    featureBotakText:
      "Botak Jazz 在 TikTok 介绍龙虾伊面体验。",
    featureAITitle: "用 AI 做日常工作的蟹老板",
    featureAIText:
      "关于 Crab Talk 如何在日常经营中使用 AI 工具的故事。",
    readFeature: "查看内容",

    reviewsEyebrow: "顾客反馈",
    reviewsTitle: "顾客常提到的优点",
    reviewsText:
      "最新真实 Google 评价请打开 Google Maps 查看。评价内容和评分可能会随时间改变。",
    review1Title: "服务亲切",
    review1Text:
      "顾客经常提到耐心讲解和海鲜建议。",
    review2Title: "活海鲜选择",
    review2Text:
      "顾客常来选购活螃蟹、龙虾、生蚝、蛤蜊和高级鱼类。",
    review3Title: "适合家庭烹调",
    review3Text:
      "可亲自挑选活海鲜，带回家按自己喜欢的方式烹调。",
    viewGoogleReviews: "查看最新 Google 评价",

    hoursTitle: "营业时间",
    monday: "星期一",
    tuesday: "星期二",
    wednesday: "星期三",
    thursday: "星期四",
    friday: "星期五",
    saturday: "星期六",
    sunday: "星期日",
    hoursMon: "12 pm – 5 pm",
    hoursTue: "8 am – 7 pm",
    hoursWed: "8 am – 7 pm",
    hoursThu: "8 am – 7 pm",
    hoursFri: "8 am – 8 pm",
    hoursSat: "8 am – 8 pm",
    hoursSun: "8 am – 5 pm",

    faqEyebrow: "常见问题",
    faqTitle: "到店前须知",
    faq1Q: "需要先预订吗？",
    faq1A:
      "建议先预订。活海鲜库存每日不同，如有指定品种或尺寸，请先 WhatsApp 查询。",
    faq2Q: "可以带回家自己煮吗？",
    faq2A:
      "可以。这是我们的主要模式，顾客可挑选活海鲜后带回家烹调。",
    faq3Q: "附近一定可以帮忙煮吗？",
    faq3A:
      "附近烹调需视现场排队、营业时间和厨房负荷而定，建议先查询。",
    faq4Q: "价格每天一样吗？",
    faq4A:
      "价格会因尺寸、季节、供应和每日到货情况而调整。",

    footerText:
      "Live Seafood Supply @ Crab Talk • 31 Commonwealth Crescent #01-41/42/43, Singapore 149644",
  },

  ja: {
    navHome: "ホーム",
    navSelection: "本日の海鮮",
    navHomeCooking: "自宅調理",
    navFeatures: "掲載情報",
    navReviews: "レビュー",
    navFaq: "FAQ",
    navVisit: "店舗情報",

    topBadge: "活き海鮮 • Commonwealth Crescent",
    heroTitle: "毎日厳選されるプレミアム活き海鮮",
    heroText:
      "Crab Talk では活き蟹、ロブスター、牡蠣、マニラ貝、高級活魚を選べます。自宅調理用として購入でき、近隣での調理オプションは状況により確認可能です。",
    orderWhatsapp: "WhatsApp で注文",
    joinTelegram: "Telegram に参加",
    getDirections: "Google Maps で見る",
    address:
      "31 Commonwealth Crescent #01-41/42/43, Singapore 149644",

    trust1Title: "鮮度重視",
    trust1Text: "水槽と毎日の入荷から選定。",
    trust2Title: "高級海鮮",
    trust2Text: "泥蟹、膏蟹、ロブスター、牡蠣など。",
    trust3Title: "簡単予約",
    trust3Text: "来店前に WhatsApp で在庫確認できます。",

    sectionSelectionEyebrow: "毎日の新鮮セレクション",
    sectionSelectionTitle: "Crab Talk の人気活き海鮮",
    sectionSelectionText:
      "写真は参考です。入荷、サイズ、価格は日によって変わります。",

    mudCrabTitle: "活き泥蟹",
    mudCrabText:
      "身入りの良い蟹。蒸し蟹、チリクラブ、ブラックペッパー、ジンジャースキャリオンに。",
    roeCrabTitle: "スリランカ産 Roe Crab",
    roeCrabText:
      "濃厚な蟹味噌としっかりした身で、家庭での豪華な海鮮料理に人気。",
    lobsterTitle: "活きロブスター",
    lobsterText:
      "ボストンロブスターやグリーンロブスターは日々の入荷状況によります。",
    oysterTitle: "新鮮な牡蠣",
    oysterText:
      "海鮮プレート、週末の食事、集まりにおすすめ。",
    clamsTitle: "マニラ貝",
    clamsText:
      "蒸し料理、チリララ、スープ、白ワイン風などに。",
    soonHockTitle: "活き Soon Hock と高級魚",
    soonHockText:
      "蒸し魚、香港風、自宅調理におすすめの活魚。",

    homeCookingEyebrow: "メイン提案",
    homeCookingTitle: "活き海鮮を選んで自宅で調理",
    homeCookingText:
      "Crab Talk は、お客様が自分で活き海鮮を選び、自宅で新鮮に調理したい時に便利な店です。",
    homeCookingPoint1: "来店前に当日の在庫を確認。",
    homeCookingPoint2: "人気商品は早めの予約がおすすめ。",
    homeCookingPoint3: "海鮮に合う調理方法も相談できます。",

    faiKeeEyebrow: "近隣調理オプション",
    faiKeeTitle: "Fai Kee の調理は状況により確認",
    faiKeeText:
      "調理済みで食べたい場合、近隣の調理オプションを確認できます。ただし、混雑状況や厨房のキャパシティによります。",
    faiKeeNote:
      "ピーク時間帯は事前確認をおすすめします。",

    featuresEyebrow: "メディア・クリエイター",
    featuresTitle: "メディアとクリエイターに紹介されました",
    feature8daysTitle: "8 Days 掲載",
    feature8daysText:
      "Crab Talk と近隣調理コラボレーションが 8 Days に紹介されました。",
    featureBotakTitle: "Botak Jazz 紹介",
    featureBotakText:
      "Botak Jazz が TikTok でロブスター伊麺を紹介しました。",
    featureAITitle: "AI を活用する蟹販売店",
    featureAIText:
      "Crab Talk が日々の業務で AI を活用するストーリー。",
    readFeature: "見る",

    reviewsEyebrow: "口コミ",
    reviewsTitle: "お客様によく言われるポイント",
    reviewsText:
      "最新の確認済み Google レビューは Google Maps でご覧ください。内容や評価は変わる可能性があります。",
    review1Title: "親切な対応",
    review1Text:
      "丁寧な説明や海鮮選びのアドバイスがよく挙げられます。",
    review2Title: "活き海鮮の種類",
    review2Text:
      "活き蟹、ロブスター、牡蠣、貝、高級魚を選べます。",
    review3Title: "自宅調理向き",
    review3Text:
      "活き海鮮を選んで、自宅で好みの方法で調理できます。",
    viewGoogleReviews: "Google レビューを見る",

    hoursTitle: "営業時間",
    monday: "月曜日",
    tuesday: "火曜日",
    wednesday: "水曜日",
    thursday: "木曜日",
    friday: "金曜日",
    saturday: "土曜日",
    sunday: "日曜日",
    hoursMon: "12 pm – 5 pm",
    hoursTue: "8 am – 7 pm",
    hoursWed: "8 am – 7 pm",
    hoursThu: "8 am – 7 pm",
    hoursFri: "8 am – 8 pm",
    hoursSat: "8 am – 8 pm",
    hoursSun: "8 am – 5 pm",

    faqEyebrow: "FAQ",
    faqTitle: "来店前によくある質問",
    faq1Q: "予約した方がいいですか？",
    faq1A:
      "はい。在庫は毎日変わるため、希望の商品やサイズがある場合は WhatsApp で事前確認をおすすめします。",
    faq2Q: "自宅調理用に買えますか？",
    faq2A:
      "はい。活き海鮮を選んで、自宅で新鮮に調理できます。",
    faq3Q: "近くで必ず調理できますか？",
    faq3A:
      "調理は混雑状況、営業時間、厨房の負荷によります。事前確認をおすすめします。",
    faq4Q: "価格は毎日同じですか？",
    faq4A:
      "価格はサイズ、季節、供給、入荷状況によって変わります。",

    footerText:
      "Live Seafood Supply @ Crab Talk • 31 Commonwealth Crescent #01-41/42/43, Singapore 149644",
  },
};

function App() {
  const [lang, setLang] = useState("en");
  const [heroIndex, setHeroIndex] = useState(0);

  const t = copy[lang];

  const heroSlides = useMemo(
    () => [
      {
        src: "feature-8days-original-thumbnail.jpg",
        label: "8 Days Feature",
      },
      {
        src: "product-live-crab-premium.jpg",
        label: "Premium Live Crabs",
      },
      {
        src: "product-yellow-roe-crab-06.jpg",
        label: "Sri Lanka Roe Crabs",
      },
      {
        src: "product-boston-lobster-display.jpg",
        label: "Live Lobsters",
      },
      {
        src: "product-oysters-premium-02.jpg",
        label: "Premium Oysters",
      },
      {
        src: "stall-crab-talk-front-01.jpg",
        label: "Crab Talk Stall",
      },
    ],
    []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const freshItems = [
    {
      title: t.mudCrabTitle,
      text: t.mudCrabText,
      image: "product-live-crab-premium.jpg",
    },
    {
      title: t.roeCrabTitle,
      text: t.roeCrabText,
      image: "product-yellow-roe-crab-06.jpg",
    },
    {
      title: t.lobsterTitle,
      text: t.lobsterText,
      image: "product-boston-lobster-display.jpg",
    },
    {
      title: t.oysterTitle,
      text: t.oysterText,
      image: "product-oysters-premium-02.jpg",
    },
    {
      title: t.clamsTitle,
      text: t.clamsText,
      image: "product-manila-clams-01.jpg",
    },
    {
      title: t.soonHockTitle,
      text: t.soonHockText,
      image: "product-live-soon-hock-01.jpg",
    },
  ];

  const features = [
    {
      title: t.feature8daysTitle,
      text: t.feature8daysText,
      image: "feature-8days-original-thumbnail.jpg",
      link: DAYS_LINK,
    },
    {
      title: t.featureBotakTitle,
      text: t.featureBotakText,
      image: "feature-botak-jazz-tiktok.jpg",
      link: TIKTOK_LINK,
    },
    {
      title: t.featureAITitle,
      text: t.featureAIText,
      image: "AI-feature.jpeg",
      link: AI_FEATURE_LINK,
    },
  ];

  const reviews = [
    {
      title: t.review1Title,
      text: t.review1Text,
    },
    {
      title: t.review2Title,
      text: t.review2Text,
    },
    {
      title: t.review3Title,
      text: t.review3Text,
    },
  ];

  const faqs = [
    {
      q: t.faq1Q,
      a: t.faq1A,
    },
    {
      q: t.faq2Q,
      a: t.faq2A,
    },
    {
      q: t.faq3Q,
      a: t.faq3A,
    },
    {
      q: t.faq4Q,
      a: t.faq4A,
    },
  ];

  const hours = [
    [t.monday, t.hoursMon],
    [t.tuesday, t.hoursTue],
    [t.wednesday, t.hoursWed],
    [t.thursday, t.hoursThu],
    [t.friday, t.hoursFri],
    [t.saturday, t.hoursSat],
    [t.sunday, t.hoursSun],
  ];

  return (
    <main className="site">
      <style>{styles}</style>

      <header className="header">
        <a className="brand" href="#home" aria-label="Crab Talk SG Home">
          <span className="brandMark">CT</span>
          <span>
            <strong>Crab Talk SG</strong>
            <small>Live Seafood Supply</small>
          </span>
        </a>

        <nav className="nav" aria-label="Main navigation">
          <a href="#selection">{t.navSelection}</a>
          <a href="#home-cooking">{t.navHomeCooking}</a>
          <a href="#features">{t.navFeatures}</a>
          <a href="#reviews">{t.navReviews}</a>
          <a href="#visit">{t.navVisit}</a>
        </nav>

        <div className="language">
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
      </header>

      <section id="home" className="hero section">
        <div className="heroCopy">
          <p className="eyebrow">{t.topBadge}</p>
          <h1>{t.heroTitle}</h1>
          <p className="lead">{t.heroText}</p>

          <div className="heroAddress">
            <span>📍</span>
            <a href={MAPS_LINK} target="_blank" rel="noreferrer">
              {t.address}
            </a>
          </div>

          <div className="ctaRow">
            <a className="btn primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              {t.orderWhatsapp}
            </a>
            <a className="btn secondary" href={TELEGRAM_LINK} target="_blank" rel="noreferrer">
              {t.joinTelegram}
            </a>
            <a className="btn ghost" href={MAPS_LINK} target="_blank" rel="noreferrer">
              {t.getDirections}
            </a>
          </div>

          <div className="trustGrid">
            <div>
              <strong>{t.trust1Title}</strong>
              <span>{t.trust1Text}</span>
            </div>
            <div>
              <strong>{t.trust2Title}</strong>
              <span>{t.trust2Text}</span>
            </div>
            <div>
              <strong>{t.trust3Title}</strong>
              <span>{t.trust3Text}</span>
            </div>
          </div>
        </div>

        <div className="heroMedia">
          <div className="heroImageFrame">
            {heroSlides.map((slide, index) => (
              <img
                key={slide.src}
                src={`${IMG}${slide.src}`}
                alt={slide.label}
                className={index === heroIndex ? "heroImg active" : "heroImg"}
              />
            ))}
          </div>
          <div className="slideDots">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.src}
                className={index === heroIndex ? "dot active" : "dot"}
                aria-label={`Show ${slide.label}`}
                onClick={() => setHeroIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="selection" className="section">
        <div className="sectionHeading">
          <p className="eyebrow">{t.sectionSelectionEyebrow}</p>
          <h2>{t.sectionSelectionTitle}</h2>
          <p>{t.sectionSelectionText}</p>
        </div>

        <div className="productGrid">
          {freshItems.map((item) => (
            <article className="productCard" key={item.title}>
              <div className="productImage">
                <img src={`${IMG}${item.image}`} alt={item.title} />
              </div>
              <div className="productCopy">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="home-cooking" className="section splitSection">
        <div className="premiumPanel">
          <p className="eyebrow">{t.homeCookingEyebrow}</p>
          <h2>{t.homeCookingTitle}</h2>
          <p>{t.homeCookingText}</p>

          <ul className="cleanList">
            <li>{t.homeCookingPoint1}</li>
            <li>{t.homeCookingPoint2}</li>
            <li>{t.homeCookingPoint3}</li>
          </ul>

          <a className="btn primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            {t.orderWhatsapp}
          </a>
        </div>

        <div className="premiumPanel subdued" id="fai-kee">
          <p className="eyebrow">{t.faiKeeEyebrow}</p>
          <h2>{t.faiKeeTitle}</h2>
          <p>{t.faiKeeText}</p>
          <p className="note">{t.faiKeeNote}</p>
        </div>
      </section>

      <section id="features" className="section">
        <div className="sectionHeading">
          <p className="eyebrow">{t.featuresEyebrow}</p>
          <h2>{t.featuresTitle}</h2>
        </div>

        <div className="featureGrid">
          {features.map((feature) => (
            <article className="featureCard" key={feature.title}>
              <div className="featureImage">
                <img src={`${IMG}${feature.image}`} alt={feature.title} />
              </div>
              <div className="featureCopy">
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
                <a href={feature.link} target="_blank" rel="noreferrer">
                  {t.readFeature} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="reviews" className="section reviewsSection">
        <div className="sectionHeading">
          <p className="eyebrow">{t.reviewsEyebrow}</p>
          <h2>{t.reviewsTitle}</h2>
          <p>{t.reviewsText}</p>
        </div>

        <div className="reviewGrid">
          {reviews.map((review) => (
            <article className="reviewCard" key={review.title}>
              <div className="stars">★★★★★</div>
              <h3>{review.title}</h3>
              <p>{review.text}</p>
            </article>
          ))}
        </div>

        <div className="centerCta">
          <a className="btn secondary" href={MAPS_LINK} target="_blank" rel="noreferrer">
            {t.viewGoogleReviews}
          </a>
        </div>
      </section>

      <section id="visit" className="section visitSection">
        <div className="visitCard">
          <div>
            <p className="eyebrow">Location</p>
            <h2>{t.navVisit}</h2>
            <p className="addressText">{t.address}</p>

            <div className="ctaRow compact">
              <a className="btn primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                {t.orderWhatsapp}
              </a>
              <a className="btn secondary" href={TELEGRAM_LINK} target="_blank" rel="noreferrer">
                Telegram
              </a>
              <a className="btn ghost" href={MAPS_LINK} target="_blank" rel="noreferrer">
                {t.getDirections}
              </a>
            </div>
          </div>

          <div className="hoursBox">
            <h3>{t.hoursTitle}</h3>
            <div className="hoursList">
              {hours.map(([day, time]) => (
                <div className="hoursRow" key={day}>
                  <span>{day}</span>
                  <strong>{time}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="section faqSection">
        <div className="sectionHeading">
          <p className="eyebrow">{t.faqEyebrow}</p>
          <h2>{t.faqTitle}</h2>
        </div>

        <div className="faqGrid">
          {faqs.map((faq) => (
            <article className="faqCard" key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>{t.footerText}</p>
        <div>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href={TELEGRAM_LINK} target="_blank" rel="noreferrer">
            Telegram
          </a>
          <a href={MAPS_LINK} target="_blank" rel="noreferrer">
            Google Maps
          </a>
        </div>
      </footer>
    </main>
  );
}

const styles = `
:root {
  --bg: #03191d;
  --bg2: #062a31;
  --panel: rgba(255, 255, 255, 0.075);
  --panel2: rgba(255, 255, 255, 0.045);
  --line: rgba(255, 255, 255, 0.14);
  --text: #ffffff;
  --muted: rgba(255, 255, 255, 0.72);
  --soft: rgba(255, 255, 255, 0.55);
  --brand: #22c7e8;
  --brand2: #9fe8ff;
  --gold: #f6c76a;
  --shadow: 0 22px 70px rgba(0, 0, 0, 0.35);
  --radius: 26px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background:
    radial-gradient(circle at top left, rgba(34, 199, 232, 0.22), transparent 38%),
    radial-gradient(circle at 90% 20%, rgba(246, 199, 106, 0.12), transparent 32%),
    linear-gradient(180deg, #03191d 0%, #041216 42%, #021014 100%);
  color: var(--text);
  font-family: Arial, Helvetica, sans-serif;
}

a {
  color: inherit;
}

.site {
  min-height: 100vh;
  overflow-x: hidden;
}

.header {
  position: sticky;
  top: 0;
  z-index: 50;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 18px;
  align-items: center;
  padding: 16px clamp(18px, 4vw, 60px);
  background: rgba(2, 18, 22, 0.88);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--line);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  min-width: 210px;
}

.brandMark {
  width: 44px;
  height: 44px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--brand), var(--gold));
  color: #021014;
  font-weight: 900;
  letter-spacing: -1px;
  box-shadow: 0 12px 34px rgba(34, 199, 232, 0.24);
}

.brand strong {
  display: block;
  font-size: 17px;
  line-height: 1.1;
}

.brand small {
  display: block;
  color: var(--muted);
  font-size: 12px;
  margin-top: 3px;
}

.nav {
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
}

.nav a {
  text-decoration: none;
  color: var(--muted);
  padding: 9px 11px;
  border-radius: 999px;
  font-size: 14px;
  transition: 0.2s ease;
}

.nav a:hover {
  color: white;
  background: rgba(255, 255, 255, 0.08);
}

.language {
  display: flex;
  justify-content: flex-end;
  gap: 6px;
}

.language button {
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.05);
  color: var(--muted);
  border-radius: 999px;
  padding: 8px 10px;
  cursor: pointer;
  font-weight: 700;
  font-size: 12px;
}

.language button.active {
  color: #021014;
  background: linear-gradient(135deg, var(--brand2), var(--gold));
  border-color: transparent;
}

.section {
  width: min(1180px, calc(100% - 36px));
  margin: 0 auto;
  padding: 70px 0;
}

.hero {
  display: grid;
  grid-template-columns: 1.02fr 0.98fr;
  gap: 36px;
  align-items: center;
  min-height: calc(100vh - 76px);
  padding-top: 46px;
}

.eyebrow {
  color: var(--gold);
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.18em;
  font-weight: 900;
  margin: 0 0 14px;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  font-size: clamp(42px, 6vw, 76px);
  line-height: 0.98;
  letter-spacing: -0.055em;
  margin-bottom: 22px;
}

h2 {
  font-size: clamp(30px, 4vw, 52px);
  line-height: 1.02;
  letter-spacing: -0.04em;
  margin-bottom: 16px;
}

h3 {
  font-size: 22px;
  line-height: 1.2;
  letter-spacing: -0.025em;
  margin-bottom: 10px;
}

.lead,
.sectionHeading p,
.premiumPanel p,
.productCopy p,
.featureCopy p,
.reviewCard p,
.faqCard p,
.addressText {
  color: var(--muted);
  line-height: 1.65;
  font-size: 17px;
}

.heroAddress {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 14px 16px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.055);
  border-radius: 18px;
  margin: 26px 0;
  color: var(--brand2);
  line-height: 1.45;
}

.heroAddress a {
  text-decoration: none;
}

.ctaRow {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 26px;
}

.ctaRow.compact {
  margin-top: 22px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 13px 18px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 900;
  border: 1px solid transparent;
  transition: 0.2s ease;
  white-space: nowrap;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn.primary {
  color: #021014;
  background: linear-gradient(135deg, var(--brand2), var(--brand));
  box-shadow: 0 18px 45px rgba(34, 199, 232, 0.22);
}

.btn.secondary {
  color: #021014;
  background: linear-gradient(135deg, var(--gold), #ffe3a5);
}

.btn.ghost {
  color: white;
  border-color: var(--line);
  background: rgba(255, 255, 255, 0.055);
}

.trustGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: 30px;
}

.trustGrid div {
  padding: 16px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.055);
}

.trustGrid strong {
  display: block;
  margin-bottom: 6px;
}

.trustGrid span {
  display: block;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.45;
}

.heroMedia {
  position: relative;
}

.heroImageFrame {
  position: relative;
  height: 430px;
  border-radius: 34px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background:
    linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02)),
    #071c21;
  box-shadow: var(--shadow);
}

.heroImg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 10px;
  opacity: 0;
  transform: scale(1.015);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.heroImg.active {
  opacity: 1;
  transform: scale(1);
}

.slideDots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
}

.dot {
  width: 9px;
  height: 9px;
  border-radius: 999px;
  border: 0;
  background: rgba(255, 255, 255, 0.25);
  cursor: pointer;
}

.dot.active {
  width: 28px;
  background: var(--brand2);
}

.sectionHeading {
  max-width: 760px;
  margin-bottom: 32px;
}

.productGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.productCard,
.featureCard,
.reviewCard,
.faqCard,
.premiumPanel,
.visitCard {
  border: 1px solid var(--line);
  background:
    linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.035));
  border-radius: var(--radius);
  box-shadow: 0 16px 45px rgba(0, 0, 0, 0.22);
}

.productCard {
  overflow: hidden;
}

.productImage {
  height: 210px;
  padding: 10px;
  background: #071d22;
  border-bottom: 1px solid var(--line);
}

.productImage img,
.featureImage img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  border-radius: 18px;
}

.productCopy {
  padding: 22px;
}

.productCopy p {
  font-size: 15.5px;
}

.splitSection {
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: 22px;
}

.premiumPanel {
  padding: clamp(24px, 4vw, 42px);
}

.premiumPanel.subdued {
  background:
    linear-gradient(180deg, rgba(255,255,255,0.055), rgba(255,255,255,0.025));
}

.cleanList {
  margin: 24px 0 30px;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 12px;
}

.cleanList li {
  position: relative;
  padding-left: 28px;
  color: var(--muted);
  line-height: 1.55;
}

.cleanList li::before {
  content: "✓";
  position: absolute;
  left: 0;
  top: 0;
  color: var(--gold);
  font-weight: 900;
}

.note {
  padding: 14px 16px;
  border: 1px solid rgba(246, 199, 106, 0.25);
  background: rgba(246, 199, 106, 0.08);
  border-radius: 16px;
  color: rgba(255,255,255,0.78) !important;
}

.featureGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.featureCard {
  overflow: hidden;
}

.featureImage {
  height: 190px;
  padding: 10px;
  background: #071d22;
  border-bottom: 1px solid var(--line);
}

.featureCopy {
  padding: 22px;
}

.featureCopy a {
  display: inline-flex;
  margin-top: 10px;
  color: var(--brand2);
  text-decoration: none;
  font-weight: 900;
}

.reviewsSection {
  padding-top: 48px;
}

.reviewGrid,
.faqGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.reviewCard,
.faqCard {
  padding: 24px;
}

.stars {
  color: var(--gold);
  letter-spacing: 0.1em;
  margin-bottom: 12px;
}

.centerCta {
  display: flex;
  justify-content: center;
  margin-top: 26px;
}

.visitCard {
  display: grid;
  grid-template-columns: 1fr 0.75fr;
  gap: 24px;
  padding: clamp(24px, 4vw, 44px);
}

.hoursBox {
  background: rgba(0, 0, 0, 0.18);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 22px;
}

.hoursBox h3 {
  margin-bottom: 16px;
}

.hoursList {
  display: grid;
  gap: 8px;
}

.hoursRow {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255,255,255,0.09);
  color: var(--muted);
}

.hoursRow:last-child {
  border-bottom: 0;
}

.hoursRow strong {
  color: white;
  text-align: right;
  white-space: nowrap;
}

.footer {
  width: min(1180px, calc(100% - 36px));
  margin: 0 auto;
  padding: 34px 0 48px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  display: flex;
  justify-content: space-between;
  gap: 18px;
  flex-wrap: wrap;
}

.footer p {
  margin: 0;
}

.footer div {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.footer a {
  color: var(--brand2);
  text-decoration: none;
  font-weight: 800;
}

@media (max-width: 980px) {
  .header {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .brand {
    min-width: 0;
  }

  .nav {
    justify-content: flex-start;
    overflow-x: auto;
    flex-wrap: nowrap;
    padding-bottom: 4px;
  }

  .nav a {
    flex: 0 0 auto;
  }

  .language {
    justify-content: flex-start;
  }

  .hero,
  .splitSection,
  .visitCard {
    grid-template-columns: 1fr;
  }

  .hero {
    min-height: 0;
    padding-top: 34px;
  }

  .heroImageFrame {
    height: 360px;
  }

  .productGrid,
  .featureGrid {
    grid-template-columns: repeat(2, 1fr);
  }

  .reviewGrid,
  .faqGrid,
  .trustGrid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 620px) {
  .section {
    width: min(100% - 26px, 1180px);
    padding: 48px 0;
  }

  .header {
    padding: 14px;
  }

  h1 {
    font-size: 42px;
  }

  h2 {
    font-size: 31px;
  }

  .lead,
  .sectionHeading p,
  .premiumPanel p,
  .addressText {
    font-size: 16px;
  }

  .heroImageFrame {
    height: 285px;
    border-radius: 24px;
  }

  .productGrid,
  .featureGrid,
  .reviewGrid,
  .faqGrid {
    grid-template-columns: 1fr;
  }

  .productImage {
    height: 190px;
  }

  .featureImage {
    height: 180px;
  }

  .productCopy,
  .featureCopy,
  .reviewCard,
  .faqCard {
    padding: 20px;
  }

  .btn {
    width: 100%;
  }

  .ctaRow {
    width: 100%;
  }

  .hoursRow {
    align-items: flex-start;
  }

  .footer {
    width: min(100% - 26px, 1180px);
  }
}
`;

export default App;
