import { Mic, Search, Languages, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const Header = ({ onProfileClick, onSearch }) => {
  const [query, setQuery] = useState("");
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onresult = (event) => {
      setQuery(event.results[0][0].transcript);
    };

    recognition.onend = () => {
      if (query.trim()) onSearch?.(query);
    };

    recognitionRef.current = recognition;
  }, [query, onSearch]);

  const startListening = () => {
    recognitionRef.current?.start();
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E5DDF0] px-4 py-3">
      {/* Top Row */}
      <div className="flex justify-between items-center mb-4">
        {/* 🔰 Logo + Brand */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/vite.svg"
            alt="HandiKart Logo"
            className="h-10 md:h-12 w-auto"
          />

          <div className="leading-none">
            {/* BRAND NAME */}
            <h1 className="text-xl md:text-2xl font-extrabold tracking-[0.15em]
              bg-gradient-to-r from-[#8E2C5D] to-[#C94A7A]
              bg-clip-text text-transparent">
              HANDIKART
            </h1>

            {/* TAGLINE */}
            <div className="flex items-center gap-2 mt-1">
              <span className="h-[1px] w-6 bg-[#C94A7A]/60"></span>
              <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.35em] text-[#8E2C5D]/80">
                Village to Home
              </p>
            </div>
          </div>
        </a>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 bg-[#F3ECFA] border border-[#E5DDF0] px-3 py-1.5 rounded-full text-sm font-semibold text-[#8E2C5D]">
            <Languages size={16} />
            हिन्दी
          </button>

          <button
            onClick={onProfileClick}
            className="p-2 bg-[#F3ECFA] border border-[#E5DDF0] rounded-full text-[#8E2C5D] active:scale-90 transition"
          >
            <User size={20} />
          </button>
        </div>
      </div>

      {/* 🔍 Search */}
      <div className="relative">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search handmade products..."
          className="w-full bg-white border-2 border-[#E5DDF0] rounded-2xl py-4 pl-12 pr-14 text-lg font-medium focus:border-[#8E2C5D] outline-none"
        />

        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8E2C5D]"
          size={20}
        />

        <button
          onClick={startListening}
          className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#8E2C5D] text-white p-3 rounded-xl shadow-md active:scale-90"
        >
          <Mic size={22} />
        </button>
      </div>
    </header>
  );
};

export default Header;
