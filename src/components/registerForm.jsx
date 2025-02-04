import React, { useState } from "react";
import "./registerForm.css";

export const RegisterForm = () => {
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
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          title="firstName"
          required 
          />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          title="lastName"
          required 
          />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          title="age"
          required 
          />

        <input
          type="text"
          name="village"
          placeholder="Village"
          value={formData.village}
          onChange={handleChange}
          title="village"
          required 
          />

        <input
          type="text"
          name="district"
          placeholder="District"
          value={formData.district}
          onChange={handleChange}
          title="district"
          required 
          />

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
