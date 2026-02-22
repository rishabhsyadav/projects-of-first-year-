function showPopup(event) {

    createParticles(event);

    setTimeout(() => {
        alert("Welcome to My Personal Details Page!");
        window.location.href = "details.html";
    }, 500);
}


/* Particle Effect Function */

function createParticles(event) {

    const button = event.target;
    const rect = button.getBoundingClientRect();

    for (let i = 0; i < 20; i++) {

        const particle = document.createElement("span");
        particle.classList.add("particle");

        document.body.appendChild(particle);

        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        particle.style.left = x + "px";
        particle.style.top = y + "px";

        const angle = Math.random() * 360;
        const distance = Math.random() * 100;

        particle.style.setProperty("--x", Math.cos(angle) * distance + "px");
        particle.style.setProperty("--y", Math.sin(angle) * distance + "px");

        setTimeout(() => {
            particle.remove();
        }, 600);
    }
}
