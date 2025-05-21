
import React from 'react';
import { Bell, AlertTriangle, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

// Sample alerts data
const alerts = [
  {
    id: 1,
    title: "Speed Alert",
    description: "Vehicle TR-7934 exceeded speed limit on I-95",
    time: "12 mins ago",
    type: "warning"
  },
  {
    id: 2,
    title: "Maintenance Due",
    description: "Vehicle MB-1290 requires scheduled maintenance",
    time: "1 hour ago",
    type: "info"
  },
  {
    id: 3,
    title: "Harsh Braking",
    description: "Driver Alex Johnson (TR-7934) reported harsh braking",
    time: "2 hours ago",
    type: "warning"
  },
];

export function AlertsCard() {
  return (
    <div className="dashboard-card">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold">Recent Alerts</h3>
          <p className="text-sm text-gray-500">Latest notifications from your fleet</p>
        </div>
        <div className="bg-blue-50 p-1.5 rounded-full">
          <Bell size={18} className="text-blue-500" />
        </div>
      </div>
      
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div key={alert.id} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
            <div className={`mt-1 p-1.5 rounded-full ${
              alert.type === 'warning' 
                ? 'bg-yellow-100' 
                : alert.type === 'info'
                  ? 'bg-blue-100' 
                  : 'bg-red-100'
            }`}>
              <AlertTriangle size={14} className={`
                ${alert.type === 'warning' 
                  ? 'text-yellow-500' 
                  : alert.type === 'info'
                    ? 'text-blue-500' 
                    : 'text-red-500'
                }
              `} />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium">{alert.title}</h4>
              <p className="text-xs text-gray-500 mt-1">{alert.description}</p>
              <div className="flex items-center gap-2 mt-2">
                <Clock size={12} className="text-gray-400" />
                <span className="text-xs text-gray-400">{alert.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Button variant="outline" className="w-full mt-4 text-blue-600 border-blue-100 hover:bg-blue-50 hover:text-blue-700">
        View All Alerts
        <ArrowRight size={16} className="ml-2" />
      </Button>
    </div>
  );
}
