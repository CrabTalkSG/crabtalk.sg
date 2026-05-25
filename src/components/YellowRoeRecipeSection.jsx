import React from "react";
import "../styles/yellow-roe-recipes.css";

export default function YellowRoeRecipeSection() {
  return (
    <section className="recipe-section">
      <div className="recipe-header">
        <p className="eyebrow">Recommended Cooking Styles</p>
        <h2>Best Ways to Enjoy Sri Lanka Yellow Roe Crab</h2>
        <p>
          Premium Yellow Roe Crabs are best enjoyed in simple, natural styles.
          At Crab Talk, we recommend only two ways: cold crab or grilled crab, so the
          rich yellow roe and natural crab sweetness stay as the main highlight.
        </p>
      </div>

      <div className="recipe-grid">
        <article className="recipe-card">
          <img
            src="/images/yellow-roe-crab-cold.jpg"
            alt="Cold Sri Lanka Yellow Roe Crab with rich yellow roe in Singapore"
          />
          <div className="recipe-content">
            <span>Best for Roe Lovers</span>
            <h3>Teochew Style Cold Yellow Roe Crab</h3>
            <p>
              Cold crab is one of the best ways to appreciate premium yellow roe crab.
              After steaming and chilling, the roe becomes rich, creamy and full-bodied,
              while the crab meat remains naturally sweet and clean tasting.
            </p>
            <ul>
              <li>Best served chilled after steaming</li>
              <li>Highlights creamy yellow roe and firm crab meat</li>
              <li>Enjoy with light dipping sauce, ginger vinegar or on its own</li>
            </ul>
          </div>
        </article>

        <article className="recipe-card">
          <img
            src="/images/yellow-roe-crab-grilled.jpg"
            alt="Grilled Sri Lanka Yellow Roe Crab Singapore"
          />
          <div className="recipe-content">
            <span>Smoky & Premium</span>
            <h3>Grilled Yellow Roe Crab</h3>
            <p>
              Grilling gives yellow roe crab a light smoky aroma while keeping the roe
              rich and the meat firm. This style is ideal for seafood lovers who prefer
              bold natural flavour without heavy sauces.
            </p>
            <ul>
              <li>Best grilled whole or split open</li>
              <li>Brush lightly with garlic oil or butter</li>
              <li>Perfect when you want smoky aroma with natural crab sweetness</li>
            </ul>
          </div>
        </article>
      </div>

      <div className="recipe-cta">
        <h3>Check Today’s Yellow Roe Crab Availability</h3>
        <p>
          Availability changes daily. WhatsApp Crab Talk to reserve premium Sri Lanka
          Yellow Roe Crabs while stock lasts.
        </p>
        <a href="https://wa.me/6598398671" className="whatsapp-btn">
          WhatsApp to Reserve
        </a>
      </div>
    </section>
  );
}
