import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex bg-gray-100">
      {/* Sidebar → visible on md+ */}
      <div className="hidden md:block">
        <Sidebar open={true} setOpen={setSidebarOpen} />
      </div>

      {/* Sidebar → for small/medium screens */}
      <div className={`md:hidden fixed inset-y-0 left-0 z-50 transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <Sidebar open={true} setOpen={setSidebarOpen} />
      </div>

      {/* Right side */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* Page Content */}
        <main className="flex-1 p-4 bg-gray-300 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
