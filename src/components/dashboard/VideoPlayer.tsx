
import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoPlayerProps {
  videoSrc: string;
  className?: string;
}

export function VideoPlayer({ videoSrc, className }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className={cn("dashboard-card relative overflow-hidden", className)}>
      <div className="aspect-video w-full bg-black">
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-full h-full object-contain"
          onEnded={() => setIsPlaying(false)}
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        {!isPlaying && (
          <button
            onClick={togglePlay}
            className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white opacity-80 hover:opacity-100 transition-opacity"
          >
            <Play size={32} className="ml-1" />
          </button>
        )}
      </div>

      <div className="bg-gray-900 bg-opacity-50 absolute bottom-0 left-0 right-0 p-3 flex items-center justify-between">
        <button onClick={togglePlay} className="text-white mr-4">
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        
        <button onClick={toggleMute} className="text-white">
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg">Driver Camera Feed</h3>
        <p className="text-gray-500 text-sm">Live monitoring of driver activities</p>
      </div>
    </div>
  );
}
