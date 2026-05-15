import React, { useEffect, useMemo, useState } from "react";

const img = (file) => `/images/${file}`;

const LINKS = {
  whatsapp: "https://wa.me/6598398671",
  telegram: "https://t.me/CrabTalkSG",
  maps: "https://maps.app.goo.gl/1GKdK2y6jpbqfg8N8?g_st=ac",
  tiktok: "https://www.tiktok.com/@liveseafood_crabtalksg",
  eightDays:
    "https://www.8days.sg/eatanddrink/hawkerfood/commonwealth-crab-talk-fai-kee-live-seafood-hawker-collab-856541",
  botakJazz: "https://www.tiktok.com/@botakjazz/video/7602204733155364116",
  aiFeature: "https://www.facebook.com/share/v/1Djwg4h7UP/",
};

const track = (eventName, params = {}) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, {
      business_name: "Crab Talk SG",
      ...params,
    });
  }
};

const HOURS = [
  ["Monday", "12 pm – 5 pm"],
  ["Tuesday", "8 am – 7 pm"],
  ["Wednesday", "8 am – 7 pm"],
  ["Thursday", "8 am – 7 pm"],
  ["Friday", "8 am – 8 pm"],
  ["Saturday", "8 am – 8 pm"],
  ["Sunday", "8 am – 5 pm"],
];

const COPY = {
  en: {
    lang: "English",
    nav: {
      selection: "Fresh Selection",
      home: "Home Cooking",
      features: "Features",
      visit: "Visit Us",
      faq: "FAQ",
    },
    heroBadge: "Live Seafood Supply @ Crab Talk",
    heroTitle: "Premium live seafood, selected fresh for your table.",
    heroText:
      "Choose live crabs, lobsters, oysters, clams and premium fish for home cooking, family meals, gifting, or special gatherings.",
    whatsapp: "WhatsApp to Reserve",
    telegram: "Join Telegram Updates",
    maps: "Open Google Maps",
    address: "31 Commonwealth Crescent #01-41/42/43 S(149644)",
    openToday: "Fresh arrivals daily",
    sectionSelection: "Fresh Daily Selection",
    sectionSelectionText:
      "Our display changes with daily arrivals. WhatsApp before visiting if you are looking for a specific size, weight, or item.",
    homeTitle: "Best for Home Cooking",
    homeText:
      "Select live seafood at the stall and prepare it your way at home. Simple steaming, chilli crab, ginger scallion, black pepper, soup or hotpot — the choice is yours.",
    cookingTitle: "Nearby Cooking Option",
    cookingText:
      "Selected seafood can be arranged for nearby cooking subject to stall availability and waiting time. Please confirm before ordering during peak periods.",
    featureTitle: "Featured & Seen Online",
    featureText:
      "Crab Talk has been featured by food media and creators, including our live seafood and cooked seafood collaboration stories.",
    reviewTitle: "Customer Feedback Highlights",
    reviewText:
      "Common feedback from customers focuses on live seafood freshness, clear recommendations, and helpful service.",
    hoursTitle: "Operating Hours",
    faqTitle: "FAQ",
  },
  zh: {
    lang: "中文",
    nav: {
      selection: "海鲜选择",
      home: "回家烹煮",
      features: "媒体介绍",
      visit: "到店",
      faq: "常见问题",
    },
    heroBadge: "Crab Talk 活海鲜供应",
    heroTitle: "新鲜活海鲜，适合家庭聚餐与节日享用。",
    heroText:
      "可选择活螃蟹、龙虾、生蚝、蛤蜊和高级活鱼，适合清蒸、辣椒蟹、姜葱、黑胡椒或火锅。",
    whatsapp: "WhatsApp 预订",
    telegram: "加入 Telegram",
    maps: "打开 Google Maps",
    address: "31 Commonwealth Crescent #01-41/42/43 S(149644)",
    openToday: "每日新鲜到货",
    sectionSelection: "每日新鲜海鲜",
    sectionSelectionText:
      "海鲜供应会根据每日到货而变化。如需指定重量或品种，建议先 WhatsApp 询问。",
    homeTitle: "适合回家烹煮",
    homeText:
      "在摊位挑选活海鲜，带回家按自己喜欢的方式烹煮。清蒸、辣椒、姜葱、黑胡椒、汤或火锅都适合。",
    cookingTitle: "附近烹煮选择",
    cookingText:
      "部分海鲜可安排附近烹煮，需视档口当日人手和等候时间而定。繁忙时段请先确认。",
    featureTitle: "媒体与创作者介绍",
    featureText: "Crab Talk 曾获得美食媒体与创作者介绍，包括活海鲜与熟食合作内容。",
    reviewTitle: "顾客反馈重点",
    reviewText: "顾客常提到海鲜新鲜、推荐清楚、服务亲切。",
    hoursTitle: "营业时间",
    faqTitle: "常见问题",
  },
  ja: {
    lang: "日本語",
    nav: {
      selection: "本日の海鮮",
      home: "自宅調理",
      features: "掲載情報",
      visit: "アクセス",
      faq: "FAQ",
    },
    heroBadge: "Crab Talk 活シーフード",
    heroTitle: "新鮮な活シーフードを、ご家庭の食卓へ。",
    heroText:
      "活ガニ、ロブスター、牡蠣、マニラクラム、高級魚などを選べます。自宅調理、家族の食事、贈り物にもおすすめです。",
    whatsapp: "WhatsAppで予約",
    telegram: "Telegramを見る",
    maps: "Google Mapsを開く",
    address: "31 Commonwealth Crescent #01-41/42/43 S(149644)",
    openToday: "毎日新鮮入荷",
    sectionSelection: "新鮮な活海鮮",
    sectionSelectionText:
      "入荷状況は日によって変わります。サイズや商品指定がある場合は、来店前にWhatsAppで確認してください。",
    homeTitle: "自宅調理におすすめ",
    homeText:
      "店頭で活シーフードを選び、自宅でお好みの調理ができます。蒸し、チリクラブ、ジンジャースカリオン、ブラックペッパー、鍋などに最適です。",
    cookingTitle: "近隣調理オプション",
    cookingText:
      "一部の商品は近隣で調理手配が可能です。当日の混雑状況や待ち時間により異なるため、事前確認をおすすめします。",
    featureTitle: "メディア・SNS掲載",
    featureText:
      "Crab Talkは、活シーフードや調理コラボレーションでメディアやクリエイターに紹介されています。",
    reviewTitle: "お客様の声",
    reviewText: "鮮度、分かりやすい説明、親切なサービスについて好評をいただいています。",
    hoursTitle: "営業時間",
    faqTitle: "FAQ",
  },
};

