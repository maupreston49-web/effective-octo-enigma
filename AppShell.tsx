"use client";

import { useState, ReactNode } from "react";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-950 font-sans">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex-1 flex flex-col h-full relative overflow-hidden">
        <div className="md:hidden p-4 bg-slate-900 border-b border-slate-800 flex items-center">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-white p-2"
          >
            <Menu size={24} />
          </button>
          <span className="ml-2 font-bold text-white">Wildcord</span>
        </div>

        <main className="flex-1 overflow-hidden relative">
          {children}
        </main>
      </div>
    </div>
  );
}
