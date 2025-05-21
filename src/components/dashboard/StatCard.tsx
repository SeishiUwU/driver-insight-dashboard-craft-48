
import React from 'react';
import { cn } from "@/lib/utils";
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  change?: {
    value: string;
    positive: boolean;
  };
  className?: string;
}

export function StatCard({ 
  title, 
  value, 
  icon: Icon, 
  iconColor, 
  iconBgColor, 
  change,
  className 
}: StatCardProps) {
  return (
    <div className={cn("dashboard-card", className)}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-semibold mt-1">{value}</h3>
          
          {change && (
            <div className="flex items-center mt-2">
              <span className={cn(
                "text-xs font-medium",
                change.positive ? "text-green-500" : "text-red-500"
              )}>
                {change.positive ? "+" : ""}{change.value}
              </span>
              <span className="text-xs text-gray-400 ml-1">vs last month</span>
            </div>
          )}
        </div>
        
        <div 
          className={cn(
            "w-10 h-10 rounded-lg flex items-center justify-center", 
            iconBgColor
          )}
        >
          <Icon size={20} className={iconColor} />
        </div>
      </div>
    </div>
  );
}
