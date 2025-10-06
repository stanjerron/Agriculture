import { LayoutDashboard, TreeDeciduous, Rss, FileText, Settings, LogOut } from "lucide-react";
import logo from "../image/Logo.png";

export default function Sidebar({ open, setOpen }) {
  const menus = [
    { name: "Dashboard", icon: <LayoutDashboard size={22} /> },
    { name: "Fields", icon: <TreeDeciduous size={22} /> },
    { name: "Sensors", icon: <Rss size={22} /> },
    { name: "Logs", icon: <FileText size={22} /> },
    { name: "Settings", icon: <Settings size={22} /> },
  ];

  return (
    <div
      className={`h-full flex flex-col justify-between transition-all duration-300 ease-in-out
      ${open ? "w-[200px]" : "w-[60px]"} bg-[rgb(7,30,7)] z-50`}
    >
      {/* Logo */}
      <div>
        <div className="flex items-center cursor-pointer p-2" onClick={() => setOpen(!open)}>
          <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
          {open && <h1 className="text-white ml-3 text-lg font-semibold">Farm</h1>}
        </div>

        {/* Menu List */}
        <ul className="mt-10 space-y-6">
          {menus.map((menu, i) => (
            <li
              key={i}
              className="flex items-center text-white gap-x-3 cursor-pointer 
              hover:bg-white hover:text-green-800 hover:rounded-l-full 
              p-2 rounded-md transition-all"
            >
              {menu.icon}
              {open && <span className="text-sm">{menu.name}</span>}
            </li>
          ))}
        </ul>
      </div>

      {/* Logout */}
      <div
        className="items-center flex text-white gap-x-3 cursor-pointer 
        hover:bg-white hover:text-green-800 hover:rounded-l-full 
        p-2 rounded-md transition-all mb-5"
      >
        <LogOut size={22} />
        {open && <span className="text-sm">Logout</span>}
      </div>
    </div>
  );
}
