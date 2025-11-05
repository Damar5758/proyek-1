import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

// IMPOR SEMUA HALAMAN CUSTOMER
import Beranda from "./pages/Beranda";
import RiwayatPembelian from "./pages/RiwayatPembelian";
import Keranjang from "./pages/Keranjang";

export default function CustomerLayout() {
  return (
    <div className="flex h-screen bg-gray-100 font-inter">
      {/* Sidebar Navigasi Customer */}
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header Customer */}
        <Header />

        {/* Konten Halaman Utama */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          {/* TAMBAHKAN ROUTES DI SINI */}
          <Routes>
            {/* /Customer akan render Beranda */}
            <Route index element={<Beranda />} />
            {/* /Customer/riwayat akan render RiwayatPembelian */}
            <Route path="riwayat" element={<RiwayatPembelian />} />
            {/* /Customer/keranjang akan render Keranjang */}
            <Route path="keranjang" element={<Keranjang />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}