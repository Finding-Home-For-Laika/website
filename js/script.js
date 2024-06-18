document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.dog-image');

  images.forEach(image => {
    image.addEventListener('click', function() {
      if (this.classList.contains('expanded')) {
        this.classList.remove('expanded');
      } else {
        images.forEach(img => img.classList.remove('expanded'));
        this.classList.add('expanded');
      }
    });
  });

  const navToggleLabel = document.getElementById('nav-toggle-label');
  const navMenu = document.getElementById('nav-menu');

  navToggleLabel.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    navToggleLabel.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!navToggleLabel.contains(event.target) && !navMenu.contains(event.target)) {
      navMenu.classList.remove('active');
      navToggleLabel.classList.remove('active');
    }
  });

  // Close menu when clicking a menu item
  const navLinks = document.querySelectorAll('.nav-menu li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
      navToggleLabel.classList.remove('active');
    });
  });
});
