let retirar = parseFloat(prompt("Ingrese la cantidad a retirar:"));
let billete100 = Math.trunc(retirar / 100);
let billete50 = Math.trunc((retirar % 100) / 50);
let billete20 = Math.trunc((retirar % 50) / 20);
let billete10 = Math.trunc((retirar % 20) / 10);
console.log("Billetes de 100: " + billete100 + "\nBilletes de 50: " + billete50 + "\nBilletes de 20: " + billete20 + "\nBilletes de 10: " + billete10);