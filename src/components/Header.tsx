"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4 pointer-events-none">
      <div 
        className={`max-w-7xl mx-auto rounded-full bg-[#1e1c1a]/90 backdrop-blur-md border transition-all duration-500 shadow-xl pointer-events-auto flex items-center justify-between ${
          isScrolled 
            ? "px-6 py-3 border-white/10 scale-98" 
            : "px-8 py-4.5 border-white/5"
        }`}
      >
        {/* Brand Logo */}
        <Link href="/" className="flex flex-col items-start group">
          <span className="text-xl md:text-2xl font-light tracking-[0.2em] text-[#c5a880] group-hover:text-white transition-colors duration-300" style={{ fontFamily: "'PPFragment', Georgia, serif" }}>
            AMAQ
          </span>
          <span className="text-[8px] md:text-[9px] font-medium tracking-[0.3em] text-white/50 group-hover:text-[#c5a880] transition-colors duration-300 -mt-1 uppercase">
            Limousine & Logistics
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white/90 text-sm font-medium tracking-wide">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`transition-all hover:text-white relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#c5a880] after:transform after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                pathname === item.href 
                  ? "text-[#c5a880] after:scale-x-100 after:bg-[#c5a880]" 
                  : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          <a
            href="https://wa.me/6580309353"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#c5a880] hover:bg-[#b0936b] text-[#1e1c1a] px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-1.5 shadow-md ml-2 hover:-translate-y-0.5"
          >
            {/* WhatsApp Icon */}
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966a9.89 9.89 0 00-6.98-2.878c-5.443 0-9.866 4.372-9.87 9.802 0 1.714.46 3.382 1.332 4.877L1.87 22.09l4.777-1.737zM17.41 15.36c-.298-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.568-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            </svg>
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-[#c5a880] transition-colors focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-0 bg-[#fbf8f8] z-40 flex flex-col items-center justify-center gap-10 transition-all duration-500 ease-in-out md:hidden pointer-events-auto ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className={`text-2xl font-light tracking-widest hover:text-[#c5a880] transition-all ${
              pathname === item.href 
                ? "text-[#c5a880] font-medium scale-105" 
                : "text-[#312e2c]"
            }`}
          >
            {item.name}
          </Link>
        ))}
        
        <a
          href="https://wa.me/6580309353"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          className="mt-4 bg-[#312e2c] hover:bg-black text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966a9.89 9.89 0 00-6.98-2.878c-5.443 0-9.866 4.372-9.87 9.802 0 1.714.46 3.382 1.332 4.877L1.87 22.09l4.777-1.737zM17.41 15.36c-.298-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.568-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          </svg>
          Chat on WhatsApp
        </a>
      </div>
    </header>
  );
}
