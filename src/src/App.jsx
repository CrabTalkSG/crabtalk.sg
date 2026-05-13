export default function App() {
  return (
    <div
      style={{
        backgroundColor: "#021b1f",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "60px", marginBottom: "10px" }}>
        🦀 Crab Talk SG
      </h1>

      <p style={{ fontSize: "24px", color: "#9fe8ff" }}>
        Live Seafood Supply @ Crab Talk
      </p>

      <img
        src="https://images.unsplash.com/photo-1559737558-2f5a35f4523b"
        alt="Seafood"
        style={{
          width: "90%",
          maxWidth: "900px",
          borderRadius: "20px",
          marginTop: "30px",
        }}
      />

      <div style={{ marginTop: "40px", fontSize: "22px" }}>
        <p>🦞 Live Lobsters</p>
        <p>🦀 Premium Live Crabs</p>
        <p>🦪 Fresh Oysters</p>
        <p>🐚 Manila Clams</p>
      </div>

      <button
        style={{
          marginTop: "40px",
          padding: "18px 40px",
          fontSize: "22px",
          borderRadius: "12px",
          border: "none",
          backgroundColor: "#00b7ff",
          color: "white",
          cursor: "pointer",
        }}
      >
        Order Now
      </button>
    </div>
  );
}