const heroSlides = [
  {
    image: img("feature-8days-original-thumbnail.jpg"),
    title: "Crab Talk x Live Seafood",
  },
  {
    image: img("product-live-crab-premium.jpg"),
    title: "Premium live crabs",
  },
  {
    image: img("product-yellow-roe-crab-06.jpg"),
    title: "Sri Lanka roe crabs",
  },
  {
    image: img("stall-crab-talk-front-01.jpg"),
    title: "Visit Crab Talk",
  },
];

const products = [
  {
    title: {
      en: "Live Mud Crabs",
      zh: "活泥蟹",
      ja: "活マッドクラブ",
    },
    text: {
      en: "Meaty, active crabs selected for steaming, chilli crab, black pepper crab, or ginger scallion crab.",
      zh: "肉质饱满，适合清蒸、辣椒蟹、黑胡椒蟹或姜葱蟹。",
      ja: "身入りの良い活ガニ。蒸し、チリクラブ、ブラックペッパー、ジンジャースカリオンに。",
    },
    image: img("product-live-crab-premium.jpg"),
    tag: "Live",
  },
  {
    title: {
      en: "Sri Lanka Roe Crabs",
      zh: "斯里兰卡膏蟹",
      ja: "スリランカ産ロークラブ",
    },
    text: {
      en: "Popular for rich roe, firm meat, and premium home dining occasions.",
      zh: "蟹膏浓郁、肉质结实，适合高级家庭聚餐。",
      ja: "濃厚なロウとしっかりした身質で、特別な食卓におすすめ。",
    },
    image: img("product-yellow-roe-crab-06.jpg"),
    tag: "Premium",
  },
  {
    title: {
      en: "Live Lobsters",
      zh: "活龙虾",
      ja: "活ロブスター",
    },
    text: {
      en: "Boston lobster and green lobster options depending on daily arrival.",
      zh: "波士顿龙虾和青龙虾，视每日到货情况而定。",
      ja: "ボストンロブスター、グリーンロブスターなど日替わり入荷。",
    },
    image: img("product-boston-lobster-display.jpg"),
    tag: "Daily arrival",
  },
  {
    title: {
      en: "Fresh Oysters",
      zh: "新鲜生蚝",
      ja: "新鮮な牡蠣",
    },
    text: {
      en: "Cold, clean and suitable for seafood platters or weekend gatherings.",
      zh: "适合海鲜拼盘、聚会和周末家庭享用。",
      ja: "シーフードプラッターや週末の集まりにおすすめ。",
    },
    image: img("product-oysters-premium-02.jpg"),
    tag: "Fresh",
  },
  {
    title: {
      en: "Manila Clams",
      zh: "马尼拉蛤蜊",
      ja: "マニラクラム",
    },
    text: {
      en: "Great for steaming, chilli lala, white wine style, soup or hotpot.",
      zh: "适合清蒸、辣椒啦啦、白酒煮、汤或火锅。",
      ja: "蒸し、チリララ、白ワイン蒸し、スープ、鍋におすすめ。",
    },
    image: img("product-manila-clams-01.jpg"),
    tag: "Shellfish",
  },
  {
    title: {
      en: "Soon Hock & Premium Fish",
      zh: "笋壳鱼与高级活鱼",
      ja: "Soon Hock・高級活魚",
    },
    text: {
      en: "Live fish options for steaming, Hong Kong style, soup, or home cooking.",
      zh: "适合清蒸、港式蒸、煮汤或家庭料理。",
      ja: "蒸し、香港スタイル、スープ、自宅調理に。",
    },
    image: img("product-live-soon-hock-01.jpg"),
    tag: "Live fish",
  },
];

