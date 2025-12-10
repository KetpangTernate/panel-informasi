// Food Price Chart
const ctxPrice = document.getElementById('foodPriceChart').getContext('2d');
const foodPriceChart = new Chart(ctxPrice, {
    type: 'line',
    data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct'],
        datasets: [{
            label: 'Harga Beras (Rp/kg)',
            data: [12000,12500,13000,12800,13500,14000,13800,14200,14500,15000],
            borderColor: '#2e7d32',
            backgroundColor: 'rgba(46,125,50,0.1)',
            tension: 0.3,
            fill: true
        },{
            label: 'Harga Telur (Rp/kg)',
            data: [22000,23000,24000,23500,24500,25000,24800,25200,25500,26000],
            borderColor: '#d4af37',
            backgroundColor: 'rgba(212,175,55,0.1)',
            tension: 0.3,
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});


const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


// Food Availability Chart
const ctxAvailability = document.getElementById('foodAvailabilityChart').getContext('2d');
const foodAvailabilityChart = new Chart(ctxAvailability, {
    type: 'bar',
    data: {
        labels: ['Beras','Jagung','Kedelai','Gula','Minyak Goreng','Daging Sapi','Daging Ayam'],
        datasets: [{
            label: 'Ketersediaan (Ribu Ton)',
            data: [8,19,0.4,2.2,7.5,0.4,3.5],
            backgroundColor: 'rgba(46,125,50,0.7)',
            borderColor: 'rgba(46,125,50,1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

const mobileNav = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".nav-overlay");
const closeMenu = document.querySelector(".close-menu");

menuToggle.addEventListener("click", () => {
    mobileNav.classList.add("active");
    overlay.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    overlay.classList.remove("active");
});

// ===== Sticky Shrink Navbar on Scroll =====
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});
