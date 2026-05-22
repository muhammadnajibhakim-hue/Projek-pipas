import { useState, useEffect } from 'react';
import { Menu, X, Rocket, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onContactClick: (packageName?: string) => void;
  onScrollTo: (sectionId: string) => void;
}

export default function Navbar({ onContactClick, onScrollTo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Beranda', id: 'home' },
    { name: 'Layanan', id: 'layanan' },
    { name: 'Fitur Khusus', id: 'fitur' },
    { name: 'Paket Harga', id: 'paket' },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    onScrollTo(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-indigo-50/50 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={() => handleNavClick('home')}
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-blue-500 text-white shadow-md shadow-indigo-200">
                <Rocket className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
                </span>
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-indigo-950 via-indigo-900 to-indigo-800 bg-clip-text text-transparent">
                  Web<span className="text-indigo-600 font-extrabold">Preneur</span>
                </span>
                <span className="block text-[9px] -mt-1 font-semibold tracking-widest text-indigo-400 uppercase">
                  Digital Launchpad
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="font-medium text-[15px] text-indigo-900/85 hover:text-indigo-600 transition-colors py-1 relative group cursor-pointer"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => onContactClick('custom')}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-semibold text-[14px] bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 hover:from-indigo-700 hover:to-indigo-700 text-white transition-all duration-300 shadow-md shadow-indigo-100 hover:shadow-lg hover:shadow-indigo-200 cursor-pointer active:scale-95"
              >
                <Sparkles className="w-4 h-4 mr-1.5 animate-pulse" />
                Mulai Sekarang
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-indigo-900 overflow-hidden cursor-pointer"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden border-t border-indigo-50 bg-white"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="block w-full text-left font-semibold text-[16px] text-indigo-950 py-3 px-3 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="pt-4 px-3">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onContactClick('custom');
                    }}
                    className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg font-bold text-white bg-indigo-600 shadow-md shadow-indigo-100 cursor-pointer"
                  >
                    Mulai Sekarang
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
