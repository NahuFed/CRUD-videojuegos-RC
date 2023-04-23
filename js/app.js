class Videojuego {
  #titulo;
  #descripcion;
  #fechaPublicacion;
  #imagen;
  #genero;
  #clasificacion;

  constructor(
    titulo,
    descripcion,
    fechaPublicacion,
    imagen,
    genero,
    clasificacion
  ) {
    this.#titulo = titulo;
    this.#descripcion = descripcion;
    this.#fechaPublicacion = fechaPublicacion;
    this.#imagen = imagen;
    this.#genero = genero;
    this.#clasificacion = clasificacion;
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

  imprimirCard(){
    let contenedorCards = document.getElementById('contenedor-cards')
    let card = document.createElement('div')
    card.innerHTML = `<div class="card col-md-6">
    <img src="${this.#imagen}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${this.#titulo}</h5>
      <p class="card-text ">${this.#descripcion}</p>
      <p class="card-text text-start"><small class="text-body-secondary"><i class="bi bi-clock text-danger"></i>${this.#fechaPublicacion}</small></p>
      <a href="#" class="btn css-button-sliding-to-left--red">Ver mas</a>
    </div>
  </div>`
  contenedorCards.appendChild(card)
  }

}
