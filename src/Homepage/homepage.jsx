import React, { useState } from "react";

// PATH BERUBAH: Impor dari folder components lokal
import LoginModal from "./components/LoginModal";
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

// --- KOMPONEN HOMEPAGE UTAMA ---
const Homepage = () => {
  // State dan Logika tetap di sini
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isCustomerModalOpen, setIsCustomerModalOpen] = useState(false);

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = new URL(href).hash;
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="bg-white text-gray-800">
      {/* 1. Navbar */}
      <Navbar
        onAdminLoginClick={() => setIsAdminModalOpen(true)}
        onCustomerLoginClick={() => setIsCustomerModalOpen(true)}
        onSmoothScroll={handleSmoothScroll}
      />

      {/* 2. Hero */}
      <HeroSection onSmoothScroll={handleSmoothScroll} />

      {/* 3. Features (Produk) */}
      <FeaturesSection />

      {/* 4. About (Tentang) */}
      <AboutSection />

      {/* 5. Footer */}
      <Footer onSmoothScroll={handleSmoothScroll} />

      {/* 6. Modals (tidak terlihat, tapi ada di sini) */}
      <LoginModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        title="Login Admin"
        loginPath="/Admin"
        buttonText="Masuk sebagai Admin"
        buttonStyle="bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
      />
      <LoginModal
        isOpen={isCustomerModalOpen}
        onClose={() => setIsCustomerModalOpen(false)}
        title="Login Customer"
        loginPath="/Customer"
        buttonText="Masuk sebagai Customer"
        buttonStyle="bg-green-600 hover:bg-green-700 focus:ring-green-500"
      />
    </div>
  );
};

export default Homepage;
