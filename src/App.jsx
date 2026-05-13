export default function App() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #021b1f, #06404a)",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "56px", marginBottom: "10px" }}>
        🦀 Crab Talk SG
      </h1>

      <p style={{ fontSize: "24px", color: "#9fe8ff" }}>
        Live Seafood Supply @ Crab Talk
      </p>

      <div style={{ marginTop: "40px", fontSize: "22px", lineHeight: "1.8" }}>
        <p>🦞 Live Lobsters</p>
        <p>🦀 Premium Live Crabs</p>
        <p>🦪 Fresh Oysters</p>
        <p>🐚 Manila Clams</p>
      </div>

      <a
        href="https://wa.me/6598398671"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "40px",
          padding: "18px 40px",
          fontSize: "22px",
          borderRadius: "12px",
          backgroundColor: "#00b7ff",
          color: "white",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Order Now on WhatsApp
      </a>
    </div>
  );
}
