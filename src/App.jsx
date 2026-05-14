import { useEffect, useState } from "react";

const heroSlides = [
  {
    image: "/images/8days-feature.jpg",
    label: "Featured on 8 Days",
    title: "Live Seafood, Cooked Hawker-Style",
  },
  {
    image: "/images/botak-jazz-feature.jpg",
    label: "Featured by Botak Jazz",
    title: "Lobster Yee Mee & Fresh Seafood",
  },
  {
    image: "/images/AI-feature.jpeg",
    label: "Crab Talk Story",
    title: "Crab Seller Using AI for Daily Work",
  },
];

const products = [
  "Live Mud Crabs",
  "Sri Lanka Roe Crabs",
  "Boston Lobster",
  "Green Lobster",
  "Fresh Oysters",
  "Manila Clams",
  "Soon Hock",
  "Premium Live Seafood",
];

const features = [
  {
    title: "8 Days Feature",
    description:
      "Crab Talk × Fai Kee collaboration featured for live seafood cooked fresh at Commonwealth Crescent.",
    image: "/images/8days-feature.jpg",
    link: "https://www.8days.sg/eatanddrink/hawkerfood/commonwealth-crab-talk-fai-kee-live-seafood-hawker-collab-856541",
    button: "Read Feature",
  },
  {
    title: "Botak Jazz Feature",
    description:
      "Popular seafood content featuring Lobster Yee Mee and the Crab Talk experience.",
    image: "/images/botak-jazz-feature.jpg",
    link: "https://www.tiktok.com/@botakjazz/video/7602204733155364116",
    button: "Watch TikTok",
  },
  {
    title: "Crab Seller Using AI",
    description:
      "A behind-the-scenes story on how Crab Talk uses AI for daily business, marketing and operations.",
    image: "/images/AI-feature.jpeg",
    link: "https://www.facebook.com/share/v/1Djwg4h7UP/",
    button: "Watch Story",
  },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <div className="site">
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #03191d;
        }

        .site {
          min-height: 100vh;
          color: #ffffff;
          font-family: Arial, Helvetica, sans-serif;
          background:
            radial-gradient(circle at top left, rgba(0, 183, 255, 0.18), transparent 30%),
            linear-gradient(180deg, #021b1f 0%, #062f37 45%, #021b1f 100%);
        }

        .nav {
          width: 100%;
          padding: 22px 6%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 10;
          background: rgba(2, 27, 31, 0.88);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .brand {
          font-size: 24px;
          font-weight: 800;
          letter-spacing: 0.5px;
        }

        .nav-links {
          display: flex;
          gap: 22px;
          font-size: 15px;
        }

        .nav-links a {
          color: #d9f8ff;
          text-decoration: none;
        }

        .hero {
          width: 100%;
          padding: 70px 6% 50px;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 44px;
          align-items: center;
        }

        .badge {
          display: inline-block;
          padding: 10px 16px;
          border: 1px solid rgba(159, 232, 255, 0.35);
          border-radius: 999px;
          color: #9fe8ff;
          background: rgba(0, 183, 255, 0.08);
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 22px;
        }

        .hero h1 {
          font-size: clamp(42px, 6vw, 82px);
          line-height: 0.98;
          margin: 0 0 22px;
          letter-spacing: -2px;
        }

        .hero p {
          font-size: 20px;
          line-height: 1.65;
          color: #cceef5;
          max-width: 620px;
          margin: 0 0 30px;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          padding: 16px 24px;
          border-radius: 14px;
          text-decoration: none;
          font-weight: 800;
          font-size: 16px;
          transition: 0.2s ease;
        }

        .btn-primary {
          background: linear-gradient(135deg, #00b7ff, #00e0c6);
          color: #001316;
          box-shadow: 0 18px 45px rgba(0, 183, 255, 0.25);
        }

        .btn-secondary {
          color: #ffffff;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.06);
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .hero-card {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          min-height: 500px;
          box-shadow: 0 30px 80px rgba(0,0,0,0.45);
          border: 1px solid rgba(255,255,255,0.14);
          background: #0b3036;
        }

        .hero-card img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          display: block;
          opacity: 0.95;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.78));
        }

        .hero-caption {
          position: absolute;
          left: 26px;
          right: 26px;
          bottom: 26px;
        }

        .hero-caption span {
          color: #9fe8ff;
          font-weight: 800;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .hero-caption h2 {
          font-size: 30px;
          margin: 10px 0 0;
          line-height: 1.15;
        }

        .dots {
          display: flex;
          gap: 8px;
          margin-top: 18px;
        }

        .dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: rgba(255,255,255,0.35);
        }

        .dot.active {
          background: #00d7ff;
        }

        .section {
          padding: 60px 6%;
        }

        .section-title {
          text-align: center;
          max-width: 850px;
          margin: 0 auto 42px;
        }

        .section-title h2 {
          font-size: clamp(32px, 4vw, 52px);
          margin: 0 0 14px;
          letter-spacing: -1px;
        }

        .section-title p {
          color: #cceef5;
          line-height: 1.7;
          font-size: 18px;
          margin: 0;
        }

        .two-col {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }

        .glass-card {
          background: linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.045));
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 26px;
          padding: 34px;
          box-shadow: 0 24px 60px rgba(0,0,0,0.22);
        }

        .glass-card h3 {
          font-size: 30px;
          margin: 0 0 14px;
        }

        .glass-card p {
          color: #d7f4f8;
          line-height: 1.7;
          font-size: 17px;
        }

        .list {
          margin-top: 24px;
          display: grid;
          gap: 14px;
        }

        .list-item {
          padding: 15px 16px;
          border-radius: 16px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.08);
          color: #f4fdff;
          font-weight: 700;
        }

        .products {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .product-pill {
          padding: 18px;
          border-radius: 18px;
          text-align: center;
          font-weight: 800;
          background: rgba(0, 183, 255, 0.08);
          border: 1px solid rgba(159, 232, 255, 0.18);
          color: #eaffff;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .feature-card {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.13);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 22px 55px rgba(0,0,0,0.25);
        }

        .feature-card img {
          width: 100%;
          height: 230px;
          object-fit: cover;
          display: block;
        }

        .feature-content {
          padding: 24px;
        }

        .feature-content h3 {
          margin: 0 0 12px;
          font-size: 24px;
        }

        .feature-content p {
          margin: 0 0 20px;
          color: #d7f4f8;
          line-height: 1.6;
        }

        .feature-content a {
          color: #001316;
          background: #9fe8ff;
          display: inline-block;
          padding: 12px 18px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 800;
        }

        .info-band {
          background: linear-gradient(135deg, rgba(0, 183, 255, 0.16), rgba(0, 224, 198, 0.1));
          border-top: 1px solid rgba(255,255,255,0.12);
          border-bottom: 1px solid rgba(255,255,255,0.12);
        }

        .contact-box {
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .contact-box h2 {
          font-size: clamp(32px, 4vw, 50px);
          margin: 0 0 16px;
        }

        .contact-box p {
          color: #d7f4f8;
          font-size: 18px;
          line-height: 1.7;
          margin-bottom: 28px;
        }

        .address {
          font-size: 20px;
          font-weight: 800;
          color: #9fe8ff;
          margin-bottom: 28px;
        }

        .footer {
          padding: 28px 6%;
          text-align: center;
          color: #9fbfc5;
          border-top: 1px solid rgba(255,255,255,0.08);
          font-size: 14px;
        }

        @media (max-width: 980px) {
          .hero {
            grid-template-columns: 1fr;
            padding-top: 48px;
          }

          .hero-card,
          .hero-card img {
            min-height: auto;
            height: 420px;
          }

          .two-col {
            grid-template-columns: 1fr;
          }

          .products {
            grid-template-columns: repeat(2, 1fr);
          }

          .feature-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 620px) {
          .nav {
            padding: 18px 5%;
            align-items: flex-start;
            gap: 12px;
          }

          .brand {
            font-size: 20px;
          }

          .nav-links {
            display: none;
          }

          .hero {
            padding: 38px 5% 35px;
            gap: 28px;
          }

          .hero h1 {
            letter-spacing: -1px;
          }

          .hero p {
            font-size: 17px;
          }

          .hero-actions {
            flex-direction: column;
          }

          .btn {
            width: 100%;
            padding: 16px 20px;
          }

          .hero-card {
            border-radius: 22px;
          }

          .hero-card img {
            height: 320px;
          }

          .hero-caption {
            left: 18px;
            right: 18px;
            bottom: 18px;
          }

          .hero-caption h2 {
            font-size: 24px;
          }

          .section {
            padding: 45px 5%;
          }

          .glass-card {
            padding: 24px;
          }

          .glass-card h3 {
            font-size: 25px;
          }

          .products {
            grid-template-columns: 1fr;
          }

          .feature-card img {
            height: 220px;
          }

          .address {
            font-size: 17px;
          }
        }
      `}</style>

      <nav className="nav">
        <div className="brand">🦀 Crab Talk SG</div>
        <div className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#seafood">Seafood</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div>
          <div className="badge">Live Seafood Supply @ Crab Talk</div>
          <h1>Premium Live Seafood in Singapore</h1>
          <p>
            Choose live seafood at Crab Talk, bring it home for your own cooking,
            or enjoy it cooked nearby through our collaboration with Fai Kee.
            Fresh, convenient and perfect for family meals, gatherings and seafood lovers.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="https://wa.me/6598398671" target="_blank">
              Order on WhatsApp
            </a>
            <a className="btn btn-secondary" href="#experience">
              View Experience
            </a>
          </div>
        </div>

        <div className="hero-card">
          <img src={slide.image} alt={slide.title} />
          <div className="hero-overlay"></div>
          <div className="hero-caption">
            <span>{slide.label}</span>
            <h2>{slide.title}</h2>
            <div className="dots">
              {heroSlides.map((_, index) => (
                <div
                  key={index}
                  className={`dot ${index === currentSlide ? "active" : ""}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="section-title">
          <h2>Two Ways to Enjoy Crab Talk</h2>
          <p>
            Whether you love cooking seafood at home or prefer a ready-to-eat
            hawker-style seafood meal, Crab Talk gives you both options.
          </p>
        </div>

        <div className="two-col">
          <div className="glass-card">
            <h3>Home Cooking</h3>
            <p>
              Pick your preferred live seafood and prepare it your own way at home.
              Great for steamboat, steaming, grilling, chilli crab, black pepper crab,
              seafood bee hoon and family-style meals.
            </p>

            <div className="list">
              <div className="list-item">Best for home chefs and family gatherings</div>
              <div className="list-item">Choose live seafood directly at the stall</div>
              <div className="list-item">Fresh seafood for your own recipes</div>
            </div>
          </div>

          <div className="glass-card">
            <h3>Cooked by Fai Kee</h3>
            <p>
              Buy your live seafood from Crab Talk and have it cooked nearby by
              Fai Kee. Popular choices include Lobster Yee Mee, Lobster Bee Hoon,
              chilli crab, steamed crab and Hong Kong-style steamed fish.
            </p>

            <div className="list">
              <div className="list-item">Convenient dine-in seafood experience</div>
              <div className="list-item">Popular Lobster Yee Mee and Bee Hoon</div>
              <div className="list-item">Hawker-style cooking with fresh live seafood</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="seafood">
        <div className="section-title">
          <h2>Fresh Live Seafood Selection</h2>
          <p>
            Our seafood availability changes depending on daily arrivals.
            Pre-order is recommended for premium items and limited stock.
          </p>
        </div>

        <div className="products">
          {products.map((item) => (
            <div className="product-pill" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="features">
        <div className="section-title">
          <h2>Featured Stories</h2>
          <p>
            Crab Talk has been featured across food media and social platforms,
            showcasing our seafood, collaboration and daily business story.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <img src={feature.image} alt={feature.title} />
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <a href={feature.link} target="_blank" rel="noopener noreferrer">
                  {feature.button}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section info-band" id="contact">
        <div className="contact-box">
          <h2>Visit Crab Talk</h2>
          <p>
            Walk in to choose your live seafood, or WhatsApp us to check today’s
            availability and reserve before coming down.
          </p>

          <div className="address">
            31 Commonwealth Crescent #01-41/42/43 Singapore 149644
          </div>

          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <a className="btn btn-primary" href="https://wa.me/6598398671" target="_blank">
              WhatsApp 9839 8671
            </a>
            <a
              className="btn btn-secondary"
              href="https://www.google.com/maps/search/?api=1&query=31+Commonwealth+Crescent+%2301-41%2F42%2F43+Singapore+149644"
              target="_blank"
            >
              Open Google Maps
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        © Crab Talk SG · Live Seafood Supply @ Crab Talk
      </footer>
    </div>
  );
}
