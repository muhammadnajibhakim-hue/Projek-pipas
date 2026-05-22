import { ArrowRight, Star, Award, Layers, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
  onContactClick: (packageName?: string) => void;
}

export default function Hero({ onScrollTo, onContactClick }: HeroProps) {
  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-[#FAF9FF] via-white to-white">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-200/40 via-violet-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100/30 via-indigo-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 bg-indigo-50/80 border border-indigo-100 px-3.5 py-1.5 rounded-full">
              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
              <span className="text-[12px] font-bold text-indigo-700 tracking-wide uppercase">
                #1 Solusi Website Bisnis & Marketing
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-indigo-950 tracking-tight leading-tight">
              Kembangkan Bisnis Anda dengan Website{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
                Premium & Siap AI
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              WebPreneur membantu para pebisnis, UMKM, dan profesional meluncurkan website performa tinggi yang andal, aman, serta dilengkapi sistem promosi berbasis AI untuk menarik lebih banyak audiens.
            </p>

            {/* Direct CTA Panel */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onContactClick('custom')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-[16px] text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-500 hover:from-indigo-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-indigo-100 transition-all cursor-pointer active:scale-95"
              >
                Mulai Buat Website
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button
                onClick={() => onScrollTo('paket')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-[16px] text-indigo-950 bg-indigo-50 hover:bg-indigo-100/70 border border-indigo-100/80 transition-all cursor-pointer"
              >
                Lihat Paket Harga
              </button>
            </div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-150 max-w-lg mx-auto lg:mx-0">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-950 tracking-tight">
                  100%
                </div>
                <div className="text-[12px] font-semibold text-slate-500 uppercase tracking-widest">
                  Serah Terima Hak Cipta
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-950 tracking-tight">
                  24/7
                </div>
                <div className="text-[12px] font-semibold text-slate-500 uppercase tracking-widest">
                  Dukungan Teknis Aktif
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-950 tracking-tight">
                  &lt; 7 Hari
                </div>
                <div className="text-[12px] font-semibold text-slate-500 uppercase tracking-widest">
                  Waktu Pengerjaan Cepat
                </div>
              </div>
            </div>
          </div>

          {/* Hero Right Visuals (Dashboard mockup representation without relying on heavy external files) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Soft decorative background circles */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-transparent rounded-3xl -rotate-3 scale-102 blur-lg opacity-40" />
            
            {/* Mockup Container */}
            <div className="relative bg-white rounded-2xl border border-indigo-100/80 p-6 shadow-2xl shadow-indigo-100">
              <div className="flex items-center justify-between border-b border-indigo-50 pb-4 mb-4">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[11px] font-semibold tracking-wider text-slate-400 font-mono">
                  webpreneur.id/client-analytics
                </span>
                <div className="w-4 h-4 rounded bg-slate-100 flex items-center justify-center">
                  <span className="text-[9px] text-slate-400">+</span>
                </div>
              </div>

              {/* Grid content representing speed and reliability */}
              <div className="space-y-4">
                {/* Visual element 1: Performance */}
                <div className="bg-slate-50/50 rounded-xl p-4 border border-indigo-50/50 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                      <Zap className="w-4 h-4 fill-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[13px] text-indigo-950">Kecepatan & Performa Tinggi</h4>
                      <p className="text-[11px] text-slate-500">Google PageSpeed Score: 98%</p>
                    </div>
                  </div>
                  <span className="text-[12px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">Sangat Baik</span>
                </div>

                {/* Visual element 2: Trust badge */}
                <div className="bg-slate-50/50 rounded-xl p-4 border border-indigo-50/50 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[13px] text-indigo-950">Sertifikat SSL Aman</h4>
                      <p className="text-[11px] text-slate-500">HTTPS Enforced & Auto-Renewed</p>
                    </div>
                  </div>
                  <span className="text-[12px] font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">Aktif</span>
                </div>

                {/* Visual element 3: Sales chart representation */}
                <div className="bg-slate-50/50 rounded-xl p-4 border border-indigo-50/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-slate-500">KONVERSI UMKM</span>
                    <span className="text-[11px] font-bold text-indigo-600">+245% Year-On-Year</span>
                  </div>
                  <div className="flex items-end h-16 space-x-2 pt-2">
                    <div className="bg-indigo-200/50 w-full rounded-t-sm" style={{ height: '35%' }}></div>
                    <div className="bg-indigo-300/50 w-full rounded-t-sm" style={{ height: '50%' }}></div>
                    <div className="bg-indigo-300 w-full rounded-t-sm" style={{ height: '40%' }}></div>
                    <div className="bg-indigo-400 w-full rounded-t-sm" style={{ height: '65%' }}></div>
                    <div className="bg-indigo-500 w-full rounded-t-sm" style={{ height: '75%' }}></div>
                    <div className="bg-indigo-600 w-full rounded-t-sm" style={{ height: '95%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floater widgets for interactive visual flair */}
            <div className="absolute -bottom-6 -left-6 bg-white border border-indigo-50/80 p-4 rounded-xl shadow-xl flex items-center space-x-3 max-w-[190px]">
              <div className="p-2 rounded-lg bg-amber-50 text-amber-500">
                <Star className="w-5 h-5 fill-amber-500" />
              </div>
              <div>
                <div className="text-[13px] font-extrabold text-indigo-950">Selesai Tepat Waktu</div>
                <div className="text-[11px] text-slate-500">Jaminan kontrak pengerjaan</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