const highlights = [
  {
    title: "Home Cooking First",
    text: "Our main focus is helping customers choose suitable live seafood for cooking at home.",
    image: img("product-live-crab-tank-01.jpg"),
  },
  {
    title: "Clear Recommendations",
    text: "Ask for suggestions based on weight, number of pax, cooking style, and budget.",
    image: img("about-jeremy-live-crab.jpg"),
  },
  {
    title: "Fresh Market Experience",
    text: "Choose from live tanks and daily arrivals at Commonwealth Crescent.",
    image: img("stall-crab-talk-live-tanks.jpg"),
  },
];

const features = [
  {
    title: "Featured on 8 Days",
    text: "Crab Talk’s live seafood and nearby cooking concept was featured by 8 Days.",
    image: img("feature-8days-original-thumbnail.jpg"),
    link: LINKS.eightDays,
    cta: "Read feature",
  },
  {
    title: "Botak Jazz TikTok Feature",
    text: "Creator feature on the lobster yee mee and Crab Talk experience.",
    image: img("feature-botak-jazz-tiktok.jpg"),
    link: LINKS.botakJazz,
    cta: "Watch TikTok",
  },
  {
    title: "Crab Seller Using AI",
    text: "A story about how Crab Talk uses AI tools for daily work and content.",
    image: img("AI-feature.jpeg"),
    link: LINKS.aiFeature,
    cta: "View story",
  },
];

const dishes = [
  {
    title: "Lobster Yee Mee",
    text: "A popular cooked seafood option when nearby cooking is available.",
    image: img("dish-lobster-yee-mee-fai-kee-hero.jpg"),
  },
  {
    title: "Chilli Crab",
    text: "A classic Singapore-style option for crab lovers.",
    image: img("dish-chilli-crab-premium.jpg"),
  },
  {
    title: "Ginger Scallion Crab",
    text: "Fragrant, savoury and suitable for customers who prefer a lighter style.",
    image: img("dish-ginger-scallion-crab.jpg"),
  },
];

const reviewHighlights = [
  {
    title: "Helpful service",
    text: "Customers often mention patient explanations and useful seafood recommendations.",
  },
  {
    title: "Fresh live seafood",
    text: "Many visitors come for live crabs, lobsters and seafood selected from the tanks.",
  },
  {
    title: "Good for gatherings",
    text: "Popular for family meals, weekend seafood dinners, and group orders.",
  },
];

