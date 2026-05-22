/**
 * WebPreneur - Main JavaScript Program
 * Dibuat khusus untuk Kelompok 1 PIPAS
 * Menggunakan Vanilla JavaScript murni & Dom manipulasi standar.
 * Sangat mendidik, mudah dipahami, dan mudah dimodifikasi bagi siswa!
 */

// === STATE & DATA UTAMA ===

// 1. Data Anggota Kelompok 1
const members = [
  { name: "Cendikia Prananta Ardian", isLeader: true, nis: "12309741", bg: "from-pink-500 via-purple-500 to-pink-600", text: "CP" },
  { name: "Muhammad Najib Hakim", isLeader: false, nis: "12309852", bg: "from-indigo-600 via-indigo-500 to-indigo-700", text: "NH" },
  { name: "Samuel Sayogo", isLeader: false, nis: "12309620", bg: "from-emerald-500 via-emerald-600 to-teal-600", text: "SS" },
  { name: "Dhanis Akmal Safaraz", isLeader: false, nis: "12309530", bg: "from-amber-500 via-orange-500 to-amber-600", text: "DA" },
  { name: "Raihan Putra Andri", isLeader: false, nis: "12309908", bg: "from-blue-600 via-indigo-500 to-blue-700", text: "RP" },
  { name: "Vino Agustian Nugraha", isLeader: false, nis: "12309488", bg: "from-rose-500 via-purple-500 to-rose-600", text: "VN" }
];

// 2. Data Portfolio Proyek
const portfolioItems = [
  { id: 1, title: "Warung Snack Bu Retno", type: "ecommerce", desc: "Digitalisasi pemesanan camilan lokal terintegrasi invoice otomatis.", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600" },
  { id: 2, title: "Katalog Kopi Klasik", type: "landing", desc: "Landing page modern berdesain responsif untuk usaha kopi lokal.", img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=600" },
  { id: 3, title: "Company Profile Karya Jasa", type: "business", desc: "Profil usaha mebeler kelas menengah dengan optimasi SEO terpadu.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" },
  { id: 4, title: "E-Catalog Fashion Bogor", type: "ecommerce", desc: "Toko belanja pakaian modern dilengkapi filter ukuran dan integrasi WA.", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600" },
  { id: 5, title: "Draf Portofolio Mitra Kue", type: "landing", desc: "Lembar promosi hidangan manis rumahan dengan form pesan instan.", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600" },
  { id: 6, title: "Prima Clean Clean", type: "business", desc: "Sistem reservasi paket jasa cuci rumah laundry premium di Bogor.", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600" }
];

// 3. Ulasan Awal (Kontributor Terverifikasi)
const initialTemplates = [];

// 4. Data FAQ (Pertanyaan Umum)
const faqData = [
  { 
    category: "General", 
    q: "Apa itu proyek WebPreneur Kelompok 1 ini?", 
    a: "WebPreneur merupakan inisiatif kewirausahaan digital dari Kelompok 1. Kami menyediakan jasa pembuatan website berkualitas premium, andal, hemat energi, serta dirancang khusus untuk memajukan pertumbuhan usaha (UMKM) lokal maupun pelaku korporat." 
  },
  { 
    category: "General", 
    q: "Bagaimana cara mendukung nilai kelulusan Kelompok 1?", 
    a: "Kami sangat berterima kasih jika Anda berkenan memberikan komentar, masukan akademis, atau ulasan bintang 5 di bagian Kolom Feedback di bawah. Dukungan Anda sangat berarti bagi kelulusan tugas akhir PIPAS kami!" 
  },
  { 
    category: "Technical", 
    q: "Mengapa ada program email bisnis dalam pilarnya?", 
    a: "Selain estetika website, kelancaran komunikasi profesional sangat penting. Kami menawarkan setup email bisnis resmi (nama@perusahaanmu.com) untuk mendongkrak kepercayaan klien secara optimal dalam ekosistem digital nasional." 
  },
  { 
    category: "Technical", 
    q: "Apakah website yang dibuat responsif dan mobile-friendly?", 
    a: "Ya! Setiap website yang kami develope menggunakan desain mobile-first yang sepenuhnya responsif, memastikan estetika yang sempurna di perangkat smartphone, tablet, maupun monitor desktop beresolusi tinggi." 
  },
  { 
    category: "Technical", 
    q: "Apakah website dilengkapi dengan optimasi kecepatan (Speed Optimization)?", 
    a: "Tentu saja! Kami memastikan struktur server hemat daya, kompresi aset gambar secara maksimal, dan minimalisasi render-blocking JavaScript agar website dapat diakses secara instan." 
  },
  { 
    category: "Payments", 
    q: "Bagaimana cara kerja Simulator Kalkulator Pembayaran?", 
    a: "Sangat mudah! Anda cukup memilih jenis website utama, menentukan jumlah halaman, mencentang fitur tambahan yang diinginkan, dan memilih persentase uang muka (DP). Kalkulator akan secara instan menghitung biaya investasi transparan yang terinci dengan rapi." 
  },
  { 
    category: "Payments", 
    q: "Apakah pembayaran DP lewat QRIS di sini sungguhan?", 
    a: "Sistem QRIS dalam modal briefing ini bersifat simulasi interaktif (Mockup Layak Uji). Anda dapat menguji dengan mengklik tombol 'SIMULASI LUNAS' untuk melihat proses transaksi verifikasi lunas seketika lengkap dengan struk kwitansi unik digital." 
  },
  { 
    category: "Payments", 
    q: "Metode pembayaran apa saja yang didukung untuk pengerjaan riil?", 
    a: "Setelah kesepakatan lewat diskusi WhatsApp atau email, kami menerima metode pembayaran transfer bank lokal, berbagai kanal e-wallet nasional terkemuka, atau QRIS berstandar resmi." 
  }
];

// State interaktif lokal
let calculatorState = {
  siteType: 'business', // 'landing', 'business', 'ecommerce'
  pageCount: 5,
  addons: {
    paymentGateway: false,
    multilingual: false,
    seoAdvanced: true,
    speedOptimize: true,
    authSystem: false,
    liveChat: false
  },
  dpPercentage: 10
};

let reviews = [];

// === INISIALISASI HALAMAN ===
document.addEventListener("DOMContentLoaded", () => {
  // Render Komponen-komponen Statis
  renderTeamMembers();
  renderPortfolio('all');
  renderFAQ();
  loadAndRenderReviews();

  // Ikat Seluruh Event Listeners
  initNavbarScroll();
  initPortfolioFilters();
  initCalculatorControls();
  initContactModal();
  initFAQAccordion();
  initFeedbackForm();
  initScrollReveal();

  // Inbound Lucide Icons compiler
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});

// === MATRIKS FORMAT BIASA ===
function formatCurrency(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
}

// === DEKORASI TIM ===
function renderTeamMembers() {
  const container = document.getElementById("team-grid-container");
  if (!container) return;

  container.innerHTML = members.map(mbr => `
    <div class="bg-white rounded-2xl border border-indigo-50/50 p-5 flex items-center space-x-4 hover:shadow-lg transition-all duration-350 relative overflow-hidden group">
      <!-- Accent Visual -->
      <div class="absolute top-0 right-0 w-16 h-16 bg-indigo-50/30 rounded-bl-full pointer-events-none group-hover:scale-105 transition-transform"></div>
      
      <!-- Avatar Initials -->
      <div class="w-12 h-12 rounded-xl bg-gradient-to-br ${mbr.bg} text-white text-base font-black flex items-center justify-center shadow-sm flex-shrink-0">
        ${mbr.text}
      </div>

      <!-- Info Row -->
      <div class="min-w-0 flex-1">
        <h3 class="font-extrabold text-indigo-950 text-xs sm:text-sm md:text-base leading-snug group-hover:text-indigo-600 transition-colors truncate">
          ${mbr.name}
        </h3>
        <div class="flex flex-wrap items-center gap-1.5 mt-1.5">
          <span class="text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${
            mbr.isLeader 
              ? 'bg-rose-50 text-rose-600 border border-rose-100/60' 
              : 'bg-indigo-50 text-indigo-600 border border-indigo-100/30'
          }">
            ${mbr.isLeader ? '★ Ketua Kelompok 1' : 'Anggota Kelompok'}
          </span>
        </div>
      </div>
    </div>
  `).join("");
}

// === FILTRASI PORTFOLIO ===
function initPortfolioFilters() {
  const filterButtons = document.querySelectorAll(".portfolio-filter-btn");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      filterButtons.forEach(b => b.classList.remove("bg-white", "text-indigo-950", "shadow-sm", "border-indigo-100"));
      filterButtons.forEach(b => b.classList.add("text-slate-500"));
      
      btn.classList.add("bg-white", "text-indigo-950", "shadow-sm", "border-indigo-100");
      btn.classList.remove("text-slate-500");

      const category = btn.getAttribute("data-category");
      renderPortfolio(category);
    });
  });
}

function renderPortfolio(category) {
  const container = document.getElementById("portfolio-grid-container");
  if (!container) return;

  const filtered = category === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.type === category);

  container.innerHTML = filtered.map(item => `
    <div class="bg-white rounded-3xl overflow-hidden border border-indigo-50/40 hover:shadow-xl transition-all duration-350 group flex flex-col h-full">
      <!-- Media Aspect Holder -->
      <div class="relative overflow-hidden aspect-video bg-slate-100">
        <img 
          src="${item.img}" 
          alt="${item.title}" 
          referrerpolicy="no-referrer"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span class="absolute top-3 left-3 bg-[#110c33]/85 backdrop-blur-sm text-white text-[9px] font-extrabold uppercase px-2.5 py-1 rounded-full tracking-wider border border-white/10">
          ${item.type === 'landing' ? 'Landing Page' : item.type === 'business' ? 'Company Profile' : 'E-Commerce'}
        </span>
      </div>

      <!-- Detail Card Body -->
      <div class="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-3">
        <div class="space-y-1.5">
          <h3 class="font-bold text-indigo-950 text-base sm:text-[17px] leading-tight tracking-tight group-hover:text-indigo-600 transition-colors">
            ${item.title}
          </h3>
          <p class="text-slate-500 text-xs sm:text-[13px] font-normal leading-relaxed">
            ${item.desc}
          </p>
        </div>

        <!-- Button Link -->
        <button onclick="triggerCalculatorFromPortfolio('${item.type}')" class="text-xs font-black text-indigo-600 inline-flex items-center hover:text-indigo-800 transition-colors cursor-pointer pt-2 group/btn">
          <span>Simulasikan Biaya</span>
          <i data-lucide="arrow-right" class="w-3.5 h-3.5 ml-1 transition-transform group-hover/btn:translate-x-1"></i>
        </button>
      </div>
    </div>
  `).join("");

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// Pemicu otomatis dari portofolio ke kalkulator
window.triggerCalculatorFromPortfolio = function(type) {
  calculatorState.siteType = type;
  calculatorState.pageCount = type === 'landing' ? 1 : type === 'business' ? 5 : 10;
  
  // Update UI selector
  const btnLanding = document.getElementById("calc-btn-landing");
  const btnBusiness = document.getElementById("calc-btn-business");
  const btnEcommerce = document.getElementById("calc-btn-ecommerce");
  
  if (btnLanding && btnBusiness && btnEcommerce) {
    [btnLanding, btnBusiness, btnEcommerce].forEach(b => {
      b.classList.remove("border-indigo-600", "bg-indigo-50/40", "shadow-sm");
      b.classList.add("border-slate-100");
    });

    const activeBtn = document.getElementById(`calc-btn-${type}`);
    if (activeBtn) {
      activeBtn.classList.add("border-indigo-600", "bg-indigo-50/40", "shadow-sm");
      activeBtn.classList.remove("border-slate-100");
    }
  }

  // Update slider value
  const slider = document.getElementById("calc-slider-pages");
  if (slider) {
    slider.value = calculatorState.pageCount;
  }
  
  // Sinkronkan math
  calculateCosts();

  // Scroll lembut ke kalkulator
  const targetSec = document.getElementById("kalkulator");
  if (targetSec) {
    targetSec.scrollIntoView({ behavior: 'smooth' });
  }
};

// === INTERAKSI CO-KONTROL NAVIGASI ===
function initNavbarScroll() {
  const navbar = document.getElementById("app-navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("bg-white/95", "backdrop-blur-md", "shadow-md", "py-3");
      navbar.classList.remove("bg-white/80", "py-5");
    } else {
      navbar.classList.add("bg-white/80", "py-5");
      navbar.classList.remove("bg-white/95", "backdrop-blur-md", "shadow-md", "py-3");
    }
  });

  // Mobile menu button toggler
  const mobBtn = document.getElementById("btn-mobile-menu");
  const mobDrawer = document.getElementById("mobile-menu-drawer");
  if (mobBtn && mobDrawer) {
    mobBtn.addEventListener("click", () => {
      mobDrawer.classList.toggle("hidden");
    });
  }

  // Close drawer on link click
  const drawerLinks = document.querySelectorAll(".drawer-link");
  drawerLinks.forEach(lnk => {
    lnk.addEventListener("click", () => {
      mobDrawer.classList.add("hidden");
    });
  });
}

