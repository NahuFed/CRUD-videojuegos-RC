export default class Formulario{
    #nombre
    #comentario
    constructor(nombre, comentario){
        this.#nombre = nombre;
        this.#comentario = comentario;
    }
    //getters
    get nombre(){
        return this.#nombre;
    }
    get comentario(){
        return this.#comentario;
    }
    //setters
    set nombre(nuevoNombre){
        this.#nombre = nuevoNombre;
    }
    set comentario(nuevoComentario){
        this.#comentario = nuevoComentario;
    }
}