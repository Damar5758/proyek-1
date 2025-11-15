import React from "react";

// Placeholder SVG untuk ilustrasi. Anda bisa menggantinya nanti.
// Untuk Tiles
const TilesIcon = () => (
  <svg
    className="w-20 h-20 text-green-500 mb-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2m0 0V5h12v2h-12V5h12M9 17h12V7h-12V17z"
    ></path>
  </svg>
);

// Untuk Building+
const BuildingPlusIcon = () => (
  <svg
    className="w-20 h-20 text-blue-500 mb-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    ></path>
  </svg>
);

const FeaturesSection = () => {
  return (
    <section id="produk" className="py-20 bg-gray-50">
      {" "}
      {/* Mengubah background menjadi abu-abu muda */}
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-14 text-gray-900">PRODUK</h2>
        {/* Mengubah grid menjadi 2 kolom di layar medium ke atas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* PRODUK 1: Tiles */}
          <div
            className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg 
                       transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl group"
          >
            <TilesIcon /> {/* Ilustrasi untuk Tiles */}
            <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
              Tiles
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-md">
              Solusi cerdas untuk manajemen inventaris dan pelacakan aset
              digital Anda. Optimalkan alur kerja dan tingkatkan efisiensi
              operasional.
            </p>
          </div>

          {/* PRODUK 2: Building+ */}
          <div
            className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg 
                       transition-all duration-300 ease-in-out hover:-translate-y-2 hover:hover:shadow-xl group"
          >
            <BuildingPlusIcon /> {/* Ilustrasi untuk Building+ */}
            <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              Building+
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-md">
              Platform terintegrasi untuk pengelolaan properti, fasilitas, dan
              proyek konstruksi. Mulai dari perencanaan hingga pemeliharaan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
