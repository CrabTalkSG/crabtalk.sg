const products = [
  {
    icon: "🦀",
    title: "Live Premium Crabs",
    text: "Sri Lanka roe crabs, Indonesian mud crabs and seasonal premium live crab selections.",
  },
  {
    icon: "🦞",
    title: "Live Lobsters",
    text: "Boston lobster, green lobster and selected premium lobster arrivals.",
  },
  {
    icon: "🦪",
    title: "Fresh Oysters",
    text: "Fresh oysters available in limited quantities depending on daily shipment.",
  },
  {
    icon: "🐚",
    title: "Clams & Shellfish",
    text: "Canadian Manila clams and other shellfish options for home cooking or sharing meals.",
  },
  {
    icon: "🐟",
    title: "Live Fish",
    text: "Soon Hock, grouper, turbot and other live fish options depending on availability.",
  },
  {
    icon: "🦐",
    title: "Seasonal Seafood",
    text: "Fresh seafood arrivals change regularly. WhatsApp us for today’s live stock list.",
  },
];

const steps = [
  {
    number: "01",
    title: "Choose Your Live Seafood",
    text: "Visit our stall or WhatsApp us to check today’s fresh arrivals and reserve your seafood.",
  },
  {
    number: "02",
    title: "Bring Home or Cook Nearby",
    text: "Buy live seafood for home cooking, or request nearby cooking service through our partner stall.",
  },
  {
    number: "03",
    title: "Enjoy Fresh Seafood",
    text: "Perfect for family meals, gatherings, celebrations and seafood lovers who want freshness.",
  },
];

