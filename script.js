document.addEventListener('DOMContentLoaded', () => {
    const ctaBtn = document.getElementById('ctaBtn');

    ctaBtn.addEventListener('click', () => {
        const productsSection = document.getElementById('tuotteet');
        
        // Pehmeä rullaus tuotteisiin
        productsSection.scrollIntoView({ behavior: 'smooth' });
        
        console.log("Käyttäjä haluaa nähdä tuotteet!");
    });
});
