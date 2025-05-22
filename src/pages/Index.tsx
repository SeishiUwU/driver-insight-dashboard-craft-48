
import React from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { PerformanceChart } from '@/components/dashboard/PerformanceChart';
import { VehicleStatusCard } from '@/components/dashboard/VehicleStatusCard';
import { AlertsCard } from '@/components/dashboard/AlertsCard';
import { VideoPlayer } from '@/components/dashboard/VideoPlayer';

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
          
          {/* Video Player - Center */}
          <div className="mb-6 max-w-3xl mx-auto">
            <VideoPlayer videoSrc="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Charts */}
            <div className="lg:col-span-2 space-y-6">
              <PerformanceChart />
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
