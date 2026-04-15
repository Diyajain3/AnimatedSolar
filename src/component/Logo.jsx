import { useState, useEffect } from "react";

export default function Logo() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a className="logo flex items-center gap-3" href="#">
      
      {/* 🌌 Solar System */}
      <div className="relative w-12 h-12 flex items-center justify-center">

        {/* 🌞 Glow */}
        <div className="absolute inset-0 rounded-full bg-yellow-300 blur-md opacity-40 animate-pulse" />

        {/* 🌞 Sun */}
        <div className="absolute w-4 h-4 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-400 to-orange-500 shadow-[0_0_25px_#facc15] z-10" />

        {/* 🌀 Orbit Ring 1 */}
        <div className="absolute w-12 h-12 rounded-full border border-yellow-400/20 animate-spin-slow" />

        {/* 🌀 Orbit Ring 2 */}
        <div className="absolute w-14 h-14 rounded-full border border-dashed border-yellow-300/10 animate-spin-reverse" />

        {/* 🌍 Planet 1 */}
        <div className="absolute w-12 h-12 animate-orbit1">
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa] -translate-x-1/2" />
        </div>

        {/* 🔴 Planet 2 */}
        <div className="absolute w-12 h-12 animate-orbit2">
          <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-red-400 rounded-full shadow-[0_0_8px_#f87171] -translate-x-1/2" />
        </div>

      </div>

      {/* 🪐 Logo Text */}
      <div className="flex flex-col leading-none">
        <span className="text-white font-bold tracking-widest text-lg">
          Animated <span className="text-yellow-400">Solar</span>
        </span>
        <span className="text-[10px] tracking-[0.25em] text-yellow-300/60 uppercase mt-1">
          Space Explorer
        </span>
      </div>
    </a>
  );
}