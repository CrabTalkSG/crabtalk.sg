import { useEffect, useMemo, useState } from "react";

/*
  Crab Talk SG Website
  Replace this whole file at: src/App.jsx

  Important:
  1) Upload all images into: public/images/
  2) Image paths below must match your GitHub filenames exactly.
  3) For Google Analytics, replace G-XXXXXXXXXX with your real GA4 Measurement ID.
*/

const GA_MEASUREMENT_ID = "G-V94NDT5ZCR";

const WHATSAPP_LINK = "https://wa.me/6598398671";
const TELEGRAM_LINK = "https://t.me/CrabTalkSG";
const TIKTOK_LINK = "https://www.tiktok.com/@liveseafood_crabtalksg";
const MAPS_LINK = "https://maps.app.goo.gl/1GKdK2y6jpbqfg8N8?g_st=ac";
const EIGHT_DAYS_LINK =
  "https://www.8days.sg/eatanddrink/hawkerfood/commonwealth-crab-talk-fai-kee-live-seafood-hawker-collab-856541";
const BOTAK_JAZZ_LINK =
  "https://www.tiktok.com/@botakjazz/video/7602204733155364116";
const AI_FEATURE_LINK = "https://www.facebook.com/share/v/1Djwg4h7UP/";

const address = "31 Commonwealth Crescent #01-41/42/43 Singapore 149644";

const hours = [
  ["Monday", "12–5 pm"],
  ["Tuesday", "8 am–7 pm"],
  ["Wednesday", "8 am–7 pm"],
  ["Thursday", "8 am–7 pm"],
  ["Friday", "8 am–8 pm"],
  ["Saturday", "8 am–8 pm"],
  ["Sunday", "8 am–5 pm"],
];

const copy = {
  en: {
    navProducts: "Selection",
    navHow: "How to Buy",
    navReviews: "Reviews",
    navFaq: "FAQ",
    heroTag: "Live Seafood Supply @ Crab Talk",
    heroTitle: "Pick live seafood with confidence.",
    heroText:
      "Fresh live crabs, lobsters, oysters, clams and premium fish selected daily at Commonwealth Crescent Market.",
    whatsapp: "WhatsApp to Reserve",
    telegram: "Join Telegram",
    map: "Get Directions",
    liveToday: "Fresh daily arrivals",
    homeCook: "Ideal for home cooking",
    featured: "As Featured & Seen On",
    selection: "Fresh Daily Selection",
    selectionText:
      "Availability changes daily. Walk-in or pre-order is recommended for premium seafood and larger quantities.",
    why: "Why Customers Visit Crab Talk",
    how: "How to Buy",
    reviews: "Customer Confidence",
    reviewsText:
      "Customers come back for live seafood, practical advice, and friendly service from the stall team.",
    faq: "Frequently Asked Questions",
    cooking: "Home Cooking First. Cooking Options Available.",
    footerCta: "Planning seafood for dinner today?",
  },
  zh: {
    navProducts: "海鲜选择",
    navHow: "购买方式",
    navReviews: "评价",
    navFaq: "常见问题",
    heroTag: "Crab Talk 活海鲜供应",
    heroTitle: "放心挑选新鲜活海鲜。",
    heroText:
      "每日供应活螃蟹、龙虾、生蚝、蛤蜊及高级活鱼，地点位于 Commonwealth Crescent Market。",
    whatsapp: "WhatsApp 预订",
    telegram: "加入 Telegram",
    map: "查看地图",
    liveToday: "每日新鲜到货",
    homeCook: "适合家庭烹煮",
    featured: "媒体与达人推荐",
    selection: "每日鲜活选择",
    selectionText: "货量每日不同。建议提前 WhatsApp 预订，尤其是高级海鲜或大量订单。",
    why: "为什么选择 Crab Talk",
    how: "购买流程",
    reviews: "顾客信任",
    reviewsText: "顾客喜欢我们的活海鲜、实用烹饪建议和亲切服务。",
    faq: "常见问题",
    cooking: "主打家庭烹煮，也可询问附近烹煮选择。",
    footerCta: "今晚想吃海鲜？",
  },
  ja: {
    navProducts: "商品",
    navHow: "購入方法",
    navReviews: "レビュー",
    navFaq: "FAQ",
    heroTag: "Crab Talk ライブシーフード",
    heroTitle: "新鮮な活海鮮を安心して選べます。",
    heroText:
      "Commonwealth Crescent Market にて、活ガニ、ロブスター、牡蠣、アサリ、高級魚を毎日入荷。",
    whatsapp: "WhatsAppで予約",
    telegram: "Telegramに参加",
    map: "地図を見る",
    liveToday: "毎日新鮮入荷",
    homeCook: "自宅調理に最適",
    featured: "メディア掲載・紹介",
    selection: "本日のライブシーフード",
    selectionText:
      "入荷状況は日によって変わります。高級海鮮や数量が多い場合は事前予約がおすすめです。",
    why: "Crab Talk が選ばれる理由",
    how: "購入の流れ",
    reviews: "お客様の信頼",
    reviewsText:
      "新鮮な活海鮮、調理アドバイス、親切なサービスでリピーターのお客様に支持されています。",
    faq: "よくある質問",
    cooking: "基本はご家庭での調理。近隣での調理相談も可能です。",
    footerCta: "今夜の海鮮ディナーにどうぞ。",
  },
};

