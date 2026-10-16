/**
 * JAPOLIC — Developer Infrastructure Landing Experience
 * Zyner Web Design Internship Assessment Submission
 * Pure Vanilla JavaScript (ES6+) • Zero Frameworks
 */

(function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // 1. DOM Elements & State
  // ---------------------------------------------------------------------------
  const siteHeader = document.getElementById('siteHeader');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const desktopNavLinks = document.querySelectorAll('.desktop-nav .nav-link');
  
  // Modal Elements
  const assessmentModal = document.getElementById('assessmentModal');
  const openAssessmentBtn = document.getElementById('openAssessmentBtn');
  const mobAssessmentBtn = document.getElementById('mobAssessmentBtn');
  const footerAssessmentBtn = document.getElementById('footerAssessmentBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  
  // Terminal Copy Button
  const copyCmdBtn = document.getElementById('copyCmdBtn');
  const copyCmdLabel = document.getElementById('copyCmdLabel');
  const heroCommandText = document.getElementById('heroCommandText');

  // Contact Form Elements
  const contactForm = document.getElementById('contactForm');
  const formSuccessCard = document.getElementById('formSuccessCard');
  const resetFormBtn = document.getElementById('resetFormBtn');
  const successRefCode = document.getElementById('successRefCode');

  // Form Fields
  const fullNameInput = document.getElementById('fullName');
  const fullNameError = document.getElementById('fullNameError');
  const workEmailInput = document.getElementById('workEmail');
  const workEmailError = document.getElementById('workEmailError');
  const userRoleSelect = document.getElementById('userRole');
  const userRoleError = document.getElementById('userRoleError');
  const workloadTypeSelect = document.getElementById('workloadType');
  const workloadTypeError = document.getElementById('workloadTypeError');
  const projectMessageInput = document.getElementById('projectMessage');
  const messageError = document.getElementById('messageError');

  // Track prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------------------------------------------------------------------------
  // 2. Mobile Navigation Toggle & Drawer
  // ---------------------------------------------------------------------------
  function setMobileMenuState(isOpen) {
    if (!mobileMenuBtn || !mobileNavDrawer) return;

    mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    if (isOpen) {
      mobileNavDrawer.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      // Set focus to the first link inside drawer
      const firstLink = mobileNavDrawer.querySelector('a, button');
      if (firstLink) firstLink.focus();
    } else {
      mobileNavDrawer.classList.remove('is-open');
      document.body.style.overflow = '';
      mobileMenuBtn.focus();
    }
  }

  if (mobileMenuBtn && mobileNavDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      setMobileMenuState(!isExpanded);
    });

    mobileNavLinks.forEach((link) => {
      link.addEventListener('click', () => {
        setMobileMenuState(false);
      });
    });

    const mobCtaBtn = document.getElementById('mobCtaBtn');
    if (mobCtaBtn) {
      mobCtaBtn.addEventListener('click', () => {
        setMobileMenuState(false);
      });
    }
  }

  // ---------------------------------------------------------------------------
  // 3. Smooth Navigation Scroll with Header Offset
  // ---------------------------------------------------------------------------
  function smoothScrollToTarget(targetId) {
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    const headerHeight = siteHeader ? siteHeader.offsetHeight : 72;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight + 2;

    window.scrollTo({
      top: offsetPosition,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetHref = this.getAttribute('href');
      if (targetHref === '#' || !targetHref.startsWith('#')) return;

      const targetEl = document.querySelector(targetHref);
      if (targetEl) {
        e.preventDefault();
        smoothScrollToTarget(targetHref);

        // Update URL hash without jumping
        if (history.pushState) {
          history.pushState(null, null, targetHref);
        }
      }
    });
  });

  // ---------------------------------------------------------------------------
  // 4. Active Navigation Indicator via IntersectionObserver
  // ---------------------------------------------------------------------------
  const trackedSections = document.querySelectorAll('section[id]');
  if ('IntersectionObserver' in window && trackedSections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          desktopNavLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
          mobileNavLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    trackedSections.forEach((sec) => sectionObserver.observe(sec));
  }

  // ---------------------------------------------------------------------------
  // 5. 1-Click Copy for Terminal Quickstart Command
  // ---------------------------------------------------------------------------
  if (copyCmdBtn && heroCommandText) {
    copyCmdBtn.addEventListener('click', () => {
      // Clean command text: remove "$ " prompt and normalize spaces
      const rawText = heroCommandText.innerText || heroCommandText.textContent;
      const cleanCommand = rawText.replace(/^\s*\$\s*/, '').trim();

      function showCopySuccess() {
        copyCmdBtn.classList.add('copied');
        if (copyCmdLabel) copyCmdLabel.textContent = 'Copied!';
        setTimeout(() => {
          copyCmdBtn.classList.remove('copied');
          if (copyCmdLabel) copyCmdLabel.textContent = 'Copy';
        }, 2200);
      }

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(cleanCommand)
          .then(showCopySuccess)
          .catch(() => fallbackCopy(cleanCommand, showCopySuccess));
      } else {
        fallbackCopy(cleanCommand, showCopySuccess);
      }
    });
  }

  function fallbackCopy(text, callback) {
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    tempInput.style.position = 'fixed';
    tempInput.style.opacity = '0';
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      if (callback) callback();
    } catch (err) {
      console.warn('Fallback copy failed', err);
    }
    document.body.removeChild(tempInput);
  }

  // ---------------------------------------------------------------------------
  // 6. Assessment Walkthrough Modal Logic
  // ---------------------------------------------------------------------------
  let previousActiveElement = null;

  function openModal() {
    if (!assessmentModal) return;
    previousActiveElement = document.activeElement;
    assessmentModal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
    assessmentModal.focus();

    // Trap tab within modal
    assessmentModal.addEventListener('keydown', trapModalFocus);
  }

  function closeModal() {
    if (!assessmentModal) return;
    assessmentModal.classList.remove('is-active');
    document.body.style.overflow = '';
    assessmentModal.removeEventListener('keydown', trapModalFocus);
    if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
      previousActiveElement.focus();
    }
  }

  function trapModalFocus(e) {
    if (e.key !== 'Tab') return;
    const focusable = assessmentModal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  if (openAssessmentBtn) openAssessmentBtn.addEventListener('click', openModal);
  if (mobAssessmentBtn) {
    mobAssessmentBtn.addEventListener('click', () => {
      setMobileMenuState(false);
      openModal();
    });
  }
  if (footerAssessmentBtn) footerAssessmentBtn.addEventListener('click', openModal);
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

  if (assessmentModal) {
    assessmentModal.addEventListener('click', (e) => {
      if (e.target === assessmentModal) closeModal();
    });
  }

  // Global Escape Key Listener for Modals & Mobile Drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
      if (assessmentModal && assessmentModal.classList.contains('is-active')) {
        closeModal();
      }
      if (mobileNavDrawer && mobileNavDrawer.classList.contains('is-open')) {
        setMobileMenuState(false);
      }
    }
  });

  // ---------------------------------------------------------------------------
  // 7. Client-Side Contact Form Validation & State
  // ---------------------------------------------------------------------------
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

  function validateField(inputEl, errorEl, condition) {
    if (!condition) {
      inputEl.classList.add('is-invalid');
      inputEl.setAttribute('aria-invalid', 'true');
      if (errorEl) errorEl.classList.add('visible');
      return false;
    } else {
      inputEl.classList.remove('is-invalid');
      inputEl.removeAttribute('aria-invalid');
      if (errorEl) errorEl.classList.remove('visible');
      return true;
    }
  }

  // Real-time inline field clearing on input
  if (fullNameInput) {
    fullNameInput.addEventListener('input', () => {
      validateField(fullNameInput, fullNameError, fullNameInput.value.trim().length >= 2);
    });
  }

  if (workEmailInput) {
    workEmailInput.addEventListener('input', () => {
      validateField(workEmailInput, workEmailError, emailRegex.test(workEmailInput.value.trim()));
    });
  }

  if (userRoleSelect) {
    userRoleSelect.addEventListener('change', () => {
      validateField(userRoleSelect, userRoleError, userRoleSelect.value !== '');
    });
  }

  if (workloadTypeSelect) {
    workloadTypeSelect.addEventListener('change', () => {
      validateField(workloadTypeSelect, workloadTypeError, workloadTypeSelect.value !== '');
    });
  }

  if (projectMessageInput) {
    projectMessageInput.addEventListener('input', () => {
      validateField(projectMessageInput, messageError, projectMessageInput.value.trim().length >= 10);
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const isNameValid = validateField(
        fullNameInput,
        fullNameError,
        fullNameInput && fullNameInput.value.trim().length >= 2
      );

      const isEmailValid = validateField(
        workEmailInput,
        workEmailError,
        workEmailInput && emailRegex.test(workEmailInput.value.trim())
      );

      const isRoleValid = validateField(
        userRoleSelect,
        userRoleError,
        userRoleSelect && userRoleSelect.value !== ''
      );

      const isWorkloadValid = validateField(
        workloadTypeSelect,
        workloadTypeError,
        workloadTypeSelect && workloadTypeSelect.value !== ''
      );

      const isMessageValid = validateField(
        projectMessageInput,
        messageError,
        projectMessageInput && projectMessageInput.value.trim().length >= 10
      );

      if (isNameValid && isEmailValid && isRoleValid && isWorkloadValid && isMessageValid) {
        // Form is valid: simulate production submission & display confirmation
        const randomRefId = Math.floor(1000 + Math.random() * 9000);
        const refString = `REF: JAP-2026-INQ-${randomRefId}`;
        if (successRefCode) successRefCode.textContent = refString;

        contactForm.style.display = 'none';
        if (formSuccessCard) {
          formSuccessCard.classList.add('visible');
          formSuccessCard.setAttribute('tabindex', '-1');
          formSuccessCard.focus();
        }
      } else {
        // Focus the first invalid element
        const firstInvalid = contactForm.querySelector('.is-invalid');
        if (firstInvalid) {
          firstInvalid.focus();
        }
      }
    });
  }

  if (resetFormBtn && contactForm && formSuccessCard) {
    resetFormBtn.addEventListener('click', () => {
      contactForm.reset();
      // Remove any lingering error classes
      contactForm.querySelectorAll('.is-invalid').forEach((el) => {
        el.classList.remove('is-invalid');
        el.removeAttribute('aria-invalid');
      });
      contactForm.querySelectorAll('.form-error-msg').forEach((el) => {
        el.classList.remove('visible');
      });

      formSuccessCard.classList.remove('visible');
      contactForm.style.display = 'block';
      if (fullNameInput) fullNameInput.focus();
    });
  }

})();
