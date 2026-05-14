import React, { useEffect, useState } from "react";

export default function App() {
  const heroImages = [
    {
      src: "/images/8days-feature.jpg",
      title: "As Featured on 8 Days",
      text: "Crab Talk × Fai Kee live seafood hawker collaboration",
    },
    {
      src: "/images/botak-jazz-feature.jpg",
      title: "Botak Jazz Feature",
      text: "Lobster Ee Fu Noodles and live seafood experience",
    },
    {
      src: "/images/AI-feature.jpeg",
      title: "Crab Seller Using AI",
      text: "How Crab Talk uses AI for daily seafood business work",
    },
  ];

  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const whatsappLink = "https://wa.me/6598398671";
  const mapsLink = "https://maps.app.goo.gl/1GKdK2y6jpbqfg8N8?g_st=ac";

  return (
    <div className="site">
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #03191f;
        }

        .site {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(0, 183, 255, 0.20), transparent 32%),
            radial-gradient(circle at top right, rgba(248, 184, 75, 0.12), transparent 30%),
            linear-gradient(180deg, #03191f 0%, #062832 45%, #021014 100%);
          color: #ffffff;
          font-family: Arial, Helvetica, sans-serif;
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(18px);
          background: rgba(2, 17, 22, 0.82);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .topbar-inner {
          max-width: 1180px;
          margin: 0 auto;
          padding: 16px 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00b7ff, #9fe8ff);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          box-shadow: 0 0 24px rgba(0,183,255,0.28);
        }

        .brand-title {
          font-size: 20px;
          font-weight: 800;
          letter-spacing: 0.3px;
        }

        .brand-sub {
          font-size: 12px;
          color: #9fe8ff;
          margin-top: 2px;
        }

        .nav-actions {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .nav-link,
        .primary-btn,
        .secondary-btn {
          text-decoration: none;
          border-radius: 999px;
          font-weight: 700;
          transition: 0.2s ease;
          white-space: nowrap;
        }

        .nav-link {
          color: #d7f6ff;
          font-size: 14px;
        }

        .primary-btn {
          background: linear-gradient(135deg, #00b7ff, #007fd6);
          color: white;
          padding: 13px 20px;
          box-shadow: 0 10px 28px rgba(0,183,255,0.28);
        }

        .secondary-btn {
          color: #ffffff;
          border: 1px solid rgba(255,255,255,0.18);
          padding: 12px 18px;
          background: rgba(255,255,255,0.06);
        }

        .primary-btn:hover,
        .secondary-btn:hover {
          transform: translateY(-1px);
        }

        .container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 38px 22px 80px;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 34px;
          align-items: center;
          padding: 34px 0 48px;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 13px;
          border-radius: 999px;
          background: rgba(159,232,255,0.11);
          color: #9fe8ff;
          border: 1px solid rgba(159,232,255,0.18);
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 18px;
        }

        h1 {
          font-size: clamp(42px, 6vw, 78px);
          line-height: 0.96;
          margin: 0;
          letter-spacing: -2px;
        }

        .hero-highlight {
          color: #9fe8ff;
        }

        .hero-text {
          margin: 22px 0 0;
          color: #cbe8ef;
          font-size: 18px;
          line-height: 1.7;
          max-width: 610px;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }

        .trust-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 28px;
          max-width: 640px;
        }

        .trust-card {
          padding: 16px;
          border-radius: 20px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.10);
        }

        .trust-number {
          font-size: 22px;
          font-weight: 900;
          color: #ffffff;
        }

        .trust-label {
          margin-top: 5px;
          font-size: 13px;
          color: #b9dce5;
          line-height: 1.4;
        }

        .hero-media {
          width: 70%;
          max-width: 560px;
          justify-self: center;
          border-radius: 28px;
          padding: 10px;
          background: linear-gradient(135deg, rgba(159,232,255,0.35), rgba(248,184,75,0.16));
          box-shadow: 0 28px 80px rgba(0,0,0,0.38);
        }

        .hero-image-wrap {
          position: relative;
          overflow: hidden;
          border-radius: 22px;
          background: #082c34;
          min-height: 280px;
        }

        .hero-image {
          width: 100%;
          height: 280px;
          object-fit: cover;
          display: block;
          transition: opacity 0.35s ease;
        }

        .hero-caption {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 20px;
          background: linear-gradient(180deg, transparent, rgba(0,0,0,0.82));
        }

        .hero-caption h3 {
          margin: 0 0 6px;
          font-size: 20px;
        }

        .hero-caption p {
          margin: 0;
          color: #d7eef4;
          font-size: 14px;
          line-height: 1.45;
        }

        .dots {
          display: flex;
          gap: 7px;
          justify-content: center;
          margin-top: 13px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.28);
        }

        .dot.active {
          background: #00b7ff;
        }

        .section {
          margin-top: 34px;
          padding: 34px;
          border-radius: 34px;
          background: rgba(255,255,255,0.055);
          border: 1px solid rgba(255,255,255,0.10);
          box-shadow: 0 24px 70px rgba(0,0,0,0.22);
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          align-items: end;
          margin-bottom: 24px;
        }

        .section-title {
          margin: 0;
          font-size: clamp(28px, 4vw, 42px);
          letter-spacing: -1px;
        }

        .section-subtitle {
          margin: 10px 0 0;
          color: #b9dce5;
          line-height: 1.6;
          max-width: 700px;
        }

        .badge {
          display: inline-block;
          padding: 8px 13px;
          border-radius: 999px;
          background: rgba(248,184,75,0.13);
          border: 1px solid rgba(248,184,75,0.28);
          color: #ffd48a;
          font-size: 13px;
          font-weight: 800;
        }

        .split-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .service-card {
          border-radius: 28px;
          padding: 26px;
          background: linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.045));
          border: 1px solid rgba(255,255,255,0.10);
        }

        .service-card h3 {
          margin: 0 0 12px;
          font-size: 26px;
        }

        .service-card p {
          color: #cbe8ef;
          line-height: 1.65;
          margin: 0 0 18px;
        }

        .mini-list {
          display: grid;
          gap: 10px;
          margin-top: 18px;
        }

        .mini-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 13px;
          border-radius: 16px;
          background: rgba(0,0,0,0.18);
          color: #e8fbff;
          font-size: 15px;
        }

        .products {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .product {
          padding: 18px;
          border-radius: 22px;
          background: rgba(2, 25, 31, 0.72);
          border: 1px solid rgba(255,255,255,0.09);
          min-height: 130px;
        }

        .product-icon {
          font-size: 32px;
          margin-bottom: 12px;
        }

        .product h3 {
          margin: 0 0 8px;
          font-size: 18px;
        }

        .product p {
          margin: 0;
          color: #b9dce5;
          line-height: 1.5;
          font-size: 14px;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .feature-card {
          overflow: hidden;
          border-radius: 26px;
          background: rgba(2, 25, 31, 0.75);
          border: 1px solid rgba(255,255,255,0.10);
          text-decoration: none;
          color: white;
          transition: 0.22s ease;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          border-color: rgba(159,232,255,0.35);
        }

        .feature-card img {
          width: 100%;
          height: 185px;
          object-fit: cover;
          display: block;
        }

        .feature-content {
          padding: 18px;
        }

        .feature-content h3 {
          margin: 0 0 8px;
          font-size: 19px;
        }

        .feature-content p {
          margin: 0;
          color: #b9dce5;
          line-height: 1.5;
          font-size: 14px;
        }

        .feature-source {
          margin-top: 14px;
          color: #9fe8ff;
          font-weight: 800;
          font-size: 13px;
        }

        .contact-box {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 24px;
          align-items: center;
          padding: 28px;
          border-radius: 30px;
          background:
            linear-gradient(135deg, rgba(0,183,255,0.22), rgba(248,184,75,0.10)),
            rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
        }

        .contact-box h2 {
          margin: 0 0 10px;
          font-size: 34px;
        }

        .contact-box p {
          margin: 0;
          color: #d7eef4;
          line-height: 1.6;
        }

        .footer {
          padding: 30px 22px;
          text-align: center;
          color: #8fb6bf;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
            padding-top: 24px;
          }

          .hero-media {
            width: 100%;
            max-width: 100%;
            order: -1;
          }

          .hero-image-wrap {
            min-height: 250px;
          }

          .hero-image {
            height: 250px;
          }

          .split-grid,
          .features {
            grid-template-columns: 1fr;
          }

          .products {
            grid-template-columns: repeat(2, 1fr);
          }

          .section-header {
            display: block;
          }

          .badge {
            margin-top: 14px;
          }

          .contact-box {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .topbar-inner {
            padding: 13px 16px;
          }

          .brand-title {
            font-size: 17px;
          }

          .brand-sub {
            font-size: 11px;
          }

          .nav-link {
            display: none;
          }

          .secondary-btn {
            display: none;
          }

          .primary-btn {
            padding: 11px 15px;
            font-size: 14px;
          }

          .container {
            padding: 24px 16px 56px;
          }

          h1 {
            letter-spacing: -1px;
          }

          .hero-text {
            font-size: 16px;
          }

          .hero-actions {
            display: grid;
            grid-template-columns: 1fr;
          }

          .hero-actions a {
            text-align: center;
          }

          .trust-row {
            grid-template-columns: 1fr;
          }

          .section {
            padding: 22px;
            border-radius: 26px;
          }

          .products {
            grid-template-columns: 1fr;
          }

          .feature-card img {
            height: 170px;
          }

          .contact-box h2 {
            font-size: 28px;
          }
        }
      `}</style>

      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand">
            <div className="brand-icon">🦀</div>
            <div>
              <div className="brand-title">Crab Talk SG</div>
              <div className="brand-sub">Live Seafood Supply @ Crab Talk</div>
            </div>
          </div>

          <div className="nav-actions">
            <a className="nav-link" href="#features">Features</a>
            <a className="secondary-btn" href={mapsLink} target="_blank" rel="noopener noreferrer">
              Find Us
            </a>
            <a className="primary-btn" href={whatsappLink} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <div>
            <div className="eyebrow">Premium live seafood in Singapore</div>

            <h1>
              Live seafood, <br />
              <span className="hero-highlight">market fresh.</span>
            </h1>

            <p className="hero-text">
              Choose your live seafood from Crab Talk and enjoy it at home, or have it cooked nearby
              through our collaboration with Fai Kee. Fresh crabs, lobsters, oysters, clams and more,
              selected for customers who want quality without restaurant markups.
            </p>

            <div className="hero-actions">
              <a className="primary-btn" href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Order Now on WhatsApp
              </a>
              <a className="secondary-btn" href={mapsLink} target="_blank" rel="noopener noreferrer">
                View Google Maps
              </a>
            </div>

            <div className="trust-row">
              <div className="trust-card">
                <div className="trust-number">Live</div>
                <div className="trust-label">Crabs, lobsters and shellfish available</div>
              </div>
              <div className="trust-card">
                <div className="trust-number">2 Ways</div>
                <div className="trust-label">Home cooking or cooked by Fai Kee</div>
              </div>
              <div className="trust-card">
                <div className="trust-number">#01-41/42/43</div>
                <div className="trust-label">31 Commonwealth Crescent S(149644)</div>
              </div>
            </div>
          </div>

          <div className="hero-media">
            <div className="hero-image-wrap">
              <img
                className="hero-image"
                src={heroImages[currentHero].src}
                alt={heroImages[currentHero].title}
              />

              <div className="hero-caption">
                <h3>{heroImages[currentHero].title}</h3>
                <p>{heroImages[currentHero].text}</p>
              </div>
            </div>

            <div className="dots">
              {heroImages.map((_, index) => (
                <div
                  key={index}
                  className={`dot ${currentHero === index ? "active" : ""}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <div>
              <h2 className="section-title">Two ways to enjoy Crab Talk</h2>
              <p className="section-subtitle">
                Buy live seafood for home cooking, or choose your seafood and have it prepared by
                Fai Kee nearby.
              </p>
            </div>
            <span className="badge">Fresh arrival based</span>
          </div>

          <div className="split-grid">
            <div className="service-card">
              <h3>🏠 Home Cooking</h3>
              <p>
                Perfect for customers who enjoy steaming, grilling or preparing seafood at home.
                Choose your live seafood directly and cook it your preferred way.
              </p>

              <div className="mini-list">
                <div className="mini-item">🦀 Live mud crabs and roe crabs</div>
                <div className="mini-item">🦞 Lobsters for noodles, grilling or steaming</div>
                <div className="mini-item">🦪 Oysters, clams and seasonal shellfish</div>
                <div className="mini-item">📲 Pre-order recommended while stocks last</div>
              </div>
            </div>

            <div className="service-card">
              <h3>🍜 By Fai Kee</h3>
              <p>
                Choose your seafood at Crab Talk and enjoy cooked dishes through Fai Kee’s
                traditional hawker-style cooking. Popular choices include lobster noodles, chilli
                crab and steamed seafood.
              </p>

              <div className="mini-list">
                <div className="mini-item">🦞 Lobster Ee Fu Noodles</div>
                <div className="mini-item">🦀 Chilli crab and ginger onion crab</div>
                <div className="mini-item">🐟 Hong Kong-style steamed fish</div>
                <div className="mini-item">🔥 Cooking fee applies depending on dish</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <div>
              <h2 className="section-title">Live seafood selection</h2>
              <p className="section-subtitle">
                Availability changes based on daily arrivals. Message us to check current stock,
                sizes and prices.
              </p>
            </div>
            <span className="badge">Subject to availability</span>
          </div>

          <div className="products">
            <div className="product">
              <div className="product-icon">🦀</div>
              <h3>Live Crabs</h3>
              <p>Mud crabs, roe crabs and premium seasonal crab selections.</p>
            </div>

            <div className="product">
              <div className="product-icon">🦞</div>
              <h3>Lobsters</h3>
              <p>Boston lobster, green lobster and seasonal lobster arrivals.</p>
            </div>

            <div className="product">
              <div className="product-icon">🦪</div>
              <h3>Oysters</h3>
              <p>Fresh oysters for seafood lovers, parties and sharing.</p>
            </div>

            <div className="product">
              <div className="product-icon">🐚</div>
              <h3>Clams</h3>
              <p>Manila clams and shellfish options for steaming or stir-frying.</p>
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="section-header">
            <div>
              <h2 className="section-title">Featured stories</h2>
              <p className="section-subtitle">
                Media and creator features showing Crab Talk, Fai Kee dishes and our daily seafood
                business story.
              </p>
            </div>
            <span className="badge">In the spotlight</span>
          </div>

          <div className="features">
            <a
              className="feature-card"
              href="https://www.8days.sg/eatanddrink/hawkerfood/commonwealth-crab-talk-fai-kee-live-seafood-hawker-collab-856541"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/8days-feature.jpg" alt="8 Days Crab Talk feature" />
              <div className="feature-content">
                <h3>8 Days Feature</h3>
                <p>
                  Crab Talk × Fai Kee live seafood collaboration at Commonwealth Crescent.
                </p>
                <div className="feature-source">Read feature →</div>
              </div>
            </a>

            <a
              className="feature-card"
              href="https://www.tiktok.com/@botakjazz/video/7602204733155364116"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/botak-jazz-feature.jpg" alt="Botak Jazz Crab Talk feature" />
              <div className="feature-content">
                <h3>Botak Jazz TikTok</h3>
                <p>
                  Lobster Ee Fu Noodles and seafood experience featured by Botak Jazz.
                </p>
                <div className="feature-source">Watch video →</div>
              </div>
            </a>

            <a
              className="feature-card"
              href="https://www.facebook.com/share/v/1Djwg4h7UP/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/AI-feature.jpeg" alt="Crab seller using AI feature" />
              <div className="feature-content">
                <h3>Crab Seller Using AI</h3>
                <p>
                  A feature on how Crab Talk uses AI tools for daily business work.
                </p>
                <div className="feature-source">Watch story →</div>
              </div>
            </a>
          </div>
        </section>

        <section className="section">
          <div className="contact-box">
            <div>
              <h2>Visit Crab Talk</h2>
              <p>
                31 Commonwealth Crescent #01-41/42/43 S(149644)
                <br />
                Walk-in or pre-order recommended. Message us on WhatsApp to check today’s live
                seafood arrivals.
              </p>
            </div>

            <div className="hero-actions">
              <a className="primary-btn" href={whatsappLink} target="_blank" rel="noopener noreferrer">
                WhatsApp 9839 8671
              </a>
              <a className="secondary-btn" href={mapsLink} target="_blank" rel="noopener noreferrer">
                Open Maps
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        © Crab Talk SG · Live Seafood Supply @ Crab Talk · Commonwealth Crescent
      </footer>
    </div>
  );
}
