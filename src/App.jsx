export default function App() {
  const whatsappLink =
    "https://wa.me/6598398671?text=Hi%20Crab%20Talk%2C%20I%20would%20like%20to%20check%20today%27s%20live%20seafood%20arrivals.";
  const telegramLink = "https://t.me/CrabTalkSG";

  const homeCooking = [
    {
      title: "Live Mud Crabs",
      text: "Selected for meatiness, roe quality and cooking style. Ideal for chilli crab, steaming, black pepper or ginger onion.",
      img: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: "Live Lobsters",
      text: "Boston lobster, green lobster and seasonal lobster arrivals. Suitable for garlic butter, lobster bee hoon or home seafood feast.",
      img: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: "Clams, Oysters & Shellfish",
      text: "Fresh shellfish selections for steaming, garlic, black bean, chilli or simple home cooking.",
      img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=85",
    },
  ];

  const faiKeeDishes = [
    "Lobster Yee Mee",
    "Lobster Bee Hoon",
    "Chilli Crab",
    "Black Bean Crab / Lala / Fish",
    "Ginger & Onion Crab / Lala / Fish",
    "Steamed Crab / Lala / Fish",
    "Hong Kong Style Steamed Soon Hock",
  ];

  return (
    <main className="site">
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #020b0d;
          font-family: Arial, Helvetica, sans-serif;
        }

        .site {
          min-height: 100vh;
          color: #ffffff;
          background:
            radial-gradient(circle at top left, rgba(0, 194, 255, 0.22), transparent 34%),
            radial-gradient(circle at bottom right, rgba(255, 184, 77, 0.12), transparent 32%),
            linear-gradient(180deg, #020b0d 0%, #03191d 45%, #020b0d 100%);
        }

        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 7%;
          background: rgba(2, 11, 13, 0.78);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand-mark {
          width: 46px;
          height: 46px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #00d4ff, #005f73);
          box-shadow: 0 14px 40px rgba(0, 183, 255, 0.25);
          font-size: 26px;
        }

        .brand-title {
          font-size: 22px;
          font-weight: 900;
          letter-spacing: -0.4px;
        }

        .brand-sub {
          color: #9fe8ff;
          font-size: 12px;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          margin-top: 2px;
        }

        .nav-links {
          display: flex;
          gap: 24px;
          align-items: center;
        }

        .nav-links a {
          color: #d8f6ff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
        }

        .nav-cta {
          padding: 12px 22px;
          border-radius: 999px;
          background: linear-gradient(135deg, #00d4ff, #0077ff);
          color: #ffffff !important;
          box-shadow: 0 14px 38px rgba(0, 183, 255, 0.32);
        }

        .hero {
          min-height: 88vh;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 50px;
          align-items: center;
          padding: 90px 7% 70px;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          color: #9fe8ff;
          text-transform: uppercase;
          letter-spacing: 1.8px;
          font-size: 12px;
          font-weight: 900;
          margin-bottom: 24px;
        }

        .hero h1 {
          font-size: clamp(46px, 7vw, 86px);
          line-height: 0.98;
          margin: 0 0 26px;
          letter-spacing: -3px;
        }

        .gradient-text {
          background: linear-gradient(135deg, #ffffff, #9fe8ff, #ffd18a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero p {
          color: #c7edf5;
          font-size: 20px;
          line-height: 1.7;
          max-width: 680px;
          margin: 0 0 34px;
        }

        .button-row {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 17px 28px;
          border-radius: 16px;
          text-decoration: none;
          font-weight: 900;
          font-size: 16px;
          transition: 0.2s ease;
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .btn-primary {
          background: linear-gradient(135deg, #00d4ff, #0077ff);
          color: #fff;
          box-shadow: 0 18px 45px rgba(0, 183, 255, 0.34);
        }

        .btn-secondary {
          color: #fff;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.17);
        }

        .hero-card {
          position: relative;
          border-radius: 34px;
          padding: 14px;
          background: linear-gradient(145deg, rgba(255,255,255,0.18), rgba(255,255,255,0.04));
          border: 1px solid rgba(255,255,255,0.16);
          box-shadow: 0 35px 90px rgba(0,0,0,0.48);
          overflow: hidden;
        }

        .hero-image {
          min-height: 520px;
          border-radius: 26px;
          background:
            linear-gradient(rgba(2,11,13,0.08), rgba(2,11,13,0.45)),
            url("https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?auto=format&fit=crop&w=1400&q=90");
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .floating-panel {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 24px;
          padding: 24px;
          border-radius: 24px;
          background: rgba(2, 11, 13, 0.76);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255,255,255,0.14);
        }

        .floating-panel h3 {
          margin: 0 0 8px;
          font-size: 26px;
        }

        .floating-panel p {
          margin: 0;
          color: #c7edf5;
          line-height: 1.6;
        }

        .section {
          padding: 86px 7%;
        }

        .section.alt {
          background: rgba(255,255,255,0.045);
          border-top: 1px solid rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .section-header {
          max-width: 880px;
          margin: 0 auto 46px;
          text-align: center;
        }

        .label {
          color: #9fe8ff;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 13px;
          margin-bottom: 12px;
        }

        .section h2 {
          font-size: clamp(34px, 4vw, 54px);
          line-height: 1.08;
          margin: 0 0 18px;
          letter-spacing: -1.4px;
        }

        .section-text {
          color: #c7edf5;
          font-size: 18px;
          line-height: 1.75;
          margin: 0;
        }

        .split {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          max-width: 1180px;
          margin: 0 auto;
        }

        .choice-card {
          border-radius: 32px;
          overflow: hidden;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: 0 24px 60px rgba(0,0,0,0.26);
        }

        .choice-img {
          height: 310px;
          background-size: cover;
          background-position: center;
        }

        .choice-content {
          padding: 34px;
        }

        .choice-content h3 {
          font-size: 34px;
          margin: 0 0 14px;
          letter-spacing: -0.8px;
        }

        .choice-content p {
          color: #c7edf5;
          font-size: 17px;
          line-height: 1.7;
          margin: 0 0 24px;
        }

        .pill-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 22px;
        }

        .pill {
          padding: 10px 13px;
          border-radius: 999px;
          background: rgba(159,232,255,0.1);
          border: 1px solid rgba(159,232,255,0.18);
          color: #dff9ff;
          font-size: 13px;
          font-weight: 800;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          max-width: 1180px;
          margin: 0 auto;
        }

        .product-card {
          overflow: hidden;
          border-radius: 28px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: 0 20px 50px rgba(0,0,0,0.22);
        }

        .product-card img {
          width: 100%;
          height: 240px;
          object-fit: cover;
          display: block;
        }

        .product-card div {
          padding: 26px;
        }

        .product-card h3 {
          font-size: 24px;
          margin: 0 0 10px;
        }

        .product-card p {
          color: #c7edf5;
          line-height: 1.65;
          margin: 0;
        }

        .fai-box {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 36px;
          align-items: center;
        }

        .fai-panel {
          padding: 38px;
          border-radius: 32px;
          background:
            linear-gradient(145deg, rgba(0,212,255,0.16), rgba(255,255,255,0.06));
          border: 1px solid rgba(255,255,255,0.14);
          box-shadow: 0 24px 70px rgba(0,0,0,0.28);
        }

        .dish-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .dish {
          padding: 16px;
          border-radius: 16px;
          background: rgba(0,0,0,0.28);
          border: 1px solid rgba(255,255,255,0.1);
          font-weight: 900;
          color: #ecfcff;
        }

        .notice {
          margin-top: 20px;
          padding: 16px 18px;
          border-radius: 16px;
          background: rgba(255, 209, 138, 0.1);
          border: 1px solid rgba(255, 209, 138, 0.25);
          color: #ffe0ad;
          line-height: 1.6;
          font-size: 14px;
          font-weight: 700;
        }

        .trust-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          max-width: 1180px;
          margin: 0 auto;
        }

        .trust-card {
          padding: 28px;
          border-radius: 24px;
          background: rgba(255,255,255,0.065);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .trust-card strong {
          display: block;
          font-size: 22px;
          margin-bottom: 10px;
        }

        .trust-card span {
          color: #c7edf5;
          line-height: 1.6;
        }

        .cta {
          padding: 90px 7%;
          text-align: center;
          background:
            linear-gradient(135deg, rgba(0,119,255,0.95), rgba(0,212,255,0.82)),
            radial-gradient(circle at center, rgba(255,255,255,0.18), transparent 35%);
        }

        .cta h2 {
          font-size: clamp(36px, 5vw, 62px);
          margin: 0 0 18px;
          letter-spacing: -1.5px;
        }

        .cta p {
          max-width: 760px;
          margin: 0 auto 32px;
          color: #ecfcff;
          font-size: 20px;
          line-height: 1.6;
        }

        .btn-white {
          background: #ffffff;
          color: #005f73;
          box-shadow: 0 18px 45px rgba(0,0,0,0.2);
        }

        .footer {
          padding: 38px 7%;
          color: #9bcbd3;
          text-align: center;
          line-height: 1.8;
          background: #020b0d;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        @media (max-width: 900px) {
          .hero,
          .split,
          .fai-box {
            grid-template-columns: 1fr;
          }

          .product-grid,
          .trust-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .nav-links a:not(.nav-cta) {
            display: none;
          }

          .hero-card {
            order: -1;
          }

          .hero-image {
            min-height: 360px;
          }
        }

        @media (max-width: 560px) {
          .nav {
            padding: 15px 18px;
          }

          .brand-title {
            font-size: 18px;
          }

          .hero {
            padding: 50px 20px 55px;
          }

          .section {
            padding: 64px 20px;
          }

          .product-grid,
          .trust-grid,
          .dish-grid {
            grid-template-columns: 1fr;
          }

          .choice-img {
            height: 230px;
          }

          .choice-content,
          .fai-panel {
            padding: 26px;
          }

          .btn {
            width: 100%;
          }
        }
      `}</style>

      <nav className="nav">
        <div className="brand">
          <div className="brand-mark">🦀</div>
          <div>
            <div className="brand-title">Crab Talk SG</div>
            <div className="brand-sub">Live Seafood Supply</div>
          </div>
        </div>

        <div className="nav-links">
          <a href="#homecook">Home Cooking</a>
          <a href="#faikee">Fai Kee</a>
          <a href="#visit">Visit</a>
          <a className="nav-cta" href={whatsappLink} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
      </nav>

      <section className="hero">
        <div>
          <div className="eyebrow">Premium Live Seafood · Singapore</div>
          <h1>
            <span className="gradient-text">Live Seafood</span>
            <br />
            Picked Fresh, Served Your Way.
          </h1>
          <p>
            Choose quality live crabs, lobsters, clams, oysters and fish from Crab Talk.
            Bring them home for cooking, or have selected seafood cooked nearby by Fai Kee.
          </p>

          <div className="button-row">
            <a className="btn btn-primary" href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Reserve Today’s Seafood
            </a>
            <a className="btn btn-secondary" href={telegramLink} target="_blank" rel="noopener noreferrer">
              Join Telegram Drops
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-image">
            <div className="floating-panel">
              <h3>From Tank to Table</h3>
              <p>
                Fresh arrivals change daily. WhatsApp before coming down to check
                sizes, price and availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div className="label">Two Ways to Enjoy</div>
          <h2>Home Cooking or Cooked by Fai Kee</h2>
          <p className="section-text">
            Crab Talk is built for customers who want flexibility. Buy live seafood for your own kitchen,
            or ask about nearby cooking options when Fai Kee is open.
          </p>
        </div>

        <div className="split">
          <div className="choice-card" id="homecook">
            <div
              className="choice-img"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=85')",
              }}
            />
            <div className="choice-content">
              <div className="label">Option 1</div>
              <h3>Buy for Home Cooking</h3>
              <p>
                Best for customers who enjoy preparing seafood at home. Tell us your budget, pax and cooking style —
                we can recommend suitable crab, lobster, clams or fish.
              </p>
              <div className="pill-list">
                <span className="pill">Chilli Crab at Home</span>
                <span className="pill">Garlic Butter Lobster</span>
                <span className="pill">Steamed Fish</span>
                <span className="pill">Family Dinner</span>
              </div>
            </div>
          </div>

          <div className="choice-card" id="faikee">
            <div
              className="choice-img"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=1200&q=85')",
              }}
            />
            <div className="choice-content">
              <div className="label">Option 2</div>
              <h3>Cooked by Fai Kee</h3>
              <p>
                Choose your live seafood from Crab Talk and ask about Fai Kee cooking options nearby.
                Popular choices include lobster yee mee, lobster bee hoon and classic crab dishes.
              </p>
              <div className="pill-list">
                <span className="pill">Lobster Yee Mee</span>
                <span className="pill">Lobster Bee Hoon</span>
                <span className="pill">Chilli Crab</span>
                <span className="pill">Cooking Fees Apply</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-header">
          <div className="label">Fresh Selection</div>
          <h2>Premium Seafood Categories</h2>
          <p className="section-text">
            Stock changes daily based on live arrivals. Pre-order is recommended for premium and limited items.
          </p>
        </div>

        <div className="product-grid">
          {homeCooking.map((item) => (
            <div className="product-card" key={item.title}>
              <img src={item.img} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="fai-box">
          <div>
            <div className="label">Market Cooking Collaboration</div>
            <h2>Popular Dishes with Fai Kee</h2>
            <p className="section-text">
              Selected seafood bought from Crab Talk can be cooked nearby by Fai Kee Fish Head Bee Hoon.
              This is a convenient option for customers who want market-fresh seafood cooked hot.
            </p>
            <div className="notice">
              Fai Kee is closed on Sundays and Mondays. Cooking fees apply and cooking is subject to timing,
              queue and kitchen availability.
            </div>
          </div>

          <div className="fai-panel">
            <div className="dish-grid">
              {faiKeeDishes.map((dish) => (
                <div className="dish" key={dish}>
                  {dish}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-header">
          <div className="label">Why Customers Choose Crab Talk</div>
          <h2>Freshness, Flexibility and Honest Recommendations</h2>
        </div>

        <div className="trust-grid">
          <div className="trust-card">
            <strong>Live Selection</strong>
            <span>Choose directly from live seafood tanks where possible.</span>
          </div>
          <div className="trust-card">
            <strong>Budget Friendly</strong>
            <span>Tell us your pax and budget. We help recommend suitable combinations.</span>
          </div>
          <div className="trust-card">
            <strong>Daily Drops</strong>
            <span>Join Telegram for fresh arrivals, promos and limited seafood updates.</span>
          </div>
          <div className="trust-card">
            <strong>Cooking Options</strong>
            <span>Home cooking or nearby Fai Kee cooking depending on availability.</span>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Check Today’s Live Seafood Arrivals</h2>
        <p>
          Message us before coming down to check stock, sizes, prices and reservation availability.
          Best pieces often move fast.
        </p>
        <div className="button-row" style={{ justifyContent: "center" }}>
          <a className="btn btn-white" href={whatsappLink} target="_blank" rel="noopener noreferrer">
            WhatsApp Crab Talk
          </a>
          <a className="btn btn-secondary" href={telegramLink} target="_blank" rel="noopener noreferrer">
            Join Telegram
          </a>
        </div>
      </section>

      <footer className="footer" id="visit">
        <strong>Crab Talk SG</strong>
        <br />
        Live Seafood Supply @ Crab Talk
        <br />
        Commonwealth Crescent Market #01-41 / #01-42 / #01-43
        <br />
        WhatsApp: 9839 8671 · Telegram: t.me/CrabTalkSG
      </footer>
    </main>
  );
}
