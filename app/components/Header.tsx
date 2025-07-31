import { useState } from "react";
import { NavLink } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiHome, FiBriefcase, FiTool, FiKey, FiUsers, FiShare2 } from 'react-icons/fi';
import logo from '../welcome/logo-landify.png';
import '../src/index.css';

const navItems = [
  { label: 'Home', icon: <FiHome />, to: '/' },
  { label: 'Portfolio', icon: <FiBriefcase />, to: '/portfolio' },
  { label: 'Construction', icon: <FiTool />, to: '/construction' },
  { label: 'Rental', icon: <FiKey />, to: '/rental' },
  { label: 'P2P Market', icon: <FiShare2 />, to: '/market' },
  { label: 'Partners', icon: <FiUsers />, to: '/partners' },
];
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Kiri - Logo dan Nama Aplikasi */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <span className="text-lg font-semibold text-[#2E4B60]">LandiFy</span>
        </div>

        {/* Tombol hamburger di mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#2E4B60] text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu di desktop */}
        <div className="hidden md:flex space-x-3">
          <NavLink
            to="/login"
            className="bg-[#2E4B60] text-white px-4 py-2 rounded-md text-sm hover:opacity-90 transition"
          >
            Login / Signup
          </NavLink>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-3 space-y-2">
          {/* Mobile menu dropdown */}
{isMobileMenuOpen && (
  <div className="md:hidden px-4 pb-3 space-y-2">
            {/* Render navItems untuk mobile */}
            {navItems.map(({ label, icon, to }) => (
            <NavLink
                key={to}
                to={to}
                className="flex items-center gap-2 w-full text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-[#2E4B60] hover:text-white transition"
                onClick={() => setIsMobileMenuOpen(false)}
            >
                {icon}
                {label}
            </NavLink>
            ))}

            {/* Login & Signup buttons */}
            <NavLink
            to="/login"
            className="block w-full bg-[#2E4B60] text-white text-center px-4 py-2 rounded-md text-sm hover:opacity-90 transition"
            onClick={() => setIsMobileMenuOpen(false)}
            >
            Login
            </NavLink>
            <NavLink
            to="/signup"
            className="block w-full bg-[#2E4B60] text-white text-center px-4 py-2 rounded-md text-sm hover:opacity-90 transition"
            onClick={() => setIsMobileMenuOpen(false)}
            >
            Sign Up
            </NavLink>
        </div>
        )}
        </div>
      )}
    </header>
  );
}
