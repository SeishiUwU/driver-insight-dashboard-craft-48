
import React from 'react';
import { Search, Bell, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={`px-8 py-4 bg-white border-b border-gray-100 flex justify-between items-center ${className}`}>
      <div className="flex items-center gap-4 w-full max-w-md">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            className="pl-10 bg-gray-50 border-0" 
            placeholder="Search..." 
          />
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell size={20} className="text-gray-500" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
                3
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-80 overflow-y-auto">
              {[1, 2, 3].map((i) => (
                <DropdownMenuItem key={i} className="flex flex-col items-start py-3 cursor-pointer">
                  <div className="flex gap-2 w-full">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-blue-500 shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Driver Alert - Speed Violation</p>
                      <p className="text-xs text-gray-500 mt-1">Vehicle AB1234 exceeded speed limit on Highway 101</p>
                      <p className="text-xs text-gray-400 mt-2">30 minutes ago</p>
                    </div>
                  </div>
                </DropdownMenuItem>
              ))}
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center text-blue-500 font-medium">
              View all notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-2" size="sm">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="font-medium text-gray-700">John Doe</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
