import React, { useEffect, useState } from "react";

const image = (name) => `/images/${name}`;

const WHATSAPP_LINK = "https://wa.me/6598398671";
const MAP_LINK = "https://maps.app.goo.gl/1GKdK2y6jpbqfg8N8?g_st=ac";
const TIKTOK_LINK = "https://www.tiktok.com/@botakjazz/video/7602204733155364116";
const EIGHT_DAYS_LINK =
  "https://www.8days.sg/eatanddrink/hawkerfood/commonwealth-crab-talk-fai-kee-live-seafood-hawker-collab-856541";
const AI_FEATURE_LINK = "https://www.facebook.com/share/v/1Djwg4h7UP/";

const heroSlides = [
  {
    title: "Premium Live Seafood, Selected Fresh Daily",
    subtitle:
      "Live crabs, lobsters, oysters, clams and seasonal premium seafood.",
    src: image("hero-live-mud-crab-closeup.jpg"),
  },
  {
    title: "Sri Lanka Roe Crabs",
    subtitle: "Rich roe, firm meat, ideal for steaming and home dining.",
    src: image("product-yellow-roe-crab-03.jpg"),
  },
  {
    title: "Live Lobsters",
    subtitle:
      "Boston lobster and green lobster options, depending on daily arrival.",
    src: image("product-boston-lobster-display.jpg"),
  },
  {
    title: "Fresh Seafood From Our Tanks",
    subtitle: "Reserve early for best availability.",
    src: image("stall-crab-talk-live-tanks.jpg"),
  },
];

const products = [
  {
    name: "Live Mud Crabs",
    desc: "Meaty, active crabs selected for home steaming, chilli crab, black pepper crab or ginger scallion crab.",
    src: image("product-live-crab-premium.jpg"),
  },
  {
    name: "Sri Lanka Roe Crabs",
    desc: "Popular for rich roe, firm meat and premium home dining occasions.",
    src: image("product-yellow-roe-crab-01.jpg"),
  },
  {
    name: "Live Lobsters",
    desc: "Boston lobster and green lobster options, depending on daily arrival.",
    src: image("product-boston-lobster-display.jpg"),
  },
  {
    name: "Fresh Oysters",
    desc: "Cold, clean and suitable for seafood platters or weekend gatherings.",
    src: image("product-oysters-premium-01.jpg"),
  },
  {
    name: "Manila Clams",
    desc: "Great for steaming, chilli lala, white wine style or soup.",
    src: image("product-manila-clams-01.jpg"),
  },
  {
    name: "Live Soon Hock & Premium Fish",
    desc: "Live fish options suitable for steaming, Hong Kong style cooking or home preparation.",
    src: image("product-live-soon-hock-tank.jpg"),
  },
];

const homeCooking = [
  {
    title: "Choose Live Seafood",
    text: "Pick from live crabs, lobsters, oysters, clams and seasonal seafood arrivals.",
    src: image("product-live-crab-closeup-01.jpg"),
  },
  {
    title: "Reserve Before Coming",
    text: "Availability changes daily. WhatsApp us to reserve before making a trip down.",
    src: image("product-live-green-lobster-01.jpg"),
  },
  {
    title: "Cook Your Way At Home",
    text: "Steam, wok-fry, make seafood bee hoon, chilli crab or simple family-style dishes.",
    src: image("dish-steamed-crab-01.jpg"),
  },
];

const optionalCookedIdeas = [
  {
    title: "Lobster Yee Mee",
    text: "One of the most requested cooked dishes when kitchen slots are available.",
    src: image("dish-lobster-yee-mee-fai-kee-hero.jpg"),
  },
  {
    title: "Steamed Soon Hock",
    text: "Hong Kong style steaming for those who prefer a cooked seafood option.",
    src: image("dish-steamed-soon-hock-fai-kee.jpg"),
  },
  {
    title: "Seafood Hor Fun",
    text: "A familiar cooked option for customers who want hawker-style seafood dishes.",
    src: image("dish-seafood-hor-fun-fai-kee.jpg"),
  },
];

