import Formulario from "./classFormulario.js";

let formulario = document.getElementById("formularioComentario");
let comentarios = [];

formulario.addEventListener("submit", prepararDatos);

function prepararDatos(e) {
  e.preventDefault();
  guardarComentario();
  crearComentario();
}

function guardarComentario() {
  let nombre = document.getElementById("nombre");
  let comentario = document.getElementById("comentario");
  let nombreIngresado = nombre.value;
  let comentarioIngresado = comentario.value;
  let nuevoComentario = new Formulario(nombreIngresado, comentarioIngresado);
  comentarios.push(nuevoComentario);
  console.log(comentarios);
}

function crearComentario() {
  let insertarComentario = document.getElementById("insertarComentario");
  let cardComentario = document.createElement('article');
  cardComentario.classList.add("card", "rounded-2", "px-2", "py-3", "shadow")
  cardComentario.innerHTML = `
            <div class="card-body">
              <h6 class="text-end">${comentarios[0].nombre}</h6>
              <p>${comentarios[0].comentario}</p>
              <p class="card-text">
                <small class="text-body-secondary"
                  >Last updated 3 mins ago</small
                >
              </p>
            </div>
    `;
    console.log(cardComentario);
    insertarComentario.prepend(cardComentario);
}