const faqs = [
  {
    q: "Should I reserve before coming down?",
    a: "Yes, reservation is recommended for popular items, larger sizes, roe crabs, lobsters and weekend orders.",
  },
  {
    q: "Are the crabs live?",
    a: "Live items are sold live unless clearly stated otherwise. Availability depends on daily arrival and stock condition.",
  },
  {
    q: "Can I choose my own seafood?",
    a: "Yes. You can choose from available live seafood at the stall, and the team can suggest suitable sizes based on your needs.",
  },
  {
    q: "Do you provide cooking?",
    a: "Crab Talk focuses mainly on live seafood supply. Nearby cooking may be possible depending on availability, queue and timing. Please check before ordering.",
  },
  {
    q: "What is the best way to order?",
    a: "WhatsApp is best for checking today’s arrivals, reserving seafood and confirming availability before visiting.",
  },
  {
    q: "Where are you located?",
    a: "31 Commonwealth Crescent #01-41/42/43 S(149644). Use the Google Maps button for directions.",
  },
];

function App() {
  const [lang, setLang] = useState("en");
  const [slide, setSlide] = useState(0);

  const t = COPY[lang];

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((current) => (current + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const currentSlide = heroSlides[slide];

  const year = useMemo(() => new Date().getFullYear(), []);

  const label = (value) => {
    if (typeof value === "string") return value;
    return value[lang] || value.en;
  };

  return (
    <main className="site">
      <style>{styles}</style>

      <header className="header">
        <a
          className="brand"
          href="#top"
          onClick={() => track("click_logo")}
          aria-label="Crab Talk SG home"
        >
          <span className="brandMark">🦀</span>
          <span>
            <strong>Crab Talk SG</strong>
            <small>Live Seafood Supply</small>
          </span>
        </a>

        <nav className="nav" aria-label="Primary navigation">
          <a href="#selection">{t.nav.selection}</a>
          <a href="#home-cooking">{t.nav.home}</a>
          <a href="#features">{t.nav.features}</a>
          <a href="#visit">{t.nav.visit}</a>
          <a href="#faq">{t.nav.faq}</a>
        </nav>

        <div className="headerActions">
          <select
            className="language"
            value={lang}
            onChange={(event) => {
              setLang(event.target.value);
              track("change_language", { language: event.target.value });
            }}
            aria-label="Select language"
          >
            <option value="en">English</option>
            <option value="zh">中文</option>
            <option value="ja">日本語</option>
          </select>

          <a
            className="smallCta"
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("click_whatsapp_header")}
          >
            WhatsApp
          </a>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="heroCopy">
          <p className="eyebrow">{t.heroBadge}</p>
          <h1>{t.heroTitle}</h1>
          <p className="lead">{t.heroText}</p>

          <div className="heroMeta">
            <span>{t.openToday}</span>
            <span>{t.address}</span>
          </div>

          <div className="ctaRow">
            <a
              className="primaryBtn"
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("click_whatsapp_hero")}
            >
              {t.whatsapp}
            </a>

            <a
              className="secondaryBtn"
              href={LINKS.maps}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("click_google_maps_hero")}
            >
              {t.maps}
            </a>
          </div>

          <div className="trustRow">
            <span>Live seafood</span>
            <span>Daily arrivals</span>
            <span>Home cooking friendly</span>
          </div>
        </div>

        <div className="heroVisual" aria-label={currentSlide.title}>
          <img src={currentSlide.image} alt={currentSlide.title} />
          <div className="heroOverlay">
            <span>Fresh selection</span>
            <strong>{currentSlide.title}</strong>
          </div>

          <div className="dots" aria-hidden="true">
            {heroSlides.map((item, index) => (
              <button
                key={item.title}
                className={index === slide ? "active" : ""}
                onClick={() => {
                  setSlide(index);
                  track("click_hero_slide", { slide_title: item.title });
                }}
                aria-label={`Show ${item.title}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section introGrid">
        {highlights.map((item) => (
          <article className="introCard" key={item.title}>
            <img src={item.image} alt={item.title} loading="lazy" />
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section id="selection" className="section">
        <div className="sectionHead">
          <p className="eyebrow">Daily Arrivals</p>
          <h2>{t.sectionSelection}</h2>
          <p>{t.sectionSelectionText}</p>
        </div>

        <div className="productGrid">
          {products.map((product) => (
            <article className="productCard" key={product.title.en}>
              <div className="photoFrame">
                <img
                  src={product.image}
                  alt={label(product.title)}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div className="cardBody">
                <span className="tag">{product.tag}</span>
                <h3>{label(product.title)}</h3>
                <p>{label(product.text)}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="home-cooking" className="section split">
        <div className="panel premiumPanel">
          <p className="eyebrow">Main Focus</p>
          <h2>{t.homeTitle}</h2>
          <p>{t.homeText}</p>

          <ul className="cleanList">
            <li>Choose live seafood from the stall</li>
            <li>Ask for size and portion recommendations</li>
            <li>Reserve popular items before visiting</li>
            <li>Ideal for family meals and weekend gatherings</li>
          </ul>

          <a
            className="primaryBtn"
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("click_whatsapp_home_cooking")}
          >
            Check Today’s Arrival
          </a>
        </div>

        <div className="panel softPanel">
          <p className="eyebrow">Optional</p>
          <h2>{t.cookingTitle}</h2>
          <p>{t.cookingText}</p>

          <div className="miniDishGrid">
            {dishes.map((dish) => (
              <article className="dishCard" key={dish.title}>
                <img src={dish.image} alt={dish.title} loading="lazy" />
                <div>
                  <h3>{dish.title}</h3>
                  <p>{dish.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="sectionHead">
          <p className="eyebrow">Media</p>
          <h2>{t.featureTitle}</h2>
          <p>{t.featureText}</p>
        </div>

        <div className="featureGrid">
          {features.map((feature) => (
            <a
              className="featureCard"
              href={feature.link}
              key={feature.title}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                track("click_feature", {
                  feature_title: feature.title,
                })
              }
            >
              <div className="featureImage">
                <img src={feature.image} alt={feature.title} loading="lazy" />
              </div>

              <div className="featureContent">
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
                <span>{feature.cta} →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section reviewSection">
        <div className="sectionHead">
          <p className="eyebrow">Reviews</p>
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
      </section>

      <section id="visit" className="section visitSection">
        <div className="visitCard">
          <div>
            <p className="eyebrow">Location</p>
            <h2>Visit Crab Talk SG</h2>
            <p className="address">{t.address}</p>

            <div className="ctaRow">
              <a
                className="primaryBtn"
                href={LINKS.maps}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("click_google_maps_visit")}
              >
                {t.maps}
              </a>

              <a
                className="secondaryBtn"
                href={LINKS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("click_telegram_visit")}
              >
                {t.telegram}
              </a>

              <a
                className="secondaryBtn"
                href={LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("click_tiktok_visit")}
              >
                TikTok
              </a>
            </div>
          </div>

          <div className="hoursBox">
            <h3>{t.hoursTitle}</h3>

            <div className="hoursList">
              {HOURS.map(([day, time]) => (
                <div className="hoursRow" key={day}>
                  <span>{day}</span>
                  <strong>{time}</strong>
                </div>
              ))}
            </div>

            <p className="smallNote">
              Opening hours may change during public holidays or when live stock sells out.
              WhatsApp before visiting for specific seafood availability.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="section faqSection">
        <div className="sectionHead">
          <p className="eyebrow">Useful Info</p>
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

      <section className="finalCta">
        <p className="eyebrow">Ready to order?</p>
        <h2>Check today’s live seafood before coming down.</h2>
        <p>
          For the best experience, reserve early and tell us your preferred seafood,
          number of pax and cooking plan.
        </p>

        <div className="ctaRow center">
          <a
            className="primaryBtn"
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("click_whatsapp_final")}
          >
            WhatsApp Crab Talk
          </a>

          <a
            className="secondaryBtn"
            href={LINKS.telegram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("click_telegram_final")}
          >
            Telegram Updates
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>© {year} Crab Talk SG. Live Seafood Supply @ Crab Talk.</p>
        <p>{t.address}</p>
      </footer>
    </main>
  );
}

const styles = `
:root {
  --bg: #031b20;
  --bg2: #062a31;
  --panel: rgba(255, 255, 255, 0.075);
  --panel2: rgba(255, 255, 255, 0.11);
  --line: rgba(255, 255, 255, 0.16);
  --text: #f7fcff;
  --muted: #b8d2d8;
  --muted2: #8eb0b9;
  --gold: #f4c15d;
  --aqua: #65e4ff;
  --blue: #00b7ff;
  --shadow: 0 24px 80px rgba(0, 0, 0, 0.38);
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
  background:
    radial-gradient(circle at top left, rgba(0, 183, 255, 0.16), transparent 34rem),
    radial-gradient(circle at top right, rgba(244, 193, 93, 0.14), transparent 32rem),
    linear-gradient(180deg, #03151a 0%, #06242b 45%, #021114 100%);
  color: var(--text);
  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Arial, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.site {
  min-height: 100vh;
  overflow-x: hidden;
}

.header {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  position: sticky;
  top: 12px;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 12px 14px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(2, 24, 29, 0.82);
  backdrop-filter: blur(18px);
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.28);
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: max-content;
}

.brandMark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(0, 183, 255, 0.28), rgba(244, 193, 93, 0.26));
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.brand strong,
.brand small {
  display: block;
  line-height: 1.05;
}

.brand strong {
  font-size: 1rem;
  letter-spacing: -0.02em;
}

.brand small {
  margin-top: 3px;
  color: var(--muted2);
  font-size: 0.74rem;
}

.nav {
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.nav a {
  padding: 10px 12px;
  border-radius: 999px;
  color: var(--muted);
  font-size: 0.9rem;
  transition: 0.2s ease;
}

.nav a:hover {
  color: var(--text);
  background: rgba(255, 255, 255, 0.08);
}

.headerActions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.language {
  border: 1px solid var(--line);
  color: var(--text);
  background: rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  padding: 10px 12px;
  outline: none;
}

.language option {
  color: #021114;
}

.smallCta {
  padding: 10px 14px;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--blue), #5ee7ff);
  color: #001318;
  font-weight: 800;
}

.hero {
  width: min(1180px, calc(100% - 32px));
  margin: 42px auto 0;
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(360px, 0.75fr);
  gap: 28px;
  align-items: center;
}

.heroCopy {
  padding: clamp(28px, 4vw, 54px);
  border-radius: calc(var(--radius) + 8px);
  border: 1px solid var(--line);
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.04)),
    radial-gradient(circle at top left, rgba(0, 183, 255, 0.18), transparent 26rem);
  box-shadow: var(--shadow);
}

.eyebrow {
  margin: 0 0 12px;
  color: var(--gold);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-weight: 900;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  margin-bottom: 18px;
  font-size: clamp(2.35rem, 6vw, 5.7rem);
  line-height: 0.95;
  letter-spacing: -0.075em;
}

h2 {
  margin-bottom: 14px;
  font-size: clamp(1.85rem, 4vw, 3.4rem);
  line-height: 1;
  letter-spacing: -0.055em;
}

h3 {
  margin-bottom: 9px;
  font-size: clamp(1.05rem, 2vw, 1.35rem);
  letter-spacing: -0.035em;
}

.lead {
  color: var(--muted);
  font-size: clamp(1.03rem, 1.6vw, 1.25rem);
  line-height: 1.75;
  max-width: 680px;
}

.heroMeta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 22px 0;
}

.heroMeta span,
.trustRow span {
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 8px 12px;
  border: 1px solid rgba(101, 228, 255, 0.22);
  border-radius: 999px;
  background: rgba(101, 228, 255, 0.08);
  color: #dffaff;
  font-size: 0.9rem;
}

.ctaRow {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  margin-top: 24px;
}

.ctaRow.center {
  justify-content: center;
}

.primaryBtn,
.secondaryBtn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 13px 18px;
  border-radius: 999px;
  font-weight: 900;
  transition: 0.2s ease;
}

.primaryBtn {
  background: linear-gradient(135deg, var(--gold), #ffe4a3);
  color: #1c1100;
  box-shadow: 0 16px 40px rgba(244, 193, 93, 0.22);
}

.secondaryBtn {
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.08);
  color: var(--text);
}

.primaryBtn:hover,
.secondaryBtn:hover,
.smallCta:hover {
  transform: translateY(-2px);
}

.trustRow {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 26px;
}

.heroVisual {
  position: relative;
  min-height: clamp(360px, 45vw, 560px);
  border-radius: calc(var(--radius) + 8px);
  overflow: hidden;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.06);
  box-shadow: var(--shadow);
}

