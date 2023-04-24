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
    "rounded-2",
    "px-2",
    "py-3",
    "shadow-sm",
    "mt-4"
  );
  comentarios.forEach((element) => {
    cardComentario.innerHTML = `
              <div class="card-body">
                <h6 class="text-end">${element.nombre}</h6>
                <p>${element.comentario}</p>
                <p class="card-text">
                  <small class="text-body-secondary"
                    >Last updated 3 mins ago</small
                  >
                </p>
              </div>
      `;
  });
  insertarComentario.prepend(cardComentario);
}

function mostrarComentarios() {
  let comentariosReverse = comentarios.reverse();
  comentariosReverse.forEach((element) => {
    insertarComentario.innerHTML += `
    <article class="card rounded-2 px-2 py-3 shadow-sm mt-4">
              <div class="card-body">
                <h6 class="text-end">${element.nombre}</h6>
                <p>${element.comentario}</p>
                <p class="card-text">
                  <small class="text-body-secondary"
                    >Last updated 3 mins ago</small
                  >
                </p>
              </div>
      </article>
      `;
  });
}
