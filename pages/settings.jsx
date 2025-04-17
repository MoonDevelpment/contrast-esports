// pages/settings.jsx
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

export default function Settings() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [search, setSearch] = useState("");

  const players = [
    { name: "CNT Petey", image: "/players/petey.jpg", sensitivity: "1.2", dpi: "800" },
    { name: "CNT Zerox", image: "/players/zerox.jpg", sensitivity: "1.5", dpi: "1600" },
    { name: "CNT Loki", image: "/players/loki.jpg", sensitivity: "1.8", dpi: "1200" },
    { name: "CNT Ares", image: "/players/ares.jpg", sensitivity: "2.0", dpi: "1000" },
    { name: "CNT Vex", image: "/players/vex.jpg", sensitivity: "1.4", dpi: "800" },
    { name: "CNT Nova", image: "/players/nova.jpg", sensitivity: "1.7", dpi: "1600" },
    { name: "CNT Raze", image: "/players/raze.jpg", sensitivity: "1.6", dpi: "1200" },
    { name: "CNT Ghost", image: "/players/ghost.jpg", sensitivity: "1.3", dpi: "1000" },
    { name: "CNT Titan", image: "/players/titan.jpg", sensitivity: "1.9", dpi: "1600" },
  ];

  const filtered = players.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat px-4 py-20 relative"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <h1 className="text-white text-5xl font-extrabold text-center mb-12 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" data-aos="fade-down">
        PLAYER SETTINGS
      </h1>

      <div className="flex justify-center mb-10" data-aos="fade-down" data-aos-delay="100">
        <input
          type="text"
          placeholder="Search players..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-6 py-3 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder-white/70 shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {filtered.map((player, index) => (
          <div
            key={index}
            className="group relative text-center transform transition-transform duration-300 hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]"
            data-aos="zoom-in" data-aos-delay={index * 100}
          >
            <img
              src={player.image}
              alt={player.name}
              className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] mb-4"
            />
            <p className="text-white text-xl font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">{player.name}</p>

            {/* Hover Panel */}
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out bg-white/10 backdrop-blur-md text-white px-6 py-4 rounded-xl border border-white/20 shadow-lg w-full max-w-[220px]">
              <p>Sensitivity: {player.sensitivity}</p>
              <p>DPI: {player.dpi}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/20 shadow-lg hover:scale-110 transition"
      >
        ↑ Top
      </button>
    </main>
  );
}
