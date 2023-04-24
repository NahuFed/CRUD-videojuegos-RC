import Formulario from "./classFormulario.js";

let formulario = document.getElementById("formularioComentario"),
  comentarios = localStorage.getItem("comentarios"),
  insertarComentario = document.getElementById("insertarComentario"),
  positivo = document.getElementById("positivo"),
  negativo = document.getElementById("negativo")

if (!comentarios) {
  comentarios = [];
} else {
  comentarios = JSON.parse(comentarios).map(
    (e) => new Formulario(e.nombre, e.comentario)
  );
  mostrarComentarios();
}

positivo.addEventListener('click',positive)
formulario.addEventListener("submit", prepararDatos);

function prepararDatos(e) {
  e.preventDefault();
  guardarComentario();
  crearComentario();
}

function positive(){
  positivo.setAttribute("checked", "")
  console.log(document.getElementById('positivo').checked)
}

function guardarComentario() {
  let nombre = document.getElementById("nombre");
  let comentario = document.getElementById("comentario");
  let valoracion;
  let imagen;
  if(document.getElementById('positivo').checked){
    valoracion = "positiva"
    imagen = "../img/opcion-positiva.png"
  }else{
    valoracion = "negativo"
    imagen = "../img/opcion-negativa.png"
  }
  console.log(valoracion);
  let nombreIngresado = nombre.value;
  let comentarioIngresado = comentario.value;
  let nuevoComentario = new Formulario(nombreIngresado, comentarioIngresado, valoracion, imagen);
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
      <div class="d-flex flex-row justify-content-start align-items-center">
        <h6 class="text-start m-0">${element.nombre}</h6>
        <i class="bi bi-check-circle-fill ms-1"></i>
        <p class="card-text mx-2">
          <small class="text-body-secondary"
            >${element.dia}/${element.mes}/${element.anio}</small
          >
        </p>
      </div>
      <p class="mt-3 mb-0">${element.comentario}</p>
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
          <div class="d-flex flex-row justify-content-start align-items-center">
            <h6 class="text-start m-0">${element.nombre}</h6>
            <i class="bi bi-check-circle-fill ms-1"></i>
            <p class="card-text mx-2">
              <small class="text-body-secondary"
                >${element.dia}/${element.mes}/${element.anio}</small
              >
            </p>
          </div>
          <p class="mt-3 mb-0">${element.comentario}</p>
        </div>
    </article>
      `;
  });
}