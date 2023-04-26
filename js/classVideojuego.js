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
    let card = document.createElement('aside')
    card.className='col-12 col-md-6 d-flex justify-content-center mb-5'
    card.innerHTML = `
    <div class="card">
    <img src="${this.#imagen}" class="card-img-top" alt="...">
    <div class="card-body d-flex flex-column justify-content-between ">
      <h5 class="card-title">${this.#titulo}</h5>
      <p class="card-text card-description">${this.#descripcion}</p>
      <p class="card-text text-start"><small class="text-body-secondary"><i class="bi bi-clock text-danger"></i>${this.#fechaPublicacion}</small></p>
      <a href="#" class="btn css-button-sliding-to-left--red align-self-start">Ver mas</a>
    </div>
    </div>`    
  contenedorCards.appendChild(card)
  }

}

let pokemonGold = new Videojuego('Pokemon Gold','Pokémon Gold y Silver toman lugar en la región de Johto tres años después de los eventos sucedidos en Red y Blue, los cuales transcurren en la región de Kantō. Johto es una región ficticia creada a partir de las regiones reales de Kansai y Tokai de Japón.','21 de noviembre de 1999','./img/pokemonOro.jpg','Aventura','E')

let pokemonRed = new Videojuego('Pokemon Red','Pokemon Rojo es la primera versión de la serie de videojuegos de Pokemon lanzada en 1996 para la consola Game Boy de Nintendo. El juego se desarrolla en la región de Kanto y presenta 151 especies de Pokemon para capturar, incluyendo Pikachu, Charmander, Squirtle y Bulbasaur.',' 27 de febrero de 1996 ','https://archives.bulbagarden.net/media/upload/8/80/Red_EN_boxart.png','aventura','E')

let pokemonYellow = new Videojuego('Pokemon Yellow','Pokemon Yellow es una versión mejorada de las versiones Rojo y Azul de la serie de videojuegos de Pokemon, una de las principales características de Pokemon Yellow es que el Pikachu del jugador sigue al personaje principal en lugar de permanecer en una Pokeball','12 de septiembre de 1998','https://archives.bulbagarden.net/media/upload/thumb/9/95/Yellow_EN_boxart.png/598px-Yellow_EN_boxart.png','aventura','E')

let pokemonRubi = new Videojuego('Pokemon Rubi','Pokemon Rubí es un videojuego de la serie de Pokemon lanzado en el año 2002 para la consola Game Boy Advance de Nintendo. El juego se desarrolla en la región ficticia de Hoenn y presenta 135 nuevas especies de Pokemon junto con 202 especies de las generaciones anteriores.',' 21 de noviembre de 2002','https://archives.bulbagarden.net/media/upload/5/5f/Ruby_EN_boxart.png','aventura','E')

let pokemonDiamond = new Videojuego('Pokemon Diamond','Pokemon Diamond es un videojuego de la serie de Pokemon lanzado en el año 2006 para la consola Nintendo DS. El juego se desarrolla en la región ficticia de Sinnoh y presenta 107 nuevas especies de Pokemon junto con 493 especies de las generaciones anteriores.','28 de septiembre de 2006','https://archives.bulbagarden.net/media/upload/thumb/6/69/Diamond_EN_boxart.jpg/669px-Diamond_EN_boxart.jpg', 'aventura','E')

pokemonGold.imprimirCard()
pokemonRed.imprimirCard()
pokemonYellow.imprimirCard()
pokemonRubi.imprimirCard()
pokemonDiamond.imprimirCard()