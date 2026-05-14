import React, { useEffect, useState } from "react";

const IMG = "/images/";

const heroSlides = [
  {
    image: "hero-live-mud-crab-closeup.jpg",
    title: "Live Seafood, Selected Fresh Daily",
    subtitle:
      "Premium live crabs, lobsters, oysters, clams and fish for serious home cooks.",
  },
  {
    image: "product-yellow-roe-crab-01.jpg",
    title: "Sri Lanka Roe Crabs",
    subtitle:
      "Rich roe, firm meat, and excellent for steaming or premium home dining.",
  },
  {
    image: "dish-lobster-yee-mee-fai-kee-hero.jpg",
    title: "From Tank to Table",
    subtitle:
      "Buy live seafood from Crab Talk and enjoy it fresh at home or cooked nearby when available.",
  },
];

const products = [
  {
    title: "Live Mud Crabs",
    image: "product-live-crab-closeup-01.jpg",
    desc: "Active, meaty crabs selected for steaming, chilli crab, black pepper crab or ginger scallion crab.",
  },
  {
    title: "Sri Lanka Roe Crabs",
    image: "product-yellow-roe-crab-01.jpg",
    desc: "Premium roe crabs with rich flavour, popular for Teochew-style cold crab and home steaming.",
  },
  {
    title: "Live Lobsters",
    image: "product-boston-lobster-display.jpg",
    desc: "Boston lobster and green lobster options depending on daily arrival.",
  },
  {
    title: "Fresh Oysters",
    image: "product-oysters-premium-01.jpg",
    desc: "Clean, cold and suitable for seafood platters, gatherings and weekend treats.",
  },
  {
    title: "Manila Clams",
    image: "product-manila-clams-01.jpg",
    desc: "Great for steaming, white wine style, chilli lala, soup or simple home cooking.",
  },
  {
    title: "Soon Hock & Premium Fish",
    image: "product-live-soon-hock-premium-fish.jpg",
    desc: "Live fish options for steaming, Hong Kong style preparation or premium home meals.",
  },
];

const dishes = [
  {
    title: "Lobster Yee Mee",
    image: "dish-lobster-yee-mee-01.jpg",
    desc: "A crowd favourite with rich seafood flavour and wok-style noodles.",
  },
  {
    title: "Chilli Crab",
    image: "dish-chilli-crab-premium.jpg",
    desc: "Classic Singapore-style crab dish, best with fresh live crabs.",
  },
  {
    title: "Ginger Scallion Crab",
    image: "dish-ginger-scallion-crab.jpg",
    desc: "Clean, aromatic and lets the natural sweetness of the crab stand out.",
  },
  {
    title: "Steamed Crab",
    image: "dish-steamed-crab-01.jpg",
    desc: "Simple and premium — ideal when the crab quality is good.",
  },
];

const features = [
  {
    title: "Featured on 8 Days",
    image: "8days-feature.jpg",
    desc: "Crab Talk × Fai Kee live seafood hawker collaboration.",
    link: "https://www.8days.sg/eatanddrink/hawkerfood/commonwealth-crab-talk-fai-kee-live-seafood-hawker-collab-856541",
  },
  {
    title: "Featured by Botak Jazz",
    image: "botak-jazz-feature.jpg",
    desc: "Lobster yee mee and live seafood feature on TikTok.",
    link: "https://www.tiktok.com/@botakjazz/video/7602204733155364116",
  },
  {
    title: "Crab Seller Using AI",
    image: "AI-feature.jpeg",
    desc: "How Crab Talk uses AI in daily business operations.",
    link: "https://www.facebook.com/share/v/1Djwg4h7UP/",
  },
];