const heroSlides = [
  {
    src: "/images/feature-8days-original-thumbnail.jpg",
    label: "8 Days feature",
  },
  {
    src: "/images/product-live-crab-premium.jpg",
    label: "Live mud crabs",
  },
  {
    src: "/images/product-yellow-roe-crab-06.jpg",
    label: "Sri Lanka yellow roe crabs",
  },
  {
    src: "/images/dish-lobster-yee-mee-fai-kee-hero.jpg",
    label: "Lobster yee mee",
  },
  {
    src: "/images/stall-crab-talk-front-01.jpg",
    label: "Crab Talk stall",
  },
];

const products = [
  {
    title: "Live Mud Crabs",
    image: "/images/product-live-crab-premium.jpg",
    desc: "Meaty live crabs selected for steaming, chilli crab, black pepper crab or ginger scallion crab.",
    tag: "Customer favourite",
  },
  {
    title: "Sri Lanka Roe Crabs",
    image: "/images/product-yellow-roe-crab-06.jpg",
    desc: "Popular for rich roe, firm meat and premium home dining occasions.",
    tag: "Premium roe",
  },
  {
    title: "Live Lobsters",
    image: "/images/product-boston-lobster-display.jpg",
    desc: "Boston lobster and green lobster options depending on daily arrival.",
    tag: "Live selection",
  },
  {
    title: "Fresh Oysters",
    image: "/images/product-oysters-premium-02.jpg",
    desc: "Cold, clean and suitable for seafood platters, gatherings or simple home enjoyment.",
    tag: "Fresh & chilled",
  },
  {
    title: "Manila Clams",
    image: "/images/product-manila-clams-01.jpg",
    desc: "Great for steaming, chilli lala, soup, white wine style or home seafood dishes.",
    tag: "Easy to cook",
  },
  {
    title: "Soon Hock & Premium Fish",
    image: "/images/product-live-soon-hock-01.jpg",
    desc: "Live fish options for steaming, Hong Kong style preparation or home cooking.",
    tag: "Live fish",
  },
];

const features = [
  {
    title: "Featured on 8 Days",
    image: "/images/feature-8days-original-thumbnail.jpg",
    desc: "Crab Talk’s live seafood and hawker-style cooking collaboration was covered by 8 Days.",
    link: EIGHT_DAYS_LINK,
    button: "Read Feature",
  },
  {
    title: "Botak Jazz TikTok Feature",
    image: "/images/feature-botak-jazz-tiktok.jpg",
    desc: "Lobster yee mee and seafood content featured by Botak Jazz on TikTok.",
    link: BOTAK_JAZZ_LINK,
    button: "Watch TikTok",
  },
  {
    title: "AI x Seafood Story",
    image: "/images/AI-feature.jpeg",
    desc: "Crab seller using AI for daily work — a modern market business story.",
    link: AI_FEATURE_LINK,
    button: "View Story",
  },
];

const reasons = [
  {
    title: "See It Live Before Buying",
    desc: "Choose from live tanks and daily seafood arrivals instead of relying only on photos.",
  },
  {
    title: "Practical Cooking Advice",
    desc: "Ask which seafood is best for steaming, chilli crab, soup, bee hoon, or home cooking.",
  },
  {
    title: "Market-Style Value",
    desc: "Buy seafood directly from the stall and decide how you want to prepare it.",
  },
  {
    title: "Easy Reservation",
    desc: "WhatsApp ahead to check availability, reserve your seafood, and reduce wasted trips.",
  },
];

