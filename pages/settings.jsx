import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ChevronUp } from 'lucide-react';

export default function Settings() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const players = [
    { name: "CNT Petey", image: "/players/petey.jpg", sensitivity: "0.4 / 800 DPI" },
    { name: "CNT Zerox", image: "/players/zerox.jpg", sensitivity: "0.6 / 400 DPI" },
    { name: "CNT Loki", image: "/players/loki.jpg", sensitivity: "0.5 / 1600 DPI" },
    { name: "CNT Ares", image: "/players/ares.jpg", sensitivity: "0.7 / 800 DPI" },
    { name: "CNT Vex", image: "/players/vex.jpg", sensitivity: "0.45 / 1200 DPI" },
    { name: "CNT Nova", image: "/players/nova.jpg", sensitivity: "0.55 / 800 DPI" },
    { name: "CNT Raze", image: "/players/raze.jpg", sensitivity: "0.52 / 1000 DPI" },
    { name: "CNT Ghost", image: "/players/ghost.jpg", sensitivity: "0.65 / 400 DPI" },
    { name: "CNT Titan", image: "/players/titan.jpg", sensitivity: "0.48 / 1600 DPI" },
  ];

  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat py-24 px-6"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <h1
        className="text-white text-5xl font-extrabold text-center mb-16 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
        data-aos="fade-down"
      >
        PLAYER SETTINGS
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {players.map((player, index) => (
          <div
            key={index}
            className="relative text-center group transition-all duration-300 transform hover:scale-105"
            data-aos="fade-up" data-aos-delay={index * 100}
          >
            <img
              src={player.image}
              alt={player.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-white drop-shadow-[0_0_12px_rgba(255,255,255,0.6)] transition-transform duration-300 group-hover:-translate-y-2"
            />
            <p className="text-white text-xl font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">{player.name}</p>
            <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-in-out">
              <div className="mt-4 p-4 bg-white/10 backdrop-blur-md text-white rounded-xl border border-white/20 shadow-lg">
                <p className="text-sm font-medium">Sensitivity:</p>
                <p className="text-lg font-semibold">{player.sensitivity}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showTopBtn && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-xl hover:bg-white/20 transition-all"
        >
          <ChevronUp className="text-white" />
        </button>
      )}
    </main>
  );
}
