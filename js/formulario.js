import Formulario from "./classFormulario.js";

let formulario = document.getElementById('formularioComentario');
let comentarios = [];

formulario.addEventListener('submit', prepararDatos);

function prepararDatos(e){
    e.preventDefault();
    crearComentario();
}

function crearComentario(){
    let nombre = document.getElementById('nombre');
    let comentario = document.getElementById('comentario');
    let nombreIngresado = nombre.value;
    let comentarioIngresado = comentario.value;
    let nuevoComentario = new Formulario(nombreIngresado, comentarioIngresado);
    comentarios.push(nuevoComentario);
    console.log(comentarios);
}