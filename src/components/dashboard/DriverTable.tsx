
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Sample driver data
const drivers = [
  {
    id: 1,
    name: "Alex Johnson",
    vehicleId: "TR-7934",
    status: "Active",
    safetyScore: 92,
    lastActive: "2 min ago",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Sarah Miller",
    vehicleId: "TX-5274",
    status: "Active",
    safetyScore: 86,
    lastActive: "17 min ago",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Robert Wilson",
    vehicleId: "MB-1290",
    status: "Inactive",
    safetyScore: 78,
    lastActive: "1 hr ago",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
  },
  {
    id: 4,
    name: "Jennifer Lee",
    vehicleId: "KS-8391",
    status: "Active",
    safetyScore: 95,
    lastActive: "5 min ago",
    avatar: "https://randomuser.me/api/portraits/women/72.jpg",
  },
  {
    id: 5,
    name: "Michael Chen",
    vehicleId: "VL-7731",
    status: "Break",
    safetyScore: 81,
    lastActive: "32 min ago",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg",
  }
];

export function DriverTable() {
  return (
    <div className="dashboard-card overflow-hidden p-0">
      <div className="px-6 pt-6">
        <h3 className="text-lg font-semibold">Active Drivers</h3>
        <p className="text-sm text-gray-500">Driver status and performance overview</p>
      </div>
      
      <div className="mt-4 overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Driver</TableHead>
              <TableHead>Vehicle ID</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Safety Score</TableHead>
              <TableHead className="text-right">Last Active</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {drivers.map((driver) => (
              <TableRow key={driver.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={driver.avatar} alt={driver.name} />
                      <AvatarFallback>{driver.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {driver.name}
                  </div>
                </TableCell>
                <TableCell>{driver.vehicleId}</TableCell>
                <TableCell>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    driver.status === "Active" 
                      ? "bg-green-100 text-green-800" 
                      : driver.status === "Inactive"
                        ? "bg-gray-100 text-gray-800"
                        : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {driver.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="progress-bar">
                      <div 
                        className={`progress-value ${
                          driver.safetyScore >= 90 
                            ? "bg-green-500" 
                            : driver.safetyScore >= 80
                              ? "bg-blue-500"
                              : driver.safetyScore >= 70
                                ? "bg-yellow-500"
                                : "bg-red-500"
                        }`} 
                        style={{ width: `${driver.safetyScore}%` }}
                      />
                    </div>
                    <span className="text-sm">{driver.safetyScore}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right text-gray-500">{driver.lastActive}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
