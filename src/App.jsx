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
    navHome: "Crab Talk",
    navSelection: "Fresh Selection",
    navHow: "How It Works",
    navReviews: "Reviews",
    navFind: "Find Us",
    heroBadge: "Physical Live Seafood Stall",
    heroTitle: "Pick Your Live Seafood From Our Tanks",
    heroText:
      "Visit Crab Talk at Commonwealth Crescent to choose live crabs, roe crabs, lobsters, oysters, Manila clams, Soon Hock and more. Select your seafood fresh from the tank, then let us clean, cut and pack it for easy home cooking.",
    heroNote:
      "Crab Talk is not an online seafood shop. WhatsApp is mainly for checking today’s arrival, availability and reservation enquiries.",
    visitStall: "Visit Our Stall Today",
    checkArrival: "WhatsApp to Check Today’s Arrival",
    telegram: "Join Telegram Updates",
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
    navHome: "Crab Talk",
    navSelection: "新鲜选择",
    navHow: "购买流程",
    navReviews: "顾客评价",
    navFind: "地址",
    heroBadge: "实体活海鲜档口",
    heroTitle: "到水缸亲自挑选活海鲜",
    heroText:
      "欢迎到 Commonwealth Crescent 的 Crab Talk，亲自挑选活蟹、膏蟹、龙虾、生蚝、马尼拉蛤、笋壳鱼等。挑选后，可向我们询问清理、切好和打包服务，方便回家料理。",
    heroNote:
      "Crab Talk 不是线上海鲜店。WhatsApp 主要用于查询当天到货、库存和预留咨询。",
    visitStall: "今天到档口看看",
    checkArrival: "WhatsApp 查询今日到货",
    telegram: "加入 Telegram 更新",
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
      "欢迎到档口，从活海鲜水缸亲自挑选，并询问我们的团队哪一种最适合您的预算、人数和料理方式。",
    openingHours: "营业时间",
    footerText:
      "活海鲜供应每日不同。价格、尺寸和处理服务需视当天库存和档口情况而定。",
  },
  ja: {
    navHome: "Crab Talk",
    navSelection: "本日の海鮮",
    navHow: "購入方法",
    navReviews: "レビュー",
    navFind: "アクセス",
    heroBadge: "実店舗の活海鮮スタンド",
    heroTitle: "水槽から活海鮮を選べます",
    heroText:
      "Commonwealth Crescent の Crab Talk で、活ガニ、ロークラブ、ロブスター、牡蠣、マニラクラム、Soon Hock などを店頭でお選びください。選んだ海鮮は、ご家庭で調理しやすいように清掃・カット・梱包の相談も可能です。",
    heroNote:
      "Crab Talk はオンライン海鮮ショップではありません。WhatsApp は主に本日の入荷、在庫確認、予約相談用です。",
    visitStall: "今日お店へ行く",
    checkArrival: "WhatsAppで本日の入荷確認",
    telegram: "Telegram更新を見る",
    selectionKicker: "本日の新鮮な海鮮",
    selectionTitle: "ライブタンクから自分で選ぶ活海鮮",
    selectionText:
      "入荷、サイズ、季節により内容は毎日変わります。店頭でその日のおすすめをお選びください。",
    howKicker: "簡単な購入ステップ",
    howTitle: "購入方法",
    howText:
      "実物を見てから選びたいお客様に分かりやすい店頭購入スタイルです。",
    homeTitle: "家庭料理におすすめ",
    homeText:
      "家族の食事、週末の集まり、海鮮料理に最適です。水槽から選び、必要に応じて清掃・カット・梱包を相談できます。",
    cookingTitle: "近隣調理オプション",
    cookingText:
      "一部の海鮮は近隣で調理できる場合がありますが、混雑状況、料理内容、時間枠により異なります。Crab Talk の主なサービスは家庭料理向けの活海鮮販売です。",
    whyKicker: "選ばれる理由",
    whyTitle: "Crab Talk が選ばれる理由",
    reviewsKicker: "お客様の声",
    reviewsTitle: "レビュー",
    faqKicker: "FAQ",
    faqTitle: "よくある質問",
    visitKicker: "アクセス",
    visitTitle: "Commonwealth Crescent の Crab Talk へ",
    visitText:
      "店頭でライブタンクから選び、予算・人数・調理方法に合う海鮮をスタッフにご相談ください。",
    openingHours: "営業時間",
    footerText:
      "活海鮮の在庫は毎日変わります。価格、サイズ、下処理サービスは在庫と店頭状況により異なります。",
  },
};