const steps = [
  {
    title: "1. Check Today’s Seafood",
    desc: "Message us on WhatsApp or Telegram to ask what is available today.",
  },
  {
    title: "2. Reserve or Walk In",
    desc: "Premium items and larger crabs can sell fast, so pre-order is recommended.",
  },
  {
    title: "3. Pick Your Cooking Style",
    desc: "Bring home to cook, steam simply, or ask us about nearby cooking options.",
  },
];

const reviewHighlights = [
  {
    title: "Freshness",
    desc: "Customers often highlight the freshness of the live seafood and tanks.",
  },
  {
    title: "Helpful Service",
    desc: "The team can recommend seafood based on budget, portion size and cooking style.",
  },
  {
    title: "Return Visits",
    desc: "Many customers come back for crabs, lobsters, oysters and seasonal items.",
  },
];

const faqs = [
  {
    q: "Do I need to pre-order?",
    a: "Walk-ins are welcome, but pre-order is recommended because live seafood availability changes daily.",
  },
  {
    q: "Are all items live?",
    a: "Our main focus is live seafood, but some items may be fresh, chilled or seasonal depending on supply. Please check before coming.",
  },
  {
    q: "Can I buy seafood for home cooking?",
    a: "Yes. Crab Talk is especially suitable for customers who want to buy live seafood and cook at home.",
  },
  {
    q: "Can the seafood be cooked nearby?",
    a: "You may ask us about nearby cooking options. Availability depends on timing and kitchen capacity, so please check before ordering.",
  },
  {
    q: "How do prices work?",
    a: "Most premium seafood is priced by weight or by daily arrival. Prices may change depending on size, origin and market supply.",
  },
  {
    q: "Where are you located?",
    a: address,
  },
];

