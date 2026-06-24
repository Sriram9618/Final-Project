import React, { useState } from "react";

function Bills() {
  const [farmerName, setFarmerName] = useState("");
  const [litres, setLitres] = useState("");
  const [rate, setRate] = useState("");
  const [total, setTotal] = useState(null);

  const generateBill = (e) => {
    e.preventDefault();

    const amount = Number(litres) * Number(rate);
    setTotal(amount);
  };

  return (
    <div className="container">
      <h1>Milk Bill Generator</h1>

      <form onSubmit={generateBill}>
        <input
          type="text"
          placeholder="Farmer Name"
          value={farmerName}
          onChange={(e) => setFarmerName(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Milk Litres"
          value={litres}
          onChange={(e) => setLitres(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Rate Per Litre"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          required
        />

        <button type="submit">Generate Bill</button>
      </form>

      {total !== null && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            background: "#fff",
          }}
        >
          <h2>Bill Details</h2>
          <p><strong>Farmer:</strong> {farmerName}</p>
          <p><strong>Milk:</strong> {litres} Litres</p>
          <p><strong>Rate:</strong> ₹{rate} / Litre</p>
          <p><strong>Total Amount:</strong> ₹{total}</p>

          <button onClick={() => window.print()}>
            Print Bill
          </button>
        </div>
      )}
    </div>
  );
}

export default Bills;