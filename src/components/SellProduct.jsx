import { Camera, Mic, X, CheckCircle } from "lucide-react";

const SellProduct = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/40 flex justify-center items-end md:items-center">

      {/* Modal container */}
      <div
        className="w-full md:max-w-2xl lg:max-w-3xl bg-white 
                   flex flex-col animate-in slide-in-from-bottom duration-300
                   md:rounded-3xl md:mb-10 max-h-[100vh]"
      >
        {/* Header */}
        <div className="p-6 flex justify-between items-center border-b">
          <h2 className="text-2xl font-black text-handy-earth uppercase">
            Sell Your Item
          </h2>
          <button
            onClick={onClose}
            className="p-2 bg-stone-100 rounded-full text-handy-bark active:scale-95 transition-transform"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 space-y-8 overflow-y-auto">
          {/* Step 1: Photo */}
          <section>
            <p className="text-lg font-bold mb-3">1. Take a Photo</p>
            <div
              className="aspect-video bg-stone-100 border-4 border-dashed 
                         border-stone-200 rounded-xl-card 
                         flex flex-col items-center justify-center 
                         text-stone-400 active:bg-stone-200 transition-colors"
            >
              <Camera size={48} strokeWidth={1.5} />
              <span className="font-bold mt-2 italic text-sm text-handy-earth">
                Open Camera
              </span>
            </div>
          </section>

          {/* Step 2: Voice Description */}
          <section>
            <p className="text-lg font-bold mb-3">
              2. Speak about your item
            </p>
            <div
              className="bg-handy-paper border-2 border-handy-sand/20 
                         p-6 rounded-xl-card text-center"
            >
              <button
                className="bg-handy-earth text-white p-6 rounded-full 
                           shadow-lg animate-pulse mb-3"
              >
                <Mic size={32} />
              </button>
              <p className="text-sm font-bold text-handy-bark uppercase">
                Hold button to speak
              </p>
              <p className="text-xs text-stone-400 mt-1 italic leading-tight">
                Tell us the name and price
              </p>
            </div>
          </section>

          {/* Success Preview */}
          <div
            className="bg-handy-moss/10 p-4 rounded-xl 
                       border border-handy-moss/20 
                       flex items-center gap-3"
          >
            <CheckCircle className="text-handy-moss" />
            <p className="text-sm font-bold text-handy-moss">
              Voice heard: "Clay Pot for ₹500"
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <div className="p-6 border-t bg-white">
          <button
            className="w-full bg-handy-earth text-white 
                       py-5 rounded-2xl font-black text-xl 
                       shadow-xl active:scale-95 transition-transform"
          >
            LIST PRODUCT
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellProduct;
