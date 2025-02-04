import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "./components/navBar";
import { Challenge } from "./components/challenge";
import { Login } from "./components/login";
import { RegisterForm } from "./components/registerForm";
import { ContactForm } from "./components/contactForm";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/rect-challenge" element={<Challenge />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<RegisterForm />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>

    </Router>
  );
}

export default App;
