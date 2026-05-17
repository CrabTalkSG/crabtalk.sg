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
  facebookFeature: "https://www.facebook.com/share/v/1G11gaRXxS/",
  shinMin: "https://www.facebook.com/share/v/1G11gaRXxS/",
};

const ADDRESS = "31 Commonwealth Crescent #01-41/42/43, Singapore 149644";

const img = (name) => `/images/${name}`;

const HOURS = [
  { day: "Monday", hours: "12pm – 5pm" },
  { day: "Tuesday", hours: "8am – 7pm" },
  { day: "Wednesday", hours: "8am – 7pm" },
  { day: "Thursday", hours: "8am – 7pm" },
  { day: "Friday", hours: "8am – 8pm" },
  { day: "Saturday", hours: "8am – 8pm" },
  { day: "Sunday", hours: "8am – 5pm" },
];

const languages = {
  en: {
    code: "EN",
    brand: "CRAB TALK",
    brandSub: "LIVE SEAFOOD SUPPLY",
    navHome: "Crab Talk",
    navSelection: "Fresh Selection",
    navHow: "How It Works",
    navReviews: "Reviews",
    navFind: "Find Us",
    whatsapp: "WhatsApp",
    heroBadge: "Physical Live Seafood Stall",
    heroTitle: "Pick Your Live Seafood From Our Tanks",
    heroText:
      "Visit Crab Talk at Commonwealth Crescent to choose live crabs, roe crabs, lobsters, oysters, Manila clams, Soon Hock and more. Select your seafood fresh from the tank, then let us clean, cut and pack it for easy home cooking.",
    heroNote:
      "Crab Talk is not an online seafood shop. WhatsApp is mainly for checking today’s arrival, availability and reservation enquiries.",
    visitStall: "Visit Our Stall Today",
    checkArrival: "WhatsApp to Check Today’s Arrival",
    telegram: "Join Telegram Updates",
    addressLabel: "Stall Address",
    today: "Today",
    selectionKicker: "Fresh Daily Selection",
    selectionTitle: "Pick Your Own Fresh Seafood From Our Live Tanks",
    selectionText:
      "Daily selection depends on arrival, size and season. Visit the stall to choose what looks best on the day.",
    howKicker: "Simple Buying Process",
    howTitle: "How It Works",
    howText:
      "Clear, simple and made for customers who want to see their seafood before buying.",
    homeTitle: "Made for Home Cooking",
    homeText:
      "Ideal for family meals, gatherings and weekend seafood nights. Choose from the tank, request cleaning or cutting where suitable, and bring home fresh seafood ready for your own cooking.",
    cookingTitle: "Optional Nearby Cooking",
    cookingText:
      "Selected seafood may sometimes be cooked nearby, subject to capacity, dish suitability and time slot availability. Crab Talk’s main focus remains live seafood supply for home cooking.",
    whyKicker: "Why Customers Visit",
    whyTitle: "Why Crab Talk",
    reviewsKicker: "Customer Feedback",
    reviewsTitle: "What Customers Say",
    faqKicker: "FAQ",
    faqTitle: "Common Questions",
    visitKicker: "Find Us",
    visitTitle: "Visit Crab Talk at Commonwealth Crescent",
    visitText:
      "Come down, choose from the live tanks, and ask our team what is suitable for your budget, pax and cooking style.",
    openingHours: "Opening Hours",
    footerText:
      "Live seafood availability changes daily. Prices, sizes and preparation services are subject to stock and stall capacity.",
  },
  zh: {
    code: "中文",
    brand: "CRAB TALK",
    brandSub: "活海鲜供应",
    navHome: "Crab Talk",
    navSelection: "新鲜选择",
    navHow: "购买流程",
    navReviews: "顾客评价",
    navFind: "地址",
    whatsapp: "WhatsApp",
    heroBadge: "实体活海鲜档口",
    heroTitle: "到水缸亲自挑选活海鲜",
    heroText:
      "欢迎到 Commonwealth Crescent 的 Crab Talk，亲自挑选活蟹、膏蟹、龙虾、生蚝、马尼拉蛤、笋壳鱼等。挑选后，可向我们询问清理、切好和打包服务，方便回家料理。",
    heroNote:
      "Crab Talk 不是线上海鲜店。WhatsApp 主要用于查询当天到货、库存和预留咨询。",
    visitStall: "今天到档口看看",
    checkArrival: "WhatsApp 查询今日到货",
    telegram: "加入 Telegram 更新",
    addressLabel: "档口地址",
    today: "今日",
    selectionKicker: "每日新鲜选择",
    selectionTitle: "从活海鲜水缸亲自挑选",
    selectionText:
      "每日货源会根据到货、尺寸和季节而变化。欢迎到店挑选当天最合适的海鲜。",
    howKicker: "简单购买流程",
    howTitle: "如何购买",
    howText: "适合想亲眼看货、亲自挑选海鲜的顾客。",
    homeTitle: "适合家庭料理",
    homeText:
      "适合家庭聚餐、周末加菜和海鲜晚餐。可从水缸挑选海鲜，并根据情况询问清理、切好和打包服务。",
    cookingTitle: "附近代煮选项",
    cookingText:
      "部分海鲜有时可安排附近代煮，需视对方档口容量、菜式和时段而定。Crab Talk 的主要服务仍是活海鲜供应和家庭料理准备。",
    whyKicker: "为什么选择我们",
    whyTitle: "为什么顾客会来 Crab Talk",
    reviewsKicker: "顾客反馈",
    reviewsTitle: "顾客怎么说",
    faqKicker: "FAQ",
    faqTitle: "常见问题",
    visitKicker: "地址",
    visitTitle: "到 Commonwealth Crescent 找 Crab Talk",
    visitText:
      "欢迎到店从水缸挑选海鲜，并告诉我们人数、预算和想要的煮法，我们会尽量建议适合的选择。",
    openingHours: "营业时间",
    footerText:
      "活海鲜供应每日不同。价格、尺寸和处理服务需视当天库存和档口情况而定。",
  },
  ja: {
    code: "日本語",
    brand: "CRAB TALK",
    brandSub: "ライブシーフード販売",
    navHome: "Crab Talk",
    navSelection: "海鮮ラインナップ",
    navHow: "購入方法",
    navReviews: "レビュー",
    navFind: "アクセス",
    whatsapp: "WhatsApp",
    heroBadge: "実店舗のライブシーフードストール",
    heroTitle: "水槽から活きた海鮮を選べます",
    heroText:
      "Commonwealth Crescent の Crab Talk で、活ガニ、蟹味噌入り蟹、ロブスター、牡蠣、マニラクラム、Soon Hock などを店頭で選べます。選んだ海鮮は、必要に応じて清掃・カット・梱包についてご相談ください。",
    heroNote:
      "Crab Talk はオンライン海鮮ショップではありません。WhatsApp は主に当日の入荷、在庫、取り置き相談用です。",
    visitStall: "店舗への行き方",
    checkArrival: "WhatsAppで本日の入荷確認",
    telegram: "Telegram更新を見る",
    addressLabel: "店舗住所",
    today: "本日",
    selectionKicker: "毎日の新鮮ラインナップ",
    selectionTitle: "ライブ水槽から自分で選べる海鮮",
    selectionText:
      "入荷、サイズ、季節によりラインナップは変わります。店頭で実際に見てお選びください。",
    howKicker: "分かりやすい購入方法",
    howTitle: "購入の流れ",
    howText: "実際に海鮮を見てから買いたい方に向いています。",
    homeTitle: "家庭料理にぴったり",
    homeText:
      "家族の食事、週末の海鮮料理、ホームパーティーにおすすめです。水槽から選び、可能な場合は清掃・カット・梱包についてご相談ください。",
    cookingTitle: "近隣調理オプション",
    cookingText:
      "一部の海鮮は近隣で調理できる場合がありますが、混雑状況、料理内容、時間枠によります。Crab Talk の主なサービスは家庭料理向けのライブシーフード販売です。",
    whyKicker: "選ばれる理由",
    whyTitle: "Crab Talk の魅力",
    reviewsKicker: "お客様の声",
    reviewsTitle: "レビュー",
    faqKicker: "FAQ",
    faqTitle: "よくある質問",
    visitKicker: "アクセス",
    visitTitle: "Commonwealth Crescent の Crab Talk へ",
    visitText:
      "人数、予算、調理方法を教えていただければ、店頭で合う海鮮をご提案します。",
    openingHours: "営業時間",
    footerText:
      "ライブシーフードの在庫は日々変わります。価格、サイズ、下処理サービスは当日の在庫と店頭状況によります。",
  },
};

const selectionItems = [
  {
    title: {
      en: "Live Mud Crabs",
      zh: "活泥蟹",
      ja: "活マッドクラブ",
    },
    text: {
      en: "Meaty crabs suitable for steaming, chilli crab, black pepper crab or ginger scallion crab.",
      zh: "适合清蒸、辣椒蟹、黑胡椒蟹或姜葱蟹。",
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
    text: {
      en: "Rich roe, firm meat and popular for premium home dining.",
      zh: "膏香浓郁，肉质结实，适合家庭聚餐。",
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
    text: {
      en: "Boston lobster and green lobster options depending on daily arrival.",
      zh: "视每日到货供应波士顿龙虾和青龙虾。",
      ja: "入荷状況により、ボストンロブスターやグリーンロブスターをご用意。",
    },
    image: [
      img("product-live-lobster-new.jpg"),
      img("product-boston-lobster-display.jpg"),
      img("product-live-green-lobster-01.jpg"),
    ],
  },
  {
    title: {
      en: "Fresh Oysters",
      zh: "新鲜生蚝",
      ja: "新鮮な牡蠣",
    },
    text: {
      en: "Cold, clean and suitable for platters, gatherings or weekend treats.",
      zh: "适合海鲜拼盘、聚餐和周末加菜。",
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
    text: {
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
    text: {
      en: "Live fish options for steaming, Hong Kong style preparation or home cooking.",
      zh: "适合清蒸、港式蒸鱼或家庭料理。",
      ja: "蒸し料理、香港風、家庭料理に向いた活魚です。",
    },
    image: [
      img("product-live-soon-hock-premium-fish.jpg"),
      img("product-live-soon-hock-01.jpg"),
    ],
  },
];

const howSteps = [
  {
    icon: "📍",
    title: {
      en: "Visit our stall",
      zh: "到我们的档口",
      ja: "店舗へ来店",
    },
    text: {
      en: "Come to 31 Commonwealth Crescent #01-41/42/43 S(149644).",
      zh: "地址：31 Commonwealth Crescent #01-41/42/43 S(149644)。",
      ja: "31 Commonwealth Crescent #01-41/42/43 S(149644) へお越しください。",
    },
  },
  {
    icon: "🌊",
    title: {
      en: "Pick from the live tanks",
      zh: "从水缸挑选",
      ja: "水槽から選ぶ",
    },
    text: {
      en: "Choose your own live seafood directly from our tanks.",
      zh: "从活海鲜水缸亲自挑选。",
      ja: "ライブ水槽から直接お選びいただけます。",
    },
  },
  {
    icon: "🔪",
    title: {
      en: "We clean, cut and pack",
      zh: "清理、切好、打包",
      ja: "清掃・カット・梱包",
    },
    text: {
      en: "Need help preparing your seafood for home cooking? Let us know at the stall.",
      zh: "需要帮忙处理回家料理的海鲜？请在档口告诉我们。",
      ja: "家庭料理用の下処理が必要な場合は、店頭でご相談ください。",
    },
  },
  {
    icon: "🍲",
    title: {
      en: "Cook at home",
      zh: "回家料理",
      ja: "自宅で調理",
    },
    text: {
      en: "Bring home fresh seafood for steaming, chilli crab, black pepper crab, bee hoon, hotpot or family meals.",
      zh: "带回家做清蒸、辣椒蟹、黑胡椒蟹、米粉、火锅或家庭餐。",
      ja: "蒸し料理、チリクラブ、ブラックペッパー、ビーフン、鍋料理に。",
    },
  },
];

const whyItems = [
  {
    icon: "🦀",
    title: {
      en: "Live seafood you can see",
      zh: "看得到的活海鲜",
      ja: "目で見て選べる活海鮮",
    },
    text: {
      en: "Pick crabs, lobsters, clams and fish directly from the tanks.",
      zh: "直接从水缸挑选螃蟹、龙虾、蛤蜊和活鱼。",
      ja: "カニ、ロブスター、貝、魚を水槽から直接選べます。",
    },
  },
  {
    icon: "🌅",
    title: {
      en: "Selected daily",
      zh: "每日挑选",
      ja: "毎日入荷",
    },
    text: {
      en: "Selection changes with the day’s arrival, season and size.",
      zh: "货源会根据每日到货、季节和尺寸而变化。",
      ja: "入荷、季節、サイズによってラインナップが変わります。",
    },
  },
  {
    icon: "🔪",
    title: {
      en: "Cleaning and cutting available",
      zh: "可询问清理与切好",
      ja: "下処理相談可",
    },
    text: {
      en: "Where suitable, seafood can be cleaned, cut and packed for easier home cooking.",
      zh: "适合的海鲜可询问清理、切好和打包服务。",
      ja: "可能なものは清掃・カット・梱包もご相談ください。",
    },
  },
  {
    icon: "💬",
    title: {
      en: "Friendly advice",
      zh: "亲切建议",
      ja: "調理アドバイス",
    },
    text: {
      en: "Tell us your pax, budget and cooking style. We can recommend suitable seafood.",
      zh: "告诉我们人数、预算和煮法，我们会建议适合的海鲜。",
      ja: "人数、予算、調理方法に合わせておすすめを提案します。",
    },
  },
];

const reviews = [
  {
    text: {
      en: "Fresh seafood and friendly service. The team gives useful advice on what to choose and how to cook it.",
      zh: "海鲜新鲜，服务亲切，也会建议适合的选择和煮法。",
      ja: "新鮮な海鮮と親切なサービス。選び方や調理方法も相談できます。",
    },
    name: "Customer feedback",
  },
  {
    text: {
      en: "Good place to buy live crabs and seafood for home cooking. Helpful when choosing portions for family meals.",
      zh: "适合买活蟹和海鲜回家料理，也会帮忙建议家庭份量。",
      ja: "活ガニや海鮮を家庭料理用に買うのに便利。人数に合わせた量も相談できます。",
    },
    name: "Customer feedback",
  },
  {
    text: {
      en: "A different market experience — choose from the tanks and bring home seafood prepared for cooking.",
      zh: "很不一样的市场体验，可以从水缸挑选，再带回家料理。",
      ja: "水槽から選んで、家庭料理用に持ち帰れる市場らしい体験です。",
    },
    name: "Customer feedback",
  },
];

const faqs = {
  en: [
    {
      q: "Can I buy directly online?",
      a: "Crab Talk is mainly a physical live seafood stall. WhatsApp is for checking availability, today’s arrival and reservation enquiries.",
    },
    {
      q: "Can you clean and cut the seafood?",
      a: "For selected seafood, cleaning, cutting and packing may be available depending on item type and stall capacity.",
    },
    {
      q: "Are prices fixed every day?",
      a: "Live seafood prices depend on arrival, size, season and supply. Check with us before coming down if you need specific items.",
    },
    {
      q: "Can the seafood be cooked nearby?",
      a: "Some seafood may sometimes be cooked nearby, subject to capacity and timing. Please check at the stall.",
    },
  ],
  zh: [
    {
      q: "可以直接线上购买吗？",
      a: "Crab Talk 主要是实体活海鲜档口。WhatsApp 主要用于查询库存、当天到货和预留咨询。",
    },
    {
      q: "可以帮忙清理和切好吗？",
      a: "部分海鲜可根据种类和档口情况询问清理、切好和打包服务。",
    },
    {
      q: "价格每天一样吗？",
      a: "活海鲜价格会根据到货、尺寸、季节和供应而变化。如需特定海鲜，建议来之前先询问。",
    },
    {
      q: "可以在附近代煮吗？",
      a: "部分海鲜有时可安排附近代煮，但需视容量和时间而定。请在档口确认。",
    },
  ],
  ja: [
    {
      q: "オンラインで直接購入できますか？",
      a: "Crab Talk は主に実店舗のライブシーフードストールです。WhatsApp は在庫、当日の入荷、取り置き相談用です。",
    },
    {
      q: "清掃やカットはできますか？",
      a: "一部の海鮮は、種類や店頭状況により清掃・カット・梱包をご相談いただけます。",
    },
    {
      q: "価格は毎日同じですか？",
      a: "ライブシーフードの価格は入荷、サイズ、季節、供給状況によって変わります。",
    },
    {
      q: "近くで調理できますか？",
      a: "一部の海鮮は近隣で調理できる場合がありますが、混雑状況と時間によります。店頭でご確認ください。",
    },
  ],
};

const heroImages = [
  img("stall-crab-talk-live-tanks.jpg"),
  img("stall-crab-talk-front-02.jpg"),
  img("feature-8days-original-thumbnail.jpg"),
];

const homeCookingImages = [
  img("feature-8days-original-thumbnail.jpg"),
  img("dish-chilli-crab-rich-sauce.jpg"),
  img("dish-steamed-crab-01.jpg"),
];

const optionalCookingImages = [
  img("dish-lobster-yee-mee-table-shot.jpg"),
  img("dish-lobster-bee-hoon-fai-kee-01.jpg"),
  img("partner-fai-kee-food-overview.jpg"),
  img("dish-steamed-soon-hock-fai-kee.jpg"),
  img("dish-chilli-crab-table-shot.jpg"),
];

const featureCards = [
  {
    title: "8 Days Feature",
    text: "Featured for the live seafood stall and optional nearby cooking concept at Commonwealth Crescent.",
    image: img("feature-8days-original-thumbnail.jpg"),
    link: LINKS.eightDays,
  },
  {
    title: "TikTok Updates",
    text: "Follow our latest seafood arrivals, tank videos and daily updates.",
    image: img("feature-botak-jazz-tiktok.jpg"),
    link: LINKS.tiktok,
  },
  {
    title: "Facebook AI Feature",
    text: "Local Facebook feature highlighting a crab seller using AI content to introduce Crab Talk’s live seafood stall story.",
    image: [
      img("AI-feature.jpeg"),
      img("AI-feature.jpg"),
      img("ai-feature.jpeg"),
      img("ai-feature.jpg"),
      img("AI-feature.png"),
      img("ai-feature.png"),
    ],
    link: LINKS.facebookFeature,
  },
];

function SmartImage({ src, alt, className = "" }) {
  const sources = Array.isArray(src) ? src : [src];
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`imageFallback ${className}`}>
        <span>🦀</span>
      </div>
    );
  }

  return (
    <img
      className={className}
      src={sources[index]}
      alt={alt}
      loading="lazy"
      onError={() => {
        if (index < sources.length - 1) {
          setIndex(index + 1);
        } else {
          setFailed(true);
        }
      }}
    />
  );
}

function RotatingImage({ images, alt, className = "", interval = 3600 }) {
  const sources = Array.isArray(images) ? images.filter(Boolean) : [images].filter(Boolean);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (sources.length <= 1) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % sources.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [sources.length, interval]);

  if (!sources.length) {
    return (
      <div className={`imageFallback ${className}`}>
        <span>🦀</span>
      </div>
    );
  }

  return (
    <SmartImage
      key={sources[activeIndex]}
      src={sources[activeIndex]}
      alt={alt}
      className={className}
    />
  );
}

