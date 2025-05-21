
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Active', value: 18, color: '#20b974' },
  { name: 'Inactive', value: 5, color: '#9ba7ba' },
  { name: 'Maintenance', value: 3, color: '#ffb208' },
  { name: 'Issues', value: 2, color: '#f04f6e' },
];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill="white" 
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central"
      fontSize={12}
      fontWeight="medium"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export function VehicleStatusCard() {
  return (
    <div className="dashboard-card">
      <h3 className="text-lg font-semibold">Vehicle Status</h3>
      <p className="text-sm text-gray-500 mb-4">Current status of your fleet vehicles</p>
      
      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => [`${value} vehicles`, '']} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-4">
        {data.map((status) => (
          <div key={status.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: status.color }} />
              <span className="text-sm text-gray-700">{status.name}</span>
            </div>
            <span className="text-sm font-medium">{status.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
