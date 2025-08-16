document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentIndex = 0;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });
        
        currentIndex = index;
        if (currentIndex >= testimonials.length) currentIndex = 0;
        if (currentIndex < 0) currentIndex = testimonials.length - 1;
        
        testimonials[currentIndex].classList.add('active');
    }
    
    prevBtn.addEventListener('click', () => {
        showTestimonial(currentIndex - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        showTestimonial(currentIndex + 1);
    });
    
    // Auto-rotate testimonials
    let testimonialInterval = setInterval(() => {
        showTestimonial(currentIndex + 1);
    }, 5000);
    
    // Pause auto-rotation when hovering
    const sliderContainer = document.querySelector('.testimonials-slider');
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(testimonialInterval);
    });
    
    sliderContainer.addEventListener('mouseleave', () => {
        testimonialInterval = setInterval(() => {
            showTestimonial(currentIndex + 1);
        }, 5000);
    });
    
    // Form submission
    const registrationForm = document.getElementById('registration-form');
    const formSuccess = document.getElementById('form-success');
    
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to your Django backend
            // For this example, we'll just show the success message
            registrationForm.style.display = 'none';
            formSuccess.style.display = 'block';
            
            // Scroll to show the success message
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Reset form after delay (for demo purposes)
            setTimeout(() => {
                registrationForm.reset();
                registrationForm.style.display = 'block';
                formSuccess.style.display = 'none';
            }, 5000);
        });
    }
    
    // Scroll reveal animation
    const scrollReveal = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: true
    });
    
    scrollReveal.reveal('.feature-card, .dynamic-card, .detail-box, .testimonial', { 
        interval: 200 
    });
    
    // Mobile menu toggle (if needed in future)
    // const menuToggle = document.querySelector('.menu-toggle');
    // const navMenu = document.querySelector('.nav-menu');
    
    // if (menuToggle && navMenu) {
    //     menuToggle.addEventListener('click', () => {
    //         navMenu.classList.toggle('active');
    //         menuToggle.classList.toggle('active');
    //     });
    // }
});