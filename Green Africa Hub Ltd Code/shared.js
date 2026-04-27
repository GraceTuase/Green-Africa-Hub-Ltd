// ── Theme Toggle ──
(function () {
  const html = document.documentElement;
  let theme = 'light';
  try {
    const pref = matchMedia('(prefers-color-scheme: dark)').matches;
    theme = pref ? 'dark' : 'light';
  } catch (e) {}
  html.setAttribute('data-theme', theme);

  function applyTheme(t) {
    theme = t;
    html.setAttribute('data-theme', t);
    const btn = document.querySelector('[data-theme-toggle]');
    if (btn) {
      btn.setAttribute('aria-label', 'Switch to ' + (t === 'dark' ? 'light' : 'dark') + ' mode');
      btn.innerHTML = t === 'dark'
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(theme);

    const btn = document.querySelector('[data-theme-toggle]');
    if (btn) {
      btn.addEventListener('click', function () {
        applyTheme(theme === 'dark' ? 'light' : 'dark');
      });
    }

    // ── Sticky nav shadow ──
    const nav = document.querySelector('.site-nav');
    if (nav) {
      window.addEventListener('scroll', function () {
        nav.classList.toggle('scrolled', window.scrollY > 10);
      }, { passive: true });
    }

    // ── Mobile hamburger ──
    const hamburger = document.querySelector('.nav-hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
      });
    }

    // ── Mark active nav link ──
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      const href = link.getAttribute('href');
      if (href === currentPath || (currentPath === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });

    // ── Scroll fade-in ──
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      document.querySelectorAll('.fade-up').forEach(function (el) {
        observer.observe(el);
      });
    } else {
      document.querySelectorAll('.fade-up').forEach(function (el) {
        el.classList.add('visible');
      });
    }

    // ── Contact form (demo) ──
    const form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const success = document.getElementById('formSuccess');
        if (btn) {
          btn.disabled = true;
          btn.textContent = 'Sending…';
        }
        setTimeout(function () {
          if (success) {
            success.style.display = 'block';
            success.textContent = 'Thank you! Your message has been received. We will be in touch shortly.';
          }
          form.reset();
          if (btn) { btn.disabled = false; btn.textContent = 'Send Message'; }
        }, 1000);
      });
    }
  });
})();
