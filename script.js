document.addEventListener('DOMContentLoaded', () => {
    // Welcome message in console
    console.log('%c你打開來了 你肯定是開發者 加入我們吧', 'color: #6366f1; font-size: 16px; font-weight: bold;');
    
    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach(el => observer.observe(el));

    // Dynamic Title Effect
    const title = document.title;
    window.addEventListener('blur', () => {
        document.title = '回來看看 TWNDevs！🚀';
    });
    window.addEventListener('focus', () => {
        document.title = title;
    });
});