const features = [
  {
    title: "Featured on 8 Days",
    desc: "Crab Talk and its live seafood concept featured by 8 Days.",
    src: image("8days-feature.jpg"),
    link: EIGHT_DAYS_LINK,
  },
  {
    title: "Botak Jazz TikTok Feature",
    desc: "Live seafood and lobster dishes featured by Botak Jazz.",
    src: image("botak-jazz-feature.jpg"),
    link: TIKTOK_LINK,
  },
  {
    title: "Crab Seller Using AI",
    desc: "A feature story about using AI for daily live seafood work.",
    src: image("AI-feature.jpeg"),
    link: AI_FEATURE_LINK,
  },
];

const gallery = [
  {
    title: "Chilli Crab",
    src: image("dish-chilli-crab-rich-sauce.jpg"),
  },
  {
    title: "Black Pepper Crab",
    src: image("dish-black-pepper-crab-premium.jpg"),
  },
  {
    title: "Ginger Scallion Crab",
    src: image("dish-ginger-scallion-crab.jpg"),
  },
  {
    title: "Lobster Bee Hoon",
    src: image("dish-lobster-bee-hoon-fai-kee-01.jpg"),
  },
  {
    title: "Har Lok Prawns",
    src: image("dish-har-lok-prawns.jpg"),
  },
  {
    title: "Fresh Oysters",
    src: image("product-oysters-closeup-01.jpg"),
  },
];

