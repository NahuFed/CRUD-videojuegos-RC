import Formulario from "./classFormulario.js";

let formulario = document.getElementById("formularioComentario"),
  comentarios = localStorage.getItem("comentarios"),
  insertarComentario = document.getElementById("insertarComentario");

if (!comentarios) {
  comentarios = [];
} else {
  comentarios = JSON.parse(comentarios).map(
    (e) => new Formulario(e.nombre, e.comentario)
  );
  mostrarComentarios();
}

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
  localStorage.setItem("comentarios", JSON.stringify(comentarios));
  console.log(comentarios);
}

function crearComentario() {
  let cardComentario = document.createElement("article");
  cardComentario.classList.add(
    "card",
    "border-top-0",
    "border-start-0",
    "border-end-0",
    "px-2",
    "rounded-0",
    "py-3",
    "shadow-sm"
  );
  comentarios.forEach((element) => {
    cardComentario.innerHTML = `
    <div class="card-body">
      <div class="d-flex flex-row justify-content-start">
        <h6 class="text-start">${element.nombre}</h6> 
        <p class="card-text mx-2">
          <small class="text-body-secondary"
            >Last updated 3 mins ago</small
          >
        </p>
      </div>
      <p>${element.comentario}</p>
    </div>
      `;
  });
  insertarComentario.prepend(cardComentario);
}

function mostrarComentarios() {
  let comentariosReverse = comentarios.reverse();
  comentariosReverse.forEach((element) => {
    insertarComentario.innerHTML += `
    <article class="card border-top-0 border-start-0 border-end-0 px-2 rounded-0 py-3 shadow-sm">
        <div class="card-body">
          <div class="d-flex flex-row justify-content-start">
            <h6 class="text-start">${element.nombre}</h6> 
            <p class="card-text mx-2">
              <small class="text-body-secondary"
                >Last updated 3 mins ago</small
              >
            </p>
          </div>
          <p>${element.comentario}</p>
        </div>
    </article>
      `;
  });
}
