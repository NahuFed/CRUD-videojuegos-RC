export class Videojuego {
  #titulo;
  #descripcion;
  #fechaPublicacion;
  #imagen;
  #genero;
  #clasificacion;
  #identificador;

  constructor(
    titulo,
    descripcion,
    fechaPublicacion,
    imagen,
    genero,
    clasificacion,
    identificador
  ) {
    this.#titulo = titulo;
    this.#descripcion = descripcion;
    this.#fechaPublicacion = fechaPublicacion;
    this.#imagen = imagen;
    this.#genero = genero;
    this.#clasificacion = clasificacion;
    this.identificador = identificador;
  }
  //getters

  get titulo() {
    return this.#titulo;
  }
  get descripcion() {
    return this.#descripcion;
  }
  get fechaPublicacion() {
    return this.#fechaPublicacion;
  }
  get imagen() {
    return this.#imagen;
  }

  get genero() {
    return this.#genero;
  }

  get clasificacion() {
    return this.#clasificacion;
  }
  get identificador(){
    return this.#identificador
  }
  // setters
  set titulo(titulo) {
    this.#titulo = titulo;
  }

  set descripcion(descripcion) {
    this.#descripcion = descripcion;
  }

  set fechaPublicacion(fechaPublicacion) {
    this.#fechaPublicacion = fechaPublicacion;
  }

  set imagen(imagen) {
    this.#imagen = imagen;
  }

  set genero(genero) {
    this.#genero = genero;
  }

  set clasificacion(clasificacion) {
    this.#clasificacion = clasificacion;
  }
  set identificador(identificador){
    this.#identificador = identificador;
  }
  imprimirCard(){
    let contenedorCards = document.getElementById('contenedor-cards')
    let card = document.createElement('aside')
    card.className='col-12 col-md-6 d-flex justify-content-center mb-5'
    card.innerHTML = `
    <div class="card">
    <img src="${this.#imagen}" class="card-img-top" alt="...">
    <div class="card-body d-flex flex-column justify-content-between ">
      <h5 class="card-title">${this.#titulo}</h5>
      <p class="card-text card-description">${this.#descripcion}</p>
      <p class="card-text text-start"><small class="text-body-secondary"><i class="bi bi-clock text-danger"></i>${this.#fechaPublicacion}</small></p>
      <a href="../pages/${this.#identificador}.html" class="btn css-button-sliding-to-left--red align-self-start">Ver mas</a>
    </div>
    </div>`    
  contenedorCards.appendChild(card)
  }
  toJSON(){
    return {
        titulo: this.titulo,
        descripcion: this.descripcion,
        fechaPublicacion: this.fechaPublicacion,
        imagen: this.imagen,
        genero: this.genero,
        clasificacion: this.clasificacion
    }
  }
  
}

