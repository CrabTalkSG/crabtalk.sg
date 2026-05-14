import { useEffect, useState } from "react";

const img = (file) => `/images/${file}`;

const WHATSAPP_LINK = "https://wa.me/6598398671";
const MAPS_LINK = "https://maps.app.goo.gl/1GKdK2y6jpbqfg8N8?g_st=ac";
const TIKTOK_BOTAK =
  "https://www.tiktok.com/@botakjazz/video/7602204733155364116";
const FACEBOOK_AI = "https://www.facebook.com/share/v/1Djwg4h7UP/";
const EIGHT_DAYS =
  "https://www.8days.sg/eatanddrink/hawkerfood/commonwealth-crab-talk-fai-kee-live-seafood-hawker-collab-856541";

const heroSlides = [
  {
    image: img("hero-live-mud-crab-closeup.jpg"),
    label: "Live Seafood Supply",
    title: "Premium Live Seafood, Selected Daily",
    text: "Choose live crabs, lobsters, oysters, clams, and premium fish directly from Crab Talk.",
  },
  {
    image: img("product-yellow-roe-crab-01.jpg"),
    label: "Signature Selection",
    title: "Sri Lanka Roe Crabs & Live Mud Crabs",
    text: "Popular for steaming, chilli crab, black pepper crab, and premium home dining.",
  },
  {
    image: img("product-boston-lobster-display.jpg"),
    label: "Live Lobsters",
    title: "Boston Lobster, Green Lobster & Seasonal Arrivals",
    text: "Freshly selected seafood for family meals, gatherings, and special occasions.",
  },
  {
    image: img("stall-crab-talk-live-tanks.jpg"),
    label: "Visit Us",
    title: "Commonwealth Crescent Market",
    text: "31 Commonwealth Crescent #01-41/42/43 S(149644)",
  },
];

const products = [
  {
    name: "Live Mud Crabs",
    image: img("product-live-crab-premium.jpg"),
    text: "Meaty, active live crabs suitable for steaming, chilli crab, black pepper crab, or ginger scallion crab.",
  },
  {
    name: "Sri Lanka Roe Crabs",
    image: img("product-yellow-roe-crab-01.jpg"),
    text: "Rich roe, firm meat, and a strong choice for premium home dining or Teochew-style cold crab.",
  },
  {
    name: "Live Lobsters",
    image: img("product-boston-lobster-display.jpg"),
    text: "Boston lobster and green lobster options available depending on daily arrival.",
  },
  {
    name: "Fresh Oysters",
    image: img("product-oysters-premium-01.jpg"),
    text: "Cold, clean, and suitable for seafood platters, parties, and weekend gatherings.",
  },
  {
    name: "Manila Clams",
    image: img("product-manila-clams-01.jpg"),
    text: "Great for steaming, chilli lala, white wine style, soup, or home-cooked seafood dishes.",
  },
  {
    name: "Soon Hock & Premium Fish",
    image: img("product-live-soon-hock-01.jpg"),
    text: "Live fish options suitable for steaming, Hong Kong style, or simple home cooking.",
  },
];

const homeCooking = [
  {
    title: "Choose Live Seafood",
    text: "Pick from live crabs, lobsters, clams, oysters, and premium fish based on daily arrivals.",
  },
  {
    title: "Bring Home Fresh",
    text: "Best for customers who prefer steaming, boiling, grilling, or cooking seafood in their own style.",
  },
  {
    title: "Reserve Before Coming",
    text: "Popular items move fast. WhatsApp us to reserve before making your trip down.",
  },
];

const features = [
  {
    title: "Featured on 8 Days",
    image: img("8days-feature.jpg"),
    text: "Crab Talk was featured for the live seafood and hawker cooking collaboration concept.",
    link: EIGHT_DAYS,
    button: "Read Feature",
  },
  {
    title: "Botak Jazz TikTok Feature",
    image: img("botak-jazz-feature.jpg"),
    text: "Botak Jazz featured the lobster yee mee experience at Commonwealth Crescent.",
    link: TIKTOK_BOTAK,
    button: "Watch TikTok",
  },
  {
    title: "Crab Seller Using AI",
    image: img("AI-feature.jpeg"),
    text: "A story on how Crab Talk uses AI tools for daily seafood business operations.",
    link: FACEBOOK_AI,
    button: "Watch Feature",
  },
];

