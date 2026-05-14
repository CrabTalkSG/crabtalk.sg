import React, { useEffect, useState } from "react";

const MAPS_LINK = "https://maps.app.goo.gl/1GKdK2y6jpbqfg8N8?g_st=ac";
const WHATSAPP_LINK = "https://wa.me/6598398671";
const TIKTOK_LINK = "https://www.tiktok.com/@botakjazz/video/7602204733155364116";
const FACEBOOK_AI_LINK = "https://www.facebook.com/share/v/1Djwg4h7UP/";
const EIGHT_DAYS_LINK =
  "https://www.8days.sg/eatanddrink/hawkerfood/commonwealth-crab-talk-fai-kee-live-seafood-hawker-collab-856541";

const heroSlides = [
  {
    image: "/images/hero-live-mud-crab-closeup.jpg",
    label: "Premium live mud crabs",
  },
  {
    image: "/images/product-yellow-roe-crab-01.jpg",
    label: "Sri Lanka yellow roe crab",
  },
  {
    image: "/images/product-boston-lobster-display.jpg",
    label: "Live Boston lobster",
  },
  {
    image: "/images/product-oysters-premium-01.jpg",
    label: "Fresh oysters",
  },
  {
    image: "/images/stall-crab-talk-live-tanks.jpg",
    label: "Live seafood tanks",
  },
];

const products = [
  {
    name: "Live Mud Crabs",
    desc: "Meaty, active crabs selected for home steaming, chilli crab, black pepper crab, or ginger scallion crab.",
    image: "/images/product-live-crab-premium.jpg",
  },
  {
    name: "Sri Lanka Roe Crabs",
    desc: "Popular for rich roe, firm meat, and premium home dining occasions.",
    image: "/images/product-yellow-roe-crab-02.jpg",
  },
  {
    name: "Live Lobsters",
    desc: "Boston lobster and green lobster options depending on daily arrival.",
    image: "/images/product-live-green-lobster-01.jpg",
  },
  {
    name: "Fresh Oysters",
    desc: "Cold, clean, and suitable for seafood platters or weekend gatherings.",
    image: "/images/product-oysters-box.jpg",
  },
  {
    name: "Manila Clams",
    desc: "Great for steaming, white wine style, chilli lala, or soup.",
    image: "/images/product-manila-clams-closeup.jpg",
  },
  {
    name: "Soon Hock & Premium Fish",
    desc: "Live fish options for steaming, Hong Kong style, or home cooking.",
    image: "/images/product-live-soon-hock-01.jpg",
  },
];

const homeCookingGallery = [
  "/images/dish-steamed-crab-01.jpg",
  "/images/dish-chilli-crab-premium.jpg",
  "/images/dish-black-pepper-crab-premium.jpg",
  "/images/dish-ginger-scallion-crab.jpg",
];

const faiKeeDishes = [
  {
    name: "Lobster Yee Mee",
    image: "/images/dish-lobster-yee-mee-fai-kee-hero.jpg",
  },
  {
    name: "Lobster Bee Hoon",
    image: "/images/dish-lobster-bee-hoon-fai-kee-01.jpg",
  },
  {
    name: "Steamed Soon Hock",
    image: "/images/dish-steamed-soon-hock-fai-kee.jpg",
  },
];

const mediaFeatures = [
  {
    title: "Featured on 8 Days",
    desc: "Crab Talk and the Commonwealth seafood cooking concept featured by 8 Days.",
    image: "/images/feature-8days-original-thumbnail.jpg",
    link: EIGHT_DAYS_LINK,
    cta: "Read Feature",
  },
  {
    title: "Botak Jazz TikTok Feature",
    desc: "Lobster yee mee and the live seafood experience featured on TikTok.",
    image: "/images/feature-botak-jazz-tiktok.jpg",
    link: TIKTOK_LINK,
    cta: "Watch TikTok",
  },
  {
    title: "Crab Seller Using AI",
    desc: "How Crab Talk uses AI in daily work, content planning, and business operations.",
    image: "/images/AI-feature.jpeg",
    link: FACEBOOK_AI_LINK,
    cta: "Watch Story",
  },
];