function App() {
  const [language, setLanguage] = useState("en");
  const [slide, setSlide] = useState(0);

  const t = copy[language];

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((current) => (current + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === "G-XXXXXXXXXX") return;

    const existingScript = document.querySelector(
      `script[src="https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"]`
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);
    }

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }

    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID);
  }, []);

  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Live Seafood Supply @ Crab Talk",
      image: "https://crabtalk.sg/images/stall-crab-talk-front-01.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "31 Commonwealth Crescent #01-41/42/43",
        addressLocality: "Singapore",
        postalCode: "149644",
        addressCountry: "SG",
      },
      url: "https://crabtalk.sg",
      sameAs: [TIKTOK_LINK, TELEGRAM_LINK],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Monday",
          opens: "12:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Tuesday",
          opens: "08:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Wednesday",
          opens: "08:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Thursday",
          opens: "08:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Friday",
          opens: "08:00",
          closes: "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "08:00",
          closes: "17:00",
        },
      ],
    };

    const oldSchema = document.getElementById("crabtalk-localbusiness-schema");
    if (oldSchema) oldSchema.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "crabtalk-localbusiness-schema";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const activeSchema = document.getElementById(
        "crabtalk-localbusiness-schema"
      );
      if (activeSchema) activeSchema.remove();
    };
  }, []);

  const currentSlide = useMemo(() => heroSlides[slide], [slide]);

  const track = (eventName) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName);
    }
  };

  return (
    <div className="site">
      <style>{styles}</style>

      <header className="header">
        <a href="#top" className="brand" aria-label="Crab Talk SG">
          <span className="brandMark">🦀</span>
          <span>
            <strong>Crab Talk SG</strong>
            <small>Live Seafood Supply</small>
          </span>
        </a>

        <nav className="desktopNav">
          <a href="#selection">{t.navProducts}</a>
          <a href="#how">{t.navHow}</a>
          <a href="#reviews">{t.navReviews}</a>
          <a href="#faq">{t.navFaq}</a>
        </nav>

        <div className="headerActions">
          <select
            className="language"
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
            aria-label="Select language"
          >
            <option value="en">EN</option>
            <option value="zh">中文</option>
            <option value="ja">日本語</option>
          </select>

          <a
            className="miniButton"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            onClick={() => track("whatsapp_header_click")}
          >
            WhatsApp
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="heroText">
            <div className="eyebrow">{t.heroTag}</div>
            <h1>{t.heroTitle}</h1>
            <p className="heroLead">{t.heroText}</p>

            <div className="heroBadges">
              <span>{t.liveToday}</span>
              <span>{t.homeCook}</span>
              <span>Commonwealth Crescent</span>
            </div>

            <div className="heroButtons">
              <a
                className="primaryButton"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                onClick={() => track("whatsapp_hero_click")}
              >
                {t.whatsapp}
              </a>
              <a
                className="secondaryButton"
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noreferrer"
                onClick={() => track("telegram_hero_click")}
              >
                {t.telegram}
              </a>
              <a
                className="ghostButton"
                href={MAPS_LINK}
                target="_blank"
                rel="noreferrer"
                onClick={() => track("maps_hero_click")}
              >
                {t.map}
              </a>
            </div>

            <div className="addressStrip">
              <strong>Visit us:</strong> {address}
            </div>
          </div>

          <div className="heroMedia">
            <div className="heroImageCard">
              <img src={currentSlide.src} alt={currentSlide.label} />
              <div className="heroImageOverlay">
                <span>Daily live seafood</span>
                <strong>{currentSlide.label}</strong>
              </div>
            </div>

            <div className="slideDots">
              {heroSlides.map((item, index) => (
                <button
                  key={item.src}
                  className={index === slide ? "dot active" : "dot"}
                  onClick={() => setSlide(index)}
                  aria-label={`Show ${item.label}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section compactSection">
          <div className="statsGrid">
            <div>
              <strong>Live Tanks</strong>
              <span>Choose before buying</span>
            </div>
            <div>
              <strong>Daily Arrivals</strong>
              <span>Stock changes by supply</span>
            </div>
            <div>
              <strong>Home Cooking</strong>
              <span>Simple, fresh, flexible</span>
            </div>
            <div>
              <strong>Market Location</strong>
              <span>Commonwealth Crescent</span>
            </div>
          </div>
        </section>

        <section className="section" id="featured">
          <div className="sectionHeader">
            <span className="eyebrow">{t.featured}</span>
            <h2>Crab Talk in the Spotlight</h2>
            <p>
              Real market seafood, live tanks and community-driven content —
              built from the stall, not a showroom.
            </p>
          </div>

          <div className="featureGrid">
            {features.map((feature) => (
              <a
                key={feature.title}
                className="featureCard"
                href={feature.link}
                target="_blank"
                rel="noreferrer"
              >
                <div className="featureImage">
                  <img src={feature.image} alt={feature.title} />
                </div>
                <div className="featureBody">
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                  <span>{feature.button} →</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="section" id="selection">
          <div className="sectionHeader">
            <span className="eyebrow">{t.selection}</span>
            <h2>Premium Seafood, Market Freshness</h2>
            <p>{t.selectionText}</p>
          </div>

          <div className="selectionGrid">
            {products.map((product) => (
              <article className="productCard" key={product.title}>
                <div className="productImage">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="productContent">
                  <span className="productTag">{product.tag}</span>
                  <h3>{product.title}</h3>
                  <p>{product.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section splitSection">
          <div className="panel premiumPanel">
            <span className="eyebrow">{t.why}</span>
            <h2>Built for Customers Who Want to Choose Properly</h2>
            <p>
              Crab Talk is for customers who care about seeing the seafood,
              asking questions, and choosing the right item for the right dish.
            </p>

            <div className="reasonGrid">
              {reasons.map((reason) => (
                <div className="reasonItem" key={reason.title}>
                  <h3>{reason.title}</h3>
                  <p>{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel hoursPanel">
            <span className="eyebrow">Opening Hours</span>
            <h2>Visit Crab Talk</h2>
            <div className="hoursList">
              {hours.map(([day, time]) => (
                <div className="hoursRow" key={day}>
                  <span>{day}</span>
                  <strong>{time}</strong>
                </div>
              ))}
            </div>

            <a
              className="fullButton"
              href={MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              onClick={() => track("maps_hours_click")}
            >
              Open Google Maps
            </a>
          </div>
        </section>

        <section className="section cookingSection">
          <div className="sectionHeader">
            <span className="eyebrow">{t.cooking}</span>
            <h2>Two Simple Ways to Enjoy Your Seafood</h2>
          </div>

          <div className="cookingGrid">
            <div className="cookingCard mainCooking">
              <div>
                <span className="productTag">Recommended</span>
                <h3>Buy Live Seafood for Home Cooking</h3>
                <p>
                  Choose your seafood from the stall, bring it home, and cook it
                  your way. Best for families, gatherings and customers who want
                  control over portion and style.
                </p>
              </div>
              <ul>
                <li>Steam crabs or fish simply</li>
                <li>Cook chilli crab, black pepper crab or ginger scallion</li>
                <li>Use clams, oysters and lobster for home seafood feasts</li>
              </ul>
            </div>

            <div className="cookingCard softCooking">
              <div>
                <span className="productTag">Limited availability</span>
                <h3>Ask About Nearby Cooking Options</h3>
                <p>
                  Some customers ask about nearby cooking after buying seafood.
                  Availability depends on timing and kitchen capacity, so please
                  check with us before planning.
                </p>
              </div>
              <ul>
                <li>Cooking slots may be limited</li>
                <li>Cooking fees may apply</li>
                <li>Best to reserve ahead during peak hours</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="how">
          <div className="sectionHeader">
            <span className="eyebrow">{t.how}</span>
            <h2>Reserve in 3 Steps</h2>
          </div>

          <div className="stepsGrid">
            {steps.map((step) => (
              <div className="stepCard" key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section reviewsSection" id="reviews">
          <div className="sectionHeader">
            <span className="eyebrow">{t.reviews}</span>
            <h2>Why Customers Come Back</h2>
            <p>{t.reviewsText}</p>
          </div>

          <div className="reviewGrid">
            {reviewHighlights.map((review) => (
              <div className="reviewCard" key={review.title}>
                <div className="stars">★★★★★</div>
                <h3>{review.title}</h3>
                <p>{review.desc}</p>
              </div>
            ))}
          </div>

          <div className="reviewCta">
            <p>
              For the latest customer reviews, photos and updates, check our
              Google profile.
            </p>
            <a
              className="secondaryButton"
              href={MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              onClick={() => track("google_reviews_click")}
            >
              View on Google Maps
            </a>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="sectionHeader">
            <span className="eyebrow">{t.faq}</span>
            <h2>Before You Visit</h2>
          </div>

          <div className="faqGrid">
            {faqs.map((faq) => (
              <details className="faqItem" key={faq.q}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section finalCta">
          <div>
            <span className="eyebrow">{t.footerCta}</span>
            <h2>Message us before coming down.</h2>
            <p>
              Check today’s live seafood availability, reserve premium items, or
              ask what is best for your cooking plan.
            </p>
          </div>

          <div className="finalButtons">
            <a
              className="primaryButton"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              onClick={() => track("whatsapp_footer_click")}
            >
              {t.whatsapp}
            </a>
            <a
              className="secondaryButton"
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noreferrer"
              onClick={() => track("telegram_footer_click")}
            >
              {t.telegram}
            </a>
            <a
              className="ghostButton"
              href={TIKTOK_LINK}
              target="_blank"
              rel="noreferrer"
              onClick={() => track("tiktok_footer_click")}
            >
              TikTok
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>Live Seafood Supply @ Crab Talk</strong>
          <p>{address}</p>
        </div>

        <div className="footerLinks">
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href={TELEGRAM_LINK} target="_blank" rel="noreferrer">
            Telegram
          </a>
          <a href={TIKTOK_LINK} target="_blank" rel="noreferrer">
            TikTok
          </a>
          <a href={MAPS_LINK} target="_blank" rel="noreferrer">
            Google Maps
          </a>
        </div>
      </footer>
    </div>
  );
}

const styles = `
:root {
  --bg: #041a20;
  --bg2: #082b34;
  --panel: rgba(255, 255, 255, 0.075);
  --panel2: rgba(255, 255, 255, 0.115);
  --line: rgba(255, 255, 255, 0.16);
  --text: #f6fcff;
  --muted: #b6ccd3;
  --soft: #7aa9b5;
  --cyan: #66e3ff;
  --cyan2: #0fb7e7;
  --gold: #f6c76a;
  --orange: #ff9b4a;
  --shadow: 0 24px 80px rgba(0, 0, 0, 0.34);
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
  background: var(--bg);
}

body,
button,
select,
input,
textarea {
  font-family: Inter, Arial, Helvetica, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

.site {
  min-height: 100vh;
  color: var(--text);
  background:
    radial-gradient(circle at top left, rgba(42, 210, 255, 0.18), transparent 32rem),
    radial-gradient(circle at 80% 12%, rgba(246, 199, 106, 0.1), transparent 24rem),
    linear-gradient(180deg, #031318 0%, #06232b 45%, #04161b 100%);
}

.header {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 16px clamp(18px, 4vw, 56px);
  background: rgba(3, 19, 24, 0.82);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--line);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-width: fit-content;
}

.brandMark {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(102, 227, 255, 0.22), rgba(246, 199, 106, 0.18));
  border: 1px solid var(--line);
}

.brand strong {
  display: block;
  font-size: 18px;
  letter-spacing: -0.03em;
}

.brand small {
  display: block;
  color: var(--muted);
  font-size: 12px;
  margin-top: 2px;
}

.desktopNav {
  display: flex;
  align-items: center;
  gap: 22px;
  color: var(--muted);
  font-size: 14px;
}

.desktopNav a:hover {
  color: var(--text);
}

.headerActions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.language {
  height: 40px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.08);
  color: var(--text);
  padding: 0 12px;
  outline: none;
}

.language option {
  color: #07191f;
}

.miniButton,
.primaryButton,
.secondaryButton,
.ghostButton,
.fullButton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  font-weight: 800;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  white-space: nowrap;
}

.miniButton {
  min-height: 40px;
  padding: 0 16px;
  background: linear-gradient(135deg, var(--cyan2), #0890bd);
  color: white;
  font-size: 14px;
}

.primaryButton {
  min-height: 52px;
  padding: 0 22px;
  background: linear-gradient(135deg, var(--cyan), var(--cyan2));
  color: #031318;
  box-shadow: 0 16px 44px rgba(15, 183, 231, 0.28);
}

.secondaryButton {
  min-height: 52px;
  padding: 0 22px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid var(--line);
  color: var(--text);
}

.ghostButton {
  min-height: 52px;
  padding: 0 22px;
  background: transparent;
  border: 1px solid rgba(102, 227, 255, 0.35);
  color: var(--cyan);
}

.fullButton {
  width: 100%;
  min-height: 52px;
  background: linear-gradient(135deg, var(--cyan), var(--cyan2));
  color: #031318;
  margin-top: 20px;
}

.primaryButton:hover,
.secondaryButton:hover,
.ghostButton:hover,
.miniButton:hover,
.fullButton:hover {
  transform: translateY(-2px);
}

.section {
  width: min(1180px, calc(100% - 36px));
  margin: 0 auto;
  padding: 76px 0;
}

.compactSection {
  padding: 24px 0 34px;
}

.hero {
  min-height: calc(100vh - 78px);
  display: grid;
  grid-template-columns: 1.02fr 0.98fr;
  align-items: center;
  gap: 46px;
  padding-top: 56px;
  padding-bottom: 46px;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--gold);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-weight: 900;
  font-size: 12px;
  margin-bottom: 14px;
}

.hero h1,
.sectionHeader h2,
.panel h2,
.finalCta h2 {
  margin: 0;
  letter-spacing: -0.055em;
  line-height: 0.95;
}

.hero h1 {
  font-size: clamp(48px, 7vw, 88px);
  max-width: 780px;
}

.heroLead {
  max-width: 660px;
  color: var(--muted);
  font-size: clamp(17px, 2vw, 22px);
  line-height: 1.65;
  margin: 24px 0 0;
}

.heroBadges {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 26px;
}

.heroBadges span,
.productTag {
  display: inline-flex;
  align-items: center;
  min-height: 32px;
  padding: 0 12px;
  border-radius: 999px;
  border: 1px solid rgba(102, 227, 255, 0.24);
  background: rgba(102, 227, 255, 0.09);
  color: #d8f7ff;
  font-size: 13px;
  font-weight: 800;
}

.heroButtons {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;
}

.addressStrip {
  max-width: 620px;
  margin-top: 24px;
  padding: 14px 16px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.07);
  color: var(--muted);
  line-height: 1.5;
}

.addressStrip strong {
  color: var(--text);
}

.heroMedia {
  min-width: 0;
}

.heroImageCard {
  position: relative;
  overflow: hidden;
  border-radius: 34px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));
  box-shadow: var(--shadow);
  aspect-ratio: 4 / 3;
}

