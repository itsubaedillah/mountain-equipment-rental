import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginClient from "./pages/LoginClient";
import RegisterClient from "./pages/RegisterClient"; // tambahkan ini
import LoginAdmin from "./pages/LoginAdmin";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginClient />} />
        <Route path="/register" element={<RegisterClient />} /> {/* tambahkan ini */}
        <Route path="/admin-login" element={<LoginAdmin />} />
      </Routes>
    </Router>
  );
}
