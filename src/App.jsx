import React, { useEffect, useMemo, useState } from "react";

const img = (fileName) => `/images/${fileName}`;

const LINKS = {
  whatsapp:
    "https://wa.me/6598398671?text=Hi%20Crab%20Talk%2C%20I%20would%20like%20to%20check%20today's%20live%20seafood%20availability.",
  telegram: "https://t.me/CrabTalkSG",
  maps: "https://maps.app.goo.gl/1GKdK2y6jpbqfg8N8?g_st=ac",
  eightDays:
    "https://www.8days.sg/eatanddrink/hawkerfood/commonwealth-crab-talk-fai-kee-live-seafood-hawker-collab-856541",
  botakJazz: "https://www.tiktok.com/@botakjazz/video/7602204733155364116",
  aiFeature: "https://www.facebook.com/share/v/1Djwg4h7UP/",
};

const HOURS = [
  ["Monday", "12pm – 5pm"],
  ["Tuesday", "8am – 7pm"],
  ["Wednesday", "8am – 7pm"],
  ["Thursday", "8am – 7pm"],
  ["Friday", "8am – 8pm"],
  ["Saturday", "8am – 8pm"],
  ["Sunday", "8am – 5pm"],
];

const CONTENT = {
  en: {
    brandSmall: "Live Seafood Supply",
    navSelection: "Selection",
    navCooking: "Cooking",
    navFeatures: "Features",
    navReviews: "Reviews",
    navFaq: "FAQ",
    heroBadge: "Live Seafood Supply @ Crab Talk",
    heroTitle: "Premium live seafood, selected fresh daily.",
    heroText:
      "Visit Crab Talk at Commonwealth Crescent for live crabs, roe crabs, lobsters, oysters, Manila clams, Soon Hock and premium seafood. Perfect for home cooking, family meals and weekend gatherings.",
    address: "31 Commonwealth Crescent #01-41/42/43 S(149644)",
    whatsapp: "WhatsApp to Reserve",
    telegram: "Join Telegram Updates",
    directions: "Get Directions",
    trust1: "Fresh Daily",
    trust1Text: "Live seafood selection changes by daily arrival.",
    trust2: "Home Cooking Friendly",
    trust2Text: "Choose your seafood and bring it home fresh.",
    trust3: "Pre-order Recommended",
    trust3Text: "Popular items can sell out quickly.",
    selectionBadge: "Fresh Daily Selection",
    selectionTitle: "Choose your seafood, cook it your way.",
    selectionText:
      "Availability changes daily. Please WhatsApp us to confirm today’s stock before visiting, especially for roe crabs, lobsters and premium seafood.",
    cookingBadge: "How It Works",
    cookingTitle: "Simple, flexible seafood buying.",
    homeTitle: "Best for Home Cooking",
    homeText:
      "Select your live seafood and bring it home for steaming, chilli crab, black pepper crab, ginger scallion crab, soups or family seafood dinners.",
    nearbyTitle: "Nearby Cooking Option",
    nearbyText:
      "Cooking by nearby stalls may be possible depending on crowd, timing and capacity. Please check before ordering. Cooking fee and waiting time may apply.",
    featureBadge: "Featured",
    featureTitle: "Seen on food media and social platforms.",
    featureText:
      "Crab Talk has been shared by food media and local creators for its live seafood concept at Commonwealth Crescent.",
    reviewBadge: "Reviews",
    reviewTitle: "What customers look for at Crab Talk.",
    reviewText:
      "For the latest real Google reviews, please view our Google Maps listing directly.",
    faqBadge: "FAQ",
    faqTitle: "Frequently asked questions.",
    contactBadge: "Visit Us",
    contactTitle: "Come down or reserve before visiting.",
    contactText:
      "For daily arrivals, limited stock and seafood reservation, WhatsApp us or join our Telegram updates.",
    footer:
      "© Crab Talk SG. Seafood availability and prices may change daily. While stocks last.",
  },
  zh: {
    brandSmall: "活海鲜供应",
    navSelection: "海鲜选择",
    navCooking: "烹煮方式",
    navFeatures: "媒体介绍",
    navReviews: "顾客评价",
    navFaq: "常见问题",
    heroBadge: "Crab Talk 活海鲜供应",
    heroTitle: "每日精选优质活海鲜。",
    heroText:
      "欢迎到 Commonwealth Crescent 的 Crab Talk 选购活螃蟹、膏蟹、龙虾、生蚝、马尼拉蛤、笋壳鱼及其他高级海鲜。适合家庭烹煮、聚餐和周末海鲜餐。",
    address: "31 Commonwealth Crescent #01-41/42/43 S(149644)",
    whatsapp: "WhatsApp 预订",
    telegram: "加入 Telegram 更新",
    directions: "打开地图",
    trust1: "每日新鲜",
    trust1Text: "活海鲜供应视每日到货而定。",
    trust2: "适合家庭烹煮",
    trust2Text: "亲自挑选海鲜，带回家新鲜烹煮。",
    trust3: "建议预订",
    trust3Text: "热门海鲜数量有限，可能很快售完。",
    selectionBadge: "每日新鲜选择",
    selectionTitle: "选好海鲜，按你喜欢的方式烹煮。",
    selectionText:
      "供应每日不同。膏蟹、龙虾和高级海鲜建议先 WhatsApp 查询当天库存。",
    cookingBadge: "购买方式",
    cookingTitle: "简单灵活的活海鲜体验。",
    homeTitle: "最适合带回家烹煮",
    homeText:
      "挑选活海鲜后带回家，可清蒸、辣椒蟹、黑胡椒蟹、姜葱蟹、煮汤或家庭聚餐。",
    nearbyTitle: "附近代煮选择",
    nearbyText:
      "附近熟食档是否能代煮，需视人潮、时间和档口负荷而定。请先询问，代煮费和等候时间另计。",
    featureBadge: "媒体介绍",
    featureTitle: "美食媒体与本地创作者分享。",
    featureText:
      "Crab Talk 的活海鲜概念曾被美食媒体和本地创作者介绍。",
    reviewBadge: "评价",
    reviewTitle: "顾客到 Crab Talk 常关注的重点。",
    reviewText: "最新真实 Google 评价，请直接查看我们的 Google Maps 页面。",
    faqBadge: "常见问题",
    faqTitle: "常见问题。",
    contactBadge: "到访我们",
    contactTitle: "欢迎到访，或先预订再过来。",
    contactText:
      "想知道每日到货、限量海鲜和预订情况，可 WhatsApp 我们或加入 Telegram。",
    footer: "© Crab Talk SG。海鲜供应和价格每日可能不同，售完为止。",
  },
  ja: {
    brandSmall: "活シーフード販売",
    navSelection: "海鮮一覧",
    navCooking: "楽しみ方",
    navFeatures: "掲載情報",
    navReviews: "レビュー",
    navFaq: "FAQ",
    heroBadge: "Crab Talk 活シーフード販売",
    heroTitle: "毎日仕入れる新鮮な活シーフード。",
    heroText:
      "Commonwealth Crescent の Crab Talk では、活ガニ、ロエクラブ、ロブスター、牡蠣、マニラアサリ、Soon Hock などを販売しています。ご自宅での調理、家族の食事、週末の海鮮料理におすすめです。",
    address: "31 Commonwealth Crescent #01-41/42/43 S(149644)",
    whatsapp: "WhatsAppで予約",
    telegram: "Telegram更新に参加",
    directions: "地図を開く",
    trust1: "毎日新鮮",
    trust1Text: "入荷状況によりラインアップが変わります。",
    trust2: "自宅調理向け",
    trust2Text: "活シーフードを選んで新鮮なまま持ち帰り。",
    trust3: "予約がおすすめ",
    trust3Text: "人気商品は早く売り切れる場合があります。",
    selectionBadge: "本日の新鮮ラインアップ",
    selectionTitle: "好きな海鮮を選び、好きな料理に。",
    selectionText:
      "入荷内容は日によって変わります。ロエクラブ、ロブスター、高級海鮮は事前に WhatsApp で在庫確認をおすすめします。",
    cookingBadge: "楽しみ方",
    cookingTitle: "シンプルで便利な活シーフード購入。",
    homeTitle: "自宅調理に最適",
    homeText:
      "活シーフードを選んで持ち帰り。蒸し料理、チリクラブ、ブラックペッパークラブ、ジンジャースキャリオン、スープ、家族の海鮮料理に。",
    nearbyTitle: "近隣調理オプション",
    nearbyText:
      "近隣店舗での調理は混雑状況、時間、対応可能数により変わります。注文前にご確認ください。調理費と待ち時間が発生する場合があります。",
    featureBadge: "掲載情報",
    featureTitle: "フードメディアとSNSで紹介。",
    featureText:
      "Crab Talk の活シーフードスタイルは、フードメディアやローカルクリエイターにも紹介されています。",
    reviewBadge: "レビュー",
    reviewTitle: "Crab Talkでお客様が注目するポイント。",
    reviewText: "最新の実際のGoogleレビューは Google Maps でご確認ください。",
    faqBadge: "FAQ",
    faqTitle: "よくある質問。",
    contactBadge: "アクセス",
    contactTitle: "来店前の予約がおすすめです。",
    contactText:
      "本日の入荷、限定在庫、予約については WhatsApp または Telegram でご確認ください。",
    footer:
      "© Crab Talk SG。入荷状況と価格は日によって変わります。売り切れ次第終了。",
  },
};

