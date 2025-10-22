let limite = parseInt(prompt("Ingrese un número: "));
let esPrimo = true;
for (let num = 2; num <= limite; num++) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        console.log(num);
    }
}
