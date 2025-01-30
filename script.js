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

const ohYes = { text: "Sabía que aceptarías", image: "images/cat-yes.gif" };
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
// Configuración de Firebase (reemplaza con tus datos)
const firebaseConfig = {
    apiKey: "AIzaSyD1Br2W5JStFT4Ohb32GWCywkEeeaA0AmQ",
    authDomain: "project-2459976473523716361.firebaseapp.com",
    projectId: "project-2459976473523716361",
    storageBucket: "project-2459976473523716361.firebasestorage.app",
    messagingSenderId: "156686523631",
    appId: "1:156686523631:web:da97e9886ab549c881cf1a"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Inicializar Firestore
const db = firebase.firestore();

// Botón "Sí"
const yesButton = document.getElementById('yesButton');

yesButton.addEventListener('click', async () => {
    await db.collection("clicks").add({
        clickedYes: true,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    alert("¡Tu clic fue registrado!");
});

