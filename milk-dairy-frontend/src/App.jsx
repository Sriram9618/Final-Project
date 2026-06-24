import React, { useState, useEffect } from "react";

function App() {
  const [farmerName, setFarmerName] = useState("");
  const [litres, setLitres] = useState("");
  const [fat, setFat] = useState("");
  const [amount, setAmount] = useState("");
  const [entries, setEntries] = useState([]);

  const fetchEntries = async () => {
    const res = await fetch("http://localhost:5000/api/milk");
    const data = await res.json();
    setEntries(data.entries);
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const addEntry = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/milk/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        farmerName,
        litres,
        fat,
        amount,
      }),
    });

    setFarmerName("");
    setLitres("");
    setFat("");
    setAmount("");

    fetchEntries();
  };

  return (
    <div className="container">
      <h1>Milk Dairy Management System</h1>

      <form onSubmit={addEntry}>
        <input
          type="text"
          placeholder="Farmer Name"
          value={farmerName}
          onChange={(e) => setFarmerName(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Litres"
          value={litres}
          onChange={(e) => setLitres(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Fat %"
          value={fat}
          onChange={(e) => setFat(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <button type="submit">Add Entry</button>
      </form>

      <h2>Milk Entries</h2>

      <table>
        <thead>
          <tr>
            <th>Farmer</th>
            <th>Litres</th>
            <th>Fat</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {entries?.map((item) => (
            <tr key={item._id}>
              <td>{item.farmerName}</td>
              <td>{item.litres}</td>
              <td>{item.fat}</td>
              <td>₹{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;