// Smooth scrolling function helper
window.scrollToSection = function(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// === KALKULATOR UTAMA ===
function initCalculatorControls() {
  const btnLanding = document.getElementById("calc-btn-landing");
  const btnBusiness = document.getElementById("calc-btn-business");
  const btnEcommerce = document.getElementById("calc-btn-ecommerce");
  const slider = document.getElementById("calc-slider-pages");
  const sliderVal = document.getElementById("calc-pages-val");
  const warningText = document.getElementById("calc-pages-warning");

  // Site Type clicks
  if (btnLanding) {
    btnLanding.addEventListener("click", () => {
      setCalcType('landing', 1);
    });
  }
  if (btnBusiness) {
    btnBusiness.addEventListener("click", () => {
      setCalcType('business', 5);
    });
  }
  if (btnEcommerce) {
    btnEcommerce.addEventListener("click", () => {
      setCalcType('ecommerce', 10);
    });
  }

  function setCalcType(type, pageCount) {
    calculatorState.siteType = type;
    calculatorState.pageCount = pageCount;
    
    [btnLanding, btnBusiness, btnEcommerce].forEach(b => {
      b.classList.remove("border-indigo-600", "bg-indigo-50/40", "shadow-sm");
      b.classList.add("border-slate-100");
    });

    const activeBtn = document.getElementById(`calc-btn-${type}`);
    if (activeBtn) {
      activeBtn.classList.add("border-indigo-600", "bg-indigo-50/40", "shadow-sm");
      activeBtn.classList.remove("border-slate-100");
    }

    if (slider) {
      slider.value = pageCount;
    }
    if (sliderVal) {
      sliderVal.textContent = `${pageCount} Halaman`;
    }
    calculateCosts();
  }

  // Slider input
  if (slider) {
    slider.addEventListener("input", (e) => {
      const val = parseInt(e.target.value);
      calculatorState.pageCount = val;
      if (sliderVal) {
        sliderVal.textContent = `${val} Halaman`;
      }
      calculateCosts();
    });
  }

  // Addons Checkboxes
  const addonCheckboxes = document.querySelectorAll(".calc-addon-check");
  addonCheckboxes.forEach(chk => {
    chk.addEventListener("change", (e) => {
      const alias = chk.getAttribute("data-alias");
      calculatorState.addons[alias] = chk.checked;
      calculateCosts();
    });
  });

  // DP Percentage clicks
  const btnDp10 = document.getElementById("calc-dp-10");
  const btnDp50 = document.getElementById("calc-dp-50");
  
  if (btnDp10) {
    btnDp10.addEventListener("click", () => {
      calculatorState.dpPercentage = 10;
      btnDp10.classList.add("border-indigo-600", "bg-indigo-50/40", "text-indigo-950", "shadow-sm");
      btnDp10.classList.remove("border-slate-100", "text-slate-500");
      
      btnDp50.classList.add("border-slate-100", "text-slate-500");
      btnDp50.classList.remove("border-indigo-600", "bg-indigo-50/40", "text-indigo-950", "shadow-sm");
      calculateCosts();
    });
  }

  if (btnDp50) {
    btnDp50.addEventListener("click", () => {
      calculatorState.dpPercentage = 50;
      btnDp50.classList.add("border-indigo-600", "bg-indigo-50/40", "text-indigo-950", "shadow-sm");
      btnDp50.classList.remove("border-slate-100", "text-slate-500");
      
      btnDp10.classList.add("border-slate-100", "text-slate-500");
      btnDp10.classList.remove("border-indigo-600", "bg-indigo-50/40", "text-indigo-950", "shadow-sm");
      calculateCosts();
    });
  }

  // Inisialisasi awal kalkulator
  calculateCosts();
}

function calculateCosts() {
  let basePrice = 0;
  let typeLabel = '';
  
  if (calculatorState.siteType === 'landing') {
    basePrice = 999000;
    typeLabel = 'Landing Page';
  } else if (calculatorState.siteType === 'business') {
    basePrice = 1999000;
    typeLabel = 'Company Profile';
  } else {
    basePrice = 2999000;
    typeLabel = 'E-commerce';
  }

  // Cost per extra pages
  const standardLimit = calculatorState.siteType === 'landing' ? 1 : calculatorState.siteType === 'business' ? 5 : 10;
  const extraPages = Math.max(0, calculatorState.pageCount - standardLimit);
  const pageCost = extraPages * 50000;

  // Addons cost map
  let addonsCost = 0;
  let activeAddonsHTML = '';
  
  const addonPrices = {
    paymentGateway: 400000,
    multilingual: 250000,
    seoAdvanced: 150000,
    speedOptimize: 100000,
    authSystem: 500000,
    liveChat: 100000
  };

  const addonLabels = {
    paymentGateway: 'Gerbang Pembayaran QRIS',
    multilingual: 'Sistem Multi-Bahasa',
    seoAdvanced: 'Optimasi SEO Lanjut',
    speedOptimize: 'Kecepatan Ultra Speed',
    authSystem: 'Sistem Akun Member',
    liveChat: 'WhatsApp Support Widget'
  };

  // Render warning text if pages exceed limits
  const warningText = document.getElementById("calc-pages-warning");
  if (warningText) {
    if (extraPages > 0) {
      warningText.classList.remove("hidden");
    } else {
      warningText.classList.add("hidden");
    }
  }

  // Calculateaddons
  Object.entries(calculatorState.addons).forEach(([key, active]) => {
    if (active) {
      addonsCost += addonPrices[key];
      activeAddonsHTML += `
        <div class="flex justify-between text-xs">
          <span>• ${addonLabels[key]}:</span>
          <span class="text-white">+ ${formatCurrency(addonPrices[key])}</span>
        </div>
      `;
    }
  });

  const totalCost = Math.min(4000000, basePrice + pageCost + addonsCost);
  const dpAmount = Math.round((totalCost * calculatorState.dpPercentage) / 100);

  // Update DOM Outputs
  const baseLabelDom = document.getElementById("calc-out-base-label");
  const baseCostDom = document.getElementById("calc-out-base-cost");
  const extraPagesContainer = document.getElementById("calc-out-extra-container");
  const extraPagesLabel = document.getElementById("calc-out-extra-label");
  const extraPagesCost = document.getElementById("calc-out-extra-cost");
  const addonsContainer = document.getElementById("calc-out-addons-container");
  const totalCostDom = document.getElementById("calc-out-total");
  const dpPercentLabel = document.getElementById("calc-out-dp-label");
  const dpAmountDom = document.getElementById("calc-out-dp-amount");

  if (baseLabelDom) baseLabelDom.textContent = `Tipe Website (${calculatorState.siteType.toUpperCase()}):`;
  if (baseCostDom) baseCostDom.textContent = formatCurrency(basePrice);

  if (extraPagesContainer) {
    if (extraPages > 0) {
      extraPagesContainer.classList.remove("hidden");
      if (extraPagesLabel) extraPagesLabel.textContent = `Tambahan ${extraPages} Halaman:`;
      if (extraPagesCost) extraPagesCost.textContent = `+ ${formatCurrency(pageCost)}`;
    } else {
      extraPagesContainer.classList.add("hidden");
    }
  }

  if (addonsContainer) {
    addonsContainer.innerHTML = activeAddonsHTML;
  }

  if (totalCostDom) totalCostDom.textContent = formatCurrency(totalCost);
  if (dpPercentLabel) dpPercentLabel.textContent = `Down Payment (${calculatorState.dpPercentage}%):`;
  if (dpAmountDom) dpAmountDom.textContent = formatCurrency(dpAmount);

  // Simpan nilai terhitung ke variabel global agar bisa diambil modal
  window.calculatedProject = {
    total: totalCost,
    dp: dpAmount,
    label: `Kustom ${typeLabel} (${calculatorState.pageCount} Halaman)`,
    details: `Estimasi Kustom Proyek:
• Tipe: Tipe ${typeLabel}
• Jumlah Halaman: ${calculatorState.pageCount} Halaman
• Persentase DP: ${calculatorState.dpPercentage}%
• Total: ${formatCurrency(totalCost)}
• DP Terhitung: ${formatCurrency(dpAmount)}`
  };
}

// === INTERAKSI MODAL BRIEFING & QRIS ===
let selectedPackageGlobal = 'custom';
let selectedDescGlobal = '';
let isPaymentSimulated = false;

// Helper global untuk validasi input detail
function validateName(val) {
  const clean = val.trim();
  if (clean.length < 3) return { isValid: false, msg: "Nama lengkap terlalu pendek (minimal 3 karakter)." };
  // Hanya huruf, spasi, apostrop
  if (!/^[a-zA-Z\s']+$/.test(clean)) return { isValid: false, msg: "Nama hanya boleh berisi huruf alfabet dan spasi." };
  return { isValid: true };
}

function validateEmail(val) {
  const clean = val.trim();
  if (!clean) return { isValid: false, msg: "Email wajib diisi." };
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!pattern.test(clean)) return { isValid: false, msg: "Format email salah (contoh: nama@domain.com)." };
  return { isValid: true };
}

function validatePhone(val) {
  // Bersihkan karakter non-digit selain simbol plus awal
  const clean = val.trim().replace(/[\s\-\(\)]/g, "");
  if (!clean) return { isValid: false, msg: "Nomor WhatsApp wajib diisi." };
  if (!/^\+?\d+$/.test(clean)) return { isValid: false, msg: "Nomor harus berisikan angka saja." };
  
  // Periksa kesesuaian prefix Indonesia
  const hasValidPrefix = clean.startsWith("08") || clean.startsWith("62") || clean.startsWith("+62");
  if (!hasValidPrefix) return { isValid: false, msg: "Nomor WhatsApp harus diawali kode 08, 62, atau +62." };
  
  // Bersihkan prefix untuk hitung sisa digit murni
  const digitsOnly = clean.replace("+", "");
  if (digitsOnly.length < 9 || digitsOnly.length > 15) {
    return { isValid: false, msg: "Jumlah digit nomor tidak valid (harus 9 s.d 15 digit)." };
  }
  return { isValid: true };
}

function validateDesc(val) {
  const clean = val.trim();
  if (clean.length < 25) {
    return { isValid: false, msg: `Brief terlalu singkat (${clean.length}/25 karakter). Berikan detail lebih rinci.` };
  }
  return { isValid: true };
}

function updateValidationUI(inputEl, result, errorEl, statusEl, neutralIcon, successIcon, errorIcon) {
  if (!inputEl) return;
  if (result.isValid) {
    inputEl.classList.remove("border-indigo-100/80", "border-rose-500", "focus:border-indigo-400", "focus:ring-indigo-400", "focus:border-rose-600", "focus:ring-rose-500");
    inputEl.classList.add("border-emerald-500", "focus:border-emerald-600", "focus:ring-emerald-500");
    
    if (errorEl) {
      errorEl.classList.add("hidden");
      errorEl.textContent = "";
    }
    if (statusEl) {
      statusEl.textContent = "✓ Valid";
      statusEl.className = "text-[11px] font-bold text-emerald-600 normal-case";
    }
    if (neutralIcon) neutralIcon.classList.add("hidden");
    if (successIcon) successIcon.classList.remove("hidden");
    if (errorIcon) errorIcon.classList.add("hidden");
  } else {
    inputEl.classList.remove("border-indigo-100/80", "border-emerald-500", "focus:border-indigo-400", "focus:ring-indigo-400", "focus:border-emerald-600", "focus:ring-emerald-500");
    inputEl.classList.add("border-rose-500", "focus:border-rose-600", "focus:ring-rose-500");

    if (errorEl) {
      errorEl.classList.remove("hidden");
      errorEl.textContent = result.msg;
    }
    if (statusEl) {
      statusEl.textContent = "⚠ Tidak Valid";
      statusEl.className = "text-[11px] font-bold text-rose-500 normal-case";
    }
    if (neutralIcon) neutralIcon.classList.add("hidden");
    if (successIcon) successIcon.classList.add("hidden");
    if (errorIcon) errorIcon.classList.remove("hidden");
  }
}

function resetValidationUI(inputEl, errorEl, statusEl, neutralIcon, successIcon, errorIcon, defaultText = "Wajib") {
  if (!inputEl) return;
  inputEl.classList.remove("border-emerald-500", "border-rose-500", "focus:border-emerald-600", "focus:ring-emerald-500", "focus:border-rose-600", "focus:ring-rose-500");
  inputEl.classList.add("border-indigo-100/80", "focus:border-indigo-400", "focus:ring-indigo-400");
  
  if (errorEl) {
    errorEl.classList.add("hidden");
    errorEl.textContent = "";
  }
  if (statusEl) {
    statusEl.textContent = defaultText;
    statusEl.className = "text-slate-400 font-semibold normal-case";
  }
  if (neutralIcon) neutralIcon.classList.remove("hidden");
  if (successIcon) successIcon.classList.add("hidden");
  if (errorIcon) errorIcon.classList.add("hidden");
}

function initContactModal() {
  const modal = document.getElementById("contact-modal");
  const openBtns = document.querySelectorAll(".btn-trigger-modal");
  const closeBtn = document.getElementById("btn-close-modal");

  if (!modal) return;

  // Open modal triggers
  openBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const pkg = btn.getAttribute("data-package") || 'custom';
      let desc = btn.getAttribute("data-description") || '';
      
      // Jika dipicu dari tombol kalkulator, muat data hitungan interaktif!
      if (pkg === 'kalkulator_auto') {
        selectedPackageGlobal = window.calculatedProject ? window.calculatedProject.label : 'Kustom Spek Kalkulator';
        selectedDescGlobal = window.calculatedProject ? window.calculatedProject.details : '';
      } else {
        selectedPackageGlobal = pkg;
        selectedDescGlobal = desc;
      }

      openBriefingModal(selectedPackageGlobal, selectedDescGlobal);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeBriefingModal);
  }

  // Ambil elemen input
  const fieldName = document.getElementById("modal-field-name");
  const fieldEmail = document.getElementById("modal-field-email");
  const fieldPhone = document.getElementById("modal-field-phone");
  const fieldDesc = document.getElementById("modal-field-desc");

  // Elemen indicator status & icons
  const valErrName = document.getElementById("val-err-name");
  const valStatusName = document.getElementById("val-status-name");
  const iconNameNeutral = document.getElementById("icon-val-name-neutral");
  const iconNameSuccess = document.getElementById("icon-val-name-success");
  const iconNameError = document.getElementById("icon-val-name-error");

  const valErrEmail = document.getElementById("val-err-email");
  const valStatusEmail = document.getElementById("val-status-email");
  const iconEmailNeutral = document.getElementById("icon-val-email-neutral");
  const iconEmailSuccess = document.getElementById("icon-val-email-success");
  const iconEmailError = document.getElementById("icon-val-email-error");

  const valErrPhone = document.getElementById("val-err-phone");
  const valStatusPhone = document.getElementById("val-status-phone");
  const iconPhoneNeutral = document.getElementById("icon-val-phone-neutral");
  const iconPhoneSuccess = document.getElementById("icon-val-phone-success");
  const iconPhoneError = document.getElementById("icon-val-phone-error");

  const valErrDesc = document.getElementById("val-err-desc");
  const valStatusDesc = document.getElementById("val-status-desc");
  const valCounterDesc = document.getElementById("val-counter-desc");

  // Setup Event Listeners untuk feedback real-time saat mengetik
  if (fieldName) {
    fieldName.addEventListener("input", () => {
      if (fieldName.value.trim() === "") {
        resetValidationUI(fieldName, valErrName, valStatusName, iconNameNeutral, iconNameSuccess, iconNameError, "Sedang mengetik...");
      } else {
        const res = validateName(fieldName.value);
        updateValidationUI(fieldName, res, valErrName, valStatusName, iconNameNeutral, iconNameSuccess, iconNameError);
      }
    });
  }

  if (fieldEmail) {
    fieldEmail.addEventListener("input", () => {
      if (fieldEmail.value.trim() === "") {
        resetValidationUI(fieldEmail, valErrEmail, valStatusEmail, iconEmailNeutral, iconEmailSuccess, iconEmailError, "Wajib");
      } else {
        const res = validateEmail(fieldEmail.value);
        updateValidationUI(fieldEmail, res, valErrEmail, valStatusEmail, iconEmailNeutral, iconEmailSuccess, iconEmailError);
      }
    });
  }

  if (fieldPhone) {
    fieldPhone.addEventListener("input", () => {
      if (fieldPhone.value.trim() === "") {
        resetValidationUI(fieldPhone, valErrPhone, valStatusPhone, iconPhoneNeutral, iconPhoneSuccess, iconPhoneError, "Wajib");
      } else {
        const res = validatePhone(fieldPhone.value);
        updateValidationUI(fieldPhone, res, valErrPhone, valStatusPhone, iconPhoneNeutral, iconPhoneSuccess, iconPhoneError);
      }
    });
  }

  if (fieldDesc) {
    fieldDesc.addEventListener("input", () => {
      const charLen = fieldDesc.value.length;
      if (valCounterDesc) {
        valCounterDesc.textContent = `${charLen} / 25 karakter`;
        if (charLen >= 25) {
          valCounterDesc.className = "text-emerald-600 font-bold font-mono ml-auto";
        } else {
          valCounterDesc.className = "text-slate-400 font-mono ml-auto";
        }
      }

      if (fieldDesc.value.trim() === "") {
        resetValidationUI(fieldDesc, valErrDesc, valStatusDesc, null, null, null, "Min. 25 karakter");
      } else {
        const res = validateDesc(fieldDesc.value);
        updateValidationUI(fieldDesc, res, valErrDesc, valStatusDesc, null, null, null);
      }
    });
  }

  // Handle Form Submit (menuju ke simulator QRIS dengan validasi andal)
  const form = document.getElementById("modal-brief-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const nameVal = fieldName.value;
      const emailVal = fieldEmail.value;
      const phoneVal = fieldPhone.value;
      const companyVal = document.getElementById("modal-field-company").value;
      const packageVal = document.getElementById("modal-field-package").value;
      const descVal = fieldDesc.value;

      // Jalankan seluruh rangkaian validasi menyeluruh
      const resName = validateName(nameVal);
      const resEmail = validateEmail(emailVal);
      const resPhone = validatePhone(phoneVal);
      const resDesc = validateDesc(descVal);

      // Render evaluasi error pada form
      updateValidationUI(fieldName, resName, valErrName, valStatusName, iconNameNeutral, iconNameSuccess, iconNameError);
      updateValidationUI(fieldEmail, resEmail, valErrEmail, valStatusEmail, iconEmailNeutral, iconEmailSuccess, iconEmailError);
      updateValidationUI(fieldPhone, resPhone, valErrPhone, valStatusPhone, iconPhoneNeutral, iconPhoneSuccess, iconPhoneError);
      updateValidationUI(fieldDesc, resDesc, valErrDesc, valStatusDesc, null, null, null);

      const isFormValid = resName.isValid && resEmail.isValid && resPhone.isValid && resDesc.isValid;

      if (!isFormValid) {
        // Fokuskan elemen pertama yang salah
        if (!resName.isValid) {
          fieldName.focus();
        } else if (!resEmail.isValid) {
          fieldEmail.focus();
        } else if (!resPhone.isValid) {
          fieldPhone.focus();
        } else if (!resDesc.isValid) {
          fieldDesc.focus();
        }
        
        // Buat efek getar kecil pada submit button sebagai isyarat gagal
        const submitBtn = document.getElementById("modal-btn-submit");
        if (submitBtn) {
          submitBtn.classList.add("animate-shake");
          setTimeout(() => submitBtn.classList.remove("animate-shake"), 500);
        }
        return;
      }

      // Kunci data global jika validasi sukses
      window.clientData = {
        name: nameVal.trim(),
        email: emailVal.trim(),
        phone: phoneVal.trim(),
        company: companyVal.trim() || '-',
        pkg: packageVal,
        desc: descVal.trim()
      };

      // Tampilkan proses loading sebentar
      const submitBtn = document.getElementById("modal-btn-submit");
      const submitText = document.getElementById("modal-btn-submit-text");
      const submitSpinner = document.getElementById("modal-btn-submit-spinner");

      if (submitBtn) submitBtn.disabled = true;
      if (submitSpinner) submitSpinner.classList.remove("hidden");
      if (submitText) submitText.textContent = "Memverifikasi Brief...";

      setTimeout(() => {
        // Pulihkan tombol
        if (submitBtn) submitBtn.disabled = false;
        if (submitSpinner) submitSpinner.classList.add("hidden");
        if (submitText) submitText.textContent = "Kirim Formulir Briefing";

        // Alihkan kontainer modal ke Layar Konfirmasi QRIS
        transitionToConfirmationScreen();
      }, 1200);
    });
  }
}

window.openBriefingModal = function(packageName, description) {
  selectedPackageGlobal = packageName || 'custom';
  selectedDescGlobal = description || '';
  isPaymentSimulated = false;

  const modal = document.getElementById("contact-modal");
  if (!modal) return;

  // Set values to fields
  const fieldPkg = document.getElementById("modal-field-package");
  const fieldDesc = document.getElementById("modal-field-desc");
  const fieldName = document.getElementById("modal-field-name");
  const fieldEmail = document.getElementById("modal-field-email");
  const fieldPhone = document.getElementById("modal-field-phone");
  const fieldCompany = document.getElementById("modal-field-company");

  if (fieldName) fieldName.value = '';
  if (fieldEmail) fieldEmail.value = '';
  if (fieldPhone) fieldPhone.value = '';
  if (fieldCompany) fieldCompany.value = '';

  if (fieldPkg) {
    // Pilih option yang paling pas atau masukkan ke dropdown
    fieldPkg.value = mapPackageToDropdownValue(selectedPackageGlobal);
  }

  if (fieldDesc) {
    fieldDesc.value = selectedDescGlobal;
  }

  // Reset visual error dan status indikator
  const valErrName = document.getElementById("val-err-name");
  const valStatusName = document.getElementById("val-status-name");
  const iconNameNeutral = document.getElementById("icon-val-name-neutral");
  const iconNameSuccess = document.getElementById("icon-val-name-success");
  const iconNameError = document.getElementById("icon-val-name-error");

  const valErrEmail = document.getElementById("val-err-email");
  const valStatusEmail = document.getElementById("val-status-email");
  const iconEmailNeutral = document.getElementById("icon-val-email-neutral");
  const iconEmailSuccess = document.getElementById("icon-val-email-success");
  const iconEmailError = document.getElementById("icon-val-email-error");

  const valErrPhone = document.getElementById("val-err-phone");
  const valStatusPhone = document.getElementById("val-status-phone");
  const iconPhoneNeutral = document.getElementById("icon-val-phone-neutral");
  const iconPhoneSuccess = document.getElementById("icon-val-phone-success");
  const iconPhoneError = document.getElementById("icon-val-phone-error");

  const valErrDesc = document.getElementById("val-err-desc");
  const valStatusDesc = document.getElementById("val-status-desc");
  const valCounterDesc = document.getElementById("val-counter-desc");

  resetValidationUI(fieldName, valErrName, valStatusName, iconNameNeutral, iconNameSuccess, iconNameError, "Sedang mengetik...");
  resetValidationUI(fieldEmail, valErrEmail, valStatusEmail, iconEmailNeutral, iconEmailSuccess, iconEmailError, "Wajib");
  resetValidationUI(fieldPhone, valErrPhone, valStatusPhone, iconPhoneNeutral, iconPhoneSuccess, iconPhoneError, "Wajib");
  resetValidationUI(fieldDesc, valErrDesc, valStatusDesc, null, null, null, "Min. 25 karakter");

  // Jika ada description pemicu (bawaan dari kalkulator), validasi langsung agar user melihat keabsahannya
  if (selectedDescGlobal.trim() !== '') {
    const resDesc = validateDesc(selectedDescGlobal);
    updateValidationUI(fieldDesc, resDesc, valErrDesc, valStatusDesc, null, null, null);
    if (valCounterDesc) {
      valCounterDesc.textContent = `${selectedDescGlobal.length} / 25 karakter`;
      if (selectedDescGlobal.length >= 25) {
        valCounterDesc.className = "text-emerald-600 font-bold font-mono ml-auto";
      } else {
        valCounterDesc.className = "text-slate-400 font-mono ml-auto";
      }
    }
  } else {
    if (valCounterDesc) {
      valCounterDesc.textContent = "0 / 25 karakter";
      valCounterDesc.className = "text-slate-400 font-mono ml-auto";
    }
  }

  // Pastikan form utama terlihat dan konfirmasi QRIS disembunyikan
  document.getElementById("modal-brief-form").classList.remove("hidden");
  document.getElementById("modal-confirmation-view").classList.add("hidden");

  // Tampilkan modal overlay
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // Kunci scroll layar utama
};

