let bucle = true;
do {
    let opcion = parseInt(prompt("MENÚ PRINCIPAL\n" + "1. Calcular estadísticas de N notas\n" + "2. Contar números pares e impares en un rango\n" + "3. Generar una tabla de multiplicar\n" + "4. Salir\n" + "Ingrese una opción:"));
    switch (opcion) {
        case 1:
            let cantidad = parseInt(prompt("¿Cuántas notas desea ingresar?"));
            if (isNaN(cantidad) || cantidad <= 0) {
                console.log("Debe ingresar una cantidad válida.");
                break;
            }
            let notas = [];
            for (let i = 0; i < cantidad; i++) {
                let nota = parseFloat(prompt(`Ingrese la nota ${i + 1}:`));
                notas.push(nota);
            }
            let suma = 0;
            for (let n of notas) suma += n;
            let promedio = suma / notas.length;
            let max = notas[0];
            let min = notas[0];
            for (let n of notas) {
                if (n > max) max = n;
                if (n < min) min = n;
            }
            let pares = 0;
            let impares = 0;
            for (let n of notas) {
                if (Math.floor(n) % 2 === 0) pares++;
                else impares++;
            }
            let encima = 0;
            for (let n of notas) {
                if (n > promedio) encima++;
            }
            console.log("Resultados de las notas:");
            console.log("Promedio:" + promedio.toFixed(2));
            console.log("Máxima:" + max);
            console.log("Mínima:" + min);
            console.log("Cantidad de pares:" + pares);
            console.log("Cantidad de impares:" + impares);
            console.log("Notas por encima del promedio:" + encima);
            break;
        case 2:
            let inicio = parseInt(prompt("Ingrese el número inicial del rango:"));
            let fin = parseInt(prompt("Ingrese el número final del rango:"));
            if (isNaN(inicio) || isNaN(fin) || inicio > fin) {
                console.log("Rango inválido.");
                break;
            }
            let paresRango = 0;
            let imparesRango = 0;
            for (let i = inicio; i <= fin; i++) {
                if (i % 2 === 0) paresRango++;
                else imparesRango++;
            }
            console.log(`Entre ${inicio} y ${fin}:`);
            console.log("Cantidad de pares:" + paresRango);
            console.log("Cantidad de impares:" + imparesRango);
            break;
        case 3:
            let num = parseInt(prompt("Ingrese el número para generar su tabla:"));
            if (isNaN(num)) {
                console.log("Debe ingresar un número válido.");
                break;
            }
            console.log(`Tabla de multiplicar del ${num}:`);
            for (let i = 1; i <= 12; i++) {
                console.log(`${num} x ${i} = ${num * i}`);
            }
            break;
        case 4:
            console.log("Saliendo del programa");
            bucle = false;
            break;
        default:
            console.log("Opción no válida");
            break;
    }
} while (bucle);