export default function App() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.logoBox}>
          <div style={styles.logoIcon}>🦀</div>
          <div>
            <div style={styles.logoText}>Crab Talk SG</div>
            <div style={styles.logoSub}>Live Seafood Supply</div>
          </div>
        </div>

        <a href="https://wa.me/6598398671" target="_blank" style={styles.headerButton}>
          WhatsApp Us
        </a>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.badge}>Fresh Live Seafood · Commonwealth Crescent Market</div>

          <h1 style={styles.heroTitle}>
            Premium Live Seafood,
            <br />
            Fresh From Tank to Table
          </h1>

          <p style={styles.heroText}>
            Crab Talk SG supplies live crabs, lobsters, oysters, clams and selected live fish.
            Reserve your seafood in advance or visit us directly for today’s freshest arrivals.
          </p>

          <div style={styles.heroButtons}>
            <a href="https://wa.me/6598398671" target="_blank" style={styles.primaryButton}>
              Order Now on WhatsApp
            </a>

            <a href="#products" style={styles.secondaryButton}>
              View Seafood
            </a>
          </div>

          <div style={styles.stats}>
            <div style={styles.statBox}>
              <strong>Live</strong>
              <span>Seafood Selection</span>
            </div>
            <div style={styles.statBox}>
              <strong>Fresh</strong>
              <span>Daily Arrivals</span>
            </div>
            <div style={styles.statBox}>
              <strong>Cook</strong>
              <span>Nearby Option</span>
            </div>
          </div>
        </div>
      </section>

      <section id="products" style={styles.section}>
        <div style={styles.sectionHeader}>
          <p style={styles.smallTitle}>Our Seafood</p>
          <h2 style={styles.sectionTitle}>Fresh Live Seafood Selection</h2>
          <p style={styles.sectionText}>
            Availability changes daily. For the most accurate stock and pricing, WhatsApp us before coming down.
          </p>
        </div>

        <div style={styles.productGrid}>
          {products.map((item) => (
            <div key={item.title} style={styles.card}>
              <div style={styles.cardIcon}>{item.icon}</div>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardText}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.darkSection}>
        <div style={styles.twoColumn}>
          <div>
            <p style={styles.smallTitle}>How It Works</p>
            <h2 style={styles.sectionTitle}>Buy Live Seafood Your Way</h2>
            <p style={styles.sectionText}>
              Whether you are cooking at home or planning a seafood meal with friends and family,
              Crab Talk SG makes it simple to choose fresh live seafood.
            </p>
          </div>

          <div style={styles.stepList}>
            {steps.map((step) => (
              <div key={step.number} style={styles.stepCard}>
                <div style={styles.stepNumber}>{step.number}</div>
                <div>
                  <h3 style={styles.stepTitle}>{step.title}</h3>
                  <p style={styles.stepText}>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.highlightBox}>
          <div>
            <p style={styles.smallTitle}>Cooking Collaboration</p>
            <h2 style={styles.sectionTitle}>Buy Live Seafood, Have It Cooked Nearby</h2>
            <p style={styles.sectionText}>
              Customers may choose live seafood from Crab Talk SG and request cooking service from our nearby
              partner stall, Fai Kee Fish Head Bee Hoon. Popular cooking styles include chilli crab, black bean,
              ginger & onion, steaming, lobster yee mee and lobster bee hoon.
            </p>
            <p style={styles.note}>
              Cooking service is subject to availability, timing and cooking fees.
            </p>
          </div>

          <div style={styles.menuBox}>
            <h3 style={styles.menuTitle}>Popular Choices</h3>
            <p>🦀 Chilli Crab</p>
            <p>🦞 Lobster Yee Mee</p>
            <p>🐟 Hong Kong Style Steamed Fish</p>
            <p>🐚 Steamed Manila Clams</p>
          </div>
        </div>
      </section>

      <section style={styles.locationSection}>
        <p style={styles.smallTitle}>Visit Us</p>
        <h2 style={styles.sectionTitle}>Live Seafood Supply @ Crab Talk</h2>

        <div style={styles.infoGrid}>
          <div style={styles.infoCard}>
            <h3>📍 Location</h3>
            <p>Commonwealth Crescent Market</p>
            <p>#01-41 / #01-42 / #01-43</p>
            <p>Singapore</p>
          </div>

          <div style={styles.infoCard}>
            <h3>📞 Contact</h3>
            <p>WhatsApp: 9839 8671</p>
            <p>Message us for today’s live seafood arrivals.</p>
          </div>

          <div style={styles.infoCard}>
            <h3>✅ Best For</h3>
            <p>Home cooking, family meals, gatherings, celebrations and seafood lovers.</p>
          </div>
        </div>
      </section>

      <section style={styles.cta}>
        <h2 style={styles.ctaTitle}>Want Today’s Fresh Seafood List?</h2>
        <p style={styles.ctaText}>
          WhatsApp us now to check live crab, lobster, oyster, clam and fish availability.
        </p>
        <a href="https://wa.me/6598398671" target="_blank" style={styles.primaryButton}>
          WhatsApp Crab Talk SG
        </a>
      </section>

      <footer style={styles.footer}>
        <p>© Crab Talk SG · Live Seafood Supply @ Crab Talk</p>
      </footer>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#021b1f",
    color: "white",
    fontFamily: "Arial, sans-serif",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "22px 8%",
    backgroundColor: "rgba(2, 27, 31, 0.95)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },

  logoBox: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  logoIcon: {
    fontSize: "36px",
  },

  logoText: {
    fontSize: "24px",
    fontWeight: "bold",
  },

  logoSub: {
    fontSize: "14px",
    color: "#9fe8ff",
  },

  headerButton: {
    backgroundColor: "#00b7ff",
    color: "white",
    padding: "12px 22px",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "bold",
  },

  hero: {
    padding: "90px 8%",
    background:
      "radial-gradient(circle at top right, rgba(0,183,255,0.25), transparent 35%), linear-gradient(180deg, #021b1f, #06404a)",
  },

  heroContent: {
    maxWidth: "980px",
    margin: "0 auto",
    textAlign: "center",
  },

  badge: {
    display: "inline-block",
    padding: "10px 18px",
    borderRadius: "999px",
    backgroundColor: "rgba(159,232,255,0.12)",
    color: "#9fe8ff",
    marginBottom: "24px",
    fontSize: "15px",
  },

  heroTitle: {
    fontSize: "58px",
    lineHeight: "1.08",
    margin: "0 0 24px",
  },

  heroText: {
    fontSize: "21px",
    lineHeight: "1.7",
    color: "#d8f6ff",
    maxWidth: "780px",
    margin: "0 auto",
  },

  heroButtons: {
    marginTop: "36px",
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    flexWrap: "wrap",
  },

  primaryButton: {
    display: "inline-block",
    backgroundColor: "#00b7ff",
    color: "white",
    padding: "16px 30px",
    borderRadius: "12px",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
  },

  secondaryButton: {
    display: "inline-block",
    border: "1px solid rgba(255,255,255,0.35)",
    color: "white",
    padding: "16px 30px",
    borderRadius: "12px",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
  },

  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "16px",
    marginTop: "50px",
  },

  statBox: {
    backgroundColor: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "18px",
    padding: "22px",
  },

  section: {
    padding: "80px 8%",
  },

  darkSection: {
    padding: "80px 8%",
    backgroundColor: "#032a31",
  },

  sectionHeader: {
    textAlign: "center",
    maxWidth: "760px",
    margin: "0 auto 46px",
  },

  smallTitle: {
    color: "#00b7ff",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: "14px",
  },

  sectionTitle: {
    fontSize: "38px",
    margin: "10px 0 16px",
  },

  sectionText: {
    color: "#c9eaf2",
    fontSize: "18px",
    lineHeight: "1.7",
  },

  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "22px",
    maxWidth: "1150px",
    margin: "0 auto",
  },

  card: {
    backgroundColor: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "22px",
    padding: "30px",
  },

  cardIcon: {
    fontSize: "42px",
    marginBottom: "18px",
  },

  cardTitle: {
    fontSize: "22px",
    marginBottom: "12px",
  },

  cardText: {
    color: "#c9eaf2",
    lineHeight: "1.6",
    fontSize: "16px",
  },

  twoColumn: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "40px",
    maxWidth: "1150px",
    margin: "0 auto",
    alignItems: "start",
  },

  stepList: {
    display: "grid",
    gap: "18px",
  },

  stepCard: {
    display: "flex",
    gap: "18px",
    backgroundColor: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "18px",
    padding: "24px",
  },

  stepNumber: {
    color: "#00b7ff",
    fontWeight: "bold",
    fontSize: "22px",
  },

  stepTitle: {
    margin: "0 0 8px",
    fontSize: "21px",
  },

  stepText: {
    margin: 0,
    color: "#c9eaf2",
    lineHeight: "1.6",
  },

  highlightBox: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "36px",
    maxWidth: "1150px",
    margin: "0 auto",
    backgroundColor: "#06404a",
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: "28px",
    padding: "42px",
  },

  note: {
    color: "#9fe8ff",
    fontSize: "15px",
    marginTop: "18px",
  },

  menuBox: {
    backgroundColor: "rgba(0,0,0,0.22)",
    borderRadius: "22px",
    padding: "28px",
    fontSize: "18px",
    lineHeight: "1.8",
  },

  menuTitle: {
    fontSize: "24px",
    marginTop: 0,
  },

  locationSection: {
    padding: "80px 8%",
    backgroundColor: "#032a31",
    textAlign: "center",
  },

  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "22px",
    maxWidth: "1050px",
    margin: "38px auto 0",
  },

  infoCard: {
    backgroundColor: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "20px",
    padding: "28px",
    color: "#d8f6ff",
  },

  cta: {
    padding: "80px 8%",
    textAlign: "center",
    background: "linear-gradient(135deg, #00b7ff, #06404a)",
  },

  ctaTitle: {
    fontSize: "40px",
    margin: "0 0 14px",
  },

  ctaText: {
    fontSize: "20px",
    color: "#eafcff",
    marginBottom: "30px",
  },

  footer: {
    textAlign: "center",
    padding: "28px",
    backgroundColor: "#011316",
    color: "#9fcfd8",
  },
};
