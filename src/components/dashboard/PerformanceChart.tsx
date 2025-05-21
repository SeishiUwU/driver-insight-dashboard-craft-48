
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { ArrowUp } from 'lucide-react';

// We'll calculate the average safety score from the existing data
const data = [
  { name: 'Mon', safetyScore: 82 },
  { name: 'Tue', safetyScore: 83 },
  { name: 'Wed', safetyScore: 86 },
  { name: 'Thu', safetyScore: 85 },
  { name: 'Fri', safetyScore: 87 },
  { name: 'Sat', safetyScore: 84 },
  { name: 'Sun', safetyScore: 89 },
];

export function PerformanceChart() {
  // Calculate average safety score
  const averageSafetyScore = Math.round(
    data.reduce((sum, day) => sum + day.safetyScore, 0) / data.length
  );
  
  // Calculate the trend (comparing to previous week)
  const previousWeekScore = 82; // This would normally come from historical data
  const scoreDifference = averageSafetyScore - previousWeekScore;
  const scoreImprovement = scoreDifference >= 0;

  return (
    <div className="dashboard-card">
      <h3 className="text-lg font-semibold mb-1">Safety Score</h3>
      <p className="text-sm text-gray-500 mb-4">Weekly driver safety performance</p>
      
      <div className="flex flex-col items-center justify-center py-6">
        <div className="text-7xl font-bold text-blue-600">{averageSafetyScore}</div>
        <p className="text-sm text-gray-500 mt-2">Average safety score this week</p>
        
        <div className="flex items-center mt-4">
          <Badge variant={scoreImprovement ? "default" : "destructive"} className="flex items-center gap-1">
            <ArrowUp className={`h-3 w-3 ${scoreImprovement ? "" : "rotate-180"}`} />
            <span>{Math.abs(scoreDifference)} points {scoreImprovement ? "improvement" : "decrease"}</span>
          </Badge>
        </div>
        
        <div className="grid grid-cols-7 gap-2 mt-8 w-full max-w-md">
          {data.map((day) => (
            <div key={day.name} className="flex flex-col items-center">
              <div className="text-xs font-medium text-gray-500">{day.name}</div>
              <div className="font-semibold">{day.safetyScore}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