window.closeBriefingModal = function() {
  const modal = document.getElementById("contact-modal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = ""; // Pulihkan scroll layar
  }
};

function mapPackageToDropdownValue(pkgText) {
  if (pkgText.includes("Landing Page")) return "Landing Page";
  if (pkgText.includes("Website Bisnis") || pkgText.includes("BUSINESS")) return "Website Bisnis";
  if (pkgText.includes("E-Commerce") || pkgText.includes("ECOMMERCE")) return "E-Commerce / Toko Online";
  if (pkgText.includes("Layanan Email")) return "Layanan Email Bisnis";
  if (pkgText.includes("AI Email")) return "AI Email Marketing Reach";
  return "custom";
}

function transitionToConfirmationScreen() {
  document.getElementById("modal-brief-form").classList.add("hidden");
  
  const confirmView = document.getElementById("modal-confirmation-view");
  confirmView.classList.remove("hidden");

  // Render detail nama & info antrean dari clientData
  const clientNameInfo = document.getElementById("confirm-client-name");
  if (clientNameInfo) {
    clientNameInfo.textContent = window.clientData.name;
  }

  // Hitung harga paket
  let basePrice = 1999000;
  let pct = 10; // default DP %

  const pkgValue = window.clientData.pkg;
  if (pkgValue === 'Landing Page') {
    basePrice = 999000;
  } else if (pkgValue === 'E-Commerce / Toko Online' || pkgValue === 'Website Bisnis' || pkgValue.includes('E-commerce')) {
    basePrice = pkgValue.includes('E-commerce') || pkgValue.includes('Toko Online') ? 2999000 : 1999000;
  } else if (pkgValue === 'Layanan Email Bisnis') {
    basePrice = 850000;
    pct = 50;
  } else if (pkgValue === 'AI Email Marketing Reach') {
    basePrice = 1500000;
    pct = 50;
  } else if (pkgValue === 'custom' || pkgValue.includes('Kustom')) {
    basePrice = 3500000;
  }

  // Jika dipicu dari kalkulator kustom, pakai harga kalkulator yang presisi!
  if (selectedPackageGlobal.startsWith("Kustom Tipe")) {
    basePrice = window.calculatedProject ? window.calculatedProject.total : basePrice;
    pct = calculatorState.dpPercentage;
  }

  basePrice = Math.min(4000000, basePrice);
  const dpPrice = Math.round((basePrice * pct) / 100);

  // Isikan Ke DOM konfirmasi
  document.getElementById("confirm-pkg-label").textContent = window.clientData.pkg;
  document.getElementById("confirm-pkg-pct").textContent = `Down Payment (DP ${pct}%)`;
  document.getElementById("confirm-pkg-total-strike").textContent = formatCurrency(basePrice);
  document.getElementById("confirm-pkg-dp-amount").textContent = formatCurrency(dpPrice);

  // Transaksi ID random
  const trxId = `TRX-WP-${Math.floor(Math.random() * 90000) + 10000}`;
  
  // Set link WhatsApp & Email Hubungi kami
  const waAnchor = document.getElementById("confirm-wa-anchor");
  if (waAnchor) {
    const rawMsg = `Halo Kak Najib (WebPreneur), saya ${window.clientData.name} baru saja mengisi formulir penawaran untuk paket "${window.clientData.pkg}".\n\nNo. Transaksi: ${trxId}\nBrand/Merek Usaha: ${window.clientData.company || '-'}\nTotal Investasi: ${formatCurrency(basePrice)}\nSisa pelunasan di luar DP: ${formatCurrency(basePrice - dpPrice)}\n\nKomentar / Catatan Singkat:\n"${window.clientData.desc || '-'}"\n\nMohon bantu siapkan layout pertama ya, terima kasih!`;
    waAnchor.setAttribute("href", `https://wa.me/6289502326163?text=${encodeURIComponent(rawMsg)}`);
  }

  const emailAnchor = document.getElementById("confirm-email-anchor");
  if (emailAnchor) {
    const emailSubject = `Pemesanan Jasa WebPreneur - ${window.clientData.name}`;
    const emailBody = `Halo Kelompok 1 PIPAS,\n\nSaya telah mengajukan pesanan dengan rincian berikut:\n\n• Nama Anda: ${window.clientData.name}\n• WhatsApp: ${window.clientData.phone}\n• Email: ${window.clientData.email}\n• Nama Perusahaan: ${window.clientData.company}\n• Paket: ${window.clientData.pkg}\n• Total Biaya: ${formatCurrency(basePrice)}\n• Kebutuhan Khusus: ${window.clientData.desc || '-'}\n\nAntreaan tercatat dengan TRX-ID: ${trxId}.\n\nSalam hangat,\n${window.clientData.name}`;
    emailAnchor.setAttribute("href", `mailto:kelompok1pipas@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`);
  }

  // Reset Tampilan Simulator Bayar QRIS ke status Belum Lunas
  document.getElementById("confirm-qris-scanning-card").classList.remove("hidden");
  document.getElementById("confirm-qris-paid-card").classList.add("hidden");

  // Setup tombol simulasi pembayaran lunas
  const qrisSimBtn = document.getElementById("confirm-btn-sim-pay");
  if (qrisSimBtn) {
    qrisSimBtn.onclick = () => {
      // Tampilkan filter loading pada QR code
      const loaderSim = document.getElementById("qris-status-loading-mask");
      if (loaderSim) loaderSim.classList.remove("hidden");

      setTimeout(() => {
        if (loaderSim) loaderSim.classList.add("hidden");
        // Update struk lunas
        document.getElementById("receipt-trx-id").textContent = trxId;
        document.getElementById("receipt-date").textContent = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
        document.getElementById("receipt-dp-amount").textContent = formatCurrency(dpPrice);

        // Alihkan layar ke Struk Lunas Terkonfirmasi
        document.getElementById("confirm-qris-scanning-card").classList.add("hidden");
        document.getElementById("confirm-qris-paid-card").classList.remove("hidden");
        
        isPaymentSimulated = true;

        // update anchor wa pasca lunas
        if (waAnchor) {
          const rawMsgPaid = `Halo Kak Najib (WebPreneur), saya ${window.clientData.name} baru saja mengonfirmasi pembayaran simulasi DP via QRIS senilai ${formatCurrency(dpPrice)} untuk paket "${window.clientData.pkg}".\n\nNo. Transaksi Lunas: ${trxId}\nBrand usaha: ${window.clientData.company || '-'}\nSisa tagihan: ${formatCurrency(basePrice - dpPrice)}\n\nMohon bantu arahkan slot pengerjaan kami. Terima kasih!`;
          waAnchor.setAttribute("href", `https://wa.me/6289502326163?text=${encodeURIComponent(rawMsgPaid)}`);
        }
      }, 1500);
    };
  }
}

