import React, { useEffect, useState } from "react";

const IMG = "/images/";

const heroSlides = [
  {
    image: "hero-live-mud-crab-closeup.jpg",
    title: "Premium Live Seafood, Selected Fresh Daily",
    subtitle:
      "Live crabs, lobsters, oysters, clams and premium fish from Crab Talk SG.",
  },
  {
    image: "product-yellow-roe-crab-06.jpg",
    title: "Sri Lanka Roe Crabs",
    subtitle: "Rich roe, firm meat, and ideal for premium home dining.",
  },
  {
    image: "dish-lobster-yee-mee-fai-kee-hero.jpg",
    title: "Live Seafood, Cooked Your Way",
    subtitle:
      "Buy live seafood for home cooking, or ask us about nearby cooking options.",
  },
];

const products = [
  {
    title: "Live Mud Crabs",
    image: "product-live-crab-premium.jpg",
    text: "Meaty, active crabs suitable for steaming, chilli crab, black pepper crab or ginger scallion crab.",
  },
  {
    title: "Sri Lanka Roe Crabs",
    image: "product-yellow-roe-crab-06.jpg",
    text: "Popular for rich roe, firm meat and premium seafood occasions.",
  },
  {
    title: "Live Lobsters",
    image: "product-boston-lobster-display.jpg",
    text: "Boston lobster and green lobster options, depending on daily arrival.",
  },
  {
    title: "Fresh Oysters",
    image: "product-oysters-premium-01.jpg",
    text: "Cold, clean and suitable for seafood platters or weekend gatherings.",
  },
  {
    title: "Manila Clams",
    image: "product-manila-clams-01.jpg",
    text: "Great for steaming, chilli lala, white wine style or soup.",
  },
  {
    title: "Live Soon Hock & Premium Fish",
    image: "product-live-soon-hock-premium-fish.jpg",
    fallback: "product-live-soon-hock-01.jpg",
    text: "Live fish options for home steaming, Hong Kong style cooking or special meals.",
  },
];

const features = [
  {
    title: "Featured on 8 Days",
    image: "feature-8days-original-thumbnail.jpg",
    link: "https://www.8days.sg/eatanddrink/hawkerfood/commonwealth-crab-talk-fai-kee-live-seafood-hawker-collab-856541",
    text: "Crab Talk SG was featured for our live seafood and nearby cooking collaboration.",
  },
  {
    title: "Featured by Botak Jazz",
    image: "feature-botak-jazz-tiktok.jpg",
    link: "https://www.tiktok.com/@botakjazz/video/7602204733155364116",
    text: "Popular TikTok feature highlighting lobster yee mee and the Crab Talk experience.",
  },
  {
    title: "Crab Seller Using AI",
    image: "AI-feature.jpeg",
    link: "https://www.facebook.com/share/v/1Djwg4h7UP/",
    text: "A feature story about how Crab Talk uses AI tools for daily business work.",
  },
];

const dishes = [
  {
    title: "Lobster Yee Mee",
    image: "dish-lobster-yee-mee-01.jpg",
    text: "A popular cooked dish option when available.",
  },
  {
    title: "Chilli Crab",
    image: "dish-chilli-crab-premium.jpg",
    text: "A classic Singapore seafood favourite.",
  },
  {
    title: "Ginger Scallion Crab",
    image: "dish-ginger-scallion-crab.jpg",
    text: "Fragrant, savoury and great with live crab.",
  },
];

function ImageCard({ item }) {
  return (
    <article className="card">
      <div className="imageFrame">
        <img
          src={`${IMG}${item.image}`}
          alt={item.title}
          loading="lazy"
          onError={(e) => {
            if (item.fallback) {
              e.currentTarget.src = `${IMG}${item.fallback}`;
            }
          }}
        />
      </div>
      <div className="cardBody">
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
    </article>
  );
}

