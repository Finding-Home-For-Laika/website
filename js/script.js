document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.getElementById("nav-menu");

  // Toggle navigation menu on smaller screens
  const menuToggle = document.getElementById("menu-toggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // Lazy loading for images
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  lazyImages.forEach((img) => {
    img.src = img.dataset.src || img.src;
  });

  // Secure external links
  const externalLinks = document.querySelectorAll('a[target="_blank"]');
  externalLinks.forEach((link) => {
    link.setAttribute("rel", "noopener noreferrer");
  });
});
