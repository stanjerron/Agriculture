import { useState } from "react";
import {
  LayoutDashboard,
  TreeDeciduous,
  Rss,
  FileText,
  Settings,
  LogOut,
  Menu,
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
      {/* Navbar with only Menu button */}
<div className="h-16 flex items-center justify-between px-4 md:px-6 relative">
  {/* Mobile Menu Button */}
  <button
    type="button"
    onClick={() => setMobileOpen(!mobileOpen)}
    className="md:hidden text-green-900 focus:outline-none"
  >
    <Menu size={26} />
  </button>
</div>


      {/* Sidebar */}
      <div
  className={`fixed top-16 left-0 h-full flex flex-col justify-between transition-all duration-300 ease-in-out
    ${open ? "w-50" : "w-15"} bg-[rgb(7,30,7)]
    md:static
    ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"} 
    z-40`}
>

        {/* Logo + Title */}
        <div>
          <div
            className="flex items-center cursor-pointer p-2"
            onClick={() => setOpen(!open)}
          >
            <img src={logo} alt="logo" className="w-10 h-10 top-1 rounded-full" />
            {open && (
              <h1 className="text-white ml-3 text-lg font-semibold">Farm</h1>
            )}
          </div>

          {/* Menu List */}
          <ul className="mt-10 space-y-6">
            {menus.map((menu, i) => (
              <li
                key={i}
                className="flex items-center text-white gap-x-3 cursor-pointer 
                  hover:bg-white hover:text-green-800 hover:rounded-l-full 
                  p-2 rounded-md transition-all duration-600"
              >
                {menu.icon}
                {open && <span className="text-sm">{menu.name}</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Logout Always Visible */}
      <div
        className="fixed bottom-5 left-5 flex items-center text-white gap-x-3 
        cursor-pointer hover:bg-white hover:text-green-800 hover:rounded-l-full 
        p-2 rounded-full transition-all duration-300 z-50"
      >
        <LogOut size={22} />
        {open && <span className="text-sm">Logout</span>}
      </div>
    </>
  );
}
