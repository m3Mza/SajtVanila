

// Ovde se nalaze podesavanja za dinamicki kursor;
// Kursor se menja na osnovu razlicitih povrsina te se nalaze razna podesavanja za razne delove koda
// Takodje se ovde nalazi js kod za navigacioni meni na kraju stranice



const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

// Kursor za kliktanje styling
const cursorText = document.createElement('span');
cursorText.innerText = 'CLICK!';
cursorText.style.display = 'none';
cursorText.style.color = 'black';
cursorText.style.fontSize = '6px';
cursorText.style.position = 'absolute';
cursorText.style.top = '50%';
cursorText.style.left = '50%';
cursorText.style.transform = 'translate(-50%, -50%)';
cursorText.style.pointerEvents = 'none'; 
cursor.appendChild(cursorText);


document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX - 12}px`; // Podesavanje X ose
    cursor.style.top = `${e.pageY - 10}px`; // Podesavanje Y ose
    cursor.style.visibility = 'visible'; 
});



// ====== HOVER EFEKTI ZA KURSOR ========

// Hover za Mirko Popovic tekst

const link = document.querySelector('a[href="#kontakt"] h2');
link.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(2.2)';
    cursor.style.backgroundColor = '#FDE962'; 
    cursorText.style.display = 'block'; 
    cursorText.innerText = 'KLIK!';
});
link.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
    cursor.style.backgroundColor = '#FDE962'; 
    cursorText.style.display = 'none';
});


// Hover za tekst (Pomerajuci za kontakt)

const tekstPomerajuci = document.querySelectorAll('.moving-text, .moving-text-rikverc');
tekstPomerajuci.forEach(tekst => {
    tekst.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(4.0)';
        cursor.style.backgroundColor = '#005239';
        cursorText.style.color = '#e68683';
        cursorText.style.display = 'block';
        cursorText.innerText = 'MEJL!';     
    });
    tekst.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.backgroundColor = '#FDE962'; 
        cursorText.style.display = 'none';
        cursorText.innerText = 'KLIK!';
        cursorText.style.color = 'black';          
    });
});

// hover za navigacioni meni

const navigacioniMeni = document.querySelectorAll('.navMeni');

navigacioniMeni.forEach(navMeni => {
    navMeni.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2.0)';
        cursor.style.backgroundColor = 'black'; 
        cursorText.style.color = '#FDE962';
        cursorText.style.display = 'block';      
    });

    navMeni.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.backgroundColor = 'black';
        cursorText.style.display = 'none';       
    });
});


const navigacioniMeniHeader = document.querySelectorAll('.navMeniPozadina');

navigacioniMeniHeader.forEach(navMeniPozadina => {
    navMeniPozadina.addEventListener('mouseenter', () => {
        cursor.style.backgroundColor = 'black';     
    });

    navMeniPozadina.addEventListener('mouseleave', () => {
        cursor.style.backgroundColor = '#FDE962';
        cursorText.style.color = 'black';
        cursorText.style.display = 'none';      
    });
});



// Event listeneri za pracenje kursora (Menjanje boja kruzica)

document.addEventListener('mouseout', () => {
    cursor.style.visibility = 'hidden';
});


document.addEventListener('mouseover', () => {
    cursor.style.visibility = 'visible';
});





// ==== Navigacioni meni hover i klik efekat

const navMeni = document.querySelector('.navMeni');
const navMeniPozadina = document.querySelector('.navMeniPozadina');
const menuLinks = document.querySelector('.menu-links');


let isExpanded = false;

// NAVIGACIONI MENI HOVER
navMeni.addEventListener('mouseenter', () => {
    if (!isExpanded) {
        navMeniPozadina.style.height = '8vh';
    }
});

navMeni.addEventListener('mouseleave', () => {
    if (!isExpanded) {
        navMeniPozadina.style.height = '7vh';
    }
});

// NAVIGACIONI MENI KLIK

navMeni.addEventListener('click', () => {
    if (!isExpanded) {
        navMeniPozadina.style.height = '100vh';
        navMeniPozadina.classList.add('expanded');
        document.body.style.overflow = 'hidden';
        isExpanded = true;
    } else {
        navMeniPozadina.style.height = '7vh';
        navMeniPozadina.classList.remove('expanded');
        document.body.style.overflow = 'auto';
        isExpanded = false;
    }
});

// NAVIGACIONI MENI LINKOVI HOVER I KLIK

const navigacioniMeniLinkovi = document.querySelectorAll('.menu-links a');

navigacioniMeniLinkovi.forEach(link => {
    // Hover efekti za linkove
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2.5)';
        cursor.style.backgroundColor = 'black';
        cursorText.style.color = '#FDE962';
        cursorText.style.display = 'block';
        cursorText.innerText = 'KLIK!'; 
    });

    link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.backgroundColor = 'black';
        cursorText.style.display = 'none';
    });

    // Povlaci se meni klikom na link
    link.addEventListener('click', () => {
        setTimeout(() => {
            navMeniPozadina.style.height = '7vh';
            navMeniPozadina.classList.remove('expanded');
            document.body.style.overflow = 'auto';
            isExpanded = false;
        }, 400);
    });
});


// Klik na link aktivira animaciju za navmeni dugme

const navMeniLinkovi = document.querySelectorAll('.menu-links a');

// Select the checkbox input (nav menu button)
const navMeniButton = document.querySelector('.navMeni');

// Add click event listeners to each menu link
navMeniLinkovi.forEach(link => {
    link.addEventListener('click', () => {
        // Trigger the checkbox (nav button) to toggle the checked state
        navMeniButton.checked = !navMeniButton.checked;
    });
});


// O meni kontejner

const omenContainer = document.querySelector('.omeni-container');
const omenImage = document.querySelector('.omeni-slika');

let isDragging = false;
let startX;
let currentX;
let xOffset = 0;

const minX = -60;
const maxX = -20;

omenContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    omenContainer.style.transition = 'none'; 
    omenContainer.style.cursor = 'grabbing';
    e.preventDefault();
});

window.addEventListener('mousemove', (e) => {
    if (isDragging) {
        currentX = e.clientX;
        const distance = currentX - startX;

        if (xOffset === 0) {
            xOffset = omenContainer.getBoundingClientRect().left;
        }

        xOffset = Math.min(Math.max(xOffset + distance, minX), maxX);

        omenContainer.style.transition = 'transform 0.3s ease-out';
        omenContainer.style.transform = `rotate(-4deg) translateX(${xOffset}px)`;
        startX = currentX;
    }
});

window.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        omenContainer.style.cursor = 'grab';
        omenContainer.style.transition = 'transform 0.3s ease-out';
        omenContainer.style.transform = `rotate(-4deg) translateX(75%)`;

        omenContainer.addEventListener('transitionend', () => {
            omenContainer.style.transition = 'none';
        });
    }
});