function PhotoBox({ src, alt, className = "" }) {
  return (
    <div className={`photoBox ${className}`}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}

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
    <div className="site">
      <style>{`
        :root {
          --deep: #021b1f;
          --deep2: #062a33;
          --panel: rgba(255,255,255,0.07);
          --panel2: rgba(255,255,255,0.10);
          --line: rgba(255,255,255,0.12);
          --text: #f7fbff;
          --muted: rgba(247,251,255,0.72);
          --aqua: #91eeff;
          --gold: #d6a84f;
          --gold2: #f2d284;
          --shadow: 0 18px 45px rgba(0,0,0,0.22);
          --radius: 24px;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--deep);
        }

        .site {
          min-height: 100vh;
          color: var(--text);
          font-family: Arial, Helvetica, sans-serif;
          background:
            radial-gradient(circle at top left, rgba(145,238,255,0.14), transparent 30%),
            radial-gradient(circle at top right, rgba(214,168,79,0.10), transparent 28%),
            linear-gradient(180deg, #021b1f 0%, #062b33 48%, #021b1f 100%);
          overflow-x: hidden;
        }

        .container {
          width: min(1120px, calc(100% - 32px));
          margin: 0 auto;
        }

        .topBar {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(16px);
          background: rgba(2, 27, 31, 0.82);
          border-bottom: 1px solid var(--line);
        }

        .nav {
          min-height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: var(--text);
        }

        .brandMark {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--aqua), var(--gold));
          box-shadow: 0 0 24px rgba(145,238,255,0.20);
        }

        .brandName {
          font-size: 20px;
          font-weight: 900;
          letter-spacing: -0.03em;
        }

        .brandSub {
          margin-top: 2px;
          color: var(--muted);
          font-size: 11px;
        }

        .navLinks {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 13px;
          white-space: nowrap;
        }

        .navLinks a {
          color: rgba(255,255,255,0.78);
          text-decoration: none;
        }

        .navLinks a:hover {
          color: white;
        }

        .navCta {
          padding: 10px 16px;
          border-radius: 999px;
          background: linear-gradient(135deg, #23d8ff, #178ab7);
          color: white !important;
          font-weight: 800;
          box-shadow: 0 10px 22px rgba(35,216,255,0.14);
        }

        .hero {
          padding: 32px 0 22px;
        }

        .heroGrid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 24px;
          align-items: center;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border: 1px solid rgba(214,168,79,0.38);
          color: var(--gold2);
          border-radius: 999px;
          background: rgba(214,168,79,0.08);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        h1 {
          margin: 16px 0 14px;
          font-size: clamp(34px, 5vw, 62px);
          line-height: 0.98;
          letter-spacing: -0.06em;
        }

        .heroLead {
          color: rgba(255,255,255,0.78);
          font-size: clamp(15px, 1.8vw, 18px);
          line-height: 1.65;
          max-width: 560px;
        }

        .addressLine {
          margin-top: 16px;
          color: rgba(255,255,255,0.86);
          font-size: 14px;
          line-height: 1.55;
        }

        .buttonRow {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 22px;
        }

        .btn {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          min-height: 46px;
          padding: 12px 18px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 800;
          border: 1px solid var(--line);
          font-size: 14px;
        }

        .btnPrimary {
          background: linear-gradient(135deg, #25d9ff, #087eac);
          color: white;
          box-shadow: 0 14px 28px rgba(37,217,255,0.15);
        }

        .btnSecondary {
          background: rgba(255,255,255,0.07);
          color: white;
        }

        .heroCard {
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 28px;
          background: linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.05));
          box-shadow: var(--shadow);
          padding: 14px;
        }

        .heroPhoto {
          height: clamp(220px, 26vw, 340px);
          border-radius: 20px;
        }

        .heroCaption {
          display: flex;
          justify-content: space-between;
          gap: 14px;
          align-items: flex-end;
          padding: 14px 4px 2px;
        }

        .heroCaption h2 {
          margin: 0 0 6px;
          font-size: clamp(20px, 2.8vw, 30px);
          letter-spacing: -0.045em;
        }

        .heroCaption p {
          margin: 0;
          color: var(--muted);
          line-height: 1.5;
          font-size: 14px;
        }

        .slideDots {
          display: flex;
          gap: 7px;
          flex-shrink: 0;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.25);
          border: none;
          cursor: pointer;
        }

        .dot.active {
          background: var(--gold2);
        }

        .quickStrip {
          margin-top: 22px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .quickItem {
          border: 1px solid var(--line);
          border-radius: 18px;
          padding: 14px 16px;
          background: rgba(255,255,255,0.06);
        }

        .quickItem strong {
          display: block;
          font-size: 18px;
          margin-bottom: 4px;
        }

        .quickItem span {
          color: var(--muted);
          font-size: 12px;
          line-height: 1.4;
        }

        section {
          padding: 42px 0;
        }

        .sectionHead {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 18px;
          margin-bottom: 18px;
        }

        .sectionHead h2 {
          margin: 0;
          font-size: clamp(26px, 3.4vw, 40px);
          letter-spacing: -0.05em;
        }

        .sectionHead p {
          margin: 0;
          color: var(--muted);
          line-height: 1.55;
          max-width: 500px;
          font-size: 14px;
        }

        .grid3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .card {
          overflow: hidden;
          border-radius: var(--radius);
          border: 1px solid var(--line);
          background: linear-gradient(180deg, rgba(255,255,255,0.095), rgba(255,255,255,0.05));
          box-shadow: 0 12px 30px rgba(0,0,0,0.18);
        }

        .cardBody {
          padding: 18px;
        }

        .card h3 {
          margin: 0 0 8px;
          font-size: clamp(18px, 2vw, 24px);
          letter-spacing: -0.035em;
        }

        .card p {
          margin: 0;
          color: var(--muted);
          line-height: 1.55;
          font-size: 14px;
        }

        .photoBox {
          width: 100%;
          background:
            radial-gradient(circle at center, rgba(145,238,255,0.10), transparent 48%),
            linear-gradient(135deg, #071f25, #0d333c);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .photoBox img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          display: block;
        }

        .productPhoto {
          height: 200px;
        }

        .featurePhoto {
          height: 190px;
        }

        .galleryPhoto {
          height: 220px;
        }

        .processPhoto {
          height: 200px;
        }

        .premiumPanel {
          border: 1px solid rgba(214,168,79,0.24);
          border-radius: 28px;
          padding: clamp(20px, 3vw, 34px);
          background:
            linear-gradient(135deg, rgba(214,168,79,0.10), rgba(145,238,255,0.06)),
            rgba(255,255,255,0.04);
          box-shadow: var(--shadow);
        }

        .splitPanel {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 20px;
          align-items: center;
        }

        .splitPanel h2 {
          margin: 0 0 12px;
          font-size: clamp(26px, 3.6vw, 42px);
          letter-spacing: -0.05em;
        }

        .splitPanel p {
          color: var(--muted);
          line-height: 1.62;
          margin: 0 0 14px;
          font-size: 14px;
        }

        .smallNote {
          color: rgba(255,255,255,0.60);
          font-size: 12px;
          line-height: 1.5;
          margin-top: 12px;
        }

        .featureCard {
          text-decoration: none;
          color: white;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .featureCard:hover {
          transform: translateY(-3px);
          border-color: rgba(214,168,79,0.48);
        }

        .tag {
          display: inline-flex;
          margin-bottom: 10px;
          padding: 6px 9px;
          border-radius: 999px;
          background: rgba(214,168,79,0.14);
          color: var(--gold2);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .galleryCard .cardBody {
          padding: 14px 16px 16px;
        }

        .footer {
          padding: 34px 0;
          border-top: 1px solid var(--line);
          background: rgba(0,0,0,0.16);
        }

        .footerGrid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 24px;
          align-items: center;
        }

        .footer h2 {
          margin: 0 0 8px;
          font-size: clamp(24px, 3vw, 34px);
          letter-spacing: -0.05em;
        }

        .footer p {
          margin: 0;
          color: var(--muted);
          line-height: 1.55;
          font-size: 14px;
        }

        .footerActions {
          display: flex;
          justify-content: flex-end;
          flex-wrap: wrap;
          gap: 10px;
        }

        @media (max-width: 920px) {
          .nav {
            flex-direction: column;
            align-items: flex-start;
            padding: 14px 0;
            gap: 12px;
          }

          .navLinks {
            width: 100%;
            overflow-x: auto;
            padding-bottom: 4px;
          }

          .heroGrid,
          .splitPanel,
          .footerGrid {
            grid-template-columns: 1fr;
          }

          .quickStrip {
            grid-template-columns: repeat(2, 1fr);
          }

          .grid3 {
            grid-template-columns: repeat(2, 1fr);
          }

          .sectionHead {
            display: block;
          }

          .sectionHead p {
            margin-top: 10px;
          }

          .footerActions {
            justify-content: flex-start;
          }
        }

        @media (max-width: 620px) {
          .container {
            width: min(100% - 22px, 1120px);
          }

          .brandName {
            font-size: 18px;
          }

          .hero {
            padding: 24px 0 14px;
          }

          h1 {
            font-size: 34px;
          }

          .heroPhoto {
            height: 210px;
            border-radius: 18px;
          }

          .heroCard {
            padding: 10px;
            border-radius: 22px;
          }

          .heroCaption {
            display: block;
            padding: 12px 2px 2px;
          }

          .slideDots {
            margin-top: 10px;
          }

          .quickStrip,
          .grid3 {
            grid-template-columns: 1fr;
          }

          .productPhoto,
          .featurePhoto,
          .galleryPhoto,
          .processPhoto {
            height: 190px;
          }

          .cardBody {
            padding: 16px;
          }

          section {
            padding: 34px 0;
          }

          .buttonRow {
            flex-direction: column;
          }

          .btn {
            width: 100%;
          }
        }
      `}</style>

      <header className="topBar">
        <div className="container nav">
          <a className="brand" href="#home">
            <span className="brandMark" />
            <span>
              <span className="brandName">Crab Talk SG</span>
              <span className="brandSub">Live Seafood Supply @ Crab Talk</span>
            </span>
          </a>

          <nav className="navLinks">
            <a href="#seafood">Seafood</a>
            <a href="#home-cooking">Home Cooking</a>
            <a href="#features">Features</a>
            <a href="#location">Location</a>
            <a
              className="navCta"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Order
            </a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="container heroGrid">
            <div>
              <span className="eyebrow">Premium Live Seafood Counter</span>

              <h1>Fresh live seafood for home dining and serious seafood lovers.</h1>

              <p className="heroLead">
                Crab Talk SG supplies live crabs, roe crabs, lobsters, oysters,
                clams and premium seafood for home cooking, family gatherings and
                weekend seafood feasts.
              </p>

              <p className="addressLine">
                <strong>31 Commonwealth Crescent #01-41/42/43 S(149644)</strong>
                <br />
                Walk-in available. Pre-order recommended due to limited daily stock.
              </p>

              <div className="buttonRow">
                <a
                  className="btn btnPrimary"
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                >
                  Reserve on WhatsApp
                </a>
                <a
                  className="btn btnSecondary"
                  href={MAP_LINK}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Google Maps
                </a>
              </div>
            </div>

            <div className="heroCard">
              <PhotoBox
                src={currentHero.src}
                alt={currentHero.title}
                className="heroPhoto"
              />

              <div className="heroCaption">
                <div>
                  <h2>{currentHero.title}</h2>
                  <p>{currentHero.subtitle}</p>
                </div>

                <div className="slideDots">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${index === activeSlide ? "active" : ""}`}
                      onClick={() => setActiveSlide(index)}
                      aria-label={`Show slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="container quickStrip">
            <div className="quickItem">
              <strong>Fresh</strong>
              <span>Daily live seafood arrivals</span>
            </div>
            <div className="quickItem">
              <strong>Premium</strong>
              <span>Selected quality seafood</span>
            </div>
            <div className="quickItem">
              <strong>Home</strong>
              <span>Ideal for home cooking</span>
            </div>
            <div className="quickItem">
              <strong>Reserve</strong>
              <span>WhatsApp before coming down</span>
            </div>
          </div>
        </section>

        <section id="seafood">
          <div className="container">
            <div className="sectionHead">
              <h2>Live seafood selection</h2>
              <p>
                Availability changes by shipment. Contact us for today’s sizes,
                pricing and reservation before visiting.
              </p>
            </div>

            <div className="grid3">
              {products.map((item) => (
                <article className="card" key={item.name}>
                  <PhotoBox src={item.src} alt={item.name} className="productPhoto" />
                  <div className="cardBody">
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="home-cooking">
          <div className="container premiumPanel">
            <div className="sectionHead">
              <div>
                <span className="tag">Main Focus</span>
                <h2>Buy live seafood for home cooking</h2>
              </div>
              <p>
                Choose your seafood, reserve your preferred size and cook it your
                way at home. Best for families who want fresher seafood with more control.
              </p>
            </div>

            <div className="grid3">
              {homeCooking.map((item) => (
                <article className="card" key={item.title}>
                  <PhotoBox src={item.src} alt={item.title} className="processPhoto" />
                  <div className="cardBody">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cooked-ideas">
          <div className="container">
            <div className="sectionHead">
              <h2>Optional cooked ideas</h2>
              <p>
                For customers who prefer cooked seafood, selected dishes may be available nearby,
                subject to kitchen capacity and timing.
              </p>
            </div>

            <div className="grid3">
              {optionalCookedIdeas.map((item) => (
                <article className="card" key={item.title}>
                  <PhotoBox src={item.src} alt={item.title} className="processPhoto" />
                  <div className="cardBody">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="features">
          <div className="container">
            <div className="sectionHead">
              <h2>Featured stories</h2>
              <p>
                Crab Talk has been featured for its live seafood concept, seafood dishes
                and the use of AI in daily work.
              </p>
            </div>

            <div className="grid3">
              {features.map((item) => (
                <a
                  className="card featureCard"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  key={item.title}
                >
                  <PhotoBox src={item.src} alt={item.title} className="featurePhoto" />
                  <div className="cardBody">
                    <span className="tag">Media Feature</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="sectionHead">
              <h2>Popular seafood ideas</h2>
              <p>
                Inspiration for your next seafood meal. Actual items and sizes depend on daily stock.
              </p>
            </div>

            <div className="grid3">
              {gallery.map((item) => (
                <article className="card galleryCard" key={item.title}>
                  <PhotoBox src={item.src} alt={item.title} className="galleryPhoto" />
                  <div className="cardBody">
                    <h3>{item.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="location">
          <div className="container premiumPanel">
            <div className="splitPanel">
              <div>
                <span className="tag">Visit Us</span>
                <h2>Commonwealth Crescent Market</h2>
                <p>
                  <strong>Crab Talk SG</strong>
                  <br />
                  31 Commonwealth Crescent #01-41/42/43 S(149644)
                </p>
                <p>
                  Walk-in is welcome, but seafood stock moves quickly. For best
                  sizes and availability, reserve by WhatsApp before coming down.
                </p>

                <div className="buttonRow">
                  <a
                    className="btn btnPrimary"
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp 9839 8671
                  </a>
                  <a
                    className="btn btnSecondary"
                    href={MAP_LINK}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              <PhotoBox
                src={image("stall-crab-talk-front-01.jpg")}
                alt="Crab Talk stall front"
                className="galleryPhoto"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerGrid">
          <div>
            <h2>Crab Talk SG</h2>
            <p>
              Live Seafood Supply @ Crab Talk. Fresh live seafood for home cooking,
              gatherings and seafood lovers in Singapore.
            </p>
          </div>

          <div className="footerActions">
            <a
              className="btn btnPrimary"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
            >
              Order on WhatsApp
            </a>
            <a
              className="btn btnSecondary"
              href={MAP_LINK}
              target="_blank"
              rel="noreferrer"
            >
              Google Maps
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
