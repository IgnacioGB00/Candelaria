// Seleccionamos el header
const header = document.querySelector('header');

// Escuchamos el evento mousemove
header.addEventListener('mousemove', (e) => {
    // Obtenemos las coordenadas X e Y relativas al viewport
    // Usamos clientX/Y porque el header ocupa toda la pantalla (100vh)
    const x = e.clientX;
    const y = e.clientY;

    // Actualizamos las variables CSS en el elemento header
    // Usamos 'px' para que la máscara radial sepa dónde posicionarse exactamente
    header.style.setProperty('--x', `${x}px`);
    header.style.setProperty('--y', `${y}px`);
});