.heroImageCard img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: saturate(1.06) contrast(1.04);
}

.heroImageOverlay {
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: 18px;
  padding: 16px;
  border-radius: 22px;
  background: rgba(3, 19, 24, 0.76);
  backdrop-filter: blur(14px);
  border: 1px solid var(--line);
}

.heroImageOverlay span {
  color: var(--muted);
  font-size: 13px;
}

.heroImageOverlay strong {
  display: block;
  margin-top: 4px;
  font-size: 20px;
}

.slideDots {
  display: flex;
  justify-content: center;
  gap: 9px;
  margin-top: 16px;
}

.dot {
  width: 9px;
  height: 9px;
  border-radius: 999px;
  border: none;
  background: rgba(255, 255, 255, 0.32);
  cursor: pointer;
}

.dot.active {
  width: 28px;
  background: var(--cyan);
}

.statsGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}

.statsGrid div {
  padding: 20px;
  border-radius: 22px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.07);
}

.statsGrid strong {
  display: block;
  font-size: 18px;
}

.statsGrid span {
  display: block;
  color: var(--muted);
  margin-top: 6px;
  font-size: 14px;
}

.sectionHeader {
  max-width: 760px;
  margin-bottom: 28px;
}

.sectionHeader.center {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.sectionHeader h2,
.panel h2,
.finalCta h2 {
  font-size: clamp(34px, 5vw, 58px);
}

.sectionHeader p,
.panel p,
.finalCta p {
  color: var(--muted);
  line-height: 1.7;
  font-size: 17px;
}

.featureGrid,
.selectionGrid,
.stepsGrid,
.reviewGrid,
.reasonGrid,
.cookingGrid,
.faqGrid {
  display: grid;
  gap: 18px;
}

.featureGrid {
  grid-template-columns: repeat(3, 1fr);
}

.featureCard,
.productCard,
.stepCard,
.reviewCard,
.panel,
.cookingCard,
.faqItem {
  border: 1px solid var(--line);
  background: linear-gradient(180deg, var(--panel2), rgba(255, 255, 255, 0.045));
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.18);
}

