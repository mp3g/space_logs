import React from 'react';
import { Calendar, User } from 'lucide-react';

function ThinkPage() {
  const thoughts = [
    {
      id: 1,
      title: "Quantum Theory Breakthrough",
      author: "Dr. Sarah Chen",
      date: "2970.142",
      content: "Today's calculations suggest a new approach to quantum entanglement that could revolutionize our understanding of space-time fabric."
    },
    {
      id: 2,
      title: "AI Integration Protocol",
      author: "Commander James Wilson",
      date: "2970.145",
      content: "The new neural network patterns show promising results in predicting gravitational anomalies. Further testing required."
    }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold tracking-wider mb-8">THOUGHT LOGS</h1>
      <div className="space-y-6">
        {thoughts.map((thought) => (
          <div key={thought.id} className="border border-cyan-900/50 rounded-lg p-6 backdrop-blur-sm">
            <div className="space-y-4">
              <h2 className="text-xl font-bold">{thought.title}</h2>
              <div className="flex items-center space-x-4 text-sm text-cyan-600">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{thought.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{thought.date}</span>
                </div>
              </div>
              <p className="text-cyan-300/80 leading-relaxed">{thought.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThinkPage;