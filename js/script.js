document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');

  const navToggleLabel = document.getElementById('nav-toggle-label');
  const navMenu = document.getElementById('nav-menu');

  const toggleMenu = (event) => {
    event.stopPropagation();
    console.log('Toggle menu');
    navMenu.classList.toggle('active');
    navToggleLabel.classList.toggle('active');
  };

  navToggleLabel.addEventListener('click', toggleMenu);
  navToggleLabel.addEventListener('touchstart', toggleMenu);

  // Close menu when clicking a menu item
  const navLinks = document.querySelectorAll('.nav-menu li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      console.log('Nav link clicked:', this);
      navMenu.classList.remove('active');
      navToggleLabel.classList.remove('active');
      event.stopPropagation();
    });
  });

  // Close menu when clicking outside
  const closeMenuOutsideClick = (event) => {
    if (!navToggleLabel.contains(event.target) && !navMenu.contains(event.target)) {
      console.log('Outside click detected');
      navMenu.classList.remove('active');
      navToggleLabel.classList.remove('active');
    }
  };

  document.addEventListener('click', closeMenuOutsideClick);
  document.addEventListener('touchstart', closeMenuOutsideClick);
});
