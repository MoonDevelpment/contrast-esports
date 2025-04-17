import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });

    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const players = [
    { name: "CNT Petey", image: "/players/petey.jpg" },
    { name: "CNT Zerox", image: "/players/zerox.jpg" },
    { name: "CNT Loki", image: "/players/loki.jpg" },
    { name: "CNT Alpha", image: "/players/alpha.jpg" },
    { name: "CNT Nova", image: "/players/nova.jpg" },
    { name: "CNT Blaze", image: "/players/blaze.jpg" },
    { name: "CNT Reaper", image: "/players/reaper.jpg" },
    { name: "CNT Shadow", image: "/players/shadow.jpg" },
    { name: "CNT Frost", image: "/players/frost.jpg" },
  ];

  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col relative overflow-hidden"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* HERO SECTION */}
      <div className="flex items-center justify-center text-center px-4 py-20 min-h-screen">
        <div data-aos="fade-down">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
            WELCOME TO
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold tracking-wide mb-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
            CONTRAST E-SPORTS
          </h2>

          {/* SOCIAL ICONS */}
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
          </div>
        </div>
      </div>

      {/* COMBINED SECTIONS */}
      <section className="py-12 px-6 bg-black bg-opacity-80" data-aos="fade-up">
        <h3 className="text-white text-4xl font-bold text-center mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
          ABOUT CONTRAST
        </h3>
        <p className="text-white max-w-2xl mx-auto text-center text-lg leading-relaxed mb-12" data-aos="fade-in" data-aos-delay="100">
          Contrast E-Sports is a competitive gaming organization, built around excellence, skill and determination.
        </p>

        <h3 className="text-white text-4xl font-bold text-center mb-8 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" data-aos="fade-up" data-aos-delay="200">
          MEET THE ROSTER
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-12">
          {players.map((player, index) => (
            <div
              key={index}
              className="text-center transform transition duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:scale-105 hover:-translate-y-1 group"
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
            >
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white group-hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] transition-all duration-500 ease-in-out">
                <img
                  src={player.image}
                  alt={player.name}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>
              <p className="text-white text-xl font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] group-hover:text-white transition-colors duration-500">
                {player.name}
              </p>
            </div>
          ))}
        </div>

        <h3 className="text-white text-4xl font-bold text-center mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" data-aos="fade-up">
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
          data-aos="fade-up"
          data-aos-delay="200"
        ></iframe>
      </section>

      {/* SCROLL TO TOP BUTTON */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-white text-black font-bold p-3 rounded-full shadow-lg hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] transition-all duration-300"
        >
          ↑
        </button>
      )}

      {/* FOOTER */}
      <footer className="bg-black bg-opacity-70 text-white text-center py-4 text-sm">
        © {new Date().getFullYear()} Contrast E-Sports. All rights reserved.
      </footer>
    </main>
  );
}