.featureCard {
  overflow: hidden;
  border-radius: 28px;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.featureCard:hover {
  transform: translateY(-4px);
  border-color: rgba(102, 227, 255, 0.45);
}

.featureImage {
  height: 210px;
  background: rgba(255, 255, 255, 0.05);
}

.featureImage img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.featureBody {
  padding: 22px;
}

.featureBody h3,
.productContent h3,
.stepCard h3,
.reviewCard h3,
.reasonItem h3,
.cookingCard h3 {
  margin: 0;
  font-size: 22px;
  letter-spacing: -0.03em;
}

.featureBody p,
.productContent p,
.stepCard p,
.reviewCard p,
.reasonItem p,
.cookingCard p,
.cookingCard li,
.faqItem p {
  color: var(--muted);
  line-height: 1.65;
}

.featureBody span {
  display: inline-block;
  margin-top: 10px;
  color: var(--cyan);
  font-weight: 900;
}

.selectionGrid {
  grid-template-columns: repeat(3, 1fr);
}

.productCard {
  overflow: hidden;
  border-radius: 28px;
}

.productImage {
  height: 210px;
  padding: 10px;
  background:
    radial-gradient(circle at center, rgba(102, 227, 255, 0.09), transparent 62%),
    rgba(255, 255, 255, 0.035);
  border-bottom: 1px solid var(--line);
}

.productImage img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  border-radius: 18px;
}

