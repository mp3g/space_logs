import React from 'react';
import { Star } from 'lucide-react';

function FeelPage() {
  const emotions = [
    {
      id: 1,
      title: "Cosmic Wonder",
      date: "2970.141",
      intensity: 5,
      content: "The view of the binary sunset from the observation deck today filled me with indescribable awe."
    },
    {
      id: 2,
      title: "Deep Space Solitude",
      date: "2970.144",
      intensity: 4,
      content: "Three months into the mission. The vast emptiness of space brings both peace and loneliness."
    }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold tracking-wider mb-8">EMOTIONAL LOGS</h1>
      <div className="space-y-6">
        {emotions.map((emotion) => (
          <div key={emotion.id} className="border border-cyan-900/50 rounded-lg p-6 backdrop-blur-sm">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-bold">{emotion.title}</h2>
                <span className="text-sm text-cyan-600">{emotion.date}</span>
              </div>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < emotion.intensity ? 'fill-cyan-600 text-cyan-600' : 'text-cyan-900'
                    }`}
                  />
                ))}
              </div>
              <p className="text-cyan-300/80 leading-relaxed">{emotion.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeelPage;