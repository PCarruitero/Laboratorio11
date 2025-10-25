let bucle = true;
do {
    let opcion = parseInt(prompt("Menu:\n1. Calcular área del círculo \n2. Calcular área del rectángulo\n3. Salir\nIngrese una opcion:"));
    switch (opcion) {
        case 1:
            let radio = parseFloat(prompt("Ingrese el radio del círculo:"));
            let areaCirculo = Math.PI * Math.pow(radio, 2);
            console.log("El área del círculo es: " + areaCirculo.toFixed(2));
            break;
        case 2:
            let largo = parseFloat(prompt("Ingrese el largo del rectángulo:"));
            let ancho = parseFloat(prompt("Ingrese el ancho del rectángulo:"));
            let areaRectangulo = largo * ancho;
            console.log("El área del rectángulo es: " + areaRectangulo.toFixed(2));
            break;
        case 3:
            console.log("Saliendo del programa");
            bucle = false;
            break;
        default:
            console.log("Opción no válida");
            break;
    }
} while (bucle);