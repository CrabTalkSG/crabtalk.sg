const fallbackSvg = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#021b1f"/>
      <stop offset="100%" stop-color="#0b5964"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#g)"/>
  <text x="50%" y="46%" dominant-baseline="middle" text-anchor="middle" font-size="72" fill="#ffffff" font-family="Arial">Crab Talk SG</text>
  <text x="50%" y="57%" dominant-baseline="middle" text-anchor="middle" font-size="34" fill="#9fe8ff" font-family="Arial">Live Seafood Supply</text>
</svg>
`)}`;

const img = {
  liveCrab:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/A%20live%20mud%20crab%20in%20Borneo.jpg",
  lobster:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Boston%20lobsters.jpg",
  oysters:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Oysters%20on%20ice.jpg",
  chilliCrab:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chilli_crab.jpg",
  clams:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Venerupis%20philippinarum.jpg",
  lobsterNoodles:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/HK%20KTD%20%E4%B9%9D%E9%BE%8D%E7%81%A3%20%E5%BE%B7%E7%A6%8F%E5%BB%A3%E5%A0%B4%20Telford%20Plaza%20II%20shop%20102%20Delicious%20Seafood%20Restaurant%20%E9%BE%8D%E8%9D%A6%E4%BC%8A%E9%BA%B5%20Lobster%20Yee%20Mein%20Noodles%20October%202022%20Px3%2002.jpg",
};

