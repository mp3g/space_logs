import React from 'react';
import { Volume2, Play, Pause } from 'lucide-react';

function SoundPage() {
  const audioLogs = [
    {
      id: 1,
      title: "Deep Space Frequencies",
      date: "2970.144",
      duration: "02:47",
      description: "Unknown signal patterns from sector 9."
    },
    {
      id: 2,
      title: "Quantum Resonance",
      date: "2970.146",
      duration: "01:15",
      description: "Harmonic frequencies detected during warp."
    }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold tracking-wider mb-8">AUDIO LOGS</h1>
      <div className="space-y-4">
        {audioLogs.map((log) => (
          <div key={log.id} className="border border-cyan-900/50 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center space-x-4">
              <button className="p-3 rounded-full border border-cyan-600 hover:bg-cyan-900/20">
                <Play className="w-5 h-5" />
              </button>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h2 className="text-lg font-bold">{log.title}</h2>
                  <span className="text-sm text-cyan-600">{log.date}</span>
                </div>
                <p className="text-cyan-300/80 mt-1">{log.description}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <Volume2 className="w-4 h-4 text-cyan-600" />
                  <div className="flex-1 h-1 bg-cyan-900/50 rounded-full">
                    <div className="w-1/3 h-full bg-cyan-600 rounded-full"></div>
                  </div>
                  <span className="text-sm text-cyan-600">{log.duration}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SoundPage;