// === SISTEM FEEDBACK & ULASAN OFFLINE ===
function loadAndRenderReviews() {
  const initialized = localStorage.getItem('webpreneur_feedbacks_initialized');
  
  if (initialized !== 'true') {
     const defaultReviews = [
       {
         id: "tpl-1",
         name: "Drs. H. Hadiantono, M.Pd.",
         role: "Guru Pengampu PIPAS",
         rating: 5,
         comment: "Kreativitas Kelompok 1 sangat luar biasa! Integrasi konsep server hemat beban energi (IPA) dan pemberdayaan literasi UMKM (IPS) digabungkan dengan aplikasi riil kalkulator proyek. Sangat layak memperoleh nilai sempurna A+.",
         date: "20 Mei 2026",
         isLocal: true
       },
       {
         id: "tpl-2",
         name: "Rizky Ramadhan",
         role: "Siswa Kelas X PPLG (RPL) Kolega",
         rating: 5,
         comment: "Desain web-nya premium banget! Gak nyangka anak kelas X udah bisa bikin landing page sekompleks ini dengan layout rapi dan simulasi invoice QRIS langsung lunas terkonfirmasi. Mantap bro Najib!",
         date: "19 Mei 2026",
         isLocal: true
       },
       {
         id: "tpl-3",
         name: "Bu Retno (Pemilik Warung Snack)",
         role: "Pelaku UMKM (Mitra Kajian IPS)",
         rating: 5,
         comment: "Terima kasih banyak tim WebPreneur telah mendalami kendala usaha kecil kami. Analisis kalkulator harganya transparan, dan kalau punya website begini bisnis kami jadi kelihatan modern sekali.",
         date: "18 Mei 2026",
         isLocal: true
       }
     ];
     localStorage.setItem('webpreneur_feedbacks', JSON.stringify(defaultReviews));
     localStorage.setItem('webpreneur_feedbacks_initialized', 'true');
  }

  const saved = localStorage.getItem('webpreneur_feedbacks');
  let savedLocal = [];
  
  if (saved) {
    try {
      savedLocal = JSON.parse(saved);
    } catch (e) {
      savedLocal = [];
    }
  }

  // Gabungkan review template utama (tidak bisa dihapus) dengan review user dari localStorage
  reviews = [...initialTemplates, ...savedLocal];
  renderReviewsList();
}

