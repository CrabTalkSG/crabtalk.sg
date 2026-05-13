export default function App() {
  const whatsappLink = "https://wa.me/6598398671";

  const products = [
    "Live Mud Crabs",
    "Boston Lobster",
    "Green Lobster",
    "Fresh Oysters",
    "Manila Clams",
    "Soon Hock",
    "Tiger Grouper",
    "Abalone",
  ];

  const cookingStyles = [
    "Chilli Crab",
    "Black Bean Crab",
    "Ginger Onion Crab",
    "Steamed Live Seafood",
    "Lobster Yee Mee",
    "Lobster Bee Hoon",
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, #0f6b78 0%, #04191d 38%, #010b0d 100%)",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <header
        style={{
          padding: "24px 8%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid rgba(255,255,255,0.12)",
          position: "sticky",
          top: 0,
          background: "rgba(1, 11, 13, 0.85)",
          backdropFilter: "blur(12px)",
          zIndex: 10,
        }}
      >
        <div style={{ fontSize: "26px", fontWeight: "bold" }}>
          🦀 Crab Talk SG
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "linear-gradient(135deg, #00c6ff, #0072ff)",
            color: "white",
            padding: "12px 22px",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: "bold",
            boxShadow: "0 10px 30px rgba(0, 183, 255, 0.35)",
          }}
        >
          WhatsApp Order
        </a>
      </header>

      {/* Hero */}
      <section
        style={{
          padding: "90px 8% 70px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "50px",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-block",
              padding: "8px 16px",
              borderRadius: "999px",
              background: "rgba(159, 232, 255, 0.12)",
              color: "#9fe8ff",
              marginBottom: "24px",
              fontWeight: "bold",
              letterSpacing: "0.5px",
            }}
          >
            Live Seafood Supply @ Crab Talk
          </div>

          <h1
            style={{
              fontSize: "clamp(44px, 7vw, 82px)",
              lineHeight: "1.05",
              margin: "0 0 24px",
              letterSpacing: "-2px",
            }}
          >
            Premium Live Seafood, Fresh From Tank To Table.
          </h1>

          <p
            style={{
              fontSize: "22px",
              lineHeight: "1.6",
              color: "#c9eef5",
              maxWidth: "620px",
              marginBottom: "36px",
            }}
          >
            Choose your live crabs, lobsters, oysters, clams and fresh fish at
            Crab Talk. Buy for home cooking or have your seafood cooked nearby
            with our market cooking partner.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "linear-gradient(135deg, #00d4ff, #0072ff)",
                color: "white",
                padding: "18px 30px",
                borderRadius: "14px",
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: "bold",
                boxShadow: "0 15px 40px rgba(0, 183, 255, 0.35)",
              }}
            >
              Order Now on WhatsApp
            </a>

            <a
              href="https://t.me/CrabTalkSG"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "rgba(255,255,255,0.08)",
                color: "white",
                padding: "18px 30px",
                borderRadius: "14px",
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: "bold",
                border: "1px solid rgba(255,255,255,0.18)",
              }}
            >
              Join Telegram
            </a>
          </div>
        </div>

        <div
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.16), rgba(255,255,255,0.04))",
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: "30px",
            padding: "34px",
            boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
          }}
        >
          <div
            style={{
              height: "420px",
              borderRadius: "24px",
              background:
                "linear-gradient(145deg, #083a42, #031619), radial-gradient(circle, #00c6ff 0%, transparent 55%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "30px",
            }}
          >
            <div>
              <div style={{ fontSize: "90px", marginBottom: "20px" }}>
                🦀 🦞 🦪
              </div>
              <h2 style={{ fontSize: "38px", margin: "0 0 14px" }}>
                Live. Fresh. Premium.
              </h2>
              <p style={{ fontSize: "19px", color: "#bfeef7" }}>
                Hand-picked seafood for families, gatherings and premium home
                dining.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section
        style={{
          padding: "40px 8%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "22px",
        }}
      >
        {[
          ["🦀", "Live Selection", "Choose directly from our live seafood tanks."],
          ["🔥", "Cook Nearby", "Selected items can be cooked through nearby market partners."],
          ["📲", "Easy Reservation", "WhatsApp us to check today’s arrivals and reserve."],
          ["⭐", "Premium Quality", "Suitable for home cooking, family meals and celebrations."],
        ].map((item, index) => (
          <div
            key={index}
            style={{
              padding: "28px",
              borderRadius: "22px",
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <div style={{ fontSize: "36px", marginBottom: "12px" }}>
              {item[0]}
            </div>
            <h3 style={{ fontSize: "22px", margin: "0 0 10px" }}>
              {item[1]}
            </h3>
            <p style={{ color: "#c7dfe4", lineHeight: "1.6", margin: 0 }}>
              {item[2]}
            </p>
          </div>
        ))}
      </section>

      {/* Products */}
      <section style={{ padding: "70px 8%" }}>
        <h2 style={{ fontSize: "42px", marginBottom: "16px" }}>
          Today’s Live Seafood Selection
        </h2>
        <p
          style={{
            fontSize: "19px",
            color: "#bfeef7",
            maxWidth: "760px",
            marginBottom: "34px",
            lineHeight: "1.6",
          }}
        >
          Availability changes daily. Message us to check live stock, size,
          weight and today’s market price.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "18px",
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              style={{
                padding: "22px",
                borderRadius: "18px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.14)",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              {product}
            </div>
          ))}
        </div>
      </section>

      {/* Cooking Partner */}
      <section
        style={{
          margin: "20px 8% 70px",
          padding: "50px",
          borderRadius: "30px",
          background:
            "linear-gradient(135deg, rgba(0,183,255,0.18), rgba(255,255,255,0.06))",
          border: "1px solid rgba(255,255,255,0.16)",
        }}
      >
        <h2 style={{ fontSize: "40px", marginTop: 0 }}>
          Buy Live Seafood, Have It Cooked Nearby
        </h2>

        <p
          style={{
            fontSize: "20px",
            color: "#d7f6fb",
            lineHeight: "1.7",
            maxWidth: "900px",
          }}
        >
          Pick your seafood at Crab Talk and enjoy popular cooking styles such
          as chilli crab, ginger onion crab, black bean seafood, steamed fish,
          lobster yee mee and lobster bee hoon through our nearby market cooking
          collaboration.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
            gap: "16px",
            marginTop: "28px",
          }}
        >
          {cookingStyles.map((style, index) => (
            <div
              key={index}
              style={{
                padding: "18px",
                borderRadius: "14px",
                background: "rgba(0,0,0,0.25)",
                border: "1px solid rgba(255,255,255,0.12)",
                fontWeight: "bold",
              }}
            >
              {style}
            </div>
          ))}
        </div>
      </section>

      {/* Location */}
      <section
        style={{
          padding: "60px 8%",
          background: "rgba(0,0,0,0.25)",
          borderTop: "1px solid rgba(255,255,255,0.12)",
          borderBottom: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <h2 style={{ fontSize: "38px", marginTop: 0 }}>Visit Crab Talk</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "28px",
          }}
        >
          <div>
            <h3 style={{ color: "#9fe8ff" }}>Location</h3>
            <p style={{ fontSize: "19px", lineHeight: "1.6" }}>
              Commonwealth Crescent Market
              <br />
              Stall #01-41 / #01-42 / #01-43
              <br />
              Singapore
            </p>
          </div>

          <div>
            <h3 style={{ color: "#9fe8ff" }}>Contact</h3>
            <p style={{ fontSize: "19px", lineHeight: "1.6" }}>
              WhatsApp: 9839 8671
              <br />
              Telegram: @CrabTalkSG
            </p>
          </div>

          <div>
            <h3 style={{ color: "#9fe8ff" }}>Best For</h3>
            <p style={{ fontSize: "19px", lineHeight: "1.6" }}>
              Home cooking
              <br />
              Family dinner
              <br />
              Seafood gatherings
              <br />
              Premium live seafood orders
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: "80px 8%", textAlign: "center" }}>
        <h2 style={{ fontSize: "44px", marginBottom: "18px" }}>
          Reserve Your Live Seafood Today
        </h2>

        <p
          style={{
            fontSize: "20px",
            color: "#c9eef5",
            maxWidth: "700px",
            margin: "0 auto 34px",
            lineHeight: "1.6",
          }}
        >
          Stock is limited and changes daily. WhatsApp us for today’s arrivals,
          sizes, prices and reservation.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #00d4ff, #0072ff)",
            color: "white",
            padding: "20px 42px",
            borderRadius: "16px",
            textDecoration: "none",
            fontSize: "22px",
            fontWeight: "bold",
            boxShadow: "0 18px 45px rgba(0,183,255,0.35)",
          }}
        >
          WhatsApp Crab Talk Now
        </a>
      </section>

      <footer
        style={{
          padding: "26px 8%",
          textAlign: "center",
          color: "#8fbfc7",
          borderTop: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        © 2026 Crab Talk SG · Live Seafood Supply @ Crab Talk
      </footer>
    </div>
  );
}