const faiKeeDishes = [
  {
    name: "Lobster Yee Mee",
    image: img("dish-lobster-yee-mee-fai-kee-hero.jpg"),
  },
  {
    name: "Chilli Crab",
    image: img("dish-chilli-crab-table-shot.jpg"),
  },
  {
    name: "Steamed Soon Hock",
    image: img("dish-steamed-soon-hock-fai-kee.jpg"),
  },
];

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const currentHero = heroSlides[activeSlide];

  return (
    <main>
      <style>{`
        :root {
          --deep: #021b1f;
          --deep-2: #062f37;
          --teal: #00b7c7;
          --cyan: #76ecff;
          --gold: #f4c96b;
          --white: #ffffff;
          --muted: #b8d0d5;
          --card: rgba(255, 255, 255, 0.075);
          --card-strong: rgba(255, 255, 255, 0.12);
          --border: rgba(255, 255, 255, 0.14);
          --shadow: 0 24px 70px rgba(0, 0, 0, 0.45);
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
            radial-gradient(circle at 18% 8%, rgba(0, 183, 199, 0.22), transparent 34%),
            radial-gradient(circle at 80% 15%, rgba(244, 201, 107, 0.14), transparent 28%),
            linear-gradient(180deg, #021b1f 0%, #03191d 42%, #071f25 100%);
          color: var(--white);
          font-family: Arial, Helvetica, sans-serif;
        }

        a {
          color: inherit;
        }

        img {
          display: block;
          max-width: 100%;
        }

        .page {
          min-height: 100vh;
          overflow: hidden;
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(18px);
          background: rgba(2, 27, 31, 0.86);
          border-bottom: 1px solid var(--border);
        }

        .topbar-inner {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 14px 0;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          min-width: fit-content;
        }

        .brand-mark {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 999px;
          background: linear-gradient(135deg, var(--cyan), var(--teal));
          color: #021b1f;
          font-size: 24px;
          box-shadow: 0 10px 30px rgba(0, 183, 199, 0.35);
        }

        .brand strong {
          display: block;
          font-size: 18px;
          letter-spacing: 0.2px;
        }

        .brand span {
          display: block;
          color: var(--muted);
          font-size: 12px;
          margin-top: 2px;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 18px;
          color: #d9eef2;
          font-size: 14px;
        }

        .nav a {
          text-decoration: none;
          opacity: 0.9;
        }

        .nav a:hover {
          color: var(--cyan);
        }

        .nav-cta {
          padding: 10px 16px;
          border-radius: 999px;
          background: linear-gradient(135deg, #00b7ff, #00c7b7);
          color: white !important;
          font-weight: 800;
          box-shadow: 0 12px 30px rgba(0, 183, 255, 0.24);
        }

        .section {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
          padding: 76px 0;
        }

        .hero {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
          padding: 52px 0 34px;
          display: grid;
          grid-template-columns: 1.02fr 0.98fr;
          gap: 34px;
          align-items: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 13px;
          border: 1px solid rgba(118, 236, 255, 0.22);
          background: rgba(118, 236, 255, 0.08);
          border-radius: 999px;
          color: var(--cyan);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.6px;
          text-transform: uppercase;
        }

        .hero h1 {
          margin: 18px 0 18px;
          font-size: clamp(42px, 6vw, 82px);
          line-height: 0.95;
          letter-spacing: -3px;
        }

        .hero h1 span {
          color: var(--gold);
        }

        .hero-text {
          color: #c8dde2;
          font-size: clamp(17px, 2vw, 21px);
          line-height: 1.65;
          max-width: 620px;
          margin: 0 0 26px;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin: 28px 0 24px;
        }

        .button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 48px;
          padding: 14px 20px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 900;
          border: 1px solid transparent;
          transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
        }

        .button:hover {
          transform: translateY(-2px);
        }

        .button.primary {
          background: linear-gradient(135deg, #00b7ff, #00c7b7);
          color: white;
          box-shadow: 0 18px 40px rgba(0, 183, 255, 0.25);
        }

        .button.secondary {
          background: rgba(255,255,255,0.06);
          border-color: var(--border);
          color: #e8f7fa;
        }

        .hero-meta {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 30px;
        }

        .meta-card {
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.055);
          border-radius: 20px;
          padding: 16px;
        }

        .meta-card strong {
          display: block;
          font-size: 22px;
          color: var(--gold);
          margin-bottom: 4px;
        }

        .meta-card span {
          color: var(--muted);
          font-size: 13px;
        }

        .hero-media {
          position: relative;
          min-height: 420px;
          border-radius: 34px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.18);
          box-shadow: var(--shadow);
          background: #09262c;
        }

        .hero-media img {
          width: 100%;
          height: 100%;
          min-height: 420px;
          object-fit: cover;
          filter: saturate(1.07) contrast(1.03);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.28) 52%, rgba(0,0,0,0.76) 100%);
        }

        .hero-caption {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 24px;
          padding: 20px;
          border-radius: 24px;
          background: rgba(2, 27, 31, 0.72);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.16);
        }

        .hero-caption small {
          color: var(--gold);
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }

        .hero-caption h2 {
          margin: 8px 0 8px;
          font-size: clamp(22px, 3vw, 34px);
          letter-spacing: -1px;
        }

        .hero-caption p {
          color: #d2e6ea;
          margin: 0;
          line-height: 1.5;
        }

        .dots {
          position: absolute;
          top: 18px;
          right: 18px;
          display: flex;
          gap: 7px;
        }

        .dot {
          width: 9px;
          height: 9px;
          border-radius: 999px;
          background: rgba(255,255,255,0.5);
        }

        .dot.active {
          background: var(--gold);
          width: 24px;
        }

        .section-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 24px;
          margin-bottom: 26px;
        }

        .section-heading h2 {
          margin: 0;
          font-size: clamp(32px, 4vw, 54px);
          line-height: 1;
          letter-spacing: -2px;
        }

        .section-heading p {
          color: var(--muted);
          max-width: 560px;
          line-height: 1.6;
          margin: 0;
          font-size: 17px;
        }

        .cards-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .info-card {
          padding: 26px;
          border-radius: 28px;
          background: linear-gradient(180deg, rgba(255,255,255,0.105), rgba(255,255,255,0.045));
          border: 1px solid var(--border);
          box-shadow: 0 18px 42px rgba(0,0,0,0.2);
        }

        .info-card span {
          color: var(--gold);
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.7px;
          text-transform: uppercase;
        }

        .info-card h3 {
          margin: 12px 0 10px;
          font-size: 24px;
        }

        .info-card p {
          margin: 0;
          color: #c7dce1;
          line-height: 1.65;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .product-card {
          overflow: hidden;
          border-radius: 30px;
          border: 1px solid var(--border);
          background: rgba(255, 255, 255, 0.065);
          box-shadow: 0 18px 42px rgba(0,0,0,0.22);
        }

        .product-card img {
          width: 100%;
          height: 230px;
          object-fit: cover;
          background: #0c2b31;
        }

        .product-body {
          padding: 22px 22px 24px;
        }

        .product-body h3 {
          margin: 0 0 10px;
          font-size: 25px;
          letter-spacing: -0.5px;
        }

        .product-body p {
          color: #c9dde2;
          margin: 0;
          line-height: 1.6;
          font-size: 16px;
        }

        .premium-band {
          border-radius: 34px;
          border: 1px solid rgba(244, 201, 107, 0.28);
          background:
            linear-gradient(135deg, rgba(244, 201, 107, 0.12), transparent 38%),
            linear-gradient(180deg, rgba(255,255,255,0.095), rgba(255,255,255,0.04));
          padding: 34px;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 26px;
          align-items: center;
          box-shadow: var(--shadow);
        }

        .premium-band img {
          width: 100%;
          height: 340px;
          object-fit: cover;
          border-radius: 26px;
          border: 1px solid rgba(255,255,255,0.16);
        }

        .premium-band h2 {
          margin: 0 0 14px;
          font-size: clamp(30px, 4vw, 50px);
          line-height: 1.02;
          letter-spacing: -2px;
        }

        .premium-band p {
          color: #c8dde2;
          line-height: 1.7;
          font-size: 17px;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .feature-card {
          overflow: hidden;
          border-radius: 28px;
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.065);
        }

        .feature-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          background: #0c2b31;
        }

        .feature-card .content {
          padding: 20px;
        }

        .feature-card h3 {
          margin: 0 0 10px;
          font-size: 22px;
        }

        .feature-card p {
          color: #c7dce1;
          line-height: 1.55;
          margin: 0 0 18px;
        }

        .feature-card a {
          display: inline-flex;
          text-decoration: none;
          color: var(--cyan);
          font-weight: 900;
        }

        .fai-kee {
          opacity: 0.94;
        }

        .fai-kee-note {
          padding: 22px;
          border-radius: 24px;
          background: rgba(244, 201, 107, 0.08);
          border: 1px solid rgba(244, 201, 107, 0.22);
          color: #f1dfb2;
          line-height: 1.65;
          margin-bottom: 20px;
        }

        .dish-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .dish-card {
          position: relative;
          min-height: 220px;
          border-radius: 26px;
          overflow: hidden;
          border: 1px solid var(--border);
          background: #0c2b31;
        }

        .dish-card img {
          width: 100%;
          height: 100%;
          min-height: 220px;
          object-fit: cover;
        }

        .dish-card h3 {
          position: absolute;
          left: 16px;
          right: 16px;
          bottom: 16px;
          margin: 0;
          padding: 14px 16px;
          border-radius: 18px;
          background: rgba(2, 27, 31, 0.78);
          backdrop-filter: blur(10px);
        }

        .contact-card {
          border-radius: 34px;
          padding: 34px;
          background:
            radial-gradient(circle at top left, rgba(0,183,255,0.16), transparent 35%),
            linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.045));
          border: 1px solid var(--border);
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          gap: 28px;
          align-items: center;
          box-shadow: var(--shadow);
        }

        .contact-card h2 {
          margin: 0 0 12px;
          font-size: clamp(32px, 4vw, 52px);
          letter-spacing: -2px;
        }

        .contact-card p {
          color: #c8dde2;
          line-height: 1.7;
          font-size: 17px;
        }

        .address-box {
          padding: 24px;
          border-radius: 26px;
          background: rgba(0,0,0,0.2);
          border: 1px solid var(--border);
        }

        .address-box strong {
          color: var(--gold);
          display: block;
          margin-bottom: 10px;
        }

        .address-box p {
          margin: 0 0 18px;
        }

        .footer {
          color: #88a6ad;
          text-align: center;
          padding: 26px 16px 88px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .mobile-cta {
          display: none;
        }

        @media (max-width: 980px) {
          .topbar-inner {
            align-items: flex-start;
            flex-direction: column;
          }

          .nav {
            width: 100%;
            overflow-x: auto;
            padding-bottom: 2px;
            gap: 14px;
          }

          .hero {
            grid-template-columns: 1fr;
            padding-top: 34px;
          }

          .hero-media {
            min-height: 360px;
          }

          .hero-media img {
            min-height: 360px;
          }

          .section-heading {
            align-items: flex-start;
            flex-direction: column;
          }

          .cards-3,
          .product-grid,
          .feature-grid,
          .dish-strip,
          .premium-band,
          .contact-card {
            grid-template-columns: 1fr;
          }

          .premium-band img {
            height: 280px;
          }
        }

        @media (max-width: 640px) {
          .section {
            width: min(100% - 24px, 1180px);
            padding: 52px 0;
          }

          .hero {
            width: min(100% - 24px, 1180px);
            gap: 22px;
          }

          .brand strong {
            font-size: 16px;
          }

          .brand span {
            font-size: 11px;
          }

          .nav a:not(.nav-cta) {
            font-size: 13px;
            white-space: nowrap;
          }

          .hero h1 {
            letter-spacing: -1.7px;
          }

          .hero-actions {
            display: grid;
            grid-template-columns: 1fr;
          }

          .button {
            width: 100%;
          }

          .hero-meta {
            grid-template-columns: 1fr;
          }

          .hero-media {
            border-radius: 26px;
            min-height: 310px;
          }

          .hero-media img {
            min-height: 310px;
          }

          .hero-caption {
            left: 14px;
            right: 14px;
            bottom: 14px;
            padding: 16px;
          }

          .product-card img {
            height: 190px;
          }

          .feature-card img {
            height: 160px;
          }

          .info-card,
          .premium-band,
          .contact-card {
            padding: 22px;
          }

          .mobile-cta {
            position: fixed;
            z-index: 80;
            left: 12px;
            right: 12px;
            bottom: 12px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 22px;
            background: rgba(2, 27, 31, 0.92);
            backdrop-filter: blur(16px);
            border: 1px solid var(--border);
            box-shadow: 0 20px 50px rgba(0,0,0,0.45);
          }

          .mobile-cta a {
            min-height: 46px;
            border-radius: 16px;
            display: grid;
            place-items: center;
            text-decoration: none;
            font-weight: 900;
            font-size: 14px;
          }

          .mobile-cta .wa {
            background: linear-gradient(135deg, #00b7ff, #00c7b7);
          }

          .mobile-cta .map {
            border: 1px solid var(--border);
            background: rgba(255,255,255,0.06);
          }
        }
      `}</style>

      <div className="page" id="home">
        <header className="topbar">
          <div className="topbar-inner">
            <a className="brand" href="#home">
              <div className="brand-mark">🦀</div>
              <div>
                <strong>Crab Talk SG</strong>
                <span>31 Commonwealth Crescent #01-41/42/43 S(149644)</span>
              </div>
            </a>

            <nav className="nav">
              <a href="#home-cooking">Home Cooking</a>
              <a href="#products">Seafood</a>
              <a href="#features">Features</a>
              <a href="#fai-kee">Cooking Support</a>
              <a href="#contact">Visit Us</a>
              <a className="nav-cta" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </nav>
          </div>
        </header>

        <section className="hero">
          <div>
            <div className="badge">Fresh Daily · Live Seafood · Commonwealth</div>

            <h1>
              Live Seafood for <span>Premium Home Dining</span>
            </h1>

            <p className="hero-text">
              Crab Talk supplies live seafood for customers who want fresher,
              better seafood at home. Reserve your crabs, lobsters, clams,
              oysters, and premium fish before coming down.
            </p>

            <div className="hero-actions">
              <a className="button primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                Order on WhatsApp
              </a>
              <a className="button secondary" href={MAPS_LINK} target="_blank" rel="noreferrer">
                Open Google Maps
              </a>
            </div>

            <div className="hero-meta">
              <div className="meta-card">
                <strong>Live</strong>
                <span>Crabs & lobsters</span>
              </div>
              <div className="meta-card">
                <strong>Fresh</strong>
                <span>Oysters, clams & fish</span>
              </div>
              <div className="meta-card">
                <strong>Reserve</strong>
                <span>Before coming down</span>
              </div>
            </div>
          </div>

          <div className="hero-media">
            <img src={currentHero.image} alt={currentHero.title} />
            <div className="hero-overlay" />

            <div className="dots">
              {heroSlides.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === activeSlide ? "active" : ""}`}
                />
              ))}
            </div>

            <div className="hero-caption">
              <small>{currentHero.label}</small>
              <h2>{currentHero.title}</h2>
              <p>{currentHero.text}</p>
            </div>
          </div>
        </section>

        <section className="section" id="home-cooking">
          <div className="section-heading">
            <h2>Built for Home Cooking</h2>
            <p>
              The main focus is simple: choose live seafood, bring it home, and
              cook it your way. Great for family meals, gatherings, and premium
              seafood nights.
            </p>
          </div>

          <div className="cards-3">
            {homeCooking.map((item, index) => (
              <div className="info-card" key={item.title}>
                <span>Step {index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="premium-band">
            <img src={img("about-jeremy-live-crab.jpg")} alt="Crab Talk live crab selection" />

            <div>
              <div className="badge">Crab Talk Selection</div>
              <h2>Premium seafood, selected with practical cooking advice.</h2>
              <p>
                Whether you are buying for steaming, chilli crab, lobster noodles,
                seafood soup, or a simple home-cooked meal, Crab Talk helps you
                choose suitable seafood based on size, freshness, and purpose.
              </p>
              <div className="hero-actions">
                <a className="button primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                  Reserve Seafood
                </a>
                <a className="button secondary" href="#products">
                  View Seafood
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="products">
          <div className="section-heading">
            <h2>Daily Seafood Selection</h2>
            <p>
              Availability changes according to daily arrivals. For best selection,
              WhatsApp us before coming down.
            </p>
          </div>

          <div className="product-grid">
            {products.map((item) => (
              <article className="product-card" key={item.name}>
                <img src={item.image} alt={item.name} />
                <div className="product-body">
                  <h3>{item.name}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="features">
          <div className="section-heading">
            <h2>Featured Stories</h2>
            <p>
              Crab Talk has been featured by food media and content creators for
              its live seafood, lobster dishes, and modern use of AI in daily work.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <img src={feature.image} alt={feature.title} />
                <div className="content">
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                  <a href={feature.link} target="_blank" rel="noreferrer">
                    {feature.button} →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section fai-kee" id="fai-kee">
          <div className="section-heading">
            <h2>Optional Nearby Cooking Support</h2>
            <p>
              For customers who prefer not to cook at home, selected seafood can
              sometimes be cooked nearby, subject to stall capacity and timing.
            </p>
          </div>

          <div className="fai-kee-note">
            Cooking support is not the main focus and may be limited during peak
            periods. Please check availability before ordering. Cooking fees and
            waiting time may apply depending on dish, queue, and seafood size.
          </div>

          <div className="dish-strip">
            {faiKeeDishes.map((dish) => (
              <div className="dish-card" key={dish.name}>
                <img src={dish.image} alt={dish.name} />
                <h3>{dish.name}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="contact-card">
            <div>
              <div className="badge">Visit Crab Talk</div>
              <h2>Reserve first, then collect fresh.</h2>
              <p>
                Popular seafood items can sell out quickly. Send us a WhatsApp
                message to check today’s availability, reserve your seafood, or
                ask for recommendations.
              </p>

              <div className="hero-actions">
                <a className="button primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                  WhatsApp 98398671
                </a>
                <a className="button secondary" href={MAPS_LINK} target="_blank" rel="noreferrer">
                  Get Directions
                </a>
              </div>
            </div>

            <div className="address-box">
              <strong>Full Address</strong>
              <p>31 Commonwealth Crescent #01-41/42/43 S(149644)</p>

              <strong>Best Practice</strong>
              <p>
                Walk-in is welcome, but pre-order is strongly recommended for
                premium crabs, lobsters, oysters, and fish.
              </p>

              <strong>Business Focus</strong>
              <p>Live seafood supply for home cooking and premium seafood meals.</p>
            </div>
          </div>
        </section>

        <footer className="footer">
          © {new Date().getFullYear()} Crab Talk SG · Live Seafood Supply @ Crab Talk
        </footer>

        <div className="mobile-cta">
          <a className="wa" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a className="map" href={MAPS_LINK} target="_blank" rel="noreferrer">
            Map
          </a>
        </div>
      </div>
    </main>
  );
}