function renderReviewsList() {
  const listContainer = document.getElementById("feedback-list-container");
  const countBadge = document.getElementById("feedback-total-count");

  if (!listContainer) return;

  if (countBadge) {
    countBadge.textContent = `Semua Kontribusi Ulasan (${reviews.length})`;
  }

  if (reviews.length === 0) {
    listContainer.innerHTML = `
      <div class="text-center py-12 bg-slate-50/40 rounded-2xl border border-dashed border-indigo-50 p-6">
        <p class="text-xs text-slate-500">Belum ada ulasan yang tersimpan. Jadilah yang pertama memberikan masukan!</p>
      </div>
    `;
    return;
  }

  listContainer.innerHTML = reviews.map(item => {
    // Generate Stars HTML
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
      starsHTML += `
        <i data-lucide="star" class="w-3.5 h-3.5 ${
          i <= item.rating 
            ? 'text-amber-400 fill-amber-400' 
            : 'text-slate-200 fill-none'
        }"></i>
      `;
    }

    // Generate bottom action bar (apakah item offline bikinan sendiri atau template)
    let bottomActionBar = '';
    if (item.isLocal) {
      bottomActionBar = `
        <div class="flex items-center justify-between mt-3 pt-2 text-[10px] border-t border-slate-100/60">
          <span class="text-indigo-500 font-bold flex items-center">
            <i data-lucide="sparkles" class="w-3 h-3 mr-1 animate-pulse"></i>
            Ulasan Tersimpan Offline di Browser Anda
          </span>
          <button
            type="button"
            onclick="deleteLocalReview('${item.id}')"
            class="text-red-500 hover:text-red-700 p-1 flex items-center space-x-1 cursor-pointer font-bold transition-all hover:bg-red-50 rounded"
          >
            <i data-lucide="trash-2" class="w-3.5 h-3.5 mr-0.5"></i>
            <span>Hapus</span>
          </button>
        </div>
      `;
    } else {
      bottomActionBar = `
        <div class="mt-3 pt-2 border-t border-slate-100/60 flex justify-end">
          <span class="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-100 uppercase tracking-widest">
            ✓ Kontributor Terverifikasi
          </span>
        </div>
      `;
    }

    return `
      <div class="bg-slate-50/20 border border-indigo-50/45 rounded-2xl p-5 hover:bg-white hover:shadow-md transition-all relative group">
        
        <!-- Header row of review -->
        <div class="flex items-center justify-between gap-4">
          <div class="space-y-0.5">
            <span class="font-black text-indigo-950 text-xs sm:text-sm tracking-tight block">
              ${item.name}
            </span>
            <div class="flex items-center space-x-2">
              <span class="text-[10px] font-bold text-indigo-600">
                ${item.role}
              </span>
              <span class="text-[8px] text-slate-400 font-medium">• ${item.date}</span>
            </div>
          </div>

          <!-- Rating Stars -->
          <div class="flex items-center space-x-0.5 flex-shrink-0">
            ${starsHTML}
          </div>
        </div>

        <!-- Review Comment Text -->
        <p class="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-normal mt-3 bg-white/70 p-3 rounded-xl border border-indigo-50/30">
          ${item.comment}
        </p>

        <!-- Dynamic Action Row -->
        ${bottomActionBar}

      </div>
    `;
  }).join("");

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

