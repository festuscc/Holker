document.addEventListener('DOMContentLoaded', () => {
    // Rullauspainike
    const ctaBtn = document.getElementById('ctaBtn');
    ctaBtn.addEventListener('click', () => {
        document.getElementById('tuotteet').scrollIntoView({ behavior: 'smooth' });
    });

    // Lomakkeen hallinta
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Estetään sivun latautuminen
        
        // Simuloitu lähetys
        formStatus.innerText = "Kiitos viestistäsi! HolKer Studio palaa asiaan pian.";
        contactForm.reset(); // Tyhjennetään kentät
        
        // Poistetaan ilmoitus 5 sekunnin kuluttua
        setTimeout(() => {
            formStatus.innerText = "";
        }, 5000);
    });
});
