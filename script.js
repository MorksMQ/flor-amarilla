const abeja = document.getElementById('abeja');
const playBtn = document.getElementById('playBtn');
const flor = document.getElementById('flor');
const backgroundMusic = document.getElementById('backgroundMusic');
const playMusic = document.getElementById('playMusic');
const boton = document.getElementById('boton')
const nubes = document.getElementById('.nube')

playBtn.addEventListener('click', () => {
    playBtn.style.display = 'none';
    boton.style.display = 'none';

    // Cambiar la música
    backgroundMusic.pause();
    playMusic.play();

    // Iniciar el movimiento horizontal de la abeja
    abeja.style.transition = 'left 18s ease-in-out';
    abeja.style.left = 'calc(100% - 100px)';

    // Mostrar y animar la flor después de 12 segundos
    setTimeout(() => {
        flor.style.display = 'block';
    }, 1600);

    // Al final del movimiento horizontal, iniciar el bucle alrededor de la flor
    setTimeout(() => {
        abeja.style.transition = '';
        abeja.style.animation = 'vueloAbeja 1s infinite alternate ease-in-out, bucleAbeja 2s infinite ease-in-out';
    }, 15000);

    nubes.forEach((nube, index) => {
        const delay = index * 5; 
        nube.style.animation = `moverNube 15s linear ${delay}s infinite`;
    });
});
