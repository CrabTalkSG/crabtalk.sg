export default function App() {
  const whatsappLink =
    "https://wa.me/6598398671?text=Hi%20Crab%20Talk%2C%20I%20would%20like%20to%20check%20today%27s%20live%20seafood%20arrivals.";
  const telegramLink = "https://t.me/CrabTalkSG";
  const eightDaysLink =
    "https://www.8days.sg/eatanddrink/hawkerfood/commonwealth-crab-talk-fai-kee-live-seafood-hawker-collab-856541";

  const seafoodItems = [
    {
      title: "Live Mud Crabs",
      text: "Sri Lanka roe crabs and meaty mud crabs selected for home cooking, steaming, chilli crab and family seafood meals.",
      image: "/images/live-crabs.jpg",
    },
    {
      title: "Live Lobsters",
      text: "Boston lobster and green lobster for lobster yee mee, lobster bee hoon, garlic butter, steaming or grilling.",
      image: "/images/live-lobster.jpg",
    },
    {
      title: "Fresh Shellfish",
      text: "Manila clams, oysters and selected shellfish arrivals for steaming, black bean, chilli or simple sharing dishes.",
      image: "/images/shellfish.jpg",
    },
  ];

  const faiKeeDishes = [
    "Lobster Yee Mee",
    "Lobster Bee Hoon",
    "Chilli Crab",
    "Ginger & Onion Crab",
    "Black Bean Crab / Lala / Fish",
    "Steamed Crab / Lala / Fish",
    "Hong Kong Style Steamed Soon Hock",
  ];

  return (
    <main className="site">
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Inter, Arial, Helvetica, sans-serif;
          background: #05090b;
        }

        .site {
          min-height: 100vh;
          color: #ffffff;
          background:
            radial-gradient(circle at 15% 5%, rgba(0, 194, 255, 0.22), transparent 30%),
            radial-gradient(circle at 90% 15%, rgba(255, 179, 71, 0.12), transparent 28%),
            linear-gradient(180deg, #05090b 0%, #071a1f 40%, #031114 100%);
          overflow-x: hidden;
        }

        .nav {
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 7%;
          background: rgba(5, 9, 11, 0.78);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(255,255,255,0.09);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .brandMark {
          width: 48px;
          height: 48px;
          border-radius: 18px;
          display: grid;
          place-items: center;
          font-size: 25px;
          background:
            linear-gradient(135deg, rgba(0,212,255,1), rgba(0,91,112,1));
          box-shadow: 0 14px 45px rgba(0, 183, 255, 0.28);
        }

        .brandName {
          font-size: 22px;
          font-weight: 900;
          letter-spacing: -0.4px;
        }

        .brandSub {
          margin-top: 3px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1.8px;
          color: #9fe8ff;
        }

        .navLinks {
          display: flex;
          align-items: center;
          gap: 26px;
        }

        .navLinks a {
          color: #d7f7ff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 800;
          opacity: 0.9;
        }

        .navCta {
          padding: 12px 20px;
          border-radius: 999px;
          color: #031114 !important;
          background: linear-gradient(135deg, #ffffff, #9fe8ff);
          box-shadow: 0 14px 42px rgba(0, 183, 255, 0.22);
        }

        .hero {
          min-height: 90vh;
          display: grid;
          grid-template-columns: 1.03fr 0.97fr;
          gap: 52px;
          align-items: center;
          padding: 88px 7% 76px;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          margin-bottom: 24px;
          border-radius: 999px;
          background: rgba(255,255,255,0.075);
          border: 1px solid rgba(255,255,255,0.14);
          color: #9fe8ff;
          font-size: 12px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1.9px;
        }

        .hero h1 {
          margin: 0 0 24px;
          font-size: clamp(48px, 7vw, 88px);
          line-height: 0.96;
          letter-spacing: -3.2px;
        }

        .hero h1 span {
          background: linear-gradient(135deg, #ffffff 0%, #9fe8ff 48%, #ffd28a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .heroLead {
          max-width: 660px;
          margin: 0 0 34px;
          color: #c9eef7;
          font-size: 20px;
          line-height: 1.75;
        }

        .buttonRow {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 54px;
          padding: 17px 28px;
          border-radius: 16px;
          text-decoration: none;
          font-weight: 900;
          font-size: 16px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .btnPrimary {
          color: #031114;
          background: linear-gradient(135deg, #ffffff, #9fe8ff);
          box-shadow: 0 18px 46px rgba(0, 183, 255, 0.26);
        }

        .btnDark {
          color: #ffffff;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.16);
        }

        .heroVisual {
          position: relative;
          min-height: 560px;
          border-radius: 38px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.15);
          background:
            linear-gradient(180deg, rgba(2,8,10,0.05), rgba(2,8,10,0.78)),
            radial-gradient(circle at 30% 20%, rgba(0,212,255,0.32), transparent 28%),
            linear-gradient(135deg, #0b3c46, #02090b);
          box-shadow: 0 38px 110px rgba(0,0,0,0.55);
        }

        .heroVisual::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: var(--hero-image, url('/images/hero-seafood.jpg'));
          background-size: cover;
          background-position: center;
          opacity: 0.72;
          mix-blend-mode: screen;
        }

        .heroVisual::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, transparent 35%, rgba(0,0,0,0.8)),
            radial-gradient(circle at 75% 10%, rgba(255,255,255,0.18), transparent 22%);
        }

        .visualBadge {
          position: absolute;
          top: 24px;
          left: 24px;
          z-index: 2;
          padding: 12px 16px;
          border-radius: 999px;
          background: rgba(2,8,10,0.72);
          border: 1px solid rgba(255,255,255,0.16);
          color: #dff9ff;
          font-size: 13px;
          font-weight: 900;
          backdrop-filter: blur(14px);
        }

        .visualPanel {
          position: absolute;
          left: 26px;
          right: 26px;
          bottom: 26px;
          z-index: 2;
          padding: 28px;
          border-radius: 28px;
          background: rgba(2,8,10,0.72);
          border: 1px solid rgba(255,255,255,0.16);
          backdrop-filter: blur(16px);
        }

        .visualPanel h2 {
          margin: 0 0 9px;
          font-size: 32px;
          letter-spacing: -0.8px;
        }

        .visualPanel p {
          margin: 0;
          color: #c9eef7;
          line-height: 1.6;
          font-size: 16px;
        }

        .section {
          padding: 88px 7%;
        }

        .sectionAlt {
          background: rgba(255,255,255,0.045);
          border-top: 1px solid rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .sectionHeader {
          max-width: 880px;
          margin: 0 auto 48px;
          text-align: center;
        }

        .label {
          margin-bottom: 12px;
          color: #9fe8ff;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 13px;
          font-weight: 900;
        }

        .sectionHeader h2,
        .featureText h2 {
          margin: 0 0 18px;
          font-size: clamp(34px, 5vw, 56px);
          line-height: 1.05;
          letter-spacing: -1.8px;
        }

        .sectionHeader p,
        .featureText p {
          margin: 0;
          color: #c9eef7;
          font-size: 18px;
          line-height: 1.78;
        }

        .choiceGrid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 26px;
        }

        .choiceCard {
          position: relative;
          min-height: 520px;
          padding: 34px;
          border-radius: 34px;
          overflow: hidden;
          background:
            linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.82)),
            radial-gradient(circle at 30% 15%, rgba(0,212,255,0.20), transparent 32%),
            #092932;
          border: 1px solid rgba(255,255,255,0.13);
          box-shadow: 0 28px 80px rgba(0,0,0,0.33);
          display: flex;
          align-items: flex-end;
        }

        .choiceCard::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: var(--image);
          background-size: cover;
          background-position: center;
          opacity: 0.52;
        }

        .choiceCard::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 25%, rgba(0,0,0,0.86));
        }

        .choiceContent {
          position: relative;
          z-index: 2;
        }

        .choiceContent h3 {
          margin: 0 0 14px;
          font-size: 38px;
          letter-spacing: -1.2px;
        }

        .choiceContent p {
          margin: 0 0 24px;
          color: #e2fbff;
          font-size: 17px;
          line-height: 1.68;
        }

        .pillRow {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .pill {
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.16);
          color: #ffffff;
          font-size: 13px;
          font-weight: 900;
        }

        .seafoodGrid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .seafoodCard {
          overflow: hidden;
          border-radius: 30px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: 0 24px 70px rgba(0,0,0,0.28);
        }

        .seafoodImage {
          height: 260px;
          background:
            linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.55)),
            radial-gradient(circle at 30% 15%, rgba(0,212,255,0.25), transparent 32%),
            #0b3c46;
          background-image: linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.55)), var(--image);
          background-size: cover;
          background-position: center;
        }

        .seafoodBody {
          padding: 28px;
        }

        .seafoodBody h3 {
          margin: 0 0 10px;
          font-size: 25px;
          letter-spacing: -0.6px;
        }

        .seafoodBody p {
          margin: 0;
          color: #c9eef7;
          line-height: 1.7;
        }

        .feature {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.92fr 1.08fr;
          gap: 34px;
          align-items: center;
        }

        .featurePanel {
          padding: 38px;
          border-radius: 34px;
          background:
            linear-gradient(145deg, rgba(0,212,255,0.14), rgba(255,255,255,0.065));
          border: 1px solid rgba(255,255,255,0.14);
          box-shadow: 0 28px 80px rgba(0,0,0,0.3);
        }

        .dishGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin-top: 26px;
        }

        .dish {
          padding: 17px;
          border-radius: 17px;
          background: rgba(0,0,0,0.28);
          border: 1px solid rgba(255,255,255,0.11);
          font-size: 15px;
          font-weight: 900;
          color: #f1fcff;
        }

        .notice {
          margin-top: 24px;
          padding: 16px 18px;
          border-radius: 18px;
          color: #ffe2b0;
          background: rgba(255, 188, 92, 0.11);
          border: 1px solid rgba(255, 188, 92, 0.24);
          line-height: 1.65;
          font-size: 14px;
          font-weight: 800;
        }

        .trustGrid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .trustCard {
          padding: 28px;
          border-radius: 26px;
          background: rgba(255,255,255,0.065);
          border: 1px solid rgba(255,255,255,0.11);
        }

        .trustCard strong {
          display: block;
          margin-bottom: 10px;
          font-size: 22px;
          letter-spacing: -0.5px;
        }

        .trustCard span {
          color: #c9eef7;
          line-height: 1.65;
          font-size: 15px;
        }

        .cta {
          padding: 92px 7%;
          text-align: center;
          background:
            linear-gradient(135deg, rgba(0, 183, 255, 0.92), rgba(80, 227, 194, 0.78)),
            radial-gradient(circle at center, rgba(255,255,255,0.22), transparent 34%);
        }

        .cta h2 {
          max-width: 980px;
          margin: 0 auto 18px;
          color: #031114;
          font-size: clamp(38px, 5vw, 64px);
          line-height: 1.05;
          letter-spacing: -2px;
        }

        .cta p {
          max-width: 760px;
          margin: 0 auto 34px;
          color: #06323a;
          font-size: 20px;
          line-height: 1.6;
          font-weight: 700;
        }

        .cta .btnPrimary {
          background: #031114;
          color: #ffffff;
          box-shadow: 0 20px 50px rgba(0,0,0,0.22);
        }

        .footer {
          padding: 42px 7%;
          background: #05090b;
          color: #a9dce6;
          border-top: 1px solid rgba(255,255,255,0.1);
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          gap: 24px;
          line-height: 1.8;
        }

        .footer strong {
          color: #ffffff;
          font-size: 18px;
        }

        @media (max-width: 980px) {
          .hero,
          .choiceGrid,
          .feature,
          .footer {
            grid-template-columns: 1fr;
          }

          .heroVisual {
            min-height: 420px;
          }

          .seafoodGrid,
          .trustGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .navLinks a:not(.navCta) {
            display: none;
          }
        }

        @media (max-width: 620px) {
          .nav {
            padding: 14px 20px;
          }

          .brandMark {
            width: 42px;
            height: 42px;
            border-radius: 15px;
          }

          .brandName {
            font-size: 18px;
          }

          .brandSub {
            display: none;
          }

          .hero,
          .section {
            padding-left: 22px;
            padding-right: 22px;
          }

          .hero {
            padding-top: 52px;
          }

          .buttonRow,
          .btn {
            width: 100%;
          }

          .seafoodGrid,
          .trustGrid,
          .dishGrid {
            grid-template-columns: 1fr;
          }

          .choiceCard {
            min-height: 440px;
            padding: 26px;
          }

          .choiceContent h3 {
            font-size: 31px;
          }

          .visualPanel {
            left: 18px;
            right: 18px;
            bottom: 18px;
            padding: 22px;
          }

          .visualPanel h2 {
            font-size: 26px;
          }
        }
      `}</style>

      <nav className="nav">
        <div className="brand">
          <div className="brandMark">🦀</div>
          <div>
            <div className="brandName">Crab Talk SG</div>
            <div className="brandSub">Live Seafood Supply</div>
          </div>
        </div>

        <div className="navLinks">
          <a href="#home">Home Cooking</a>
          <a href="#faikee">Fai Kee</a>
          <a href="#visit">Visit</a>
          <a className="navCta" href={whatsappLink} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
      </nav>

      <section className="hero">
        <div>
          <div className="eyebrow">Commonwealth Crescent Market · Singapore</div>
          <h1>
            Premium <span>live seafood</span>, served your way.
          </h1>
          <p className="heroLead">
            Choose live crabs, lobsters, clams, oysters and fish directly from Crab Talk.
            Bring them home for cooking, or ask about Fai Kee cooking options nearby.
          </p>

          <div className="buttonRow">
            <a className="btn btnPrimary" href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Reserve Today’s Seafood
            </a>
            <a className="btn btnDark" href={telegramLink} target="_blank" rel="noopener noreferrer">
              Join Telegram Drops
            </a>
          </div>
        </div>

        <div className="heroVisual">
          <div className="visualBadge">Fresh arrivals · Limited quantity</div>
          <div className="visualPanel">
            <h2>From tank to table</h2>
            <p>
              Daily stock changes fast. Message us before coming down for today’s sizes,
              prices and reservation availability.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <div className="label">Two Ways to Enjoy</div>
          <h2>Home cooking or cooked by Fai Kee</h2>
          <p>
            Crab Talk is not just a seafood stall. It is a flexible live seafood experience:
            buy fresh seafood for your own kitchen, or have selected items cooked nearby.
          </p>
        </div>

        <div className="choiceGrid">
          <div
            className="choiceCard"
            id="home"
            style={{ "--image": "url('/images/home-cooking.jpg')" }}
          >
            <div className="choiceContent">
              <div className="label">Option 1</div>
              <h3>Buy for Home Cooking</h3>
              <p>
                Best for family dinners, weekend seafood feasts and customers who want
                to cook their own chilli crab, steamed fish or garlic butter lobster.
              </p>
              <div className="pillRow">
                <span className="pill">Live Crabs</span>
                <span className="pill">Lobsters</span>
                <span className="pill">Clams</span>
                <span className="pill">Fresh Fish</span>
              </div>
            </div>
          </div>

          <div
            className="choiceCard"
            id="faikee"
            style={{ "--image": "url('/images/fai-kee-lobster-yee-mee.jpg')" }}
          >
            <div className="choiceContent">
              <div className="label">Option 2</div>
              <h3>Cooked by Fai Kee</h3>
              <p>
                Choose your seafood from Crab Talk and ask about cooking options with
                Fai Kee Fish Head Bee Hoon. Popular for lobster yee mee and crab dishes.
              </p>
              <div className="pillRow">
                <span className="pill">Lobster Yee Mee</span>
                <span className="pill">Lobster Bee Hoon</span>
                <span className="pill">Chilli Crab</span>
                <span className="pill">Cooking Fees Apply</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="sectionHeader">
          <div className="label">Fresh Selection</div>
          <h2>Premium seafood categories</h2>
          <p>
            These are the core seafood categories customers usually ask for. Once your real
            photos are uploaded, this section will look like a professional seafood brand site.
          </p>
        </div>

        <div className="seafoodGrid">
          {seafoodItems.map((item) => (
            <div className="seafoodCard" key={item.title}>
              <div className="seafoodImage" style={{ "--image": `url('${item.image}')` }} />
              <div className="seafoodBody">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="feature">
          <div className="featureText">
            <div className="label">Fai Kee Collaboration</div>
            <h2>Popular cooked dishes customers ask for</h2>
            <p>
              Customers can choose seafood from Crab Talk and ask about Fai Kee cooking options.
              This is especially attractive for customers who want live seafood quality without
              needing to cook at home.
            </p>
            <div className="notice">
              Fai Kee is closed on Sundays and Mondays. Cooking fees apply and availability
              depends on queue, timing and kitchen capacity.
            </div>
          </div>

          <div className="featurePanel">
            <div className="dishGrid">
              {faiKeeDishes.map((dish) => (
                <div className="dish" key={dish}>
                  {dish}
                </div>
              ))}
            </div>

            <div style={{ marginTop: 26 }}>
              <a className="btn btnDark" href={eightDaysLink} target="_blank" rel="noopener noreferrer">
                Read 8 Days Feature
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="sectionHeader">
          <div className="label">Why Crab Talk</div>
          <h2>Freshness, flexibility and honest recommendations</h2>
        </div>

        <div className="trustGrid">
          <div className="trustCard">
            <strong>Live Selection</strong>
            <span>Choose directly from live seafood supply where possible.</span>
          </div>
          <div className="trustCard">
            <strong>Budget Friendly</strong>
            <span>Tell us your pax and budget. We recommend suitable combinations.</span>
          </div>
          <div className="trustCard">
            <strong>Daily Drops</strong>
            <span>Join Telegram for fresh arrivals, promos and limited seafood updates.</span>
          </div>
          <div className="trustCard">
            <strong>Two Options</strong>
            <span>Home cooking or nearby Fai Kee cooking depending on availability.</span>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Check today’s live seafood arrivals</h2>
        <p>
          Stock changes daily and the best pieces move fast. Message us before coming down
          to check size, price and availability.
        </p>
        <div className="buttonRow" style={{ justifyContent: "center" }}>
          <a className="btn btnPrimary" href={whatsappLink} target="_blank" rel="noopener noreferrer">
            WhatsApp Crab Talk
          </a>
          <a className="btn btnDark" href={telegramLink} target="_blank" rel="noopener noreferrer">
            Join Telegram
          </a>
        </div>
      </section>

      <footer className="footer" id="visit">
        <div>
          <strong>Crab Talk SG</strong>
          <br />
          Live Seafood Supply @ Crab Talk
        </div>
        <div>
          Commonwealth Crescent Market
          <br />
          #01-41 / #01-42 / #01-43
        </div>
        <div>
          WhatsApp: 9839 8671
          <br />
          Telegram: t.me/CrabTalkSG
        </div>
      </footer>
    </main>
  );
}
