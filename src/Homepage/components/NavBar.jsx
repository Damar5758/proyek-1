import React, { useState, useEffect } from "react";

const Navbar = ({
  onAdminLoginClick,
  onCustomerLoginClick,
  onSmoothScroll,
}) => {
  // 1. State untuk melacak status scroll
  const [scrolled, setScrolled] = useState(false);

  // 2. Fungsi untuk menangani scroll
  const handleScroll = () => {
    const offset = window.scrollY;
    // Ganti background setelah scroll lebih dari 50px
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // 3. Tambahkan event listener saat komponen dimuat
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // 4. Bersihkan event listener saat komponen dibongkar
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Array kosong berarti efek ini hanya berjalan sekali (saat mount)

  // 5. Buat variabel untuk kelas-kelas yang akan berubah
  const navbarClasses = scrolled
    ? "bg-white shadow-md"
    : "bg-transparent shadow-none";
  const logoClasses = scrolled ? "text-green-600" : "text-white";
  const linkClasses = scrolled
    ? "text-gray-600 hover:text-green-600"
    : "text-white hover:text-gray-200";

  // HAPUS 'loginButtonClasses' KARENA SUDAH TIDAK DIPERLUKAN

  return (
    // Terapkan kelas dinamis dan transisi
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${navbarClasses}`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Terapkan kelas dinamis ke Logo */}
        <div
          className={`text-2xl font-bold transition-colors duration-300 ${logoClasses}`}
        >
          Pix2Land
        </div>
        <div className="space-x-6 flex items-center">
          {/* Terapkan kelas dinamis ke Link */}
          <a
            href="#produk"
            className={`transition-colors duration-300 ${linkClasses}`}
            onClick={onSmoothScroll}
          >
            Produk
          </a>
          <a
            href="#tentang"
            className={`transition-colors duration-300 ${linkClasses}`}
            onClick={onSmoothScroll}
          >
            Tentang
          </a>
          {/* Terapkan kelas dinamis ke Tombol Admin */}
          <button
            onClick={onAdminLoginClick}
            className={`transition-colors duration-300 ${linkClasses}`}
          >
            Admin
          </button>
          {/* MODIFIKASI DI SINI: Terapkan 'linkClasses' ke tombol Login */}
          <button
            onClick={onCustomerLoginClick}
            className={`transition-colors duration-300 ${linkClasses}`}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
