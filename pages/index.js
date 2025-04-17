export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-between"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="flex-grow flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-4">WELCOME TO</h1>
          <h2 className="text-[#00FFFF] text-4xl md:text-6xl font-bold tracking-wide">CONTRAST E-SPORTS</h2>
        </div>
      </div>
      <footer className="bg-black bg-opacity-70 text-white text-center py-4 text-sm">
        © {new Date().getFullYear()} Contrast E-Sports. All rights reserved.
      </footer>
    </main>
  );
}
