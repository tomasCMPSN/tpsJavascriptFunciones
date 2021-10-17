const parono = function(numero){
    if(numero % 2 == 0){
        document.write(numero+" es par.");
    }else{
        document.write(numero+" es impar.");
    }
}

let numeroSolicitado = parseInt(prompt("Ingrese un número"));

parono(numeroSolicitado);