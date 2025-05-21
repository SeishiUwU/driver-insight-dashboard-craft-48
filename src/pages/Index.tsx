
import React from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { StatCard } from '@/components/dashboard/StatCard';
import { DriverTable } from '@/components/dashboard/DriverTable';
import { VehicleStatusCard } from '@/components/dashboard/VehicleStatusCard';
import { PerformanceChart } from '@/components/dashboard/PerformanceChart';
import { AlertsCard } from '@/components/dashboard/AlertsCard';
import { VideoPlayer } from '@/components/dashboard/VideoPlayer';
import { Users, Truck, Clock, AlertTriangle } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <div className="flex-1 overflow-y-auto p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-500">Welcome back! Here's what's happening with your fleet today.</p>
          </div>
          
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard
              title="Total Drivers"
              value="28"
              icon={Users}
              iconColor="text-blue-500"
              iconBgColor="bg-blue-100"
              change={{ value: "8%", positive: true }}
            />
            
            <StatCard
              title="Active Vehicles"
              value="18"
              icon={Truck}
              iconColor="text-green-500"
              iconBgColor="bg-green-100"
              change={{ value: "5%", positive: true }}
            />
            
            <StatCard
              title="Total Hours"
              value="1,543"
              icon={Clock}
              iconColor="text-yellow-500"
              iconBgColor="bg-yellow-100"
              change={{ value: "12%", positive: true }}
            />
            
            <StatCard
              title="Alerts"
              value="5"
              icon={AlertTriangle}
              iconColor="text-red-500"
              iconBgColor="bg-red-100"
              change={{ value: "2", positive: false }}
            />
          </div>
          
          {/* Video Player - Center */}
          <div className="mb-6 max-w-3xl mx-auto">
            <VideoPlayer videoSrc="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Charts */}
            <div className="lg:col-span-2 space-y-6">
              <PerformanceChart />
              <DriverTable />
            </div>
            
            {/* Right Column - Vehicle Status & Alerts */}
            <div className="space-y-6">
              <VehicleStatusCard />
              <AlertsCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
