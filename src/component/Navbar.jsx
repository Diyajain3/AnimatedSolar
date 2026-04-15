import Logo from "./Logo";

const LINKS = ["Home", "Planets", "Gallery", "Mission", "About"];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 
      bg-black backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* 🌞 Logo */}
        <Logo  className="ml-2px"/>

        {/* 🔗 Links */}
        <ul className="hidden md:flex gap-8 text-white/70 text-sm tracking-wide">
          {LINKS.map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-yellow-400 transition"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* 🚀 Button */}
        <button className="px-5 py-2 rounded-full bg-yellow-400 text-black font-semibold text-sm
          shadow-[0_0_20px_#facc15] hover:scale-105 transition">
          Launch
        </button>

      </div>
    </nav>
  );
}