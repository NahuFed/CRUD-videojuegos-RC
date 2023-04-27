import { Videojuego } from "./classVideojuego.js";

//LISTA VIDEOJUEGOS--------------
let pokemonGold = new Videojuego('Pokemon Gold','Pokémon Gold y Silver toman lugar en la región de Johto tres años después de los eventos sucedidos en Red y Blue, los cuales transcurren en la región de Kantō. Johto es una región ficticia creada a partir de las regiones reales de Kansai y Tokai de Japón.','21 de noviembre de 1999','./img/pokemonOro.jpg','Aventura','E');

let pokemonRed = new Videojuego('Pokemon Red','Pokemon Rojo es la primera versión de la serie de videojuegos de Pokemon lanzada en 1996 para la consola Game Boy de Nintendo. El juego se desarrolla en la región de Kanto y presenta 151 especies de Pokemon para capturar, incluyendo Pikachu, Charmander, Squirtle y Bulbasaur.',' 27 de febrero de 1996 ','https://archives.bulbagarden.net/media/upload/8/80/Red_EN_boxart.png','aventura','E');

let pokemonYellow = new Videojuego('Pokemon Yellow','Pokemon Yellow es una versión mejorada de las versiones Rojo y Azul de la serie de videojuegos de Pokemon, una de las principales características de Pokemon Yellow es que el Pikachu del jugador sigue al personaje principal en lugar de permanecer en una Pokeball','12 de septiembre de 1998','https://archives.bulbagarden.net/media/upload/thumb/9/95/Yellow_EN_boxart.png/598px-Yellow_EN_boxart.png','aventura','E');

let pokemonRubi = new Videojuego('Pokemon Rubi','Pokemon Rubí es un videojuego de la serie de Pokemon lanzado en el año 2002 para la consola Game Boy Advance de Nintendo. El juego se desarrolla en la región ficticia de Hoenn y presenta 135 nuevas especies de Pokemon junto con 202 especies de las generaciones anteriores.',' 21 de noviembre de 2002','https://archives.bulbagarden.net/media/upload/5/5f/Ruby_EN_boxart.png','aventura','E');
let pokemonDiamond = new Videojuego('Pokemon Diamond','Pokemon Diamond es un videojuego de la serie de Pokemon lanzado en el año 2006 para la consola Nintendo DS. El juego se desarrolla en la región ficticia de Sinnoh y presenta 107 nuevas especies de Pokemon junto con 493 especies de las generaciones anteriores.','28 de septiembre de 2006','https://archives.bulbagarden.net/media/upload/thumb/6/69/Diamond_EN_boxart.jpg/669px-Diamond_EN_boxart.jpg', 'aventura','E');
//-------------------------------

let listaVideojuegos = [pokemonGold,pokemonRed,pokemonYellow,pokemonRubi,pokemonDiamond]
localStorage.setItem("listaVideojuegos",JSON.stringify(listaVideojuegos))
listaVideojuegos.forEach(Videojuego => {
    Videojuego.imprimirCard();
})

//BUSCADOR-----------------------
let campoBusqueda = document.querySelector("#campoBusqueda");
let formularioBusqueda = document.querySelector("#formularioBusqueda");

formularioBusqueda.addEventListener("submit", (eventito)=>{
    eventito.preventDefault();
    if(campoBusqueda.value != null) {
        let contenedor = document.querySelector("#contenedor-cards");
        contenedor.innerHTML = []
        listaVideojuegos.forEach(Videojuego => {
            if( Videojuego.titulo.toUpperCase().includes(campoBusqueda.value.toUpperCase()) || 
                Videojuego.fechaPublicacion.toUpperCase().includes(campoBusqueda.value.toUpperCase()) ||  
                Videojuego.genero.toUpperCase().includes(campoBusqueda.value.toUpperCase())){

                Videojuego.imprimirCard();
            }
        });
    }

})