export default function App() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((current) => (current + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const currentHero = heroSlides[slide];

  return (
    <main>
      <style>{`
        :root {
          --navy: #061f2a;
          --deep: #021116;
          --teal: #0b5361;
          --aqua: #8ceeff;
          --gold: #f6c65b;
          --white: #ffffff;
          --muted: #b9ced4;
          --card: rgba(255, 255, 255, 0.065);
          --border: rgba(255, 255, 255, 0.15);
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
            radial-gradient(circle at top left, rgba(19, 120, 138, 0.45), transparent 34%),
            linear-gradient(180deg, #031217 0%, #061f2a 46%, #02090c 100%);
          color: var(--white);
          font-family: Arial, Helvetica, sans-serif;
        }

        main {
          min-height: 100vh;
          overflow-x: hidden;
        }

        a {
          color: inherit;
        }

        .topBar {
          position: sticky;
          top: 0;
          z-index: 20;
          backdrop-filter: blur(16px);
          background: rgba(2, 17, 22, 0.88);
          border-bottom: 1px solid var(--border);
        }

        .nav {
          max-width: 1180px;
          margin: 0 auto;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .brand {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .brand strong {
          font-size: 20px;
          letter-spacing: 0.4px;
        }

        .brand span {
          font-size: 12px;
          color: var(--muted);
        }

        .navLinks {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 14px;
          color: #d9f6fb;
        }

        .navLinks a {
          text-decoration: none;
          opacity: 0.88;
        }

        .navLinks a:hover {
          opacity: 1;
          color: var(--aqua);
        }

        .hero {
          max-width: 1180px;
          margin: 0 auto;
          padding: 30px 20px 20px;
        }

        .heroGrid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 28px;
          align-items: center;
        }

        .eyebrow {
          color: var(--gold);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 14px;
        }

        h1 {
          font-size: clamp(36px, 5vw, 68px);
          line-height: 0.96;
          margin: 0 0 18px;
          letter-spacing: -2.2px;
        }

        .heroText {
          color: #d0e8ed;
          font-size: clamp(16px, 2vw, 20px);
          line-height: 1.65;
          max-width: 620px;
          margin-bottom: 24px;
        }

        .address {
          color: #eafcff;
          font-size: 15px;
          line-height: 1.5;
          margin-bottom: 26px;
        }

        .ctaRow {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          padding: 13px 18px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 800;
          font-size: 14px;
          border: 1px solid transparent;
          transition: 0.2s ease;
        }

        .btnPrimary {
          background: linear-gradient(135deg, #00b8ff, #00e0c7);
          color: #021116;
          box-shadow: 0 14px 34px rgba(0, 184, 255, 0.22);
        }

        .btnSecondary {
          border-color: var(--border);
          color: #e9fbff;
          background: rgba(255, 255, 255, 0.05);
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .heroMedia {
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 30px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.35);
        }

        .heroImage {
          width: 100%;
          height: clamp(260px, 35vw, 430px);
          object-fit: contain;
          background: #071a20;
          display: block;
        }

        .heroCaption {
          padding: 18px 20px 20px;
          background: linear-gradient(180deg, rgba(5, 35, 43, 0.8), rgba(2, 14, 18, 0.95));
        }

        .heroCaption h2 {
          margin: 0 0 8px;
          font-size: clamp(20px, 2.5vw, 30px);
        }

        .heroCaption p {
          margin: 0;
          color: var(--muted);
          line-height: 1.5;
          font-size: 15px;
        }

        .slideDots {
          display: flex;
          gap: 7px;
          margin-top: 14px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.28);
        }

        .dot.active {
          background: var(--gold);
        }

        section {
          max-width: 1180px;
          margin: 0 auto;
          padding: 42px 20px;
        }

        .sectionHead {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 20px;
        }

        .sectionHead h2 {
          font-size: clamp(28px, 4vw, 46px);
          margin: 0;
          letter-spacing: -1.2px;
        }

        .sectionHead p {
          margin: 0;
          color: var(--muted);
          max-width: 500px;
          line-height: 1.55;
          font-size: 15px;
        }

        .productGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 18px 55px rgba(0, 0, 0, 0.22);
        }

        .imageFrame {
          width: 100%;
          height: 220px;
          background: #06181f;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .imageFrame img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 6px;
          display: block;
        }

        .cardBody {
          padding: 18px 20px 20px;
        }

        .cardBody h3 {
          margin: 0 0 10px;
          font-size: 22px;
          letter-spacing: -0.4px;
        }

        .cardBody p {
          margin: 0;
          color: var(--muted);
          line-height: 1.55;
          font-size: 15px;
        }

        .split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .serviceBox {
          border-radius: 26px;
          padding: 26px;
          border: 1px solid var(--border);
          background:
            linear-gradient(135deg, rgba(12, 87, 100, 0.35), rgba(255, 255, 255, 0.045));
        }

        .serviceBox h3 {
          font-size: 25px;
          margin: 0 0 12px;
        }

        .serviceBox p {
          color: var(--muted);
          line-height: 1.65;
          margin: 0 0 14px;
          font-size: 15px;
        }

        .serviceBox ul {
          margin: 0;
          padding-left: 18px;
          color: #d9eff3;
          line-height: 1.75;
          font-size: 15px;
        }

        .featureGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .featureCard {
          text-decoration: none;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 24px;
          overflow: hidden;
          transition: 0.2s ease;
        }

        .featureCard:hover {
          transform: translateY(-3px);
          border-color: rgba(246, 198, 91, 0.55);
        }

        .featureCard .imageFrame {
          height: 190px;
        }

        .featureCard h3 {
          margin: 0 0 8px;
          font-size: 20px;
        }

        .featureCard p {
          margin: 0;
          color: var(--muted);
          line-height: 1.5;
          font-size: 14px;
        }

        .dishGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .noteBox {
          margin-top: 20px;
          padding: 18px 20px;
          border-radius: 20px;
          border: 1px solid rgba(246, 198, 91, 0.35);
          background: rgba(246, 198, 91, 0.08);
          color: #fff3cf;
          line-height: 1.55;
          font-size: 14px;
        }

        .footer {
          max-width: 1180px;
          margin: 0 auto;
          padding: 42px 20px 70px;
        }

        .footerBox {
          border: 1px solid var(--border);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));
          border-radius: 30px;
          padding: 28px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 24px;
          align-items: center;
        }

        .footer h2 {
          margin: 0 0 10px;
          font-size: clamp(28px, 4vw, 44px);
        }

        .footer p {
          margin: 0;
          color: var(--muted);
          line-height: 1.6;
        }

        .footerActions {
          display: flex;
          justify-content: flex-end;
          flex-wrap: wrap;
          gap: 12px;
        }

        @media (max-width: 980px) {
          .heroGrid {
            grid-template-columns: 1fr;
          }

          .productGrid,
          .featureGrid,
          .dishGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .sectionHead {
            align-items: flex-start;
            flex-direction: column;
          }

          .footerBox {
            grid-template-columns: 1fr;
          }

          .footerActions {
            justify-content: flex-start;
          }
        }

        @media (max-width: 680px) {
          .nav {
            align-items: flex-start;
            flex-direction: column;
            padding: 12px 16px;
          }

          .navLinks {
            width: 100%;
            overflow-x: auto;
            padding-bottom: 4px;
            gap: 14px;
            font-size: 13px;
          }

          .hero {
            padding: 22px 16px 10px;
          }

          .heroGrid {
            gap: 20px;
          }

          .heroImage {
            height: 260px;
          }

          .heroMedia {
            border-radius: 24px;
          }

          section {
            padding: 34px 16px;
          }

          .productGrid,
          .featureGrid,
          .dishGrid,
          .split {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .imageFrame {
            height: 205px;
          }

          .featureCard .imageFrame {
            height: 200px;
          }

          .cardBody {
            padding: 16px 17px 18px;
          }

          .cardBody h3 {
            font-size: 20px;
          }

          .serviceBox {
            padding: 22px;
          }

          .ctaRow,
          .footerActions {
            flex-direction: column;
          }

          .btn {
            width: 100%;
          }
        }
      `}</style>

      <header className="topBar">
        <nav className="nav">
          <div className="brand">
            <strong>🦀 Crab Talk SG</strong>
            <span>Live Seafood Supply @ Crab Talk</span>
          </div>

          <div className="navLinks">
            <a href="#seafood">Seafood</a>
            <a href="#home-cooking">Home Cooking</a>
            <a href="#features">Features</a>
            <a href="#location">Location</a>
          </div>
        </nav>
      </header>

      <section className="hero">
        <div className="heroGrid">
          <div>
            <div className="eyebrow">Live seafood · Commonwealth Crescent</div>
            <h1>Premium live seafood for serious home cooks.</h1>
            <p className="heroText">
              Choose live crabs, lobsters, oysters, clams and premium fish
              directly from Crab Talk SG. Suitable for home cooking, family
              gatherings, special meals and seafood lovers who want freshness
              before anything else.
            </p>

            <div className="address">
              <strong>Address:</strong>
              <br />
              31 Commonwealth Crescent #01-41/42/43 Singapore 149644
            </div>

            <div className="ctaRow">
              <a
                className="btn btnPrimary"
                href="https://wa.me/6598398671"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp to Reserve
              </a>
              <a
                className="btn btnSecondary"
                href="https://maps.app.goo.gl/1GKdK2y6jpbqfg8N8?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Google Maps
              </a>
            </div>
          </div>

          <div className="heroMedia">
            <img
              className="heroImage"
              src={`${IMG}${currentHero.image}`}
              alt={currentHero.title}
            />
            <div className="heroCaption">
              <h2>{currentHero.title}</h2>
              <p>{currentHero.subtitle}</p>

              <div className="slideDots">
                {heroSlides.map((_, index) => (
                  <span
                    key={index}
                    className={index === slide ? "dot active" : "dot"}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="seafood">
        <div className="sectionHead">
          <h2>Fresh Daily Selection</h2>
          <p>
            Availability changes by daily arrival. Walk in or message us early
            to reserve preferred sizes and items.
          </p>
        </div>

        <div className="productGrid">
          {products.map((item) => (
            <ImageCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section id="home-cooking">
        <div className="sectionHead">
          <h2>Best for Home Cooking</h2>
          <p>
            Our main focus is supplying live seafood for customers who want to
            cook fresh seafood at home.
          </p>
        </div>

        <div className="split">
          <div className="serviceBox">
            <h3>Home Cooking</h3>
            <p>
              Pick your live seafood, bring it home, and cook it your own way.
              This is ideal for families, gatherings, steamboat, steaming,
              chilli crab, black pepper crab and seafood platters.
            </p>
            <ul>
              <li>Live crabs and lobsters</li>
              <li>Fresh oysters and clams</li>
              <li>Premium live fish when available</li>
              <li>Reservation recommended for popular items</li>
            </ul>
          </div>

          <div className="serviceBox">
            <h3>Nearby Cooking Option</h3>
            <p>
              For customers who prefer not to cook at home, nearby cooking
              options may be available depending on timing and kitchen capacity.
              Please check with us before coming down.
            </p>
            <ul>
              <li>Subject to availability</li>
              <li>Best to pre-check timing</li>
              <li>Cooking fees apply separately</li>
              <li>Home cooking remains the recommended option during peak demand</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="sectionHead">
          <h2>Popular Ways to Enjoy</h2>
          <p>
            Some cooked seafood examples customers commonly ask about. Final
            availability depends on seafood arrival and cooking capacity.
          </p>
        </div>

        <div className="dishGrid">
          {dishes.map((item) => (
            <ImageCard key={item.title} item={item} />
          ))}
        </div>

        <div className="noteBox">
          Note: Crab Talk SG focuses on live seafood supply. Cooking service is
          separate and subject to availability, queue, operating hours and
          kitchen capacity.
        </div>
      </section>

      <section id="features">
        <div className="sectionHead">
          <h2>Featured Stories</h2>
          <p>
            Media and creator features highlighting Crab Talk SG, our seafood,
            and the way we serve customers.
          </p>
        </div>

        <div className="featureGrid">
          {features.map((feature) => (
            <a
              className="featureCard"
              key={feature.title}
              href={feature.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="imageFrame">
                <img src={`${IMG}${feature.image}`} alt={feature.title} />
              </div>
              <div className="cardBody">
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer id="location" className="footer">
        <div className="footerBox">
          <div>
            <h2>Visit Crab Talk SG</h2>
            <p>
              31 Commonwealth Crescent #01-41/42/43 Singapore 149644
              <br />
              For reservations and today’s seafood availability, WhatsApp us
              before coming down.
            </p>
          </div>

          <div className="footerActions">
            <a
              className="btn btnPrimary"
              href="https://wa.me/6598398671"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp 9839 8671
            </a>
            <a
              className="btn btnSecondary"
              href="https://maps.app.goo.gl/1GKdK2y6jpbqfg8N8?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