.heroVisual img {
  width: 100%;
  height: 100%;
  min-height: inherit;
  object-fit: cover;
  object-position: center;
}

.heroOverlay {
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: 18px;
  padding: 18px;
  border-radius: 22px;
  background: linear-gradient(180deg, rgba(2, 18, 22, 0.52), rgba(2, 18, 22, 0.88));
  border: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(14px);
}

.heroOverlay span {
  display: block;
  color: var(--muted);
  font-size: 0.9rem;
}

.heroOverlay strong {
  display: block;
  margin-top: 4px;
  font-size: 1.28rem;
}

.dots {
  position: absolute;
  top: 18px;
  right: 18px;
  display: flex;
  gap: 8px;
}

.dots button {
  width: 9px;
  height: 9px;
  border: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.38);
  cursor: pointer;
}

.dots button.active {
  width: 28px;
  background: var(--gold);
}

.section {
  width: min(1180px, calc(100% - 32px));
  margin: 34px auto 0;
}

.sectionHead {
  max-width: 760px;
  margin-bottom: 20px;
}

.sectionHead p:not(.eyebrow) {
  color: var(--muted);
  line-height: 1.7;
  font-size: 1.04rem;
}

.introGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.introCard {
  display: grid;
  grid-template-columns: 104px 1fr;
  gap: 16px;
  align-items: center;
  padding: 14px;
  border-radius: 24px;
  background: var(--panel);
  border: 1px solid var(--line);
}

