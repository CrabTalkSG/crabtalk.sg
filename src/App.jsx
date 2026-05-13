export default function App() {
  const products = [
    {
      name: "Premium Live Crabs",
      desc: "Sri Lanka roe crabs, Indonesian mud crabs and seasonal live crab selections.",
      img: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Live Lobsters",
      desc: "Boston lobster, green lobster and premium lobster options for home cooking or dine-in cooking.",
      img: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Fresh Oysters",
      desc: "Selected oysters, chilled fresh and suitable for gatherings, parties and seafood nights.",
      img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Clams & Shellfish",
      desc: "Manila clams and other shellfish options available depending on daily fresh arrivals.",
      img: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=900&q=80",
    },
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
          padding: "70px 24px",
          textAlign: "center",
          backgroundImage:
            "linear-gradient(rgba(2,27,31,0.75), rgba(2,27,31,0.9)), url('https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
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
              margin: "10px 0",
              lineHeight: "1.1",
            }}
          >
            Premium Live Seafood, Fresh From The Tank
          </h1>

          <p
            style={{
              fontSize: "22px",
              color: "#d7f7ff",
              maxWidth: "760px",
              margin: "20px auto",
              lineHeight: "1.6",
            }}
          >
            Choose your live seafood at Crab Talk — crabs, lobsters, oysters,
            clams and premium fish. Perfect for home cooking, gatherings and
            seafood feasts.
          </p>

          <div style={{ marginTop: "35px" }}>
            <a
              href="https://wa.me/6598398671"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "18px 42px",
                fontSize: "20px",
                borderRadius: "999px",
                backgroundColor: "#00b7ff",
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
                boxShadow: "0 12px 30px rgba(0,183,255,0.35)",
              }}
            >
              Order Now on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section
        style={{
          padding: "60px 24px",
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "40px", marginBottom: "15px" }}>
          Fresh Seafood, Honest Recommendations
        </h2>

        <p
          style={{
            color: "#c6eaf0",
            fontSize: "19px",
            lineHeight: "1.7",
            maxWidth: "850px",
            margin: "0 auto",
          }}
        >
          At Crab Talk, we focus on live seafood quality, daily freshness and
          practical recommendations based on your budget, cooking style and
          occasion.
        </p>
      </section>

      {/* PRODUCTS */}
      <section
        style={{
          padding: "30px 24px 70px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "40px",
            marginBottom: "35px",
          }}
        >
          Our Seafood Selection
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
          }}
        >
          {products.map((item) => (
            <div
              key={item.name}
              style={{
                background: "rgba(255,255,255,0.08)",
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>
                  {item.name}
                </h3>

                <p
                  style={{
                    color: "#c6eaf0",
                    fontSize: "16px",
                    lineHeight: "1.6",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        style={{
          background: "rgba(255,255,255,0.06)",
          padding: "70px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          {[
            ["🦀", "Live Selection", "Choose directly from our live seafood tanks."],
            ["⚖️", "Fair Recommendations", "We recommend based on size, meatiness and your cooking plan."],
            ["🔥", "Cooking Nearby", "Buy live seafood and arrange cooking nearby when available."],
            ["📲", "Easy Reservation", "WhatsApp us to check daily arrivals and reserve in advance."],
          ].map((item) => (
            <div
              key={item[1]}
              style={{
                background: "#062f36",
                padding: "28px",
                borderRadius: "22px",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <div style={{ fontSize: "34px", marginBottom: "12px" }}>
                {item[0]}
              </div>
              <h3 style={{ fontSize: "22px", marginBottom: "8px" }}>
                {item[1]}
              </h3>
              <p style={{ color: "#c6eaf0", lineHeight: "1.6" }}>
                {item[2]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE IMAGE */}
      <section
        style={{
          padding: "80px 24px",
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "35px",
          alignItems: "center",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1000&q=80"
          alt="Premium seafood cooking"
          style={{
            width: "100%",
            borderRadius: "28px",
            boxShadow: "0 25px 50px rgba(0,0,0,0.35)",
          }}
        />

        <div>
          <p
            style={{
              color: "#9fe8ff",
              fontWeight: "bold",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Perfect For Seafood Lovers
          </p>

          <h2 style={{ fontSize: "42px", margin: "12px 0" }}>
            From Live Tank To Your Table
          </h2>

          <p
            style={{
              color: "#c6eaf0",
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            Whether you are planning a family dinner, birthday meal, weekend
            seafood feast or premium crab night, Crab Talk helps you pick the
            right seafood for the occasion.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "70px 24px",
          textAlign: "center",
          background: "linear-gradient(90deg, #0077a3, #00b7ff)",
        }}
      >
        <h2 style={{ fontSize: "42px", marginBottom: "15px" }}>
          Check Today’s Fresh Arrivals
        </h2>

        <p
          style={{
            fontSize: "20px",
            maxWidth: "720px",
            margin: "0 auto 30px",
            lineHeight: "1.6",
          }}
        >
          Live seafood availability changes daily. Message us before coming
          down to reserve your preferred seafood.
        </p>

        <a
          href="https://wa.me/6598398671"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "18px 42px",
            fontSize: "20px",
            borderRadius: "999px",
            backgroundColor: "white",
            color: "#005f7a",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          WhatsApp Crab Talk
        </a>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "35px 24px",
          textAlign: "center",
          color: "#9fcbd3",
          fontSize: "15px",
        }}
      >
        <p style={{ margin: "6px 0" }}>Crab Talk SG</p>
        <p style={{ margin: "6px 0" }}>
          Live Seafood Supply @ Crab Talk
        </p>
        <p style={{ margin: "6px 0" }}>
          WhatsApp: 9839 8671
        </p>
      </footer>
    </div>
  );
}
