import { Bell, ChevronDown, Menu } from "lucide-react";
import profile from "../image/profile.png";
import { useState } from "react";

export default function Navbar({ toggleSidebar }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-16 w-full flex items-center justify-between px-4 md:px-6 bg-gradient-to-r from-green-800 via-cyan-700 to-green-600 shadow-sm relative">
      {/* Menu Button → only show on small/medium */}
      <button
        className="md:hidden text-green-900 hover:text-green-700 transition"
        onClick={toggleSidebar}
      >
        <Menu size={26} className="text-white"/>
      </button>

      <div className="text-lg font-bold text-white md:text-xl uppercase">
        Agri Portal
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        <div className="relative cursor-pointer">
          <Bell size={22} className="text-white hover:text-green-800 transition" />
          <span className="absolute top-0 right-0 bg-red-500 h-2 w-2 rounded-full"></span>
        </div>
        <div className="flex items-center cursor-pointer space-x-2" onClick={() => setOpen(!open)}>
          <img src={profile} alt="profile" className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover" />
          <span className="hidden sm:block text-white font-medium truncate max-w-[100px]">Jerron</span>
          <ChevronDown size={18} className="text-gray-600" />
        </div>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-16 right-4 md:right-6 w-56 md:w-64 bg-white shadow-lg rounded-lg p-4 z-50">
          <h3 className="font-semibold text-gray-800 truncate">Jerron</h3>
          <p className="text-sm text-gray-500">Greenhouse Manager</p>
          <p className="text-sm text-gray-500">123 Farm Road</p>
          <p className="text-sm text-gray-500">Europe</p>
        </div>
      )}
    </div>
  );
}
