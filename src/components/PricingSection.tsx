import { useState } from 'react';
import { Check, Flame, MessageSquare, ShieldAlert } from 'lucide-react';
import { PricingPackage } from '../types';

interface PricingSectionProps {
  onContactClick: (packageName: string) => void;
}

export default function PricingSection({ onContactClick }: PricingSectionProps) {
  const [isAnnual, setIsAnnual] = useState(false);

  const packages: PricingPackage[] = [
    {
      id: 'landing',
      name: 'Landing Page',
      priceMonthly: 1299000,
      priceAnnually: 1039000, // 20% discount
      description: 'Sangat cocok untuk kampanye beriklan, promosi produk tunggal, atau peluncuran produk baru.',
      features: [
        '1 Halaman Utama Premium',
        'Desain Responsif (HP, Tablet & Desktop)',
        'Domain .COM / .ID Gratis 1 Tahun',
        'Integrasi WhatsApp & Form Kontak',
        'Sertifikat Keamanan SSL Gratis',
        'Server Hosting Berkecepatan Tinggi (2GB)',
        'Revisi Ringan 1 Bulan'
      ],
      colorScheme: 'indigo',
      timeframe: '3 - 5 Hari Kerja'
    },
    {
      id: 'bisnis',
      name: 'Website Bisnis',
      priceMonthly: 3499000,
      priceAnnually: 2799000, // 20% discount
      description: 'Solusi profesional lengkap untuk profil perusahaan (company profile), instansi, atau jasa terpercaya.',
      features: [
        'Maksimal 10 Halaman Lengkap',
        'Sistem Edit Content Management (CMS)',
        'Domain Kustom (.COM atau Co.ID) Gratis',
        '5 Akun Email Bisnis Profesional (@brand.com)',
        'Desain Eksklusif Brand Identity',
        'Optimasi Kecepatan & On-Page SEO Google',
        'Bantuan Teknis Prioritas 1 Tahun'
      ],
      isPopular: true,
      colorScheme: 'electric',
      timeframe: '5 - 7 Hari Kerja'
    },
    {
      id: 'store',
      name: 'E-Commerce / Toko Online',
      priceMonthly: 5999000,
      priceAnnually: 4799000, // 20% discount
      description: 'Platform andalan penjualan e-commerce lengkap dengan kelola stok, hitung ongkir otomatis, dan payment gateway.',
      features: [
        'Katalog Produk Tanpa Batas Halaman',
        'Sistem Shopping Cart (Keranjang Belanja)',
        'Integrasi Ongkir Otomatis (JNE, J&T, Sicepat, dll)',
        'Payment Gateway (Midtrans/Xendit) Virtual Account',
        'Email Bisnis & Email Marketing Automations',
        'Auto-Generated Invoice PDF ke Klien',
        'Grup Pendampingan Khusus & Training 1 Bulan'
      ],
      colorScheme: 'violet',
      timeframe: '10 - 14 Hari Kerja'
    }
  ];

  const formatRupiah = (number: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  };

  return (
    <section id="paket" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title block */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-1.5 bg-indigo-50 px-3.5 py-1.5 rounded-full text-[12px] font-bold text-indigo-700 tracking-wide uppercase">
            <span>Paket Harga Transparan</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-950 tracking-tight">
            Pilih Paket Terbaik untuk Memulai Suksesmu
          </h2>
          <p className="text-slate-500 font-normal leading-relaxed text-[15px] sm:text-[16px]">
            Semua paket bersifat transparan tanpa biaya tersembunyi. Dapatkan jaminan kualitas setara corporate agency profesional dengan harga ramah budget.
          </p>

          {/* Toggle Cycle */}
          <div className="flex items-center justify-center pt-6">
            <div className="inline-flex items-center bg-slate-100 p-1.5 rounded-xl border border-slate-200">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-2 text-[13px] font-extrabold rounded-lg transition-all cursor-pointer ${
                  !isAnnual ? 'bg-white text-indigo-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Harga Standar
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-4 py-2 text-[13px] font-extrabold rounded-lg transition-all flex items-center space-x-1.5 cursor-pointer ${
                  isAnnual ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <span>Paket Hemat Tahunan</span>
                <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-1.5 py-0.5 rounded-md uppercase">
                  -20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch pt-4 max-w-6xl mx-auto">
          {packages.map((pkg) => {
            const price = isAnnual ? pkg.priceAnnually : pkg.priceMonthly;
            return (
              <div
                key={pkg.id}
                className={`relative bg-white rounded-2xl p-8 border hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between ${
                  pkg.isPopular
                    ? 'border-indigo-500 ring-2 ring-indigo-200/50 shadow-xl shadow-indigo-50'
                    : 'border-indigo-100/70 shadow-md shadow-indigo-50/20'
                }`}
              >
                {/* Popular Badge */}
                {pkg.isPopular && (
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 inline-flex items-center space-x-1 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-md shadow-indigo-200">
                    <Flame className="w-3.5 h-3.5 fill-white" />
                    <span>Paling Rekomendasi</span>
                  </div>
                )}

                <div>
                  {/* Name Description */}
                  <div className="space-y-1.5">
                    <h3 className="font-extrabold text-xl text-indigo-950">{pkg.name}</h3>
                    <p className="text-slate-500 text-[13px] leading-relaxed min-h-[48px]">{pkg.description}</p>
                  </div>

                  {/* Pricing values */}
                  <div className="py-6 border-b border-indigo-50">
                    <div className="text-3xl sm:text-4xl font-extrabold text-indigo-950 tracking-tight">
                      {formatRupiah(price)}
                    </div>
                    <div className="text-[12px] font-medium text-slate-400 mt-1.5">
                      {isAnnual ? 'Sekali Bayar (Dukungan Setahun)' : 'Sekali Bayar (Konsep Standar)'}
                    </div>
                  </div>

                  {/* Operational Timeframe */}
                  <div className="py-3 px-3 bg-slate-50 rounded-xl mt-4 flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span>Estimasi Pengerjaan:</span>
                    <span className="text-indigo-600 font-bold">{pkg.timeframe}</span>
                  </div>

                  {/* Features checklist list */}
                  <div className="pt-6 space-y-3.5">
                    <h4 className="text-[11px] font-bold text-indigo-950 uppercase tracking-widest text-left">
                      Fasilitas Sudah Termasuk:
                    </h4>
                    <ul className="space-y-3 text-left">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2.5 text-[13px] sm:text-[14px]">
                          <Check className="w-4.5 h-4.5 text-indigo-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600 font-medium leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Submit action */}
                <div className="pt-8 block">
                  <button
                    onClick={() => onContactClick(pkg.name)}
                    className={`w-full inline-flex items-center justify-center py-3.5 rounded-xl font-bold text-[14px] cursor-pointer transition-all active:scale-98 ${
                      pkg.isPopular
                        ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white hover:from-indigo-700 hover:to-indigo-700 shadow-md shadow-indigo-100 hover:shadow-lg'
                        : 'bg-indigo-50 hover:bg-indigo-100/80 text-indigo-700 border border-indigo-100'
                    }`}
                  >
                    Pilih Paket {pkg.name}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Guarantees Banner */}
        <div className="mt-16 bg-gradient-to-tr from-[#EEEEFF] to-[#FAF9FF] rounded-2xl p-6 md:p-8 border border-indigo-100/50 flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-indigo-600 flex-shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="font-extrabold text-[15px] sm:text-[16px] text-indigo-950">
                Punya Kebutuhan Spesial atau Fitur Custom?
              </h4>
              <p className="text-[13px] sm:text-[14px] text-slate-500 font-normal leading-relaxed">
                Kami siap merancang website dengan integrasi khusus API, internal CRM, Multi-language, atau portal keanggotaan premium. Hubungi tim developer untuk berdiskusi langsung.
              </p>
            </div>
          </div>
          <button
            onClick={() => onContactClick('Custom Spec / Kebutuhan Khusus')}
            className="whitespace-nowrap px-6 py-3 rounded-xl font-bold bg-white text-indigo-600 border border-indigo-200 hover:border-indigo-400 hover:bg-slate-50 shadow-sm transition-all text-sm cursor-pointer"
          >
            Hubungi Konsultan Kami
          </button>
        </div>

      </div>
    </section>
  );
}
