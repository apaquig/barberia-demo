// Client-side dynamic booking modal open listeners initialization
document.addEventListener('DOMContentLoaded', () => {
  // Capture clicks on all booking URLs (e.g. href="#book-now")
  document.body.addEventListener('click', (e) => {
    const target = e.target;
    const anchor = target.closest('a');
    
    if (anchor) {
      const href = anchor.getAttribute('href');
      if (href && (href === '#book-now' || href.endsWith('#book-now'))) {
        e.preventDefault();
        
        // Extract optional service or barber metadata passed as datasets
        const service = anchor.dataset.service || '';
        const barber = anchor.dataset.barber || '';
        
        window.dispatchEvent(new CustomEvent('openBookingModal', {
          detail: { service, barber }
        }));
      }
    }
  });
});
