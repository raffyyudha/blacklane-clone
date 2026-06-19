"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plane, Shield, Clock, Compass, HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Services() {
  const [activeTab, setActiveTab] = useState<"chauffeur" | "logistics">("chauffeur");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const chauffeurServices = [
    {
      title: "Airport & Hotel Transfers",
      tagline: "Smooth arrivals, meet-and-greet protocols.",
      desc: "Our professional chauffeurs track your flight's status in real-time, adapting automatically to delays. Includes 60 minutes of complimentary wait time at Singapore Changi or Seletar Airport, an executive meet-and-greet in the arrivals hall, and luggage handling. Chauffeurs match our strict uniform preference of a professional dark suit and speak fluent English.",
      image: "https://ext.same-assets.com/3320819198/2124402487.webp",
      features: [
        "60-minute complimentary waiting time",
        "Real-time flight tracking & adjustment",
        "Arrival meet-and-greet paging board",
        "Uniform: Professional Dark Suit & Tie"
      ]
    },
    {
      title: "Hourly Chauffeur Service",
      tagline: "Uncompromised flexibility, on your terms.",
      desc: "Reserve a dedicated premium vehicle and chauffeur from 2 to 24 hours. Perfect for multiple business meetings, corporate transfers, or shopping excursions where a driver needs to remain on standby. Choose between luxury sedans or executive SUVs.",
      image: "/premium_chauffeur_ride.png",
      features: [
        "Dedicated professional chauffeur on standby",
        "Unlimited stopovers within your booking time",
        "Late-model vehicle preferences (under 3 years old)",
        "Flexible hourly booking intervals"
      ]
    },
    {
      title: "Cross-Border Singapore-Malaysia",
      tagline: "Point-to-point land travel across borders.",
      desc: "Travel directly between Singapore and Malaysia (Johor Bahru, Kuala Lumpur, Malacca, and Penang) in absolute comfort. Avoid airport lines and train check-ins with our premium executive SUVs or high-capacity luxury vans. Seamless border clearance with no car switching.",
      image: "/gallery_executive_car.png",
      features: [
        "Direct door-to-door cross-border transfer",
        "No vehicle switching at the border checkpoint",
        "Comfortable long-distance leather cabins",
        "Point-to-Point flat-rate billing"
      ]
    },
    {
      title: "VIP Events & F1 Dispatch",
      tagline: "Elite execution for major gatherings.",
      desc: "From the Singapore F1 Grand Prix to high-profile corporate summits, we handle complex multi-car logistics. Ensure your guests, executives, and VIPs arrive on time and in perfect comfort under the care of a dedicated event dispatch team.",
      image: "https://ext.same-assets.com/3320819198/1941821287.jpeg",
      features: [
        "Dedicated event dispatch coordinators",
        "Multi-vehicle fleet coordination & tracking",
        "VIP guest greeting & staging protocols",
        "High-capacity luxury minibus & coach availability"
      ]
    }
  ];

  const logisticsServices = [
    {
      title: "Air Freight Forwarding",
      tagline: "Express global transit for critical cargo.",
      desc: "For your most urgent high-value shipments, our air freight services ensure rapid airport-to-airport delivery. We handle standard and Euro pallets with full security protocols, routing cargo through major international hubs directly to destination doors.",
      image: "/logistics_cargo.png",
      features: [
        "Express airport-to-airport routing",
        "Secure standard & Euro pallet handling",
        "Full customs import/export permit declarations",
        "Specialized handling for high-value cargo"
      ]
    },
    {
      title: "Ocean Freight (FCL & LCL)",
      tagline: "Cost-effective international shipping.",
      desc: "Whether you need a Full Container Load (FCL) or Less than Container Load (LCL) shipping, we provide reliable sea lanes. Perfect for industrial products, vehicle parts, and palletized materials requiring global distribution. Stackable cargo accepted.",
      image: "/ocean_cargo.png",
      features: [
        "Full Container Load (FCL) space contracts",
        "Less than Container (LCL) consolidation",
        "Euro & Standard pallet optimization",
        "Accommodations for stackable cargo"
      ]
    },
    {
      title: "Road Transport & Distribution",
      tagline: "Door-to-door land shipping and logistics.",
      desc: "Operating a versatile road cargo fleet, we provide seamless door-to-door road freight across Singapore and Malaysia. Fully compliant with DDP Incoterms, we take care of cross-border customs declarations and terminal handovers. Delivery type is fully door-to-door.",
      image: "https://ext.same-assets.com/3320819198/1323216716.webp",
      features: [
        "Cross-border trucking cargo (SG-MY)",
        "DDP (Delivered Duty Paid) Incoterms execution",
        "GPS tracking & daily status updates",
        "Door-to-Door terminal delivery setup"
      ]
    },
    {
      title: "Customs Clearance Brokerage",
      tagline: "Origin and destination clearance compliance.",
      desc: "Clear your cargo without delays. Our in-house brokerage team coordinates directly with customs at both origin and destination. We ensure fully compliant tariff classifications, UEN registration checkouts, and clean permit handoffs.",
      image: "https://ext.same-assets.com/3320819198/4008096964.webp",
      features: [
        "Import/Export permit declarations",
        "Origin & Destination customs clearance",
        "DDP tariff advisory services",
        "Integrated corporate account invoicing"
      ]
    }
  ];

  const serviceFaqs = [
    {
      q: "Can anyone become an AMAQ corporate partner?",
      a: "Yes. We partner with local firms, multinational companies, and travel coordinators who require consistent, premium transport and logistics. To set up an account, contact Mohamad Sufyan. We will verify your corporate credentials and assign Net 30 payment terms."
    },
    {
      q: "How do you track delayed flights and arrivals?",
      a: "We integrate flight tracking APIs. When you submit your booking with flight numbers, our dispatch dashboard tracks real-time departures, holding, and arrivals. Chauffeurs adjust their pickup target automatically with no delay penalties."
    },
    {
      q: "Which vehicles are available in your fleet?",
      a: "We deploy premium late-model units: Mercedes S-Class, BMW 7-Series for executive sedans; Toyota Alphard/Vellfire for luxury multi-purpose travel; Cadillac Escalade; and VIP Mercedes Sprinters for group transits."
    },
    {
      q: "What is the policy for cross-border transit?",
      a: "Our cross-border Singapore-Malaysia journeys are fully private. Chauffeurs clear custom checkpoints directly. Passengers stay in the luxury vehicle without switching cars or handling luggage, guaranteeing a seamless trip."
    }
  ];

  const currentServices = activeTab === "chauffeur" ? chauffeurServices : logisticsServices;

  return (
    <main className="min-h-screen bg-[#fbf8f8] text-[#312e2c] flex flex-col justify-between overflow-x-hidden font-sans">
      <Header />

      {/* Services Hero Section */}
      <section className="relative pt-52 pb-36 px-6 overflow-hidden">
        {/* Glowing atmospheric circles */}
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#c5a880]/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-amber-500/[0.02] rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a880]/10 border border-[#c5a880]/20">
            <span className="w-2 h-2 rounded-full bg-[#c5a880] animate-pulse" />
            <span className="text-[#c5a880] uppercase tracking-[0.25em] text-[10px] font-semibold">
              AMAQ Solutions
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-light tracking-tight leading-[1.05] italic font-serif text-[#312e2c]">
            Services designed<br />around your timeline.
          </h1>
          <p className="text-lg md:text-xl text-[#312e2c]/75 max-w-3xl font-light leading-relaxed pt-2">
            Providing first-class passenger transfers and comprehensive global freight logistics, backed by UEN 202510150D.
          </p>

          {/* Custom Tabs switcher */}
          <div className="mt-14 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button
              onClick={() => setActiveTab("chauffeur")}
              className={`px-8 py-4.5 rounded-2xl font-semibold tracking-wide transition-all duration-300 text-sm flex items-center justify-center gap-2 ${
                activeTab === "chauffeur"
                  ? "bg-[#c5a880] text-[#1e1c1a] shadow-lg shadow-[#c5a880]/15"
                  : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200"
              }`}
            >
              VIP Chauffeur Services
            </button>
            <button
              onClick={() => setActiveTab("logistics")}
              className={`px-8 py-4.5 rounded-2xl font-semibold tracking-wide transition-all duration-300 text-sm flex items-center justify-center gap-2 ${
                activeTab === "logistics"
                  ? "bg-[#c5a880] text-[#1e1c1a] shadow-lg shadow-[#c5a880]/15"
                  : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200"
              }`}
            >
              Logistics & Cargo
            </button>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full flex-1">
        <div className="space-y-36">
          {currentServices.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Column */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="overflow-hidden rounded-[2.5rem] shadow-2xl aspect-[3/2] relative border border-gray-200 bg-white">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out opacity-95 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
                <div className="absolute -inset-4 border border-gray-200 rounded-[2.8rem] -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />
              </div>

              {/* Content Column */}
              <div className="w-full lg:w-1/2 space-y-6">
                <span className="text-[#c5a880] font-semibold text-xs tracking-widest uppercase block">
                  0{index + 1} — {activeTab === "chauffeur" ? "Executive Transit" : "Cargo Operations"}
                </span>
                <h2 className="text-3xl md:text-5xl font-light font-serif text-[#312e2c] leading-tight">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-500 italic font-light">{service.tagline}</p>
                <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base">{service.desc}</p>

                {/* Features List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5 pt-6 border-t border-gray-150">
                  {service.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880] mt-2 flex-shrink-0" />
                      <span className="text-xs text-gray-500 font-light leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <Link
                    href={{
                      pathname: "/contact",
                      query: { type: activeTab, service: service.title }
                    }}
                    className="inline-flex items-center gap-2 bg-[#312e2c] hover:bg-[#1a1918] text-white px-8 py-4 rounded-xl font-medium tracking-wide transition-all duration-300 shadow-md text-sm"
                  >
                    {activeTab === "chauffeur" ? "Request Reservation" : "Request Freight Quote"} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sky Blue Section: Unlock Global Demand (as requested to mirror screenshot 2) */}
      <section className="bg-[#a7c4e7] py-24 px-6 text-[#312e2c] text-center relative overflow-hidden">
        {/* Subtle grid pattern mask */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <h2 className="text-5xl md:text-7xl font-light font-serif tracking-tight leading-tight">
            Unlock global demand.
          </h2>
          <p className="text-base md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Connect with clients from around the world via our corporate network and specialized support. Take only the service slots and freight schedules that suit your timeline.
          </p>
        </div>
      </section>

      {/* Cream Section: Testimonial Quote (as requested to mirror screenshot 3) */}
      <section className="bg-[#fbf8f8] py-28 px-6 text-[#312e2c] text-center border-t border-b border-gray-200/40 relative">
        <div className="max-w-5xl mx-auto space-y-8">
          <p className="text-3xl md:text-5xl font-light font-serif italic text-slate-800 leading-normal max-w-4xl mx-auto">
            "AMAQ is 60% of our dispatch efficiency. We've grown from regional transfers to cross-border routes and sea freight with them."
          </p>
          <div className="space-y-1">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">Marcus T.</p>
            <p className="text-xs text-gray-400 font-light">Operations Lead, Singapore Corporation</p>
          </div>
        </div>
      </section>

      {/* FAQ & Split layout Section (as requested to mirror screenshot 4) */}
      <section className="py-28 px-6 bg-[#f5f0eb] text-[#312e2c]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: FAQs accordions */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-5xl font-light font-serif tracking-tight text-[#312e2c]">FAQs</h2>
              <p className="text-gray-500 font-light text-sm mt-1.5">Straightforward answers about our chauffeur and cargo clearances.</p>
            </div>
            
            <div className="space-y-4">
              {serviceFaqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="border-b border-gray-300 pb-5"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left flex justify-between items-center gap-4 py-2 hover:opacity-80 transition-opacity"
                  >
                    <span className="font-serif text-lg md:text-xl font-light text-[#312e2c]">{faq.q}</span>
                    <span className={`w-5 h-5 flex items-center justify-center text-gray-500 transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7-7-7-7" />
                      </svg>
                    </span>
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      openFaq === index ? "max-h-[300px] mt-3" : "max-h-0"
                    }`}
                  >
                    <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Chauffeur Door-Opening Image */}
          <div className="lg:col-span-5 relative group">
            <div className="overflow-hidden rounded-[2rem] shadow-2xl aspect-[4/5] relative border border-gray-200">
              <Image
                src="https://ext.same-assets.com/3320819198/4008096964.webp"
                alt="Chauffeur opening vehicle door"
                fill
                className="object-cover opacity-95 group-hover:scale-101 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 450px"
              />
            </div>
            <div className="absolute -inset-3 border border-gray-300 rounded-[2.3rem] -z-10 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-300" />
          </div>

        </div>
      </section>

      {/* Trust Corporate Banner */}
      <section className="bg-[#f5f0eb] py-24 px-6 text-center border-t border-gray-200">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-[#c5a880] uppercase tracking-widest text-xs font-semibold block">Billing & Accounts</span>
          <h3 className="text-3xl md:text-4xl font-light font-serif text-[#312e2c]">Setup a corporate account for AMAQ services.</h3>
          <p className="text-gray-600 font-light max-w-2xl mx-auto leading-relaxed text-sm">
            We simplify travel and shipping invoices. Corporate clients receive UEN-compliant billing (UEN 202510150D), payment by Bank Transfer per shipment, and Net 30 Credit Terms.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-[#c5a880] hover:bg-[#b0936b] text-[#1e1c1a] px-8 py-4.5 rounded-xl font-semibold tracking-wide transition-all duration-300 shadow-md text-sm"
            >
              Open Corporate Account
            </Link>
            <a
              href="https://wa.me/6580309353"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-black px-8 py-4.5 rounded-xl tracking-wide transition-all duration-300 font-semibold text-sm"
            >
              {/* WhatsApp Icon */}
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966a9.89 9.89 0 00-6.98-2.878c-5.443 0-9.866 4.372-9.87 9.802 0 1.714.46 3.382 1.332 4.877L1.87 22.09l4.777-1.737zM17.41 15.36c-.298-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.568-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