const styles = `
  :root {
    --navy: #03191f;
    --deep: #06242c;
    --teal: #0a3d47;
    --aqua: #45d8ff;
    --gold: #f4c76b;
    --cream: #fff7e6;
    --muted: #bdd2d8;
    --line: rgba(255,255,255,0.12);
    --card: rgba(255,255,255,0.075);
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

  .page {
    min-height: 100vh;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    background:
      radial-gradient(circle at top left, rgba(69,216,255,0.16), transparent 32%),
      radial-gradient(circle at 85% 15%, rgba(244,199,107,0.11), transparent 26%),
      linear-gradient(180deg, #03191f 0%, #06242c 45%, #03191f 100%);
  }

  .topbar {
    position: sticky;
    top: 0;
    z-index: 20;
    backdrop-filter: blur(18px);
    background: rgba(3, 25, 31, 0.86);
    border-bottom: 1px solid var(--line);
  }

  .nav {
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
    text-decoration: none;
    color: white;
  }

  .brandMark {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg, var(--aqua), var(--teal));
    box-shadow: 0 0 26px rgba(69,216,255,0.35);
    font-size: 22px;
  }

  .brandText strong {
    display: block;
    font-size: 18px;
    letter-spacing: 0.2px;
  }

  .brandText span {
    display: block;
    margin-top: 2px;
    font-size: 12px;
    color: var(--muted);
  }

  .navLinks {
    display: flex;
    align-items: center;
    gap: 18px;
    font-size: 14px;
  }

  .navLinks a {
    color: var(--muted);
    text-decoration: none;
  }

  .navLinks a:hover {
    color: white;
  }

  .ctaSmall {
    padding: 10px 14px;
    border-radius: 999px;
    background: linear-gradient(135deg, var(--aqua), #1698c9);
    color: #001217 !important;
    font-weight: 800;
  }

  .container {
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 22px;
  }

  .hero {
    padding: 46px 0 34px;
  }

  .heroGrid {
    display: grid;
    grid-template-columns: 1fr 0.9fr;
    gap: 32px;
    align-items: center;
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--gold);
    background: rgba(244,199,107,0.1);
    border: 1px solid rgba(244,199,107,0.24);
    padding: 8px 12px;
    border-radius: 999px;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.35px;
    text-transform: uppercase;
  }

  h1 {
    margin: 18px 0 16px;
    font-size: clamp(40px, 6vw, 78px);
    line-height: 0.95;
    letter-spacing: -2.5px;
  }

  .heroLead {
    max-width: 620px;
    font-size: clamp(17px, 2vw, 22px);
    line-height: 1.55;
    color: var(--muted);
    margin: 0 0 22px;
  }

  .address {
    color: var(--cream);
    font-weight: 700;
    line-height: 1.5;
    margin: 18px 0 0;
    font-size: 15px;
  }

  .buttonRow {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 26px;
  }

  .btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-height: 48px;
    padding: 13px 18px;
    border-radius: 999px;
    text-decoration: none;
    font-weight: 850;
    letter-spacing: 0.1px;
    border: 1px solid transparent;
  }

  .btnPrimary {
    background: linear-gradient(135deg, var(--aqua), #1496c8);
    color: #001217;
    box-shadow: 0 16px 40px rgba(69,216,255,0.22);
  }

  .btnSecondary {
    background: rgba(255,255,255,0.08);
    color: white;
    border-color: var(--line);
  }

  .btnGold {
    background: rgba(244,199,107,0.12);
    color: var(--gold);
    border-color: rgba(244,199,107,0.35);
  }

  .heroFrame {
    position: relative;
    border-radius: 30px;
    padding: 12px;
    border: 1px solid var(--line);
    background: linear-gradient(145deg, rgba(255,255,255,0.11), rgba(255,255,255,0.035));
    box-shadow: 0 28px 80px rgba(0,0,0,0.38);
    overflow: hidden;
  }

  .heroImageBox {
    height: clamp(260px, 32vw, 420px);
    border-radius: 22px;
    overflow: hidden;
    background: #061c22;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .heroImageBox img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }

  .heroCaption {
    position: absolute;
    left: 26px;
    right: 26px;
    bottom: 26px;
    padding: 16px;
    border-radius: 18px;
    background: rgba(2, 27, 31, 0.78);
    border: 1px solid rgba(255,255,255,0.14);
    backdrop-filter: blur(14px);
  }

  .heroCaption strong {
    display: block;
    font-size: 18px;
  }

  .heroCaption span {
    display: block;
    margin-top: 5px;
    color: var(--muted);
    font-size: 13px;
    line-height: 1.45;
  }

  .section {
    padding: 46px 0;
  }

  .sectionHead {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 22px;
    margin-bottom: 22px;
  }

  .sectionHead h2 {
    margin: 0;
    font-size: clamp(28px, 3.5vw, 46px);
    letter-spacing: -1.2px;
  }

  .sectionHead p {
    margin: 10px 0 0;
    color: var(--muted);
    line-height: 1.55;
    max-width: 680px;
  }

  .pill {
    color: var(--gold);
    border: 1px solid rgba(244,199,107,0.32);
    background: rgba(244,199,107,0.08);
    padding: 9px 13px;
    border-radius: 999px;
    white-space: nowrap;
    font-size: 13px;
    font-weight: 800;
  }

  .grid3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }

  .card {
    border: 1px solid var(--line);
    background: linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.045));
    border-radius: 26px;
    overflow: hidden;
    box-shadow: 0 18px 52px rgba(0,0,0,0.18);
  }

  .imageFrame {
    height: clamp(150px, 17vw, 205px);
    background: rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--line);
  }

  .imageFrame img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }

  .cardBody {
    padding: 18px 20px 22px;
  }

  .cardBody h3 {
    margin: 0 0 8px;
    font-size: 22px;
    letter-spacing: -0.45px;
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
    gap: 22px;
  }

  .panel {
    border: 1px solid var(--line);
    background: rgba(255,255,255,0.06);
    border-radius: 28px;
    padding: 26px;
  }

  .panel h3 {
    margin: 0 0 12px;
    font-size: 28px;
  }

  .panel p {
    margin: 0 0 16px;
    color: var(--muted);
    line-height: 1.6;
  }

  .steps {
    display: grid;
    gap: 12px;
  }

  .step {
    padding: 14px 15px;
    border-radius: 18px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.08);
    color: var(--muted);
    line-height: 1.5;
  }

  .step strong {
    color: white;
  }

  .featureGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }

  .featureCard {
    display: flex;
    flex-direction: column;
    color: white;
    text-decoration: none;
    border: 1px solid var(--line);
    background: linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.04));
    border-radius: 26px;
    overflow: hidden;
    transition: transform 0.2s ease, border-color 0.2s ease;
  }

  .featureCard:hover {
    transform: translateY(-3px);
    border-color: rgba(69,216,255,0.45);
  }

  .featureThumb {
    height: 170px;
    background: #061c22;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--line);
  }

  .featureThumb img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }

  .featureBody {
    padding: 18px 20px 22px;
  }

  .featureBody h3 {
    margin: 0 0 8px;
    font-size: 21px;
  }

  .featureBody p {
    margin: 0 0 14px;
    color: var(--muted);
    line-height: 1.5;
    font-size: 15px;
  }

  .featureBody span {
    color: var(--gold);
    font-weight: 800;
    font-size: 14px;
  }

  .faiKee {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 22px;
    align-items: center;
    border: 1px solid rgba(244,199,107,0.18);
    background:
      linear-gradient(135deg, rgba(244,199,107,0.08), rgba(255,255,255,0.035));
    border-radius: 30px;
    padding: 24px;
  }

  .faiKeeImage {
    height: 230px;
    border-radius: 22px;
    overflow: hidden;
    background: #061c22;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .faiKeeImage img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .faiKee h2 {
    margin: 0 0 10px;
    font-size: clamp(25px, 3vw, 40px);
  }

  .faiKee p {
    color: var(--muted);
    line-height: 1.6;
    margin: 0 0 14px;
  }

  .note {
    color: var(--gold);
    font-size: 14px;
    line-height: 1.5;
  }

  .contactBox {
    margin-top: 14px;
    padding: 28px;
    border-radius: 30px;
    border: 1px solid rgba(69,216,255,0.2);
    background:
      radial-gradient(circle at top right, rgba(69,216,255,0.14), transparent 32%),
      rgba(255,255,255,0.06);
    text-align: center;
  }

  .contactBox h2 {
    margin: 0 0 12px;
    font-size: clamp(30px, 4vw, 52px);
  }

  .contactBox p {
    color: var(--muted);
    margin: 0 auto 22px;
    max-width: 720px;
    line-height: 1.6;
  }

  .footer {
    padding: 28px 0 38px;
    color: rgba(255,255,255,0.55);
    font-size: 13px;
    text-align: center;
  }

  @media (max-width: 900px) {
    .nav {
      align-items: flex-start;
    }

    .navLinks {
      display: none;
    }

    .hero {
      padding-top: 30px;
    }

    .heroGrid,
    .split,
    .faiKee {
      grid-template-columns: 1fr;
    }

    .grid3,
    .featureGrid {
      grid-template-columns: repeat(2, 1fr);
    }

    .sectionHead {
      align-items: flex-start;
      flex-direction: column;
    }

    .heroCaption {
      position: static;
      margin-top: 12px;
    }
  }

  @media (max-width: 620px) {
    .container {
      padding: 0 15px;
    }

    .nav {
      padding: 12px 15px;
    }

    .brandMark {
      width: 38px;
      height: 38px;
    }

    h1 {
      letter-spacing: -1.2px;
    }

    .buttonRow {
      display: grid;
      grid-template-columns: 1fr;
    }

    .btn {
      width: 100%;
    }

    .grid3,
    .featureGrid {
      grid-template-columns: 1fr;
      gap: 14px;
    }

    .card,
    .featureCard,
    .panel,
    .faiKee,
    .contactBox {
      border-radius: 22px;
    }

    .imageFrame {
      height: 165px;
    }

    .featureThumb {
      height: 160px;
    }

    .heroFrame {
      padding: 8px;
      border-radius: 22px;
    }

    .heroImageBox {
      height: 245px;
      border-radius: 17px;
    }

    .cardBody {
      padding: 16px;
    }

    .cardBody h3 {
      font-size: 20px;
    }

    .section {
      padding: 34px 0;
    }

    .panel {
      padding: 20px;
    }

    .faiKee {
      padding: 16px;
    }

    .faiKeeImage {
      height: 190px;
    }
  }
`;

