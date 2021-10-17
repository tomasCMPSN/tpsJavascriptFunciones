const perimetro = function(num1, num2){
    let resultado = 2 * (num1 + num2);
    return resultado;
}

let num1Solicitado = parseInt(prompt("Ingrese la base"));
let num2Solicitado = parseInt(prompt("Ingrese la altura"));

document.write("El perímetro es: "+perimetro(num1Solicitado, num2Solicitado));