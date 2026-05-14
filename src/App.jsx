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

const freshSelection = [
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
];

const featureCards = [
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
];

const whyChoose = [
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
];

const steps = [
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
];

export default function App() {
  const [heroIndex, setHeroIndex] = useState(0);

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
          transition: opacity 0.4s ease;
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
          padding: 18px 18px;
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

        .selection-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .product-card {
          overflow: hidden;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.055);
          border: 1px solid rgba(255, 255, 255, 0.11);
          box-shadow: 0 18px 42px rgba(0, 0, 0, 0.18);
          transition: transform 0.22s ease, border-color 0.22s ease;
        }

        .product-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 209, 102, 0.38);
        }

        .product-image-wrap {
          height: 215px;
          background: #061e23;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #061e23;
          padding: 5px;
        }

        .product-body {
          padding: 19px 20px 21px;
        }

        .product-body h3 {
          margin: 0 0 9px;
          font-size: 22px;
          letter-spacing: -0.4px;
        }

        .product-body p {
          margin: 0;
          color: #c0dce2;
          font-size: 15px;
          line-height: 1.6;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .step-card {
          position: relative;
          padding: 26px;
          border-radius: 26px;
          background:
            linear-gradient(135deg, rgba(255, 209, 102, 0.09), transparent),
            rgba(255, 255, 255, 0.055);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .step-number {
          color: rgba(255, 209, 102, 0.34);
          font-size: 44px;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 10px;
        }

        .step-card h3 {
          margin: 0 0 10px;
          font-size: 22px;
        }

        .step-card p {
          margin: 0;
          color: #c5e4ea;
          line-height: 1.65;
          font-size: 15px;
        }

        .telegram-box {
          border-radius: 30px;
          padding: 34px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 24px;
          align-items: center;
          background:
            radial-gradient(circle at top right, rgba(32, 168, 224, 0.26), transparent 34%),
            linear-gradient(135deg, rgba(32, 168, 224, 0.16), rgba(255, 209, 102, 0.08)),
            rgba(255, 255, 255, 0.055);
          border: 1px solid rgba(255, 255, 255, 0.13);
          box-shadow: 0 22px 70px rgba(0, 0, 0, 0.20);
        }

        .telegram-box p {
          margin: 12px 0 0;
          color: #c5e4ea;
          line-height: 1.7;
        }

        .telegram-points {
          display: grid;
          gap: 11px;
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

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .feature-card {
          overflow: hidden;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.055);
          border: 1px solid rgba(255, 255, 255, 0.11);
          text-decoration: none;
          color: white;
          transition: transform 0.22s ease, border-color 0.22s ease;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 209, 102, 0.45);
        }

        .feature-image-wrap {
          height: 185px;
          background: #061e23;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #061e23;
          padding: 5px;
        }

        .feature-body {
          padding: 18px;
        }

        .feature-body h3 {
          margin: 0 0 8px;
          font-size: 20px;
        }

        .feature-body p {
          margin: 0 0 13px;
          color: #c0dce2;
          font-size: 14px;
          line-height: 1.55;
        }

        .feature-link {
          color: #ffd166;
          font-weight: 900;
          font-size: 14px;
        }

        .visit-box {
          border-radius: 30px;
          padding: 36px;
          background:
            radial-gradient(circle at top right, rgba(255, 209, 102, 0.18), transparent 34%),
            linear-gradient(135deg, rgba(22, 199, 223, 0.14), rgba(255, 209, 102, 0.08)),
            rgba(255, 255, 255, 0.055);
          border: 1px solid rgba(255, 255, 255, 0.13);
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 26px;
          align-items: center;
          box-shadow: 0 22px 70px rgba(0, 0, 0, 0.20);
        }

        .visit-box h2 {
          margin-bottom: 12px;
        }

        .visit-box p {
          margin: 0;
          color: #c5e4ea;
          line-height: 1.7;
        }

        .visit-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
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
            padding-top: 38px;
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

          .hero-frame {
            border-radius: 24px;
            padding: 8px;
          }

          .hero-image-box {
            border-radius: 18px;
          }

          .hero-badge {
            left: 18px;
            bottom: 18px;
            max-width: calc(100% - 36px);
          }

          .trust-row,
          .selection-grid,
          .feature-grid,
          .steps-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .section {
            padding-top: 36px;
            padding-bottom: 36px;
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

          .product-body {
            padding: 17px;
          }

          .product-body h3 {
            font-size: 20px;
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
              <div className="brand-sub">
                31 Commonwealth Crescent #01-41/42/43 S(149644)
              </div>
            </div>
          </div>

          <nav className="nav">
            <a href="#selection">Seafood</a>
            <a href="#how">How It Works</a>
            <a href="#telegram">Telegram</a>
            <a href="#features">Features</a>
            <a href="#visit">Visit</a>
            <a className="nav-cta" href={whatsappLink}>
              WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div>
            <div className="eyebrow">Live Seafood • Fresh Daily • Singapore</div>

            <h1>Premium live seafood for home cooking.</h1>

            <p className="hero-copy">
              Pick your live crabs, lobsters, oysters, clams, and premium fish
              directly from Crab Talk. Fresh daily selections for families,
              gatherings, and seafood lovers who want restaurant-quality seafood
              at home.
            </p>

            <div className="address">
              <strong>Visit us:</strong>
              <br />
              31 Commonwealth Crescent #01-41/42/43 S(149644)
            </div>

            <div className="hero-actions">
              <a className="btn btn-primary" href={whatsappLink}>
                WhatsApp to Reserve
              </a>
              <a
                className="btn btn-telegram"
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Telegram Updates
              </a>
              <a
                className="btn btn-secondary"
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Google Maps
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
            <div className="hero-badge">
              Daily arrivals vary. Telegram updates first.
            </div>
          </div>
        </section>

        <div className="trust-row">
          {whyChoose.map((item) => (
            <div className="trust-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <section className="section" id="selection">
          <div className="section-head">
            <div>
              <div className="section-kicker">Fresh Daily Selection</div>
              <h2>Choose your seafood</h2>
            </div>
            <p className="section-desc">
              Our focus is live seafood supply: selected, packed, and ready for
              home cooking. Availability depends on daily stock.
            </p>
          </div>

          <div className="selection-grid">
            {freshSelection.map((item) => (
              <article className="product-card" key={item.title}>
                <div className="product-image-wrap">
                  <img
                    className="product-image"
                    src={item.image}
                    alt={item.title}
                  />
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
              <div className="section-kicker">How It Works</div>
              <h2>Simple seafood buying experience</h2>
            </div>
            <p className="section-desc">
              Designed mainly for customers who want to buy live seafood and
              cook it fresh at home.
            </p>
          </div>

          <div className="steps-grid">
            {steps.map((item) => (
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
              <div className="section-kicker">Daily Seafood Updates</div>
              <h2>Join Crab Talk on Telegram</h2>
              <p>
                Get faster updates on today’s arrivals, limited seafood drops,
                popular sizes, reservation reminders and sold-out notices.
              </p>

              <div className="hero-actions">
                <a
                  className="btn btn-telegram"
                  href={telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join t.me/CrabTalkSG
                </a>
                <a className="btn btn-primary" href={whatsappLink}>
                  Reserve on WhatsApp
                </a>
              </div>
            </div>

            <div className="telegram-points">
              <div className="telegram-point">
                🦀 See fresh arrivals before heading down
              </div>
              <div className="telegram-point">
                🦞 Limited items and promo updates
              </div>
              <div className="telegram-point">
                ⚠️ Sold-out notices and reservation reminders
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="features">
          <div className="section-head">
            <div>
              <div className="section-kicker">Media & Social Features</div>
              <h2>As seen online</h2>
            </div>
            <p className="section-desc">
              Crab Talk has been featured by local food media and content
              creators for live seafood, lobster yee mee, and our market-style
              seafood experience.
            </p>
          </div>

          <div className="feature-grid">
            {featureCards.map((item) => (
              <a
                className="feature-card"
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="feature-image-wrap">
                  <img
                    className="feature-image"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="feature-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="feature-link">View feature →</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="section" id="visit">
          <div className="visit-box">
            <div>
              <div className="section-kicker">Visit Crab Talk</div>
              <h2>Walk in or reserve before coming</h2>
              <p>
                For the best selection, join Telegram for updates or message us
                before visiting. Live seafood availability changes daily,
                especially for roe crabs, lobsters, oysters, Soon Hock, and
                premium items.
              </p>
            </div>

            <div className="visit-actions">
              <a className="btn btn-primary" href={whatsappLink}>
                WhatsApp to Reserve
              </a>
              <a
                className="btn btn-telegram"
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Telegram
              </a>
              <a
                className="btn btn-secondary"
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
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

      <footer className="footer">
        © Crab Talk SG — Live Seafood Supply @ Crab Talk
      </footer>
    </div>
  );
}
