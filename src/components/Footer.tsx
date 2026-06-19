import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f5f0eb] text-[#312e2c] py-16 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Row with Logo and Contact channel (No app store badges) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-gray-200 pb-8">
          <Link href="/" className="flex flex-col items-start group mb-8 md:mb-0">
            <span className="text-3xl font-light tracking-[0.2em] text-[#c5a880] group-hover:text-[#312e2c] transition-colors duration-300" style={{ fontFamily: "'PPFragment', Georgia, serif" }}>
              AMAQ
            </span>
            <span className="text-[10px] font-medium tracking-[0.3em] text-[#312e2c]/50 group-hover:text-[#c5a880] transition-colors duration-300 -mt-1 uppercase">
              Limousine & Logistics
            </span>
          </Link>
          
          <div className="flex flex-col items-start md:items-end gap-1 text-left md:text-right">
            <span className="text-xs font-semibold tracking-wider uppercase text-gray-400">Direct Channel</span>
            <a 
              href="https://wa.me/6580309353" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c5a880] hover:text-[#b0936b] transition-colors font-medium flex items-center gap-1.5"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              WhatsApp Support: +65 80309353
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12 text-sm">
          <div>
            <h4 className="font-semibold mb-4 text-[#312e2c]">Company</h4>
            <ul className="space-y-3.5 text-gray-600 font-light">
              <li><Link href="/about" className="hover:text-black transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-black transition-colors">Our Services</Link></li>
              <li><Link href="/gallery" className="hover:text-black transition-colors">Asset Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-black transition-colors">Contact Support</Link></li>
              <li><span className="text-gray-400 cursor-default">Careers (Suit Needed)</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-[#312e2c]">Limo Services</h4>
            <ul className="space-y-3.5 text-gray-600 font-light">
              <li><Link href="/services" className="hover:text-black transition-colors">Airport Pick-up</Link></li>
              <li><Link href="/services" className="hover:text-black transition-colors">Hourly Chauffeur</Link></li>
              <li><Link href="/services" className="hover:text-black transition-colors">VIP Limo Service</Link></li>
              <li><Link href="/services" className="hover:text-black transition-colors">Cross-Border Service</Link></li>
              <li><Link href="/services" className="hover:text-black transition-colors">F1 Event Chauffeur</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-[#312e2c]">Logistics Operations</h4>
            <ul className="space-y-3.5 text-gray-600 font-light">
              <li><Link href="/services" className="hover:text-black transition-colors">Air Freight Shipping</Link></li>
              <li><Link href="/services" className="hover:text-black transition-colors">Ocean LCL Cargo</Link></li>
              <li><Link href="/services" className="hover:text-black transition-colors">Ocean FCL Cargo</Link></li>
              <li><Link href="/services" className="hover:text-black transition-colors">Road Transport</Link></li>
              <li><Link href="/services" className="hover:text-black transition-colors">Customs Clearance</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-[#312e2c]">Coverage Hubs</h4>
            <ul className="space-y-3.5 text-gray-600 font-light">
              <li><span className="text-gray-800 font-medium">Singapore (HQ)</span></li>
              <li><span className="text-gray-600">Johor Bahru (Cross Border)</span></li>
              <li><span className="text-gray-600">Kuala Lumpur</span></li>
              <li><span className="text-gray-600">Changi Airport Transfers</span></li>
              <li><span className="text-gray-600">International Freight Links</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-[#312e2c]">Corporate Account</h4>
            <ul className="space-y-3.5 text-[13px] text-gray-600 font-light">
              <li><span className="text-gray-800 font-medium">AMAQ PTE LTD</span></li>
              <li><span>UEN 202510150D</span></li>
              <li><span>842C Tampines St 82,</span></li>
              <li><span>Singapore 523842</span></li>
              <li className="pt-2 text-xs text-[#c5a880] font-medium"><span>Net 30 Terms available</span></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Row with Copyright and Social Icons */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <div className="flex flex-wrap gap-4 text-gray-500 mb-6 md:mb-0">
            <span className="font-medium text-gray-700">© 2026 AMAQ PTE LTD. UEN 202510150D</span>
            <span>•</span>
            <Link href="#" className="hover:text-black transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-black transition-colors">Customs Clearance Policy</Link>
            <Link href="#" className="hover:text-black transition-colors font-medium text-[#c5a880]">Preferred Comm: WhatsApp</Link>
          </div>
          
          {/* Social Icons (Dark Gray) */}
          <div className="flex gap-4">
            {/* LinkedIn */}
            <Link href="#" className="text-gray-400 hover:text-black transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </Link>
            {/* Instagram */}
            <Link href="#" className="text-gray-400 hover:text-black transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </Link>
            {/* Facebook */}
            <Link href="#" className="text-gray-400 hover:text-black transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </Link>
            {/* TikTok */}
            <Link href="#" className="text-gray-400 hover:text-black transition-colors" aria-label="TikTok">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31 0 2.5.54 3.36 1.42.92-.12 1.82-.47 2.62-.97-.39 1.2-.12 2.45.62 3.39.81-.14 1.6-.43 2.33-.87-.52.79-1.25 1.43-2.12 1.87v.05c0 6.64-5.38 12.02-12.02 12.02S.3 12.18.3 5.54 5.68-.64 12.32-.64c.07 0 .14 0 .2.02v.66zM12.5 15.5c3.59 0 6.5-2.91 6.5-6.5V3.82c-1.12.8-2.52 1.28-4.04 1.28h-.46v2.9h.46c1.38 0 2.5 1.12 2.5 2.5v.5c0 1.38-1.12 2.5-2.5 2.5H11.5v-10h-3v10h1.5v1.5h2.5z"/></svg>
            </Link>
            {/* YouTube */}
            <Link href="#" className="text-gray-400 hover:text-black transition-colors" aria-label="YouTube">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </Link>
            {/* X */}
            <Link href="#" className="text-gray-400 hover:text-black transition-colors" aria-label="X">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
