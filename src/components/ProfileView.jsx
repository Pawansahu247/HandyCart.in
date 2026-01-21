import { User, ShieldCheck, MapPin, Phone, LogOut, ChevronRight, Award } from 'lucide-react';

const ProfileView = ({ userRole, onLogout }) => {
  // 🔍 Pulling real data saved during Registration/Login
  const userName = localStorage.getItem("handycart_user_name") || "Guest User";
  const userPhone = localStorage.getItem("handycart_user_phone") || "No Phone Linked";
  const userLocation = localStorage.getItem("seller_address") || "Location not set";

  return (
    <div className="p-4 md:p-8 animate-in fade-in slide-in-from-bottom duration-500 max-w-2xl mx-auto w-full">
      {/* 👤 Dynamic Profile Header */}
      <div className="bg-white rounded-[32px] p-8 border border-stone-100 shadow-xl text-center mb-6">
        <div className="relative inline-block mb-4">
          <div className="w-24 h-24 rounded-[32px] bg-[#BC6C25] flex items-center justify-center text-white text-4xl font-black shadow-inner">
            {userName.charAt(0)}
          </div>
          <div className="absolute -bottom-2 -right-2 bg-[#434C24] p-2 rounded-full border-4 border-white text-white">
            <ShieldCheck size={20} />
          </div>
        </div>
        
        <h2 className="text-2xl font-black text-[#283618] leading-tight">{userName}</h2>
        <div className="flex items-center justify-center gap-1 text-stone-400 font-bold text-sm mt-1">
          <MapPin size={14} /> {userLocation}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-black text-stone-400 uppercase px-4 tracking-widest">Account Information</h3>
        <ProfileItem icon={<Phone size={20}/>} label="Phone Number" value={userPhone} />
        <ProfileItem icon={<User size={20}/>} label="Account Role" value={userRole === 'seller' ? 'Artisan' : 'Customer'} />
      </div>

      <button 
        onClick={onLogout}
        className="mt-10 w-full bg-red-50 text-red-600 py-5 rounded-[24px] font-black text-lg flex items-center justify-center gap-3 active:scale-95 transition-all"
      >
        <LogOut size={22} /> LOGOUT
      </button>
    </div>
  );
};

const ProfileItem = ({ icon, label, value }) => (
  <div className="bg-white p-5 rounded-[24px] border border-stone-50 flex items-center justify-between hover:border-[#BC6C25] transition-colors">
    <div className="flex items-center gap-4">
      <div className="text-stone-300">{icon}</div>
      <div>
        <p className="text-[10px] font-black text-stone-400 uppercase">{label}</p>
        <p className="font-bold text-[#283618]">{value}</p>
      </div>
    </div>
    <ChevronRight size={18} className="text-stone-300" />
  </div>
);

export default ProfileView;