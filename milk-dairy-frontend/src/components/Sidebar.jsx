import React from "react";

function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        height: "100vh",
        backgroundColor: "#2e7d32",
        color: "white",
        padding: "20px",
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      <h2>Milk Dairy</h2>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          marginTop: "30px",
        }}
      >
        <li style={{ marginBottom: "15px" }}>
          <a
            href="/"
            style={{ color: "white", textDecoration: "none" }}
          >
            Dashboard
          </a>
        </li>

        <li style={{ marginBottom: "15px" }}>
          <a
            href="/milk"
            style={{ color: "white", textDecoration: "none" }}
          >
            Milk Entries
          </a>
        </li>

        <li style={{ marginBottom: "15px" }}>
          <a
            href="/billing"
            style={{ color: "white", textDecoration: "none" }}
          >
            Billing
          </a>
        </li>

        <li style={{ marginBottom: "15px" }}>
          <a
            href="/login"
            style={{ color: "white", textDecoration: "none" }}
          >
            Login
          </a>
        </li>

        <li>
          <a
            href="/register"
            style={{ color: "white", textDecoration: "none" }}
          >
            Register
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;