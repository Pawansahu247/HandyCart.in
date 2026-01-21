import { useState } from 'react';
import { Phone, ArrowRight, ShieldCheck, X, ShoppingBag, UserRoundPen } from 'lucide-react';

const Auth = ({ isOpen, onClose, onLoginSuccess }) => {
  const [role, setRole] = useState(null); // 'buyer' or 'seller'
  const [step, setStep] = useState(1); // 1: Role, 2: Phone, 3: OTP
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setStep(2);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    // Pass the role back to App.jsx to unlock specific features
    onLoginSuccess(role); 
    setRole(null);
    setStep(1);
  };

  return (
    <div className="fixed inset-0 z-[1000] bg-white flex flex-col p-6 animate-in slide-in-from-bottom duration-300">
      <div className="flex justify-end">
        <button onClick={onClose} className="p-2 bg-stone-100 rounded-full"><X size={20}/></button>
      </div>

      <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
        
        {/* STEP 1: ROLE SELECTION */}
        {step === 1 && (
          <div className="text-center space-y-8">
            <div>
              <h2 className="text-3xl font-black text-[#283618]">Who are you?</h2>
              <p className="text-stone-500 font-bold mt-2">Choose one to start</p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <button 
                onClick={() => handleRoleSelect('buyer')}
                className="group p-6 border-2 border-stone-100 rounded-3xl flex items-center gap-6 hover:border-[#434C24] transition-all text-left"
              >
                <div className="bg-blue-100 p-4 rounded-2xl text-blue-600 group-hover:bg-[#434C24] group-hover:text-white transition-colors">
                  <ShoppingBag size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#283618]">I want to Buy</h3>
                  <p className="text-sm text-stone-400 font-bold">I am a Customer</p>
                </div>
              </button>

              <button 
                onClick={() => handleRoleSelect('seller')}
                className="group p-6 border-2 border-stone-100 rounded-3xl flex items-center gap-6 hover:border-[#BC6C25] transition-all text-left"
              >
                <div className="bg-orange-100 p-4 rounded-2xl text-[#BC6C25] group-hover:bg-[#BC6C25] group-hover:text-white transition-colors">
                  <UserRoundPen size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#283618]">I want to Sell</h3>
                  <p className="text-sm text-stone-400 font-bold">I am an Artisan</p>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: PHONE NUMBER (Personalized by Role) */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black text-[#283618]">
                {role === 'seller' ? 'Artisan Sign In' : 'Customer Sign In'}
              </h2>
              <p className="text-stone-500 font-bold">Enter your phone number</p>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); setStep(3); }} className="space-y-4">
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-stone-400">+91</span>
                <input 
                  type="tel" 
                  maxLength={10}
                  className="w-full bg-stone-50 rounded-2xl py-5 pl-14 pr-4 text-xl font-bold outline-none border-2 border-transparent focus:border-[#BC6C25]"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  required
                />
              </div>
              <button className="w-full bg-[#434C24] text-white py-5 rounded-2xl font-black text-xl shadow-lg">
                GET OTP
              </button>
            </form>
          </div>
        )}

        {/* STEP 3: OTP */}
        {step === 3 && (
          <div className="space-y-6 text-center">
            <h2 className="text-2xl font-black text-[#283618]">Verify Code</h2>
            <p className="text-stone-400 font-bold uppercase text-xs">Sent to +91 {phone}</p>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4].map((i) => (
                <input key={i} type="text" maxLength={1} className="w-14 h-14 bg-stone-50 border-2 border-[#BC6C25] rounded-xl text-center text-2xl font-black" />
              ))}
            </div>
            <button 
              onClick={handleVerify}
              className="w-full bg-[#BC6C25] text-white py-5 rounded-2xl font-black text-xl shadow-lg mt-4"
            >
              START {role === 'seller' ? 'SELLING' : 'SHOPPING'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;