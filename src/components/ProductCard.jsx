import { Heart, ShoppingCart, MapPin, ShieldCheck } from 'lucide-react';

const ProductCard = ({ name, price, artisan, image }) => {
  return (
    <div className="group bg-white rounded-[32px] overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      
      {/* 🖼️ Image Section */}
      <div className="relative aspect-square overflow-hidden bg-stone-100">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        
        {/* Floating Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="bg-white/90 backdrop-blur-md text-[#434C24] text-[10px] font-black px-3 py-1 rounded-full shadow-sm flex items-center gap-1 uppercase tracking-tighter">
            <ShieldCheck size={12} /> Handmade
          </span>
        </div>

        <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-full text-[#BC6C25] shadow-md active:scale-125 transition-transform">
          <Heart size={20} />
        </button>
      </div>

      {/* 📝 Content Section */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-extrabold text-xl text-[#283618] leading-tight">
            {name}
          </h3>
          <div className="flex flex-col items-end">
            <span className="text-2xl font-black text-[#434C24]">₹{price}</span>
            <span className="text-[10px] font-bold text-stone-400 line-through">₹{Math.round(price * 1.4)}</span>
          </div>
        </div>

        {/* Artisan Info with Location */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 rounded-full bg-[#DDA15E] flex items-center justify-center text-white font-bold text-xs">
            {artisan.charAt(0)}
          </div>
          <div className="flex flex-col">
            <p className="text-xs font-black text-[#283618] uppercase tracking-tighter italic">
              By {artisan}
            </p>
            <div className="flex items-center gap-1 text-[10px] text-stone-400 font-bold">
              <MapPin size={10} /> Certified Village Artisan
            </div>
          </div>
        </div>

        {/* 🛒 Attractive Buy Button */}
        <button className="mt-auto w-full bg-[#434C24] text-white py-4 rounded-2xl font-black text-lg flex gap-3 items-center justify-center shadow-lg hover:bg-[#283618] active:scale-95 transition-all">
          <ShoppingCart size={22} strokeWidth={3} />
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default ProductCard;