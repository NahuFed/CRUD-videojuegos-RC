function validarCantidadCaracteres(texto, min, max){
    if(texto.length >= min && texto.length <= max){
        console.log('El texto tiene la cantidad de caracteres correctos');
        return true;
    }else{
        console.log('El texto no está cumpliendo la validación');
        return false;
    }
}

function validarCantidadCaracteresComentario(texto, min, max){
    if(texto.length >= min && texto.length <= max){
        console.log('El texto tiene la cantidad de caracteres correctos');
        return true;
    }else{
        console.log('El texto no está cumpliendo la validación');
        return false;
    }
}

export function sumarioValidaciones(string){
    let resumen = '';
    if(!validarCantidadCaracteres(string, 2, 50)){
        resumen = 'El nombre tiene que tener entre 2 y 50 caracteres.'
    }
    return resumen;
}