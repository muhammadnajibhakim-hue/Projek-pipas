import { useState, FormEvent } from 'react';
import { X, Send, CheckCircle2, PhoneCall, Loader2, Sparkles, Building2, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactFormInput } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: string;
}

export default function ContactModal({ isOpen, onClose, selectedPackage }: ContactModalProps) {
  const [formData, setFormData] = useState<ContactFormInput>({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    packageId: selectedPackage || 'custom',
    description: ''
  });

  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Auto update package field if selectedPackage prop changes
  useState(() => {
    if (selectedPackage) {
      setFormData(prev => ({ ...prev, packageId: selectedPackage }));
    }
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call persistence
    setTimeout(() => {
      setLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  const resetForm = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      companyName: '',
      packageId: 'custom',
      description: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Background Overlay */}
      <div 
        className="fixed inset-0 bg-[#060413]/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      <div className="flex min-h-screen items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg border border-indigo-100">
          
          {/* Close Header Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 focus:outline-none p-1 bg-slate-50 hover:bg-slate-100 rounded-full cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSuccess ? (
            /* Contact Form View */
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-extrabold text-indigo-950 flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-indigo-600 animate-pulse fill-indigo-200" />
                  <span>Kirim Pengajuan Brief</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-normal">
                  Masukkan informasi bisnismu di bawah ini. Tim analis WebPreneur akan menghubungi dalam maksimal 2 jam kerja.
                </p>
              </div>

              <div className="space-y-4">
                {/* Name */}
                <div className="space-y-1">
                  <label htmlFor="name" className="block text-[12px] font-bold text-indigo-950 uppercase tracking-wider">
                    Nama Lengkap <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: Muhammad Najib"
                    className="w-full px-4 py-3 rounded-xl border border-indigo-100/80 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 focus:outline-none bg-slate-50/50 text-[14px]"
                  />
                </div>

                {/* Email and Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="email" className="block text-[12px] font-bold text-indigo-950 uppercase tracking-wider">
                      Email Aktif <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="najib@perusahaan.com"
                      className="w-full px-4 py-3 rounded-xl border border-indigo-100/80 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 focus:outline-none bg-slate-50/50 text-[14px]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="phone" className="block text-[12px] font-bold text-indigo-950 uppercase tracking-wider">
                      No. WhatsApp <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="081234567890"
                      className="w-full px-4 py-3 rounded-xl border border-indigo-100/80 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 focus:outline-none bg-slate-50/50 text-[14px]"
                    />
                  </div>
                </div>

                {/* Brand / Company name */}
                <div className="space-y-1">
                  <label htmlFor="companyName" className="block text-[12px] font-bold text-indigo-950 uppercase tracking-wider">
                    Nama Perusahaan / Usaha Merek
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Contoh: Wikrama Coffee Shop"
                    className="w-full px-4 py-3 rounded-xl border border-indigo-100/80 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 focus:outline-none bg-slate-50/50 text-[14px]"
                  />
                </div>

                {/* Select Package Choice */}
                <div className="space-y-1">
                  <label htmlFor="package" className="block text-[12px] font-bold text-indigo-950 uppercase tracking-wider">
                    Paket Website yang Dipilih
                  </label>
                  <select
                    id="package"
                    value={formData.packageId}
                    onChange={(e) => setFormData({ ...formData, packageId: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-indigo-100/80 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 focus:outline-none bg-slate-50/50 text-[14px]"
                  >
                    <option value="Landing Page">Landing Page - IDR 1.299K</option>
                    <option value="Website Bisnis">Website Bisnis - IDR 3.499K</option>
                    <option value="E-Commerce / Toko Online">E-Commerce / Toko Online - IDR 5.999K</option>
                    <option value="Layanan Email Bisnis">Layanan Email Bisnis (Pilar Kiri)</option>
                    <option value="AI Email Marketing Reach">AI Email Marketing Reach (Pilar Kanan)</option>
                    <option value="Custom Spec / Kebutuhan Khusus">Konsep Custom / Konsultasi Lainnya</option>
                    <option value="custom">Belum Yakin (Konsultasikan Terlebih Dahulu)</option>
                  </select>
                </div>

                {/* Description of what needs to be made */}
                <div className="space-y-1">
                  <label htmlFor="description" className="block text-[12px] font-bold text-indigo-950 uppercase tracking-wider">
                    Komentar / Kebutuhan Khusus
                  </label>
                  <textarea
                    id="description"
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Ceritakan singkat tujuan websitemu atau kriteria desain yang kamu inginkan..."
                    className="w-full px-4 py-3 rounded-xl border border-indigo-100/80 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 focus:outline-none bg-slate-50/50 text-[14px]"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 flex flex-col space-y-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-700 text-white rounded-xl font-bold text-[14px] cursor-pointer shadow-md shadow-indigo-150 transition-all active:scale-98 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Memproses Pengajuan...
                    </>
                  ) : (
                    <>
                      <Send className="w-4.5 h-4.5 mr-2" />
                      Kirim Formulir Briefing
                    </>
                  )}
                </button>
                <div className="text-center">
                  <span className="text-[11px] text-slate-400 font-medium">
                    🔒 Keamanan data terjaga. Bebas spam 100%.
                  </span>
                </div>
              </div>
            </form>
          ) : (
            /* Success confirmation screen */
            <div className="p-8 sm:p-10 text-center space-y-6">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10 fill-emerald-100 font-bold" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-indigo-950">Brief Berhasil Dikirim!</h3>
                <p className="text-[14px] text-slate-500 leading-relaxed max-w-sm mx-auto">
                  Terima kasih <span className="font-bold text-indigo-900">{formData.name}</span>. Tim WebPreneur telah menerima briefing proyek dan akan menghubungi WhatsApp Anda nomor <span className="font-semibold text-indigo-900">{formData.phone}</span> untuk penawaran eksklusif.
                </p>
              </div>

              {/* Success metadata presentation */}
              <div className="bg-slate-50 border border-indigo-50/50 rounded-xl p-4 text-left divide-y divide-slate-100 space-y-2 text-xs text-slate-600 font-medium">
                <div className="flex items-center justify-between pb-2">
                  <span>ID Registrasi Kontak:</span>
                  <span className="font-mono text-indigo-600">REQ-{Math.floor(Math.random() * 90000) + 10000}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span>Paket Website:</span>
                  <span className="text-indigo-950 font-bold">{formData.packageId}</span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span>Status Antrean:</span>
                  <span className="text-emerald-600 font-bold uppercase tracking-wide">Diproses (Prioritas Tinggi)</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col space-y-2.5">
                <a
                  href={`https://wa.me/6289502326163?text=${encodeURIComponent(
                    `Halo Kak Najib (WebPreneur), saya tertarik berdiskusi lebih lanjut untuk membuat website!\n\nBerikut ringkasan kebutuhan saya:\n• Nama: ${formData.name}\n• Email: ${formData.email}\n• WhatsApp: ${formData.phone}\n• Perusahaan/Brand: ${formData.companyName || '-'}\n• Paket Website: ${formData.packageId}\n• Kebutuhan Khusus: ${formData.description || '-'}\n\nMohon bantuannya untuk diproses, terima kasih!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl font-bold text-[14.5px] cursor-pointer shadow-md shadow-emerald-100 transition-all active:scale-98"
                >
                  <PhoneCall className="w-4.5 h-4.5 mr-2" />
                  Lanjut via WhatsApp (0895-0232-6163)
                </a>

                <a
                  href={`mailto:kelompok1pipas@gmail.com?subject=${encodeURIComponent(
                    `Pemesanan Website WebPreneur - ${formData.name}`
                  )}&body=${encodeURIComponent(
                    `Halo Tim WebPreneur,\n\nSaya tertarik berdiskusi lebih lanjut mengenai pembuatan website WebPreneur.\n\nBerikut ringkasan kebutuhan saya:\n• Nama Lengkap: ${formData.name}\n• Email: ${formData.email}\n• No. WhatsApp/HP: ${formData.phone}\n• Nama Perusahaan/Brand: ${formData.companyName || '-'}\n• Paket Website yang Dipilih: ${formData.packageId}\n• Komentar/Kebutuhan Khusus: ${formData.description || '-'}\n\nMohon kirimkan penawaran resminya.\nTerima kasih!`
                  )}`}
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-100 rounded-xl font-bold text-[14px] cursor-pointer transition-all active:scale-98"
                >
                  <Mail className="w-4.5 h-4.5 mr-2" />
                  Kirim Ringkasan via Email
                </a>

                <button
                  onClick={resetForm}
                  className="w-full py-2.5 rounded-xl text-slate-500 hover:text-slate-800 text-[13px] font-bold hover:bg-slate-50 transition-all cursor-pointer"
                >
                  Tutup Jendela ini
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
