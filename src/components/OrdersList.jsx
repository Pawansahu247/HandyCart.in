import { Package, Truck, CheckCircle, Clock, MapPin } from 'lucide-react';

const mockOrders = [
  {
    id: "ORD-9921",
    product: "Terracotta Flower Vase",
    price: 850,
    date: "20 Jan 2026",
    status: "Delivered",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=400",
    customer: "Pawan Prasad Sahu",
    location: "Jashpur, Chhattisgarh"
  },
  {
    id: "ORD-9945",
    product: "Silk Handloom Sari",
    price: 2200,
    date: "21 Jan 2026",
    status: "On the way",
    image: "https://images.unsplash.com/photo-1610030469983-98e6f2494c5a?auto=format&fit=crop&q=80&w=400",
    customer: "Sita Devi",
    location: "Ranchi, Jharkhand"
  }
];

const OrdersList = ({ userRole }) => {
  return (
    <div className="p-4 md:p-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-black text-[#283618] uppercase tracking-tighter">
          {userRole === 'seller' ? "My Sales" : "My Orders"}
        </h2>
        <span className="bg-stone-100 text-stone-500 px-4 py-1 rounded-full text-xs font-bold uppercase">
          {mockOrders.length} Total
        </span>
      </div>

      <div className="space-y-6">
        {mockOrders.map((order) => (
          <div key={order.id} className="bg-white rounded-[32px] p-6 border border-stone-100 shadow-sm flex flex-col md:flex-row gap-6">
            {/* Product Image */}
            <div className="w-full md:w-32 h-32 rounded-2xl overflow-hidden bg-stone-50">
              <img src={order.image} alt={order.product} className="w-full h-full object-cover" />
            </div>

            {/* Order Details */}
            <div className="flex-1 space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest">Order {order.id}</p>
                  <h3 className="text-xl font-extrabold text-[#283618]">{order.product}</h3>
                </div>
                <span className="text-xl font-black text-[#434C24]">₹{order.price}</span>
              </div>

              <div className="flex items-center gap-2 text-stone-500 text-sm font-bold">
                <Clock size={16} /> {order.date}
              </div>

              <div className="flex items-center gap-2 text-[#BC6C25] text-sm font-bold">
                <MapPin size={16} /> {order.location}
              </div>
            </div>

            {/* Status Tracker */}
            <div className="flex flex-col justify-center items-center md:items-end gap-3 min-w-[150px]">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full font-black text-xs uppercase ${
                order.status === 'Delivered' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'
              }`}>
                {order.status === 'Delivered' ? <CheckCircle size={14} /> : <Truck size={14} />}
                {order.status}
              </div>
              
              {userRole === 'seller' && order.status !== 'Delivered' && (
                <button className="text-xs font-black text-[#BC6C25] underline uppercase tracking-tighter">
                  Update Shipping
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersList;