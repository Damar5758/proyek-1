import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Kartu Option */}
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Selamat Datang
        </h1>

        <p className="text-center text-gray-600">
          Silakan pilih peran Anda untuk melanjutkan:
        </p>

        {/* Grup Tombol */}
        <div className="flex flex-col space-y-4">
          <Link
            to="/Admin"
            className="w-full px-4 py-3 text-lg font-semibold text-center text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out"
          >
            Masuk sebagai Admin
          </Link>

          <Link
            to="/Customer"
            className="w-full px-4 py-3 text-lg font-semibold text-center text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition duration-300 ease-in-out"
          >
            Masuk sebagai Customer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
