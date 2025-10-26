document.addEventListener('DOMContentLoaded', function() {
    // 1. Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if the link is an internal anchor link
            if (this.hash !== "") {
                e.preventDefault();
                const hash = this.hash;
                
                // Get the target element
                const targetElement = document.querySelector(hash);

                if (targetElement) {
                    // Get the position of the target element, subtracting the header height for accurate scroll
                    const headerHeight = document.getElementById('navbar').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 10; // -10 for extra margin

                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // 2. Simple Scroll-based Header Shadow (optional, adds polish)
    const header = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        }
    });
});
