"use client";

import { useState } from "react";
import { X, Send } from "lucide-react";

export default function WhatsAppFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const defaultText = message.trim() || "Hello AMAQ, I have an inquiry regarding your Limousine & Logistics services.";
    const encodedText = encodeURIComponent(defaultText);
    const whatsappUrl = `https://wa.me/6580309353?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
    setMessage("");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Chat Window */}
      <div
        className={`absolute bottom-20 right-0 w-80 md:w-96 bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 transition-all duration-500 transform origin-bottom-right ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-75 opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-[#075E54] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              {/* Fake Avatar */}
              <div className="w-10 h-10 rounded-full bg-[#128C7E] flex items-center justify-center font-bold text-sm text-white border border-white/20">
                AQ
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] rounded-full border-2 border-white" />
            </div>
            <div>
              <h4 className="font-semibold text-sm leading-tight text-white">AMAQ Limousine & Logistics</h4>
              <p className="text-white/80 text-[10px] tracking-wider uppercase mt-0.5">Online Support</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Close chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Body */}
        <div className="p-5 bg-[#ECE5DD] max-h-[300px] overflow-y-auto space-y-4">
          <div className="bg-white rounded-2xl p-3.5 shadow-sm text-sm text-gray-700 max-w-[85%] rounded-tl-none leading-relaxed">
            <p className="font-semibold text-xs text-[#075E54] mb-1">AMAQ Assistant</p>
            Hello! How can we assist you with our VIP chauffeur or global cargo services today?
            <span className="block text-[9px] text-gray-400 text-right mt-1.5 font-medium">Just now</span>
          </div>
        </div>

        {/* Chat Form */}
        <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-100 flex gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 px-4 py-2.5 border border-gray-200 rounded-full text-sm text-[#312e2c] focus:outline-none focus:border-[#c5a880] transition-colors"
          />
          <button
            type="submit"
            className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center transition-colors shadow-md flex-shrink-0"
            aria-label="Send"
          >
            <Send className="w-4 h-4 ml-0.5" />
          </button>
        </form>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95 group relative"
        aria-label="Open WhatsApp chat"
      >
        {/* Official WhatsApp SVG Icon */}
        <svg className="w-8 h-8 fill-current text-white transform group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966a9.89 9.89 0 00-6.98-2.878c-5.443 0-9.866 4.372-9.87 9.802 0 1.714.46 3.382 1.332 4.877L1.87 22.09l4.777-1.737zM17.41 15.36c-.298-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.568-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        </svg>

        {/* Small floating tooltip */}
        <span className="absolute -top-12 right-0 bg-[#312e2c] text-white text-xs px-3.5 py-1.5 rounded-full shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium tracking-wide pointer-events-none">
          Chat with Support
        </span>
      </button>
    </div>
  );
}
