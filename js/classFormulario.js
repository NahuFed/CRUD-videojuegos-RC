export default class Formulario{
    #nombre
    #comentario
    #dia
    #mes
    #anio
    #valoracion
    #imagen
    constructor(nombre, comentario, valoracion, imagen){
        this.#nombre = nombre;
        this.#comentario = comentario;
        this.#dia = new Date().getDate();
        this.#mes = new Date().getMonth()+1;
        this.#anio = new Date().getFullYear();
        this.#valoracion = valoracion;
        this.#imagen = imagen;
    }
    //getters
    get imagen(){
        return this.#imagen;
    }
    get valoracion(){
        return this.#valoracion;
    }
    get dia(){
        return this.#dia;
    }
    get mes(){
        return this.#mes;
    }
    get anio(){
        return this.#anio;
    }
    get nombre(){
        return this.#nombre;
    }
    get comentario(){
        return this.#comentario;
    }
    //setters
    set imagen(nuevaImagen){
        this.#imagen = nuevaImagen;
    }
    set nombre(nuevoNombre){
        this.#nombre = nuevoNombre;
    }
    set comentario(nuevoComentario){
        this.#comentario = nuevoComentario;
    }
    set dia(nuevoDia){
        this.#dia = nuevoDia;
    }
    set mes(nuevoMes){
        this.#mes = nuevoMes;
    }
    set anio(nuevoAnio){
        this.#anio = nuevoAnio;
    }
    set valoracion(nuevaValoracion){
        this.#valoracion = nuevaValoracion;
    }
    toJSON(){
        return{
            nombre: this.nombre,
            comentario: this.comentario,
            dia: this.dia,
            mes: this.mes,
            anio: this.anio,
            valoracion: this.valoracion,
            imagen: this.imagen
        }
    }
}