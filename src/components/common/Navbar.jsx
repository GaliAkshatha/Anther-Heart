import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";  // ✅ Correct import

export default function Navbar({ onLogin }) {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* LOGO + NAME */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={logo} className="w-8 h-8" alt="logo" />
          <span className="text-xl font-semibold">Anther Heart</span>
        </div>

        {/* NAV LINKS */}
        <div className="flex items-center gap-10 text-gray-700 font-medium">
          <Link to="/about-ml" className="hover:text-black">About ML</Link>
          <Link to="/info" className="hover:text-black">Info</Link>
          <Link to="/resources" className="hover:text-black">Resources</Link>
          <Link to="/help" className="hover:text-black">Help</Link>
        </div>

        {/* ALWAYS SHOW LOGIN BUTTON */}
        <div>
          <button
            onClick={onLogin}
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900"
          >
            Login
          </button>
        </div>

      </div>
    </nav>
  );
}
