import React, { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const CORRECT_PASSWORD = "12345";
  const TARGET_URL =
    "https://www.facebook.com/p/Centro-di-Aggregazione-Sociale-Guspini-100079939591794/";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      window.open(TARGET_URL, "_blank");
    } else {
      setError("Password errata");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.card}>
        <h2 style={styles.title}>Inserisci il codice</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          style={styles.input}
          placeholder="Password"
        />
        <button type="submit" style={styles.button}>
          Accedi
        </button>
        {error && <p style={styles.error}>{error}</p>}
      </form>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:
      "url('https://drive.google.com/uc?id=17eVUwL8kgUv7HtdCkJ9hfC5-cIeys0Yg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "2rem",
    borderRadius: "1rem",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "300px",
  },
  title: {
    marginBottom: "1rem",
    fontSize: "1.2rem",
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    marginBottom: "1rem",
    borderRadius: "0.5rem",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  button: {
    width: "100%",
    padding: "0.5rem",
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "0.5rem",
    fontSize: "1rem",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginTop: "0.5rem",
  },
};

export default App;
