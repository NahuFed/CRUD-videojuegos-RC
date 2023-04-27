function validarCantidadCaracteres(texto, min, max){
    if(texto.length >= min && texto.length <= max){
        return true;
    }else{
        return false;
    }
}

function checked(positivo, negativo){
    if(positivo){
        return true;
    }else if(negativo){
        return true;
    }else{
        return false
    }
}

export function sumarioValidaciones(nombre, comentario, positivo, negativo){
    let resumen = '';
    if(!validarCantidadCaracteres(nombre, 2, 50)){
        resumen = 'El nombre tiene que tener entre 2 y 50 caracteres.'
    }
    if(!validarCantidadCaracteres(comentario, 2, 600)){
        resumen += '\n El comentario tiene que tener entre 2 y 600 caracteres.'
    }
    if(!checked(positivo, negativo)){
        resumen += '\n Tienes que elegir una opción positiva o negativa sobre la película.'
    }
    return resumen;
}