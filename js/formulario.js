import Formulario from "./classFormulario.js";
import { sumarioValidaciones } from "./helpers.js";

let formulario = document.getElementById("formularioComentario"),
  comentarios = localStorage.getItem("comentarios"),
  insertarComentario = document.getElementById("insertarComentario"),
  positivo = document.getElementById("positivo"),
  negativo = document.getElementById("negativo"),
  nombre = document.getElementById("nombre"),
  comentario = document.getElementById("comentario"),
  valoracion,
  imagen

if (!comentarios) {
  comentarios = [];
} else {
  comentarios = JSON.parse(comentarios).map(
    (e) => new Formulario(e.nombre, e.comentario, e.valoracion, e.imagen)
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
}

function guardarComentario() {
  let listaErrores = sumarioValidaciones(nombre.value, comentario.value, positivo.checked, negativo.checked);
  if(listaErrores.length === 0){
    if(document.getElementById('positivo').checked){
      valoracion = "positiva"
      imagen = "../img/opcion-positiva.png"
    }else{
      valoracion = "negativo"
      imagen = "../img/opcion-negativa.png"
    }
    let nombreIngresado = nombre.value;
    let comentarioIngresado = comentario.value;
    let nuevoComentario = new Formulario(nombreIngresado, comentarioIngresado, valoracion, imagen);
    comentarios.push(nuevoComentario);
    localStorage.setItem("comentarios", JSON.stringify(comentarios));
    let alertaError = document.getElementById('alertMsjError');
    let alerta = document.getElementById('alertMsjExitoso');
    alertaError.className = 'alert alert-danger d-none';
    alerta.className = 'alert alert-success';
    nombre.value = '';
    comentario.value = '';
    positivo.removeAttribute('checked');
    negativo.removeAttribute('checked');
    alerta.innerHTML = 'Se agregó exitosamente tu comentario!';
    formulario.reset();
  }else{
    let alerta = document.getElementById('alertMsjExitoso');
    let alertaError = document.getElementById('alertMsjError');
    alerta.className = 'alert alert-success d-none'
    alertaError.className = 'alert alert-danger';
    alertaError.innerHTML = listaErrores;
  }
}

function crearComentario() {
  let cardComentario = document.createElement("div");
  cardComentario.classList.add(
    "col-md-7"
  );
  comentarios.forEach((element) => {
    cardComentario.innerHTML = `
      <div class = "card mb-4 rounded-3 shadow-sm px-0">
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
  insertarComentario.prepend(cardComentario);
}

function mostrarComentarios() {
  let comentariosReverse = comentarios.reverse();
  comentariosReverse.forEach((element) => {
    insertarComentario.innerHTML += `
    <div class = "col-md-7">
      <div class = "card mb-4 rounded-3 shadow-sm px-0">
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
    </div>
      `;
  })
}