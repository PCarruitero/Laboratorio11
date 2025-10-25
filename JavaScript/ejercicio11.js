let total = 0;
let continuar = true;
do {
    let precio = parseFloat(prompt("Ingrese el precio del producto (o 0 para terminar):"));
    if (isNaN(precio) || precio < 0) {
        console.log("Debe ingresar un precio válido.");
        continue;
    }
    if (precio === 0) {
        continuar = false; 
    } else {
        total += precio; 
    }
} while (continuar);
console.log("Total parcial a pagar: $" + total.toFixed(2));
let totalFinal = total;
if (total > 100) {
    console.log("Tiene un descuento del 10%");
    totalFinal = total * 0.9;
} else if (total >= 50 && total <= 100) {
    console.log("Gana un cupón de 5%");
    totalFinal = total * 0.95;
} else {
    console.log("No aplica descuento ");
}
console.log("Total final a pagar: $" + totalFinal.toFixed(2));
