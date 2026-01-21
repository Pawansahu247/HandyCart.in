import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    title: "HANDMADE POTTERY",
    subtitle: "Directly from Jashpur Artisans",
    bg: "bg-[#BC6C25]",
    icon: "🏺"
  },
  {
    id: 2,
    title: "PURE HANDLOOM",
    subtitle: "Silk Saris from Ranchi",
    bg: "bg-[#434C24]",
    icon: "🧵"
  },
  {
    id: 3,
    title: "WOODEN CRAFTS",
    subtitle: "Traditional Bastar Art",
    bg: "bg-[#DDA15E]",
    icon: "🪵"
  }
];

const HeroCarousel = () => {
  return (
    <section className="px-4 py-6">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="rounded-3xl shadow-lg overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={`${slide.bg} p-10 md:p-16 text-white relative h-48 md:h-64 flex flex-col justify-center`}>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black italic leading-tight">
                  {slide.title}
                </h2>
                <p className="mt-2 font-bold uppercase tracking-widest text-sm md:text-lg opacity-90">
                  {slide.subtitle}
                </p>
              </div>
              {/* Decorative Icon */}
              <div className="absolute right-4 bottom-0 text-9xl opacity-20 rotate-12 select-none">
                {slide.icon}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Pagination Styling */}
      <style>{`
        .swiper-pagination-bullet-active { background: #BC6C25 !important; }
        .swiper-pagination-bullet { background: rgba(0,0,0,0.2); }
      `}</style>
    </section>
  );
};

export default HeroCarousel;
