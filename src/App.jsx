import React, { useEffect, useState } from "react";

const img = (name) => `/images/${name}`;

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

const TEXT = {
  en: {
    navHome: "Home",
    navSelection: "Fresh Selection",
    navCooking: "Cooking Options",
    navFeatures: "Features",
    navReviews: "Reviews",
    navFaq: "FAQ",
    heroBadge: "Live Seafood Supply @ Crab Talk",
    heroTitle: "Premium live seafood, selected fresh daily.",
    heroSub:
      "Visit us at Commonwealth Crescent for live crabs, roe crabs, lobsters, oysters, clams, Soon Hock and more. Buy live seafood for home cooking, or ask us about nearby cooking arrangements when available.",
    order: "WhatsApp to Reserve",
    telegram: "Join Telegram Updates",
    map: "Open Google Maps",
    address: "31 Commonwealth Crescent #01-41/42/43 S(149644)",
    freshTitle: "Fresh Daily Selection",
    freshSub:
      "Availability changes daily. Pre-order is recommended, especially for roe crabs, lobsters and premium live seafood.",
    cookingTitle: "Two Simple Ways to Enjoy",
    homeCooking: "Home Cooking",
    homeCookingText:
      "Choose your live seafood and bring it home fresh. Best for steaming, chilli crab, black pepper crab, ginger scallion crab, seafood soup and family gatherings.",
    nearbyCooking: "Nearby Cooking Option",
    nearbyCookingText:
      "Cooking by nearby stalls may be available depending on crowd, timing and capacity. Please check before ordering. Cooking fees and waiting time may apply.",
    featuresTitle: "Featured & Shared",
    featuresSub:
      "Crab Talk has been featured by food media and local creators for its live seafood concept at Commonwealth Crescent.",
    reviewsTitle: "Customer Review Highlights",
    reviewsSub:
      "For the latest real customer reviews, please view our Google Maps listing directly.",
    faqTitle: "Frequently Asked Questions",
    hoursTitle: "Opening Hours",
    contactTitle: "Visit Crab Talk",
    footer: "© Crab Talk SG. Fresh seafood availability and prices may change daily. While stocks last.",
  },
  zh: {
    navHome: "首页",
    navSelection: "每日海鲜",
    navCooking: "享用方式",
    navFeatures: "媒体介绍",
    navReviews: "顾客评价",
    navFaq: "常见问题",
    heroBadge: "Crab Talk 活海鲜供应",
    heroTitle: "每日精选新鲜活海鲜。",
    heroSub:
      "欢迎到 Commonwealth Crescent 选购活螃蟹、膏蟹、龙虾、生蚝、蛤蜊、笋壳鱼等。适合带回家烹煮，也可询问附近熟食档是否能代煮。",
    order: "WhatsApp 预订",
    telegram: "加入 Telegram 更新",
    map: "打开 Google 地图",
    address: "31 Commonwealth Crescent #01-41/42/43 S(149644)",
    freshTitle: "每日新鲜选择",
    freshSub: "海鲜供应每日不同。膏蟹、龙虾及高级活海鲜建议提前预订。",
    cookingTitle: "两种享用方式",
    homeCooking: "带回家烹煮",
    homeCookingText:
      "亲自挑选活海鲜，带回家清蒸、辣椒蟹、黑胡椒蟹、姜葱蟹、海鲜汤或家庭聚餐。",
    nearbyCooking: "附近代煮选择",
    nearbyCookingText:
      "附近熟食档是否能代煮需视人潮、时间和档口负荷而定。请先询问，代煮费和等候时间另计。",
    featuresTitle: "媒体与达人介绍",
    featuresSub: "Crab Talk 的活海鲜概念曾被美食媒体和本地创作者介绍。",
    reviewsTitle: "顾客评价重点",
    reviewsSub: "最新真实评价，请直接查看我们的 Google Maps 页面。",
    faqTitle: "常见问题",
    hoursTitle: "营业时间",
    contactTitle: "到访 Crab Talk",
    footer: "© Crab Talk SG。海鲜供应和价格每日可能不同，售完为止。",
  },
  ja: {
    navHome: "ホーム",
    navSelection: "本日の海鮮",
    navCooking: "楽しみ方",
    navFeatures: "掲載情報",
    navReviews: "レビュー",
    navFaq: "FAQ",
    heroBadge: "Crab Talk 活シーフード販売",
    heroTitle: "毎日仕入れる新鮮な活シーフード。",
    heroSub:
      "Commonwealth Crescent にて、活ガニ、ロエクラブ、ロブスター、牡蠣、アサリ、Soon Hock などを販売しています。ご自宅での調理用に購入でき、状況により近隣での調理相談も可能です。",
    order: "WhatsAppで予約",
    telegram: "Telegram更新に参加",
    map: "Google Mapsを開く",
    address: "31 Commonwealth Crescent #01-41/42/43 S(149644)",
    freshTitle: "毎日の新鮮ラインアップ",
    freshSub:
      "入荷内容は日によって変わります。ロエクラブ、ロブスター、高級活シーフードは事前予約がおすすめです。",
    cookingTitle: "2つの楽しみ方",
    homeCooking: "自宅で調理",
    homeCookingText:
      "活シーフードを選んで持ち帰り。蒸し料理、チリクラブ、ブラックペッパークラブ、ジンジャースキャリオン、海鮮スープなどに最適です。",
    nearbyCooking: "近隣調理オプション",
    nearbyCookingText:
      "近隣店舗での調理は混雑状況、時間、対応可能数により変わります。注文前にご確認ください。調理費と待ち時間が発生する場合があります。",
    featuresTitle: "メディア・SNS掲載",
    featuresSub:
      "Crab Talk の活シーフードスタイルは、フードメディアやローカルクリエイターにも紹介されています。",
    reviewsTitle: "レビューのポイント",
    reviewsSub: "最新の実際のレビューは Google Maps でご確認ください。",
    faqTitle: "よくある質問",
    hoursTitle: "営業時間",
    contactTitle: "Crab Talkへ行く",
    footer: "© Crab Talk SG。入荷状況と価格は日によって変わります。売り切れ次第終了。",
  },
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

const heroImages = [
  img("feature-8days-original-thumbnail.jpg"),
  img("hero-live-mud-crab-closeup.jpg"),
  img("product-live-crab-premium.jpg"),
  img("product-yellow-roe-crab-06.jpg"),
  img("dish-lobster-yee-mee-fai-kee-hero.jpg"),
];

const freshItems = [
  {
    title: "Live Mud Crabs",
    desc: "Active, meaty crabs selected for home steaming, chilli crab, black pepper crab or ginger scallion crab.",
    image: img("product-live-crab-premium.jpg"),
    fallback: img("product-live-crab-closeup-01.jpg"),
  },
  {
    title: "Sri Lanka Roe Crabs",
    desc: "Premium roe crabs for customers who enjoy rich roe, firm meat and restaurant-style home dining.",
    image: img("product-yellow-roe-crab-06.jpg"),
    fallback: img("product-yellow-roe-crab-01.jpg"),
  },
  {
    title: "Live Lobsters",
    desc: "Boston lobster and green lobster options depending on daily arrival and seasonality.",
    image: img("product-boston-lobster-display.jpg"),
    fallback: img("product-live-green-lobster-01.jpg"),
  },
  {
    title: "Fresh Oysters",
    desc: "Clean, briny oysters suitable for seafood platters, weekend gatherings or premium home dining.",
    image: img("product-oysters-premium-02.jpg"),
    fallback: img("product-oysters-closeup-02.jpg"),
  },
  {
    title: "Manila Clams",
    desc: "Great for steaming, chilli lala, soup, white wine style or simple home cooking.",
    image: img("product-manila-clams-01.jpg"),
    fallback: img("product-manila-clams-closeup.jpg"),
  },
  {
    title: "Soon Hock & Premium Fish",
    desc: "Live fish options suitable for steaming, Hong Kong style or family seafood dinners.",
    image: img("product-live-soon-hock-premium-fish.jpg"),
    fallback: img("product-live-soon-hock-01.jpg"),
  },
];

const featureCards = [
  {
    title: "Featured on 8 Days",
    text: "Crab Talk × Commonwealth live seafood concept.",
    image: img("feature-8days-original-thumbnail.jpg"),
    link: LINKS.eightDays,
  },
  {
    title: "Botak Jazz TikTok Feature",
    text: "Lobster yee mee and seafood experience shared online.",
    image: img("feature-botak-jazz-tiktok.jpg"),
    link: LINKS.botakJazz,
  },
  {
    title: "Crab Seller Using AI",
    text: "A modern seafood stall using AI for daily work and content.",
    image: img("AI-feature.jpeg"),
    link: LINKS.aiFeature,
  },
];

const reviewHighlights = [
  {
    title: "Fresh live seafood",
    text: "Customers often look for live crabs, roe crabs, lobsters and seasonal seafood availability.",
  },
  {
    title: "Friendly recommendations",
    text: "Customers commonly appreciate guidance on choosing seafood and suitable cooking styles.",
  },
  {
    title: "Convenient market concept",
    text: "A practical option for buying live seafood at Commonwealth Crescent for home cooking.",
  },
];

const faqs = [
  {
    q: "Should I pre-order?",
    a: "Yes, pre-order is recommended because live seafood availability changes daily and popular items can sell out early.",
  },
  {
    q: "Are the crabs live or cooked?",
    a: "Most items are sold live and uncooked unless clearly stated otherwise. Please check with us before ordering.",
  },
  {
    q: "Can I buy seafood for home cooking?",
    a: "Yes. This is one of the main reasons customers visit Crab Talk — to select live seafood and cook it at home.",
  },
  {
    q: "Can nearby stalls cook the seafood?",
    a: "Sometimes, depending on stall capacity, timing and crowd. Please check before ordering. Cooking fees and waiting time may apply.",
  },
  {
    q: "How do I know today’s availability?",
    a: "Message us on WhatsApp or join our Telegram updates for daily arrivals and limited seafood drops.",
  },
];

function SmartImage({ src, fallback, alt, className }) {
  const [activeSrc, setActiveSrc] = useState(src);

  useEffect(() => {
    setActiveSrc(src);
  }, [src]);

  return (
    <img
      src={activeSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => {
        if (fallback && activeSrc !== fallback) {
          setActiveSrc(fallback);
        }
      }}
    />
  );
}

export default function App() {
  const [lang, setLang] = useState("en");
  const [heroIndex, setHeroIndex] = useState(0);
  const t = TEXT[lang];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="site">
      <style>{css}</style>

      <header className="topbar">
        <a href="#home" className="brand">
          <span className="brandMark">🦀</span>
          <span>
            <strong>Crab Talk SG</strong>
            <small>Live Seafood Supply</small>
          </span>
        </a>

        <nav className="nav">
          <a href="#selection">{t.navSelection}</a>
          <a href="#cooking">{t.navCooking}</a>
          <a href="#features">{t.navFeatures}</a>
          <a href="#reviews">{t.navReviews}</a>
          <a href="#faq">{t.navFaq}</a>
        </nav>

        <div className="language">
          <button onClick={() => setLang("en")} className={lang === "en" ? "active" : ""}>
            EN
          </button>
          <button onClick={() => setLang("zh")} className={lang === "zh" ? "active" : ""}>
            中文
          </button>
          <button onClick={() => setLang("ja")} className={lang === "ja" ? "active" : ""}>
            日本語
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="heroText">
            <p className="eyebrow">{t.heroBadge}</p>
            <h1>{t.heroTitle}</h1>
            <p className="lead">{t.heroSub}</p>

            <div className="addressLine">
              <span>📍</span>
              <a href={LINKS.maps} target="_blank" rel="noreferrer">
                {t.address}
              </a>
            </div>

            <div className="heroActions">
              <a className="btn primary" href={LINKS.whatsapp} target="_blank" rel="noreferrer">
                {t.order}
              </a>
              <a className="btn secondary" href={LINKS.telegram} target="_blank" rel="noreferrer">
                {t.telegram}
              </a>
              <a className="btn ghost" href={LINKS.maps} target="_blank" rel="noreferrer">
                {t.map}
              </a>
            </div>
          </div>

          <div className="heroMedia">
            <SmartImage
              src={heroImages[heroIndex]}
              fallback={img("product-live-crab-premium.jpg")}
              alt="Crab Talk live seafood"
              className="heroImage"
            />
            <div className="heroDots">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  className={index === heroIndex ? "dot active" : "dot"}
                  onClick={() => setHeroIndex(index)}
                  aria-label={`Show image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="trustStrip">
          <div>
            <strong>Live seafood</strong>
            <span>Selected daily</span>
          </div>
          <div>
            <strong>Commonwealth Crescent</strong>
            <span>Market-style seafood buying</span>
          </div>
          <div>
            <strong>Pre-order recommended</strong>
            <span>Limited daily stock</span>
          </div>
        </section>

        <section id="selection" className="section">
          <div className="sectionHead">
            <p className="eyebrow">Selection</p>
            <h2>{t.freshTitle}</h2>
            <p>{t.freshSub}</p>
          </div>

          <div className="productGrid">
            {freshItems.map((item) => (
              <article className="productCard" key={item.title}>
                <div className="photoFrame">
                  <SmartImage
                    src={item.image}
                    fallback={item.fallback}
                    alt={item.title}
                    className="productImage"
                  />
                </div>
                <div className="cardBody">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="cooking" className="section splitSection">
          <div className="sectionHead">
            <p className="eyebrow">How it works</p>
            <h2>{t.cookingTitle}</h2>
          </div>

          <div className="splitGrid">
            <article className="optionCard premium">
              <SmartImage
                src={img("dish-steamed-crab-01.jpg")}
                fallback={img("dish-chilli-crab-premium.jpg")}
                alt="Home cooking seafood"
                className="optionImage"
              />
              <div>
                <span className="tag">Recommended</span>
                <h3>{t.homeCooking}</h3>
                <p>{t.homeCookingText}</p>
              </div>
            </article>

            <article className="optionCard">
              <SmartImage
                src={img("dish-lobster-yee-mee-01.jpg")}
                fallback={img("dish-lobster-yee-mee-fai-kee-hero.jpg")}
                alt="Nearby cooked seafood option"
                className="optionImage"
              />
              <div>
                <span className="tag muted">Subject to availability</span>
                <h3>{t.nearbyCooking}</h3>
                <p>{t.nearbyCookingText}</p>
              </div>
            </article>
          </div>
        </section>

        <section id="features" className="section">
          <div className="sectionHead">
            <p className="eyebrow">Media</p>
            <h2>{t.featuresTitle}</h2>
            <p>{t.featuresSub}</p>
          </div>

          <div className="featureGrid">
            {featureCards.map((card) => (
              <a
                className="featureCard"
                href={card.link}
                target="_blank"
                rel="noreferrer"
                key={card.title}
              >
                <div className="featureImageWrap">
                  <SmartImage
                    src={card.image}
                    fallback={img("feature-8days-original-thumbnail.jpg")}
                    alt={card.title}
                    className="featureImage"
                  />
                </div>
                <div className="cardBody">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <span>View feature →</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="reviews" className="section reviews">
          <div className="sectionHead">
            <p className="eyebrow">Reviews</p>
            <h2>{t.reviewsTitle}</h2>
            <p>{t.reviewsSub}</p>
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

          <div className="centerAction">
            <a className="btn secondary" href={LINKS.maps} target="_blank" rel="noreferrer">
              View Real Google Reviews
            </a>
          </div>
        </section>

        <section className="section contactSection">
          <div className="contactCard">
            <div>
              <p className="eyebrow">Location</p>
              <h2>{t.contactTitle}</h2>
              <p className="lead small">{t.address}</p>

              <div className="heroActions compact">
                <a className="btn primary" href={LINKS.whatsapp} target="_blank" rel="noreferrer">
                  WhatsApp Crab Talk
                </a>
                <a className="btn secondary" href={LINKS.telegram} target="_blank" rel="noreferrer">
                  Telegram Updates
                </a>
                <a className="btn ghost" href={LINKS.maps} target="_blank" rel="noreferrer">
                  Directions
                </a>
              </div>
            </div>

            <div className="hoursBox">
              <h3>{t.hoursTitle}</h3>
              {HOURS.map(([day, time]) => (
                <div className="hourRow" key={day}>
                  <span>{day}</span>
                  <strong>{time}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section faq">
          <div className="sectionHead">
            <p className="eyebrow">FAQ</p>
            <h2>{t.faqTitle}</h2>
          </div>

          <div className="faqGrid">
            {faqs.map((item) => (
              <article className="faqItem" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>{t.footer}</p>
      </footer>

      <div className="mobileCta">
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
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #031c22;
  color: #ffffff;
}

a {
  color: inherit;
}

.site {
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(0, 183, 255, 0.18), transparent 34rem),
    radial-gradient(circle at top right, rgba(216, 184, 106, 0.14), transparent 30rem),
    linear-gradient(180deg, #031c22 0%, #062c34 44%, #021417 100%);
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 24px;
  padding: 16px clamp(18px, 5vw, 72px);
  background: rgba(2, 20, 24, 0.86);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255,255,255,0.09);
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.brandMark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: linear-gradient(135deg, #0aa7bd, #d8b86a);
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.brand strong {
  display: block;
  font-size: 18px;
  letter-spacing: 0.02em;
}

.brand small {
  display: block;
  margin-top: 3px;
  color: #a7c6cd;
  font-size: 12px;
}

.nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 14px;
  color: #c7dadd;
}

.nav a {
  text-decoration: none;
}

.nav a:hover {
  color: #d8b86a;
}

.language {
  display: flex;
  gap: 6px;
  padding: 4px;
  border-radius: 999px;
  background: rgba(255,255,255,0.06);
}

.language button {
  border: 0;
  border-radius: 999px;
  padding: 8px 10px;
  color: #c7dadd;
  background: transparent;
  cursor: pointer;
  font-weight: 700;
  font-size: 12px;
}

.language button.active {
  color: #051d22;
  background: #d8b86a;
}

.section {
  width: min(1180px, calc(100% - 36px));
  margin: 0 auto;
  padding: 72px 0;
}

.hero {
  display: grid;
  grid-template-columns: 1.02fr 0.98fr;
  align-items: center;
  gap: 42px;
  min-height: calc(100vh - 74px);
  padding-top: 44px;
}

.eyebrow {
  color: #d8b86a;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 12px;
  margin: 0 0 14px;
}

h1, h2, h3, p {
  margin-top: 0;
}

h1 {
  max-width: 760px;
  font-size: clamp(40px, 6vw, 76px);
  line-height: 0.95;
  letter-spacing: -0.06em;
  margin-bottom: 22px;
}

h2 {
  font-size: clamp(30px, 4vw, 48px);
  line-height: 1;
  letter-spacing: -0.04em;
  margin-bottom: 14px;
}

h3 {
  font-size: 22px;
  letter-spacing: -0.02em;
  margin-bottom: 10px;
}

.lead {
  color: #c7dadd;
  font-size: clamp(17px, 2vw, 21px);
  line-height: 1.65;
  max-width: 720px;
}

.lead.small {
  font-size: 18px;
}

.addressLine {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  margin: 26px 0;
  color: #eaf7fa;
  font-weight: 700;
}

.addressLine a {
  text-decoration: none;
  border-bottom: 1px solid rgba(216,184,106,0.45);
}

.heroActions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.heroActions.compact {
  margin-top: 22px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 13px 19px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 800;
  border: 1px solid rgba(255,255,255,0.13);
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn.primary {
  background: linear-gradient(135deg, #00b7ff, #05d1b2);
  color: #021417;
  border-color: transparent;
}

.btn.secondary {
  background: rgba(216,184,106,0.14);
  color: #f8e6ad;
  border-color: rgba(216,184,106,0.35);
}

.btn.ghost {
  background: rgba(255,255,255,0.06);
  color: #eaf7fa;
}

.heroMedia {
  position: relative;
  border-radius: 30px;
  padding: 12px;
  background:
    linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.04));
  border: 1px solid rgba(255,255,255,0.14);
  box-shadow: 0 24px 80px rgba(0,0,0,0.35);
}

.heroImage {
  width: 100%;
  height: min(52vh, 460px);
  display: block;
  border-radius: 22px;
  object-fit: contain;
  background: #071d22;
}

.heroDots {
  position: absolute;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 999px;
  background: rgba(0,0,0,0.45);
}

.dot {
  width: 9px;
  height: 9px;
  border: 0;
  border-radius: 50%;
  background: rgba(255,255,255,0.45);
  cursor: pointer;
}

.dot.active {
  background: #d8b86a;
}

.trustStrip {
  width: min(1180px, calc(100% - 36px));
  margin: -24px auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.trustStrip div {
  padding: 20px;
  border-radius: 22px;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.1);
}

.trustStrip strong {
  display: block;
  margin-bottom: 6px;
  color: #ffffff;
}

.trustStrip span {
  color: #a7c6cd;
  font-size: 14px;
}

.sectionHead {
  max-width: 760px;
  margin-bottom: 32px;
}

.sectionHead p:not(.eyebrow) {
  color: #bcd4d9;
  font-size: 17px;
  line-height: 1.65;
}

.productGrid,
.featureGrid,
.reviewGrid,
.faqGrid {
  display: grid;
  gap: 20px;
}

.productGrid {
  grid-template-columns: repeat(3, 1fr);
}

.productCard,
.featureCard,
.reviewCard,
.faqItem,
.optionCard,
.contactCard {
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.11);
  box-shadow: 0 22px 60px rgba(0,0,0,0.22);
}

.productCard,
.featureCard,
.reviewCard,
.faqItem {
  border-radius: 26px;
  overflow: hidden;
}

.photoFrame,
.featureImageWrap {
  width: 100%;
  background: #071d22;
  overflow: hidden;
}

.photoFrame {
  aspect-ratio: 4 / 3;
}

.productImage,
.featureImage,
.optionImage {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  background: #071d22;
}

.cardBody {
  padding: 22px;
}

.cardBody p,
.optionCard p,
.reviewCard p,
.faqItem p {
  color: #c7dadd;
  line-height: 1.6;
  font-size: 16px;
}

.splitGrid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 20px;
}

.optionCard {
  display: grid;
  grid-template-columns: 44% 1fr;
  gap: 0;
  overflow: hidden;
  border-radius: 28px;
}

.optionCard.premium {
  border-color: rgba(216,184,106,0.3);
}

.optionImage {
  min-height: 280px;
}

.optionCard > div:not(:first-child) {
  padding: 28px;
  align-self: center;
}

.tag {
  display: inline-flex;
  margin-bottom: 14px;
  padding: 7px 11px;
  border-radius: 999px;
  background: rgba(216,184,106,0.16);
  color: #f8e6ad;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.tag.muted {
  background: rgba(255,255,255,0.08);
  color: #c7dadd;
}

.featureGrid {
  grid-template-columns: repeat(3, 1fr);
}

.featureCard {
  color: inherit;
  text-decoration: none;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.featureCard:hover {
  transform: translateY(-4px);
  border-color: rgba(216,184,106,0.4);
}

.featureImageWrap {
  aspect-ratio: 16 / 10;
}

.featureCard span {
  color: #d8b86a;
  font-weight: 800;
}

.reviews {
  padding-top: 44px;
}

.reviewGrid {
  grid-template-columns: repeat(3, 1fr);
}

.reviewCard {
  padding: 24px;
}

.stars {
  color: #d8b86a;
  letter-spacing: 0.08em;
  margin-bottom: 16px;
}

.centerAction {
  margin-top: 24px;
  text-align: center;
}

.contactCard {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 34px;
  padding: 34px;
  border-radius: 30px;
}

.hoursBox {
  padding: 24px;
  border-radius: 24px;
  background: rgba(0,0,0,0.18);
  border: 1px solid rgba(255,255,255,0.1);
}

.hourRow {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  color: #c7dadd;
}

.hourRow:last-child {
  border-bottom: 0;
}

.hourRow strong {
  color: #ffffff;
  text-align: right;
}

.faqGrid {
  grid-template-columns: repeat(2, 1fr);
}

.faqItem {
  padding: 24px;
}

.footer {
  width: min(1180px, calc(100% - 36px));
  margin: 0 auto;
  padding: 30px 0 100px;
  color: #8fb2b9;
  border-top: 1px solid rgba(255,255,255,0.1);
}

.mobileCta {
  display: none;
}

@media (max-width: 980px) {
  .topbar {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .nav {
    justify-content: flex-start;
    overflow-x: auto;
    padding-bottom: 4px;
  }

  .language {
    width: max-content;
  }

  .hero {
    grid-template-columns: 1fr;
    min-height: auto;
    padding-top: 36px;
  }

  .heroImage {
    height: 360px;
  }

  .trustStrip,
  .productGrid,
  .featureGrid,
  .reviewGrid,
  .faqGrid,
  .splitGrid,
  .contactCard {
    grid-template-columns: 1fr;
  }

  .optionCard {
    grid-template-columns: 1fr;
  }

  .optionImage {
    min-height: 240px;
    aspect-ratio: 4 / 3;
  }

  .contactCard {
    padding: 24px;
  }
}

@media (max-width: 640px) {
  .section {
    width: min(100% - 28px, 1180px);
    padding: 52px 0;
  }

  .topbar {
    padding: 14px;
  }

  .brand strong {
    font-size: 16px;
  }

  .nav {
    font-size: 13px;
    gap: 16px;
  }

  h1 {
    font-size: 42px;
  }

  h2 {
    font-size: 34px;
  }

  .lead {
    font-size: 16px;
  }

  .heroActions {
    display: grid;
    grid-template-columns: 1fr;
  }

  .btn {
    width: 100%;
  }

  .heroImage {
    height: 280px;
  }

  .photoFrame {
    aspect-ratio: 4 / 3;
  }

  .cardBody,
  .reviewCard,
  .faqItem {
    padding: 20px;
  }

  .trustStrip {
    grid-template-columns: 1fr;
    margin-top: 0;
  }

  .contactCard {
    padding: 20px;
  }

  .hoursBox {
    padding: 18px;
  }

  .mobileCta {
    position: fixed;
    left: 12px;
    right: 12px;
    bottom: 12px;
    z-index: 40;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .mobileCta a {
    text-align: center;
    text-decoration: none;
    padding: 14px 16px;
    border-radius: 999px;
    font-weight: 900;
    background: #d8b86a;
    color: #051d22;
    box-shadow: 0 16px 38px rgba(0,0,0,0.35);
  }

  .mobileCta a:first-child {
    background: linear-gradient(135deg, #00b7ff, #05d1b2);
  }

  .footer {
    padding-bottom: 96px;
  }
}
`;
