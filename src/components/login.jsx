import React, { useState } from "react";
import "./registerForm.css";

export const Login = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    village: "",
    district: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      age: "",
      village: "",
      district: "",
      phone: "",
      password: "",
    });
  };

  return (
    <div className="form-container">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>

        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          title="phone"
          required 
          />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          title="password"
          required 
          />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
