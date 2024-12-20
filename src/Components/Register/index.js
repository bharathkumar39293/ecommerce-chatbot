import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './index.css';
function RegisterPage() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // useNavigate should be here inside the function component

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("User Registered!");
    navigate("/Chatbot"); // Navigate after successful registration
  };

  const handleLoginRedirect = () => {
    navigate("/login"); // Redirect to Login page when the button is clicked
  };

  return (
    <div className="app-container">
      <form onSubmit={handleSubmit} className="form-container">
        <h2>Register</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="Enter username"
            required
          />
        </div>
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
        <button type="submit" className="submit-btn">Register</button>
      </form>
      <div className="login-link">
        <p>Already have an account? </p>
        <button onClick={handleLoginRedirect} className="login-btn">Login</button>
      </div>
    </div>
  );
}

export default RegisterPage;
