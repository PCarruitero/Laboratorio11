let edad=parseInt(prompt("Ingrese su edad:"));
if (edad<12) {
    console.log("Usted es un niño");
} else if (edad>=12 && edad<=17) {
    console.log("Usted es un adolescente");
} else if (edad>=18 && edad<=59) {
    console.log("Usted es un adulto");
} else if (edad>=60) {
    console.log("Usted es un adulto mayor");
}