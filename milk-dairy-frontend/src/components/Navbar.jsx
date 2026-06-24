import React from "react";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#2e7d32",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>Milk Dairy Management</h2>

      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "20px",
          margin: 0,
          padding: 0,
        }}
      >
        <li><a href="/" style={{ color: "white", textDecoration: "none" }}>Home</a></li>
        <li><a href="/login" style={{ color: "white", textDecoration: "none" }}>Login</a></li>
        <li><a href="/register" style={{ color: "white", textDecoration: "none" }}>Register</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;