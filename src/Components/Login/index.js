import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Make sure to import useNavigate
import './index.css';

function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // useNavigate hook is used to navigate to different routes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can replace this with actual authentication logic (e.g., API call)
    if (user.email !== undefined && user.password !== undefined) {
      // If credentials are correct, navigate to /ChatBot
      alert("Login Successful!");
      navigate("/ChatBot"); // Navigate to the ChatBot path after successful login
    } else {
      alert("Invalid credentials, please try again.");
    }
  };

  return (
    <div className="app-container">
      <form onSubmit={handleSubmit} className="form-container">
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />
        </div>
        <button type="submit" className="submit-btn">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
