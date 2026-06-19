"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Booking Form State
  const [bookingType, setBookingType] = useState<"one-way" | "hourly">("one-way");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [duration, setDuration] = useState("2");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickup || !date || !time || (bookingType === "one-way" && !dropoff)) {
      return;
    }

    let text = "";
    if (bookingType === "one-way") {
      text = `Hello AMAQ, I would like to book a VIP Limousine (One-Way):\n\n📍 Pickup Location: ${pickup}\n🏁 Drop-off Location: ${dropoff}\n📅 Date: ${date}\n⏰ Pickup Time: ${time}`;
    } else {
      text = `Hello AMAQ, I would like to book a VIP Limousine (Hourly Charter):\n\n📍 Pickup Location: ${pickup}\n⏱️ Duration: ${duration} Hours\n📅 Date: ${date}\n⏰ Pickup Time: ${time}`;
    }

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/6580309353?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  const faqs = [
    {
      q: "What integrated services does AMAQ PTE LTD provide?",
      a: "AMAQ (UEN 202510150D) is a premier Singaporean transport company. We provide a unique combination of VIP Limousine & Chauffeur Services (including airport meet-and-greets, cross-border Singapore-Malaysia land trips, and hourly charters) and Global Cargo Logistics (Air Freight, Ocean Freight FCL/LCL, and Road Freight) under one corporate roof."
    },
    {
      q: "What is your chauffeur uniform and language standard?",
      a: "Every AMAQ chauffeur strictly adheres to a premium service protocol: they speak fluent English, have passed rigorous background checks, and dress in a professional dark suit and tie. All vehicles are late-model luxury sedans (S-Class/7-Series), executive SUVs, or VIP Sprinter vans."
    },
    {
      q: "Do you offer cross-border travel and customs clearance?",
      a: "Yes. We specialize in point-to-point and hourly cross-border land transits between Singapore and Malaysia (Johor Bahru, Kuala Lumpur, Malacca, Penang) with no vehicle swapping at borders. For cargo freight, we handle complete origin and destination customs clearance under DDP Incoterms."
    },
    {
      q: "What payment methods and credit terms are available?",
      a: "We support secure Bank Transfer payments billed per shipment. Corporate accounts can request Net 30 Credit Terms, enabling easy monthly consolidation of passenger travels and supply chain cargo shipments."
    },
    {
      q: "How can I contact AMAQ for bookings or cargo quotes?",
      a: "Our preferred channel of communication is WhatsApp at +65 80309353 for instant scheduling and active updates. For formal RFQs or partnerships, you can reach out via email to AMAQPTELTD@OUTLOOK.COM."
    }
  ];

  return (
    <main className="min-h-screen bg-[#fbf8f8] text-[#312e2c] flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[55vh] md:h-screen md:min-h-[750px] flex flex-col items-center justify-center pt-20">
        <Image
          src="https://ext.same-assets.com/3320819198/4008096964.webp"
          alt="Chauffeur in luxury car"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-gradient absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />

        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-white px-4">
          <h1 className="text-4xl md:text-7xl font-light text-center italic leading-tight">
            Prestige transit,<br />seamless logistics.
          </h1>
        </div>
      </section>

      {/* Booking Form Wrapper */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-4 -mt-20 md:-mt-48 pb-16">
        <form onSubmit={handleBookingSubmit} className="w-full bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-100">
          <div className="flex gap-4 mb-6 border-b border-gray-100 pb-3">
            <button
              type="button"
              onClick={() => setBookingType("one-way")}
              className={`pb-2 text-sm tracking-wide transition-colors ${
                bookingType === "one-way"
                  ? "text-[#312e2c] font-semibold border-b-2 border-[#312e2c]"
                  : "text-gray-400 pb-2 text-sm tracking-wide hover:text-gray-600 transition-colors"
              }`}
            >
              One way
            </button>
            <button
              type="button"
              onClick={() => setBookingType("hourly")}
              className={`pb-2 text-sm tracking-wide transition-colors ${
                bookingType === "hourly"
                  ? "text-[#312e2c] font-semibold border-b-2 border-[#312e2c]"
                  : "text-gray-400 pb-2 text-sm tracking-wide hover:text-gray-600 transition-colors"
              }`}
            >
              By the hour
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left">
            {/* Pickup */}
            <div className="md:col-span-1">
              <label className="block text-xs text-gray-500 mb-1.5 font-medium">Pickup location</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <input 
                  type="text" 
                  placeholder="Enter address" 
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  required
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#c5a880] transition-colors text-[#312e2c] bg-gray-50/50" 
                />
              </div>
            </div>

            {/* Drop-off / Duration */}
            <div className="md:col-span-1">
              <label className="block text-xs text-gray-500 mb-1.5 font-medium">
                {bookingType === "one-way" ? "Drop-off location" : "Duration (hours)"}
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  {bookingType === "one-way" ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L16 4m0 13V4m0 0L9 7" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </span>
                {bookingType === "one-way" ? (
                  <input 
                    type="text" 
                    placeholder="Enter address" 
                    value={dropoff}
                    onChange={(e) => setDropoff(e.target.value)}
                    required
                    className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#c5a880] transition-colors text-[#312e2c] bg-gray-50/50" 
                  />
                ) : (
                  <div className="relative w-full">
                    <select 
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#c5a880] transition-colors text-[#312e2c] bg-gray-50/50 appearance-none font-medium cursor-pointer"
                    >
                      <option value="2">2 Hours (Minimum)</option>
                      <option value="3">3 Hours</option>
                      <option value="4">4 Hours</option>
                      <option value="5">5 Hours</option>
                      <option value="6">6 Hours</option>
                      <option value="8">8 Hours</option>
                      <option value="10">10 Hours</option>
                      <option value="12">12 Hours</option>
                      <option value="24">24 Hours</option>
                    </select>
                    <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Date */}
            <div className="md:col-span-1">
              <label className="block text-xs text-gray-500 mb-1.5 font-medium">Date</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                <input 
                  type="date" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#c5a880] transition-colors text-[#312e2c] bg-gray-50/50" 
                />
              </div>
            </div>

            {/* Time */}
            <div className="md:col-span-1">
              <label className="block text-xs text-gray-500 mb-1.5 font-medium">Pickup time</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <input 
                  type="time" 
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#c5a880] transition-colors text-[#312e2c] bg-gray-50/50" 
                />
              </div>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full mt-6 bg-[#312e2c] hover:bg-[#1a1918] text-white py-4 rounded-xl font-medium tracking-wide transition shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966a9.89 9.89 0 00-6.98-2.878c-5.443 0-9.866 4.372-9.87 9.802 0 1.714.46 3.382 1.332 4.877L1.87 22.09l4.777-1.737zM17.41 15.36c-.298-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.568-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            </svg>
            Book via WhatsApp
          </button>
        </form>

        <p className="mt-8 text-gray-500 text-center text-sm md:text-base font-light">
          Set your pickup in Singapore & Malaysia. We'll be there on time.
        </p>
      </div>

      {/* Services Section - Brownish Palette */}
      <section className="py-20 px-6 bg-[#f5f0eb] border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Arrive at your best.</h2>
          <p className="text-gray-600 text-lg mb-12">Effortless journeys, tailored to you.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <Image
                src="https://ext.same-assets.com/3320819198/2124402487.webp"
                alt="Airport transfers"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 space-y-3">
                <p className="text-xs text-[#c5a880] font-semibold uppercase tracking-wider">Airport transfers</p>
                <h3 className="text-2xl font-light">Smooth landings, every time.</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light">Delayed flight? Chauffeurs track arrivals and adjust accordingly. Plus, you have 1 hour of complimentary wait time just in case.</p>
                <div className="pt-2">
                  <Link href="/services" className="inline-block border border-[#312e2c] text-[#312e2c] px-6 py-2 rounded-full text-sm font-medium hover:bg-[#312e2c] hover:text-white transition">Learn more</Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <Image
                src="https://ext.same-assets.com/3320819198/1323216716.webp"
                alt="Hourly hire"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 space-y-3">
                <p className="text-xs text-[#c5a880] font-semibold uppercase tracking-wider">Hourly and full day hire</p>
                <h3 className="text-2xl font-light">Seize the day.</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light">Reserve a dedicated chauffeur from 2 to 24 hours. They'll be on standby as long as you need them.</p>
                <div className="pt-2">
                  <Link href="/services" className="inline-block border border-[#312e2c] text-[#312e2c] px-6 py-2 rounded-full text-sm font-medium hover:bg-[#312e2c] hover:text-white transition">Learn more</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-500 hover:bg-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-500 hover:bg-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* We Move With You Section - Light Cream/White contrast */}
      <section className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-light leading-tight">We move<br />with you.</h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed">Experience first-class service tailored to your timeline. From airport transfers to hourly chauffeur service, our professional partners ensure your journey is seamless, comfortable, and reliable.</p>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg border border-gray-100">
            <Image
              src="/premium_chauffeur_ride.png"
              alt="Premium Chauffeur Ride"
              width={600}
              height={450}
              className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-6 bg-[#fbf8f8] border-t border-gray-150/40">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl overflow-hidden relative shadow-lg">
            <Image
              src="https://ext.same-assets.com/3320819198/1941821287.jpeg"
              alt="Chauffeur service"
              width={1200}
              height={700}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-8 text-white">
              <h3 className="text-2xl font-light mb-2">A welcome like no other</h3>
              <p className="text-white/80 font-light">The door is opened for you. Your luggage is stowed. Everything is taken care of.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expect Excellence Section */}
      <section className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Expect excellence.</h2>
          <p className="text-gray-600 text-lg mb-16 font-light">Leave the car refreshed and ready for what's next.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#f5f0eb] border border-[#c5a880]/20 rounded-3xl p-8 flex flex-col justify-between items-center text-center h-[340px] shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <h3 className="text-2xl font-medium text-[#312e2c]">Available worldwide</h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed">Expert local chauffeurs in 500+ cities</p>
              </div>
              
              {/* Graphic at the bottom */}
              <div className="relative w-36 h-24 flex items-end justify-center mb-2">
                {/* 3D-like User avatar silhouette */}
                <div className="relative w-12 h-12 bg-gray-400/20 rounded-full mb-5 flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-400/40 rounded-full" />
                </div>
                <div className="absolute bottom-0 w-24 h-10 bg-gray-400/20 rounded-t-full" />
                
                {/* Glassmorphic Like Bubble */}
                <div className="absolute top-2 left-3 bg-[#c5a880] text-white px-3 py-1 rounded-2xl rounded-bl-none shadow-md flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 fill-current text-white" viewBox="0 0 20 20">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                  </svg>
                  <span className="text-xs font-bold font-sans">1</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#f5f0eb] border border-[#c5a880]/20 rounded-3xl p-8 flex flex-col justify-between items-center text-center h-[340px] shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <h3 className="text-2xl font-medium text-[#312e2c]">High-end vehicles</h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed">Only the best recent models</p>
              </div>
              
              {/* Graphic at the bottom */}
              <div className="relative w-36 h-24 flex items-center justify-center mb-2">
                {/* 3D-like Sun */}
                <div className="absolute top-1.5 right-6 w-14 h-14 bg-gradient-to-br from-amber-400 to-[#c5a880] rounded-full shadow-md shadow-amber-500/10" />
                {/* 3D-like Glassmorphic Cloud */}
                <div className="absolute bottom-1 w-28 h-12 bg-white/40 backdrop-blur-md border border-white/50 rounded-full shadow-sm">
                  <div className="absolute -top-4 left-5 w-10 h-10 bg-white/40 backdrop-blur-md rounded-full" />
                  <div className="absolute -top-5.5 left-10 w-12 h-12 bg-white/40 backdrop-blur-md rounded-full" />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#f5f0eb] border border-[#c5a880]/20 rounded-3xl p-8 flex flex-col justify-between items-center text-center h-[340px] shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <h3 className="text-2xl font-medium text-[#312e2c]">Safe travels</h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed">Trained professionals and reliable pickups</p>
              </div>
              
              {/* Graphic at the bottom */}
              <div className="relative w-36 h-24 flex items-center justify-center mb-2">
                {/* Shackle of lock */}
                <div className="absolute top-2 w-14 h-16 border-4 border-gray-400/40 border-b-0 rounded-t-full" />
                {/* Body of lock */}
                <div className="absolute bottom-2 w-20 h-14 bg-gradient-to-br from-[#312e2c] to-[#1e1c1a] rounded-2xl shadow-md flex items-center justify-center border border-white/10">
                  <div className="w-2.5 h-2.5 bg-[#c5a880] rounded-full" />
                  <div className="absolute bottom-3 w-1 h-3 bg-[#c5a880]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-[#fbf8f8] border-t border-gray-150/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-[#c5a880] uppercase tracking-widest text-xs font-semibold block">Got Questions?</span>
            <h2 className="text-3xl md:text-5xl font-light text-[#312e2c]">Frequently Asked Questions</h2>
            <p className="text-gray-500 font-light text-sm leading-relaxed">Everything you need to know about AMAQ's limousine and logistics standards.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl border border-gray-150/80 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-gray-50/50 transition-colors"
                >
                  <span className="font-serif text-lg md:text-xl font-light text-[#312e2c]">{faq.q}</span>
                  <span className={`w-6 h-6 rounded-full bg-[#f5f0eb] flex items-center justify-center text-gray-500 transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7-7-7-7" />
                    </svg>
                  </span>
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openFaq === index ? 'max-h-[200px] border-t border-gray-100 p-6 bg-gray-50/30' : 'max-h-0'
                  }`}
                >
                  <p className="text-sm text-gray-600 font-light leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
