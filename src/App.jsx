import { useEffect, useState } from "react";

const img = (file) => `/images/${file}`;

const whatsappLink = "https://wa.me/6598398671";
const telegramLink = "https://t.me/CrabTalkSG";
const mapsLink = "https://maps.app.goo.gl/1GKdK2y6jpbqfg8N8?g_st=ac";

const heroSlides = [
  {
    image: "hero-live-mud-crab-closeup.jpg",
    eyebrow: "Live Seafood Supply @ Crab Talk",
    title: "Premium live seafood, selected fresh from the tank.",
    text: "Choose live crabs, lobsters, oysters, clams and seasonal seafood for home cooking or have them cooked nearby with Fai Kee.",
  },
  {
    image: "product-yellow-roe-crab-01.jpg",
    eyebrow: "Signature Live Crabs",
    title: "Sri Lanka Roe Crabs, Mud Crabs & premium seasonal arrivals.",
    text: "Reserve early for better size selection. Availability changes daily depending on live stock.",
  },
  {
    image: "dish-lobster-yee-mee-fai-kee-hero.jpg",
    eyebrow: "Crab Talk × Fai Kee",
    title: "Buy live seafood here. Enjoy it cooked nearby.",
    text: "Popular dishes include Lobster Yee Mee, Crab Bee Hoon, Chilli Crab, Black Bean Crab and Steamed Seafood.",
  },
  {
    image: "stall-crab-talk-live-tanks.jpg",
    eyebrow: "Commonwealth Crescent Market",
    title: "See the seafood live before you buy.",
    text: "Visit our stall, choose your seafood, and get recommendations on the best way to prepare it.",
  },
];

const products = [
  ["product-yellow-roe-crab-03.jpg", "Sri Lanka Yellow Roe Crab", "Rich roe, premium crab choice"],
  ["product-red-roe-crab-01.jpg", "Sri Lanka Red Roe Crab", "Popular for crab lovers"],
  ["product-live-crab-premium.jpg", "Live Mud Crabs", "Meaty and freshly selected"],
  ["product-boston-lobster-display.jpg", "Boston Lobster", "Great for steaming or noodles"],
  ["product-live-green-lobster-01.jpg", "Green Lobster", "Premium lobster option"],
  ["product-king-crab-premium.jpg", "Alaskan King Crab", "Premium seafood centrepiece"],
  ["product-oysters-premium-01.jpg", "Fresh Oysters", "Subject to daily availability"],
  ["product-manila-clams-closeup.jpg", "Manila Clams", "Good for steaming or chilli style"],
];

const homeCooking = [
  ["product-live-crab-closeup-01.jpg", "Live Crabs", "Bring home and cook your preferred style."],
  ["product-live-soon-hock-01.jpg", "Soon Hock", "Suitable for Hong Kong-style steaming."],
  ["product-live-prawns.jpg", "Live Prawns", "Great for steaming, har lok or simple wok-fry."],
  ["product-oysters-box.jpg", "Oysters", "Fresh oyster options when available."],
];

const faiKeeDishes = [
  ["dish-lobster-yee-mee-closeup-01.jpg", "Lobster Yee Mee", "One of the most popular cooked options."],
  ["dish-lobster-bee-hoon-fai-kee-01.jpg", "Lobster Bee Hoon", "Comforting, rich and full of seafood flavour."],
  ["dish-chilli-crab-rich-sauce.jpg", "Chilli Crab", "Classic local favourite."],
  ["dish-black-pepper-crab-premium.jpg", "Black Pepper Crab", "Bold, savoury and aromatic."],
  ["dish-ginger-scallion-crab.jpg", "Ginger Scallion Crab", "Clean, fragrant wok-style crab."],
  ["dish-steamed-soon-hock-fai-kee.jpg", "Steamed Soon Hock", "Best for those who prefer natural sweetness."],
];

const features = [
  {
    image: "feature-8days-original-thumbnail.jpg",
    title: "Featured on 8 Days",
    text: "Crab Talk and Fai Kee were featured for the live seafood and hawker cooking collaboration.",
    link: "https://www.8days.sg/eatanddrink/hawkerfood/commonwealth-crab-talk-fai-kee-live-seafood-hawker-collab-856541",
    button: "Read 8 Days Feature",
  },
  {
    image: "feature-botak-jazz-tiktok.jpg",
    title: "Featured by Botak Jazz",
    text: "Botak Jazz featured the lobster yee mee experience at Commonwealth Crescent.",
    link: "https://www.tiktok.com/@botakjazz/video/7602204733155364116",
    button: "Watch TikTok Feature",
  },
  {
    image: "AI-feature.jpeg",
    title: "Crab Seller Using AI",
    text: "A feature story on how Crab Talk uses AI tools in daily business and content work.",
    link: "https://www.facebook.com/share/v/1Djwg4h7UP/",
    button: "Watch Facebook Feature",
  },
];

