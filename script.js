const alternatives = [
    { text: "", image: "images/cat-01.gif" },
    { text: "Te prometo que será divertido", image: "images/cat-02.gif" },
    { text: "Piénsalo de nuevo", image: "images/cat-03.gif" },
    { text: "Vamos, di que sí", image: "images/cat-04.gif" },
    { text: "Que el miedo no te detenga", image: "images/cat-05.gif" },
    { text: "El NO es el boton equivocado", image: "images/cat-06.gif" },  // Nuevo
    { text: "Es ahora o nunca", image: "images/cat-07.gif" },  // Nuevo
    { text: "Sigues con el no >:/", image: "images/cat-08.gif" },  // Nuevo
    { text: "Ya di que si, cara eh poto", image: "images/cat-09.gif" },  // Nuevo
    { text: "La unica opcion es que digas que si", image: "images/cat-10.gif" }   // Nuevo
];

const ohYes = { text: "Sabía que aceptarías <3", image: "images/cat-yes.gif" };
const areYouOk = { text: "JUM esta bien no quieres, entiendo :(", image: "images/cat-ok.gif" }; // Nuevo GIF

const title = document.querySelector('.title');
const text = document.querySelector('.text');
const cat = document.querySelector('.cat');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

let count = 0;
let noClickCount = 0; // Contador de clics en el botón NO

function updateDisplay(item) {
    cat.src = item.image;
    text.innerHTML = item.text;
}

// Al hacer clic en "SÍ"
yesButton.addEventListener('click', () => {
    updateDisplay(ohYes);
    yesButton.style.display = 'none';
    noButton.style.display = 'none';
});

// Al hacer clic en "NO"
noButton.addEventListener('click', () => {
    count++;
    noClickCount++; // Aumentamos el contador de clics en NO

    if (noClickCount >= 150) {
        updateDisplay(areYouOk); // Mostramos el nuevo GIF y mensaje
        noButton.style.display = 'none'; // Ocultamos el botón NO
        yesButton.style.display = 'none'; // Ocultamos el botón SÍ
    } else {
        if (count < alternatives.length) {
            updateDisplay(alternatives[count]);
        } else {
            count = 1;  // Reinicia desde la segunda imagen
            updateDisplay(alternatives[count]);
        }
    }
});
const audio = document.getElementById("music");
const playPauseButton = document.getElementById("playPauseButton");
const audioSource = document.getElementById("audioSource");

// Lista de canciones (agrega más si quieres)
const playlist = ["images/tu-cancion.mp3", "images/cancion.mp3", "images/cancion1.mp3"];
let currentSongIndex = 0;
let clickCount = 0;
let clickTimer;

// Función para alternar Play/Pause
function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseButton.src = "images/Capi.jpg"; // Imagen de pausa
    } else {
        audio.pause();
        playPauseButton.src = "images/Capi.jpg"; // Imagen de play
    }
}

// Función para cambiar de canción
function changeSong() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    audioSource.src = playlist[currentSongIndex];
    audio.load();
    audio.play();
    playPauseButton.src = "images/Capi.jpg"; // Mantener la imagen en "pause"
}

// Manejo de clics
playPauseButton.addEventListener("click", () => {
    clickCount++;

    if (clickCount === 1) {
        clickTimer = setTimeout(() => {
            togglePlayPause();
            clickCount = 0;
        }, 300); // Espera 300ms para detectar si es doble clic
    } else if (clickCount === 2) {
        clearTimeout(clickTimer);
        changeSong();
        clickCount = 0;
    }
});

