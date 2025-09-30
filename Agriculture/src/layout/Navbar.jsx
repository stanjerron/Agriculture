import { useState } from "react";
import { Bell, ChevronDown } from "lucide-react";
import profile from "../image/profile.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-16 w-full flex items-center justify-between px-4 md:px-6 relative">
      {/* Left side: logo/portal name */}
      <div
        className="
          text-lg font-bold text-green-900 md:text-xl uppercase
          sm:pl-0 pl-3
        "
      >
        Agri Portal
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        {/* Notification Icon */}
        <div className="relative cursor-pointer">
          <Bell size={22} className="text-gray-600" />
          <span className="absolute top-0 right-0 bg-red-500 h-2 w-2 rounded-full"></span>
        </div>

        {/* Profile Section */}
        <div
          className="flex items-center cursor-pointer space-x-2"
          onClick={() => setOpen(!open)}
        >
          <img
            src={profile}
            alt="profile"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
          />
          {/* Hide name on very small screens */}
          <span className="hidden sm:block text-gray-800 font-medium truncate max-w-[100px]">
            Jerron
          </span>
          <ChevronDown size={18} className="text-gray-600" />
        </div>
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute top-16 right-4 md:right-6 w-56 md:w-64 bg-white shadow-lg rounded-lg p-4 z-50">
          <h3 className="font-semibold text-gray-800 truncate">Jerron</h3>
          <p className="text-sm text-gray-500 truncate">
            Position: Greenhouse Manager
          </p>
          <p className="text-sm text-gray-500 truncate">
            Address: 123 Farm Road
          </p>
          <p className="text-sm text-gray-500 truncate">Location: Europe</p>
        </div>
      )}
    </div>
  );
}
