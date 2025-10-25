let numero = parseInt(prompt("Ingrese un número para verificar si es Armstrong:"));
if (isNaN(numero) || numero < 0) {
    console.log("Debe ingresar un número entero positivo.");
} else {
    let numStr = numero.toString();         
    let n = numStr.length;       
    let suma = 0;
    for (let i = 0; i < n; i++) {
        let digito = parseInt(numStr[i]);    
        suma += Math.pow(digito, n);    
    }
    if (suma === numero) {
        console.log(numero + " es un número Armstrong.");
    } else {
        console.log(numero + " no es un número Armstrong.");
    }
}