function ImageCard({ src, title, text }) {
  return (
    <div className="imageCard">
      <img
        src={src}
        alt={title}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = fallbackSvg;
        }}
      />
      <div className="imageOverlay">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function ProductCard({ title, desc }) {
  return (
    <div className="productCard">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function App() {
  return (
    <div className="site">
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #021b1f;
        }

        .site {
          min-height: 100vh;
          color: white;
          font-family: Arial, sans-serif;
          background:
            radial-gradient(circle at top left, rgba(0, 183, 255, 0.22), transparent 34%),
            linear-gradient(180deg, #021b1f 0%, #043039 45%, #010f12 100%);
        }

        .nav {
          position: sticky;
          top: 0;
          z-index: 10;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 7%;
          background: rgba(2, 27, 31, 0.88);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .brand {
          font-size: 24px;
          font-weight: 800;
          letter-spacing: 0.5px;
        }

        .navLinks {
          display: flex;
          gap: 24px;
          font-size: 15px;
          color: #c9eef7;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 42px;
          align-items: center;
          padding: 80px 7% 60px;
        }

        .badge {
          display: inline-block;
          padding: 9px 14px;
          border: 1px solid rgba(159, 232, 255, 0.35);
          border-radius: 999px;
          color: #9fe8ff;
          background: rgba(255,255,255,0.06);
          font-weight: 700;
          font-size: 14px;
          margin-bottom: 20px;
        }

        .hero h1 {
          font-size: clamp(44px, 7vw, 86px);
          line-height: 0.95;
          margin: 0 0 20px;
          letter-spacing: -2px;
        }

        .hero h1 span {
          color: #9fe8ff;
        }

        .heroText {
          font-size: 20px;
          line-height: 1.7;
          color: #d7f6ff;
          max-width: 660px;
          margin-bottom: 32px;
        }

        .heroActions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        .primaryBtn,
        .secondaryBtn {
          display: inline-block;
          padding: 17px 28px;
          border-radius: 14px;
          text-decoration: none;
          font-weight: 800;
          font-size: 17px;
        }

        .primaryBtn {
          background: linear-gradient(135deg, #00b7ff, #50e3c2);
          color: #001014;
          box-shadow: 0 16px 40px rgba(0, 183, 255, 0.28);
        }

        .secondaryBtn {
          color: white;
          border: 1px solid rgba(255,255,255,0.22);
          background: rgba(255,255,255,0.06);
        }

        .heroImage {
          position: relative;
          min-height: 520px;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 30px 90px rgba(0,0,0,0.45);
          border: 1px solid rgba(255,255,255,0.12);
        }

        .heroImage img {
          width: 100%;
          height: 100%;
          min-height: 520px;
          object-fit: cover;
          display: block;
          filter: saturate(1.08) contrast(1.05);
        }

        .heroImage::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 35%, rgba(0,0,0,0.7));
        }

        .heroImageText {
          position: absolute;
          left: 28px;
          right: 28px;
          bottom: 28px;
          z-index: 2;
        }

        .heroImageText h2 {
          font-size: 32px;
          margin: 0 0 8px;
        }

        .heroImageText p {
          color: #d8f8ff;
          line-height: 1.5;
          margin: 0;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          padding: 0 7% 70px;
        }

        .stat {
          padding: 24px;
          border-radius: 22px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .stat strong {
          display: block;
          font-size: 30px;
          color: #9fe8ff;
          margin-bottom: 6px;
        }

        .section {
          padding: 76px 7%;
        }

        .sectionHeader {
          max-width: 820px;
          margin-bottom: 34px;
        }

        .sectionHeader h2 {
          font-size: clamp(34px, 5vw, 56px);
          margin: 0 0 14px;
          letter-spacing: -1px;
        }

        .sectionHeader p {
          color: #c8edf5;
          font-size: 18px;
          line-height: 1.65;
        }

        .twoColumns {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 26px;
        }

        .premiumBox {
          padding: 36px;
          border-radius: 28px;
          background: linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.04));
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: 0 24px 70px rgba(0,0,0,0.25);
        }

        .premiumBox h3 {
          font-size: 32px;
          margin: 0 0 12px;
        }

        .premiumBox p {
          color: #d5f4fb;
          line-height: 1.65;
          font-size: 17px;
        }

        .premiumBox ul {
          padding-left: 20px;
          color: #f2fdff;
          line-height: 2;
          font-size: 17px;
        }

        .imageGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .imageCard {
          position: relative;
          height: 360px;
          border-radius: 26px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: 0 20px 60px rgba(0,0,0,0.28);
          background: #062c34;
        }

        .imageCard img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: saturate(1.08) contrast(1.04);
        }

        .imageCard::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 25%, rgba(0,0,0,0.82));
        }

        .imageOverlay {
          position: absolute;
          left: 22px;
          right: 22px;
          bottom: 22px;
          z-index: 2;
        }

        .imageOverlay h3 {
          font-size: 24px;
          margin: 0 0 8px;
        }

        .imageOverlay p {
          margin: 0;
          color: #d8f7ff;
          line-height: 1.45;
        }

        .productGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .productCard {
          padding: 24px;
          min-height: 160px;
          border-radius: 22px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
        }

        .productCard h3 {
          margin: 0 0 10px;
          font-size: 22px;
        }

        .productCard p {
          color: #cceff7;
          line-height: 1.5;
          margin: 0;
        }

        .cta {
          margin: 70px 7% 0;
          padding: 54px;
          border-radius: 34px;
          background:
            linear-gradient(135deg, rgba(0,183,255,0.22), rgba(80,227,194,0.12)),
            rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          text-align: center;
        }

        .cta h2 {
          font-size: clamp(34px, 5vw, 58px);
          margin: 0 0 14px;
        }

        .cta p {
          color: #d7f6ff;
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 28px;
        }

        .footer {
          padding: 42px 7%;
          color: #a7dbe6;
          border-top: 1px solid rgba(255,255,255,0.1);
          margin-top: 70px;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }

        @media (max-width: 900px) {
          .hero,
          .twoColumns,
          .imageGrid {
            grid-template-columns: 1fr;
          }

          .stats,
          .productGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .navLinks {
            display: none;
          }

          .hero {
            padding-top: 50px;
          }
        }

        @media (max-width: 560px) {
          .stats,
          .productGrid {
            grid-template-columns: 1fr;
          }

          .section,
          .hero,
          .nav {
            padding-left: 22px;
            padding-right: 22px;
          }

          .cta {
            margin-left: 22px;
            margin-right: 22px;
            padding: 34px 22px;
          }
        }
      `}</style>

      <nav className="nav">
        <div className="brand">🦀 Crab Talk SG</div>
        <div className="navLinks">
          <span>Live Seafood</span>
          <span>Home Cooking</span>
          <span>Fai Kee Cooking</span>
          <span>Order</span>
        </div>
      </nav>

      <section className="hero">
        <div>
          <div className="badge">Premium Live Seafood • Commonwealth Crescent</div>
          <h1>
            Live seafood, <span>restaurant-style experience.</span>
          </h1>
          <p className="heroText">
            Choose your live seafood from Crab Talk SG and enjoy it your way:
            bring it home for cooking, or have selected items cooked nearby by
            Fai Kee for a convenient seafood meal.
          </p>

          <div className="heroActions">
            <a className="primaryBtn" href="https://wa.me/6598398671" target="_blank">
              Order on WhatsApp
            </a>
            <a className="secondaryBtn" href="https://t.me/CrabTalkSG" target="_blank">
              Join Telegram
            </a>
          </div>
        </div>

        <div className="heroImage">
          <img
            src={img.liveCrab}
            alt="Live seafood crab"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = fallbackSvg;
            }}
          />
          <div className="heroImageText">
            <h2>Live Crabs • Lobsters • Oysters • Clams</h2>
            <p>
              Fresh arrivals, limited quantities, and reservation recommended.
            </p>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stat">
          <strong>Live</strong>
          seafood selection
        </div>
        <div className="stat">
          <strong>2 Ways</strong>
          home cook or Fai Kee
        </div>
        <div className="stat">
          <strong>Fresh</strong>
          arrivals available
        </div>
        <div className="stat">
          <strong>SG</strong>
          Commonwealth market
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <h2>Choose how you want to enjoy your seafood</h2>
          <p>
            Crab Talk SG is built for customers who want flexibility. You can
            buy premium live seafood for home cooking, or enjoy selected dishes
            cooked by Fai Kee nearby.
          </p>
        </div>

        <div className="twoColumns">
          <div className="premiumBox">
            <h3>🏠 Home Cooking</h3>
            <p>
              Best for customers who enjoy cooking fresh seafood at home.
              Choose your live seafood, reserve in advance, and prepare it your
              preferred way.
            </p>
            <ul>
              <li>Live crabs for steaming, chilli crab, black pepper or soup</li>
              <li>Lobsters for grilling, steaming or noodles</li>
              <li>Oysters, clams and shellfish for sharing meals</li>
              <li>Suitable for family dinners, parties and festive meals</li>
            </ul>
          </div>

          <div className="premiumBox">
            <h3>🍽️ Cooked by Fai Kee</h3>
            <p>
              For customers who want convenience, selected seafood can be cooked
              nearby by Fai Kee. This gives you a market-style live seafood
              experience without needing to cook at home.
            </p>
            <ul>
              <li>Popular dishes include lobster yee mee and lobster bee hoon</li>
              <li>Chilli crab, ginger onion crab and black bean styles</li>
              <li>Hong Kong-style steamed fish options</li>
              <li>Cooking fee applies depending on dish and preparation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <h2>Premium seafood selection</h2>
          <p>
            A clean showcase of the core products customers usually look for
            when buying live seafood from Crab Talk SG.
          </p>
        </div>

        <div className="imageGrid">
          <ImageCard
            src={img.liveCrab}
            title="Premium Live Crabs"
            text="Live crab selection for steaming, chilli crab or home cooking."
          />
          <ImageCard
            src={img.lobster}
            title="Live Lobsters"
            text="Ideal for lobster yee mee, bee hoon, steaming or grilling."
          />
          <ImageCard
            src={img.oysters}
            title="Fresh Oysters"
            text="Premium oysters for seafood lovers and sharing occasions."
          />
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <h2>Popular with Fai Kee cooking</h2>
          <p>
            These are the types of dishes that make the Crab Talk SG × Fai Kee
            concept attractive: choose live seafood, then enjoy it cooked fresh.
          </p>
        </div>

        <div className="imageGrid">
          <ImageCard
            src={img.lobsterNoodles}
            title="Lobster Yee Mee"
            text="A strong signature-style dish for sharing."
          />
          <ImageCard
            src={img.chilliCrab}
            title="Chilli Crab"
            text="A classic seafood favourite with rich sauce."
          />
          <ImageCard
            src={img.clams}
            title="Clams & Shellfish"
            text="Great for steaming, chilli or black bean style."
          />
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <h2>What we usually carry</h2>
          <p>
            Availability changes depending on daily arrivals. Message us before
            coming down if you want to reserve specific items.
          </p>
        </div>

        <div className="productGrid">
          <ProductCard
            title="Sri Lanka Roe Crabs"
            desc="Premium roe crab selection, suitable for steaming and special meals."
          />
          <ProductCard
            title="Indonesian Mud Crabs"
            desc="Meaty live crabs for home cooking or cooked dishes."
          />
          <ProductCard
            title="Boston Lobster"
            desc="Popular for lobster yee mee, bee hoon, steaming or grilling."
          />
          <ProductCard
            title="Green Lobster"
            desc="Premium lobster option for seafood lovers."
          />
          <ProductCard
            title="Manila Clams"
            desc="Good for steaming, chilli, black bean or sharing dishes."
          />
          <ProductCard
            title="Fresh Oysters"
            desc="Selected oysters depending on availability."
          />
          <ProductCard
            title="Soon Hock"
            desc="Suitable for Hong Kong-style steaming."
          />
          <ProductCard
            title="Tiger Grouper"
            desc="Premium live fish option for family meals."
          />
        </div>
      </section>

      <section className="cta">
        <h2>Reserve before stocks run out</h2>
        <p>
          Fresh seafood is limited and changes daily. Message us to check today’s
          arrivals, prices and availability.
        </p>
        <a className="primaryBtn" href="https://wa.me/6598398671" target="_blank">
          WhatsApp Crab Talk SG
        </a>
      </section>

      <footer className="footer">
        <div>
          <strong>Crab Talk SG</strong>
          <br />
          Live Seafood Supply @ Crab Talk
        </div>
        <div>
          WhatsApp: 9839 8671
          <br />
          Telegram: @CrabTalkSG
        </div>
        <div>
          Commonwealth Crescent Market
          <br />
          Unit 01-41 / 42 / 43
        </div>
      </footer>
    </div>
  );
}

export default App;
