import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-between"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="flex-grow flex items-center justify-center text-center px-4">
        <div data-aos="fade-up">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-4">WELCOME TO</h1>
          <h2 className="text-[#00FFFF] text-4xl md:text-6xl font-bold tracking-wide mb-6">CONTRAST E-SPORTS</h2>

          <div className="flex justify-center space-x-6 mt-4" data-aos="fade-up" data-aos-delay="300">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/twitter.svg" alt="Twitter" className="w-8 h-8 hover:scale-110 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.svg" alt="Instagram" className="w-8 h-8 hover:scale-110 transition" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="/youtube.svg" alt="YouTube" className="w-8 h-8 hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </div>

      <footer className="bg-black bg-opacity-70 text-white text-center py-4 text-sm">
        © {new Date().getFullYear()} Contrast E-Sports. All rights reserved.
      </footer>
    </main>
  );
}
