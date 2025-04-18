// Hamburger Menu Toggle
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}

// Close Sidebar when clicking outside
document.addEventListener('click', (event) => {
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.getElementById('hamburger');
  
  if (!sidebar.contains(event.target) && !hamburger.contains(event.target) && sidebar.classList.contains('active')) {
    sidebar.classList.remove('active');
  }
});

// Header Scroll Behavior
let lastScrollTop = 0;
const header = document.getElementById('header');
  
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    // Scrolling down
    header.style.transform = 'translateY(-100%)';
  } else {
    // Scrolling up
    header.style.transform = 'translateY(0)';
  }
  
  lastScrollTop = scrollTop;
});

// Accordion Functionality
const accordionHeaders = document.querySelectorAll('.accordion-header');
  
accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.parentElement;
    const accordionContent = accordionItem.querySelector('.accordion-content');
    const icon = header.querySelector('i');
    
    // Toggle active class
    accordionContent.classList.toggle('active');
    
    // Rotate icon
    if (accordionContent.classList.contains('active')) {
      icon.style.transform = 'rotate(180deg)';
    } else {
      icon.style.transform = 'rotate(0)';
    }
  });
});

// Simple Slideshow
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
  
function showSlide(n) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[n].classList.add('active');
}
  
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
  
// Initialize slideshow with longer interval
showSlide(currentSlide);
setInterval(nextSlide, 8000); // Change slide every 8 seconds
  
// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
});

// Lazy Load Images for Plans Section
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  const planImages = document.querySelectorAll('.plan-image img');
  planImages.forEach(img => {
    img.dataset.src = img.src;
    img.src = '';
    observer.observe(img);
  });
});