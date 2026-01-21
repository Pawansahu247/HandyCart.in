

import { Home, LayoutGrid, PlusCircle, ShoppingBag, User } from 'lucide-react';

// 🛠️ Ensure you are destructuring activeTab and onTabChange from props
const BottomNav = ({ activeTab, onTabChange, onSellClick }) => {
  return (
    <nav className="bg-white/95 backdrop-blur-md border border-stone-200 px-8 py-3 flex justify-between items-center shadow-2xl rounded-[32px]">
      
      {/* HOME BUTTON */}
      <button 
        onClick={() => onTabChange('home')} // 🔥 This triggers the state change
        className={`flex flex-col items-center gap-1 transition-all ${
          activeTab === 'home' ? 'text-[#BC6C25] scale-110' : 'text-stone-400'
        }`}
      >
        <Home size={24} />
        <span className="text-[10px] font-bold uppercase tracking-wider">Home</span>
      </button>

      {/* ITEMS BUTTON */}
      <button 
        onClick={() => onTabChange('items')} // 🔥 This switches to the ItemsList
        className={`flex flex-col items-center gap-1 transition-all ${
          activeTab === 'items' ? 'text-[#BC6C25] scale-110' : 'text-stone-400'
        }`}
      >
        <LayoutGrid size={24} />
        <span className="text-[10px] font-bold uppercase tracking-wider">Items</span>
      </button>
      
      {/* SELL BUTTON (Central Action) */}
      <div className="flex flex-col items-center -mt-12">
        <button 
          onClick={onSellClick}
          className="bg-[#BC6C25] text-white p-5 rounded-full shadow-2xl border-4 border-white active:scale-90 transition-transform"
        >
          <PlusCircle size={32} strokeWidth={2.5} />
        </button>
        
        <span className="text-[10px] mt-1 font-black text-[#BC6C25]">SELL</span>
      </div>
      <button 
  onClick={() => onTabChange('orders')}
  className={`flex flex-col items-center gap-1 transition-all ${
    activeTab === 'orders' ? 'text-[#BC6C25] scale-110' : 'text-stone-400'
  }`}
>
  <ShoppingBag size={24} />
  <span className="text-[10px] font-bold uppercase tracking-wider">Orders</span>
</button>
<button 
  onClick={() => onTabChange('profile')}
  className={`flex flex-col items-center gap-1 transition-all ${
    activeTab === 'profile' ? 'text-[#BC6C25] scale-110' : 'text-stone-400'
  }`}
>
  <User size={24} />
  <span className="text-[10px] font-bold uppercase tracking-wider">Profile</span>
</button>

      {/* Placeholder for Orders and Profile */}
      {/* <NavItem icon={<ShoppingBag size={24} />} label="Orders" /> */}
      {/* <NavItem icon={<User size={24} />} label="Profile" /> */}
    </nav>
  );
};

const NavItem = ({ icon, label }) => (
  <button className="flex flex-col items-center gap-1 text-stone-400">
    {icon}
    <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
  </button>
);

export default BottomNav;