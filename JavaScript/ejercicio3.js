let lista = [];
for (let i=0; i<10; i++) {
    let num = parseFloat(prompt("Ingrese el número " + (i+1) + ":"));
    lista.push(num);
}
let pares = 0;
let impares = 0;
for (let j=0; j<lista.length; j++) {
    if (lista[j] % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}
console.log("Cantidad de números pares: " + pares);
console.log("Cantidad de números impares: " + impares);