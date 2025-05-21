
import React from 'react';
import { cn } from "@/lib/utils";
import {
  Home,
  Users,
  Settings,
  LineChart,
  User,
  Bell,
  Calendar,
  Mail,
  HelpCircle,
  LogOut
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("w-64 bg-white border-r border-gray-100 h-screen flex flex-col", className)}>
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 16V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="text-xl font-semibold text-gray-900">FleetGuard</h1>
        </div>
      </div>

      <div className="px-3 py-2">
        <div className="text-xs font-medium text-gray-400 px-4 mb-2">MAIN MENU</div>
        <nav className="space-y-1">
          <a href="#" className="sidebar-link active">
            <Home size={18} />
            <span>Dashboard</span>
          </a>
          <a href="#" className="sidebar-link">
            <Users size={18} />
            <span>Drivers</span>
          </a>
          <a href="#" className="sidebar-link">
            <LineChart size={18} />
            <span>Analytics</span>
          </a>
          <a href="#" className="sidebar-link">
            <Settings size={18} />
            <span>Settings</span>
          </a>
        </nav>
      </div>

      <div className="px-3 py-2 mt-6">
        <div className="text-xs font-medium text-gray-400 px-4 mb-2">SUPPORT</div>
        <nav className="space-y-1">
          <a href="#" className="sidebar-link">
            <HelpCircle size={18} />
            <span>Help Center</span>
          </a>
          <a href="#" className="sidebar-link">
            <Mail size={18} />
            <span>Contact Support</span>
          </a>
        </nav>
      </div>

      <div className="mt-auto p-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
            <p className="text-xs text-gray-500 truncate">Fleet Manager</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
