import React, { useEffect, useState } from "react";

const heroImages = [
  {
    src: "/images/8days-feature.jpg",
    label: "Featured on 8 Days",
    title: "Live Seafood x Hawker Cooking Collaboration",
  },
  {
    src: "/images/botak-jazz-feature.jpg",
    label: "Featured by Botak Jazz",
    title: "Lobster Ee Fu Noodles at Fai Kee",
  },
  {
    src: "/images/AI-feature.jpeg",
    label: "Featured Story",
    title: "Crab Seller Using AI for Daily Work",
  },
];

const features = [
  {
    title: "8 Days Feature",
    subtitle: "Commonwealth live seafood and hawker cooking collaboration.",
    image: "/images/8days-feature.jpg",
    link: "https://www.8days.sg/eatanddrink/hawkerfood/commonwealth-crab-talk-fai-kee-live-seafood-hawker-collab-856541",
  },
  {
    title: "Botak Jazz Feature",
    subtitle: "Lobster Ee Fu Noodles and live seafood cooked fresh.",
    image: "/images/botak-jazz-feature.jpg",
    link: "https://www.tiktok.com/@botakjazz/video/7602204733155364116",
  },
  {
    title: "AI Feature",
    subtitle: "Crab seller using AI to improve daily operations.",
    image: "/images/AI-feature.jpeg",
    link: "https://www.facebook.com/share/v/1Djwg4h7UP/",
  },
];

