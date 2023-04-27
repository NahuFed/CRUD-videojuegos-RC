const espacioPublicidad = document.querySelector(".publicidad");
const textoPublicidad = document.querySelector(".texto-publicidad");

let textosPublicidad = [
    "<¿Querés estudiar programación?>",
    "<Vení con los mejores!>",
    "<Vení a Rolling Code School>",
]

function mostrarPublicidad() {
    espacioPublicidad.classList.remove("d-none");
}

let indice = 0;
function actualizarTextoPublicidad(){
    textoPublicidad.textContent = textosPublicidad[indice];
    indice++;
    if (indice >= textosPublicidad.length) {
        indice = 0;
    }
}

setInterval(actualizarTextoPublicidad, 4000);
setTimeout(mostrarPublicidad,4000);