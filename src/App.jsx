import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "./components/navBar";
import { Challenge } from "./components/challenge";
import { Login } from "./components/login";
import { RegisterForm } from "./components/registerForm";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Challenge />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<RegisterForm />} />
      </Routes>

    </Router>
  );
}

export default App;
