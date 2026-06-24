const BASE_URL = "http://localhost:5000/api";

// Get all milk entries
export const getMilkEntries = async () => {
  const response = await fetch(`${BASE_URL}/milk`);
  return response.json();
};

// Add milk entry
export const addMilkEntry = async (data) => {
  const response = await fetch(`${BASE_URL}/milk/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

// Delete milk entry
export const deleteMilkEntry = async (id) => {
  const response = await fetch(`${BASE_URL}/milk/${id}`, {
    method: "DELETE",
  });

  return response.json();
};

// Register user
export const registerUser = async (data) => {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

// Login user
export const loginUser = async (data) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};