const premiumGallery = [
  "/images/product-king-crab-premium.jpg",
  "/images/product-alaskan-king-crab-legs.jpg",
  "/images/product-live-abalone-closeup.jpg",
  "/images/dish-lobster-yee-mee-closeup-01.jpg",
  "/images/dish-crab-bee-hoon.jpg",
  "/images/stall-crab-talk-front-01.jpg",
];

function App() {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const handleImageError = (event) => {
    event.currentTarget.style.display = "none";
  };

  return (
    <div className="site">
      <style>{`
        :root {
          --navy: #03171f;
          --deep: #061f29;
          --teal: #073b45;
          --aqua: #19c9e6;
          --aqua-soft: #a9f3ff;
          --gold: #d9b35f;
          --gold-soft: #f7df9d;
          --white: #ffffff;
          --muted: #b8c7ce;
          --card: rgba(255,255,255,0.075);
          --card-strong: rgba(255,255,255,0.12);
          --border: rgba(255,255,255,0.14);
          --shadow: 0 28px 80px rgba(0,0,0,0.38);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--navy);
        }

        .site {
          min-height: 100vh;
          color: var(--white);
          font-family: Arial, Helvetica, sans-serif;
          background:
            radial-gradient(circle at top left, rgba(25,201,230,0.22), transparent 34%),
            radial-gradient(circle at 80% 8%, rgba(217,179,95,0.15), transparent 28%),
            linear-gradient(180deg, #021419 0%, #062633 46%, #03171f 100%);
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
          background: rgba(3, 23, 31, 0.86);
          border-bottom: 1px solid var(--border);
        }

        .topbar-inner {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
          min-height: 74px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .brand-mark {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: linear-gradient(145deg, var(--aqua), var(--gold));
          box-shadow: 0 0 30px rgba(25, 201, 230, 0.25);
          font-size: 22px;
        }

        .brand-title {
          font-size: 19px;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .brand-sub {
          font-size: 12px;
          color: var(--muted);
          margin-top: 2px;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 18px;
          font-size: 14px;
          color: #d9edf2;
        }

        .nav a {
          text-decoration: none;
          opacity: 0.88;
        }

        .nav a:hover {
          opacity: 1;
          color: var(--aqua-soft);
        }

        .nav-cta {
          padding: 11px 16px;
          border-radius: 999px;
          background: linear-gradient(135deg, var(--aqua), #0aa6c7);
          color: #021419 !important;
          font-weight: 800;
          box-shadow: 0 12px 30px rgba(25,201,230,0.24);
        }

        .hero {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
          padding: 58px 0 38px;
          display: grid;
          grid-template-columns: 1.02fr 0.88fr;
          gap: 34px;
          align-items: center;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 13px;
          border: 1px solid rgba(247, 223, 157, 0.36);
          border-radius: 999px;
          color: var(--gold-soft);
          background: rgba(217,179,95,0.08);
          font-size: 13px;
          letter-spacing: 0.02em;
          margin-bottom: 18px;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(42px, 7vw, 82px);
          line-height: 0.95;
          letter-spacing: -0.065em;
        }

        .gradient-text {
          background: linear-gradient(135deg, #ffffff 18%, var(--aqua-soft), var(--gold-soft));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-lead {
          max-width: 650px;
          margin: 22px 0 0;
          font-size: clamp(17px, 2.2vw, 22px);
          line-height: 1.65;
          color: #d7e9ee;
        }

        .hero-address {
          margin-top: 18px;
          color: var(--aqua-soft);
          font-weight: 700;
          line-height: 1.5;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 13px;
          margin-top: 30px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 50px;
          padding: 14px 20px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 800;
          border: 1px solid transparent;
          transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--aqua), #0ba7c6);
          color: #021419;
          box-shadow: 0 18px 38px rgba(25, 201, 230, 0.24);
        }

        .btn-secondary {
          background: rgba(255,255,255,0.08);
          border-color: var(--border);
          color: #ecfbff;
        }

        .hero-card {
          position: relative;
          border-radius: 30px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.18);
          background: var(--card);
          box-shadow: var(--shadow);
          min-height: 420px;
        }

        .hero-card img {
          width: 100%;
          height: 420px;
          object-fit: cover;
          display: block;
        }

        .hero-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 35%, rgba(0,0,0,0.72));
        }

        .hero-caption {
          position: absolute;
          left: 22px;
          right: 22px;
          bottom: 20px;
          z-index: 2;
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 14px;
        }

        .hero-caption strong {
          display: block;
          font-size: 21px;
          letter-spacing: -0.02em;
        }

        .hero-caption span {
          display: block;
          margin-top: 5px;
          color: #d4e7ec;
          font-size: 14px;
        }

        .slide-dots {
          display: flex;
          gap: 7px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.36);
        }

        .dot.active {
          width: 22px;
          border-radius: 99px;
          background: var(--aqua);
        }

        .trust-row {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto 34px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .trust-card {
          padding: 18px;
          border-radius: 22px;
          background: rgba(255,255,255,0.07);
          border: 1px solid var(--border);
        }

        .trust-card strong {
          display: block;
          font-size: 22px;
          color: var(--gold-soft);
          margin-bottom: 4px;
        }

        .trust-card span {
          color: var(--muted);
          font-size: 13px;
          line-height: 1.45;
        }

        section {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
          padding: 52px 0;
        }

        .section-head {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 24px;
        }

        .section-kicker {
          color: var(--gold-soft);
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 800;
          margin-bottom: 10px;
        }

        h2 {
          margin: 0;
          font-size: clamp(30px, 4vw, 48px);
          line-height: 1.05;
          letter-spacing: -0.045em;
        }

        .section-desc {
          max-width: 520px;
          margin: 0;
          color: var(--muted);
          line-height: 1.65;
          font-size: 15px;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .product-card {
          overflow: hidden;
          border-radius: 26px;
          background: rgba(255,255,255,0.075);
          border: 1px solid var(--border);
          box-shadow: 0 20px 48px rgba(0,0,0,0.18);
        }

        .product-card img {
          width: 100%;
          height: 230px;
          object-fit: cover;
          display: block;
        }

        .product-body {
          padding: 20px;
        }

        .product-body h3 {
          margin: 0 0 9px;
          font-size: 20px;
          letter-spacing: -0.02em;
        }

        .product-body p {
          margin: 0;
          color: var(--muted);
          line-height: 1.6;
          font-size: 14px;
        }

        .split {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 24px;
          align-items: center;
        }

        .panel {
          border-radius: 30px;
          padding: 28px;
          background: linear-gradient(145deg, rgba(255,255,255,0.11), rgba(255,255,255,0.045));
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
        }

        .panel h3 {
          margin: 0 0 14px;
          font-size: 28px;
          letter-spacing: -0.035em;
        }

        .panel p {
          color: #d7e8ed;
          line-height: 1.72;
          margin: 0 0 18px;
        }

        .steps {
          display: grid;
          gap: 12px;
          margin-top: 22px;
        }

        .step {
          display: flex;
          gap: 13px;
          padding: 14px;
          border-radius: 18px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .step-num {
          width: 32px;
          height: 32px;
          flex: 0 0 32px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: rgba(25,201,230,0.15);
          color: var(--aqua-soft);
          font-weight: 900;
        }

        .step strong {
          display: block;
          margin-bottom: 4px;
        }

        .step span {
          color: var(--muted);
          line-height: 1.45;
          font-size: 14px;
        }

        .photo-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .photo-grid img {
          width: 100%;
          height: 210px;
          object-fit: cover;
          border-radius: 22px;
          border: 1px solid var(--border);
          box-shadow: 0 18px 38px rgba(0,0,0,0.22);
        }

        .fai-card {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 22px;
          align-items: center;
          padding: 24px;
          border-radius: 30px;
          border: 1px solid rgba(217,179,95,0.25);
          background:
            radial-gradient(circle at top left, rgba(217,179,95,0.18), transparent 36%),
            rgba(255,255,255,0.065);
        }

        .fai-card img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 24px;
          border: 1px solid var(--border);
        }

        .badge {
          display: inline-flex;
          align-items: center;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(217,179,95,0.12);
          color: var(--gold-soft);
          border: 1px solid rgba(217,179,95,0.26);
          font-size: 13px;
          font-weight: 800;
          margin-bottom: 14px;
        }

        .fai-card h3 {
          margin: 0 0 12px;
          font-size: 30px;
          letter-spacing: -0.035em;
        }

        .fai-card p {
          margin: 0;
          color: #d6e6eb;
          line-height: 1.7;
        }

        .mini-dishes {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 18px;
        }

        .mini-dish {
          border-radius: 18px;
          overflow: hidden;
          background: rgba(0,0,0,0.2);
          border: 1px solid var(--border);
        }

        .mini-dish img {
          height: 120px;
          border-radius: 0;
          border: 0;
        }

        .mini-dish span {
          display: block;
          padding: 10px;
          font-size: 13px;
          color: #e8f9fd;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .feature-card {
          overflow: hidden;
          border-radius: 26px;
          background: rgba(255,255,255,0.075);
          border: 1px solid var(--border);
          text-decoration: none;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          border-color: rgba(25,201,230,0.5);
        }

        .feature-card img {
          width: 100%;
          height: 210px;
          object-fit: cover;
          display: block;
        }

        .feature-body {
          padding: 20px;
        }

        .feature-body h3 {
          margin: 0 0 8px;
          font-size: 20px;
        }

        .feature-body p {
          margin: 0 0 16px;
          color: var(--muted);
          line-height: 1.55;
          font-size: 14px;
        }

        .feature-body span {
          color: var(--aqua-soft);
          font-weight: 800;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 12px;
        }

        .gallery-grid img {
          width: 100%;
          height: 170px;
          object-fit: cover;
          border-radius: 20px;
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.06);
        }

        .gallery-grid img:nth-child(1),
        .gallery-grid img:nth-child(4) {
          grid-column: span 2;
        }

        .contact-card {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 22px;
          align-items: center;
          padding: 30px;
          border-radius: 32px;
          background:
            linear-gradient(135deg, rgba(25,201,230,0.16), rgba(217,179,95,0.12)),
            rgba(255,255,255,0.08);
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
        }

        .contact-card h2 {
          margin-bottom: 12px;
        }

        .contact-card p {
          margin: 0;
          color: #d9edf2;
          line-height: 1.7;
        }

        .footer {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
          padding: 28px 0 44px;
          border-top: 1px solid var(--border);
          color: var(--muted);
          font-size: 13px;
          display: flex;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        @media (max-width: 980px) {
          .hero,
          .split,
          .fai-card,
          .contact-card {
            grid-template-columns: 1fr;
          }

          .hero {
            padding-top: 42px;
          }

          .hero-card,
          .hero-card img {
            min-height: unset;
            height: 360px;
          }

          .trust-row,
          .product-grid,
          .feature-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .gallery-grid img:nth-child(1),
          .gallery-grid img:nth-child(4) {
            grid-column: span 1;
          }
        }

        @media (max-width: 720px) {
          .topbar-inner {
            width: min(100% - 24px, 1180px);
            min-height: auto;
            padding: 12px 0;
            align-items: flex-start;
            flex-direction: column;
          }

          .nav {
            width: 100%;
            overflow-x: auto;
            gap: 14px;
            padding-bottom: 4px;
            white-space: nowrap;
          }

          .nav a {
            flex: 0 0 auto;
          }

          .hero,
          section,
          .trust-row,
          .footer {
            width: min(100% - 24px, 1180px);
          }

          .hero {
            gap: 24px;
            padding: 34px 0 24px;
          }

          .hero-card,
          .hero-card img {
            height: 295px;
            border-radius: 24px;
          }

          .hero-caption {
            left: 16px;
            right: 16px;
            bottom: 16px;
            align-items: flex-start;
            flex-direction: column;
          }

          .hero-actions {
            width: 100%;
          }

          .btn {
            width: 100%;
          }

          .trust-row,
          .product-grid,
          .feature-grid,
          .photo-grid,
          .mini-dishes {
            grid-template-columns: 1fr;
          }

          .section-head {
            display: block;
          }

          .section-desc {
            margin-top: 12px;
          }

          .product-card img,
          .feature-card img {
            height: 220px;
          }

          .panel,
          .fai-card,
          .contact-card {
            padding: 20px;
            border-radius: 24px;
          }

          .photo-grid img {
            height: 230px;
          }

          .mini-dish img {
            height: 180px;
          }

          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .gallery-grid img {
            height: 140px;
            border-radius: 16px;
          }
        }

        @media (max-width: 420px) {
          .hero h1 {
            font-size: 40px;
          }

          .hero-lead {
            font-size: 16px;
          }

          .brand-title {
            font-size: 17px;
          }

          .hero-card,
          .hero-card img {
            height: 260px;
          }

          .gallery-grid img {
            height: 125px;
          }
        }
      `}</style>

      <header className="topbar">
        <div className="topbar-inner">
          <a className="brand" href="#home">
            <div className="brand-mark">🦀</div>
            <div>
              <div className="brand-title">Crab Talk SG</div>
              <div className="brand-sub">Live Seafood Supply @ Crab Talk</div>
            </div>
          </a>

          <nav className="nav">
            <a href="#live-seafood">Live Seafood</a>
            <a href="#home-cooking">Home Cooking</a>
            <a href="#features">Features</a>
            <a href="#visit">Visit Us</a>
            <a className="nav-cta" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              WhatsApp Order
            </a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div>
            <div className="eyebrow">Premium live seafood · Commonwealth Crescent</div>

            <h1>
              Live seafood, <br />
              <span className="gradient-text">market fresh.</span>
            </h1>

            <p className="hero-lead">
              Choose live crabs, lobsters, oysters, clams, and premium fish directly from Crab
              Talk. Bring them home for your own seafood feast, or pre-order before visiting to
              secure the best daily picks.
            </p>

            <div className="hero-address">
              31 Commonwealth Crescent #01-41/42/43 S(149644)
            </div>

            <div className="hero-actions">
              <a className="btn btn-primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                Reserve on WhatsApp
              </a>
              <a className="btn btn-secondary" href={MAPS_LINK} target="_blank" rel="noreferrer">
                Open Google Maps
              </a>
            </div>
          </div>

          <div className="hero-card">
            <img
              src={heroSlides[heroIndex].image}
              alt={heroSlides[heroIndex].label}
              onError={handleImageError}
            />

            <div className="hero-caption">
              <div>
                <strong>{heroSlides[heroIndex].label}</strong>
                <span>Photos refresh automatically every 3 seconds</span>
              </div>

              <div className="slide-dots">
                {heroSlides.map((_, index) => (
                  <div
                    key={index}
                    className={index === heroIndex ? "dot active" : "dot"}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="trust-row">
          <div className="trust-card">
            <strong>Live</strong>
            <span>Seafood selected from tanks before purchase.</span>
          </div>
          <div className="trust-card">
            <strong>Fresh</strong>
            <span>Daily arrivals depending on season and supply.</span>
          </div>
          <div className="trust-card">
            <strong>Premium</strong>
            <span>Crabs, lobsters, oysters, clams, and live fish.</span>
          </div>
          <div className="trust-card">
            <strong>Reserve</strong>
            <span>Pre-order recommended for popular items.</span>
          </div>
        </div>

        <section id="live-seafood">
          <div className="section-head">
            <div>
              <div className="section-kicker">Live Seafood Selection</div>
              <h2>Premium seafood for home dining.</h2>
            </div>
            <p className="section-desc">
              Product availability changes by arrival. Message us before coming down if you are
              looking for specific crab sizes, roe crabs, lobsters, oysters, or live fish.
            </p>
          </div>

          <div className="product-grid">
            {products.map((item) => (
              <article className="product-card" key={item.name}>
                <img src={item.image} alt={item.name} onError={handleImageError} />
                <div className="product-body">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="home-cooking">
          <div className="split">
            <div className="panel">
              <div className="section-kicker">Main Experience</div>
              <h3>Buy live seafood for home cooking.</h3>
              <p>
                Crab Talk is built for customers who want restaurant-quality seafood ingredients
                without paying restaurant markups. Choose your seafood, reserve in advance, and
                cook it your preferred way at home.
              </p>

              <div className="steps">
                <div className="step">
                  <div className="step-num">1</div>
                  <div>
                    <strong>Check today’s availability</strong>
                    <span>WhatsApp us for crab sizes, lobster options, oysters, clams, and fish.</span>
                  </div>
                </div>

                <div className="step">
                  <div className="step-num">2</div>
                  <div>
                    <strong>Reserve before coming</strong>
                    <span>Popular seafood can sell out fast, especially weekends and dinner timing.</span>
                  </div>
                </div>

                <div className="step">
                  <div className="step-num">3</div>
                  <div>
                    <strong>Cook your own feast</strong>
                    <span>Steam, chilli crab, black pepper crab, bee hoon, soup, or hotpot.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="photo-grid">
              {homeCookingGallery.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`Home cooking seafood ${index + 1}`}
                  onError={handleImageError}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="optional-cooking">
          <div className="fai-card">
            <img
              src="/images/dish-lobster-yee-mee-fai-kee-hero.jpg"
              alt="Lobster yee mee"
              onError={handleImageError}
            />

            <div>
              <div className="badge">Optional cooking partner · Limited slots</div>
              <h3>Prefer cooked seafood?</h3>
              <p>
                Selected seafood purchased from Crab Talk may be cooked nearby by Fai Kee, subject
                to kitchen capacity, timing, and dish availability. As slots can be limited, please
                pre-book early and check before coming down.
              </p>

              <div className="mini-dishes">
                {faiKeeDishes.map((dish) => (
                  <div className="mini-dish" key={dish.name}>
                    <img src={dish.image} alt={dish.name} onError={handleImageError} />
                    <span>{dish.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="features">
          <div className="section-head">
            <div>
              <div className="section-kicker">Media & Public Features</div>
              <h2>Seen by seafood lovers.</h2>
            </div>
            <p className="section-desc">
              Crab Talk has been featured across food media and social platforms, including live
              seafood content, hawker collaborations, and business stories.
            </p>
          </div>

          <div className="feature-grid">
            {mediaFeatures.map((feature) => (
              <a
                className="feature-card"
                href={feature.link}
                target="_blank"
                rel="noreferrer"
                key={feature.title}
              >
                <img src={feature.image} alt={feature.title} onError={handleImageError} />
                <div className="feature-body">
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                  <span>{feature.cta} →</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section>
          <div className="section-head">
            <div>
              <div className="section-kicker">Gallery</div>
              <h2>Fresh tanks, premium catches, real dishes.</h2>
            </div>
            <p className="section-desc">
              A quick look at Crab Talk’s seafood range, live tanks, and cooked seafood examples.
            </p>
          </div>

          <div className="gallery-grid">
            {premiumGallery.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`Crab Talk gallery ${index + 1}`}
                onError={handleImageError}
              />
            ))}
          </div>
        </section>

        <section id="visit">
          <div className="contact-card">
            <div>
              <div className="section-kicker">Visit Crab Talk</div>
              <h2>Reserve before coming down.</h2>
              <p>
                Address: 31 Commonwealth Crescent #01-41/42/43 S(149644)
                <br />
                For today’s live seafood availability, message us on WhatsApp before visiting.
              </p>
            </div>

            <div className="hero-actions">
              <a className="btn btn-primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                WhatsApp 9839 8671
              </a>
              <a className="btn btn-secondary" href={MAPS_LINK} target="_blank" rel="noreferrer">
                Google Maps
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© Crab Talk SG · Live Seafood Supply @ Crab Talk</span>
        <span>31 Commonwealth Crescent #01-41/42/43 S(149644)</span>
      </footer>
    </div>
  );
}

export default App;
