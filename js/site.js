/**
 * Small enhancements after creative.min.js (ScrollReveal, smooth scroll).
 * Respects prefers-reduced-motion.
 */
(function () {
  'use strict';

  if (!window.matchMedia || !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  document.documentElement.classList.add('reduce-motion');

  if (window.sr && typeof window.sr.destroy === 'function') {
    try {
      window.sr.destroy();
    } catch (e) {
      /* ignore */
    }
  }
})();
