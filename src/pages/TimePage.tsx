import React, { useEffect, useState } from 'react';
import { Globe2, Calendar, ChevronRight, ChevronLeft } from 'lucide-react';

function TimePage() {
  const [earthPosition, setEarthPosition] = useState(0);
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Changed initial state to false
  
  // Constants for the ellipse
  const ELLIPSE_WIDTH = 250;
  const ELLIPSE_HEIGHT = 50;

  useEffect(() => {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const dayOfYear = Math.floor((now - startOfYear) / (24 * 60 * 60 * 1000));
    const initialPosition = (dayOfYear / 365.25) * 360;
    setEarthPosition(initialPosition);
  }, []);

  const getEarthCoordinates = (angle: number) => {
    const radians = (angle * Math.PI) / 180;
    const x = ELLIPSE_WIDTH * Math.cos(radians);
    const y = ELLIPSE_HEIGHT * Math.sin(radians);
    return { x, y };
  };

  const earthCoords = getEarthCoordinates(earthPosition);

  // Calendar conversion functions
  const getHebrewDate = () => {
    const now = new Date();
    const month = now.getMonth();
    const day = now.getDate();
    
    // Hebrew year (approximate)
    const hebrewYear = now.getFullYear() + 3760;
    
    // Hebrew months with their corresponding holidays
    const hebrewMonths = [
      { name: 'Nisan', holidays: ['Pesach'] },
      { name: 'Iyar', holidays: ['Lag BaOmer'] },
      { name: 'Sivan', holidays: ['Shavuot'] },
      { name: 'Tammuz', holidays: [] },
      { name: 'Av', holidays: ['Tisha BAv'] },
      { name: 'Elul', holidays: [] },
      { name: 'Tishrei', holidays: ['Rosh Hashanah', 'Yom Kippur', 'Sukkot'] },
      { name: 'Cheshvan', holidays: [] },
      { name: 'Kislev', holidays: ['Hanukkah'] },
      { name: 'Tevet', holidays: [] },
      { name: 'Shevat', holidays: ["Tu B'Shvat"] },
      { name: 'Adar', holidays: ['Purim'] }
    ];
    
    const currentMonth = hebrewMonths[month];
    const holiday = currentMonth.holidays.length > 0 ? ` (${currentMonth.holidays[0]})` : '';
    
    return `${day} ${currentMonth.name} ${hebrewYear}${holiday}`;
  };

  const getIslamicDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();
    
    // Islamic year (approximate)
    const islamicYear = Math.floor((year - 622) * 1.0307);
    
    // Islamic months with special days
    const islamicMonths = [
      { name: 'Muharram', special: 'Ashura' },
      { name: 'Safar', special: '' },
      { name: 'Rabi al-Awwal', special: 'Mawlid al-Nabi' },
      { name: 'Rabi al-Thani', special: '' },
      { name: 'Jumada al-Awwal', special: '' },
      { name: 'Jumada al-Thani', special: '' },
      { name: 'Rajab', special: "Isra and Mi'raj" },
      { name: 'Shaban', special: 'Laylat al-Bara\'at' },
      { name: 'Ramadan', special: 'Laylat al-Qadr' },
      { name: 'Shawwal', special: 'Eid al-Fitr' },
      { name: 'Dhu al-Qadah', special: '' },
      { name: 'Dhu al-Hijjah', special: 'Eid al-Adha' }
    ];
    
    const currentMonth = islamicMonths[month];
    const special = currentMonth.special ? ` (${currentMonth.special})` : '';
    
    return `${day} ${currentMonth.name} ${islamicYear}${special}`;
  };

  const getChineseDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    
    // Celestial stems
    const stems = ['Yang Wood', 'Yin Wood', 'Yang Fire', 'Yin Fire', 'Yang Earth', 
                  'Yin Earth', 'Yang Metal', 'Yin Metal', 'Yang Water', 'Yin Water'];
    
    // Zodiac animals (terrestrial branches)
    const zodiacAnimals = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake',
                          'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];
    
    const stemIndex = (year - 4) % 10;
    const animalIndex = (year - 4) % 12;
    
    // Chinese year number (approximate)
    const chineseYear = year - 2697;
    
    // Lunar month and day (approximate)
    const lunarMonth = Math.floor(((now.getMonth() + 1) * 29.5) / 30.44);
    const lunarDay = now.getDate();
    
    return `Year of ${stems[stemIndex]} ${zodiacAnimals[animalIndex]}, ${chineseYear} | ` +
           `Lunar Month ${lunarMonth + 1} Day ${lunarDay}`;
  };

  const getBuddhistDate = () => {
    const now = new Date();
    const buddhistYear = now.getFullYear() + 543;
    return `Year ${buddhistYear} BE (Buddhist Era)`;
  };

  const getPersianDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const persianYear = year - 621;
    
    const persianMonths = ['Farvardin', 'Ordibehesht', 'Khordad', 'Tir', 'Mordad', 'Shahrivar',
                          'Mehr', 'Aban', 'Azar', 'Dey', 'Bahman', 'Esfand'];
    
    return `${now.getDate()} ${persianMonths[now.getMonth()]} ${persianYear}`;
  };

  const getMayanDate = () => {
    const now = new Date();
    // Approximate Mayan Long Count from Gregorian date
    // This is a very simplified calculation
    const days = Math.floor((now.getTime() - new Date('2012-12-21').getTime()) / (1000 * 60 * 60 * 24));
    const baktun = 13;
    const katun = Math.floor((days % 144000) / 7200);
    const tun = Math.floor((days % 7200) / 360);
    const uinal = Math.floor((days % 360) / 20);
    const kin = days % 20;
    
    return `${baktun}.${katun}.${tun}.${uinal}.${kin}`;
  };

  return (
    <div className="space-y-8 relative min-h-[calc(100vh-4rem)]">
      <h1 className="text-2xl font-bold tracking-wider mb-8">TEMPORAL COORDINATES</h1>
      
      {/* Main content */}
      <div className="flex justify-center items-center h-[60vh]">
        <div className="relative w-[600px] h-[300px]">
          <svg
            viewBox="0 0 600 300"
            className="absolute inset-0 w-full h-full"
          >
            <ellipse
              cx="300"
              cy="150"
              rx={ELLIPSE_WIDTH}
              ry={ELLIPSE_HEIGHT}
              fill="none"
              stroke="rgba(6, 182, 212, 0.3)"
              strokeWidth="1"
              className="animate-pulse"
            />
          </svg>

          <div
            className="absolute"
            style={{
              left: `${300 + earthCoords.x}px`,
              top: `${150 + earthCoords.y}px`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="relative group">
              {/* <Globe2 className="w-8 h-8 text-cyan-400" /> */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-black/80 text-cyan-400 px-3 py-1 rounded text-sm whitespace-nowrap">
                  {new Date().toLocaleDateString()}
                </div>
              </div>
              {/* Earth representation */}
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 relative animate-[orbit_20s_linear_infinite]">
                <div className="absolute inset-0 rounded-full bg-black/20"></div>
                {/* Satellite */}
                <div className="absolute top-8 left-8 w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Date Display */}
      <div className="text-center space-y-2">
        <div className="text-xl font-mono">
          {new Date().getFullYear()}.
          {String(new Date().getMonth() + 1).padStart(2, '0')}.
          {String(new Date().getDate()).padStart(2, '0')}
        </div>
        <div className="text-cyan-600 text-sm">
          Orbital Period: 365.25 Earth Days
        </div>
      </div>

      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        className="fixed top-24 right-0 bg-cyan-900/20 p-2 rounded-l-md border-l border-t border-b border-cyan-900/50"
      >
        {isSidebarOpen ? 
          <ChevronRight className="w-5 h-5 text-cyan-400" /> : 
          <ChevronLeft className="w-5 h-5 text-cyan-400" />
        }
      </button>

      {/* Calendar Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-96 bg-black/90 border-l border-cyan-900/50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 space-y-8 mt-16">
          <h2 className="text-lg font-bold tracking-wider flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            CALENDAR SYSTEMS
          </h2>
          
          <div className="space-y-6">
            {/* Gregorian Calendar */}
            <div className="space-y-2">
              <h3 className="text-cyan-400 text-sm font-semibold">GREGORIAN</h3>
              <div className="border border-cyan-900/50 rounded-md p-3 backdrop-blur-sm">
                {new Date().toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>

            {/* Hebrew Calendar */}
            <div className="space-y-2">
              <h3 className="text-cyan-400 text-sm font-semibold">HEBREW</h3>
              <div className="border border-cyan-900/50 rounded-md p-3 backdrop-blur-sm">
                {getHebrewDate()}
              </div>
            </div>

            {/* Islamic Calendar */}
            <div className="space-y-2">
              <h3 className="text-cyan-400 text-sm font-semibold">ISLAMIC</h3>
              <div className="border border-cyan-900/50 rounded-md p-3 backdrop-blur-sm">
                {getIslamicDate()}
              </div>
            </div>

            {/* Chinese Calendar */}
            <div className="space-y-2">
              <h3 className="text-cyan-400 text-sm font-semibold">CHINESE</h3>
              <div className="border border-cyan-900/50 rounded-md p-3 backdrop-blur-sm">
                {getChineseDate()}
              </div>
            </div>

            {/* Buddhist Calendar */}
            <div className="space-y-2">
              <h3 className="text-cyan-400 text-sm font-semibold">BUDDHIST</h3>
              <div className="border border-cyan-900/50 rounded-md p-3 backdrop-blur-sm">
                {getBuddhistDate()}
              </div>
            </div>

            {/* Persian Calendar */}
            <div className="space-y-2">
              <h3 className="text-cyan-400 text-sm font-semibold">PERSIAN</h3>
              <div className="border border-cyan-900/50 rounded-md p-3 backdrop-blur-sm">
                {getPersianDate()}
              </div>
            </div>

            {/* Mayan Calendar */}
            <div className="space-y-2">
              <h3 className="text-cyan-400 text-sm font-semibold">MAYAN LONG COUNT</h3>
              <div className="border border-cyan-900/50 rounded-md p-3 backdrop-blur-sm">
                {getMayanDate()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimePage;