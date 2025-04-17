import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const players = [
    { name: "CNT Petey", image: "/players/petey.jpg" },
    { name: "CNT Zerox", image: "/players/zerox.jpg" },
    { name: "CNT Loki", image: "/players/loki.jpg" },
  ];

  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-between"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* HERO SECTION */}
      <div className="flex-grow flex items-center justify-center text-center px-4">
        <div data-aos="fade-up">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
            WELCOME TO
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold tracking-wide mb-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
            CONTRAST E-SPORTS
          </h2>

          {/* SOCIAL BUTTONS */}
          <div className="flex justify-center space-x-6 mt-4" data-aos="fade-up" data-aos-delay="300">
            <a href="https://discord.gg/XKtD9gPJpU" target="_blank" rel="noopener noreferrer">
              <img src="/discord.svg" alt="Discord" className="w-8 h-8 filter brightness-200 drop-shadow-[0_0_10px_white] transition-transform duration-300 hover:scale-110" />
            </a>
            <a href="https://www.youtube.com/@ContrastEsports" target="_blank" rel="noopener noreferrer">
              <img src="/youtube.svg" alt="YouTube" className="w-8 h-8 filter brightness-200 drop-shadow-[0_0_10px_white] transition-transform duration-300 hover:scale-110" />
            </a>
            <a href="https://x.com/CNTEsportsTM" target="_blank" rel="noopener noreferrer">
              <img src="/x.svg" alt="X" className="w-8 h-8 filter brightness-200 drop-shadow-[0_0_10px_white] transition-transform duration-300 hover:scale-110" />
            </a>
          </div>
        </div>
      </div>

      {/* SCROLL SPACER */}
      <div className="h-[100vh]"></div>

      {/* ABOUT SECTION */}
      <section className="py-12 px-6 bg-black bg-opacity-70" data-aos="fade-up"> {/* Reduced py-20 to py-12 */}
        <h3 className="text-white text-4xl font-bold text-center mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"> {/* Reduced mb-6 to mb-4 */}
          ABOUT CONTRAST
        </h3>
        <p className="text-white max-w-2xl mx-auto text-center text-lg leading-relaxed">
          Contrast E-Sports is a competitive gaming organization, built around excellence, skill and determination.
        </p>
      </section>

      {/* ROSTER SECTION */}
      <section className="py-12 px-6 bg-black bg-opacity-80" data-aos="fade-up"> {/* Reduced py-20 to py-12 */}
        <h3 className="text-white text-4xl font-bold text-center mb-8 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"> {/* Reduced mb-12 to mb-8 */}
          MEET THE ROSTER
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {players.map((player, index) => (
            <div key={index} className="text-center" data-aos="zoom-in" data-aos-delay={index * 100}>
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

      {/* DISCORD INVITE */}
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

      {/* FOOTER */}
      <footer className="bg-black bg-opacity-70 text-white text-center py-4 text-sm">
        © {new Date().getFullYear()} Contrast E-Sports. All rights reserved.
      </footer>
    </main>
  );
}
