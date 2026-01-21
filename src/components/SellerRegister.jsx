import { useState } from 'react';
import { Store, MapPin, CreditCard, ClipboardCheck, Camera, X } from 'lucide-react';

const SellerRegister = ({ isOpen, onClose, onComplete }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    shopName: '',
    category: '',
    address: '',
    panNumber: '',
    aadharNumber: '',
    accountNumber: '',
    ifscCode: ''
  });

  if (!isOpen) return null;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="fixed inset-0 z-[1001] bg-white overflow-y-auto flex flex-col font-sans">
      {/* Header */}
      <div className="sticky top-0 bg-[#BC6C25] text-white p-6 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-3">
          <Store size={28} />
          <h2 className="text-xl font-black uppercase tracking-tight">Artisan Registration</h2>
        </div>
        <button onClick={onClose} className="bg-white/20 p-2 rounded-full"><X size={20}/></button>
      </div>

      {/* Progress Bar */}
      <div className="flex h-2 bg-stone-100">
        <div className="bg-[#434C24] transition-all duration-500" style={{ width: `${(step / 4) * 100}%` }}></div>
      </div>

      <div className="p-6 flex-1 max-w-xl mx-auto w-full space-y-8">
        
        {/* STEP 1: SHOP BASICS */}
        {step === 1 && (
          <div className="animate-in slide-in-from-right duration-300 space-y-6">
            <h3 className="text-2xl font-black text-[#283618]">Shop Details</h3>
            <InputGroup label="Shop Name" name="shopName" value={formData.shopName} onChange={handleInput} placeholder="e.g. Sahu Pottery Works" />
            <div className="space-y-2">
              <label className="text-sm font-bold text-stone-400 uppercase">Product Category</label>
              <select name="category" onChange={handleInput} className="w-full bg-stone-50 p-5 rounded-2xl border-2 border-stone-100 font-bold outline-none focus:border-[#BC6C25]">
                <option value="">Select what you sell</option>
                <option value="pottery">Pottery (मिट्टी के बर्तन)</option>
                <option value="handloom">Handloom (हथकरघा)</option>
                <option value="wood">Woodwork (लकड़ी का काम)</option>
                <option value="jewelry">Jewelry (आभूषण)</option>
              </select>
            </div>
            <button onClick={nextStep} className="w-full bg-[#BC6C25] text-white py-5 rounded-2xl font-black text-xl shadow-lg">Next: Address</button>
          </div>
        )}

        {/* STEP 2: ADDRESS */}
        {step === 2 && (
          <div className="animate-in slide-in-from-right duration-300 space-y-6">
            <h3 className="text-2xl font-black text-[#283618]">Pickup Address</h3>
            <textarea 
              name="address" 
              rows="4"
              placeholder="Full Village Address, District, PIN Code"
              className="w-full bg-stone-50 p-5 rounded-2xl border-2 border-stone-100 font-bold outline-none focus:border-[#BC6C25]"
              onChange={handleInput}
            ></textarea>
            <div className="grid grid-cols-2 gap-4">
              <button onClick={prevStep} className="w-full bg-stone-200 text-stone-600 py-5 rounded-2xl font-black">Back</button>
              <button onClick={nextStep} className="w-full bg-[#BC6C25] text-white py-5 rounded-2xl font-black shadow-lg">Next: Identity</button>
            </div>
          </div>
        )}

        {/* STEP 3: IDENTITY (PAN/AADHAR) */}
        {step === 3 && (
          <div className="animate-in slide-in-from-right duration-300 space-y-6">
            <h3 className="text-2xl font-black text-[#283618]">Identity Verification</h3>
            <InputGroup label="Aadhar Number" name="aadharNumber" value={formData.aadharNumber} onChange={handleInput} placeholder="12 Digit Number" />
            <InputGroup label="PAN Number (Optional)" name="panNumber" value={formData.panNumber} onChange={handleInput} placeholder="ABCDE1234F" />
            <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100 flex gap-3 text-orange-700">
              <ClipboardCheck size={20} />
              <p className="text-xs font-bold leading-tight">We use this to verify your artisan certificate from the government.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button onClick={prevStep} className="w-full bg-stone-200 text-stone-600 py-5 rounded-2xl font-black">Back</button>
              <button onClick={nextStep} className="w-full bg-[#BC6C25] text-white py-5 rounded-2xl font-black shadow-lg">Next: Bank</button>
            </div>
          </div>
        )}

        {/* STEP 4: BANK DETAILS */}
        {step === 4 && (
          <div className="animate-in slide-in-from-right duration-300 space-y-6">
            <h3 className="text-2xl font-black text-[#283618]">Payment Details</h3>
            <InputGroup label="Account Number" name="accountNumber" value={formData.accountNumber} onChange={handleInput} placeholder="0000 0000 0000" />
            <InputGroup label="IFSC Code" name="ifscCode" value={formData.ifscCode} onChange={handleInput} placeholder="SBIN0001234" />
            <div className="grid grid-cols-2 gap-4 pt-4">
              <button onClick={prevStep} className="w-full bg-stone-200 text-stone-600 py-5 rounded-2xl font-black">Back</button>
              <button 
                onClick={() => { onComplete(formData); onClose(); }} 
                className="w-full bg-[#434C24] text-white py-5 rounded-2xl font-black shadow-lg"
              >Finish Setup</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* Helper Component for Form Inputs */
const InputGroup = ({ label, name, value, onChange, placeholder }) => (
  <div className="space-y-2">
    <label className="text-sm font-bold text-stone-400 uppercase">{label}</label>
    <input 
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-stone-50 p-5 rounded-2xl border-2 border-stone-100 font-bold outline-none focus:border-[#BC6C25] transition-all"
    />
  </div>
);

export default SellerRegister;