export default function App() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((current) => (current + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const currentSlide = heroSlides[slide];

  return (
    <div className="page">
      <style>{styles}</style>

      <header className="topbar">
        <nav className="nav">
          <a className="brand" href="#home">
            <div className="brandMark">🦀</div>
            <div className="brandText">
              <strong>Crab Talk SG</strong>
              <span>Live Seafood Supply @ Crab Talk</span>
            </div>
          </a>

          <div className="navLinks">
            <a href="#products">Live Seafood</a>
            <a href="#home-cooking">Home Cooking</a>
            <a href="#features">Features</a>
            <a href="#fai-kee">Cook Nearby</a>
            <a href="#contact" className="ctaSmall">
              Order Now
            </a>
          </div>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <div className="container heroGrid">
            <div>
              <div className="eyebrow">Premium Live Seafood in Singapore</div>

              <h1>Live seafood selected for serious home dining.</h1>

              <p className="heroLead">
                Choose live crabs, lobsters, oysters, clams and premium fish
                directly from our tanks. Suitable for home cooking, family
                gatherings and seafood lovers who want freshness first.
              </p>

              <p className="address">
                31 Commonwealth Crescent #01-41/42/43, Singapore 149644
              </p>

              <div className="buttonRow">
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

                <a className="btn btnGold" href="tel:+6598398671">
                  Call 9839 8671
                </a>
              </div>
            </div>

            <div className="heroFrame">
              <div className="heroImageBox">
                <img
                  src={`${IMG}${currentSlide.image}`}
                  alt={currentSlide.title}
                />
              </div>

              <div className="heroCaption">
                <strong>{currentSlide.title}</strong>
                <span>{currentSlide.subtitle}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="products">
          <div className="container">
            <div className="sectionHead">
              <div>
                <h2>Live Seafood Selection</h2>
                <p>
                  Daily availability changes depending on arrival. Walk in or
                  message us early to reserve the best sizes.
                </p>
              </div>
              <div className="pill">Freshness First</div>
            </div>

            <div className="grid3">
              {products.map((item) => (
                <article className="card" key={item.title}>
                  <div className="imageFrame">
                    <img src={`${IMG}${item.image}`} alt={item.title} />
                  </div>
                  <div className="cardBody">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="home-cooking">
          <div className="container split">
            <div className="panel">
              <h3>For Home Cooking</h3>
              <p>
                Best for customers who want full control over the cooking style,
                seasoning and timing at home.
              </p>

              <div className="steps">
                <div className="step">
                  <strong>1. Choose live seafood</strong>
                  <br />
                  Select your preferred crab, lobster, oysters, clams or fish.
                </div>

                <div className="step">
                  <strong>2. Reserve before coming</strong>
                  <br />
                  Message us to check today’s sizes, availability and price.
                </div>

                <div className="step">
                  <strong>3. Cook fresh at home</strong>
                  <br />
                  Steam, chilli, black pepper, ginger scallion or your own
                  favourite style.
                </div>
              </div>
            </div>

            <div className="panel">
              <h3>Popular Cooking Ideas</h3>
              <p>
                These are common styles customers enjoy with our live seafood.
                Final cooking style depends on your own preference.
              </p>

              <div className="steps">
                <div className="step">
                  <strong>Sri Lanka Roe Crab</strong>
                  <br />
                  Steam or Teochew-style cold crab.
                </div>

                <div className="step">
                  <strong>Live Lobster</strong>
                  <br />
                  Garlic butter, steamed, bee hoon or yee mee style.
                </div>

                <div className="step">
                  <strong>Manila Clams</strong>
                  <br />
                  Steam, soup, white wine style or chilli lala.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="sectionHead">
              <div>
                <h2>Customer Favourites</h2>
                <p>
                  A few popular cooked seafood styles for inspiration. Live
                  seafood quality remains the main focus at Crab Talk.
                </p>
              </div>
            </div>

            <div className="grid3">
              {dishes.map((item) => (
                <article className="card" key={item.title}>
                  <div className="imageFrame">
                    <img src={`${IMG}${item.image}`} alt={item.title} />
                  </div>
                  <div className="cardBody">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="features">
          <div className="container">
            <div className="sectionHead">
              <div>
                <h2>Media Features</h2>
                <p>
                  Crab Talk has been featured by food media and creators for our
                  live seafood concept and market-style freshness.
                </p>
              </div>
              <div className="pill">As Featured</div>
            </div>

            <div className="featureGrid">
              {features.map((item) => (
                <a
                  className="featureCard"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={item.title}
                >
                  <div className="featureThumb">
                    <img src={`${IMG}${item.image}`} alt={item.title} />
                  </div>
                  <div className="featureBody">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <span>View feature →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="fai-kee">
          <div className="container">
            <div className="faiKee">
              <div className="faiKeeImage">
                <img
                  src={`${IMG}dish-lobster-yee-mee-fai-kee-hero.jpg`}
                  alt="Lobster Yee Mee"
                />
              </div>

              <div>
                <div className="eyebrow">Optional Nearby Cooking</div>
                <h2>Cook Nearby with Fai Kee</h2>
                <p>
                  Customers may choose live seafood from Crab Talk and, when
                  available, arrange nearby cooking with Fai Kee for selected
                  dishes such as chilli crab, steamed crab, ginger scallion crab
                  and lobster yee mee.
                </p>
                <p className="note">
                  Cooking availability and timing depend on Fai Kee’s capacity.
                  Please check before ordering, especially during peak hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <div className="contactBox">
              <h2>Reserve Before You Come</h2>
              <p>
                For the best selection, WhatsApp us to check today’s live seafood
                arrivals, sizes and availability before heading down.
              </p>

              <div className="buttonRow" style={{ justifyContent: "center" }}>
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

              <p className="address">
                31 Commonwealth Crescent #01-41/42/43, Singapore 149644
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          © Crab Talk SG · Live Seafood Supply @ Crab Talk
        </div>
      </footer>
    </div>
  );
}
