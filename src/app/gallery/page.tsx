"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Gallery() {
  const galleryItems = [
    {
      title: "First Class Luxury",
      category: "Executive Fleet",
      desc: "Our Mercedes-Benz S-Class & BMW 7-Series vehicles represent the pinnacle of premium business transport, featuring climate control and soft leather cabins.",
      image: "https://ext.same-assets.com/3320819198/4008096964.webp"
    },
    {
      title: "Air Freight Express",
      category: "Logistics & Cargo",
      desc: "Secure standard and Euro-pallet air shipping routed globally with express clearance protocols. Built for time-critical, high-value commercial shipments.",
      image: "/logistics_cargo.png"
    },
    {
      title: "Chauffeur Meet & Greet",
      category: "Service Moments",
      desc: "A warm welcome by a professional chauffeur holding a personalized paging board at airport arrivals. Chauffeurs are dressed in dark suits.",
      image: "/about_chauffeur_welcome.png"
    },
    {
      title: "Cross-Border Executive SUV",
      category: "Executive Fleet",
      desc: "The Cadillac Escalade and Lincoln Navigator SUVs are ideal for luxury group transits and cross-border Singapore-Malaysia journeys.",
      image: "/gallery_executive_car.png"
    },
    {
      title: "Ocean Cargo Container",
      category: "Logistics & Cargo",
      desc: "Reliable international sea routes for Full Container Loads (FCL) and Less than Container Loads (LCL) mapped to DDP Incoterms.",
      image: "/ocean_cargo.png"
    },
    {
      title: "Elite VIP Group Vans",
      category: "Executive Fleet",
      desc: "High-capacity Mercedes V-Class and VIP Sprinter coaches designed for corporate retreats, business meetings, and delegation logistics.",
      image: "https://ext.same-assets.com/3320819198/1323216716.webp"
    },
    {
      title: "Road Freight & Distribution",
      category: "Logistics & Cargo",
      desc: "Daily cross-border trucking transport routing cargo doors-to-doors between Singapore and Malaysia with GPS tracking.",
      image: "/road_freight.png"
    },
    {
      title: "The Standard of Care",
      category: "Service Moments",
      desc: "Timely transitions, sanitized cabins, complimentary bottled water, and chauffeurs adhering to a strict dress code of a dark suit.",
      image: "/premium_chauffeur_ride.png"
    },
    {
      title: "F1 VIP Corporate Dispatch",
      category: "Service Moments",
      desc: "Elite dispatch management and multi-car coordinates during the Singapore F1 Grand Prix event for high-profile sponsors and guests.",
      image: "https://ext.same-assets.com/3320819198/1941821287.jpeg"
    },
    {
      title: "Pristine Sanitation Check",
      category: "Service Moments",
      desc: "Every AMAQ vehicle is fully sanitized, vacuumed, and detailed between pick-ups to ensure clean air and immaculate seat transitions.",
      image: "https://ext.same-assets.com/3320819198/2124402487.webp"
    }
  ];

  return (
    <main className="min-h-screen bg-[#fbf8f8] text-[#312e2c] flex flex-col justify-between">
      <Header />

      {/* Ticker Track Section */}
      <section className="pt-28 pb-12 w-full flex-1 flex flex-col justify-center overflow-hidden">
        
        {/* Infinite Scroll container */}
        <div className="flex w-full overflow-hidden relative py-6 select-none">
          {/* Subtle side mask gradients for premium lookbook look */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-36 bg-gradient-to-r from-[#fbf8f8] via-[#fbf8f8]/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-36 bg-gradient-to-l from-[#fbf8f8] via-[#fbf8f8]/80 to-transparent z-20 pointer-events-none" />
          
          {/* Loop Track */}
          <div className="animate-marquee flex gap-1 cursor-grab active:cursor-grabbing">
            {/* Duplicated list to create seamless infinite loop */}
            {[...galleryItems, ...galleryItems].map((item, index) => (
              <div 
                key={index}
                className="w-[280px] h-[400px] md:w-[350px] md:h-[500px] relative rounded-3xl overflow-hidden shadow-lg flex-shrink-0 mx-3.5 border border-gray-200/40 group bg-gray-900"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-102 opacity-90 group-hover:opacity-100"
                  sizes="(max-width: 768px) 280px, 350px"
                />
                
                {/* Visual shading overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 pointer-events-none" />
                
                {/* Description Overlaid card */}
                <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 z-20 text-white flex flex-col justify-end h-1/2 space-y-1.5">
                  <span className="text-[#c5a880] text-[10px] font-semibold tracking-widest uppercase">
                    {item.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-light font-serif tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/60 font-light leading-relaxed line-clamp-3 md:line-clamp-none">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action tooltip */}
        <p className="text-center text-xs text-gray-400 font-light tracking-wide mt-4">
          Hover to pause slide progress • Drag to inspect assets
        </p>
      </section>

      <Footer />
    </main>
  );
}
