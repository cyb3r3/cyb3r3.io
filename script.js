// cyb3r-debian.site — script.js
// highlight active nav link based on current page
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-links a');
  const page = location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    const href = a.getAttribute('href');
    if (href === page) a.classList.add('active');
    else a.classList.remove('active');
  });
});
