document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navigation a');
  navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.color = '#ffcc00';
    });
    link.addEventListener('mouseout', () => {
      link.style.color = 'white';
    });
  });
});
