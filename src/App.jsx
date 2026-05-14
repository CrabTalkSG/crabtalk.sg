export default function App() {
  const whatsappLink = "https://wa.me/6598398671";
  const eightDaysLink =
    "https://www.8days.sg/eatanddrink/hawkerfood/commonwealth-crab-talk-fai-kee-live-seafood-hawker-collab-856541";
  const botakJazzLink =
    "https://www.tiktok.com/@botakjazz/video/7602204733155364116";

  return (
    <div className="site">
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #03191d;
        }

        .site {
          min-height: 100vh;
          color: #ffffff;
          background:
            radial-gradient(circle at top left, rgba(0, 183, 255, 0.20), transparent 35%),
            linear-gradient(180deg, #021b1f 0%, #05323a 45%, #021b1f 100%);
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 7%;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          position: sticky;
          top: 0;
          background: rgba(2, 27, 31, 0.88);
          backdrop-filter: blur(14px);
          z-index: 10;
        }

        .brand {
          font-size: 24px;
          font-weight: 800;
          letter-spacing: 0.5px;
        }

        .navLinks {
          display: flex;
          gap: 22px;
          font-size: 14px;
          color: #b8dfe8;
        }

        .navLinks a {
          color: #b8dfe8;
          text-decoration: none;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 42px;
          align-items: center;
          padding: 80px 7% 70px;
        }

        .badge {
          display: inline-block;
          padding: 10px 16px;
          border: 1px solid rgba(159, 232, 255, 0.35);
          border-radius: 999px;
          color: #9fe8ff;
          font-size: 14px;
          margin-bottom: 20px;
          background: rgba(255, 255, 255, 0.06);
        }

        h1 {
          font-size: clamp(46px, 7vw, 86px);
          line-height: 0.95;
          margin: 0;
          letter-spacing: -2px;
        }

        .hero p {
          font-size: 21px;
          line-height: 1.65;
          color: #d2edf3;
          max-width: 680px;
          margin: 26px 0 0;
        }

        .heroActions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 34px;
        }

        .btn {
          display: inline-block;
          padding: 16px 26px;
          border-radius: 14px;
          text-decoration: none;
          font-weight: 800;
          font-size: 16px;
          transition: 0.25s ease;
        }

        .btnPrimary {
          background: linear-gradient(135deg, #00b7ff, #10d7c4);
          color: #021b1f;
          box-shadow: 0 12px 34px rgba(0, 183, 255, 0.28);
        }

        .btnSecondary {
          border: 1px solid rgba(255, 255, 255, 0.26);
          color: #ffffff;
          background: rgba(255, 255, 255, 0.07);
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .heroCard {
          border-radius: 30px;
          padding: 26px;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.13), rgba(255,255,255,0.04));
          border: 1px solid rgba(255,255,255,0.16);
          box-shadow: 0 24px 70px rgba(0,0,0,0.35);
        }

        .heroCard img {
          width: 100%;
          height: 420px;
          object-fit: cover;
          border-radius: 24px;
          display: block;
        }

        .heroCardText {
          margin-top: 18px;
          color: #cdebf1;
          line-height: 1.5;
        }

        .section {
          padding: 70px 7%;
        }

        .sectionHeader {
          max-width: 820px;
          margin-bottom: 36px;
        }

        .eyebrow {
          color: #9fe8ff;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1.8px;
          font-size: 13px;
          margin-bottom: 12px;
        }

        h2 {
          font-size: clamp(32px, 4vw, 52px);
          line-height: 1.05;
          margin: 0;
          letter-spacing: -1px;
        }

        .sectionHeader p {
          color: #c7e8ef;
          font-size: 18px;
          line-height: 1.65;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .card {
          border-radius: 26px;
          background: rgba(255, 255, 255, 0.075);
          border: 1px solid rgba(255, 255, 255, 0.14);
          padding: 28px;
          box-shadow: 0 18px 50px rgba(0,0,0,0.22);
        }

        .card h3 {
          font-size: 24px;
          margin: 0 0 12px;
        }

        .card p {
          color: #c7e8ef;
          line-height: 1.65;
          margin: 0;
        }

        .split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .premiumPanel {
          border-radius: 30px;
          padding: 34px;
          background:
            linear-gradient(135deg, rgba(0,183,255,0.16), rgba(255,255,255,0.06));
          border: 1px solid rgba(159,232,255,0.20);
        }

        .premiumPanel h3 {
          font-size: 32px;
          margin: 0 0 16px;
        }

        .premiumPanel ul {
          padding-left: 20px;
          color: #d6f3f7;
          line-height: 1.9;
          font-size: 17px;
        }

        .mediaGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .mediaCard {
          overflow: hidden;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.16);
          box-shadow: 0 22px 60px rgba(0,0,0,0.32);
        }

        .mediaCard img {
          width: 100%;
          height: 330px;
          object-fit: cover;
          display: block;
        }

        .mediaContent {
          padding: 26px;
        }

        .mediaContent h3 {
          font-size: 26px;
          margin: 0 0 10px;
        }

        .mediaContent p {
          color: #c7e8ef;
          line-height: 1.6;
          margin-bottom: 22px;
        }

        .menuList {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .menuItem {
          padding: 18px 20px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #e9fbff;
          font-weight: 700;
        }

        .infoBar {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 34px;
        }

        .infoBox {
          padding: 22px;
          border-radius: 22px;
          background: rgba(0, 0, 0, 0.22);
          border: 1px solid rgba(255,255,255,0.12);
        }

        .infoBox strong {
          display: block;
          color: #9fe8ff;
          margin-bottom: 8px;
        }

        .footer {
          padding: 50px 7%;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          color: #b9dfe7;
        }

        @media (max-width: 900px) {
          .hero,
          .split,
          .mediaGrid {
            grid-template-columns: 1fr;
          }

          .grid,
          .infoBar,
          .menuList {
            grid-template-columns: 1fr;
          }

          .navLinks {
            display: none;
          }

          .hero {
            padding-top: 50px;
          }

          .heroCard img,
          .mediaCard img {
            height: 260px;
          }
        }
      `}</style>

      <nav className="nav">
        <div className="brand">🦀 Crab Talk SG</div>
        <div className="navLinks">
          <a href="#home">Home</a>
          <a href="#options">Home Cooking / Fai Kee</a>
          <a href="#features">Features</a>
          <a href="#menu">Popular Items</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div>
          <div className="badge">Live Seafood Supply @ Crab Talk</div>
          <h1>Premium live seafood, selected fresh daily.</h1>
          <p>
            Pick your live seafood at Crab Talk and enjoy it your way — bring it
            home for cooking, or have selected items cooked nearby through our
            Fai Kee collaboration.
          </p>

          <div className="heroActions">
            <a className="btn btnPrimary" href={whatsappLink} target="_blank" rel="noreferrer">
              Order Now on WhatsApp
            </a>
            <a className="btn btnSecondary" href="#options">
              View Options
            </a>
          </div>

          <div className="infoBar">
            <div className="infoBox">
              <strong>Address</strong>
              31 Commonwealth Crescent #01-41/42/43 S(149644)
            </div>
            <div className="infoBox">
              <strong>Speciality</strong>
              Live Crabs, Lobsters, Oysters, Clams & Fish
            </div>
            <div className="infoBox">
              <strong>Best For</strong>
              Home Cooking, Family Meals & Seafood Gatherings
            </div>
          </div>
        </div>

        <div className="heroCard">
          <img src="/images/8days-feature.jpg" alt="Crab Talk featured on 8 Days" />
          <div className="heroCardText">
            Featured by 8 Days for our live seafood and Fai Kee cooking
            collaboration at Commonwealth.
          </div>
        </div>
      </section>

      <section className="section" id="options">
        <div className="sectionHeader">
          <div className="eyebrow">Two Ways To Enjoy</div>
          <h2>Choose live seafood for home cooking, or enjoy selected dishes cooked by Fai Kee.</h2>
          <p>
            Crab Talk focuses on live seafood supply. Customers can buy fresh
            seafood directly, or arrange for nearby cooking through the Fai Kee
            collaboration where available.
          </p>
        </div>

        <div className="split">
          <div className="premiumPanel">
            <h3>🏠 Home Cooking</h3>
            <p>
              Ideal for customers who want fresh live seafood to prepare at home.
              Choose your crab, lobster, fish, oysters or clams directly from the stall.
            </p>
            <ul>
              <li>Live mud crabs and premium roe crabs</li>
              <li>Boston lobster and seasonal lobster options</li>
              <li>Fresh oysters, Manila clams and live fish</li>
              <li>Suitable for steaming, chilli crab, bee hoon and family meals</li>
            </ul>
            <a className="btn btnPrimary" href={whatsappLink} target="_blank" rel="noreferrer">
              Reserve Seafood
            </a>
          </div>

          <div className="premiumPanel">
            <h3>🔥 Cooked By Fai Kee</h3>
            <p>
              Buy live seafood from Crab Talk and enjoy selected cooking styles
              through Fai Kee, known for classic zi char-style seafood dishes.
            </p>
            <ul>
              <li>Lobster Yee Mee</li>
              <li>Lobster Bee Hoon</li>
              <li>Chilli Crab / Chilli Lala</li>
              <li>Black Bean, Ginger Onion and Steamed options</li>
            </ul>
            <a className="btn btnSecondary" href="#features">
              See Media Features
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="sectionHeader">
          <div className="eyebrow">Media Features</div>
          <h2>As featured by 8 Days and Botak Jazz.</h2>
          <p>
            Real coverage, real dishes and real seafood — showcasing the Crab
            Talk experience and our popular cooked seafood collaborations.
          </p>
        </div>

        <div className="mediaGrid">
          <div className="mediaCard">
            <img src="/images/8days-feature.jpg" alt="8 Days Crab Talk feature" />
            <div className="mediaContent">
              <h3>8 Days Feature</h3>
              <p>
                8 Days featured Crab Talk and the Commonwealth live seafood
                collaboration, highlighting the unique buy-live-and-cook-nearby concept.
              </p>
              <a className="btn btnPrimary" href={eightDaysLink} target="_blank" rel="noreferrer">
                Read 8 Days Feature
              </a>
            </div>
          </div>

          <div className="mediaCard">
            <img src="/images/botak-jazz-feature.jpg" alt="Botak Jazz lobster yee mee feature" />
            <div className="mediaContent">
              <h3>Botak Jazz TikTok Feature</h3>
              <p>
                Botak Jazz featured our seafood experience on TikTok, including
                the popular lobster yee mee style seafood dish.
              </p>
              <a className="btn btnPrimary" href={botakJazzLink} target="_blank" rel="noreferrer">
                Watch TikTok Feature
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="menu">
        <div className="sectionHeader">
          <div className="eyebrow">Popular Seafood</div>
          <h2>Fresh seafood favourites customers ask for.</h2>
          <p>
            Availability changes daily depending on live stock and seasonal supply.
            Pre-order is recommended for popular items.
          </p>
        </div>

        <div className="grid">
          <div className="card">
            <h3>🦀 Live Crabs</h3>
            <p>
              Premium mud crabs, roe crabs and seasonal crab selections for
              steaming, chilli crab, black bean or home cooking.
            </p>
          </div>

          <div className="card">
            <h3>🦞 Live Lobsters</h3>
            <p>
              Boston lobster and other lobster options suitable for yee mee,
              bee hoon, steaming or celebration meals.
            </p>
          </div>

          <div className="card">
            <h3>🦪 Oysters & Shellfish</h3>
            <p>
              Fresh oysters, Manila clams and shellfish options for seafood
              platters, steaming and zi char-style dishes.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "32px" }} className="menuList">
          <div className="menuItem">Lobster Yee Mee</div>
          <div className="menuItem">Lobster Bee Hoon</div>
          <div className="menuItem">Chilli Crab</div>
          <div className="menuItem">Ginger Onion Crab</div>
          <div className="menuItem">Black Bean Crab / Lala</div>
          <div className="menuItem">Hong Kong Style Steamed Fish</div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="premiumPanel" style={{ textAlign: "center" }}>
          <div className="eyebrow">Visit Crab Talk</div>
          <h2>Reserve your seafood before stocks run out.</h2>
          <p style={{ color: "#d6f3f7", fontSize: "18px", lineHeight: "1.7" }}>
            31 Commonwealth Crescent #01-41/42/43 S(149644)
            <br />
            WhatsApp: 9839 8671
          </p>

          <a className="btn btnPrimary" href={whatsappLink} target="_blank" rel="noreferrer">
            WhatsApp Crab Talk
          </a>
        </div>
      </section>

      <footer className="footer">
        © Crab Talk SG · Live Seafood Supply @ Crab Talk
      </footer>
    </div>
  );
}
