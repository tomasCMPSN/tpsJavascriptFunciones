const mayus = function(frase){
    if(frase == frase.toUpperCase()){
        document.write(frase+" solo está en mayusculas.");
    }else if(frase == frase.toLowerCase()){
        document.write(frase+" solo está en minusculas.");
    }else{
        document.write(frase+" tiene mayusculas y minusculas");
    }
}

let mayusSolicitado = prompt("Ingrese una frase");

mayus(mayusSolicitado);