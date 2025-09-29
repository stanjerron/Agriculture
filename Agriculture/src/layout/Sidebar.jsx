import { useState } from "react";
import {
  LayoutDashboard,
  TreeDeciduous,
  Rss,
  FileText,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import logo from "../image/Logo.png";

export default function Sidebar() {
  const [open, setOpen] = useState(false); // Desktop expand/collapse
  const [mobileOpen, setMobileOpen] = useState(false); // Mobile sidebar toggle

  const menus = [
    { name: "Dashboard", icon: <LayoutDashboard size={22} /> },
    { name: "Fields", icon: <TreeDeciduous size={22} /> },
    { name: "Sensors", icon: <Rss size={22} /> },
    { name: "Logs", icon: <FileText size={22} /> },
    { name: "Settings", icon: <Settings size={22} /> },
  ];

  return (
    <>
      {/* Mobile Top Navbar with Toggle */}
      <div className="md:hidden p-4 bg-[rgb(7,30,7)] text-white fixed top-0 left-0 z-10 h-16 w-15">
        <button 
        type="button"
        onClick={() => setMobileOpen(!mobileOpen)}
         className="text-white pb-2 rounded focus:outline-none"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      
      {/* Sidebar */}
      <div
        className={`fixed top-16 left-0 h-full flex flex-col justify-between transition-all duration-300 ease-in-out
          
          ${open ? "w-50" : "w-15"} bg-[rgb(7,30,7)] 
        fixed md:static z-10
        ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"} z-40`}
      >
        {/* Logo + Title */}
        <div>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
            {open && (
              <h1 className="text-white ml-3 text-lg font-semibold">Farm</h1>
            )}
          </div>

          {/* Menu List */}
          <ul className="mt-10 space-y-6">
            {menus.map((menu, i) => (
              <li
                key={i}
                className="flex items-center text-white gap-x-3 cursor-pointer hover:bg-green-600 p-2 rounded-md"
              >
                {menu.icon}
                {open && <span className="text-sm">{menu.name}</span>}
              </li>
            ))}
          </ul>
        </div>

        {/* Logout */}
        <div className="flex items-center text-white gap-x-3 cursor-pointer hover:bg-green-600 p-2 rounded-md">
          <LogOut size={22} />
          {open && <span className="text-sm">Logout</span>}
        </div>
      </div>
    </>
  );
}