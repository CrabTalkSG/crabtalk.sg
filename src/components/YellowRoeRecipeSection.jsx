import React from "react";
import "../styles/yellow-roe-recipes.css";

export default function YellowRoeRecipeSection() {
  return (
    <section className="recipe-section">
      <div className="recipe-header">
        <p className="eyebrow">Suggested Cooking Styles</p>
        <h2>Best Ways to Enjoy Sri Lanka Yellow Roe Crab</h2>
        <p>
          Premium Yellow Roe Crabs are best enjoyed simply — steamed or grilled —
          so the rich roe, natural sweetness and delicate crab flavour remain the focus.
        </p>
      </div>

      <div className="recipe-grid">
        <article className="recipe-card">
          <img
            src="/images/yellow-roe-crab-steamed.jpg"
            alt="Steamed Sri Lanka Yellow Roe Crab Singapore"
          />
          <div className="recipe-content">
            <span>Recommended</span>
            <h3>Premium Steamed Yellow Roe Crab</h3>
            <p>
              Steaming is the best way to enjoy yellow roe crab. It preserves the
              creamy roe, sweet crab meat and natural ocean flavour without overpowering it.
            </p>
            <ul>
              <li>Steam whole crab until fully cooked</li>
              <li>Best with light soy, ginger or Hua Tiao wine</li>
              <li>Ideal for customers who love natural crab sweetness</li>
            </ul>
          </div>
        </article>

        <article className="recipe-card">
          <img
            src="/images/yellow-roe-crab-grilled.jpg"
            alt="Grilled Sri Lanka Yellow Roe Crab Singapore"
          />
          <div className="recipe-content">
            <span>Premium Style</span>
            <h3>Charcoal Grilled Yellow Roe Crab</h3>
            <p>
              Grilling adds a light smoky aroma while keeping the roe rich and the
              meat firm. This method is perfect for seafood lovers who prefer bold,
              natural flavours.
            </p>
            <ul>
              <li>Split crab before grilling</li>
              <li>Brush lightly with butter or garlic oil</li>
              <li>Grill over high heat for smoky fragrance</li>
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