.introCard img {
  width: 104px;
  height: 94px;
  object-fit: cover;
  border-radius: 18px;
}

.introCard p {
  color: var(--muted);
  line-height: 1.55;
  margin-bottom: 0;
}

.productGrid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.productCard,
.featureCard,
.reviewCard,
.faqCard,
.panel,
.visitCard {
  border: 1px solid var(--line);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.105), rgba(255, 255, 255, 0.055));
  box-shadow: 0 18px 54px rgba(0, 0, 0, 0.22);
}

.productCard {
  overflow: hidden;
  border-radius: 28px;
}

.photoFrame {
  height: clamp(160px, 19vw, 218px);
  padding: 10px;
  background:
    radial-gradient(circle at center, rgba(101, 228, 255, 0.08), transparent 70%),
    rgba(0, 0, 0, 0.2);
}

.photoFrame img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  border-radius: 20px;
}

.cardBody {
  padding: 18px;
}

.tag {
  display: inline-flex;
  margin-bottom: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  color: #001318;
  background: linear-gradient(135deg, var(--aqua), #d9fbff);
  font-size: 0.75rem;
  font-weight: 900;
}

.cardBody p {
  color: var(--muted);
  line-height: 1.65;
  margin-bottom: 0;
}

.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.panel {
  border-radius: 32px;
  padding: clamp(22px, 3vw, 34px);
}

.premiumPanel {
  background:
    radial-gradient(circle at top left, rgba(244, 193, 93, 0.16), transparent 28rem),
    linear-gradient(180deg, rgba(255, 255, 255, 0.115), rgba(255, 255, 255, 0.055));
}

.softPanel {
  background:
    radial-gradient(circle at top right, rgba(0, 183, 255, 0.13), transparent 25rem),
    linear-gradient(180deg, rgba(255, 255, 255, 0.105), rgba(255, 255, 255, 0.05));
}

.panel p {
  color: var(--muted);
  line-height: 1.7;
}

.cleanList {
  display: grid;
  gap: 10px;
  padding: 0;
  margin: 20px 0 24px;
  list-style: none;
}

.cleanList li {
  position: relative;
  padding-left: 28px;
  color: #d9eef2;
}

.cleanList li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--gold);
  font-weight: 900;
}

