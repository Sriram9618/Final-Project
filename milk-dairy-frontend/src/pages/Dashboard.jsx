import React from "react";

function Dashboard() {
  const totalCustomers = 25;
  const totalMilk = 450;
  const totalIncome = 22500;
  const totalBills = 18;

  return (
    <div className="container">
      <h1>Milk Dairy Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>{totalCustomers}</h2>
          <p>Total Customers</p>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>{totalMilk} L</h2>
          <p>Total Milk Collected</p>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>₹{totalIncome}</h2>
          <p>Total Income</p>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>{totalBills}</h2>
          <p>Total Bills Generated</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;