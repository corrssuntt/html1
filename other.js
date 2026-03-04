document.addEventListener('DOMContentLoaded', () => {
    // Collapsible Logic
    const coll = document.querySelector(".collapsible");
    if (coll) {
        coll.addEventListener("click", function() {
            this.classList.toggle("active");
            const content = this.nextElementSibling;
            content.classList.toggle("active");
        });
    }

    // Populate Grids (Design & Photo)
    const grids = ['featured-grid', 'design-grid', 'photo-grid'];
    
    grids.forEach(gridId => {
        const grid = document.getElementById(gridId);
        if (grid) {
            for (let i = 0; i < 8; i++) {
                
                
                // Randomly assign sizes for the "wide range" feel
                if (i % 3 === 0) item.classList.add('tall');
                if (i === 1 || i === 5) item.classList.add('wide');
                
                item.innerHTML = `<img src="https://picsum.photos/seed/${gridId + i}/600" alt="Work">`;
                grid.appendChild(item);
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // 1. Collapsible Logic with smooth height transition
    const coll = document.querySelector(".collapsible");
    if (coll) {
        coll.addEventListener("click", function() {
            this.classList.toggle("active");
            const content = this.nextElementSibling;
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                this.textContent = "View Full Gallery";
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                this.textContent = "Close Gallery";
            }
        });
    }

    // 2. Masonry Grid Generator
    const grid = document.getElementById('gallery-grid');
    if (grid) {
    c
            
            // Randomly assign sizes to create a "condensed" puzzle effect
            const rand = Math.random();
            if (rand > 0.8) item.classList.add('wide');
            else if (rand > 0.6) item.classList.add('tall');

            item.innerHTML = `<img src="https://picsum.photos/seed/${i + 20}/600" alt="Portfolio Piece">`;
            grid.appendChild(item);
        }
    }
});
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.main-nav');
    if (window.scrollY > 50) {
        nav.style.background = "rgba(134, 144, 162, 0.95)"; // More solid
        nav.style.transform = "scale(0.98)"; // Subtle shrink effect
    } else {
        nav.style.background = "rgba(134, 144, 162, 0.7)"; // More translucent
        nav.style.transform = "scale(1)";
    }
});
// other.js refinement
document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        // Subtle haptic-style logic can go here if needed
    });
});

// Logic for handling the form submission placeholder
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! Your message has been sent to Alex.');
        contactForm.reset();
    });
}
document.addEventListener('DOMContentLoaded', () => {
    // 1. Soft Fade-in for Body
    // (Handled by CSS, but JS ensures it's visible if CSS fails)
    document.body.style.opacity = "1";

    // 2. The Puzzle Gallery Logic
    const grid = document.getElementById('gallery-grid');
    if (grid) {
        // Create 12 diverse items
        for (let i = 0; i < 12; i++) {
            const item = document.createElement('div');
            item.className = 'grid-item';
            
            // Randomize sizes for the 'condensed' puzzle look
            const sizeMap = ['standard', 'wide', 'tall'];
            const randomSize = sizeMap[Math.floor(Math.random() * sizeMap.length)];
            
            if (randomSize === 'wide') item.classList.add('wide');
            if (randomSize === 'tall') item.classList.add('tall');

            // Apply staggered animation delay via JS
            item.style.animationDelay = `${(i * 0.1) + 0.3}s`;

            item.innerHTML = `<img src="https://picsum.photos/seed/${i + 50}/800" alt="Portfolio item">`;
            grid.appendChild(item);
        }
    }

    // 3. Collapsible Toggle
    const coll = document.querySelector(".collapsible");
    if (coll) {
        coll.addEventListener("click", function() {
            const content = this.nextElementSibling;
            this.classList.toggle("active");
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                this.textContent = "View Full Gallery";
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                this.textContent = "Close Gallery";
            }
        });
    }
});
