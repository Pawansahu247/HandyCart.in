const categories = [
  { id: 1, name: "Pottery", img: "🏺", color: "bg-orange-50" },
  { id: 2, name: "Cloth", img: "🧵", color: "bg-blue-50" },
  { id: 3, name: "Wood", img: "🪵", color: "bg-amber-50" },
  { id: 4, name: "Jewelry", img: "✨", color: "bg-yellow-50" },
  { id: 5, name: "Painting", img: "🎨", color: "bg-red-50" },
  { id: 6, name: "Baskets", img: "🧺", color: "bg-green-50" },
];

const CategoryGrid = () => {
  return (
    <section className="px-4 py-4 md:px-6 lg:px-0">
      
      {/* Title */}
      <h2 className="text-xl font-bold mb-4 text-handy-bark max-w-7xl mx-auto">
        Choose what you want
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 
                      gap-4 max-w-7xl mx-auto">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`${cat.color} aspect-square rounded-2xl 
                        flex flex-col items-center justify-center 
                        border-2 border-white shadow-sm 
                        hover:border-handy-earth 
                        transition-all cursor-pointer group`}
          >
            <span className="text-4xl lg:text-5xl mb-2 
                             group-hover:scale-110 transition-transform">
              {cat.img}
            </span>
            <span className="font-bold text-handy-bark text-sm md:text-base">
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
