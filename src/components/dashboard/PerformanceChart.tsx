
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    safetyScore: 82,
  },
  {
    name: 'Tue',
    safetyScore: 83,
  },
  {
    name: 'Wed',
    safetyScore: 86,
  },
  {
    name: 'Thu',
    safetyScore: 85,
  },
  {
    name: 'Fri',
    safetyScore: 87,
  },
  {
    name: 'Sat',
    safetyScore: 84,
  },
  {
    name: 'Sun',
    safetyScore: 89,
  },
];

export function PerformanceChart() {
  return (
    <div className="dashboard-card">
      <h3 className="text-lg font-semibold mb-1">Safety Score</h3>
      <p className="text-sm text-gray-500 mb-4">Weekly driver safety performance</p>
      
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
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
