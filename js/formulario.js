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
  let cardComentario = document.createElement("div");
  cardComentario.classList.add(
    "card",
    "mb-4",
    "rounded-3",
    "shadow-sm"
  );
  comentarios.forEach((element) => {
    cardComentario.innerHTML = `
    <div class="card-header py-3 d-flex justify-content-between">
      <h4 class="my-0 fw-normal">${element.nombre}</h4>
      <div class="opcion opcion-elegida">
        <img src="${element.imagen}" />
      </div>
    </div>
    <div class="card-body">
      <p class="">${element.comentario}</p>
      <p class="text-end"><small class="text-secondary">${element.dia}/${element.mes}/${element.anio}</small></p>
    </div>
    `;
  });
  insertarComentario.prepend(cardComentario);
}

function mostrarComentarios() {
  let comentariosReverse = comentarios.reverse();
  comentariosReverse.forEach((element) => {
    insertarComentario.innerHTML += `
    <div class="card mb-4 rounded-3 shadow-sm">
      <div class="card-header py-3 d-flex justify-content-between">
        <h4 class="my-0 fw-normal">${element.nombre}</h4>
        <div class="opcion opcion-elegida">
          <img src="${element.imagen}" />
        </div>
      </div>
      <div class="card-body">
        <p class="">${element.comentario}</p>
        <p class="text-end"><small class="text-secondary">${element.dia}/${element.mes}/${element.anio}</small></p>
      </div>
    </div>
      `;
  });
}