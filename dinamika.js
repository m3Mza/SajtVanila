
// Pauzira pomerajuci tekst na kontakt stranici da se ne baguje

window.onload = () => {
    const movingText = document.querySelector('.moving-text');
    movingText.style.animationPlayState = 'running';
};

// JS skripta za skrol efekat pri kliku na dugmad na pocetnoj stranici

const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

// Prati svaki href tag
smoothScrollLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        // Ako je navigacioni meni nema smooth skrol efekat
        if (link.closest('.menu-links')) {
            return;
        }

        // Smooth skrol efekat za sve linkove
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


// Skrol slika u dzep farmerica

const minScale = 0.8;  // Less scaling for simpler effect
const maxScale = 0.8; // Keep the scaling minimal for smoother sizing
const scalingFactor = 2500; // Scaling factor with a bigger denominator for delay
const tiltFactor = 10; // Adjust the tilt intensity for better effect
const polaroid = document.querySelector('.bottom-image'); 
const pocket = document.querySelector('.pocket'); 

window.addEventListener("scroll", function() {
    const pocketRect = pocket.getBoundingClientRect(); 
    const scrollPos = window.scrollY;

    // Calculate the scaling factor with a delayed start for scaling
    const currentScale = Math.max(minScale, maxScale - ((scrollPos - 300) / scalingFactor));  // Start scaling after 300px of scroll
    polaroid.style.width = `${currentScale * 28}vw`; 

    // Calculate tilt effect (rotate)
    const tiltAmount = (scrollPos / scalingFactor) * tiltFactor; // Tilt based on scroll position

    // Apply the scaling and tilt transformations
    polaroid.style.transform = `scale(${currentScale}) rotate(${tiltAmount}deg)`; 

    // Positioning the polaroid when it hits the pocket
    if (scrollPos >= (pocketRect.top + window.scrollY - polaroid.offsetHeight / 2.7)) {
        polaroid.style.position = "absolute"; 
        polaroid.style.top = `${pocketRect.top + window.scrollY - polaroid.offsetHeight / 1.4}%`; 
    } else {
        polaroid.style.position = "fixed"; 
        polaroid.style.top = "28%"; 
    }

    // Reset scale and tilt when at the top of the page
    if (scrollPos === 0) {
        polaroid.style.transform = `scale(1) rotate(0deg)`; 
    }
});


























