// pages/index.js
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const players = [
    { name: "CNT Petey", image: "/players/petey.jpg" },
    { name: "CNT Zerox", image: "/players/zerox.jpg" },
    { name: "CNT Loki", image: "/players/loki.jpg" },
    { name: "CNT Ares", image: "/players/ares.jpg" },
    { name: "CNT Vex", image: "/players/vex.jpg" },
    { name: "CNT Nova", image: "/players/nova.jpg" },
    { name: "CNT Raze", image: "/players/raze.jpg" },
    { name: "CNT Ghost", image: "/players/ghost.jpg" },
    { name: "CNT Titan", image: "/players/titan.jpg" },
  ];

  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-start"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="flex flex-col items-center justify-center text-center px-4 pt-24" data-aos="fade-down">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
          WELCOME TO
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold tracking-wide mb-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
          CONTRAST E-SPORTS
        </h2>
        <div className="flex justify-center space-x-6 mt-4" data-aos="zoom-in" data-aos-delay="200">
          <a href="https://discord.gg/XKtD9gPJpU" target="_blank" rel="noopener noreferrer">
            <img src="/discord.svg" alt="Discord" className="w-8 h-8 filter invert brightness-200 drop-shadow-[0_0_12px_white] transition-transform duration-300 hover:scale-110" />
          </a>
          <a href="https://www.youtube.com/@ContrastEsports" target="_blank" rel="noopener noreferrer">
            <img src="/youtube.svg" alt="YouTube" className="w-8 h-8 filter invert brightness-200 drop-shadow-[0_0_12px_white] transition-transform duration-300 hover:scale-110" />
          </a>
          <a href="https://x.com/CNTEsportsTM" target="_blank" rel="noopener noreferrer">
            <img src="/x.svg" alt="X" className="w-8 h-8 filter invert brightness-200 drop-shadow-[0_0_12px_white] transition-transform duration-300 hover:scale-110" />
          </a>
          <Link href="/settings">
            <img src="/settings.svg" alt="Settings" className="w-8 h-8 filter invert brightness-200 drop-shadow-[0_0_12px_white] transition-transform duration-300 hover:rotate-90 hover:scale-110" />
          </Link>
        </div>
      </div>

      <section className="py-20 px-6 bg-black bg-opacity-70" data-aos="fade-up">
        <h3 className="text-white text-4xl font-bold text-center mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
          ABOUT CONTRAST
        </h3>
        <p className="text-white max-w-2xl mx-auto text-center text-lg leading-relaxed">
          Contrast E-Sports is a competitive gaming organization, built around excellence, skill and determination.
        </p>
      </section>

      <section className="py-20 px-6 bg-black bg-opacity-80" data-aos="fade-up">
        <h3 className="text-white text-4xl font-bold text-center mb-12 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
          MEET THE ROSTER
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {players.map((player, index) => (
            <div
              key={index}
              className="text-center transform transition-transform duration-300 hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]"
              data-aos="zoom-in" data-aos-delay={index * 100}
            >
              <img
                src={player.image}
                alt={player.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
              />
              <p className="text-white text-xl font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">{player.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-black bg-opacity-70 text-center" data-aos="fade-up">
        <h3 className="text-white text-4xl font-bold mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
          JOIN OUR COMMUNITY
        </h3>
        <iframe
          src="https://discord.com/widget?id=1362090850892517528&theme=dark"
          width="100%"
          height="400"
          allowTransparency="true"
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          className="rounded-xl shadow-xl mx-auto max-w-3xl"
        ></iframe>
      </section>

      <footer className="bg-black bg-opacity-70 text-white text-center py-4 text-sm">
        © {new Date().getFullYear()} Contrast E-Sports. All rights reserved.
      </footer>
    </main>
  );
}

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
      <h1 className="text-4xl font-bold text-center mb-12 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">Player Settings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {settings.map((player, index) => (
          <div
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className="text-center transform transition-transform duration-300 hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]"
            data-aos="zoom-in" data-aos-delay={index * 100}
          >
            <img
              src={player.image}
              alt={player.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
            />
            <p className="text-xl font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">{player.name}</p>
            {hovered === index && (
              <div className="mt-4 p-4 bg-white bg-opacity-10 rounded-lg text-sm transition-all duration-300">
                {player.sens}
              </div>
            )}
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