const selectionItems = [
  {
    title: "Live Mud Crabs",
    text: "Meaty, active crabs suitable for steaming, chilli crab, black pepper crab or ginger scallion crab.",
    images: [
      img("product-live-crab-premium.jpg"),
      img("product-live-crab-closeup-01.jpg"),
      img("hero-live-mud-crab-closeup.jpg"),
    ],
  },
  {
    title: "Sri Lanka Roe Crabs",
    text: "Popular for rich roe, firm meat and premium home dining occasions.",
    images: [
      img("product-yellow-roe-crab-06.jpg"),
      img("product-yellow-roe-crab-05.jpg"),
      img("product-yellow-roe-crab-04.jpg"),
    ],
  },
  {
    title: "Live Lobsters",
    text: "Boston lobster and green lobster options depending on daily arrival.",
    images: [
      img("product-boston-lobster-display.jpg"),
      img("product-live-green-lobster-01.jpg"),
      img("product-live-green-lobster-02.jpg"),
    ],
  },
  {
    title: "Fresh Oysters",
    text: "Cold, clean and suitable for seafood platters or weekend gatherings.",
    images: [
      img("product-oysters-premium-02.jpg"),
      img("product-oysters-premium-01.jpg"),
      img("product-oysters-closeup-02.jpg"),
    ],
  },
  {
    title: "Manila Clams",
    text: "Great for steaming, soup, chilli lala or simple home cooking.",
    images: [
      img("product-manila-clams-01.jpg"),
      img("product-manila-clams-closeup.jpg"),
    ],
  },
  {
    title: "Soon Hock & Premium Fish",
    text: "Live fish options for steaming, Hong Kong style or home cooking.",
    images: [
      img("product-live-soon-hock-premium-fish.jpg"),
      img("product-live-soon-hock-01.jpg"),
    ],
  },
];

const howSteps = [
  {
    number: "01",
    title: "Visit our stall",
    text: "Come to 31 Commonwealth Crescent #01-41/42/43 S(149644).",
  },
  {
    number: "02",
    title: "Pick from the live tanks",
    text: "Choose your own live seafood directly from our tanks.",
  },
  {
    number: "03",
    title: "We clean, cut and pack",
    text: "Need help preparing your seafood for home cooking? Let us know.",
  },
  {
    number: "04",
    title: "Cook at home",
    text: "Bring home fresh seafood for steaming, chilli crab, black pepper crab, bee hoon, hotpot or family meals.",
  },
];

const whyItems = [
  {
    title: "Live seafood tanks",
    text: "See the seafood before buying and pick what suits your meal.",
  },
  {
    title: "Selected daily",
    text: "Availability changes with daily arrival, season and size.",
  },
  {
    title: "Cleaning and cutting available",
    text: "Where suitable, our team can help prepare your seafood for easy cooking.",
  },
  {
    title: "Friendly home-cooking advice",
    text: "Ask what is best for steaming, chilli crab, black pepper, bee hoon or soup.",
  },
];

const featureItems = [
  {
    title: "Featured on 8 Days",
    text: "Crab Talk was featured for its live seafood concept at Commonwealth Crescent.",
    image: img("feature-8days-original-thumbnail.jpg"),
    link: LINKS.eightDays,
  },
  {
    title: "Social media updates",
    text: "Follow TikTok and Telegram for fresh arrivals, behind-the-scenes and promo updates.",
    image: img("feature-botak-jazz-tiktok.jpg"),
    link: LINKS.tiktok,
  },
  {
    title: "Market-style seafood experience",
    text: "A straightforward way to buy live seafood for home cooking and family meals.",
    image: img("stall-crab-talk-front-01.jpg"),
    link: LINKS.maps,
  },
];

const reviews = [
  {
    name: "Google Review",
    text: "Friendly service and good advice on choosing live seafood.",
  },
  {
    name: "Google Review",
    text: "Fresh seafood selection with helpful preparation suggestions.",
  },
  {
    name: "Google Review",
    text: "Good place to buy crabs, lobsters and seafood for home cooking.",
  },
];

const faqs = [
  {
    question: "Is Crab Talk an online seafood shop?",
    answer:
      "No. Crab Talk is mainly a physical live seafood stall. Customers visit the stall to choose seafood from the tanks. WhatsApp is for checking availability, daily arrivals and reservation enquiries.",
  },
  {
    question: "Can I reserve seafood before coming down?",
    answer:
      "Yes, you may WhatsApp us to check what is available for the day. Availability changes quickly, so reservation depends on stock and timing.",
  },
  {
    question: "Do you clean or cut the seafood?",
    answer:
      "Where suitable, our team can help clean, cut and pack selected seafood for home cooking. Please ask at the stall as preparation depends on seafood type and stall capacity.",
  },
  {
    question: "Can the seafood be cooked nearby?",
    answer:
      "Sometimes selected seafood may be cooked nearby, subject to capacity, dish suitability and time slot availability. Crab Talk’s main focus remains live seafood supply for home cooking.",
  },
];

const homeCookingSlides = [
  img("product-live-crab-premium.jpg"),
  img("about-jeremy-live-crab.jpg"),
  img("stall-crab-talk-live-tanks.jpg"),
  img("product-live-soon-hock-premium-fish.jpg"),
];

const nearbyCookingSlides = [
  img("dish-lobster-yee-mee-fai-kee-hero.jpg"),
  img("dish-lobster-bee-hoon-fai-kee-01.jpg"),
  img("dish-chilli-crab-table-shot.jpg"),
  img("dish-steamed-soon-hock-fai-kee.jpg"),
  img("partner-fai-kee-food-overview.jpg"),
];

function SmartImage({ src, alt, className = "", loading = "lazy" }) {
  const sources = Array.isArray(src) ? src : [src];
  const [index, setIndex] = useState(0);

  if (!sources.length) {
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
      loading={loading}
      onError={() => {
        if (index < sources.length - 1) {
          setIndex(index + 1);
        }
      }}
    />
  );
}

function RotatingImage({ sources, alt, interval = 3200 }) {
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState([]);

  const availableSources = useMemo(
    () => sources.filter((_, itemIndex) => !failed.includes(itemIndex)),
    [sources, failed]
  );

  useEffect(() => {
    if (availableSources.length <= 1) return undefined;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % availableSources.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [availableSources.length, interval]);

  if (!availableSources.length) {
    return (
      <div className="imageFallback rotatingImage">
        <span>🦀</span>
      </div>
    );
  }

  const currentSrc = availableSources[index % availableSources.length];

  return (
    <img
      key={currentSrc}
      className="rotatingImage"
      src={currentSrc}
      alt={alt}
      loading="lazy"
      onError={() => {
        const originalIndex = sources.indexOf(currentSrc);
        setFailed((current) => [...new Set([...current, originalIndex])]);
        setIndex(0);
      }}
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
    document.title = "Crab Talk | Live Seafood Supply Singapore";

    const favicon =
      document.querySelector("link[rel='icon']") ||
      document.createElement("link");

    favicon.rel = "icon";
    favicon.href = img("crabtalk-logo.png");
    document.head.appendChild(favicon);

    const metaDescription =
      document.querySelector("meta[name='description']") ||
      document.createElement("meta");

    metaDescription.name = "description";
    metaDescription.content =
      "Crab Talk is a live seafood stall at Commonwealth Crescent. Pick live crabs, roe crabs, lobsters, oysters, Manila clams, Soon Hock and more from our tanks.";
    document.head.appendChild(metaDescription);
  }, []);

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
                WhatsApp
              </a>
            </div>
          </div>
        </header>

        <main>
          <section className="hero">
            <div className="container heroGrid">
              <div className="heroCopy">
                <div className="heroBadges">
                  <span className="badge badgeGold">{t.heroBadge}</span>
                  <span className="badge badgeLight">
                    {t.today} · {today.day}: {today.hours}
                  </span>
                </div>

                <h1>{t.heroTitle}</h1>
                <p className="heroText">{t.heroText}</p>
                <p className="heroNote">{t.heroNote}</p>

                <div className="heroActions">
                  <a className="button buttonPrimary" href={LINKS.maps}>
                    {t.visitStall}
                  </a>
                  <a className="button buttonSecondary" href={LINKS.whatsapp}>
                    {t.checkArrival}
                  </a>
                </div>

                <div className="addressCard">
                  <div className="pin">📍</div>
                  <div>
                    <strong>{ADDRESS}</strong>
                    <a href={LINKS.maps}>Get Directions</a>
                  </div>
                </div>
              </div>

              <div className="heroMedia">
                <SmartImage
                  src={[
                    img("feature-8days-original-thumbnail.jpg"),
                    img("feature-8days-crab-talk-fai-kee.jpg"),
                    img("stall-crab-talk-front-01.jpg"),
                  ]}
                  alt="Crab Talk live seafood selection"
                  loading="eager"
                />
              </div>
            </div>
          </section>

          <section className="section" id="selection">
            <div className="container">
              <div className="sectionHeader">
                <span>{t.selectionKicker}</span>
                <h2>{t.selectionTitle}</h2>
                <p>{t.selectionText}</p>
              </div>

              <div className="selectionGrid">
                {selectionItems.map((item) => (
                  <article className="selectionCard" key={item.title}>
                    <div className="selectionImage">
                      <SmartImage src={item.images} alt={item.title} />
                    </div>
                    <div className="selectionBody">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section sectionSoft" id="how">
            <div className="container">
              <div className="sectionHeader">
                <span>{t.howKicker}</span>
                <h2>{t.howTitle}</h2>
                <p>{t.howText}</p>
              </div>

              <div className="stepsGrid">
                {howSteps.map((step) => (
                  <article className="stepCard" key={step.number}>
                    <div className="stepNumber">{step.number}</div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                ))}
              </div>

              <div className="useCaseGrid">
                <article className="useCaseCard">
                  <div className="useCaseImage">
                    <RotatingImage
                      sources={homeCookingSlides}
                      alt="Live seafood selected for home cooking"
                      interval={3000}
                    />
                  </div>
                  <div className="useCaseBody">
                    <h3>{t.homeTitle}</h3>
                    <p>{t.homeText}</p>
                  </div>
                </article>

                <article className="useCaseCard muted">
                  <div className="useCaseImage">
                    <RotatingImage
                      sources={nearbyCookingSlides}
                      alt="Nearby cooked seafood dishes"
                      interval={3400}
                    />
                  </div>
                  <div className="useCaseBody">
                    <h3>{t.cookingTitle}</h3>
                    <p>{t.cookingText}</p>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <div className="sectionHeader">
                <span>{t.whyKicker}</span>
                <h2>{t.whyTitle}</h2>
              </div>

              <div className="whyGrid">
                {whyItems.map((item) => (
                  <article className="whyCard" key={item.title}>
                    <div className="whyIcon">✓</div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section sectionSoft">
            <div className="container">
              <div className="featureGrid">
                {featureItems.map((item) => (
                  <a className="featureCard" href={item.link} key={item.title}>
                    <div className="featureImage">
                      <SmartImage src={item.image} alt={item.title} />
                    </div>
                    <div className="featureBody">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section className="section" id="reviews">
            <div className="container">
              <div className="sectionHeader">
                <span>{t.reviewsKicker}</span>
                <h2>{t.reviewsTitle}</h2>
              </div>

              <div className="reviewGrid">
                {reviews.map((review, index) => (
                  <article className="reviewCard" key={`${review.name}-${index}`}>
                    <div className="stars">★★★★★</div>
                    <p>“{review.text}”</p>
                    <strong>{review.name}</strong>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section sectionSoft">
            <div className="container">
              <div className="sectionHeader">
                <span>{t.faqKicker}</span>
                <h2>{t.faqTitle}</h2>
              </div>

              <div className="faqGrid">
                {faqs.map((item) => (
                  <article className="faqCard" key={item.question}>
                    <h3>{item.question}</h3>
                    <p>{item.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section visitSection" id="visit">
            <div className="container visitGrid">
              <div>
                <div className="sectionHeader alignLeft">
                  <span>{t.visitKicker}</span>
                  <h2>{t.visitTitle}</h2>
                  <p>{t.visitText}</p>
                </div>

                <div className="visitActions">
                  <a className="button buttonPrimary" href={LINKS.maps}>
                    Open Google Maps
                  </a>
                  <a className="button buttonSecondary" href={LINKS.whatsapp}>
                    Check Today’s Arrival
                  </a>
                  <a className="button buttonGhost" href={LINKS.telegram}>
                    Telegram Updates
                  </a>
                </div>
              </div>

              <div className="hoursCard">
                <h3>{t.openingHours}</h3>
                <div className="hoursList">
                  {HOURS.map((item) => (
                    <div
                      className={`hoursRow ${
                        item.day === today.day ? "active" : ""
                      }`}
                      key={item.day}
                    >
                      <span>{item.day}</span>
                      <strong>{item.hours}</strong>
                    </div>
                  ))}
                </div>
                <div className="mapCard">
                  <strong>{ADDRESS}</strong>
                  <a href={LINKS.maps}>Get Directions</a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="container footerInner">
            <Logo />
            <p>{t.footerText}</p>
            <div className="footerLinks">
              <a href={LINKS.whatsapp}>WhatsApp</a>
              <a href={LINKS.telegram}>Telegram</a>
              <a href={LINKS.tiktok}>TikTok</a>
              <a href={LINKS.maps}>Google Maps</a>
            </div>
          </div>
        </footer>

        <div className="mobileBar">
          <a href={LINKS.maps}>Visit Stall</a>
          <a href={LINKS.whatsapp}>WhatsApp</a>
        </div>
      </div>
    </>
  );
}

const styles = `
:root {
  --ink: #12343b;
  --muted: #657679;
  --teal: #2f6670;
  --teal-dark: #0c3d46;
  --gold: #c8a84e;
  --gold-soft: #f3e6ad;
  --paper: #ffffff;
  --soft: #f5fbfa;
  --line: #dce8e6;
  --shadow: 0 22px 70px rgba(20, 61, 70, 0.12);
  --shadow-soft: 0 14px 36px rgba(20, 61, 70, 0.08);
  --radius: 30px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: #f7fbfa;
  color: var(--ink);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
select,
input {
  font: inherit;
}

.site {
  min-height: 100vh;
  overflow-x: hidden;
}

.container {
  width: min(1200px, calc(100% - 40px));
  margin: 0 auto;
}

.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--line);
}

.headerInner {
  min-height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
}

.logoLockup {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-shrink: 0;
}

.logoMark {
  width: 54px;
  height: 54px;
  border-radius: 18px;
  background: linear-gradient(135deg, #eaffff, #ffffff);
  border: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 30px rgba(0, 63, 74, 0.12);
  overflow: hidden;
}

.logoMark img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 4px;
}

.logoText strong {
  display: block;
  font-size: 25px;
  font-weight: 950;
  letter-spacing: -0.04em;
  color: var(--ink);
  line-height: 1;
}

.logoText span {
  display: block;
  margin-top: 5px;
  color: #a8892f;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.18em;
}

.desktopNav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  font-weight: 850;
  color: #617174;
}

.desktopNav a {
  transition: color 0.2s ease;
}

.desktopNav a:hover {
  color: var(--teal-dark);
}

.headerActions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.languageSelect {
  border: 1px solid var(--line);
  background: #fff;
  color: var(--ink);
  border-radius: 999px;
  padding: 12px 18px;
  font-weight: 900;
  min-width: 96px;
  outline: none;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  min-height: 48px;
  padding: 0 24px;
  font-weight: 950;
  border: 1px solid transparent;
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
  white-space: nowrap;
}

.button:hover {
  transform: translateY(-2px);
}

.buttonPrimary {
  background: var(--teal);
  color: #fff;
  box-shadow: 0 16px 34px rgba(47, 102, 112, 0.22);
}

.buttonSecondary {
  background: #ffffff;
  color: var(--teal-dark);
  border-color: var(--line);
  box-shadow: var(--shadow-soft);
}

.buttonGhost {
  background: #fff7d8;
  color: #6c5210;
  border-color: #eadb9a;
}

.hero {
  padding: 76px 0 58px;
  background:
    radial-gradient(circle at 20% 10%, rgba(196, 230, 228, 0.8), transparent 36%),
    linear-gradient(180deg, #ffffff 0%, #f2faf8 100%);
}

.heroGrid {
  display: grid;
  grid-template-columns: 1.02fr 0.98fr;
  align-items: center;
  gap: 54px;
}

.heroBadges {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 26px;
}

.badge {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 12px 18px;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 950;
}

.badgeGold {
  background: var(--gold-soft);
  color: #102f35;
}

.badgeLight {
  background: #ffffff;
  color: var(--teal-dark);
  border: 1px solid var(--line);
}

.hero h1 {
  margin: 0;
  font-size: clamp(42px, 6vw, 78px);
  line-height: 0.94;
  letter-spacing: -0.07em;
  color: var(--ink);
  max-width: 760px;
}

.heroText {
  margin: 26px 0 0;
  font-size: clamp(18px, 2vw, 24px);
  line-height: 1.55;
  color: #50696d;
  max-width: 740px;
}

.heroNote {
  margin: 20px 0 0;
  padding: 16px 18px;
  border-radius: 22px;
  background: #ffffff;
  border: 1px solid var(--line);
  color: #5a6d70;
  font-size: 15px;
  line-height: 1.55;
  max-width: 720px;
}

.heroActions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 30px;
}

.addressCard {
  margin-top: 26px;
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 18px;
  display: flex;
  align-items: center;
  gap: 14px;
  max-width: 670px;
  box-shadow: var(--shadow-soft);
}

.pin {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #eef8f7;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.addressCard strong {
  display: block;
  font-size: 16px;
  line-height: 1.35;
}

.addressCard a {
  display: inline-block;
  margin-top: 6px;
  color: #987a20;
  font-weight: 950;
}

.heroMedia {
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 34px;
  padding: 18px;
  box-shadow: var(--shadow);
}

.heroMedia img {
  width: 100%;
  height: min(62vh, 560px);
  min-height: 360px;
  object-fit: contain;
  background: #f7fbfa;
  border-radius: 24px;
  display: block;
}

.section {
  padding: 76px 0;
  background: #ffffff;
}

.sectionSoft {
  background: #f5fbfa;
}

.sectionHeader {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 36px;
}

.sectionHeader.alignLeft {
  text-align: left;
  margin-left: 0;
}

.sectionHeader span {
  display: inline-block;
  color: #a8892f;
  font-size: 13px;
  font-weight: 950;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.sectionHeader h2 {
  margin: 0;
  font-size: clamp(32px, 4vw, 54px);
  line-height: 1;
  letter-spacing: -0.06em;
}

.sectionHeader p {
  margin: 16px auto 0;
  color: var(--muted);
  font-size: 18px;
  line-height: 1.6;
}

.selectionGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.selectionCard {
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 28px;
  overflow: hidden;
  box-shadow: var(--shadow-soft);
  min-width: 0;
}

.selectionImage {
  height: 230px;
  background: #f7fbfa;
  border-bottom: 1px solid var(--line);
}

.selectionImage img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.selectionBody {
  padding: 24px;
}

.selectionBody h3 {
  margin: 0;
  font-size: 24px;
  line-height: 1.05;
  letter-spacing: -0.04em;
}

.selectionBody p {
  margin: 12px 0 0;
  color: var(--muted);
  line-height: 1.55;
  font-size: 16px;
}

.stepsGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.stepCard {
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 28px;
  padding: 24px;
  box-shadow: var(--shadow-soft);
}

.stepNumber {
  width: 48px;
  height: 48px;
  border-radius: 16px;
  background: var(--teal-dark);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 950;
  margin-bottom: 18px;
}

.stepCard h3 {
  margin: 0;
  font-size: 21px;
  letter-spacing: -0.04em;
}

.stepCard p {
  margin: 10px 0 0;
  color: var(--muted);
  line-height: 1.55;
}

.useCaseGrid {
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.useCaseCard {
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 32px;
  overflow: hidden;
  box-shadow: var(--shadow-soft);
}

.useCaseImage {
  height: 330px;
  background: #f7fbfa;
  border-bottom: 1px solid var(--line);
}

.rotatingImage {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  background: #f7fbfa;
  animation: softFade 0.45s ease;
}

.useCaseBody {
  padding: 30px;
}

.useCaseBody h3 {
  margin: 0;
  font-size: clamp(28px, 3.6vw, 44px);
  line-height: 1;
  letter-spacing: -0.06em;
}

.useCaseBody p {
  margin: 16px 0 0;
  color: var(--muted);
  font-size: 18px;
  line-height: 1.65;
}

.whyGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.whyCard {
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 28px;
  padding: 24px;
  box-shadow: var(--shadow-soft);
}

.whyIcon {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #e8f6f4;
  color: var(--teal-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 950;
  margin-bottom: 16px;
}

.whyCard h3 {
  margin: 0;
  font-size: 20px;
  letter-spacing: -0.04em;
}

.whyCard p {
  margin: 10px 0 0;
  color: var(--muted);
  line-height: 1.55;
}

.featureGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.featureCard {
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 30px;
  overflow: hidden;
  box-shadow: var(--shadow-soft);
}

.featureImage {
  height: 220px;
  background: #f7fbfa;
  border-bottom: 1px solid var(--line);
}

.featureImage img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.featureBody {
  padding: 24px;
}

.featureBody h3 {
  margin: 0;
  font-size: 22px;
  letter-spacing: -0.04em;
}

.featureBody p {
  margin: 10px 0 0;
  color: var(--muted);
  line-height: 1.55;
}

.reviewGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.reviewCard {
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 28px;
  padding: 26px;
  box-shadow: var(--shadow-soft);
}

.stars {
  color: #c39a25;
  letter-spacing: 0.08em;
  margin-bottom: 16px;
}

.reviewCard p {
  margin: 0;
  color: #43595d;
  font-size: 18px;
  line-height: 1.6;
}

.reviewCard strong {
  display: block;
  margin-top: 18px;
  color: var(--ink);
}

.faqGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.faqCard {
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 28px;
  padding: 26px;
  box-shadow: var(--shadow-soft);
}

.faqCard h3 {
  margin: 0;
  font-size: 21px;
  letter-spacing: -0.04em;
}

.faqCard p {
  margin: 12px 0 0;
  color: var(--muted);
  line-height: 1.6;
}

.visitSection {
  background: linear-gradient(135deg, #ffffff 0%, #ecf8f6 100%);
}

.visitGrid {
  display: grid;
  grid-template-columns: 1fr 0.82fr;
  gap: 34px;
  align-items: start;
}

.visitActions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.hoursCard {
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 32px;
  padding: 28px;
  box-shadow: var(--shadow);
}

.hoursCard h3 {
  margin: 0 0 18px;
  font-size: 28px;
  letter-spacing: -0.05em;
}

.hoursList {
  display: grid;
  gap: 8px;
}

.hoursRow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 12px 14px;
  border-radius: 16px;
  background: #f7fbfa;
  color: #52696d;
}

.hoursRow.active {
  background: #fff4c7;
  color: var(--ink);
}

.hoursRow strong {
  color: inherit;
}

.mapCard {
  margin-top: 18px;
  background: #f7fbfa;
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 18px;
}

.mapCard strong {
  display: block;
  line-height: 1.4;
}

.mapCard a {
  display: inline-block;
  margin-top: 8px;
  color: #987a20;
  font-weight: 950;
}

.footer {
  background: var(--teal-dark);
  color: #ffffff;
  padding: 34px 0 96px;
}

.footer .logoText strong,
.footer .logoText span {
  color: #ffffff;
}

.footerInner {
  display: grid;
  grid-template-columns: 1fr 1.3fr 1fr;
  align-items: center;
  gap: 24px;
}

.footer p {
  margin: 0;
  color: rgba(255, 255, 255, 0.74);
  line-height: 1.55;
}

.footerLinks {
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  flex-wrap: wrap;
  font-weight: 850;
}

.mobileBar {
  display: none;
}

.imageFallback {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7fbfa;
  color: var(--teal-dark);
  font-size: 42px;
}

@keyframes softFade {
  from {
    opacity: 0.4;
    transform: scale(0.985);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (max-width: 1080px) {
  .desktopNav {
    display: none;
  }

  .heroGrid,
  .visitGrid {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 52px;
  }

  .stepsGrid,
  .whyGrid {
    grid-template-columns: repeat(2, 1fr);
  }

  .selectionGrid,
  .featureGrid {
    grid-template-columns: repeat(2, 1fr);
  }

  .footerInner {
    grid-template-columns: 1fr;
  }

  .footerLinks {
    justify-content: flex-start;
  }
}

@media (max-width: 720px) {
  .container {
    width: min(100% - 24px, 1200px);
  }

  .headerInner {
    min-height: 76px;
    gap: 12px;
  }

  .logoMark {
    width: 48px;
    height: 48px;
    border-radius: 16px;
  }

  .logoText strong {
    font-size: 20px;
  }

  .logoText span {
    font-size: 10px;
    letter-spacing: 0.14em;
  }

  .headerWhatsapp {
    display: none;
  }

  .languageSelect {
    min-width: 78px;
    padding: 10px 12px;
  }

  .hero {
    padding: 34px 0 42px;
  }

  .hero h1 {
    font-size: clamp(38px, 12vw, 54px);
  }

  .heroText {
    font-size: 17px;
  }

  .heroMedia {
    padding: 10px;
    border-radius: 26px;
  }

  .heroMedia img {
    min-height: 260px;
    height: 330px;
    border-radius: 18px;
  }

  .heroActions {
    flex-direction: column;
  }

  .button {
    width: 100%;
  }

  .section {
    padding: 52px 0;
  }

  .selectionGrid,
  .featureGrid,
  .reviewGrid,
  .faqGrid,
  .stepsGrid,
  .whyGrid,
  .useCaseGrid {
    grid-template-columns: 1fr;
  }

  .selectionImage,
  .featureImage {
    height: 220px;
  }

  .useCaseImage {
    height: 260px;
  }

  .useCaseBody {
    padding: 24px;
  }

  .visitActions {
    flex-direction: column;
  }

  .hoursRow {
    align-items: flex-start;
    flex-direction: column;
    gap: 4px;
  }

  .footer {
    padding-bottom: 104px;
  }

  .mobileBar {
    position: fixed;
    left: 12px;
    right: 12px;
    bottom: 12px;
    z-index: 80;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    background: rgba(255, 255, 255, 0.92);
    border: 1px solid var(--line);
    border-radius: 22px;
    padding: 10px;
    box-shadow: 0 16px 44px rgba(20, 61, 70, 0.2);
    backdrop-filter: blur(16px);
  }

  .mobileBar a {
    min-height: 48px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 950;
  }

  .mobileBar a:first-child {
    background: #fff4c7;
    color: var(--ink);
  }

  .mobileBar a:last-child {
    background: var(--teal);
    color: #ffffff;
  }
}

@media (max-width: 420px) {
  .logoText strong {
    font-size: 18px;
  }

  .logoText span {
    font-size: 9px;
  }

  .heroBadges {
    gap: 8px;
  }

  .badge {
    padding: 10px 12px;
    font-size: 10px;
  }

  .addressCard {
    align-items: flex-start;
  }
}
`;

export default App;
