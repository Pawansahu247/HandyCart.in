import { Home, LayoutGrid, PlusCircle, ShoppingBag, User } from "lucide-react";

const BottomNav = ({ activeTab, onTabChange, onSellClick }) => {
  return (
    <nav className="bg-white/95 backdrop-blur-md border border-[#E5DDF0] px-8 py-3 flex justify-between items-center shadow-2xl rounded-[32px]">
      
      {/* HOME */}
      <button
        onClick={() => onTabChange("home")}
        className={`flex flex-col items-center gap-1 transition-all ${
          activeTab === "home"
            ? "text-[#8E2C5D] scale-110"
            : "text-stone-400"
        }`}
      >
        <Home size={24} />
        <span className="text-[10px] font-bold uppercase tracking-wider">
          Home
        </span>
      </button>

      {/* ITEMS */}
      <button
        onClick={() => onTabChange("items")}
        className={`flex flex-col items-center gap-1 transition-all ${
          activeTab === "items"
            ? "text-[#8E2C5D] scale-110"
            : "text-stone-400"
        }`}
      >
        <LayoutGrid size={24} />
        <span className="text-[10px] font-bold uppercase tracking-wider">
          Items
        </span>
      </button>

      {/* SELL (CENTER ACTION) */}
      <div className="flex flex-col items-center -mt-12">
        <button
          onClick={onSellClick}
          className="bg-[#8E2C5D] text-white p-5 rounded-full shadow-2xl border-4 border-white active:scale-90 transition-transform"
        >
          <PlusCircle size={32} strokeWidth={2.5} />
        </button>

        <span className="text-[10px] mt-1 font-black text-[#8E2C5D]">
          SELL
        </span>
      </div>

      {/* ORDERS */}
      <button
        onClick={() => onTabChange("orders")}
        className={`flex flex-col items-center gap-1 transition-all ${
          activeTab === "orders"
            ? "text-[#8E2C5D] scale-110"
            : "text-stone-400"
        }`}
      >
        <ShoppingBag size={24} />
        <span className="text-[10px] font-bold uppercase tracking-wider">
          Orders
        </span>
      </button>

      {/* PROFILE */}
      <button
        onClick={() => onTabChange("profile")}
        className={`flex flex-col items-center gap-1 transition-all ${
          activeTab === "profile"
            ? "text-[#8E2C5D] scale-110"
            : "text-stone-400"
        }`}
      >
        <User size={24} />
        <span className="text-[10px] font-bold uppercase tracking-wider">
          Profile
        </span>
      </button>
    </nav>
  );
};

export default BottomNav;
