let numero = parseInt(prompt("Ingrese un número para calcular su sumatoria: "));
let sumatoria = 0;
for (let i = 1; i <= numero; i++) {
    if (i % 5 === 0) {
        continue;
    } else {
        sumatoria += i;
    }
}
console.log("La sumatoria es: " + sumatoria);