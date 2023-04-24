
export default class Formulario{
    #nombre
    #comentario
    #dia
    #mes
    #anio
    constructor(nombre, comentario){
        this.#nombre = nombre;
        this.#comentario = comentario;
        this.#dia = new Date().getDate();
        this.#mes = new Date().getMonth()+1;
        this.#anio = new Date().getFullYear();
    }
    //getters
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
    toJSON(){
        return{
            nombre: this.nombre,
            comentario: this.comentario,
            dia: this.dia,
            mes: this.mes,
            anio: this.anio
        }
    }
}