.productContent {
  padding: 22px;
}

.productContent h3 {
  margin-top: 12px;
}

.splitSection {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 18px;
  align-items: stretch;
}

.panel {
  border-radius: 30px;
  padding: clamp(24px, 4vw, 36px);
}

.reasonGrid {
  grid-template-columns: repeat(2, 1fr);
  margin-top: 26px;
}

.reasonItem {
  padding: 18px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.reasonItem h3 {
  font-size: 18px;
}

.hoursList {
  margin-top: 24px;
  display: grid;
  gap: 10px;
}

.hoursRow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 13px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.hoursRow span {
  color: var(--muted);
}

.hoursRow strong {
  text-align: right;
}

.cookingSection {
  padding-top: 40px;
}

.cookingGrid {
  grid-template-columns: 1.1fr 0.9fr;
}

.cookingCard {
  border-radius: 30px;
  padding: 28px;
}

.mainCooking {
  background:
    radial-gradient(circle at top right, rgba(246, 199, 106, 0.13), transparent 24rem),
    linear-gradient(180deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.05));
}

.softCooking {
  background:
    radial-gradient(circle at top right, rgba(102, 227, 255, 0.12), transparent 22rem),
    linear-gradient(180deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.04));
}

.cookingCard ul {
  padding-left: 18px;
  margin: 22px 0 0;
}

.stepsGrid {
  grid-template-columns: repeat(3, 1fr);
}

.stepCard,
.reviewCard {
  border-radius: 26px;
  padding: 24px;
}

