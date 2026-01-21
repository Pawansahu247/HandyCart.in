import ProductCard from './ProductCard';

const newestProducts = [
  {
    id: 1,
    name: "Terracotta Flower Vase",
    price: 850,
    artisan: "Pawan Prasad Sahu", //
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=400"
  },
  {
    id: 2,
    name: "Silk Handloom Sari",
    price: 2200,
    artisan: "Sita Devi",
    image: "https://images.unsplash.com/photo-1610030469983-98e6f2494c5a?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    name: "Hand-Carved Elephant",
    price: 1100,
    artisan: "Amit Sah",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 4,
    name: "Bamboo Storage Basket",
    price: 450,
    artisan: "Ramu Kaka",
    image: "https://images.unsplash.com/photo-1591034353348-92860773bfe1?auto=format&fit=crop&q=80&w=400"
  }
];

const NewestItems = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-[#283618]">
          <span className="w-2 h-8 bg-[#434C24] rounded-full"></span>
          Newest Items Today
        </h2>
        <button className="text-[#BC6C25] font-black text-sm uppercase tracking-widest hover:underline">
          View All
        </button>
      </div>

      {/* Responsive Grid System */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {newestProducts.map((product) => (
          <ProductCard 
            key={product.id}
            name={product.name}
            price={product.price}
            artisan={product.artisan}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
};

export default NewestItems;