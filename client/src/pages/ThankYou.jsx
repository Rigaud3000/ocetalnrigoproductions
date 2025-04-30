function ThankYou() {
  return (
    <div style={{ textAlign: "center", padding: "4rem", backgroundColor: "#f8f9fa", height: "100vh" }}>
      <h1 style={{ fontSize: "3rem", color: "#e63946" }}>Thank You!</h1>
      <p style={{ fontSize: "1.5rem", color: "#333", marginTop: "1rem" }}>
        Your recruiting request has been received! Our team will contact you soon.
      </p>
      <a href="/" 
        style={{
          display: "inline-block",
          marginTop: "2rem",
          padding: "0.75rem 2rem",
          backgroundColor: "#e63946",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
        }}>
        Return Home
      </a>
    </div>
  );
}

export default ThankYou;
