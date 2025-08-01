import { NavLink } from "react-router";
import { FiHome, FiBriefcase, FiTool, FiKey, FiUsers, FiShare2 } from 'react-icons/fi';

const navItems = [
  { label: 'Home', icon: <FiHome />, to: '/dashboard' },
  { label: 'Portfolio', icon: <FiBriefcase />, to: '/portfolio' },
  { label: 'Construction', icon: <FiTool />, to: '/construction' },
  { label: 'Rental', icon: <FiKey />, to: '/rental' },
  { label: 'P2P Market', icon: <FiShare2 />, to: '/market' },
  { label: 'Partners', icon: <FiUsers />, to: '/partners' },
];

export default function Nav() {
  return (
    <div className="w-full items-center justify-center bg-white">
        <nav className="flex w-full justify-center gap-4 px-4 lg:px-10 py-3 text-sm text-gray-700">
            <ul className="hidden md:flex space-x-4 px-6 py-2 text-sm text-gray-700">
                {navItems.map(({ label, icon, to }) => (
                    <li key={to}>
                    <NavLink
                            to={to}
                            className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                            ${isActive
                                ? 'bg-[#2E4B60] text-white'
                                : 'text-gray-600 hover:text-white hover:bg-[#2E4B60]'}`
                            }
                            end
                        >
                        {icon}
                        {label}
                    </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
  );
}
