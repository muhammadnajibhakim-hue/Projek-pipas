import { Check, Mail, Sparkles, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface PillarSectionProps {
  onContactClick: (packageName: string) => void;
}

export default function PillarSection({ onContactClick }: PillarSectionProps) {
  return (
    <section id="fitur" className="py-20 bg-slate-50/45 border-y border-indigo-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1 bg-indigo-50 px-3 py-1 rounded-full text-xs font-semibold text-indigo-700 uppercase tracking-widest">
            <span>Pilar Solusi</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-950 tracking-tight">
            Padukan Keandalan Sistem dengan Efisiensi Pemasaran Modern
          </h2>
          <p className="text-slate-500 font-normal text-[15px] md:text-[16px] leading-relaxed">
            Sukses meluncurkan website barumu adalah langkah awal. Pastikan komunikasi surat eksternal dan pemasaran email bisnismu digarap secara profesional sejak hari pertama.
          </p>
        </div>

        {/* Two-Pillar Side-by-Side Cards (Putih halus background) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* Pilar Kiri - Bisnis */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 border border-indigo-50 shadow-sm hover:shadow-xl hover:shadow-indigo-50/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Pillar Header Icon */}
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                <Mail className="w-6 h-6" />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-indigo-950 mb-4 tracking-tight leading-tight">
                Bangun Kepercayaan dengan Email Bisnis Profesional
              </h3>
              <p className="text-[14px] sm:text-[15px] text-slate-500 font-normal leading-relaxed mb-6">
                Tingkatkan prestise merek Anda, amankan kotak masuk Anda, dan kembangkan bisnis dengan kendali penuh di tangan Anda.
              </p>

              {/* Checklist points */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3 text-[14px] sm:text-[15px]">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4.5 h-4.5 font-extrabold" />
                  </div>
                  <span className="text-slate-600 font-medium">Bangun kepercayaan melalui email bisnis ber-domain kustom</span>
                </li>
                <li className="flex items-start space-x-3 text-[14px] sm:text-[15px]">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4.5 h-4.5 font-extrabold" />
                  </div>
                  <span className="text-slate-600 font-medium">Akses email yang mulus di seluruh aplikasi dan perangkat handphone/PC</span>
                </li>
                <li className="flex items-start space-x-3 text-[14px] sm:text-[15px]">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4.5 h-4.5 font-extrabold" />
                  </div>
                  <span className="text-slate-600 font-medium">Privasi terjaga, terlindungi dari spam, dan selalu online</span>
                </li>
              </ul>
            </div>

            {/* CTA action trigger */}
            <div>
              <button
                onClick={() => onContactClick('Layanan Email Bisnis')}
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-[15px] text-indigo-600 bg-indigo-50 border border-indigo-100 hover:bg-indigo-100/60 transition-all cursor-pointer active:scale-98"
              >
                Siapkan Email Bisnis
                <ArrowUpRight className="w-4.5 h-4.5 ml-1.5" />
              </button>
            </div>
          </div>

          {/* Pilar Kanan - Marketing */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 border border-indigo-50 shadow-sm hover:shadow-xl hover:shadow-indigo-50/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Pillar Header Icon */}
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-indigo-950 mb-4 tracking-tight leading-tight">
                Kembangkan Bisnis dengan Pemasaran Email Berbasis AI
              </h3>
              <p className="text-[14px] sm:text-[15px] text-slate-500 font-normal leading-relaxed mb-6">
                Melalui sistem Reach, Anda dapat menjadwalkan email, mengotomatiskan pesan berkala untuk menghemat waktu, dan menjaga konsistensi merek.
              </p>

              {/* Checklist points */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3 text-[14px] sm:text-[15px]">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4.5 h-4.5 font-extrabold" />
                  </div>
                  <span className="text-slate-600 font-medium">Desain dan tulis draf pesan pemasaran dengan bantuan AI</span>
                </li>
                <li className="flex items-start space-x-3 text-[14px] sm:text-[15px]">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4.5 h-4.5 font-extrabold" />
                  </div>
                  <span className="text-slate-600 font-medium">Logo dan warna merek Anda langsung diterapkan otomatis</span>
                </li>
                <li className="flex items-start space-x-3 text-[14px] sm:text-[15px]">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4.5 h-4.5 font-extrabold" />
                  </div>
                  <span className="text-slate-600 font-medium">Dapat digunakan tanpa perlu pemahaman kode / pemrograman</span>
                </li>
              </ul>
            </div>

            {/* CTA action trigger */}
            <div>
              <button
                onClick={() => onContactClick('AI Email Marketing Reach')}
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-[15px] text-indigo-600 bg-indigo-50 border border-indigo-100 hover:bg-indigo-100/60 transition-all cursor-pointer active:scale-98"
              >
                Mulai Pemasaran Email via Reach
                <ArrowUpRight className="w-4.5 h-4.5 ml-1.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
