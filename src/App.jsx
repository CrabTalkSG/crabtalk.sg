export default function App() {
  const whatsappLink = "https://wa.me/6598398671";
  const telegramLink = "https://t.me/CrabTalkSG";

  const homeCookingItems = [
    {
      title: "Live Mud Crabs",
      text: "Perfect for chilli crab, steaming, black pepper, ginger onion or home seafood feast.",
      img: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Green Lobster & Boston Lobster",
      text: "Great for garlic butter, steaming, lobster pasta, lobster soup or simple grilled lobster.",
      img: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Manila Clams & Shellfish",
      text: "Easy to cook at home with garlic, chilli, black bean sauce or simple steaming.",
      img: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const faiKeeDishes = [
    "Chilli Crab",
    "Black Bean Crab / Lala / Fish",
    "Ginger Onion Crab / Lala / Fish",
    "Steamed Crab / Lala / Fish",
    "Lobster Yee Mee",
    "Lobster Bee Hoon",
    "Hong Kong Style Steamed Fish",
  ];

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #021b1f 0%, #05333b 45%, #021b1f 100%)",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HERO */}
      <section
        style={{
          padding: "75px 24px",
          textAlign: "center",
          backgroundImage:
            "linear-gradient(rgba(2,27,31,0.72), rgba(2,27,31,0.92)), url('https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          style={{
            color: "#9fe8ff",
            letterSpacing: "3px",
            fontSize: "14px",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Live Seafood Supply @ Crab Talk
        </p>

        <h1
          style={{
            fontSize: "64px",
            margin: "10px auto",
            lineHeight: "1.1",
            maxWidth: "1000px",
          }}
        >
          Buy Live Seafood Your Way
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#d7f7ff",
            maxWidth: "820px",
            margin: "20px auto",
            lineHeight: "1.6",
          }}
        >
          Choose premium live seafood from Crab Talk for home cooking, or have it cooked nearby by Fai Kee.
        </p>

        <div style={{ marginTop: "35px", display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.primaryButton}
          >
            WhatsApp to Reserve
          </a>

          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.secondaryButton}
          >
            Join Telegram Drops
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section style={styles.intro}>
        <h2 style={styles.sectionTitle}>Two Ways to Enjoy Crab Talk Seafood</h2>
        <p style={styles.sectionText}>
          Pick your live crabs, lobsters, clams, oysters and fish directly from Crab Talk.  
          Bring them home to cook, or ask about Fai Kee cooking options nearby.
        </p>
      </section>

      {/* SECTION 1: HOME COOKING */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <p style={styles.label}>Option 1</p>
          <h2 style={styles.sectionTitle}>Buy for Home Cooking</h2>
          <p style={styles.sectionText}>
            Best for customers who want to cook fresh seafood at home for family dinner, gatherings or weekend feasts.
          </p>
        </div>

        <div style={styles.cardGrid}>
          {homeCookingItems.map((item) => (
            <div key={item.title} style={styles.imageCard}>
              <img src={item.img} alt={item.title} style={styles.cardImage} />
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{item.title}</h3>
                <p style={styles.cardText}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.highlightBox}>
          <h3 style={styles.highlightTitle}>Popular Home Cooking Styles</h3>
          <div style={styles.tagGrid}>
            {[
              "Chilli Crab at Home",
              "Garlic Butter Lobster",
              "Steamed Crab",
              "Ginger Onion Crab",
              "Clams with Garlic",
              "Hong Kong Style Steamed Fish",
              "Simple Seafood Soup",
              "Lobster Pasta",
            ].map((item) => (
              <div key={item} style={styles.tag}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: FAI KEE COOKING */}
      <section style={styles.premiumSection}>
        <div style={styles.twoColumn}>
          <div>
            <p style={styles.label}>Option 2</p>
            <h2 style={styles.sectionTitle}>Buy from Crab Talk, Cooked by Fai Kee</h2>
            <p style={styles.sectionText}>
              Choose your live seafood from Crab Talk and have it cooked nearby by Fai Kee Fish Head Bee Hoon.
              This is popular for customers who want fresh market seafood cooked conveniently.
            </p>

            <p style={styles.notice}>
              Cooking fees apply. Cooking is subject to Fai Kee’s availability and timing.  
              Fai Kee is closed on Sundays and Mondays.
            </p>

            <div style={{ marginTop: "30px" }}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.primaryButton}
              >
                Ask About Cooking Option
              </a>
            </div>
          </div>

          <div style={styles.faiKeeCard}>
            <h3 style={styles.faiKeeTitle}>Popular Fai Kee Dishes</h3>

            <div style={styles.dishList}>
              {faiKeeDishes.map((dish) => (
                <div key={dish} style={styles.dishItem}>{dish}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Which Option Should You Choose?</h2>

        <div style={styles.compareGrid}>
          <div style={styles.compareCard}>
            <h3 style={styles.compareTitle}>🏠 Home Cooking</h3>
            <p style={styles.cardText}>
              Choose this if you enjoy cooking yourself, want full control over flavour, or are planning a family-style home seafood dinner.
            </p>
            <ul style={styles.list}>
              <li>Best for DIY cooking</li>
              <li>Good for budget control</li>
              <li>Flexible recipes</li>
              <li>Great for family dinner</li>
            </ul>
          </div>

          <div style={styles.compareCard}>
            <h3 style={styles.compareTitle}>👨‍🍳 Cooked by Fai Kee</h3>
            <p style={styles.cardText}>
              Choose this if you want the convenience of cooked seafood after selecting live seafood from Crab Talk.
            </p>
            <ul style={styles.list}>
              <li>Best for convenience</li>
              <li>Popular for lobster yee mee</li>
              <li>Good for chilli crab cravings</li>
              <li>Cooking fees apply</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <h2 style={styles.ctaTitle}>Check Today’s Fresh Seafood Arrivals</h2>
        <p style={styles.ctaText}>
          Stock changes daily. WhatsApp us before coming down to check availability, size and price.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.whiteButton}
        >
          WhatsApp Crab Talk
        </a>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p style={{ margin: "6px 0", fontWeight: "bold" }}>Crab Talk SG</p>
        <p style={{ margin: "6px 0" }}>Live Seafood Supply @ Crab Talk</p>
        <p style={{ margin: "6px 0" }}>Commonwealth Crescent Market #01-41 / #01-42 / #01-43</p>
        <p style={{ margin: "6px 0" }}>WhatsApp: 9839 8671 · Telegram: t.me/CrabTalkSG</p>
      </footer>
    </div>
  );
}

const styles = {
  intro: {
    padding: "60px 24px",
    maxWidth: "1000px",
    margin: "0 auto",
    textAlign: "center",
  },
  section: {
    padding: "70px 24px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  premiumSection: {
    padding: "80px 24px",
    background: "rgba(255,255,255,0.06)",
    borderTop: "1px solid rgba(255,255,255,0.12)",
    borderBottom: "1px solid rgba(255,255,255,0.12)",
  },
  sectionHeader: {
    textAlign: "center",
    maxWidth: "850px",
    margin: "0 auto 40px",
  },
  label: {
    color: "#9fe8ff",
    fontWeight: "bold",
    letterSpacing: "2px",
    textTransform: "uppercase",
    marginBottom: "10px",
  },
  sectionTitle: {
    fontSize: "42px",
    margin: "10px 0 18px",
    lineHeight: "1.15",
  },
  sectionText: {
    color: "#c6eaf0",
    fontSize: "19px",
    lineHeight: "1.7",
  },
  primaryButton: {
    display: "inline-block",
    padding: "18px 42px",
    fontSize: "20px",
    borderRadius: "999px",
    backgroundColor: "#00b7ff",
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    boxShadow: "0 12px 30px rgba(0,183,255,0.35)",
  },
  secondaryButton: {
    display: "inline-block",
    padding: "18px 42px",
    fontSize: "20px",
    borderRadius: "999px",
    backgroundColor: "rgba(255,255,255,0.12)",
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    border: "1px solid rgba(255,255,255,0.18)",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
  },
  imageCard: {
    background: "rgba(255,255,255,0.08)",
    borderRadius: "24px",
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.12)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
  },
  cardImage: {
    width: "100%",
    height: "230px",
    objectFit: "cover",
  },
  cardContent: {
    padding: "24px",
  },
  cardTitle: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  cardText: {
    color: "#c6eaf0",
    fontSize: "16px",
    lineHeight: "1.6",
  },
  highlightBox: {
    marginTop: "40px",
    background: "rgba(0,0,0,0.22)",
    borderRadius: "24px",
    padding: "32px",
    border: "1px solid rgba(255,255,255,0.12)",
  },
  highlightTitle: {
    fontSize: "26px",
    marginTop: 0,
  },
  tagGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
    gap: "14px",
  },
  tag: {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
    padding: "16px",
    borderRadius: "16px",
    fontWeight: "bold",
  },
  twoColumn: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "40px",
    alignItems: "center",
  },
  notice: {
    color: "#9fe8ff",
    fontSize: "16px",
    lineHeight: "1.6",
    marginTop: "20px",
  },
  faiKeeCard: {
    background:
      "linear-gradient(145deg, rgba(0,183,255,0.18), rgba(255,255,255,0.06))",
    border: "1px solid rgba(255,255,255,0.16)",
    borderRadius: "28px",
    padding: "34px",
    boxShadow: "0 25px 55px rgba(0,0,0,0.28)",
  },
  faiKeeTitle: {
    fontSize: "30px",
    marginTop: 0,
  },
  dishList: {
    display: "grid",
    gap: "14px",
  },
  dishItem: {
    background: "rgba(0,0,0,0.26)",
    border: "1px solid rgba(255,255,255,0.12)",
    padding: "16px",
    borderRadius: "16px",
    fontWeight: "bold",
  },
  compareGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "24px",
    marginTop: "35px",
  },
  compareCard: {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "24px",
    padding: "32px",
  },
  compareTitle: {
    fontSize: "28px",
    marginTop: 0,
  },
  list: {
    color: "#d7f7ff",
    lineHeight: "1.9",
    paddingLeft: "20px",
  },
  cta: {
    padding: "75px 24px",
    textAlign: "center",
    background: "linear-gradient(90deg, #0077a3, #00b7ff)",
  },
  ctaTitle: {
    fontSize: "42px",
    marginBottom: "15px",
  },
  ctaText: {
    fontSize: "20px",
    maxWidth: "720px",
    margin: "0 auto 30px",
    lineHeight: "1.6",
  },
  whiteButton: {
    display: "inline-block",
    padding: "18px 42px",
    fontSize: "20px",
    borderRadius: "999px",
    backgroundColor: "white",
    color: "#005f7a",
    textDecoration: "none",
    fontWeight: "bold",
  },
  footer: {
    padding: "35px 24px",
    textAlign: "center",
    color: "#9fcbd3",
    fontSize: "15px",
  },
};
