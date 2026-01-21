// // import { Mic, Search, Languages } from "lucide-react";

// // const Header = () => {
// //   return (
// //     <header className="sticky top-0 z-50 bg-handy-paper border-b">

// //       {/* BLUR LAYER (safe) */}
// //       <div className="bg-handy-paper/80 backdrop-blur-md px-4 pt-6 pb-4 md:px-6 lg:px-8">

// //         {/* Top row */}
// //         <div className="flex justify-between items-end mb-6 max-w-7xl mx-auto">
// //           <div>
// //             <h1 className="text-3xl font-extrabold text-handy-earth tracking-tight leading-none">
// //               HandyCart
// //             </h1>
// //             <p className="text-handy-bark/60 text-xs font-bold mt-1 uppercase tracking-widest">
// //               Village to Home
// //             </p>
// //           </div>

// //           <button
// //             className="flex items-center gap-1 bg-white border-2 
// //                        border-handy-sand/30 px-3 py-1.5 rounded-full 
// //                        shadow-sm active:scale-95 transition-transform"
// //           >
// //             <Languages size={18} className="text-handy-earth" />
// //             <span className="text-sm font-bold">हिन्दी</span>
// //           </button>
// //         </div>

// //         {/* Search Bar */}
// // <div className="max-w-7xl mx-auto">
// //   <div className="relative">

// //     {/* INPUT — LOWER Z */}
// //     <input
// //       type="text"
// //       placeholder="Search with voice..."
// //       className="relative z-10 w-full bg-white 
// //                  border-2 border-stone-100 
// //                  rounded-2xl 
// //                  py-5 pl-14 pr-28 
// //                  text-xl shadow-sm 
// //                  focus:border-handy-earth 
// //                  outline-none 
// //                  placeholder:text-stone-300"
// //     />

// //     {/* Search icon */}
// //     <Search
// //       size={24}
// //       className="absolute left-5 top-1/2 -translate-y-1/2 
// //                  text-stone-400 z-20 pointer-events-none"
// //     />

// //     {/* Mic button — HIGHER Z */}
// //     <button
// //       type="button"
// //       className="absolute right-4 top-1/2 -translate-y-1/2 
// //                  bg-handy-earth text-white 
// //                  p-3.5 rounded-xl shadow-lg 
// //                  z-30 active:scale-90 transition-transform"
// //     >
// //       <Mic size={28} />
// //     </button>

// //   </div>
// // </div>


// //       </div>
// //     </header>
// //   );
// // };

// // export default Header;

// import { Mic, Search, Languages, User } from 'lucide-react';

// const Header = ({ onProfileClick }) => {
//   return (
//     <header className="p-4 bg-[#FDFBF7]">
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h1 className="text-2xl font-black text-[#BC6C25] leading-none">HandyCart</h1>
//           <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mt-1">Village to Home</p>
//         </div>
        
//         <div className="flex items-center gap-3">
//           {/* Language Selector */}
//           <button className="flex items-center gap-1 bg-white border border-stone-200 px-3 py-1.5 rounded-full shadow-sm text-sm font-bold">
//             <Languages size={16} className="text-[#BC6C25]" />
//             हिन्दी
//           </button>
          
//           {/* 👤 NEW PROFILE SECTION */}
//           <button 
//             onClick={onProfileClick}
//             className="p-2 bg-white border border-stone-200 rounded-full shadow-sm text-stone-600 hover:text-[#BC6C25] active:scale-90 transition-transform"
//           >
//             <User size={20} />
//           </button>
//         </div>
//       </div>

//       {/* Voice Search Bar */}
//       <div className="relative group">
//         <input 
//           type="text" 
//           placeholder="Search with voice..."
//           className="w-full bg-white border-2 border-stone-100 rounded-2xl py-4 pl-12 pr-14 text-lg font-medium shadow-sm focus:border-[#BC6C25] outline-none transition-all"
//         />
//         <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
//         <button className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#BC6C25] text-white p-3 rounded-xl shadow-md">
//           <Mic size={22} />
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;

import { Mic, Search, Languages, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const Header = ({ onProfileClick }) => {
  const [query, setQuery] = useState("");
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (!SpeechRecognition) {
      console.log("Speech recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN"; // change to hi-IN for Hindi
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      setQuery(text);
    };

    recognition.onend = () => {
      if (query.trim()) {
        handleSearch(query);
      }
    };

    recognitionRef.current = recognition;
  }, [query]);

  const startListening = () => {
    recognitionRef.current?.start();
  };

  const handleSearch = (text) => {
    console.log("Searching for:", text);
    // 👉 filter items or call search API here
  };

  return (
    <header className="p-4 bg-[#FDFBF7]">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-black text-[#BC6C25] leading-none">
            HandyCart
          </h1>
          <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mt-1">
            Village to Home
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 bg-white border border-stone-200 px-3 py-1.5 rounded-full shadow-sm text-sm font-bold">
            <Languages size={16} className="text-[#BC6C25]" />
            हिन्दी
          </button>

          <button
            onClick={onProfileClick}
            className="p-2 bg-white border border-stone-200 rounded-full shadow-sm text-stone-600 hover:text-[#BC6C25] active:scale-90 transition-transform"
          >
            <User size={20} />
          </button>
        </div>
      </div>

      {/* 🔥 Voice Search Bar */}
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search with voice..."
          className="w-full bg-white border-2 border-stone-100 rounded-2xl py-4 pl-12 pr-14 text-lg font-medium shadow-sm focus:border-[#BC6C25] outline-none"
        />

        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
          size={20}
        />

        <button
          onClick={startListening}
          className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#BC6C25] text-white p-3 rounded-xl shadow-md active:scale-90"
        >
          <Mic size={22} />
        </button>
      </div>
    </header>
  );
};

export default Header;
