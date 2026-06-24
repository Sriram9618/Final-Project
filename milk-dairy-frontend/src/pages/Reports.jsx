import React from "react";

function Reports() {
  const reportData = [
    {
      id: 1,
      farmer: "Ramesh",
      litres: 50,
      amount: 2500,
    },
    {
      id: 2,
      farmer: "Suresh",
      litres: 40,
      amount: 2000,
    },
    {
      id: 3,
      farmer: "Mahesh",
      litres: 60,
      amount: 3000,
    },
  ];

  const totalLitres = reportData.reduce(
    (sum, item) => sum + item.litres,
    0
  );

  const totalAmount = reportData.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  return (
    <div className="container">
      <h1>Milk Collection Reports</h1>

      <table>
        <thead>
          <tr>
            <th>Farmer Name</th>
            <th>Milk (Litres)</th>
            <th>Amount (₹)</th>
          </tr>
        </thead>

        <tbody>
          {reportData.map((item) => (
            <tr key={item.id}>
              <td>{item.farmer}</td>
              <td>{item.litres}</td>
              <td>₹{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          background: "#fff",
          borderRadius: "10px",
        }}
      >
        <h3>Total Milk: {totalLitres} Litres</h3>
        <h3>Total Amount: ₹{totalAmount}</h3>
      </div>
    </div>
  );
}

export default Reports;