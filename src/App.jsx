import { useEffect, useState } from "react";

export default function App() {
  const heroImages = [
    {
      src: "/images/8days-feature.jpg",
      title: "Featured on 8 Days",
      subtitle: "Live seafood selection with Fai Kee cooking collaboration",
    },
    {
      src: "/images/botak-jazz-feature.jpg",
      title: "Featured by Botak Jazz",
      subtitle: "Lobster Yee Mee and live seafood at Commonwealth Crescent",
    },
    {
      src: "/images/AI-feature.jpeg",
      title: "Crab Talk × AI Workflow",
      subtitle: "How a live seafood seller uses AI for daily work",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  const products = [
    "Sri Lanka Roe Crabs",
    "Indonesian Mud Crabs",
    "Boston Lobster",
    "Green Lobster",
    "Australian Rock Lobster",
    "Alaskan King Crab",
    "Canadian Oysters",
    "Manila Clams",
    "Soon Hock",
    "Tiger Grouper",
  ];

  const features = [
    {
      title: "8 Days Feature",
      desc: "Crab Talk was featured for the live seafood and Fai Kee cooking collaboration at Commonwealth Crescent.",
      img: "/images/8days-feature.jpg",
      link: "https://www.8days.sg/eatanddrink/hawkerfood/commonwealth-crab-talk-fai-kee-live-seafood-hawker-collab-856541",
      button: "Read 8 Days Feature",
    },
    {
      title: "Botak Jazz TikTok",
      desc: "Botak Jazz featured the popular lobster noodles experience from the Crab Talk × Fai Kee collaboration.",
      img: "/images/botak-jazz-feature.jpg",
      link: "https://www.tiktok.com/@botakjazz/video/7602204733155364116",
      button: "Watch TikTok Feature",
    },
    {
      title: "Crab Seller Using AI",
      desc: "A feature story on how Crab Talk uses AI to improve daily seafood operations, marketing and customer communication.",
      img: "/images/AI-feature.jpeg",
      link: "https://www.facebook.com/share/v/1Djwg4h7UP/",
      button: "Watch AI Feature",
    },
  ];

  return (
    <div style={styles.page}>
      <header style={styles.nav}>
        <div>
          <div style={styles.logo}>CRAB TALK SG</div>
          <div style={styles.logoSub}>Live Seafood Supply @ Crab Talk</div>
        </div>

        <div style={styles.navLinks}>
          <a href="#home-cooking" style={styles.navLink}>Home Cooking</a>
          <a href="#fai-kee" style={styles.navLink}>Fai Kee Cooking</a>
          <a href="#features" style={styles.navLink}>Features</a>
          <a href="#contact" style={styles.navButton}>Order Now</a>
        </div>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroText}>
          <div style={styles.badge}>LIVE SEAFOOD • COMMONWEALTH CRESCENT</div>

          <h1 style={styles.heroTitle}>
            Premium Live Seafood, Selected Fresh at the Market.
          </h1>

          <p style={styles.heroDesc}>
            Choose your live crabs, lobsters, oysters, clams and fish directly from
            Crab Talk. Bring them home for cooking, or have selected items prepared
            nearby through our Fai Kee cooking collaboration.
          </p>

          <div style={styles.heroButtons}>
            <a href="https://wa.me/6598398671" target="_blank" rel="noopener noreferrer" style={styles.primaryButton}>
              WhatsApp to Reserve
            </a>

            <a href="#fai-kee" style={styles.secondaryButton}>
              View Cooking Options
            </a>
          </div>

          <div style={styles.infoGrid}>
            <div style={styles.infoBox}>
              <strong>Address</strong>
              <span>31 Commonwealth Crescent #01-41/42/43 S(149644)</span>
            </div>

            <div style={styles.infoBox}>
              <strong>Concept</strong>
              <span>Buy live seafood, cook at home or arrange nearby cooking</span>
            </div>
          </div>
        </div>

        <div style={styles.heroImageWrap}>
          <img
            src={heroImages[currentImage].src}
            alt={heroImages[currentImage].title}
            style={styles.heroImage}
          />

          <div style={styles.heroImageOverlay}>
            <div style={styles.overlayTitle}>{heroImages[currentImage].title}</div>
            <div style={styles.overlaySub}>{heroImages[currentImage].subtitle}</div>
          </div>

          <div style={styles.dots}>
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                style={{
                  ...styles.dot,
                  opacity: currentImage === index ? 1 : 0.35,
                  width: currentImage === index ? "28px" : "9px",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <div style={styles.kicker}>WHAT WE SUPPLY</div>
          <h2 style={styles.sectionTitle}>Live Seafood Selection</h2>
          <p style={styles.sectionDesc}>
            Availability changes based on daily supply. Walk-in or pre-order is recommended,
            especially for larger crabs, lobsters and premium fish.
          </p>
        </div>

        <div style={styles.productGrid}>
          {products.map((item) => (
            <div key={item} style={styles.productCard}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="home-cooking" style={styles.splitSection}>
        <div style={styles.splitCard}>
          <div style={styles.kicker}>SECTION 1</div>
          <h2 style={styles.sectionTitle}>Home Cooking</h2>
          <p style={styles.sectionDesc}>
            Perfect for customers who want to choose live seafood personally and prepare
            it at home. Select your crab, lobster, clams, oysters or fish at the stall,
            then bring it back for your own family meal.
          </p>

          <div style={styles.stepList}>
            <div style={styles.step}><span>01</span> Choose your live seafood</div>
            <div style={styles.step}><span>02</span> Confirm size, weight and price</div>
            <div style={styles.step}><span>03</span> Bring home and cook fresh</div>
          </div>
        </div>

        <div id="fai-kee" style={styles.splitCardHighlight}>
          <div style={styles.kicker}>SECTION 2</div>
          <h2 style={styles.sectionTitle}>Cooked by Fai Kee</h2>
          <p style={styles.sectionDesc}>
            Choose live seafood from Crab Talk and have selected seafood cooked nearby
            by Fai Kee Fish Head Bee Hoon. Popular choices include Lobster Yee Mee,
            Lobster Bee Hoon, Chilli Crab, Ginger Onion Crab and Hong Kong-style steamed fish.
          </p>

          <div style={styles.stepList}>
            <div style={styles.step}><span>01</span> Buy seafood at Crab Talk</div>
            <div style={styles.step}><span>02</span> Confirm cooking style and time slot</div>
            <div style={styles.step}><span>03</span> Enjoy freshly cooked seafood nearby</div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <div style={styles.kicker}>POPULAR COOKING STYLES</div>
          <h2 style={styles.sectionTitle}>Customer Favourites</h2>
        </div>

        <div style={styles.dishGrid}>
          {[
            "Lobster Yee Mee",
            "Lobster Bee Hoon",
            "Chilli Crab",
            "Ginger & Onion Crab",
            "Black Bean Crab",
            "Hong Kong-Style Steamed Fish",
            "Steam Crab",
            "Steam Manila Clams",
          ].map((dish) => (
            <div key={dish} style={styles.dishCard}>
              {dish}
            </div>
          ))}
        </div>
      </section>

      <section id="features" style={styles.section}>
        <div style={styles.sectionHeader}>
          <div style={styles.kicker}>AS SEEN ON</div>
          <h2 style={styles.sectionTitle}>Media & Creator Features</h2>
          <p style={styles.sectionDesc}>
            Explore recent features, videos and stories about Crab Talk, our live seafood
            selection and the Crab Talk × Fai Kee experience.
          </p>
        </div>

        <div style={styles.featureGrid}>
          {features.map((feature) => (
            <article key={feature.title} style={styles.featureCard}>
              <img src={feature.img} alt={feature.title} style={styles.featureImage} />

              <div style={styles.featureContent}>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureDesc}>{feature.desc}</p>

                <a
                  href={feature.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.featureButton}
                >
                  {feature.button}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" style={styles.cta}>
        <div>
          <div style={styles.kicker}>VISIT US</div>
          <h2 style={styles.ctaTitle}>Reserve Your Live Seafood Before Coming Down</h2>
          <p style={styles.ctaText}>
            Stocks move fast, especially for premium crabs and lobsters. Message us to
            check availability before visiting.
          </p>
        </div>

        <div style={styles.ctaActions}>
          <a href="https://wa.me/6598398671" target="_blank" rel="noopener noreferrer" style={styles.primaryButton}>
            WhatsApp 9839 8671
          </a>

          <a href="https://t.me/CrabTalkSG" target="_blank" rel="noopener noreferrer" style={styles.secondaryButton}>
            Join Telegram
          </a>
        </div>
      </section>

      <footer style={styles.footer}>
        <div>
          <strong>Crab Talk SG</strong>
          <p>Live Seafood Supply @ Crab Talk</p>
        </div>

        <div>
          31 Commonwealth Crescent #01-41/42/43 S(149644)
        </div>
      </footer>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top left, rgba(0,183,255,0.22), transparent 34%), linear-gradient(180deg, #021b1f 0%, #031317 48%, #01090b 100%)",
    color: "#ffffff",
    fontFamily: "Arial, Helvetica, sans-serif",
  },

  nav: {
    maxWidth: "1180px",
    margin: "0 auto",
    padding: "26px 22px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    borderBottom: "1px solid rgba(255,255,255,0.12)",
  },

  logo: {
    fontSize: "22px",
    fontWeight: "900",
    letterSpacing: "1px",
    color: "#ffffff",
  },

  logoSub: {
    marginTop: "4px",
    color: "#9fe8ff",
    fontSize: "14px",
  },

  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    flexWrap: "wrap",
  },

  navLink: {
    color: "#d9f7ff",
    textDecoration: "none",
    fontSize: "14px",
  },

  navButton: {
    background: "#00b7ff",
    color: "#ffffff",
    textDecoration: "none",
    padding: "11px 18px",
    borderRadius: "999px",
    fontWeight: "800",
    fontSize: "14px",
  },

  hero: {
    maxWidth: "1180px",
    margin: "0 auto",
    padding: "60px 22px 50px",
    display: "grid",
    gridTemplateColumns: "1.05fr 0.95fr",
    gap: "38px",
    alignItems: "center",
  },

  heroText: {
    minWidth: 0,
  },

  badge: {
    display: "inline-block",
    color: "#9fe8ff",
    background: "rgba(0,183,255,0.12)",
    border: "1px solid rgba(159,232,255,0.28)",
    padding: "9px 13px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "800",
    letterSpacing: "1px",
    marginBottom: "22px",
  },

  heroTitle: {
    fontSize: "clamp(42px, 6vw, 76px)",
    lineHeight: "0.95",
    margin: "0 0 22px",
    letterSpacing: "-2.5px",
  },

  heroDesc: {
    fontSize: "18px",
    lineHeight: "1.7",
    color: "#c8e6ec",
    maxWidth: "660px",
    margin: "0 0 30px",
  },

  heroButtons: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
    marginBottom: "28px",
  },

  primaryButton: {
    display: "inline-block",
    background: "linear-gradient(135deg, #00b7ff, #41d6ff)",
    color: "#001014",
    textDecoration: "none",
    padding: "15px 24px",
    borderRadius: "14px",
    fontWeight: "900",
    boxShadow: "0 18px 45px rgba(0,183,255,0.25)",
  },

  secondaryButton: {
    display: "inline-block",
    background: "rgba(255,255,255,0.08)",
    color: "#ffffff",
    textDecoration: "none",
    padding: "15px 24px",
    borderRadius: "14px",
    fontWeight: "800",
    border: "1px solid rgba(255,255,255,0.16)",
  },

  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "14px",
  },

  infoBox: {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "18px",
    padding: "18px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    color: "#c8e6ec",
    lineHeight: "1.45",
  },

  heroImageWrap: {
    position: "relative",
    borderRadius: "30px",
    overflow: "hidden",
    minHeight: "520px",
    boxShadow: "0 35px 90px rgba(0,0,0,0.45)",
    border: "1px solid rgba(255,255,255,0.16)",
    background: "#031317",
  },

  heroImage: {
    width: "100%",
    height: "520px",
    objectFit: "cover",
    display: "block",
  },

  heroImageOverlay: {
    position: "absolute",
    left: "22px",
    right: "22px",
    bottom: "22px",
    background: "rgba(2,27,31,0.82)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: "20px",
    padding: "18px",
  },

  overlayTitle: {
    fontSize: "22px",
    fontWeight: "900",
    marginBottom: "6px",
  },

  overlaySub: {
    color: "#bcecff",
    lineHeight: "1.45",
  },

  dots: {
    position: "absolute",
    top: "22px",
    right: "22px",
    display: "flex",
    gap: "8px",
  },

  dot: {
    height: "9px",
    borderRadius: "99px",
    border: "none",
    background: "#ffffff",
    cursor: "pointer",
    transition: "0.25s ease",
  },

  section: {
    maxWidth: "1180px",
    margin: "0 auto",
    padding: "56px 22px",
  },

  sectionHeader: {
    maxWidth: "760px",
    marginBottom: "28px",
  },

  kicker: {
    color: "#00b7ff",
    fontSize: "13px",
    fontWeight: "900",
    letterSpacing: "1.7px",
    marginBottom: "10px",
  },

  sectionTitle: {
    fontSize: "clamp(32px, 4vw, 48px)",
    lineHeight: "1.05",
    margin: "0 0 14px",
    letterSpacing: "-1px",
  },

  sectionDesc: {
    color: "#c8e6ec",
    fontSize: "17px",
    lineHeight: "1.7",
    margin: 0,
  },

  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
    gap: "14px",
  },

  productCard: {
    padding: "20px",
    borderRadius: "18px",
    background: "linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.04))",
    border: "1px solid rgba(255,255,255,0.12)",
    fontWeight: "800",
    color: "#ffffff",
  },

  splitSection: {
    maxWidth: "1180px",
    margin: "0 auto",
    padding: "30px 22px 56px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },

  splitCard: {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "28px",
    padding: "34px",
  },

  splitCardHighlight: {
    background:
      "linear-gradient(180deg, rgba(0,183,255,0.18), rgba(255,255,255,0.06))",
    border: "1px solid rgba(159,232,255,0.28)",
    borderRadius: "28px",
    padding: "34px",
    boxShadow: "0 24px 70px rgba(0,183,255,0.12)",
  },

  stepList: {
    marginTop: "26px",
    display: "grid",
    gap: "12px",
  },

  step: {
    background: "rgba(0,0,0,0.2)",
    border: "1px solid rgba(255,255,255,0.1)",
    padding: "15px",
    borderRadius: "16px",
    color: "#eafcff",
    lineHeight: "1.4",
  },

  dishGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: "14px",
  },

  dishCard: {
    padding: "22px",
    borderRadius: "20px",
    background: "#062a31",
    border: "1px solid rgba(159,232,255,0.16)",
    color: "#dffaff",
    fontWeight: "800",
  },

  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
    gap: "22px",
  },

  featureCard: {
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.13)",
    borderRadius: "28px",
    overflow: "hidden",
    boxShadow: "0 25px 65px rgba(0,0,0,0.3)",
  },

  featureImage: {
    width: "100%",
    height: "260px",
    objectFit: "cover",
    display: "block",
  },

  featureContent: {
    padding: "24px",
  },

  featureTitle: {
    fontSize: "24px",
    margin: "0 0 10px",
  },

  featureDesc: {
    color: "#c8e6ec",
    lineHeight: "1.65",
    margin: "0 0 22px",
  },

  featureButton: {
    display: "inline-block",
    color: "#001014",
    background: "#9fe8ff",
    textDecoration: "none",
    padding: "13px 18px",
    borderRadius: "12px",
    fontWeight: "900",
  },

  cta: {
    maxWidth: "1180px",
    margin: "30px auto",
    padding: "38px",
    borderRadius: "32px",
    background:
      "linear-gradient(135deg, rgba(0,183,255,0.24), rgba(255,255,255,0.07))",
    border: "1px solid rgba(159,232,255,0.25)",
    display: "flex",
    justifyContent: "space-between",
    gap: "24px",
    alignItems: "center",
  },

  ctaTitle: {
    fontSize: "36px",
    lineHeight: "1.1",
    margin: "0 0 12px",
  },

  ctaText: {
    color: "#c8e6ec",
    lineHeight: "1.6",
    margin: 0,
    maxWidth: "680px",
  },

  ctaActions: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },

  footer: {
    maxWidth: "1180px",
    margin: "0 auto",
    padding: "34px 22px 46px",
    color: "#9fb9bf",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    flexWrap: "wrap",
  },

  "@media": {},
};
