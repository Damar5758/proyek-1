import React from "react";
import { Link } from "react-router-dom";

const LoginModal = ({
  isOpen,
  onClose,
  title,
  loginPath,
  buttonText,
  buttonStyle,
}) => {
  if (!isOpen) return null;
  const loginType = title.toLowerCase().split(" ")[1] || "modal";

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-900 text-3xl font-light"
          >
            &times;
          </button>
        </div>
        <form className="space-y-5">
          <div>
            <label
              htmlFor={`email-${loginType}`}
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id={`email-${loginType}`}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="anda@email.com"
            />
          </div>
          <div>
            <label
              htmlFor={`password-${loginType}`}
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id={`password-${loginType}`}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="••••••••"
            />
          </div>
          <Link
            to={loginPath}
            className={`w-full flex justify-center px-4 py-3 text-lg font-semibold text-white ${buttonStyle} rounded-lg shadow-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-300 ease-in-out`}
          >
            {buttonText}
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
