// pages/settings.jsx
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const settings = [
  { name: "CNT Petey", image: "/players/petey.jpg", sens: "DPI: 800 | Sensitivity: 0.35 | ADS: 0.65" },
  { name: "CNT Zerox", image: "/players/zerox.jpg", sens: "DPI: 400 | Sensitivity: 0.6 | ADS: 0.9" },
  { name: "CNT Loki", image: "/players/loki.jpg", sens: "DPI: 1600 | Sensitivity: 0.25 | ADS: 0.5" },
  { name: "CNT Ares", image: "/players/ares.jpg", sens: "DPI: 1200 | Sensitivity: 0.4 | ADS: 0.6" },
  { name: "CNT Vex", image: "/players/vex.jpg", sens: "DPI: 1000 | Sensitivity: 0.45 | ADS: 0.8" },
  { name: "CNT Nova", image: "/players/nova.jpg", sens: "DPI: 800 | Sensitivity: 0.5 | ADS: 1.0" },
  { name: "CNT Raze", image: "/players/raze.jpg", sens: "DPI: 600 | Sensitivity: 0.7 | ADS: 0.9" },
  { name: "CNT Ghost", image: "/players/ghost.jpg", sens: "DPI: 800 | Sensitivity: 0.33 | ADS: 0.7" },
  { name: "CNT Titan", image: "/players/titan.jpg", sens: "DPI: 1200 | Sensitivity: 0.5 | ADS: 0.8" },
];

export default function SettingsPage() {
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6 pt-24 relative">
      <h1 className="text-4xl font-bold text-center mb-12 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
        Player Settings
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {settings.map((player, index) => (
          <div
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className="text-center transition-all duration-300 transform hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <img
              src={player.image}
              alt={player.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
            />
            <p className="text-xl font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">{player.name}</p>

            <div
              className={`transition-all duration-500 overflow-hidden ${
                hovered === index ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'
              } bg-white bg-opacity-10 rounded-lg text-sm px-4 py-2`}
            >
              {player.sens}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 p-3 bg-white bg-opacity-20 hover:bg-opacity-40 text-white rounded-full shadow-md transition duration-300"
      >
        ↑
      </button>
    </div>
  );
}