const heroImages = [
  img("feature-8days-original-thumbnail.jpg"),
  img("product-live-crab-premium.jpg"),
  img("product-yellow-roe-crab-06.jpg"),
  img("dish-lobster-yee-mee-fai-kee-hero.jpg"),
  img("stall-crab-talk-live-tanks.jpg"),
];

const freshItems = [
  {
    title: "Live Mud Crabs",
    image: img("product-live-crab-premium.jpg"),
    fallback: img("product-live-crab-closeup-01.jpg"),
    text:
      "Meaty, active crabs selected for steaming, chilli crab, black pepper crab or ginger scallion crab.",
  },
  {
    title: "Sri Lanka Roe Crabs",
    image: img("product-yellow-roe-crab-06.jpg"),
    fallback: img("product-yellow-roe-crab-01.jpg"),
    text:
      "Premium roe crabs for rich roe, firm meat and restaurant-style seafood meals at home.",
  },
  {
    title: "Live Lobsters",
    image: img("product-boston-lobster-display.jpg"),
    fallback: img("product-live-green-lobster-01.jpg"),
    text:
      "Boston lobster and green lobster options depending on daily arrival and seasonality.",
  },
  {
    title: "Fresh Oysters",
    image: img("product-oysters-premium-02.jpg"),
    fallback: img("product-oysters-closeup-02.jpg"),
    text:
      "Clean, briny oysters suitable for seafood platters, sharing and premium home dining.",
  },
  {
    title: "Manila Clams",
    image: img("product-manila-clams-01.jpg"),
    fallback: img("product-manila-clams-closeup.jpg"),
    text:
      "Great for steaming, chilli lala, soup, white wine style or simple home cooking.",
  },
  {
    title: "Soon Hock & Premium Fish",
    image: img("product-live-soon-hock-premium-fish.jpg"),
    fallback: img("product-live-soon-hock-01.jpg"),
    text:
      "Live fish options suitable for steaming, Hong Kong style or family seafood dinners.",
  },
];

const featureCards = [
  {
    title: "8 Days Feature",
    text: "Crab Talk’s live seafood concept at Commonwealth Crescent.",
    image: img("feature-8days-original-thumbnail.jpg"),
    fallback: img("8days-feature.jpg"),
    link: LINKS.eightDays,
  },
  {
    title: "Botak Jazz TikTok",
    text: "Lobster yee mee and seafood experience shared on TikTok.",
    image: img("feature-botak-jazz-tiktok.jpg"),
    fallback: img("botak-jazz-feature.jpg"),
    link: LINKS.botakJazz,
  },
  {
    title: "Crab Seller Using AI",
    text: "A modern seafood stall using AI for daily work and content.",
    image: img("AI-feature.jpeg"),
    fallback: img("AI-feature.jpeg"),
    link: LINKS.aiFeature,
  },
];

const cookingGallery = [
  {
    title: "Chilli Crab",
    image: img("dish-chilli-crab-premium.jpg"),
    fallback: img("dish-chilli-crab-closeup.jpg"),
  },
  {
    title: "Lobster Yee Mee",
    image: img("dish-lobster-yee-mee-fai-kee-hero.jpg"),
    fallback: img("dish-lobster-yee-mee-01.jpg"),
  },
  {
    title: "Steamed Seafood",
    image: img("dish-steamed-crab-01.jpg"),
    fallback: img("dish-steamed-lobster.jpg"),
  },
  {
    title: "Ginger Scallion Crab",
    image: img("dish-ginger-scallion-crab.jpg"),
    fallback: img("dish-black-pepper-crab-premium.jpg"),
  },
];

const reviewHighlights = [
  {
    title: "Fresh live seafood",
    text:
      "Customers usually visit for live crabs, roe crabs, lobsters and seasonal seafood arrivals.",
  },
  {
    title: "Helpful selection advice",
    text:
      "Crab Talk can recommend seafood based on cooking style, group size and daily availability.",
  },
  {
    title: "Convenient market experience",
    text:
      "A practical choice for customers who want to buy live seafood for home cooking.",
  },
];

const faqs = [
  {
    q: "Should I pre-order before visiting?",
    a:
      "Yes. Pre-order is recommended because live seafood availability changes daily and popular items may sell out early.",
  },
  {
    q: "Are the crabs live or cooked?",
    a:
      "Most seafood is sold live and uncooked unless clearly stated otherwise. Please check with us before ordering.",
  },
  {
    q: "Can I buy seafood for home cooking?",
    a:
      "Yes. Crab Talk is suitable for customers who want to choose live seafood and cook it fresh at home.",
  },
  {
    q: "Can nearby stalls cook the seafood?",
    a:
      "Nearby cooking may be possible depending on stall capacity, crowd and timing. Please check before ordering. Cooking fees and waiting time may apply.",
  },
  {
    q: "How do I know today’s availability?",
    a:
      "WhatsApp us or join our Telegram updates for daily arrivals, limited stock and seafood updates.",
  },
  {
    q: "Do prices change?",
    a:
      "Yes. Seafood prices may change based on size, supplier price, season and daily availability.",
  },
];

function SmartImage({ src, fallback, alt, className }) {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => {
        if (fallback && currentSrc !== fallback) {
          setCurrentSrc(fallback);
        }
      }}
    />
  );
}

export default function App() {
  const [lang, setLang] = useState("en");
  const [heroIndex, setHeroIndex] = useState(0);

  const t = CONTENT[lang];

  const todayLabel = useMemo(() => {
    const today = new Date().toLocaleDateString("en-SG", { weekday: "long" });
    const match = HOURS.find(([day]) => day === today);
    return match ? `${match[0]}: ${match[1]}` : "Check today’s hours";
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="site">
      <style>{css}</style>

      <header className="topbar">
        <a href="#home" className="brand" aria-label="Crab Talk SG home">
          <span className="brandIcon">🦀</span>
          <span className="brandText">
            <strong>Crab Talk SG</strong>
            <small>{t.brandSmall}</small>
          </span>
        </a>

        <nav className="desktopNav" aria-label="Main navigation">
          <a href="#selection">{t.navSelection}</a>
          <a href="#cooking">{t.navCooking}</a>
          <a href="#features">{t.navFeatures}</a>
          <a href="#reviews">{t.navReviews}</a>
          <a href="#faq">{t.navFaq}</a>
        </nav>

        <div className="languageSwitch" aria-label="Language selector">
          <button
            type="button"
            className={lang === "en" ? "active" : ""}
            onClick={() => setLang("en")}
          >
            EN
          </button>
          <button
            type="button"
            className={lang === "zh" ? "active" : ""}
            onClick={() => setLang("zh")}
          >
            中文
          </button>
          <button
            type="button"
            className={lang === "ja" ? "active" : ""}
            onClick={() => setLang("ja")}
          >
            日本語
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="heroCopy">
            <div className="pillRow">
              <span className="premiumPill">{t.heroBadge}</span>
              <span className="hoursPill">Today · {todayLabel}</span>
            </div>

            <h1>{t.heroTitle}</h1>

            <p className="heroLead">{t.heroText}</p>

            <a
              className="addressBlock"
              href={LINKS.maps}
              target="_blank"
              rel="noreferrer"
            >
              <span className="addressIcon">📍</span>
              <span>
                <strong>{t.address}</strong>
                <small>{t.directions}</small>
              </span>
            </a>

            <div className="ctaRow">
              <a
                className="btn btnPrimary"
                href={LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                {t.whatsapp}
              </a>
              <a
                className="btn btnGold"
                href={LINKS.telegram}
                target="_blank"
                rel="noreferrer"
              >
                {t.telegram}
              </a>
              <a
                className="btn btnGlass"
                href={LINKS.maps}
                target="_blank"
                rel="noreferrer"
              >
                {t.directions}
              </a>
            </div>
          </div>

          <div className="heroVisual">
            <div className="heroImageShell">
              <SmartImage
                src={heroImages[heroIndex]}
                fallback={img("product-live-crab-premium.jpg")}
                alt="Crab Talk live seafood"
                className="heroImage"
              />
            </div>

            <div className="heroImageFooter">
              <span>Fresh arrivals · Live seafood · Limited daily stock</span>
              <div className="heroDots">
                {heroImages.map((_, index) => (
                  <button
                    type="button"
                    key={index}
                    className={index === heroIndex ? "dot active" : "dot"}
                    aria-label={`Show hero image ${index + 1}`}
                    onClick={() => setHeroIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="trustStrip" aria-label="Crab Talk highlights">
          <article>
            <strong>{t.trust1}</strong>
            <p>{t.trust1Text}</p>
          </article>
          <article>
            <strong>{t.trust2}</strong>
            <p>{t.trust2Text}</p>
          </article>
          <article>
            <strong>{t.trust3}</strong>
            <p>{t.trust3Text}</p>
          </article>
        </section>

        <section id="selection" className="section">
          <div className="sectionHeader">
            <span className="sectionBadge">{t.selectionBadge}</span>
            <h2>{t.selectionTitle}</h2>
            <p>{t.selectionText}</p>
          </div>

          <div className="productGrid">
            {freshItems.map((item) => (
              <article className="productCard" key={item.title}>
                <div className="productImageFrame">
                  <SmartImage
                    src={item.image}
                    fallback={item.fallback}
                    alt={item.title}
                    className="productImage"
                  />
                </div>
                <div className="productContent">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="cooking" className="section">
          <div className="sectionHeader narrow">
            <span className="sectionBadge">{t.cookingBadge}</span>
            <h2>{t.cookingTitle}</h2>
          </div>

          <div className="cookingGrid">
            <article className="cookingCard primaryCooking">
              <div className="cookingImageFrame">
                <SmartImage
                  src={img("dish-steamed-crab-01.jpg")}
                  fallback={img("dish-chilli-crab-premium.jpg")}
                  alt="Home cooking seafood"
                  className="cookingImage"
                />
              </div>
              <div className="cookingContent">
                <span className="miniTag">Recommended</span>
                <h3>{t.homeTitle}</h3>
                <p>{t.homeText}</p>
              </div>
            </article>

            <article className="cookingCard">
              <div className="cookingImageFrame">
                <SmartImage
                  src={img("dish-lobster-yee-mee-01.jpg")}
                  fallback={img("dish-lobster-yee-mee-fai-kee-hero.jpg")}
                  alt="Nearby cooked seafood option"
                  className="cookingImage"
                />
              </div>
              <div className="cookingContent">
                <span className="miniTag muted">Subject to availability</span>
                <h3>{t.nearbyTitle}</h3>
                <p>{t.nearbyText}</p>
              </div>
            </article>
          </div>

          <div className="dishGallery">
            {cookingGallery.map((item) => (
              <article className="dishCard" key={item.title}>
                <SmartImage
                  src={item.image}
                  fallback={item.fallback}
                  alt={item.title}
                  className="dishImage"
                />
                <strong>{item.title}</strong>
              </article>
            ))}
          </div>
        </section>

        <section id="features" className="section">
          <div className="sectionHeader">
            <span className="sectionBadge">{t.featureBadge}</span>
            <h2>{t.featureTitle}</h2>
            <p>{t.featureText}</p>
          </div>

          <div className="featureGrid">
            {featureCards.map((feature) => (
              <a
                className="featureCard"
                key={feature.title}
                href={feature.link}
                target="_blank"
                rel="noreferrer"
              >
                <div className="featureImageFrame">
                  <SmartImage
                    src={feature.image}
                    fallback={feature.fallback}
                    alt={feature.title}
                    className="featureImage"
                  />
                </div>
                <div className="featureContent">
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                  <span>View feature →</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="reviews" className="section reviewsSection">
          <div className="sectionHeader">
            <span className="sectionBadge">{t.reviewBadge}</span>
            <h2>{t.reviewTitle}</h2>
            <p>{t.reviewText}</p>
          </div>

          <div className="reviewGrid">
            {reviewHighlights.map((review) => (
              <article className="reviewCard" key={review.title}>
                <div className="stars">★★★★★</div>
                <h3>{review.title}</h3>
                <p>{review.text}</p>
              </article>
            ))}
          </div>

          <div className="reviewAction">
            <a
              className="btn btnGold"
              href={LINKS.maps}
              target="_blank"
              rel="noreferrer"
            >
              View Real Google Reviews
            </a>
          </div>
        </section>

        <section className="section contactSection">
          <div className="contactPanel">
            <div className="contactCopy">
              <span className="sectionBadge">{t.contactBadge}</span>
              <h2>{t.contactTitle}</h2>
              <p>{t.contactText}</p>

              <a
                className="addressBlock compactAddress"
                href={LINKS.maps}
                target="_blank"
                rel="noreferrer"
              >
                <span className="addressIcon">📍</span>
                <span>
                  <strong>{t.address}</strong>
                  <small>{t.directions}</small>
                </span>
              </a>

              <div className="ctaRow">
                <a
                  className="btn btnPrimary"
                  href={LINKS.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.whatsapp}
                </a>
                <a
                  className="btn btnGold"
                  href={LINKS.telegram}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.telegram}
                </a>
              </div>
            </div>

            <div className="hoursBox">
              <h3>Opening Hours</h3>
              <div className="hoursList">
                {HOURS.map(([day, time]) => (
                  <div className="hourRow" key={day}>
                    <span>{day}</span>
                    <strong>{time}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section faqSection">
          <div className="sectionHeader">
            <span className="sectionBadge">{t.faqBadge}</span>
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
      </main>

      <footer className="footer">
        <p>{t.footer}</p>
      </footer>

      <div className="mobileStickyCta">
        <a href={LINKS.whatsapp} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
        <a href={LINKS.maps} target="_blank" rel="noreferrer">
          Directions
        </a>
      </div>
    </div>
  );
}

const css = `
:root {
  --navy: #031c22;
  --deep: #021316;
  --teal: #06404a;
  --teal2: #0a6f82;
  --cyan: #00b7ff;
  --aqua: #05d1b2;
  --gold: #d8b86a;
  --goldSoft: #f7e3a7;
  --white: #ffffff;
  --muted: #bdd4d9;
  --muted2: #8fb1b8;
  --line: rgba(255, 255, 255, 0.11);
  --glass: rgba(255, 255, 255, 0.07);
  --glass2: rgba(255, 255, 255, 0.105);
  --shadow: 0 22px 70px rgba(0, 0, 0, 0.28);
  --radius: 28px;
  --radiusSmall: 18px;
  --max: 1180px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  background: var(--deep);
}

body {
  margin: 0;
  font-family:
    Arial,
    Helvetica,
    sans-serif;
  background: var(--deep);
  color: var(--white);
}

img {
  max-width: 100%;
}

a {
  color: inherit;
}

.site {
  min-height: 100vh;
  overflow-x: hidden;
  background:
    radial-gradient(circle at 12% 4%, rgba(0, 183, 255, 0.18), transparent 34rem),
    radial-gradient(circle at 92% 0%, rgba(216, 184, 106, 0.16), transparent 30rem),
    radial-gradient(circle at 50% 44%, rgba(5, 209, 178, 0.08), transparent 40rem),
    linear-gradient(180deg, #021316 0%, #062a31 42%, #031c22 72%, #020f12 100%);
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 50;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 24px;
  padding: 14px clamp(18px, 5vw, 70px);
  border-bottom: 1px solid var(--line);
  background: rgba(2, 19, 22, 0.88);
  backdrop-filter: blur(18px);
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  min-width: max-content;
}

.brandIcon {
  width: 43px;
  height: 43px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background:
    linear-gradient(135deg, rgba(216,184,106,0.95), rgba(0,183,255,0.95));
  box-shadow: 0 10px 34px rgba(0,0,0,0.35);
}

.brandText strong {
  display: block;
  font-size: 17px;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.brandText small {
  display: block;
  margin-top: 4px;
  color: var(--muted2);
  font-size: 12px;
}

.desktopNav {
  display: flex;
  justify-content: center;
  gap: 22px;
  color: var(--muted);
  font-size: 14px;
  font-weight: 700;
}

.desktopNav a {
  text-decoration: none;
  transition: color 0.2s ease;
}

.desktopNav a:hover {
  color: var(--gold);
}

.languageSwitch {
  display: flex;
  gap: 4px;
  padding: 4px;
  border-radius: 999px;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.08);
}

.languageSwitch button {
  border: 0;
  cursor: pointer;
  padding: 8px 10px;
  border-radius: 999px;
  background: transparent;
  color: var(--muted);
  font-size: 12px;
  font-weight: 900;
}

.languageSwitch button.active {
  color: #031c22;
  background: var(--gold);
}

.hero {
  width: min(var(--max), calc(100% - 36px));
  min-height: calc(100vh - 72px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 0.94fr;
  gap: clamp(30px, 5vw, 58px);
  align-items: center;
  padding: 54px 0 44px;
}

.heroCopy {
  max-width: 730px;
}

.pillRow {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 22px;
}

.premiumPill,
.hoursPill,
.sectionBadge,
.miniTag {
  display: inline-flex;
  width: max-content;
  align-items: center;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.premiumPill {
  padding: 9px 13px;
  color: #031c22;
  background: linear-gradient(135deg, var(--gold), var(--goldSoft));
}

.hoursPill {
  padding: 9px 13px;
  color: var(--muted);
  background: rgba(255,255,255,0.07);
  border: 1px solid var(--line);
}

.hero h1 {
  margin: 0 0 22px;
  font-size: clamp(42px, 6.2vw, 76px);
  line-height: 0.96;
  letter-spacing: -0.066em;
}

.heroLead {
  max-width: 660px;
  margin: 0;
  color: var(--muted);
  font-size: clamp(17px, 2vw, 21px);
  line-height: 1.7;
}

.addressBlock {
  display: flex;
  gap: 13px;
  width: min(100%, 620px);
  margin-top: 26px;
  padding: 16px 18px;
  border-radius: 20px;
  color: var(--white);
  text-decoration: none;
  background: rgba(255,255,255,0.065);
  border: 1px solid rgba(216,184,106,0.25);
  box-shadow: 0 14px 38px rgba(0,0,0,0.18);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.addressBlock:hover {
  transform: translateY(-2px);
  border-color: rgba(216,184,106,0.55);
}

.compactAddress {
  margin-top: 18px;
}

.addressIcon {
  flex: 0 0 auto;
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background: rgba(216,184,106,0.16);
}

.addressBlock strong {
  display: block;
  font-size: 15px;
  line-height: 1.45;
}

.addressBlock small {
  display: block;
  margin-top: 4px;
  color: var(--goldSoft);
  font-weight: 800;
}

.ctaRow {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 13px 20px;
  border-radius: 999px;
  border: 1px solid var(--line);
  text-decoration: none;
  font-size: 14px;
  font-weight: 900;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 38px rgba(0,0,0,0.24);
}

.btnPrimary {
  color: #021316;
  border-color: transparent;
  background: linear-gradient(135deg, var(--cyan), var(--aqua));
}

.btnGold {
  color: #071d22;
  border-color: transparent;
  background: linear-gradient(135deg, var(--gold), var(--goldSoft));
}

.btnGlass {
  color: var(--white);
  background: rgba(255,255,255,0.07);
}

.heroVisual {
  position: relative;
}

.heroImageShell {
  position: relative;
  overflow: hidden;
  border-radius: 34px;
  padding: 12px;
  background:
    linear-gradient(145deg, rgba(255,255,255,0.18), rgba(255,255,255,0.045));
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: var(--shadow);
}

.heroImageShell::after {
  content: "";
  position: absolute;
  inset: 12px;
  pointer-events: none;
  border-radius: 24px;
  background:
    linear-gradient(180deg, transparent 54%, rgba(0,0,0,0.26));
}

.heroImage {
  display: block;
  width: 100%;
  height: clamp(300px, 45vw, 470px);
  object-fit: contain;
  border-radius: 24px;
  background: #071d22;
}

.heroImageFooter {
  position: relative;
  z-index: 2;
  width: calc(100% - 34px);
  margin: -34px auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 14px 16px;
  border-radius: 20px;
  color: var(--muted);
  background: rgba(2,19,22,0.82);
  border: 1px solid rgba(255,255,255,0.11);
  backdrop-filter: blur(12px);
  box-shadow: 0 18px 44px rgba(0,0,0,0.24);
  font-size: 13px;
  font-weight: 800;
}

.heroDots {
  display: flex;
  gap: 7px;
}

.dot {
  width: 8px;
  height: 8px;
  border: 0;
  border-radius: 999px;
  cursor: pointer;
  background: rgba(255,255,255,0.35);
}

.dot.active {
  width: 22px;
  background: var(--gold);
}

.trustStrip {
  width: min(var(--max), calc(100% - 36px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  transform: translateY(-10px);
}

.trustStrip article {
  padding: 21px;
  border-radius: 22px;
  background: rgba(255,255,255,0.065);
  border: 1px solid var(--line);
  box-shadow: 0 18px 44px rgba(0,0,0,0.16);
}

.trustStrip strong {
  display: block;
  margin-bottom: 7px;
  font-size: 17px;
}

.trustStrip p {
  margin: 0;
  color: var(--muted2);
  line-height: 1.5;
  font-size: 14px;
}

.section {
  width: min(var(--max), calc(100% - 36px));
  margin: 0 auto;
  padding: 72px 0;
}

.sectionHeader {
  max-width: 790px;
  margin-bottom: 34px;
}

.sectionHeader.narrow {
  max-width: 690px;
}

.sectionBadge {
  margin-bottom: 14px;
  padding: 9px 12px;
  color: var(--goldSoft);
  background: rgba(216,184,106,0.12);
  border: 1px solid rgba(216,184,106,0.24);
}

.sectionHeader h2 {
  margin: 0 0 15px;
  font-size: clamp(32px, 4.5vw, 52px);
  line-height: 1;
  letter-spacing: -0.052em;
}

.sectionHeader p {
  margin: 0;
  color: var(--muted);
  font-size: 17px;
  line-height: 1.7;
}

.productGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.productCard {
  overflow: hidden;
  border-radius: 27px;
  background: rgba(255,255,255,0.07);
  border: 1px solid var(--line);
  box-shadow: 0 20px 60px rgba(0,0,0,0.2);
  transition:
    transform 0.22s ease,
    border-color 0.22s ease,
    background 0.22s ease;
}

.productCard:hover {
  transform: translateY(-4px);
  border-color: rgba(216,184,106,0.38);
  background: rgba(255,255,255,0.09);
}

.productImageFrame {
  width: 100%;
  aspect-ratio: 4 / 3;
  padding: 10px;
  background:
    radial-gradient(circle at center, rgba(10,111,130,0.3), transparent 65%),
    #071d22;
}

.productImage {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 18px;
  background: #071d22;
}

.productContent {
  padding: 20px 21px 23px;
}

.productContent h3,
.featureContent h3,
.cookingContent h3,
.reviewCard h3,
.faqCard h3 {
  margin: 0 0 9px;
  font-size: 21px;
  line-height: 1.16;
  letter-spacing: -0.025em;
}

.productContent p,
.featureContent p,
.cookingContent p,
.reviewCard p,
.faqCard p,
.contactCopy p {
  margin: 0;
  color: var(--muted);
  font-size: 15.5px;
  line-height: 1.65;
}

.cookingGrid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 22px;
}

.cookingCard {
  overflow: hidden;
  display: grid;
  grid-template-columns: 42% 1fr;
  border-radius: 28px;
  background: rgba(255,255,255,0.07);
  border: 1px solid var(--line);
  box-shadow: 0 20px 60px rgba(0,0,0,0.2);
}

.primaryCooking {
  border-color: rgba(216,184,106,0.32);
}

.cookingImageFrame {
  min-height: 280px;
  padding: 10px;
  background: #071d22;
}

.cookingImage {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 18px;
  background: #071d22;
}

.cookingContent {
  align-self: center;
  padding: 26px;
}

.miniTag {
  margin-bottom: 13px;
  padding: 8px 11px;
  color: #071d22;
  background: var(--gold);
}

.miniTag.muted {
  color: var(--muted);
  background: rgba(255,255,255,0.085);
  border: 1px solid var(--line);
}

.dishGallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 22px;
}

.dishCard {
  overflow: hidden;
  border-radius: 22px;
  background: rgba(255,255,255,0.06);
  border: 1px solid var(--line);
}

.dishImage {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: contain;
  background: #071d22;
  padding: 8px;
}

.dishCard strong {
  display: block;
  padding: 13px 15px 15px;
  font-size: 15px;
}

.featureGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.featureCard {
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  border-radius: 27px;
  background: rgba(255,255,255,0.07);
  border: 1px solid var(--line);
  box-shadow: 0 20px 60px rgba(0,0,0,0.2);
  transition:
    transform 0.22s ease,
    border-color 0.22s ease;
}

.featureCard:hover {
  transform: translateY(-4px);
  border-color: rgba(216,184,106,0.4);
}

.featureImageFrame {
  aspect-ratio: 16 / 10;
  padding: 10px;
  background: #071d22;
}

.featureImage {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 18px;
  background: #071d22;
}

.featureContent {
  padding: 21px;
}

.featureContent span {
  display: inline-block;
  margin-top: 16px;
  color: var(--goldSoft);
  font-size: 14px;
  font-weight: 900;
}

.reviewGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.reviewCard,
.faqCard {
  padding: 23px;
  border-radius: 24px;
  background: rgba(255,255,255,0.065);
  border: 1px solid var(--line);
  box-shadow: 0 18px 46px rgba(0,0,0,0.18);
}

.stars {
  margin-bottom: 14px;
  color: var(--gold);
  letter-spacing: 0.08em;
  font-size: 13px;
}

.reviewAction {
  margin-top: 24px;
  text-align: center;
}

.contactPanel {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 28px;
  padding: 32px;
  border-radius: 32px;
  background:
    linear-gradient(135deg, rgba(255,255,255,0.095), rgba(255,255,255,0.05));
  border: 1px solid rgba(255,255,255,0.13);
  box-shadow: var(--shadow);
}

.contactCopy {
  align-self: center;
}

.contactCopy h2 {
  margin: 0 0 14px;
  font-size: clamp(31px, 4vw, 48px);
  line-height: 1;
  letter-spacing: -0.045em;
}

.hoursBox {
  padding: 22px;
  border-radius: 24px;
  background: rgba(0,0,0,0.18);
  border: 1px solid var(--line);
}

.hoursBox h3 {
  margin: 0 0 14px;
  font-size: 22px;
}

.hourRow {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  color: var(--muted);
}

.hourRow:last-child {
  border-bottom: 0;
}

.hourRow strong {
  color: var(--white);
  text-align: right;
}

.faqGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}

.footer {
  width: min(var(--max), calc(100% - 36px));
  margin: 0 auto;
  padding: 28px 0 92px;
  border-top: 1px solid var(--line);
  color: var(--muted2);
  font-size: 14px;
}

.mobileStickyCta {
  display: none;
}

@media (max-width: 1080px) {
  .topbar {
    grid-template-columns: 1fr auto;
  }

  .desktopNav {
    grid-column: 1 / -1;
    justify-content: flex-start;
    overflow-x: auto;
    padding-bottom: 2px;
  }

  .hero {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .heroCopy {
    max-width: 850px;
  }

  .heroImage {
    height: 430px;
  }

  .productGrid,
  .featureGrid,
  .reviewGrid {
    grid-template-columns: repeat(2, 1fr);
  }

  .cookingGrid,
  .contactPanel {
    grid-template-columns: 1fr;
  }

  .cookingCard {
    grid-template-columns: 40% 1fr;
  }

  .dishGallery {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 760px) {
  .topbar {
    padding: 13px 14px;
    gap: 12px;
  }

  .brandIcon {
    width: 39px;
    height: 39px;
  }

  .brandText strong {
    font-size: 16px;
  }

  .languageSwitch {
    justify-self: end;
  }

  .languageSwitch button {
    padding: 7px 8px;
    font-size: 11px;
  }

  .desktopNav {
    gap: 17px;
    font-size: 13px;
    white-space: nowrap;
  }

  .hero,
  .section,
  .trustStrip,
  .footer {
    width: min(100% - 28px, var(--max));
  }

  .hero {
    padding: 38px 0 30px;
    gap: 30px;
  }

  .pillRow {
    margin-bottom: 18px;
  }

  .premiumPill,
  .hoursPill {
    font-size: 11px;
  }

  .hero h1 {
    font-size: clamp(39px, 13vw, 54px);
    letter-spacing: -0.055em;
  }

  .heroLead {
    font-size: 16px;
    line-height: 1.65;
  }

  .addressBlock {
    padding: 14px;
    border-radius: 18px;
  }

  .ctaRow {
    display: grid;
    grid-template-columns: 1fr;
  }

  .btn {
    width: 100%;
  }

  .heroImageShell {
    border-radius: 26px;
    padding: 9px;
  }

  .heroImageShell::after {
    inset: 9px;
    border-radius: 18px;
  }

  .heroImage {
    height: 300px;
    border-radius: 18px;
  }

  .heroImageFooter {
    width: calc(100% - 22px);
    margin-top: -26px;
    flex-direction: column;
    align-items: flex-start;
  }

  .trustStrip {
    grid-template-columns: 1fr;
    transform: none;
    margin-top: 12px;
  }

  .section {
    padding: 54px 0;
  }

  .sectionHeader {
    margin-bottom: 26px;
  }

  .sectionHeader h2 {
    font-size: clamp(31px, 10vw, 42px);
  }

  .sectionHeader p {
    font-size: 16px;
  }

  .productGrid,
  .featureGrid,
  .reviewGrid,
  .faqGrid,
  .dishGallery {
    grid-template-columns: 1fr;
  }

  .productImageFrame,
  .featureImageFrame {
    padding: 8px;
  }

  .productContent,
  .featureContent {
    padding: 19px;
  }

  .cookingCard {
    grid-template-columns: 1fr;
  }

  .cookingImageFrame {
    min-height: 0;
    aspect-ratio: 4 / 3;
  }

  .cookingContent {
    padding: 22px;
  }

  .contactPanel {
    padding: 22px;
    border-radius: 26px;
  }

  .hoursBox {
    padding: 18px;
  }

  .hourRow {
    font-size: 14px;
  }

  .mobileStickyCta {
    position: fixed;
    left: 12px;
    right: 12px;
    bottom: 12px;
    z-index: 80;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .mobileStickyCta a {
    text-align: center;
    padding: 14px 12px;
    border-radius: 999px;
    text-decoration: none;
    font-weight: 950;
    color: #021316;
    background: linear-gradient(135deg, var(--cyan), var(--aqua));
    box-shadow: 0 18px 42px rgba(0,0,0,0.32);
  }

  .mobileStickyCta a:last-child {
    background: linear-gradient(135deg, var(--gold), var(--goldSoft));
  }

  .footer {
    padding-bottom: 94px;
  }
}

@media (max-width: 420px) {
  .languageSwitch button {
    padding: 7px 7px;
  }

  .heroImage {
    height: 260px;
  }

  .productImageFrame {
    aspect-ratio: 4 / 3;
  }
}
`;
