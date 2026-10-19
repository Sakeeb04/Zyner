/**
 * Japolic Landing Page Interactions
 * Clean, standard vanilla JavaScript written for the Zyner Internship Assessment
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-btn');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      mobileDrawer.classList.toggle('active');
    });

    // Close menu when clicking any link
    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        mobileDrawer.classList.remove('active');
      });
    });
  }

  // 2. Terminal Command Copy Button
  const copyBtn = document.getElementById('copyBtn');
  const cmdText = document.getElementById('cmdText');

  if (copyBtn && cmdText) {
    copyBtn.addEventListener('click', () => {
      const textToCopy = cmdText.textContent.trim();
      navigator.clipboard.writeText(textToCopy).then(() => {
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
          copyBtn.textContent = 'Copy';
        }, 2000);
      }).catch(() => {
        // Fallback for older browsers
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
          copyBtn.textContent = 'Copy';
        }, 2000);
      });
    });
  }

  // 3. Contact Form Validation & Submission
  const form = document.getElementById('inquiryForm');
  const successCard = document.getElementById('successCard');
  const resetBtn = document.getElementById('resetBtn');
  const refBadge = document.getElementById('refBadge');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // Fields
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const role = document.getElementById('role');
      const workload = document.getElementById('workload');
      const message = document.getElementById('message');

      // Errors
      const nameError = document.getElementById('nameError');
      const emailError = document.getElementById('emailError');
      const roleError = document.getElementById('roleError');
      const workloadError = document.getElementById('workloadError');
      const messageError = document.getElementById('messageError');

      // Name validation
      if (!name.value.trim()) {
        name.classList.add('error');
        nameError.classList.add('visible');
        isValid = false;
      } else {
        name.classList.remove('error');
        nameError.classList.remove('visible');
      }

      // Email validation (simple check)
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
        email.classList.add('error');
        emailError.classList.add('visible');
        isValid = false;
      } else {
        email.classList.remove('error');
        emailError.classList.remove('visible');
      }

      // Role validation
      if (!role.value) {
        role.classList.add('error');
        roleError.classList.add('visible');
        isValid = false;
      } else {
        role.classList.remove('error');
        roleError.classList.remove('visible');
      }

      // Workload validation
      if (!workload.value) {
        workload.classList.add('error');
        workloadError.classList.add('visible');
        isValid = false;
      } else {
        workload.classList.remove('error');
        workloadError.classList.remove('visible');
      }

      // Message validation
      if (!message.value.trim() || message.value.trim().length < 10) {
        message.classList.add('error');
        messageError.classList.add('visible');
        isValid = false;
      } else {
        message.classList.remove('error');
        messageError.classList.remove('visible');
      }

      // If valid, show success state
      if (isValid) {
        const randomRef = Math.floor(1000 + Math.random() * 9000);
        if (refBadge) {
          refBadge.textContent = `REF: JAP-${randomRef}`;
        }
        form.style.display = 'none';
        successCard.classList.add('active');
      }
    });

    // Reset button to submit another response
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        form.reset();
        successCard.classList.remove('active');
        form.style.display = 'flex';
      });
    }
  }
});
