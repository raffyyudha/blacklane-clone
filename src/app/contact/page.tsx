"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  const [formType, setFormType] = useState<"limo" | "logistics">("limo");
  const [submitted, setSubmitted] = useState(false);

  // Limo Form State
  const [limoData, setLimoData] = useState({
    name: "",
    email: "",
    pickup: "",
    destination: "",
    date: "",
    vehicle: "Luxury Sedan (S-Class/7-Series)",
    occasion: "Airport Transfer"
  });

  // Logistics Form State
  const [logisticsData, setLogisticsData] = useState({
    name: "",
    email: "",
    company: "",
    mode: "Air Freight",
    incoterms: "DDP",
    packaging: "Pallets (Standard/Euro)",
    stackable: "Yes",
    customs: "Yes"
  });

  const handleLimoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (limoData.name && limoData.email && limoData.pickup) {
      const text = `Hello AMAQ, I would like to book a VIP Limousine Reservation:\n\n👤 Name: ${limoData.name}\n📧 Email: ${limoData.email}\n📍 Pickup Location: ${limoData.pickup}\n🏁 Drop-off Location: ${limoData.destination || "N/A"}\n📅 Date: ${limoData.date}\n🚗 Vehicle Class: ${limoData.vehicle}\n💼 Occasion Type: ${limoData.occasion}`;
      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/6580309353?text=${encodedText}`;
      window.open(whatsappUrl, "_blank");

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setLimoData({
          name: "",
          email: "",
          pickup: "",
          destination: "",
          date: "",
          vehicle: "Luxury Sedan (S-Class/7-Series)",
          occasion: "Airport Transfer"
        });
      }, 5000);
    }
  };

  const handleLogisticsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (logisticsData.name && logisticsData.email && logisticsData.company) {
      const text = `Hello AMAQ, I would like to request a Freight Logistics Quote:\n\n👤 Contact Name: ${logisticsData.name}\n📧 Corporate Email: ${logisticsData.email}\n🏢 Company Name: ${logisticsData.company}\n🚢 Transport Mode: ${logisticsData.mode}\n📜 Incoterms: ${logisticsData.incoterms}\n📦 Packaging Type: ${logisticsData.packaging}\n📦 Is Cargo Stackable?: ${logisticsData.stackable}\n🛃 Customs Clearance Needed?: ${logisticsData.customs}`;
      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/6580309353?text=${encodedText}`;
      window.open(whatsappUrl, "_blank");

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setLogisticsData({
          name: "",
          email: "",
          company: "",
          mode: "Air Freight",
          incoterms: "DDP",
          packaging: "Pallets (Standard/Euro)",
          stackable: "Yes",
          customs: "Yes"
        });
      }, 5000);
    }
  };

  return (
    <main className="min-h-screen bg-[#fbf8f8] text-[#312e2c] flex flex-col">
      <Header />

      {/* Contact Hero Section */}
      <section className="relative pt-48 pb-28 px-6 overflow-hidden">
        {/* Background Decorative Blur */}
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#c5a880]/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
          <span className="text-[#c5a880] uppercase tracking-[0.2em] text-xs font-semibold block mb-4">Contact Us</span>
          <h1 className="text-4xl md:text-7xl font-light mb-6 tracking-tight leading-[1.1] italic text-[#312e2c]">
            Get in touch<br />with our Singapore desk.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl font-light leading-relaxed">
            Reach Mohamad Sufyan and our multi-lingual passenger and freight dispatch teams. Available 24/7/365 to handle reservations, freight routing, and corporate account billing.
          </p>
        </div>
      </section>

      {/* Contact Details & Form Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full flex-1">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Inquiry Form Column */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 space-y-8 relative overflow-hidden">
            {submitted && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-6 transition-all duration-300 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#c5a880]/10 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#c5a880]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-light text-[#312e2c]">Request Received</h3>
                <p className="text-sm text-gray-500 max-w-sm mt-2 leading-relaxed">
                  Thank you for contacting AMAQ. A client services coordinator will process your request and follow up via email shortly.
                </p>
              </div>
            )}

            <div className="space-y-4">
              <span className="text-[#c5a880] font-semibold text-xs tracking-widest uppercase">Request Channels</span>
              <h2 className="text-3xl font-light text-[#312e2c]">Submit an Inquiry</h2>
              
              {/* Form Switcher tabs */}
              <div className="flex bg-gray-50 p-1.5 rounded-xl border border-gray-100">
                <button
                  type="button"
                  onClick={() => setFormType("limo")}
                  className={`flex-1 py-2.5 text-xs font-semibold rounded-lg tracking-wide transition-all ${
                    formType === "limo" ? "bg-white text-[#312e2c] shadow-sm" : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  VIP Limousine Reservation
                </button>
                <button
                  type="button"
                  onClick={() => setFormType("logistics")}
                  className={`flex-1 py-2.5 text-xs font-semibold rounded-lg tracking-wide transition-all ${
                    formType === "logistics" ? "bg-white text-[#312e2c] shadow-sm" : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  Freight Logistics Quote
                </button>
              </div>
            </div>

            {formType === "limo" ? (
              /* LIMOUSINE BOOKING FORM */
              <form onSubmit={handleLimoSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={limoData.name}
                      onChange={(e) => setLimoData({ ...limoData, name: e.target.value })}
                      placeholder="Enter full name" 
                      className="p-3 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-[#c5a880] transition-colors text-[#312e2c] bg-gray-50/50"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={limoData.email}
                      onChange={(e) => setLimoData({ ...limoData, email: e.target.value })}
                      placeholder="Enter email address" 
                      className="p-3 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-[#c5a880] transition-colors text-[#312e2c] bg-gray-50/50"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Pickup Address</label>
                    <input 
                      type="text" 
                      required
                      value={limoData.pickup}
                      onChange={(e) => setLimoData({ ...limoData, pickup: e.target.value })}
                      placeholder="e.g. Changi Airport / Hotel" 
                      className="p-3 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-[#c5a880] transition-colors text-[#312e2c] bg-gray-50/50"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Drop-off Address</label>
                    <input 
                      type="text" 
                      value={limoData.destination}
                      onChange={(e) => setLimoData({ ...limoData, destination: e.target.value })}
                      placeholder="Leave empty if Hourly service" 
                      className="p-3 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-[#c5a880] transition-colors text-[#312e2c] bg-gray-50/50"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Pickup Date</label>
                    <input 
                      type="date" 
                      required
                      value={limoData.date}
                      onChange={(e) => setLimoData({ ...limoData, date: e.target.value })}
                      className="p-3 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-[#c5a880] transition-colors text-[#312e2c] bg-gray-50/50"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Vehicle Class</label>
                    <select 
                      value={limoData.vehicle}
                      onChange={(e) => setLimoData({ ...limoData, vehicle: e.target.value })}
                      className="p-3 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-[#c5a880] bg-gray-50/50 text-[#312e2c]"
                    >
                      <option value="Luxury Sedan (S-Class/7-Series)">Luxury Sedan (S-Class/7-Series)</option>
                      <option value="Executive SUV (Escalade/Navigator)">Executive SUV (Escalade/Navigator)</option>
                      <option value="Sprinter / VIP Van">Sprinter / VIP Van</option>
                      <option value="Luxury Minibus / Coach">Luxury Minibus / Coach</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Occasion Type</label>
                    <select 
                      value={limoData.occasion}
                      onChange={(e) => setLimoData({ ...limoData, occasion: e.target.value })}
                      className="p-3 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-[#c5a880] bg-gray-50/50 text-[#312e2c]"
                    >
                      <option value="Airport Transfer">Airport Transfer</option>
                      <option value="Hourly Chauffeur Service">Hourly Chauffeur Service</option>
                      <option value="Cross-Border Transfer">Cross-Border Transfer</option>
                      <option value="VIP Limousine Service">VIP Limousine Service</option>
                      <option value="F1 Event Transportation">F1 Event Transportation</option>
                      <option value="Corporate Transfer">Corporate Transfer</option>
                    </select>
                  </div>
                </div>

                <div className="bg-[#f5f0eb]/70 p-4 rounded-xl text-xs text-gray-500 flex items-start gap-2.5 border border-gray-100">
                  <span className="text-[#c5a880] font-bold text-sm">💡</span>
                  <p className="leading-relaxed">
                    Our standard service tier includes **English-speaking drivers** matching AMAQ's uniform preference of a **Professional Dark Suit**. Airport pick-ups include 60 minutes of complimentary wait time.
                  </p>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#312e2c] hover:bg-[#1e1c1a] text-white py-4 rounded-xl font-medium tracking-wide shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Book Chauffeur Ride
                </button>
              </form>
            ) : (
              /* FREIGHT LOGISTICS QUOTE FORM */
              <form onSubmit={handleLogisticsSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Contact Name</label>
                    <input 
                      type="text" 
                      required
                      value={logisticsData.name}
                      onChange={(e) => setLogisticsData({ ...logisticsData, name: e.target.value })}
                      placeholder="Your full name" 
                      className="p-3 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-[#c5a880] transition-colors text-[#312e2c] bg-gray-50/50"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Corporate Email</label>
                    <input 
                      type="email" 
                      required
                      value={logisticsData.email}
                      onChange={(e) => setLogisticsData({ ...logisticsData, email: e.target.value })}
                      placeholder="Company email address" 
                      className="p-3 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-[#c5a880] transition-colors text-[#312e2c] bg-gray-50/50"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Company Name</label>
                  <input 
                    type="text" 
                    required
                    value={logisticsData.company}
                    onChange={(e) => setLogisticsData({ ...logisticsData, company: e.target.value })}
                    placeholder="Enter corporate registered name" 
                    className="p-3 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-[#c5a880] transition-colors text-[#312e2c] bg-gray-50/50"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Transport Mode</label>
                    <select 
                      value={logisticsData.mode}
                      onChange={(e) => setLogisticsData({ ...logisticsData, mode: e.target.value })}
                      className="p-3 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-[#c5a880] bg-gray-50/50 text-[#312e2c]"
                    >
                      <option value="Air Freight">Air Freight</option>
                      <option value="Ocean LCL (Less Container)">Ocean LCL (Less Container)</option>
                      <option value="Ocean FCL (Full Container)">Ocean FCL (Full Container)</option>
                      <option value="Road Transport">Road Transport</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Incoterms</label>
                    <select 
                      value={logisticsData.incoterms}
                      onChange={(e) => setLogisticsData({ ...logisticsData, incoterms: e.target.value })}
                      className="p-3 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-[#c5a880] bg-gray-50/50 text-[#312e2c]"
                    >
                      <option value="DDP (Delivered Duty Paid)">DDP (Delivered Duty Paid)</option>
                      <option value="EXW (Ex Works)">EXW (Ex Works)</option>
                      <option value="FOB (Free On Board)">FOB (Free On Board)</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Packaging Type</label>
                    <select 
                      value={logisticsData.packaging}
                      onChange={(e) => setLogisticsData({ ...logisticsData, packaging: e.target.value })}
                      className="p-3 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-[#c5a880] bg-gray-50/50 text-[#312e2c]"
                    >
                      <option value="Pallets (Standard/Euro)">Pallets (Standard/Euro)</option>
                      <option value="Crates / Cases">Crates / Cases</option>
                      <option value="Loose / Bulk">Loose / Bulk</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Is Cargo Stackable?</label>
                    <select 
                      value={logisticsData.stackable}
                      onChange={(e) => setLogisticsData({ ...logisticsData, stackable: e.target.value })}
                      className="p-3 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-[#c5a880] bg-gray-50/50 text-[#312e2c]"
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Customs Clearance Needed?</label>
                    <select 
                      value={logisticsData.customs}
                      onChange={(e) => setLogisticsData({ ...logisticsData, customs: e.target.value })}
                      className="p-3 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-[#c5a880] bg-gray-50/50 text-[#312e2c]"
                    >
                      <option value="Yes (Origin & Destination)">Yes (Origin & Destination)</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#312e2c] hover:bg-[#1e1c1a] text-white py-4 rounded-xl font-medium tracking-wide shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Submit RFQ Quote Request
                </button>
              </form>
            )}
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Quick Contact Cards */}
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="text-[#c5a880] font-semibold text-xs tracking-widest uppercase">Support channels</span>
                <h2 className="text-3xl font-light text-[#312e2c]">Corporate Desk & Support</h2>
              </div>

              <div className="space-y-6">
                
                {/* WhatsApp Card */}
                <div className="p-6 rounded-2xl bg-green-50/40 border border-green-100 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966a9.89 9.89 0 00-6.98-2.878c-5.443 0-9.866 4.372-9.87 9.802 0 1.714.46 3.382 1.332 4.877L1.87 22.09l4.777-1.737zM17.41 15.36c-.298-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.568-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 text-sm">Preferred Channel: WhatsApp</h4>
                    <p className="text-xs text-green-700 font-light mt-1">Direct contact for quick bookings and urgent dispatch coordinates.</p>
                    <a 
                      href="https://wa.me/6580309353"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold py-2 px-4 rounded-lg shadow-sm transition-all"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Direct Line */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#f5f0eb] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#c5a880]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#312e2c] text-sm">Hotline Support</h4>
                    <p className="text-sm text-gray-500 font-light mt-1">Singapore Desk: +65 80309353</p>
                  </div>
                </div>

                {/* Emails */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#f5f0eb] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#c5a880]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#312e2c] text-sm">General & Billing Inquiries</h4>
                    <p className="text-sm text-gray-500 font-light mt-1">Client Services: AMAQPTELTD@OUTLOOK.COM</p>
                  </div>
                </div>

                {/* Headquarters */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#f5f0eb] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#c5a880]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#312e2c] text-sm">Corporate Headquarters</h4>
                    <p className="text-sm text-gray-500 font-light mt-1">AMAQ PTE LTD</p>
                    <p className="text-sm text-gray-500 font-light">842C Tampines St 82, Singapore 523842</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Billing specs guidelines */}
            <div className="bg-[#f5f0eb] p-6 rounded-2xl border border-gray-200/50 space-y-3.5">
              <h4 className="font-semibold text-[#312e2c] text-sm">Corporate Invoicing & Terms</h4>
              <p className="text-xs text-gray-600 leading-relaxed font-light">
                For registered corporate partners, AMAQ supports secure **Bank Transfer** payments billed **Per Shipment**. We offer customizable **Net 30 Credit Terms** upon credit check approval.
              </p>
              <div className="text-[10px] text-gray-400 font-semibold tracking-wide uppercase border-t border-gray-200 pt-2 flex justify-between">
                <span>UEN: 202510150D</span>
                <span>Billing Cycle: Net 30</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
