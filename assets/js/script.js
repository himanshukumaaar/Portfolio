document.addEventListener('DOMContentLoaded', () => {

  // Navbar Toggle
  const menuBtn = document.getElementById('menu-btn');
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
    });
  });

  // Sticky Header & Scroll Spy & Scroll Top Button
  const header = document.getElementById('header');
  const scrollTopBtn = document.getElementById('scroll-top');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    // Header
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll Top
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }

    // Scroll Spy
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= (sectionTop - sectionHeight / 3)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Typed.js Initialization
  if (document.querySelector('.typed-text')) {
    new Typed('.typed-text', {
      strings: ['Python', 'Linux', 'Django', 'React.js', 'HPC'],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true
    });
  }

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Contact Form Handling (Web3Forms)
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');
  const submitText = document.getElementById('submit-text');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      submitBtn.disabled = true;
      submitText.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      formStatus.textContent = '';
      formStatus.className = 'form-status';

      const formData = new FormData(contactForm);

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });
        
        const data = await response.json();

        if (response.status === 200) {
          formStatus.textContent = 'Message sent successfully!';
          formStatus.classList.add('status-success');
          contactForm.reset();
        } else {
          formStatus.textContent = data.message || 'Something went wrong. Please try again.';
          formStatus.classList.add('status-error');
        }
      } catch (error) {
        formStatus.textContent = 'Network error. Please try again later.';
        formStatus.classList.add('status-error');
      } finally {
        submitBtn.disabled = false;
        submitText.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        
        setTimeout(() => {
          formStatus.textContent = '';
          formStatus.className = 'form-status';
        }, 5000);
      }
    });
  }

  // Dynamic Title
  let originalTitle = document.title;
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      document.title = 'Come Back To Portfolio';
    } else {
      document.title = originalTitle;
    }
  });

});
