export default function App() {
  const whatsappLink =
    "https://wa.me/6598398671?text=Hi%20Crab%20Talk%2C%20I%20would%20like%20to%20order%20live%20seafood.";

  return (
    <div className="site">
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #031b20;
        }

        .site {
          min-height: 100vh;
          background: linear-gradient(180deg, #021b1f 0%, #06404a 55%, #021b1f 100%);
          color: white;
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 22px 8%;
          background: rgba(0, 0, 0, 0.35);
          position: sticky;
          top: 0;
          z-index: 10;
          backdrop-filter: blur(8px);
        }

        .logo {
          font-size: 26px;
          font-weight: 800;
        }

        .nav a {
          color: white;
          text-decoration: none;
          margin-left: 24px;
          font-weight: 600;
        }

        .hero {
          padding: 90px 8% 70px;
          text-align: center;
        }

        .badge {
          display: inline-block;
          background: rgba(0, 183, 255, 0.15);
          color: #9fe8ff;
          padding: 10px 18px;
          border: 1px solid rgba(159, 232, 255, 0.35);
          border-radius: 999px;
          font-weight: 700;
          margin-bottom: 24px;
        }

        h1 {
          font-size: 64px;
          margin: 0 0 18px;
          line-height: 1.05;
        }

        .hero p {
          font-size: 24px;
          color: #c8f3ff;
          max-width: 850px;
          margin: 0 auto 34px;
          line-height: 1.5;
        }

        .buttons {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-block;
          padding: 18px 34px;
          border-radius: 14px;
          text-decoration: none;
          font-size: 18px;
          font-weight: 800;
        }

        .btn-primary {
          background: #00b7ff;
          color: white;
        }

        .btn-secondary {
          border: 1px solid rgba(255, 255, 255, 0.35);
          color: white;
          background: rgba(255, 255, 255, 0.08);
        }

        .section {
          padding: 70px 8%;
        }

        .section-title {
          text-align: center;
          font-size: 40px;
          margin: 0 0 16px;
        }

        .section-subtitle {
          text-align: center;
          color: #bdefff;
          max-width: 760px;
          margin: 0 auto 42px;
          font-size: 18px;
          line-height: 1.6;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 22px;
        }

        .card {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 22px;
          padding: 28px;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
        }

        .card h3 {
          margin: 0 0 12px;
          font-size: 24px;
        }

        .card p {
          margin: 0;
          color: #d8f6ff;
          line-height: 1.6;
          font-size: 16px;
        }

        .feature {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 34px;
          align-items: center;
        }

        .feature-box {
          background: rgba(0, 0, 0, 0.28);
          border-radius: 26px;
          padding: 36px;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .feature-box h2 {
          font-size: 38px;
          margin: 0 0 18px;
        }

        .feature-box p {
          color: #d8f6ff;
          line-height: 1.7;
          font-size: 18px;
        }

        .steps {
          counter-reset: step;
        }

        .step {
          position: relative;
          padding-left: 58px;
        }

        .step::before {
          counter-increment: step;
          content: counter(step);
          position: absolute;
          left: 0;
          top: 24px;
          width: 38px;
          height: 38px;
          background: #00b7ff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
        }

        .menu-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 16px;
          margin-top: 24px;
        }

        .menu-item {
          padding: 18px 20px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          font-weight: 700;
        }

        .contact {
          text-align: center;
          background: rgba(0, 0, 0, 0.3);
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }

        .contact h2 {
          font-size: 42px;
          margin-bottom: 16px;
        }

        .contact p {
          color: #d8f6ff;
          font-size: 18px;
          line-height: 1.7;
        }

        .footer {
          text-align: center;
          padding: 28px;
          color: #aeefff;
          background: rgba(0, 0, 0, 0.38);
        }

        @media (max-width: 700px) {
          .nav {
            flex-direction: column;
            gap: 14px;
          }

          .nav a {
            margin: 0 8px;
            font-size: 14px;
          }

          h1 {
            font-size: 42px;
          }

          .hero p {
            font-size: 19px;
          }

          .section-title {
            font-size: 32px;
          }
        }
      `}</style>

      <nav className="nav">
        <div className="logo">🦀 Crab Talk SG</div>
        <div>
          <a href="#seafood">Seafood</a>
          <a href="#cook">Cooking</a>
          <a href="#order">Order</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="badge">Live Seafood Supply @ Crab Talk</div>
        <h1>Fresh Live Seafood, Picked for Home Cooking</h1>
        <p>
          Premium live crabs, lobsters, oysters, clams and seasonal seafood
          prepared for customers who want freshness, value and trusted service
          from a local seafood stall.
        </p>

        <div className="buttons">
          <a className="btn btn-primary" href={whatsappLink} target="_blank">
            Order Now on WhatsApp
          </a>
          <a className="btn btn-secondary" href="https://t.me/CrabTalkSG" target="_blank">
            Join Telegram Updates
          </a>
        </div>
      </section>

      <section className="section" id="seafood">
        <h2 className="section-title">What We Sell</h2>
        <p className="section-subtitle">
          Our selection changes based on live arrival and seasonal supply. Walk-in
          and pre-order are recommended as quantities are limited.
        </p>

        <div className="grid">
          <div className="card">
            <h3>🦀 Live Mud Crabs</h3>
            <p>
              Sri Lanka roe crabs, meaty Indonesian mud crabs and seasonal live
              crab selections suitable for steaming, chilli crab or black bean style.
            </p>
          </div>

          <div className="card">
            <h3>🦞 Live Lobsters</h3>
            <p>
              Boston lobster, green lobster and premium seasonal lobster options
              for home cooking or cooked dishes nearby.
            </p>
          </div>

          <div className="card">
            <h3>🦪 Fresh Oysters</h3>
            <p>
              Selected oysters such as Canadian and Australian varieties when
              available. Best enjoyed fresh and chilled.
            </p>
          </div>

          <div className="card">
            <h3>🐚 Clams & Shellfish</h3>
            <p>
              Manila clams, lala and shellfish options suitable for steaming,
              chilli sauce, black bean or ginger onion cooking.
            </p>
          </div>

          <div className="card">
            <h3>🐟 Live Fish</h3>
            <p>
              Soon Hock, grouper, turbot and other live fish options depending
              on supply. Great for Hong Kong-style steaming.
            </p>
          </div>

          <div className="card">
            <h3>⭐ Premium Seafood</h3>
            <p>
              Seasonal premium items such as Alaskan king crab, Australian rock
              lobster and abalone may be available by pre-order.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="cook">
        <div className="feature">
          <div className="feature-box">
            <h2>Buy Live Seafood, Cook Nearby</h2>
            <p>
              Customers can choose live seafood directly from Crab Talk and have
              selected items cooked nearby through our market cooking arrangement.
              This is ideal for customers who want restaurant-style dishes without
              paying restaurant seafood prices.
            </p>
            <p>
              Popular choices include chilli crab, black bean crab, ginger onion
              crab, steamed fish, lobster yee mee and lobster bee hoon.
            </p>
          </div>

          <div className="feature-box">
            <h2>Why Customers Choose Us</h2>
            <p>
              We focus on live seafood freshness, clear recommendations and
              practical advice on how to cook each item. Our team helps customers
              choose seafood based on budget, size, meatiness and preferred cooking
              style.
            </p>
          </div>
        </div>
      </section>

      <section className="section steps" id="order">
        <h2 className="section-title">How to Order</h2>
        <p className="section-subtitle">
          Simple ordering process for walk-in customers and pre-orders.
        </p>

        <div className="grid">
          <div className="card step">
            <h3>Choose Your Seafood</h3>
            <p>
              Message us or visit the stall to check today’s live arrivals,
              sizes and availability.
            </p>
          </div>

          <div className="card step">
            <h3>Reserve Early</h3>
            <p>
              Live seafood moves fast. Pre-order is recommended especially for
              crabs, lobsters and premium seafood.
            </p>
          </div>

          <div className="card step">
            <h3>Collect or Cook</h3>
            <p>
              Self-collect for home cooking, or ask about cooking options nearby
              depending on timing and availability.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Popular Cooking Styles</h2>
        <p className="section-subtitle">
          Cooking options depend on seafood type and kitchen availability.
        </p>

        <div className="menu-list">
          <div className="menu-item">Chilli Crab</div>
          <div className="menu-item">Black Bean Crab</div>
          <div className="menu-item">Ginger Onion Crab</div>
          <div className="menu-item">Steamed Crab</div>
          <div className="menu-item">Lobster Yee Mee</div>
          <div className="menu-item">Lobster Bee Hoon</div>
          <div className="menu-item">Hong Kong Style Steamed Fish</div>
          <div className="menu-item">Steamed Manila Clams</div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Fresh Arrival Updates</h2>
        <p className="section-subtitle">
          Join our Telegram or WhatsApp updates for daily arrivals, limited
          seafood drops, bundle promotions and seasonal premium items.
        </p>

        <div className="buttons">
          <a className="btn btn-primary" href="https://t.me/CrabTalkSG" target="_blank">
            Join Telegram
          </a>
          <a className="btn btn-secondary" href={whatsappLink} target="_blank">
            WhatsApp Us
          </a>
        </div>
      </section>

      <section className="section contact" id="contact">
        <h2>Visit Crab Talk</h2>
        <p>
          <strong>Live Seafood Supply @ Crab Talk</strong>
          <br />
          Commonwealth Crescent Market
          <br />
          Stall #01-41 / #01-42 / #01-43
          <br />
          WhatsApp: <strong>9839 8671</strong>
        </p>

        <div className="buttons">
          <a className="btn btn-primary" href={whatsappLink} target="_blank">
            Order on WhatsApp
          </a>
          <a className="btn btn-secondary" href="https://www.google.com/maps/search/Commonwealth+Crescent+Market" target="_blank">
            Open Map
          </a>
        </div>
      </section>

      <footer className="footer">
        © 2026 Crab Talk SG. Live seafood availability changes daily. While stocks last.
      </footer>
    </div>
  );
}