function Logo() {
  return (
    <a className="logoLockup" href="#home" aria-label="Crab Talk home">
      <div className="logoMark">
        <SmartImage
          src={[
            img("crabtalk-logo.png"),
            img("crab-talk-logo.png"),
            img("logo.png"),
            img("Logo.png"),
          ]}
          alt="Crab Talk logo"
        />
      </div>
      <div className="logoText">
        <strong>CRAB TALK</strong>
        <span>LIVE SEAFOOD SUPPLY</span>
      </div>
    </a>
  );
}

function getTodayHours() {
  const day = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    timeZone: "Asia/Singapore",
  });

  return HOURS.find((item) => item.day === day) || HOURS[0];
}

function App() {
  const [lang, setLang] = useState("en");
  const t = languages[lang];
  const today = useMemo(() => getTodayHours(), []);

  useEffect(() => {
    if (!GOOGLE_TAG_ID) return;

    const existing = document.querySelector(
      `script[src="https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}"]`
    );

    if (!existing) {
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
      <style>{styles}</style>

      <div className="site" id="home">
        <header className="header">
          <div className="container headerInner">
            <Logo />

            <nav className="desktopNav" aria-label="Main navigation">
              <a href="#home">{t.navHome}</a>
              <a href="#selection">{t.navSelection}</a>
              <a href="#how">{t.navHow}</a>
              <a href="#reviews">{t.navReviews}</a>
              <a href="#visit">{t.navFind}</a>
            </nav>

            <div className="headerActions">
              <select
                className="languageSelect"
                value={lang}
                onChange={(event) => setLang(event.target.value)}
                aria-label="Select language"
              >
                <option value="en">EN</option>
                <option value="zh">中文</option>
                <option value="ja">日本語</option>
              </select>

              <a className="button buttonPrimary headerWhatsapp" href={LINKS.whatsapp}>
                {t.whatsapp}
              </a>
            </div>
          </div>
        </header>

        <main>
          <section className="hero">
            <div className="container heroGrid">
              <div className="heroContent">
                <div className="heroBadges">
                  <span>{t.heroBadge}</span>
                  <span>
                    {t.today}: {today.day} {today.hours}
                  </span>
                </div>

                <h1>{t.heroTitle}</h1>

                <p className="heroText">{t.heroText}</p>
                <p className="heroNote">{t.heroNote}</p>

                <div className="addressCard">
                  <span>📍</span>
                  <div>
                    <small>{t.addressLabel}</small>
                    <strong>{ADDRESS}</strong>
                  </div>
                </div>

                <div className="heroCtas">
                  <a
                    className="button buttonGold"
                    href={LINKS.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.visitStall}
                  </a>

                  <a className="button buttonPrimary" href={LINKS.whatsapp}>
                    {t.checkArrival}
                  </a>

                  <a
                    className="button buttonOutline"
                    href={LINKS.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.telegram}
                  </a>
                </div>
              </div>

              <div className="heroImageCard">
                <RotatingImage
                  images={heroImages}
                  alt="Crab Talk live seafood stall"
                  interval={4200}
                />
              </div>
            </div>
          </section>

          <section id="selection" className="section sectionTint">
            <div className="container">
              <div className="sectionHeader">
                <p>{t.selectionKicker}</p>
                <h2>{t.selectionTitle}</h2>
                <span>{t.selectionText}</span>
              </div>

              <div className="productGrid">
                {selectionItems.map((item) => (
                  <article className="productCard" key={item.title.en}>
                    <div className="productMedia">
                      <SmartImage src={item.image} alt={item.title[lang]} />
                    </div>

                    <div className="productBody">
                      <h3>{item.title[lang]}</h3>
                      <p>{item.text[lang]}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="how" className="section">
            <div className="container">
              <div className="sectionHeader">
                <p>{t.howKicker}</p>
                <h2>{t.howTitle}</h2>
                <span>{t.howText}</span>
              </div>

              <div className="stepsGrid">
                {howSteps.map((step, index) => (
                  <article className="stepCard" key={step.title.en}>
                    <div className="stepTop">
                      <span className="stepNumber">{index + 1}</span>
                      <span className="stepIcon">{step.icon}</span>
                    </div>
                    <h3>{step.title[lang]}</h3>
                    <p>{step.text[lang]}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section sectionTint">
            <div className="container twoColumn">
              <article className="infoCard">
                <div className="infoImage largeImage">
                  <RotatingImage
                    images={homeCookingImages}
                    alt="Seafood prepared for home cooking"
                    interval={3800}
                  />
                </div>

                <div className="infoBody">
                  <h2>{t.homeTitle}</h2>
                  <p>{t.homeText}</p>
                </div>
              </article>

              <article className="infoCard">
                <div className="optionalSlider">
                  <RotatingImage
                    images={optionalCookingImages}
                    alt="Nearby cooked seafood dish"
                    interval={3800}
                  />
                </div>

                <div className="infoBody">
                  <h2>{t.cookingTitle}</h2>
                  <p>{t.cookingText}</p>
                </div>
              </article>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <div className="sectionHeader">
                <p>{t.whyKicker}</p>
                <h2>{t.whyTitle}</h2>
              </div>

              <div className="whyGrid">
                {whyItems.map((item) => (
                  <article className="whyCard" key={item.title.en}>
                    <div className="whyIcon">{item.icon}</div>
                    <h3>{item.title[lang]}</h3>
                    <p>{item.text[lang]}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section sectionTint">
            <div className="container">
              <div className="sectionHeader">
                <p>Featured / Social Proof</p>
                <h2>Featured Locally</h2>
              </div>

              <div className="featureGrid">
                {featureCards.map((feature) => (
                  <a
                    className="featureCard"
                    key={feature.title}
                    href={feature.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SmartImage src={feature.image} alt={feature.title} />
                    <div>
                      <h3>{feature.title}</h3>
                      <p>{feature.text}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section id="reviews" className="section">
            <div className="container">
              <div className="sectionHeader">
                <p>{t.reviewsKicker}</p>
                <h2>{t.reviewsTitle}</h2>
              </div>

              <div className="reviewsGrid">
                {reviews.map((review) => (
                  <article className="reviewCard" key={review.text.en}>
                    <div className="stars">★★★★★</div>
                    <p>{review.text[lang]}</p>
                    <strong>{review.name}</strong>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section sectionTint">
            <div className="container">
              <div className="sectionHeader">
                <p>{t.faqKicker}</p>
                <h2>{t.faqTitle}</h2>
              </div>

              <div className="faqGrid">
                {faqs[lang].map((item) => (
                  <article className="faqCard" key={item.q}>
                    <h3>{item.q}</h3>
                    <p>{item.a}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="visit" className="section">
            <div className="container">
              <div className="visitCard">
                <div>
                  <p className="visitKicker">{t.visitKicker}</p>
                  <h2>{t.visitTitle}</h2>
                  <p>{t.visitText}</p>

                  <div className="visitAddress">{ADDRESS}</div>

                  <div className="heroCtas">
                    <a
                      className="button buttonGold"
                      href={LINKS.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.visitStall}
                    </a>

                    <a className="button buttonPrimary" href={LINKS.whatsapp}>
                      {t.checkArrival}
                    </a>
                  </div>
                </div>

                <div className="hoursBox">
                  <h3>{t.openingHours}</h3>

                  {HOURS.map((item) => (
                    <div
                      className={`hourRow ${
                        item.day === today.day ? "activeHour" : ""
                      }`}
                      key={item.day}
                    >
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
              <Logo />
              <p>{t.footerText}</p>
            </div>

            <div className="footerLinks">
              <a href={LINKS.whatsapp}>WhatsApp</a>
              <a href={LINKS.telegram} target="_blank" rel="noopener noreferrer">
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

        <div className="mobileBar">
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

const styles = `
:root {
  --teal: #06343b;
  --teal2: #0b5964;
  --aqua: #2aa9b8;
  --gold: #d8b152;
  --goldLight: #fff1bd;
  --cream: #f7fbfa;
  --card: #ffffff;
  --line: #dce7e6;
  --muted: #637579;
  --shadow: 0 22px 55px rgba(6, 52, 59, 0.12);
  --radius: 28px;
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
  color: var(--teal);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

.container {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
}

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--line);
}

.headerInner {
  height: 92px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 26px;
}

.logoLockup {
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: max-content;
}

.logoMark {
  width: 58px;
  height: 58px;
  border-radius: 18px;
  background: linear-gradient(135deg, #003f4a, #00a6b8);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 26px rgba(0, 63, 74, 0.2);
  overflow: hidden;
}

.logoMark img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.logoText strong {
  display: block;
  font-size: 28px;
  line-height: 1;
  font-weight: 950;
  color: var(--teal);
  letter-spacing: -0.04em;
}

.logoText span {
  display: block;
  margin-top: 8px;
  font-size: 13px;
  color: #a8842f;
  font-weight: 900;
  letter-spacing: 0.18em;
}

.desktopNav {
  display: flex;
  align-items: center;
  gap: 28px;
  font-size: 15px;
  font-weight: 850;
  color: #5d6d70;
}

.desktopNav a:hover {
  color: var(--teal);
}

.headerActions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.languageSelect {
  height: 48px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: white;
  padding: 0 18px;
  color: var(--teal);
  font-weight: 900;
  outline: none;
}

.button {
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0 22px;
  font-size: 15px;
  font-weight: 950;
  border: 1px solid transparent;
  transition: 0.2s ease;
  cursor: pointer;
  white-space: nowrap;
}

.button:hover {
  transform: translateY(-1px);
}

.buttonPrimary {
  background: var(--teal2);
  color: white;
  box-shadow: 0 16px 32px rgba(11, 89, 100, 0.2);
}

.buttonGold {
  background: var(--goldLight);
  color: var(--teal);
  border-color: rgba(216, 177, 82, 0.45);
}

.buttonOutline {
  background: white;
  color: var(--teal);
  border-color: var(--line);
}

.hero {
  padding: 78px 0 66px;
  background:
    radial-gradient(circle at top left, rgba(42, 169, 184, 0.12), transparent 32%),
    linear-gradient(180deg, #ffffff 0%, #f7fbfa 100%);
}

.heroGrid {
  display: grid;
  grid-template-columns: 1.02fr 0.98fr;
  gap: 54px;
  align-items: center;
}

.heroBadges {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
}

.heroBadges span {
  display: inline-flex;
  min-height: 38px;
  align-items: center;
  border-radius: 999px;
  padding: 0 16px;
  background: white;
  border: 1px solid var(--line);
  color: var(--teal);
  font-size: 13px;
  font-weight: 950;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.heroBadges span:first-child {
  background: var(--goldLight);
  border-color: rgba(216, 177, 82, 0.55);
}

.hero h1 {
  max-width: 720px;
  margin: 0;
  font-size: clamp(46px, 6.4vw, 82px);
  line-height: 0.95;
  letter-spacing: -0.07em;
  color: var(--teal);
}

.heroText {
  max-width: 760px;
  margin: 28px 0 0;
  font-size: clamp(18px, 2vw, 24px);
  line-height: 1.65;
  color: #49666b;
}

.heroNote {
  max-width: 760px;
  margin: 18px 0 0;
  padding: 16px 18px;
  border-left: 5px solid var(--gold);
  border-radius: 18px;
  background: white;
  color: #526a6e;
  font-weight: 700;
  line-height: 1.6;
}

.addressCard {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 24px;
  padding: 18px;
  border-radius: 22px;
  background: white;
  border: 1px solid var(--line);
  box-shadow: 0 12px 30px rgba(6, 52, 59, 0.08);
}

.addressCard span {
  width: 44px;
  height: 44px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: #eef7f5;
  font-size: 22px;
}

.addressCard small {
  display: block;
  color: var(--muted);
  font-weight: 800;
  margin-bottom: 4px;
}

.addressCard strong {
  display: block;
  color: var(--teal);
  font-size: 17px;
}

.heroCtas {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.heroImageCard {
  padding: 18px;
  border-radius: 36px;
  background: white;
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
}

.heroImageCard img {
  width: 100%;
  height: min(560px, 58vw);
  min-height: 390px;
  object-fit: cover;
  border-radius: 26px;
}

.section {
  padding: 78px 0;
}

.sectionTint {
  background: #eef7f5;
}

.sectionHeader {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 30px;
  align-items: end;
  margin-bottom: 34px;
}

.sectionHeader p {
  margin: 0 0 10px;
  color: #a8842f;
  font-size: 13px;
  font-weight: 950;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.sectionHeader h2 {
  margin: 0;
  font-size: clamp(32px, 4vw, 54px);
  line-height: 1;
  letter-spacing: -0.055em;
}

.sectionHeader span {
  color: var(--muted);
  font-size: 18px;
  line-height: 1.7;
}

.productGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.productCard,
.stepCard,
.whyCard,
.reviewCard,
.faqCard,
.infoCard,
.featureCard {
  background: white;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: 0 15px 34px rgba(6, 52, 59, 0.07);
}

.productMedia {
  height: 235px;
  background: #f7fbfa;
  border-bottom: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: center;
}

.productMedia img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.productBody {
  padding: 24px;
}

.productBody h3,
.stepCard h3,
.whyCard h3,
.faqCard h3,
.featureCard h3 {
  margin: 0;
  font-size: 22px;
  letter-spacing: -0.03em;
}

.productBody p,
.stepCard p,
.whyCard p,
.reviewCard p,
.faqCard p,
.featureCard p,
.infoBody p,
.visitCard p,
.footer p {
  color: var(--muted);
  line-height: 1.7;
  font-size: 16px;
}

.stepsGrid,
.whyGrid,
.reviewsGrid,
.faqGrid,
.featureGrid {
  display: grid;
  gap: 20px;
}

.stepsGrid {
  grid-template-columns: repeat(4, 1fr);
}

.stepCard,
.whyCard,
.reviewCard,
.faqCard {
  padding: 26px;
}

.stepTop {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
}

.stepNumber {
  width: 38px;
  height: 38px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: var(--teal);
  color: white;
  font-weight: 950;
}

.stepIcon,
.whyIcon {
  font-size: 34px;
}

.twoColumn {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 26px;
}

.infoImage,
.optionalSlider {
  height: 330px;
  background: #f7fbfa;
  border-bottom: 1px solid var(--line);
  position: relative;
  overflow: hidden;
}

.largeImage img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.optionalSlider {
  border-radius: var(--radius) var(--radius) 0 0;
}

.optionalSlider > img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #f7fbfa;
}

.optionalSlide {
  position: absolute;
  inset: 0;
  opacity: 0;
  animation: cookingFade 15s infinite;
}

.optionalSlide img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #f7fbfa;
}

@keyframes cookingFade {
  0% { opacity: 0; }
  5% { opacity: 1; }
  20% { opacity: 1; }
  25% { opacity: 0; }
  100% { opacity: 0; }
}

.infoBody {
  padding: 30px;
}

.infoBody h2 {
  margin: 0 0 12px;
  font-size: 34px;
  line-height: 1.08;
  letter-spacing: -0.05em;
}

.whyGrid {
  grid-template-columns: repeat(4, 1fr);
}

.featureGrid {
  grid-template-columns: repeat(3, 1fr);
}

.featureCard {
  display: block;
  transition: 0.2s ease;
}

.featureCard:hover {
  transform: translateY(-4px);
}

.featureCard img {
  width: 100%;
  height: 210px;
  object-fit: cover;
  background: #f7fbfa;
}

.featureCard div {
  padding: 22px;
}

.reviewsGrid {
  grid-template-columns: repeat(3, 1fr);
}

.stars {
  color: #d59a19;
  letter-spacing: 0.08em;
  margin-bottom: 16px;
}

.reviewCard strong {
  display: block;
  color: var(--teal);
  margin-top: 16px;
}

.faqGrid {
  grid-template-columns: repeat(2, 1fr);
}

.visitCard {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 36px;
  padding: 36px;
  border-radius: 34px;
  background: linear-gradient(135deg, var(--teal), #0b5964);
  color: white;
  box-shadow: var(--shadow);
}

.visitKicker {
  color: var(--goldLight) !important;
  font-size: 13px !important;
  font-weight: 950;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.visitCard h2 {
  margin: 0;
  font-size: clamp(34px, 4vw, 58px);
  line-height: 1;
  letter-spacing: -0.06em;
}

.visitCard p {
  color: rgba(255, 255, 255, 0.78);
  font-size: 18px;
}

.visitAddress {
  margin-top: 22px;
  padding: 18px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  font-size: 20px;
  font-weight: 900;
}

.hoursBox {
  padding: 24px;
  border-radius: 26px;
  background: rgba(255, 255, 255, 0.1);
}

.hoursBox h3 {
  margin: 0 0 18px;
  font-size: 24px;
}

.hourRow {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.84);
}

.hourRow:last-child {
  border-bottom: 0;
}

.activeHour {
  color: var(--goldLight);
  font-weight: 950;
}

.footer {
  padding: 42px 0 110px;
  background: white;
  border-top: 1px solid var(--line);
}

.footerInner {
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

.footer .logoLockup {
  margin-bottom: 16px;
}

.footerLinks {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  align-content: flex-start;
  justify-content: flex-end;
}

.footerLinks a {
  padding: 10px 14px;
  border-radius: 999px;
  background: #eef7f5;
  color: var(--teal);
  font-weight: 850;
}

.mobileBar {
  display: none;
}

.imageFallback {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background: #eef7f5;
  color: var(--teal);
  font-size: 42px;
}

@media (max-width: 1020px) {
  .desktopNav {
    display: none;
  }

  .heroGrid,
  .twoColumn,
  .visitCard,
  .sectionHeader {
    grid-template-columns: 1fr;
  }

  .productGrid,
  .stepsGrid,
  .whyGrid,
  .featureGrid,
  .reviewsGrid {
    grid-template-columns: repeat(2, 1fr);
  }

  .heroImageCard img {
    height: 440px;
    min-height: unset;
  }
}

@media (max-width: 720px) {
  .container {
    width: min(100% - 28px, 1180px);
  }

  .headerInner {
    height: 78px;
  }

  .logoMark {
    width: 48px;
    height: 48px;
    border-radius: 16px;
  }

  .logoText strong {
    font-size: 22px;
  }

  .logoText span {
    font-size: 10px;
    letter-spacing: 0.14em;
  }

  .headerWhatsapp {
    display: none;
  }

  .languageSelect {
    height: 42px;
    padding: 0 12px;
  }

  .hero {
    padding: 42px 0 44px;
  }

  .hero h1 {
    font-size: 43px;
    letter-spacing: -0.06em;
  }

  .heroText {
    font-size: 17px;
  }

  .heroBadges span {
    width: 100%;
    justify-content: center;
    font-size: 11px;
  }

  .heroImageCard {
    padding: 10px;
    border-radius: 26px;
  }

  .heroImageCard img {
    height: 300px;
    border-radius: 20px;
  }

  .section {
    padding: 52px 0;
  }

  .sectionHeader h2 {
    font-size: 34px;
  }

  .sectionHeader span {
    font-size: 16px;
  }

  .productGrid,
  .stepsGrid,
  .whyGrid,
  .featureGrid,
  .reviewsGrid,
  .faqGrid {
    grid-template-columns: 1fr;
  }

  .productMedia {
    height: 215px;
  }

  .infoImage,
  .optionalSlider {
    height: 260px;
  }

  .infoBody {
    padding: 24px;
  }

  .infoBody h2 {
    font-size: 28px;
  }

  .visitCard {
    padding: 26px;
    border-radius: 28px;
  }

  .visitCard h2 {
    font-size: 34px;
  }

  .footerInner {
    flex-direction: column;
  }

  .footerLinks {
    justify-content: flex-start;
  }

  .mobileBar {
    position: fixed;
    left: 14px;
    right: 14px;
    bottom: 14px;
    z-index: 200;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding: 10px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.92);
    border: 1px solid var(--line);
    box-shadow: 0 18px 45px rgba(6, 52, 59, 0.18);
    backdrop-filter: blur(14px);
  }

  .mobileBar .button {
    min-height: 46px;
    padding: 0 12px;
  }
}

@media (max-width: 420px) {
  .logoText strong {
    font-size: 19px;
  }

  .logoText span {
    font-size: 9px;
  }

  .hero h1 {
    font-size: 38px;
  }

  .heroCtas .button {
    width: 100%;
  }
}
`;

export default App;