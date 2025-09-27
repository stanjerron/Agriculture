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
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false); // for mobile

  const menus = [
    { name: "Dashboard", icon: <LayoutDashboard size={22} /> },
    { name: "Fields", icon: <TreeDeciduous size={22} /> },
    { name: "Sensors", icon: <Rss size={22} /> },
    { name: "Logs", icon: <FileText size={22} /> },
    { name: "Settings", icon: <Settings size={22} /> },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden p-4 bg-[rgb(7,30,7)] text-white flex justify-between items-center">
        <h1 className="font-bold">Farm</h1>
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Sidebar for Desktop & Mobile */}
      <div
        className={`${
          open ? "w-56" : "w-20"
        } bg-gradient-to-b bg-[rgb(7,30,7)] h-screen p-4 pt-6 duration-300 flex flex-col justify-between 
        fixed md:static z-50 
        ${mobileOpen ? "left-0" : "-left-full"} md:left-0`}
      >
        {/* Logo and Name */}
        <div>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <img
              src={logo}
              alt="logo"
              className="w-10 h-10 rounded-full"
            />
            {open && (
              <h1 className="text-white ml-3 text-lg font-semibold">
               Farm
              </h1>
            )}
          </div>

          {/* Menu items */}
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

        {/* Logout Button */}
        <div className="flex items-center text-white gap-x-3 cursor-pointer hover:bg-green-600 p-2 rounded-md">
          <LogOut size={22} />
          {open && <span className="text-sm">Logout</span>}
        </div>
      </div>
    </>
  );
}
