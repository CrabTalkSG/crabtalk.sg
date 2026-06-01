export default function YellowRoeRecipeSection() {
  return (
    <section className="recipe-section">
      <div className="recipe-header">
        <p className="eyebrow">Recommended Cooking Styles</p>

        <h2>Best Ways to Enjoy Yellow Roe Crab</h2>

        <p>
          Yellow Roe Crab is prized for its rich, creamy roe and naturally sweet crab meat.
          At Crab Talk, we recommend only two premium ways to fully enjoy its flavour.
        </p>
      </div>

      <div className="recipe-grid">

        <article className="recipe-card">
          <img
            src="/images/yellow-roe-crab-cold.jpg"
            alt="Cold Yellow Roe Crab Singapore"
          />

          <div className="recipe-content">
            <span>Best Seller</span>

            <h3>1. Cold Yellow Roe Crab</h3>

            <p>
              Chilled after steaming to preserve the sweetness of the crab meat and
              the creamy richness of the yellow roe.
            </p>

            <ul>
              <li>Served chilled with light dipping sauce</li>
              <li>Best way to enjoy the natural sweetness</li>
              <li>Refreshing, delicate and full of ocean flavour</li>
            </ul>
          </div>
        </article>

        <article className="recipe-card">
          <img
            src="/images/yellow-roe-crab-grilled.jpg"
            alt="Grilled Yellow Roe Crab Singapore"
          />

          <div className="recipe-content">
            <span>Premium Style</span>

            <h3>2. Grilled Yellow Roe Crab</h3>

            <p>
              Lightly grilled over charcoal to bring out a smoky aroma while keeping
              the roe rich and creamy.
            </p>

            <ul>
              <li>Grilled to perfection for smoky fragrance</li>
              <li>Enhances the natural sweetness of the roe</li>
              <li>Simple, delicious and deeply satisfying</li>
            </ul>
          </div>
        </article>

      </div>

      <div className="recipe-cta">
        <div>
          <h3>Check Today’s Yellow Roe Crab Availability</h3>

          <p>
            Fresh arrivals are limited daily. WhatsApp us to reserve your premium
            Yellow Roe Crabs today.
          </p>
        </div>

        <a
          href="https://wa.me/6598398671"
          className="whatsapp-btn"
        >
          WhatsApp to Reserve
        </a>
      </div>

      <style jsx>{`
        .recipe-section {
          padding: 72px 20px;
          background: #f7fbfa;
        }

        .recipe-header {
          max-width: 900px;
          margin: 0 auto 44px;
          text-align: center;
        }

        .recipe-header .eyebrow {
          color: #b88932;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .recipe-header h2 {
          font-size: clamp(38px, 5vw, 60px);
          color: #073b3a;
          margin-bottom: 20px;
          line-height: 1.15;
        }

        .recipe-header p {
          font-size: 20px;
          line-height: 1.7;
          color: #405a57;
        }

        .recipe-grid {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .recipe-card {
          background: #ffffff;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 18px 44px rgba(0,0,0,0.08);
          border: 1px solid rgba(7,59,58,0.08);
        }

        .recipe-card img {
          width: 100%;
          height: 380px;
          object-fit: cover;
          display: block;
        }

        .recipe-content {
          padding: 32px;
        }

        .recipe-content span {
          display: inline-block;
          background: #f3dfb0;
          color: #073b3a;
          padding: 8px 16px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .recipe-content h3 {
          font-size: 34px;
          color: #073b3a;
          margin-bottom: 18px;
          line-height: 1.2;
        }

        .recipe-content p {
          color: #405a57;
          line-height: 1.8;
          margin-bottom: 18px;
        }

        .recipe-content ul {
          padding-left: 20px;
        }

        .recipe-content li {
          color: #405a57;
          line-height: 1.9;
          margin-bottom: 8px;
        }

        .recipe-cta {
          max-width: 1200px;
          margin: 50px auto 0;
          background: #ffffff;
          border: 2px solid #073b3a;
          border-radius: 28px;
          padding: 34px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
        }

        .recipe-cta h3 {
          font-size: 42px;
          color: #073b3a;
          margin-bottom: 12px;
        }

        .recipe-cta p {
          color: #405a57;
          line-height: 1.7;
        }

        .whatsapp-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #073b3a;
          color: #ffffff;
          padding: 18px 30px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
          min-width: 260px;
        }

        @media (max-width: 900px) {

          .recipe-grid {
            grid-template-columns: 1fr;
          }

          .recipe-card img {
            height: 280px;
          }

          .recipe-cta {
            flex-direction: column;
            text-align: center;
          }

          .recipe-cta h3 {
            font-size: 32px;
          }
        }
      `}</style>
    </section>
  );
}
