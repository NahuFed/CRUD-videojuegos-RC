function validarCantidadCaracteres(texto, min, max){
    if(texto.length >= min && texto.length <= max){
        console.log('El texto tiene la cantidad de caracteres correctos');
        return true;
    }else{
        console.log('El texto no está cumpliendo la validación');
        return false;
    }
}

function checked(positivo, negativo){
    if(positivo){
        console.log('esta chequeado');
        return true;
    }else if(negativo){
        console.log('esta chequeado negativo')
        return true;
    }else{
        console.log('no está chequeado');
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