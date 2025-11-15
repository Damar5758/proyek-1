import React from "react";
// Path ini sudah benar (menunjuk ke src/assets/Homepage.svg)
import heroBg from "../../assets/Homepage.svg";

const HeroSection = ({ onSmoothScroll }) => {
  return (
    <section
      id="hero"
      // 1. Kembali ke full background image
      className="relative flex items-center min-h-screen pt-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* 2. Overlay gelap tetap ada */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* 3. Konten diatur rata kiri (di layar md ke atas) */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl text-center md:text-left">
          {/* 4. Pre-title (Minimalis) */}
          <p className="text-4xl font-semibold text-white uppercase tracking-wider mb-2">
            Selamat Datang di Pix2Land
          </p>

          {/* 5. Judul Utama (Minimalis) */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Eksplorasi Model 3 Dimensi Anda
          </h1>

          {/* 6. Paragraf (Minimalis) */}
          <p className="text-lg text-gray-200 max-w-xl mb-8">
            Solusi lengkap untuk manajemen dan pengalaman pelanggan Anda.
            Inovatif, intuitif, dan terpercaya.
          </p>

          {/* 7. Tombol Outline (Minimalis, seperti "Watch Video") */}
          <a
            href="#produk"
            className="inline-flex items-center text-white font-semibold border border-white rounded-full px-8 py-3 
                       transition-all duration-300 ease-in-out
                       hover:bg-white hover:text-green-600" // Efek hover kebalikan
            onClick={onSmoothScroll}
          >
            Lihat Produk Kami
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