let activeRatingSelector = 5;

function initFeedbackForm() {
  const starsGroup = document.querySelectorAll(".feedback-star-selector-btn");
  const form = document.getElementById("feedback-interactive-form");
  const successBlock = document.getElementById("feedback-success-block");
  const errorBlock = document.getElementById("feedback-error-block");
  const errorText = document.getElementById("feedback-error-text");

  // Mengatur interaksi klik & hover bintang ulasan
  starsGroup.forEach(btn => {
    btn.addEventListener("click", () => {
      const starRating = parseInt(btn.getAttribute("data-star"));
      activeRatingSelector = starRating;
      updateStarsUI(starRating);
    });

    // Hover effect
    btn.addEventListener("mouseenter", () => {
      const starRating = parseInt(btn.getAttribute("data-star"));
      updateStarsUI(starRating, true);
    });

    btn.addEventListener("mouseleave", () => {
      updateStarsUI(activeRatingSelector);
    });
  });

  function updateStarsUI(rating, isHover = false) {
    const starLabel = document.getElementById("feedback-rating-numerical-label");
    if (starLabel) {
      starLabel.textContent = `(${rating} / 5)`;
    }

    starsGroup.forEach(btn => {
      const starVal = parseInt(btn.getAttribute("data-star"));
      const icon = btn.querySelector("i");
      if (icon) {
        if (starVal <= rating) {
          icon.classList.add("text-amber-400", "fill-amber-400");
          icon.classList.remove("text-slate-350", "fill-none");
        } else {
          icon.classList.remove("text-amber-400", "fill-amber-400");
          icon.classList.add("text-slate-350", "fill-none");
        }
      }
    });
  }

  // Handle ulasan form submit
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      if (errorBlock) errorBlock.classList.add("hidden");
      if (successBlock) successBlock.classList.add("hidden");

      const inputName = document.getElementById("feedback-field-name").value.trim();
      const inputRole = document.getElementById("feedback-field-role").value;
      const inputComment = document.getElementById("feedback-field-comment").value.trim();

      // Validasi input
      if (!inputName) {
        showError("Mohon masukkan Nama Lengkap Anda.");
        return;
      }
      if (!inputComment) {
        showError("Mohon berikan ulasan atau komentar masukan Anda.");
        return;
      }

      // Buat data item ulasan baru
      const newReviewItem = {
        id: `usr-${Date.now()}`,
        name: inputName,
        role: inputRole,
        rating: activeRatingSelector,
        comment: inputComment,
        date: new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }),
        isLocal: true
      };

      // Simpan ke localStorage (hanya bikinan user saja yang masuk storage)
      const savedRaw = localStorage.getItem('webpreneur_feedbacks');
      let savedLocalArray = [];
      if (savedRaw) {
        try {
          savedLocalArray = JSON.parse(savedRaw);
        } catch (e) {
          savedLocalArray = [];
        }
      }

      savedLocalArray.unshift(newReviewItem); // Insert di paling atas
      localStorage.setItem('webpreneur_feedbacks', JSON.stringify(savedLocalArray));

      // Re-load reviews dan bersihkan form
      loadAndRenderReviews();
      
      document.getElementById("feedback-field-name").value = '';
      document.getElementById("feedback-field-comment").value = '';
      activeRatingSelector = 5;
      updateStarsUI(5);

      if (successBlock) {
        successBlock.classList.remove("hidden");
        setTimeout(() => {
          successBlock.classList.add("hidden");
        }, 4000);
      }
    });
  }

  function showError(msg) {
    if (errorBlock && errorText) {
      errorText.textContent = msg;
      errorBlock.classList.remove("hidden");
    }
  }
}

