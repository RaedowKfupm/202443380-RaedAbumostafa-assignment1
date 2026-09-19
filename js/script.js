const currentYear = document.getElementById('current-year');

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navAnchors = Array.from(document.querySelectorAll('.nav-links a'));
const sections = Array.from(document.querySelectorAll('main section[id], header section[id]'));

// Keep the mobile menu state synchronized with the button's accessibility state.
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navAnchors.forEach((anchor) => {
    anchor.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const updateActiveLink = () => {
  if (!sections.length) {
    return;
  }

  const scrollPosition = window.scrollY + 160;
  let currentId = sections[0].id;

  sections.forEach((section) => {
    if (scrollPosition >= section.offsetTop) {
      currentId = section.id;
    }
  });

  navAnchors.forEach((link) => {
    const isCurrent = link.getAttribute('href') === `#${currentId}`;
    link.setAttribute('aria-current', isCurrent ? 'true' : 'false');
  });
};

// Highlight the section that is closest to the current reading position.
if (navAnchors.length) {
  updateActiveLink();
  window.addEventListener('scroll', updateActiveLink, { passive: true });
}

const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

const setFieldError = (fieldId, message) => {
  const field = document.getElementById(fieldId);
  const error = document.getElementById(`${fieldId}-error`);

  if (!field || !error) {
    return;
  }

  field.setAttribute('aria-invalid', message ? 'true' : 'false');
  error.textContent = message;
};

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Validate locally because this static portfolio has no message-delivery backend.
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = (formData.get('name') || '').toString().trim();
    const email = (formData.get('email') || '').toString().trim();
    const message = (formData.get('message') || '').toString().trim();

    let isValid = true;

    if (name.length < 2) {
      setFieldError('name', 'Please enter at least 2 characters.');
      isValid = false;
    } else {
      setFieldError('name', '');
    }

    if (!isValidEmail(email)) {
      setFieldError('email', 'Please enter a valid email address.');
      isValid = false;
    } else {
      setFieldError('email', '');
    }

    if (message.length < 10) {
      setFieldError('message', 'Please write at least 10 characters.');
      isValid = false;
    } else {
      setFieldError('message', '');
    }

    if (!isValid) {
      if (formStatus) {
        formStatus.textContent = 'Please fix the highlighted fields and try again.';
        formStatus.style.color = '#ffb59f';
      }
      return;
    }

    if (formStatus) {
      formStatus.textContent = 'Message looks good. This is a demo form, so no data was sent.';
      formStatus.style.color = '#b8f5d1';
    }

    form.reset();
  });
}