.miniDishGrid {
  display: grid;
  gap: 12px;
  margin-top: 20px;
}

.dishCard {
  display: grid;
  grid-template-columns: 108px 1fr;
  gap: 14px;
  align-items: center;
  padding: 12px;
  border: 1px solid var(--line);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.055);
}

.dishCard img {
  width: 108px;
  height: 90px;
  object-fit: cover;
  border-radius: 15px;
}

.dishCard p {
  margin-bottom: 0;
  font-size: 0.92rem;
}

.featureGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.featureCard {
  overflow: hidden;
  border-radius: 28px;
  transition: 0.22s ease;
}

.featureCard:hover {
  transform: translateY(-4px);
}

.featureImage {
  height: 190px;
  background: rgba(0, 0, 0, 0.18);
}

.featureImage img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.featureContent {
  padding: 18px;
}

.featureContent p {
  color: var(--muted);
  line-height: 1.6;
}

.featureContent span {
  color: var(--gold);
  font-weight: 900;
}

.reviewGrid,
.faqGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.reviewCard,
.faqCard {
  border-radius: 24px;
  padding: 20px;
}

.stars {
  color: var(--gold);
  letter-spacing: 0.08em;
  margin-bottom: 12px;
}

.reviewCard p,
.faqCard p {
  color: var(--muted);
  line-height: 1.65;
  margin-bottom: 0;
}