const gallery = [
  "about-jeremy-live-crab.jpg",
  "stall-crab-talk-front-01.jpg",
  "stall-crab-talk-front-02.jpg",
  "stall-crab-talk-live-tanks.jpg",
  "product-live-crab-tank-01.jpg",
  "product-live-crab-tank-02.jpg",
  "product-yellow-roe-crab-04.jpg",
  "product-yellow-roe-crab-05.jpg",
  "product-yellow-roe-crab-06.jpg",
  "product-yellow-roe-crab-07.jpg",
  "product-red-roe-crab-02.jpg",
  "product-live-green-lobster-02.jpg",
  "product-live-abalone-closeup.jpg",
  "product-alaskan-king-crab-legs.jpg",
  "product-oysters-closeup-01.jpg",
  "product-oysters-closeup-02.jpg",
  "dish-chilli-crab-closeup.jpg",
  "dish-chilli-crab-table-shot.jpg",
  "dish-black-pepper-crab-closeup.jpg",
  "dish-crab-bee-hoon.jpg",
  "dish-crab-meat-fai-kee.jpg",
  "dish-har-lok-prawns.jpg",
  "dish-hor-fun-fai-kee.jpg",
  "dish-san-lor-hor-fun-fai-kee.jpg",
  "dish-seafood-hor-fun-fai-kee.jpg",
  "dish-steamed-clams-fai-kee.jpg",
  "dish-steamed-crab-01.jpg",
  "dish-steamed-crab-02.jpg",
  "dish-steamed-lobster.jpg",
  "partner-fai-kee-chef.jpg",
  "partner-fai-kee-food-overview.jpg",
  "partner-fai-kee-cooked-dish-01.jpg",
  "partner-fai-kee-cooked-dish-02.jpg",
  "partner-fai-kee-cooked-dish-03.jpg",
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
          background: #04191d;
          color: #ffffff;
          font-family: Arial, Helvetica, sans-serif;
        }

        a {
          color: inherit;
        }

        .site {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(0, 183, 255, 0.18), transparent 34%),
            radial-gradient(circle at top right, rgba(255, 204, 112, 0.12), transparent 30%),
            linear-gradient(180deg, #031316 0%, #05272d 38%, #021114 100%);
        }

        .topBar {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(18px);
          background: rgba(3, 19, 22, 0.88);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .nav {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
          padding: 14px 0;
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

        .brandMark {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, #00b7ff, #f9d56e);
          color: #031316;
          font-weight: 900;
          box-shadow: 0 12px 40px rgba(0, 183, 255, 0.28);
        }

        .brandText strong {
          display: block;
          font-size: 18px;
          letter-spacing: 0.3px;
        }

        .brandText span {
          display: block;
          margin-top: 2px;
          font-size: 12px;
          color: #9fe8ff;
        }

        .navLinks {
          display: flex;
          align-items: center;
          gap: 18px;
          font-size: 14px;
          color: rgba(255,255,255,0.78);
        }

        .navLinks a {
          text-decoration: none;
        }

        .navLinks a:hover {
          color: #9fe8ff;
        }

        .navCta {
          padding: 11px 17px;
          border-radius: 999px;
          background: linear-gradient(135deg, #00b7ff, #0077ff);
          color: white !important;
          font-weight: 700;
          box-shadow: 0 10px 30px rgba(0, 183, 255, 0.25);
        }

        .hero {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
          padding: 58px 0 34px;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 34px;
          align-items: center;
        }

        .pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 13px;
          border: 1px solid rgba(159, 232, 255, 0.22);
          background: rgba(159, 232, 255, 0.08);
          color: #9fe8ff;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.4px;
        }

        .hero h1 {
          margin: 20px 0 18px;
          font-size: clamp(42px, 6vw, 76px);
          line-height: 0.95;
          letter-spacing: -2.8px;
        }

        .hero h1 span {
          color: #9fe8ff;
        }

        .heroText {
          max-width: 620px;
          color: rgba(255,255,255,0.78);
          font-size: 18px;
          line-height: 1.7;
        }

        .address {
          margin-top: 20px;
          padding: 16px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.055);
          color: rgba(255,255,255,0.86);
          line-height: 1.5;
        }

        .heroActions {
          margin-top: 28px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 14px 20px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 800;
          border: 1px solid rgba(255,255,255,0.14);
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .btnPrimary {
          background: linear-gradient(135deg, #00b7ff, #0077ff);
          color: #ffffff;
          box-shadow: 0 18px 45px rgba(0, 183, 255, 0.26);
        }

        .btnSecondary {
          background: rgba(255,255,255,0.08);
          color: #ffffff;
        }

        .heroCard {
          position: relative;
          overflow: hidden;
          border-radius: 30px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.06);
          box-shadow: 0 30px 90px rgba(0,0,0,0.42);
        }

        .heroImage {
          width: 100%;
          height: 420px;
          object-fit: cover;
          display: block;
          filter: saturate(1.08) contrast(1.04);
        }

        .heroOverlay {
          position: absolute;
          inset: auto 18px 18px 18px;
          padding: 18px;
          border-radius: 22px;
          background: rgba(2, 17, 20, 0.78);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.12);
        }

        .heroOverlay small {
          color: #f9d56e;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }

        .heroOverlay h2 {
          margin: 8px 0 8px;
          font-size: 24px;
          line-height: 1.15;
        }

        .heroOverlay p {
          margin: 0;
          color: rgba(255,255,255,0.78);
          line-height: 1.5;
        }

        .dots {
          display: flex;
          gap: 8px;
          margin-top: 14px;
        }

        .dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          border: none;
          background: rgba(255,255,255,0.28);
          cursor: pointer;
        }

        .dot.active {
          background: #00b7ff;
        }

        .section {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
          padding: 54px 0;
        }

        .sectionHeader {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 24px;
        }

        .sectionHeader h2 {
          margin: 0;
          font-size: clamp(30px, 4vw, 48px);
          letter-spacing: -1.5px;
        }

        .sectionHeader p {
          max-width: 560px;
          margin: 0;
          color: rgba(255,255,255,0.68);
          line-height: 1.6;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .card {
          overflow: hidden;
          border-radius: 24px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 20px 60px rgba(0,0,0,0.22);
        }

        .card img {
          width: 100%;
          height: 210px;
          object-fit: cover;
          display: block;
        }

        .cardBody {
          padding: 18px;
        }

        .cardBody h3 {
          margin: 0 0 8px;
          font-size: 19px;
        }

        .cardBody p {
          margin: 0;
          color: rgba(255,255,255,0.68);
          line-height: 1.55;
          font-size: 14px;
        }

        .split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .largePanel {
          border-radius: 30px;
          overflow: hidden;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .largePanel img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          display: block;
        }

        .largePanelContent {
          padding: 24px;
        }

        .largePanelContent h3 {
          margin: 0 0 12px;
          font-size: 30px;
          letter-spacing: -0.8px;
        }

        .largePanelContent p {
          margin: 0 0 18px;
          color: rgba(255,255,255,0.72);
          line-height: 1.65;
        }

        .tagList {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .tag {
          padding: 8px 10px;
          border-radius: 999px;
          background: rgba(159,232,255,0.1);
          border: 1px solid rgba(159,232,255,0.16);
          color: #9fe8ff;
          font-size: 13px;
          font-weight: 700;
        }

        .featureGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .featureCard {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border-radius: 26px;
          background: rgba(255,255,255,0.075);
          border: 1px solid rgba(255,255,255,0.12);
        }

        .featureCard img {
          width: 100%;
          height: 190px;
          object-fit: cover;
          display: block;
        }

        .featureBody {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .featureBody h3 {
          margin: 0 0 10px;
          font-size: 22px;
        }

        .featureBody p {
          margin: 0 0 18px;
          color: rgba(255,255,255,0.68);
          line-height: 1.55;
        }

        .featureBody a {
          margin-top: auto;
          display: inline-flex;
          justify-content: center;
          padding: 12px 16px;
          border-radius: 999px;
          text-decoration: none;
          background: rgba(0,183,255,0.14);
          border: 1px solid rgba(0,183,255,0.32);
          color: #9fe8ff;
          font-weight: 800;
        }

        .gallery {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 10px;
        }

        .gallery img {
          width: 100%;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          display: block;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.06);
        }

        .infoBand {
          margin-top: 20px;
          padding: 28px;
          border-radius: 30px;
          background:
            linear-gradient(135deg, rgba(0,183,255,0.16), rgba(249,213,110,0.08)),
            rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 20px;
          align-items: center;
        }

        .infoBand h2 {
          margin: 0 0 10px;
          font-size: 34px;
          letter-spacing: -1px;
        }

        .infoBand p {
          margin: 0;
          color: rgba(255,255,255,0.72);
          line-height: 1.6;
        }

        .footer {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 32px 0 90px;
          color: rgba(255,255,255,0.6);
          text-align: center;
        }

        .floatingWhatsapp {
          position: fixed;
          right: 18px;
          bottom: 18px;
          z-index: 60;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 15px 20px;
          border-radius: 999px;
          background: #25d366;
          color: #06140b;
          text-decoration: none;
          font-weight: 900;
          box-shadow: 0 18px 50px rgba(0,0,0,0.35);
        }

        @media (max-width: 900px) {
          .nav {
            align-items: flex-start;
          }

          .navLinks {
            display: none;
          }

          .hero {
            grid-template-columns: 1fr;
            padding-top: 34px;
          }

          .heroImage {
            height: 300px;
          }

          .sectionHeader {
            display: block;
          }

          .sectionHeader p {
            margin-top: 12px;
          }

          .grid,
          .featureGrid,
          .split,
          .infoBand {
            grid-template-columns: 1fr;
          }

          .gallery {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 560px) {
          .nav {
            width: min(100% - 22px, 1180px);
          }

          .brandText span {
            font-size: 11px;
          }

          .hero,
          .section {
            width: min(100% - 22px, 1180px);
          }

          .hero {
            padding-top: 26px;
            gap: 22px;
          }

          .hero h1 {
            font-size: 42px;
            letter-spacing: -1.8px;
          }

          .heroText {
            font-size: 16px;
          }

          .heroImage {
            height: 240px;
          }

          .heroOverlay {
            position: relative;
            inset: auto;
            margin: -4px 0 0;
            border-radius: 0;
          }

          .heroOverlay h2 {
            font-size: 21px;
          }

          .card img {
            height: 190px;
          }

          .largePanel img {
            height: 230px;
          }

          .featureCard img {
            height: 180px;
          }

          .gallery {
            grid-template-columns: repeat(2, 1fr);
          }

          .infoBand {
            padding: 22px;
          }

          .floatingWhatsapp {
            left: 14px;
            right: 14px;
            bottom: 14px;
          }
        }
      `}</style>

      <header className="topBar">
        <nav className="nav">
          <a className="brand" href="#home">
            <div className="brandMark">CT</div>
            <div className="brandText">
              <strong>Crab Talk SG</strong>
              <span>31 Commonwealth Crescent #01-41/42/43 S(149644)</span>
            </div>
          </a>

          <div className="navLinks">
            <a href="#products">Live Seafood</a>
            <a href="#ways">Home Cooking / Fai Kee</a>
            <a href="#features">Features</a>
            <a href="#gallery">Gallery</a>
            <a className="navCta" href={whatsappLink} target="_blank" rel="noreferrer">
              WhatsApp Order
            </a>
          </div>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <div>
            <div className="pill">Premium Live Seafood • Commonwealth Crescent</div>

            <h1>
              Live Seafood, <span>Chosen Fresh.</span>
            </h1>

            <p className="heroText">
              Crab Talk SG supplies premium live seafood for customers who want to cook at home
              or enjoy their seafood cooked nearby through our collaboration with Fai Kee.
            </p>

            <div className="address">
              <strong>Visit Us:</strong><br />
              31 Commonwealth Crescent #01-41/42/43 S(149644)
            </div>

            <div className="heroActions">
              <a className="btn btnPrimary" href={whatsappLink} target="_blank" rel="noreferrer">
                Order on WhatsApp
              </a>
              <a className="btn btnSecondary" href={mapsLink} target="_blank" rel="noreferrer">
                Open Google Maps
              </a>
              <a className="btn btnSecondary" href={telegramLink} target="_blank" rel="noreferrer">
                Join Telegram
              </a>
            </div>
          </div>

          <div className="heroCard">
            <img className="heroImage" src={img(currentHero.image)} alt={currentHero.title} />

            <div className="heroOverlay">
              <small>{currentHero.eyebrow}</small>
              <h2>{currentHero.title}</h2>
              <p>{currentHero.text}</p>

              <div className="dots">
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
        </section>

        <section className="section" id="products">
          <div className="sectionHeader">
            <h2>Live Seafood Selection</h2>
            <p>
              Daily stock changes depending on live arrivals. Message us to check today’s sizes,
              availability and reservation options.
            </p>
          </div>

          <div className="grid">
            {products.map(([image, title, text]) => (
              <div className="card" key={title}>
                <img src={img(image)} alt={title} loading="lazy" />
                <div className="cardBody">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="ways">
          <div className="sectionHeader">
            <h2>Two Ways to Enjoy</h2>
            <p>
              Buy live seafood for home cooking, or choose live seafood from Crab Talk and have it
              cooked nearby by Fai Kee.
            </p>
          </div>

          <div className="split">
            <div className="largePanel">
              <img src={img("product-live-crab-closeup-02.jpg")} alt="Live seafood for home cooking" />
              <div className="largePanelContent">
                <h3>Home Cooking</h3>
                <p>
                  Best for customers who want to bring home fresh live seafood and cook it their own way.
                  Choose from crabs, lobsters, clams, oysters, prawns and seasonal fish.
                </p>
                <div className="tagList">
                  <span className="tag">Live crabs</span>
                  <span className="tag">Lobsters</span>
                  <span className="tag">Oysters</span>
                  <span className="tag">Clams</span>
                </div>
              </div>
            </div>

            <div className="largePanel">
              <img src={img("dish-lobster-yee-mee-fai-kee-hero.jpg")} alt="Seafood cooked by Fai Kee" />
              <div className="largePanelContent">
                <h3>Cooked by Fai Kee</h3>
                <p>
                  Choose live seafood from Crab Talk and enjoy it cooked nearby by Fai Kee.
                  Popular styles include chilli, black bean, ginger scallion, steaming, yee mee and bee hoon.
                </p>
                <div className="tagList">
                  <span className="tag">Lobster Yee Mee</span>
                  <span className="tag">Chilli Crab</span>
                  <span className="tag">Black Bean</span>
                  <span className="tag">Steamed Seafood</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="sectionHeader">
            <h2>Popular Home Cooking Picks</h2>
            <p>
              Fresh seafood choices for customers who prefer simple steaming, wok-fry or family-style home cooking.
            </p>
          </div>

          <div className="grid">
            {homeCooking.map(([image, title, text]) => (
              <div className="card" key={title}>
                <img src={img(image)} alt={title} loading="lazy" />
                <div className="cardBody">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="sectionHeader">
            <h2>Popular Dishes by Fai Kee</h2>
            <p>
              A strong option for customers who want the live seafood experience without cooking at home.
            </p>
          </div>

          <div className="grid">
            {faiKeeDishes.map(([image, title, text]) => (
              <div className="card" key={title}>
                <img src={img(image)} alt={title} loading="lazy" />
                <div className="cardBody">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="features">
          <div className="sectionHeader">
            <h2>Media Features</h2>
            <p>
              Crab Talk has been featured for its live seafood concept, Fai Kee collaboration and content-driven business approach.
            </p>
          </div>

          <div className="featureGrid">
            {features.map((feature) => (
              <div className="featureCard" key={feature.title}>
                <img src={img(feature.image)} alt={feature.title} loading="lazy" />
                <div className="featureBody">
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                  <a href={feature.link} target="_blank" rel="noreferrer">
                    {feature.button}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="gallery">
          <div className="sectionHeader">
            <h2>Photo Gallery</h2>
            <p>
              Live seafood, stall shots, popular cooked dishes and Crab Talk × Fai Kee highlights.
            </p>
          </div>

          <div className="gallery">
            {gallery.map((file) => (
              <img key={file} src={img(file)} alt={file.replaceAll("-", " ").replace(".jpg", "")} loading="lazy" />
            ))}
          </div>

          <div className="infoBand">
            <div>
              <h2>Reserve before coming down.</h2>
              <p>
                Live seafood sizes and stock move quickly. Message us on WhatsApp to check today’s availability,
                reserve your seafood, or ask for recommended cooking styles.
              </p>
            </div>

            <div className="heroActions">
              <a className="btn btnPrimary" href={whatsappLink} target="_blank" rel="noreferrer">
                WhatsApp Crab Talk
              </a>
              <a className="btn btnSecondary" href={mapsLink} target="_blank" rel="noreferrer">
                Get Directions
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <strong>Crab Talk SG</strong>
        <br />
        Live Seafood Supply @ Crab Talk
        <br />
        31 Commonwealth Crescent #01-41/42/43 S(149644)
      </footer>

      <a className="floatingWhatsapp" href={whatsappLink} target="_blank" rel="noreferrer">
        WhatsApp Order
      </a>
    </div>
  );
}
