const header = document.querySelector('header');

let rafId = null;
let mouseX = -500;
let mouseY = -500;

header.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Si ya hay un frame pendiente, no programamos otro
    if (rafId) return;

    rafId = requestAnimationFrame(() => {
        header.style.setProperty('--x', `${mouseX}px`);
        header.style.setProperty('--y', `${mouseY}px`);
        rafId = null; // Liberamos para el siguiente frame
    });
});

// Resetear el efecto cuando el cursor sale del header
header.addEventListener('mouseleave', () => {
    if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
    }
    header.style.setProperty('--x', '-500px');
    header.style.setProperty('--y', '-500px');
});