.visitCard {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 24px;
  align-items: start;
  padding: clamp(22px, 3vw, 34px);
  border-radius: 32px;
  background:
    radial-gradient(circle at bottom left, rgba(0, 183, 255, 0.14), transparent 28rem),
    linear-gradient(180deg, rgba(255, 255, 255, 0.105), rgba(255, 255, 255, 0.055));
}

.address {
  color: #eafcff;
  font-size: 1.15rem;
  line-height: 1.55;
}

.hoursBox {
  padding: 18px;
  border-radius: 24px;
  background: rgba(0, 0, 0, 0.22);
  border: 1px solid var(--line);
}

.hoursList {
  display: grid;
  gap: 9px;
}

.hoursRow {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 9px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.hoursRow span {
  color: var(--muted);
}

.hoursRow strong {
  text-align: right;
}

.smallNote {
  margin: 14px 0 0;
  color: var(--muted2);
  font-size: 0.88rem;
  line-height: 1.55;
}

.finalCta {
  width: min(980px, calc(100% - 32px));
  margin: 44px auto 0;
  text-align: center;
  padding: clamp(28px, 5vw, 54px);
  border-radius: 36px;
  border: 1px solid var(--line);
  background:
    radial-gradient(circle at top, rgba(244, 193, 93, 0.16), transparent 25rem),
    linear-gradient(180deg, rgba(255, 255, 255, 0.115), rgba(255, 255, 255, 0.05));
  box-shadow: var(--shadow);
}

.finalCta p:not(.eyebrow) {
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  color: var(--muted);
  line-height: 1.7;
}

.footer {
  width: min(1180px, calc(100% - 32px));
  margin: 32px auto 0;
  padding: 26px 0 36px;
  color: var(--muted2);
  display: flex;
  justify-content: space-between;
  gap: 18px;
  border-top: 1px solid var(--line);
}

.footer p {
  margin-bottom: 0;
}

@media (max-width: 980px) {
  .header {
    align-items: flex-start;
    border-radius: 28px;
    flex-wrap: wrap;
  }

  .nav {
    order: 3;
    width: 100%;
    overflow-x: auto;
    justify-content: flex-start;
    padding-bottom: 2px;
  }

  .hero {
    grid-template-columns: 1fr;
  }

  .heroVisual {
    min-height: 420px;
  }

  .introGrid,
  .productGrid,
  .featureGrid,
  .reviewGrid,
  .faqGrid {
    grid-template-columns: repeat(2, 1fr);
  }

  .split,
  .visitCard {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .header {
    width: calc(100% - 20px);
    top: 8px;
    padding: 10px;
  }

  .brand small {
    display: none;
  }

  .headerActions {
    margin-left: auto;
  }

  .language {
    max-width: 104px;
  }

  .smallCta {
    padding: 10px 12px;
  }

  .hero,
  .section,
  .finalCta,
  .footer {
    width: calc(100% - 20px);
  }

  .hero {
    margin-top: 20px;
    gap: 14px;
  }

  .heroCopy {
    padding: 24px 18px;
    border-radius: 28px;
  }

  .heroVisual {
    min-height: 330px;
    border-radius: 28px;
  }

  .heroOverlay {
    left: 12px;
    right: 12px;
    bottom: 12px;
    padding: 14px;
  }

  .ctaRow {
    width: 100%;
  }

  .primaryBtn,
  .secondaryBtn {
    width: 100%;
  }

  .introGrid,
  .productGrid,
  .featureGrid,
  .reviewGrid,
  .faqGrid {
    grid-template-columns: 1fr;
  }

  .introCard {
    grid-template-columns: 86px 1fr;
  }

  .introCard img {
    width: 86px;
    height: 78px;
  }

  .photoFrame {
    height: 185px;
  }

  .featureImage {
    height: 175px;
  }

  .panel,
  .visitCard {
    border-radius: 26px;
    padding: 18px;
  }

  .dishCard {
    grid-template-columns: 92px 1fr;
  }

  .dishCard img {
    width: 92px;
    height: 78px;
  }

  .hoursRow {
    font-size: 0.95rem;
  }

  .footer {
    flex-direction: column;
  }
}
`;

export default App;
