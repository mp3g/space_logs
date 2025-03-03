import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ImageIcon, Headphones, Brain, Heart, Clock } from 'lucide-react';
import ImagePage from './pages/ImagePage';
import SoundPage from './pages/SoundPage';
import ThinkPage from './pages/ThinkPage';
import FeelPage from './pages/FeelPage';
import TimePage from './pages/TimePage';

function App() {
  // Generate random stars
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
  }));

  // Generate nebulas
  const nebulas = [
    { color: '#4C1D95', left: '10%', top: '20%', size: '400px' },
    { color: '#1E40AF', left: '70%', top: '60%', size: '500px' },
    { color: '#047857', left: '40%', top: '80%', size: '450px' },
  ];

  return (
    <Router>
      <div className="min-h-screen bg-black text-cyan-400 font-mono relative overflow-hidden">
        {/* Space background with stars and nebulas */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/5 via-black to-black"></div>
        
        {/* Nebulas */}
        {nebulas.map((nebula, i) => (
          <div
            key={i}
            className="nebula"
            style={{
              backgroundColor: nebula.color,
              left: nebula.left,
              top: nebula.top,
              width: nebula.size,
              height: nebula.size,
              animationDelay: `${i * -7}s`,
            }}
          />
        ))}

        {/* Stars */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: star.left,
              top: star.top,
            }}
          />
        ))}
        
        {/* Main content */}
        <div className="relative z-10">
          {/* Navigation */}
          <nav className="border-b border-cyan-900/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <div className="flex-shrink-0">
                  <Link to="/" className="text-xl font-bold tracking-wider">STELLAR.LOG</Link>
                </div>
                <div className="flex space-x-8">
                  <NavLink to="/time" icon={<Clock className="w-4 h-4" />} text="TIME" />
                  <NavLink to="/image" icon={<ImageIcon className="w-4 h-4" />} text="IMAGE" />
                  <NavLink to="/sound" icon={<Headphones className="w-4 h-4" />} text="SOUND" />
                  <NavLink to="/think" icon={<Brain className="w-4 h-4" />} text="THINK" />
                  <NavLink to="/feel" icon={<Heart className="w-4 h-4" />} text="FEEL" />
                </div>
              </div>
            </div>
          </nav>

          {/* Routes */}
          <main className="max-w-7xl mx-auto px-4 py-8">
            <Routes>
              <Route path="/time" element={<TimePage />} />
              <Route path="/image" element={<ImagePage />} />
              <Route path="/sound" element={<SoundPage />} />
              <Route path="/think" element={<ThinkPage />} />
              <Route path="/feel" element={<FeelPage />} />
              <Route path="/" element={<TimePage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

function NavLink({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) {
  return (
    <Link
      to={to}
      className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm hover:bg-cyan-900/20 transition-colors duration-200"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}

export default App;