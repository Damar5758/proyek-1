import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Impor HANYA Layout (Bungkusnya)
import AdminLayout from "./Admin/AdminLayout";
import CustomerLayout from "./Customer/CustomerLayout";
import Homepage from "./Homepage/homepage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Admin/*" element={<AdminLayout />} />

        <Route path="/Customer/*" element={<CustomerLayout />} />
      </Routes>
    </BrowserRouter>
  );
}
