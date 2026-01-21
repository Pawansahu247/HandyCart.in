import ProductCard from './ProductCard';

const ItemsList = ({ searchQuery }) => {
  // Mock data for the full catalog
  const allProducts = [
    { id: 1, name: "Terracotta Vase", price: 850, artisan: "Pawan Prasad Sahu", category: "Pottery", image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=400" },
    { id: 2, name: "Silk Sari", price: 2200, artisan: "Sita Devi", category: "Cloth", image: "https://images.unsplash.com/photo-1610030469983-98e6f2494c5a?auto=format&fit=crop&q=80&w=400" },
    { id: 3, name: "Wooden Elephant", price: 1100, artisan: "Amit Sah", category: "Wood", image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=400" },
    { id: 4, name: "Bamboo Basket", price: 450, artisan: "Ramu Kaka", category: "Baskets", image: "https://images.unsplash.com/photo-1591034353348-92860773bfe1?auto=format&fit=crop&q=80&w=400" },
  ];

  // Logic to filter based on your existing search state
  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.artisan.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 md:p-8 animate-in fade-in duration-500">
      <h2 className="text-2xl font-black text-[#283618] mb-8 uppercase tracking-tighter">
        {searchQuery ? `Results for "${searchQuery}"` : "All Handmade Items"}
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-stone-400 font-bold italic">No items found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default ItemsList;