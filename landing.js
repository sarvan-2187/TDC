function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.querySelector('.hamburger');
  const overlay = document.getElementById('overlay');

  sidebar.classList.toggle('open');
  hamburger.classList.toggle('active');
  overlay.classList.toggle('show');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.querySelector('.hamburger').classList.remove('active');
  document.getElementById('overlay').classList.remove('show');
}

document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.grid .item').forEach(item => {
    observer.observe(item);
  });

  document.querySelectorAll('.grid .item').forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transition = 'all 0.3s ease';
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const galleryObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        galleryObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.grid .item').forEach(item => {
    galleryObserver.observe(item);
  });

  const whyUsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cards = entry.target.querySelectorAll('.why-us-one, .why-us-two');
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('why-us-animate');
          }, 150 * index);
        });
        whyUsObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  const whyUsSection = document.querySelector('.why-us');
  if (whyUsSection) {
    whyUsObserver.observe(whyUsSection);
  }
});