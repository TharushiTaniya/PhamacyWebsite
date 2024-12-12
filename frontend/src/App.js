// FILE: App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginForm";
import RegisterPage from "./components/RegisterForm";
import DashboardUser from "./pages/DashboardUser";
import DashboardPharmacy from "./pages/DashboardPharmacy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user/dashboard" element={<DashboardUser />} />
        <Route path="/pharmacy/dashboard" element={<DashboardPharmacy />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;