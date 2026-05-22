import { Rocket, ShieldCheck, Mail, MapPin, Phone, MessageSquare } from 'lucide-react';

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
  onContactClick: (packageName?: string) => void;
}

export default function Footer({ onScrollTo, onContactClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-indigo-950 text-indigo-200 pt-16 pb-8 border-t border-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-indigo-900/60">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onScrollTo('home')}>
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-indigo-600 text-white shadow-md shadow-indigo-950/20">
                <Rocket className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Web<span className="text-indigo-400">Preneur</span>
              </span>
            </div>
            <p className="text-sm text-indigo-300 max-w-sm font-normal leading-relaxed">
              Jasa pembuatan website premium, andal, aman, dan siap saji. Kami berdedikasi mendampingi akselerasi digital UMKM dan korporat global di Indonesia.
            </p>
            <div className="flex items-center space-x-2 text-xs text-indigo-300 bg-indigo-900/40 p-3 rounded-xl border border-indigo-800/40 w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Proteksi 100% Hak Cipta & Source Code Penuh Milik Anda</span>
            </div>
          </div>

          {/* Nav Links Col */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Navigasi Cepat</h4>
            <ul className="space-y-2 text-sm text-indigo-300">
              <li>
                <button onClick={() => onScrollTo('home')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Beranda Utama
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('layanan')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Layanan & Layanan Email
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('fitur')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Fitur AI Marketing
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('paket')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Daftar Harga & Paket
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Kontak & Alamat</h4>
            <ul className="space-y-3 text-sm text-indigo-300">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4.5 h-4.5 text-indigo-400 mt-0.5 flex-shrink-0" />
                <span>Jl. Raya Wikrama, Bogor, Jawa Barat, Indonesia</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4.5 h-4.5 text-indigo-400 flex-shrink-0" />
                <a 
                  href="mailto:kelompok1pipas@gmail.com" 
                  className="hover:text-white transition-colors"
                >
                  kelompok1pipas@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4.5 h-4.5 text-indigo-400 flex-shrink-0" />
                <a 
                  href="https://wa.me/6289502326163" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  +62 895-0232-6163
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Block */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-indigo-400">
          <div>
            <p>© {currentYear} WebPreneur. Desain premium oleh Senior Front-End Dev. Hak Cipta Dilindungi.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#home" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
            <a href="#home" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#home" className="hover:text-white transition-colors">Kepatuhan GDPR</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
