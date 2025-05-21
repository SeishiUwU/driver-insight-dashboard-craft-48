
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    safetyScore: 82,
    fuelEfficiency: 76,
    driverScore: 85,
  },
  {
    name: 'Tue',
    safetyScore: 83,
    fuelEfficiency: 78,
    driverScore: 87,
  },
  {
    name: 'Wed',
    safetyScore: 86,
    fuelEfficiency: 80,
    driverScore: 84,
  },
  {
    name: 'Thu',
    safetyScore: 85,
    fuelEfficiency: 81,
    driverScore: 88,
  },
  {
    name: 'Fri',
    safetyScore: 87,
    fuelEfficiency: 82,
    driverScore: 90,
  },
  {
    name: 'Sat',
    safetyScore: 84,
    fuelEfficiency: 79,
    driverScore: 86,
  },
  {
    name: 'Sun',
    safetyScore: 89,
    fuelEfficiency: 84,
    driverScore: 91,
  },
];

export function PerformanceChart() {
  return (
    <div className="dashboard-card">
      <h3 className="text-lg font-semibold mb-1">Fleet Performance</h3>
      <p className="text-sm text-gray-500 mb-4">Weekly performance metrics</p>
      
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />
            <XAxis dataKey="name" stroke="#9ba7ba" fontSize={12} />
            <YAxis stroke="#9ba7ba" fontSize={12} />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="safetyScore" 
              stroke="#2e80f7" 
              strokeWidth={2}
              activeDot={{ r: 6 }} 
              name="Safety Score"
            />
            <Line 
              type="monotone" 
              dataKey="fuelEfficiency" 
              stroke="#20b974" 
              strokeWidth={2} 
              name="Fuel Efficiency"
            />
            <Line 
              type="monotone" 
              dataKey="driverScore" 
              stroke="#ffb208" 
              strokeWidth={2} 
              name="Driver Score"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
