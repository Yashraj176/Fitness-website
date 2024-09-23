// Toggle Mobile Menu
const navLinks = document.querySelector('.nav-links');
document.querySelector('.logo').addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Example: Update Heart Rate dynamically
const heartRate = document.querySelector('.heart-rate span');
setInterval(() => {
    const randomHeartRate = Math.floor(Math.random() * (120 - 60 + 1)) + 60;
    heartRate.textContent = `${randomHeartRate} bpm`;
}, 3000);

// Scroll to sections smoothly
document.querySelectorAll('.navbar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
