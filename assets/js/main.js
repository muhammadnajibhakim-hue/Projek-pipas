/**
 * WebPreneur - Jasa Pembuatan Website Interactive JavaScript
 * Author: Senior Front-End Developer & UI/UX Designer
 * Description: Navbar scroll effects, responsive hamburger menu, billing cycle toggles, and WhatsApp form submission triggers.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header Scroll Effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu on clicking any navigation anchors
    const mobileLinks = mobileMenu.querySelectorAll('button, a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 3. Dynamic Pricing Annual/Setup Toggle
  const btnMonthly = document.getElementById('btn-monthly');
  const btnAnnual = document.getElementById('btn-annual');
  const priceLanding = document.getElementById('price-landing');
  const priceBusiness = document.getElementById('price-business');
  const priceCommerce = document.getElementById('price-commerce');

  if (btnMonthly && btnAnnual) {
    const updatePrices = (isAnnual) => {
      if (isAnnual) {
        btnMonthly.classList.remove('active', 'bg-white', 'text-indigo-900', 'shadow-sm');
        btnMonthly.classList.add('text-slate-500');
        btnAnnual.classList.add('active', 'bg-indigo-600', 'text-white', 'shadow-sm');
        btnAnnual.classList.remove('text-slate-500');

        if (priceLanding) priceLanding.textContent = 'Rp 1.039.000';
        if (priceBusiness) priceBusiness.textContent = 'Rp 2.799.000';
        if (priceCommerce) priceCommerce.textContent = 'Rp 4.799.000';
      } else {
        btnAnnual.classList.remove('active', 'bg-indigo-600', 'text-white', 'shadow-sm');
        btnAnnual.classList.add('text-slate-500');
        btnMonthly.classList.add('active', 'bg-white', 'text-indigo-900', 'shadow-sm');
        btnMonthly.classList.remove('text-slate-500');

        if (priceLanding) priceLanding.textContent = 'Rp 1.299.000';
        if (priceBusiness) priceBusiness.textContent = 'Rp 3.499.000';
        if (priceCommerce) priceCommerce.textContent = 'Rp 5.999.000';
      }
    };

    btnMonthly.addEventListener('click', () => updatePrices(false));
    btnAnnual.addEventListener('click', () => updatePrices(true));
  }

  // 4. Contact Modal Controls
  const modal = document.getElementById('contact-modal');
  const modalClose = document.getElementById('modal-close');
  const modalPackageSelect = document.getElementById('modal-package');
  const ctaButtons = document.querySelectorAll('[data-cta-packet]');
  const formContact = document.getElementById('form-contact');
  const successMessage = document.getElementById('success-message');
  const formFields = document.getElementById('form-fields');

  // Open modal & set selected package
  ctaButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const packageSelected = btn.getAttribute('data-cta-packet');
      if (modalPackageSelect && packageSelected) {
        modalPackageSelect.value = packageSelected;
      }
      if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      }
    });
  });

  // Close modal
  if (modalClose) {
    modalClose.addEventListener('click', () => {
      closeModal();
    });
  }

  // Close on backdrop click
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  const closeModal = () => {
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
    if (successMessage) successMessage.classList.add('hidden');
    if (formFields) formFields.classList.remove('hidden');
  };

  // 5. Submit Event Handler (Success Simulation + WhatsApp Route)
  if (formContact) {
    formContact.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = formContact.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Memproses...';

      // Simulate network request
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

        const name = document.getElementById('modal-name').value;
        const phone = document.getElementById('modal-phone').value;
        const selectedPkg = modalPackageSelect ? modalPackageSelect.value : 'Custom Spec';

        if (formFields && successMessage) {
          formFields.classList.add('hidden');
          successMessage.classList.remove('hidden');
          
          const successNameText = document.getElementById('success-name-text');
          if (successNameText) successNameText.textContent = name;
        }

        // Auto trigger WhatsApp redirect
        setTimeout(() => {
          const waUrl = `https://wa.me/628123456789?text=Halo%252520WebPreneur%252520saya%252520sudah%25252520mengisi%252520brief%252520website%252520dari%252520nama%252520${encodeURIComponent(name)}%252520untuk%252520paket%252520${encodeURIComponent(selectedPkg)}`;
          window.open(waUrl, '_blank');
        }, 1500);

      }, 1200);
    });
  }
});

// Scroll helper
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
