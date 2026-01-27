// Generate QR Code for contact information
document.addEventListener('DOMContentLoaded', function() {
    // Contact details for QR code
    const contactVCard = `BEGIN:VCARD
VERSION:3.0
FN:JOBIN STANLY JOHN
TEL:+919893658229
EMAIL:JOBINSTANS@GMAIL.COM
CITY:BANGALORE
NOTE:Professional Artist & Performer - Ready to do shows
END:VCARD`;

    // Generate QR code
    const qrContainer = document.getElementById('qrcode');
    new QRCode(qrContainer, {
        text: contactVCard,
        width: 200,
        height: 200,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });

    // Stagger animation delays for elements
    const animatedElements = document.querySelectorAll('[class*="animate-"]');
    animatedElements.forEach((element, index) => {
        const animationClass = element.className;
        element.style.animationDelay = `${index * 0.1}s`;
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const eventType = this.querySelectorAll('input')[2].value;
            const message = this.querySelector('textarea').value;

            // Create mailto link with pre-filled content
            const mailtoLink = `mailto:JOBINSTANS@GMAIL.COM?subject=Booking Request from ${name}&body=Hi JOBIN,%0D%0A%0D%0AI would like to book you for an event.%0D%0A%0D%0AEvent Details:%0D%0AName: ${name}%0D%0AEmail: ${email}%0D%0AEvent Type: ${eventType}%0D%0AMessage: ${message}%0D%0A%0D%0AThanks!`;

            // Open email client
            window.location.href = mailtoLink;

            // Reset form
            this.reset();
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Add scroll animation for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-fade-in').forEach(el => {
        observer.observe(el);
    });

    // Mobile menu toggle (if needed in future)
    console.log('Website loaded successfully!');
});

// Scroll event for dynamic effects
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
    } else {
        header.style.boxShadow = 'none';
    }
});
