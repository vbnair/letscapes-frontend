// # Main landing page section
export default function Hero() {
  return (
    <section style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Where Will Your Next Adventure Take You?</h2>
      <p>Click the button below and get inspired!</p>
      <button
        style={{
          padding: "10px 20px",
          background: "#ff5733",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Get Inspired 🎲
      </button>
    </section>
  );
}