export default function App() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const currentHero = heroImages[activeImage];

  return (
    <div className="site">
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #031b20;
        }

        .site {
          min-height: 100vh;
          color: #ffffff;
          font-family: Arial, Helvetica, sans-serif;
          background:
            radial-gradient(circle at top left, rgba(0, 183, 255, 0.22), transparent 34%),
            radial-gradient(circle at top right, rgba(255, 184, 77, 0.14), transparent 32%),
            linear-gradient(180deg, #021b1f 0%, #062f37 45%, #03191d 100%);
        }

        .top-bar {
          width: 100%;
          padding: 12px 6%;
          background: rgba(0, 0, 0, 0.42);
          border-bottom: 1px solid rgba(159, 232, 255, 0.18);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          font-size: 14px;
          color: #d8f7ff;
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(14px);
        }

        .top-address {
          line-height: 1.4;
        }

        .top-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .nav-link {
          color: #ffffff;
          text-decoration: none;
          padding: 9px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.16);
          font-weight: 700;
          white-space: nowrap;
        }

        .nav-link.primary {
          background: linear-gradient(135deg, #00b7ff, #0078a8);
          border: none;
        }

        .hero {
          width: 100%;
          padding: 54px 6% 36px;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 42px;
          align-items: center;
          max-width: 1380px;
          margin: 0 auto;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #9fe8ff;
          background: rgba(159, 232, 255, 0.09);
          border: 1px solid rgba(159, 232, 255, 0.2);
          padding: 9px 14px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.4px;
          text-transform: uppercase;
        }

        h1 {
          font-size: clamp(42px, 7vw, 82px);
          line-height: 0.95;
          margin: 22px 0 18px;
          letter-spacing: -2.4px;
        }

        .hero-highlight {
          color: #9fe8ff;
        }

        .hero-copy {
          font-size: clamp(18px, 2.2vw, 23px);
          color: #d8f7ff;
          line-height: 1.55;
          max-width: 680px;
          margin: 0 0 28px;
        }

        .hero-buttons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 28px;
        }

        .button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          border-radius: 16px;
          padding: 16px 22px;
          font-size: 16px;
          font-weight: 900;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .button:hover {
          transform: translateY(-2px);
          opacity: 0.92;
        }

        .button.main {
          background: linear-gradient(135deg, #00b7ff, #006f9c);
          color: #ffffff;
          box-shadow: 0 14px 34px rgba(0, 183, 255, 0.22);
        }

        .button.secondary {
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.24);
          background: rgba(255, 255, 255, 0.08);
        }

        .trust-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 34px;
          max-width: 680px;
        }

        .trust-item {
          padding: 16px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.13);
        }

        .trust-number {
          display: block;
          font-size: 24px;
          font-weight: 900;
          color: #ffffff;
        }

        .trust-label {
          color: #b9eaf5;
          font-size: 13px;
          line-height: 1.35;
          margin-top: 4px;
        }

        .hero-card {
          position: relative;
          border-radius: 30px;
          overflow: hidden;
          min-height: 560px;
          background: #082c34;
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.35);
        }

        .hero-card img {
          width: 100%;
          height: 100%;
          min-height: 560px;
          object-fit: cover;
          display: block;
          filter: saturate(1.08) contrast(1.04);
        }

        .hero-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 35%, rgba(0, 0, 0, 0.82));
        }

        .hero-image-caption {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 24px;
          z-index: 2;
        }

        .hero-image-caption span {
          display: inline-block;
          background: rgba(0, 183, 255, 0.9);
          padding: 8px 12px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 900;
          margin-bottom: 10px;
        }

        .hero-image-caption h2 {
          margin: 0;
          font-size: clamp(24px, 4vw, 42px);
          line-height: 1.05;
        }

        .dots {
          position: absolute;
          right: 24px;
          top: 24px;
          display: flex;
          gap: 8px;
          z-index: 3;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.38);
        }

        .dot.active {
          background: #00b7ff;
        }

        .section {
          width: 100%;
          max-width: 1380px;
          margin: 0 auto;
          padding: 58px 6%;
        }

        .section-header {
          max-width: 780px;
          margin-bottom: 30px;
        }

        .section-kicker {
          color: #9fe8ff;
          text-transform: uppercase;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 1.4px;
          margin-bottom: 10px;
        }

        .section h2 {
          font-size: clamp(32px, 5vw, 56px);
          line-height: 1;
          margin: 0 0 14px;
          letter-spacing: -1.5px;
        }

        .section p {
          color: #c6edf5;
          line-height: 1.7;
          font-size: 17px;
        }

        .two-columns {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .service-card {
          padding: 30px;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.14);
          min-height: 360px;
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top right, rgba(0, 183, 255, 0.18), transparent 36%);
          pointer-events: none;
        }

        .service-card h3 {
          position: relative;
          font-size: 30px;
          margin: 0 0 12px;
        }

        .service-card p,
        .service-card ul {
          position: relative;
        }

        .service-card ul {
          padding-left: 20px;
          margin: 18px 0 0;
          color: #d8f7ff;
          line-height: 1.8;
          font-size: 16px;
        }

        .premium-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(159, 232, 255, 0.45), transparent);
          margin: 8px 0 22px;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .product-pill {
          padding: 22px;
          border-radius: 22px;
          background: rgba(0, 0, 0, 0.24);
          border: 1px solid rgba(255, 255, 255, 0.13);
          min-height: 130px;
        }

        .product-pill strong {
          display: block;
          font-size: 20px;
          margin-bottom: 8px;
        }

        .product-pill span {
          color: #b9eaf5;
          font-size: 14px;
          line-height: 1.5;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .feature-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.14);
          text-decoration: none;
          color: #ffffff;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          border-color: rgba(159, 232, 255, 0.55);
        }

        .feature-card img {
          width: 100%;
          height: 230px;
          object-fit: cover;
          display: block;
        }

        .feature-content {
          padding: 22px;
        }

        .feature-content h3 {
          margin: 0 0 8px;
          font-size: 23px;
        }

        .feature-content p {
          margin: 0;
          font-size: 15px;
          color: #c6edf5;
        }

        .location-box {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 24px;
          align-items: stretch;
          padding: 32px;
          border-radius: 30px;
          background:
            linear-gradient(135deg, rgba(0, 183, 255, 0.15), rgba(255, 255, 255, 0.06));
          border: 1px solid rgba(255, 255, 255, 0.16);
        }

        .location-box h3 {
          font-size: 32px;
          margin: 0 0 12px;
        }

        .address-text {
          font-size: 19px;
          line-height: 1.65;
          color: #e9fbff;
        }

        .contact-card {
          border-radius: 24px;
          background: rgba(0, 0, 0, 0.28);
          border: 1px solid rgba(255, 255, 255, 0.14);
          padding: 24px;
        }

        .contact-card strong {
          display: block;
          font-size: 22px;
          margin-bottom: 12px;
        }

        .footer {
          padding: 34px 6%;
          text-align: center;
          color: #9fcbd4;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(0, 0, 0, 0.22);
        }

        @media (max-width: 980px) {
          .hero {
            grid-template-columns: 1fr;
            padding-top: 34px;
          }

          .hero-card,
          .hero-card img {
            min-height: 420px;
          }

          .two-columns,
          .location-box {
            grid-template-columns: 1fr;
          }

          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .feature-card img {
            height: 260px;
          }
        }

        @media (max-width: 640px) {
          .top-bar {
            align-items: flex-start;
            flex-direction: column;
            padding: 12px 5%;
          }

          .top-actions {
            width: 100%;
            justify-content: flex-start;
          }

          .nav-link {
            font-size: 13px;
            padding: 8px 12px;
          }

          .hero {
            padding: 28px 5% 24px;
            gap: 28px;
          }

          h1 {
            letter-spacing: -1.6px;
          }

          .hero-copy {
            font-size: 17px;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .button {
            width: 100%;
            padding: 15px 18px;
          }

          .trust-row {
            grid-template-columns: 1fr;
          }

          .hero-card,
          .hero-card img {
            min-height: 360px;
          }

          .hero-image-caption {
            left: 18px;
            right: 18px;
            bottom: 18px;
          }

          .section {
            padding: 44px 5%;
          }

          .service-card {
            padding: 24px;
            min-height: auto;
          }

          .service-card h3 {
            font-size: 26px;
          }

          .products-grid {
            grid-template-columns: 1fr;
          }

          .feature-card img {
            height: 220px;
          }

          .location-box {
            padding: 24px;
          }

          .address-text {
            font-size: 17px;
          }
        }
      `}</style>

      <div className="top-bar">
        <div className="top-address">
          📍 31 Commonwealth Crescent #01-41/42/43 S(149644)
        </div>

        <div className="top-actions">
          <a className="nav-link" href="https://maps.app.goo.gl/1GKdK2y6jpbqfg8N8?g_st=ac" target="_blank" rel="noopener noreferrer">
            Google Maps
          </a>
          <a className="nav-link primary" href="https://wa.me/6598398671" target="_blank" rel="noopener noreferrer">
            WhatsApp Order
          </a>
        </div>
      </div>

      <section className="hero">
        <div>
          <div className="eyebrow">Live Seafood Supply @ Crab Talk</div>

          <h1>
            Premium Live Seafood,
            <br />
            <span className="hero-highlight">Fresh From Tank to Table.</span>
          </h1>

          <p className="hero-copy">
            Select live seafood for home cooking, or have your seafood cooked by
            Fai Kee at Commonwealth Crescent. Fresh, convenient, and made for
            seafood lovers who want quality without the restaurant markup.
          </p>

          <div className="hero-buttons">
            <a className="button main" href="https://wa.me/6598398671" target="_blank" rel="noopener noreferrer">
              Reserve Seafood Now
            </a>
            <a className="button secondary" href="https://maps.app.goo.gl/1GKdK2y6jpbqfg8N8?g_st=ac" target="_blank" rel="noopener noreferrer">
              Get Directions
            </a>
          </div>

          <div className="trust-row">
            <div className="trust-item">
              <span className="trust-number">Live</span>
              <div className="trust-label">Crabs, lobsters, clams, oysters and seasonal seafood.</div>
            </div>
            <div className="trust-item">
              <span className="trust-number">2 Ways</span>
              <div className="trust-label">Buy for home cooking or cook nearby with Fai Kee.</div>
            </div>
            <div className="trust-item">
              <span className="trust-number">Fresh</span>
              <div className="trust-label">Walk-in or pre-order recommended while stocks last.</div>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <div className="dots">
            {heroImages.map((_, index) => (
              <span
                key={index}
                className={index === activeImage ? "dot active" : "dot"}
              />
            ))}
          </div>

          <img src={currentHero.src} alt={currentHero.title} />

          <div className="hero-image-caption">
            <span>{currentHero.label}</span>
            <h2>{currentHero.title}</h2>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div className="section-kicker">Choose Your Experience</div>
          <h2>Home Cooking or Cooked by Fai Kee</h2>
          <p>
            Crab Talk gives customers flexibility. Buy live seafood and prepare
            it at home, or enjoy the market-style experience by having selected
            seafood cooked by Fai Kee.
          </p>
        </div>

        <div className="two-columns">
          <div className="service-card">
            <h3>Home Cooking</h3>
            <div className="premium-line"></div>
            <p>
              Perfect for families, gatherings, steamboat nights, celebrations,
              and seafood lovers who prefer cooking fresh seafood at home.
            </p>
            <ul>
              <li>Live crabs selected from tank</li>
              <li>Boston lobster and seasonal lobster options</li>
              <li>Fresh oysters, clams and shellfish</li>
              <li>Suitable for steaming, chilli crab, black pepper or hotpot</li>
              <li>Pre-order recommended for best selection</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Cooked by Fai Kee</h3>
            <div className="premium-line"></div>
            <p>
              Select your live seafood from Crab Talk and enjoy popular hawker
              cooking styles by Fai Kee at Commonwealth Crescent.
            </p>
            <ul>
              <li>Popular Lobster Ee Fu Noodles</li>
              <li>Lobster Bee Hoon</li>
              <li>Chilli crab and chilli lala</li>
              <li>Ginger onion crab, lala or fish</li>
              <li>Steamed crab, lala or fish</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div className="section-kicker">Live Seafood Selection</div>
          <h2>Fresh Arrivals, Premium Choices</h2>
          <p>
            Availability changes daily depending on arrivals. Message us before
            coming down if you are looking for specific sizes or seafood types.
          </p>
        </div>

        <div className="products-grid">
          <div className="product-pill">
            <strong>🦀 Live Crabs</strong>
            <span>Sri Lanka roe crabs, mud crabs and seasonal crab options.</span>
          </div>

          <div className="product-pill">
            <strong>🦞 Lobsters</strong>
            <span>Boston lobster, green lobster and premium seasonal lobsters.</span>
          </div>

          <div className="product-pill">
            <strong>🦪 Oysters</strong>
            <span>Fresh oysters for seafood platters and home enjoyment.</span>
          </div>

          <div className="product-pill">
            <strong>🐚 Clams</strong>
            <span>Manila clams and shellfish suitable for steaming or stir-fry.</span>
          </div>

          <div className="product-pill">
            <strong>🐟 Live Fish</strong>
            <span>Selected live fish options such as Soon Hock when available.</span>
          </div>

          <div className="product-pill">
            <strong>🔥 Hawker Cooking</strong>
            <span>Have selected seafood cooked nearby by Fai Kee.</span>
          </div>

          <div className="product-pill">
            <strong>🎁 Gatherings</strong>
            <span>Seafood suitable for family meals, parties and celebrations.</span>
          </div>

          <div className="product-pill">
            <strong>📲 Reservations</strong>
            <span>WhatsApp us to check daily arrivals and reserve seafood.</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div className="section-kicker">Featured Stories</div>
          <h2>As Seen Online</h2>
          <p>
            Media features, creator reviews and customer stories from Crab Talk
            and the Fai Kee cooking collaboration.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <a
              className="feature-card"
              href={feature.link}
              target="_blank"
              rel="noopener noreferrer"
              key={feature.title}
            >
              <img src={feature.image} alt={feature.title} />
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="location-box">
          <div>
            <div className="section-kicker">Visit Us</div>
            <h3>Crab Talk SG</h3>
            <div className="address-text">
              31 Commonwealth Crescent
              <br />
              #01-41/42/43
              <br />
              Singapore 149644
            </div>

            <div className="hero-buttons">
              <a className="button main" href="https://maps.app.goo.gl/1GKdK2y6jpbqfg8N8?g_st=ac" target="_blank" rel="noopener noreferrer">
                Open Google Maps
              </a>
              <a className="button secondary" href="https://wa.me/6598398671" target="_blank" rel="noopener noreferrer">
                WhatsApp 9839 8671
              </a>
            </div>
          </div>

          <div className="contact-card">
            <strong>Before Coming Down</strong>
            <p>
              Live seafood availability changes daily. For best selection,
              message us to check arrivals, prices and reservation options.
            </p>
            <p>
              Walk-in customers are welcome, but popular items may sell out
              quickly.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        © Crab Talk SG · Live Seafood Supply @ Crab Talk · 31 Commonwealth Crescent #01-41/42/43 S(149644)
      </footer>
    </div>
  );
}
