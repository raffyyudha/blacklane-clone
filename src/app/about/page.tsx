"use client";

import Image from "next/image";
import Link from "next/link";
import { Shield, Car, Globe, CreditCard, Award, PhoneCall, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  const features = [
    {
      title: "Professional Vetting",
      desc: "Local drivers fluent in English, background-checked, matching our uniform preference of a professional dark suit and tie.",
      icon: <Shield className="w-8 h-8 text-[#c5a880]" />,
    },
    {
      title: "Luxury Fleet",
      desc: "Late-model executive vehicles (under 3 years old) including Mercedes S-Class, BMW 7-Series, and high-capacity Sprinter vans.",
      icon: <Car className="w-8 h-8 text-[#c5a880]" />,
    },
    {
      title: "Multimodal Cargo",
      desc: "Daily tracking for Air Freight, Ocean (FCL/LCL), and Road transport under secure DDP Incoterms.",
      icon: <Globe className="w-8 h-8 text-[#c5a880]" />,
    },
    {
      title: "Net 30 Billing",
      desc: "Flexible credit invoicing. Per-shipment billing or consolidated monthly invoicing via Bank Transfer.",
      icon: <CreditCard className="w-8 h-8 text-[#c5a880]" />,
    },
    {
      title: "Singapore Core",
      desc: "Registered under UEN 202510150D. Serving Singapore, Johor Bahru, KL, Malacca, and Penang cross-border transits.",
      icon: <Award className="w-8 h-8 text-[#c5a880]" />,
    },
    {
      title: "24/7 Dispatch",
      desc: "Directly connected via our WhatsApp hotline. Instantly handle booking modifications and tracking coordinates.",
      icon: <PhoneCall className="w-8 h-8 text-[#c5a880]" />,
    },
  ];

  return (
    <main className="min-h-screen bg-[#fbf8f8] text-[#312e2c] flex flex-col justify-between overflow-x-hidden font-sans">
      <Header />

      {/* Hero Section with Background Image (Matches Screenshot 1) */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center pt-20 overflow-hidden">
        <Image
          src="https://ext.same-assets.com/3320819198/4008096964.webp"
          alt="Chauffeur service"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#fbf8f8]" />

        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center text-white px-6 space-y-6">
          <h1 className="text-4xl md:text-7xl font-light italic leading-tight font-serif">
            Become an AMAQ partner
          </h1>
          <p className="text-base md:text-xl text-white/80 max-w-2xl font-light">
            Amplify your supply chain and executive travel with a partner matching your caliber.
          </p>
          <div className="pt-4">
            <a
              href="https://wa.me/6580309353"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#312e2c] hover:bg-black text-white px-8 py-3.5 rounded-full font-semibold tracking-wide shadow-md transition-all duration-300"
            >
              Apply now
            </a>
          </div>
          <p className="text-xs text-[#312e2c]/70 font-medium">
            Straightforward registration with support available throughout.
          </p>
        </div>
      </section>

      {/* 3x2 Grid Section (Matches Screenshot 2) */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col items-start text-left space-y-4 hover:shadow-md transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
                {feat.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#312e2c]">{feat.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Alternating Feature Sections (Matches Screenshot 3/4/5) */}
      <section className="py-12 space-y-24">
        
        {/* Block 1: Left Text, Right Image */}
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-light font-serif tracking-tight text-[#312e2c] leading-tight">
              World class chauffeurs going the extra mile
            </h2>
            <p className="text-gray-600 font-light leading-relaxed text-base md:text-lg">
              Mohamad Sufyan founded AMAQ to guarantee the highest standard of passenger comfort. Our executive chauffeurs speak fluent English, wear professional dark suits, and coordinate meet-and-greets at Singapore Changi Airport. Operating late-model Mercedes S-Class, BMW 7-Series, and executive Sprinters, we ensure every corporate journey is executed with precision.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
            <Image
              src="https://ext.same-assets.com/3320819198/2124402487.webp"
              alt="Chauffeur opening door"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
        </div>

        {/* Block 2: Left Image, Right Text */}
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
          <div className="lg:order-2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-light font-serif tracking-tight text-[#312e2c] leading-tight">
              Multimodal freight logistics made simple
            </h2>
            <p className="text-gray-600 font-light leading-relaxed text-base md:text-lg">
              We bridge VIP passenger transits and commercial logistics under one corporate roof. Routing air freight, ocean LCL/FCL containers, and road cargo between Singapore and Malaysia. We handle standard and Euro pallets under strict DDP Incoterms and clear checkpoints with zero delay.
            </p>
          </div>
          <div className="lg:order-1 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
            <Image
              src="https://ext.same-assets.com/3320819198/1323216716.webp"
              alt="Cargo plane loading"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
        </div>

        {/* Block 3: Left Text, Right Image */}
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-light font-serif tracking-tight text-[#312e2c] leading-tight">
              Corporate registry and Net 30 billing terms
            </h2>
            <p className="text-gray-600 font-light leading-relaxed text-base md:text-lg">
              AMAQ PTE LTD is registered under UEN 202510150D in Singapore. Headquartered at 842C Tampines St 82, we streamline supply chain logistics and executive rides into consolidated UEN-compliant invoices. Corporate accounts can request Net 30 Credit terms billed per shipment.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
            <Image
              src="https://ext.same-assets.com/3320819198/1941821287.jpeg"
              alt="Luxury car passenger"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
        </div>

      </section>

      {/* Corporate Call to Action */}
      <section className="py-28 px-6 bg-[#f5f0eb] border-t border-gray-200 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight italic font-serif text-[#312e2c]">Ready to travel & ship?</h2>
          <p className="text-gray-600 font-light max-w-xl mx-auto leading-relaxed text-sm md:text-base">
            Set up an account with Mohamad Sufyan. Billed per shipment, Net 30 corporate terms, and dedicated dispatch lines via WhatsApp.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/6580309353" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#c5a880] hover:bg-[#b0936b] text-[#1e1c1a] px-8 py-3.5 rounded-full font-semibold tracking-wide shadow-md transition-all duration-300 flex items-center justify-center gap-1.5"
            >
              {/* WhatsApp Icon */}
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966a9.89 9.89 0 00-6.98-2.878c-5.443 0-9.866 4.372-9.87 9.802 0 1.714.46 3.382 1.332 4.877L1.87 22.09l4.777-1.737z" />
              </svg>
              Chat on WhatsApp
            </a>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto border border-gray-300 hover:border-gray-500 text-gray-700 px-8 py-3.5 rounded-full font-medium tracking-wide transition-colors duration-300 flex items-center justify-center"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
