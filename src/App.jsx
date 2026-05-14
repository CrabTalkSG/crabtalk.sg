import React, { useEffect, useState } from "react";

const img = (name) => `/images/${name}`;

const heroImages = [
  img("product-yellow-roe-crab-06.jpg"),
  img("product-live-crab-premium.jpg"),
  img("product-boston-lobster-display.jpg"),
  img("feature-8days-crab-talk-fai-kee.jpg"),
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
    image: img("product-oysters-premium-01.jpg"),
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
    image: img("8days-feature.jpg"),
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

const cookingOptions = [
  {
    title: "Home Cooking",
    highlight: "Best for freshness, flexibility, and value",
    text: "Choose live seafood directly from our tanks and bring it home for steaming, hotpot, chilli crab, black pepper crab, or your own family recipe.",
  },
  {
    title: "Nearby Cooking Option",
    highlight: "Limited availability, advance planning recommended",
    text: "Selected seafood can be cooked nearby depending on kitchen capacity and timing. Please check with us early, especially during peak periods.",
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
          background: #03171b;
          color: #ffffff;
        }

        .site {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(17, 158, 177, 0.28), transparent 34%),
            radial-gradient(circle at top right, rgba(255, 201, 94, 0.13), transparent 28%),
            linear-gradient(180deg, #021216 0%, #06252c 48%, #03171b 100%);
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(18px);
          background: rgba(2, 18, 22, 0.86);
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
          flex-direction: column;
          gap: 3px;
        }

        .brand-title {
          font-size: 20px;
          font-weight: 900;
          letter-spacing: 0.4px;
        }

        .brand-sub {
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
          padding: 10px 15px;
          border-radius: 999px;
          background: linear-gradient(135deg, #16c7df, #0a7d92);
          color: white !important;
          font-weight: 800;
          box-shadow: 0 10px 28px rgba(22, 199, 223, 0.25);
        }

        .hero {
          max-width: 1180px;
          margin: 0 auto;
          padding: 54px 22px 34px;
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
          border: 1px solid rgba(255, 209, 102, 0.28);
          color: #ffd166;
          font-size: 13px;
          font-weight: 800;
          margin-bottom: 18px;
        }

        h1 {
          margin: 0;
          font-size: clamp(38px, 5.2vw, 72px);
          line-height: 0.98;
          letter-spacing: -2px;
        }

        .hero-copy {
          margin: 22px 0 0;
          max-width: 610px;
          font-size: clamp(16px, 2vw, 20px);
          line-height: 1.65;
          color: #c7e8ef;
        }

        .address {
          margin-top: 20px;
          padding: 15px 17px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.055);
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
          padding: 14px 18px;
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
          box-shadow: 0 14px 32px rgba(255, 183, 3, 0.22);
        }

        .btn-secondary {
          color: white;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.16);
        }

        .hero-frame {
          position: relative;
          border-radius: 30px;
          padding: 12px;
          background:
            linear-gradient(135deg, rgba(255, 209, 102, 0.48), rgba(30, 198, 220, 0.22)),
            rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 28px 80px rgba(0, 0, 0, 0.36);
        }

        .hero-image-box {
          height: 390px;
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
          left: 26px;
          bottom: 26px;
          padding: 11px 14px;
          border-radius: 16px;
          background: rgba(2, 18, 22, 0.82);
          border: 1px solid rgba(255, 255, 255, 0.14);
          backdrop-filter: blur(10px);
          font-size: 13px;
          color: #d7f6ff;
        }

        .section {
          max-width: 1180px;
          margin: 0 auto;
          padding: 46px 22px;
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
          font-size: clamp(28px, 3.4vw, 44px);
          letter-spacing: -1px;
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
        }

        .product-image-wrap {
          height: 220px;
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
          padding: 6px;
        }

        .product-body {
          padding: 20px 20px 22px;
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

        .options-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .option-card {
          padding: 28px;
          border-radius: 26px;
          background:
            linear-gradient(135deg, rgba(255, 209, 102, 0.08), transparent),
            rgba(255, 255, 255, 0.055);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .option-card h3 {
          margin: 0 0 9px;
          font-size: 25px;
        }

        .option-card strong {
          color: #ffd166;
          font-size: 14px;
        }

        .option-card p {
          margin: 12px 0 0;
          color: #c5e4ea;
          line-height: 1.65;
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
          height: 190px;
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
          padding: 34px;
          background:
            linear-gradient(135deg, rgba(22, 199, 223, 0.14), rgba(255, 209, 102, 0.08)),
            rgba(255, 255, 255, 0.055);
          border: 1px solid rgba(255, 255, 255, 0.13);
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 24px;
          align-items: center;
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

        @media (max-width: 960px) {
          .hero {
            grid-template-columns: 1fr;
            padding-top: 38px;
          }

          .hero-image-box {
            height: 330px;
          }

          .selection-grid,
          .feature-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .visit-box {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 680px) {
          .topbar-inner {
            padding: 12px 16px;
            align-items: flex-start;
          }

          .nav {
            display: none;
          }

          .hero,
          .section {
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

          .section {
            padding-top: 34px;
            padding-bottom: 34px;
          }

          .section-head {
            display: block;
          }

          .section-desc {
            margin-top: 12px;
          }

          .selection-grid,
          .feature-grid,
          .options-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .product-image-wrap {
            height: 190px;
          }

          .feature-image-wrap {
            height: 180px;
          }

          .product-body {
            padding: 17px;
          }

          .product-body h3 {
            font-size: 20px;
          }

          .option-card,
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
        }

        @media (max-width: 420px) {
          .hero-image-box {
            height: 220px;
          }

          .product-image-wrap {
            height: 175px;
          }

          .feature-image-wrap {
            height: 170px;
          }

          .address {
            font-size: 14px;
          }
        }
      `}</style>

      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand">
            <div className="brand-title">🦀 Crab Talk SG</div>
            <div className="brand-sub">
              31 Commonwealth Crescent #01-41/42/43 S(149644)
            </div>
          </div>

          <nav className="nav">
            <a href="#selection">Seafood</a>
            <a href="#options">How It Works</a>
            <a href="#features">Features</a>
            <a href="#visit">Visit</a>
            <a className="nav-cta" href="https://wa.me/6598398671">
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
              gatherings, and seafood lovers who want restaurant-quality
              seafood at home.
            </p>

            <div className="address">
              <strong>Visit us:</strong>
              <br />
              31 Commonwealth Crescent #01-41/42/43 S(149644)
            </div>

            <div className="hero-actions">
              <a className="btn btn-primary" href="https://wa.me/6598398671">
                Order on WhatsApp
              </a>
              <a
                className="btn btn-secondary"
                href="https://maps.app.goo.gl/1GKdK2y6jpbqfg8N8?g_st=ac"
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
              Daily arrivals vary. Walk-in or pre-order recommended.
            </div>
          </div>
        </section>

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

        <section className="section" id="options">
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

          <div className="options-grid">
            {cookingOptions.map((item) => (
              <article className="option-card" key={item.title}>
                <h3>{item.title}</h3>
                <strong>{item.highlight}</strong>
                <p>{item.text}</p>
              </article>
            ))}
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
                For the best selection, message us before visiting. Live seafood
                availability changes daily, especially for roe crabs, lobsters,
                oysters, Soon Hock, and premium items.
              </p>
            </div>

            <div className="visit-actions">
              <a className="btn btn-primary" href="https://wa.me/6598398671">
                WhatsApp to Reserve
              </a>
              <a
                className="btn btn-secondary"
                href="https://maps.app.goo.gl/1GKdK2y6jpbqfg8N8?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        © Crab Talk SG — Live Seafood Supply @ Crab Talk
      </footer>
    </div>
  );
}
