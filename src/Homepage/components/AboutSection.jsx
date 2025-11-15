import React from "react";
// PATH BERUBAH: dari ../assets/ ke ../../assets/
import aboutBg from "../../assets/Homepage.svg";

const AboutSection = () => {
  return (
    <section
      id="tentang"
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-white">
            Tentang Aplikasi Kami
          </h2>
          <p className="text-gray-200 mb-4">
            Ini adalah deskripsi tentang aplikasi Anda. Jelaskan apa yang
            membuat aplikasi Anda spesial dan mengapa pengguna harus
            menggunakannya.
          </p>
          <p className="text-gray-200">
            Ganti teks ini dengan informasi relevan mengenai layanan atau produk
            yang Anda tawarkan.
          </p>
        </div>
        <div className="bg-white bg-opacity-20 rounded-lg shadow-lg h-80 flex items-center justify-center text-white text-opacity-70">
          [Anda bisa letakkan gambar di sini]
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
