import { NavLink } from "react-router";
import logo from '../welcome/logo-landify.png';// Ganti dengan path logo kamu

export default function Footer() {
  return (
    <footer className="bg-[#2E4B60] text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Kiri: Logo & Informasi Perusahaan */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <h2 className="text-xl font-semibold">LandiFy</h2>
          </div>
          <p className="text-sm mb-2">
            PT Properti Sejahtera Abadi<br />
            Jl. Abimanyu, Seminyak - Bali<br />
            Telp: (0362) 1234-5678<br />
            Email: info@landify.com
          </p>
        </div>

        {/* Kanan: Link Navigasi */}
        <div className="md:pl-12">
          <h3 className="text-lg font-semibold mb-4">Informasi</h3>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/contact" className="hover:underline">Contact Us</NavLink></li>
            <li><NavLink to="/privacy-policy" className="hover:underline">Privacy Policy</NavLink></li>
            <li><NavLink to="/terms" className="hover:underline">Terms & Conditions</NavLink></li>
            <li><NavLink to="/about" className="hover:underline">About Us</NavLink></li>
            <li><NavLink to="/faq" className="hover:underline">FAQ</NavLink></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm mt-10 border-t border-white/20 pt-4">
        &copy; {new Date().getFullYear()} LandiFy. All rights reserved.
      </div>
    </footer>
  );
}