.reviewGrid {
  grid-template-columns: repeat(3, 1fr);
}

.stars {
  color: var(--gold);
  letter-spacing: 0.08em;
  margin-bottom: 12px;
}

.reviewCta {
  margin-top: 18px;
  padding: 22px;
  border: 1px solid var(--line);
  border-radius: 26px;
  background: rgba(255, 255, 255, 0.065);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.reviewCta p {
  margin: 0;
  color: var(--muted);
  line-height: 1.6;
}

.faqGrid {
  grid-template-columns: repeat(2, 1fr);
}

.faqItem {
  border-radius: 22px;
  padding: 0;
  overflow: hidden;
}

.faqItem summary {
  cursor: pointer;
  padding: 20px;
  font-weight: 900;
  list-style: none;
}

.faqItem summary::-webkit-details-marker {
  display: none;
}

.faqItem p {
  margin: 0;
  padding: 0 20px 20px;
}

.finalCta {
  display: flex;
  justify-content: space-between;
  gap: 28px;
  align-items: center;
  margin-bottom: 40px;
  padding: clamp(28px, 5vw, 46px);
  border-radius: 34px;
  border: 1px solid rgba(102, 227, 255, 0.22);
  background:
    radial-gradient(circle at top right, rgba(102, 227, 255, 0.16), transparent 26rem),
    linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.05));
  box-shadow: var(--shadow);
}

.finalCta div:first-child {
  max-width: 620px;
}

.finalButtons {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: flex-end;
}

.footer {
  width: min(1180px, calc(100% - 36px));
  margin: 0 auto;
  padding: 26px 0 42px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
}

.footer strong {
  color: var(--text);
}

.footer p {
  margin: 8px 0 0;
}

.footerLinks {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: flex-end;
}

.footerLinks a {
  color: var(--cyan);
  font-weight: 800;
}

@media (max-width: 980px) {
  .desktopNav {
    display: none;
  }

  .hero {
    grid-template-columns: 1fr;
    min-height: auto;
    padding-top: 44px;
  }

  .heroMedia {
    max-width: 720px;
    width: 100%;
  }

  .statsGrid,
  .featureGrid,
  .selectionGrid,
  .stepsGrid,
  .reviewGrid {
    grid-template-columns: repeat(2, 1fr);
  }

  .splitSection,
  .cookingGrid {
    grid-template-columns: 1fr;
  }

  .finalCta {
    align-items: flex-start;
    flex-direction: column;
  }

  .finalButtons {
    justify-content: flex-start;
  }
}

@media (max-width: 680px) {
  .header {
    padding: 12px 14px;
  }

  .brand strong {
    font-size: 15px;
  }

  .brand small {
    display: none;
  }

  .brandMark {
    width: 38px;
    height: 38px;
  }

  .miniButton {
    display: none;
  }

  .language {
    height: 38px;
    max-width: 84px;
  }

  .section {
    width: min(100% - 28px, 1180px);
    padding: 54px 0;
  }

  .compactSection {
    padding: 12px 0 26px;
  }

  .hero {
    gap: 28px;
    padding-top: 34px;
  }

  .hero h1 {
    font-size: 46px;
  }

  .heroLead {
    font-size: 16px;
  }

  .heroButtons {
    flex-direction: column;
  }

  .primaryButton,
  .secondaryButton,
  .ghostButton {
    width: 100%;
  }

  .heroImageCard {
    border-radius: 24px;
  }

  .statsGrid,
  .featureGrid,
  .selectionGrid,
  .stepsGrid,
  .reviewGrid,
  .faqGrid,
  .reasonGrid {
    grid-template-columns: 1fr;
  }

  .featureImage {
    height: 190px;
  }

  .productImage {
    height: 185px;
  }

  .productContent,
  .featureBody,
  .stepCard,
  .reviewCard,
  .cookingCard,
  .panel {
    padding: 20px;
  }

  .sectionHeader h2,
  .panel h2,
  .finalCta h2 {
    font-size: 34px;
    line-height: 1;
  }

  .reviewCta {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer {
    flex-direction: column;
  }

  .footerLinks {
    justify-content: flex-start;
  }
}

@media (max-width: 420px) {
  .hero h1 {
    font-size: 40px;
  }

  .productImage {
    height: 170px;
  }

  .featureImage {
    height: 170px;
  }

  .heroBadges span {
    width: 100%;
    justify-content: center;
  }
}
`;

export default App;