// Handler hapus ulasan local
window.deleteLocalReview = function(id) {
  const savedRaw = localStorage.getItem('webpreneur_feedbacks');
  if (savedRaw) {
    try {
      const savedLocalStore = JSON.parse(savedRaw);
      const filtered = savedLocalStore.filter(r => r.id !== id);
      localStorage.setItem('webpreneur_feedbacks', JSON.stringify(filtered));
    } catch (e) {
      // ignore error
    }
  }

  // Refresh tampilan list ulasan
  loadAndRenderReviews();
};

// === ACCORDION FAQ ===
function initFAQAccordion() {
  const faqHeaders = document.querySelectorAll(".faq-item-header");
  faqHeaders.forEach(hd => {
    hd.addEventListener("click", () => {
      const body = hd.nextElementSibling;
      const arrow = hd.querySelector(".faq-arrow-icon");
      
      // Ambil seluruh FAQ yang terbuka, lalu tutup terlebih dahulu
      document.querySelectorAll(".faq-item-body").forEach(b => {
        if (b !== body) {
          b.classList.add("max-h-0", "opacity-0");
          b.classList.remove("max-h-96", "opacity-100", "mt-3");
          const otherArrow = b.previousElementSibling.querySelector(".faq-arrow-icon");
          if (otherArrow) otherArrow.classList.remove("rotate-180");
        }
      });

      // Buka item aktif
      body.classList.toggle("max-h-0");
      body.classList.toggle("opacity-0");
      body.classList.toggle("max-h-96");
      body.classList.toggle("opacity-100");
      body.classList.toggle("mt-3");
      
      if (arrow) {
        arrow.classList.toggle("rotate-180");
      }
    });
  });
}

function renderFAQ() {
  const container = document.getElementById("faq-accordion-container");
  if (!container) return;

  const categories = [
    { id: "General", label: "General", desc: "Pertanyaan mendasar seputar proyek WebPreneur Kelompok 1", icon: "help-circle" },
    { id: "Technical", label: "Technical", desc: "Arsitektur performa, hemat kapasitas server, dan email bisnis", icon: "cpu" },
    { id: "Payments", label: "Payments", desc: "Kalkulasi harga proyek, pembayaran DP, dan simulasi QRIS lunas", icon: "wallet" }
  ];

  let htmlContent = "";

  categories.forEach(cat => {
    const items = faqData.filter(item => item.category === cat.id);
    if (!items.length) return;

    htmlContent += `
      <!-- Category Block: ${cat.label} -->
      <div class="bg-white rounded-2xl border border-indigo-150/45 p-6 sm:p-8 space-y-6 shadow-xs">
        <div class="flex items-start space-x-3 border-b border-indigo-100 pb-4">
          <div class="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700 flex-shrink-0">
            <i data-lucide="${cat.icon}" class="w-5 h-5 text-indigo-800"></i>
          </div>
          <div>
            <div class="flex items-center space-x-2.5">
              <h3 class="font-black text-indigo-950 text-sm sm:text-base tracking-tight">${cat.label}</h3>
              <span class="text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-100/30 px-2 py-0.5 rounded-full">
                ${items.length} Pertanyaan
              </span>
            </div>
            <p class="text-[11px] sm:text-xs text-slate-500 font-medium leading-normal mt-0.5">${cat.desc}</p>
          </div>
        </div>

        <div class="space-y-5 divide-y divide-indigo-50/70">
          ${items.map((item, idx) => `
            <div class="${idx > 0 ? 'pt-4' : ''}">
              <button 
                type="button" 
                class="faq-item-header w-full flex items-center justify-between text-left focus:outline-none transition-colors group cursor-pointer"
              >
                <span class="font-extrabold text-indigo-950 text-[13px] sm:text-[14.5px] group-hover:text-indigo-600 transition-colors leading-snug">
                  ${item.q}
                </span>
                <i data-lucide="chevron-down" class="faq-arrow-icon w-4 h-4 text-indigo-500/85 transition-transform duration-300 flex-shrink-0 ml-4"></i>
              </button>
              
              <!-- Collapsible Body Content -->
              <div class="faq-item-body max-h-0 opacity-0 overflow-hidden transition-all duration-350 text-xs sm:text-[13px] leading-relaxed text-slate-500 font-normal">
                <p class="bg-indigo-50/15 p-3.5 mt-2.5 rounded-xl border border-indigo-100/20">
                  ${item.a}
                </p>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  });

  container.innerHTML = `<div class="space-y-8">${htmlContent}</div>`;

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Re-bind accordion listeners dynamically to newly rendered DOM elements
  initFAQAccordion();
}

// === VIEWPORT SCROLL REVEAL OBSERVER ===
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".scroll-reveal");
  if (revealElements.length === 0) return;

  const observerOptions = {
    root: null,
    threshold: 0.05, // Mengetuk segera setelah 5% wilayah elemen masuk layar
    rootMargin: "0px 0px -40px 0px" // Terpancing sebelum sepenuhnya muncul
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Hapus kelas inisial yang tersembunyi, pasang transisi penuh ke kondisi aktif
        entry.target.classList.remove("opacity-0", "translate-y-8", "scale-98");
        entry.target.classList.add("opacity-100", "translate-y-0", "scale-100");
        
        // Hentikan pemantauan elemen yang telah berhasil di-reveal untuk efisiensi
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => {
    // Siapkan transisi mulus dan kondisi state sembunyi mula-mula
    el.classList.add("opacity-0", "translate-y-8", "scale-98", "transition-all", "duration-850", "ease-out", "transform");
    revealObserver.observe(el);
  });
}

