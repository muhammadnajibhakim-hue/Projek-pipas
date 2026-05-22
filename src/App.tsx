/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PillarSection from './components/PillarSection';
import PricingSection from './components/PricingSection';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

import { Laptop, Cpu, ShieldCheck, Landmark, Kanban, HeartHandshake } from 'lucide-react';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('custom');

  const handleContactClick = (packageName?: string) => {
    if (packageName) {
      setSelectedPackage(packageName);
    } else {
      setSelectedPackage('custom');
    }
    setIsContactOpen(true);
  };

  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Modern services data for "Layanan Utama"
  const services = [
    {
      icon: <Laptop className="w-6 h-6 text-indigo-600" />,
      title: 'Desain Kustom Eksklusif',
      desc: 'Desain orisinal tanpa template murahan, diselaraskan penuh dengan corporate identity dan karakteristik brand Anda.'
    },
    {
      icon: <Cpu className="w-6 h-6 text-indigo-600" />,
      title: 'Optimasi AI & Kecepatan',
      desc: 'Kecepatan loading secepat kilat dikombinasikan dengan integrasi kecerdasan buatan untuk automasi konten.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
      title: 'Keamanan Tingkat Tinggi',
      desc: 'Perlindungan enkripsi SSL gratis dengan konfigurasi firewall canggih untuk mengamankan data transaksi client.'
    },
    {
      icon: <Landmark className="w-6 h-6 text-indigo-600" />,
      title: 'SEO Google Ramah Algoritma',
      desc: 'Struktur kode bersih dan meta tag otomatis agar websitemu bertengger gagah di halaman pertama pencarian Google.'
    },
    {
      icon: <Kanban className="w-6 h-6 text-indigo-600" />,
      title: 'CMS Kelola Mandiri',
      desc: 'Kemudahan memperbarui foto, teks, dan artikel blog melalui admin panel intuitif tanpa perlu menyewa programmer.'
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-indigo-600" />,
      title: 'Bantuan Teknis Prioritas',
      desc: 'Seluruh paket sudah termasuk pendampingan eksklusif, backup rutin mingguan, serta perbaikan sistem gratis jika eror.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfbfd] selection:bg-indigo-150 selection:text-indigo-900">
      
      {/* Dynamic Header Component */}
      <Navbar 
        onContactClick={handleContactClick} 
        onScrollTo={handleScrollTo} 
      />

      {/* Main Dynamic Sections Container */}
      <main>
        
        {/* HERO SECTION */}
        <Hero 
          onScrollTo={handleScrollTo} 
          onContactClick={handleContactClick} 
        />

        {/* LAYANAN UTAMA SECTION */}
        <section id="layanan" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header copy */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="inline-flex items-center space-x-1.5 bg-indigo-50 px-3.5 py-1.5 rounded-full text-[12px] font-bold text-indigo-700 tracking-wide uppercase">
                <span>Fokus Layanan Utama</span>
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#110c33] tracking-tight">
                Layanan All-in-One untuk Pertumbuhan Digital Bisnis Anda
              </h2>
              <p className="text-slate-500 font-normal leading-relaxed text-[15px] sm:text-[16px]">
                Dari konsep kasar hingga peluncuran skala global, kami siap menyuplai jembatan teknologi andal yang memikat calon pengguna dan melipatgandakan pendapatan.
              </p>
            </div>

            {/* Services Grid cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((svc, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-50/40 p-6 rounded-2xl border border-indigo-50/50 hover:border-indigo-150/75 hover:bg-white hover:shadow-xl hover:shadow-indigo-50/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-5 shadow-sm border border-indigo-50/30">
                    {svc.icon}
                  </div>
                  <h3 className="font-extrabold text-lg text-indigo-950 mb-2">{svc.title}</h3>
                  <p className="text-slate-500 text-sm font-normal leading-relaxed">{svc.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* FEATURE TWO-PILLAR SECTION */}
        <PillarSection 
          onContactClick={handleContactClick} 
        />

        {/* PRICING AND PACKAGE GRID */}
        <PricingSection 
          onContactClick={handleContactClick} 
        />

      </main>

      {/* FOOTER NAVIGATOR */}
      <Footer 
        onScrollTo={handleScrollTo} 
        onContactClick={handleContactClick} 
      />

      {/* INTERACTIVE FORM MODAL COMPONENT */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
        selectedPackage={selectedPackage} 
      />

    </div>
  );
}
