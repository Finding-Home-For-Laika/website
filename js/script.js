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
});

document.addEventListener('DOMContentLoaded', function() {
  const navToggleLabel = document.getElementById('nav-toggle-label');
  const navMenu = document.getElementById('nav-menu');
  
  navToggleLabel.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });
});
