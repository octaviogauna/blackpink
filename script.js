function datosBlackpink() {
    let opcion;

    do {
        opcion = parseInt(prompt("Ingrese un número del 1 al 4 para ver información de las integrantes de Blackpink, o 0 para salir:"));

        if (opcion === 1) {
            alert("Nombre completo: Kim Jisoo\nEdad: 29\nPaís de origen: Corea del Sur\nJisoo es embajadora de marcas como Tommy Hilfiger, Dior y Cartier");
        } else if (opcion === 2) {
            alert("Nombre completo: Kim Jennie\nEdad: 28\nPaís de origen: Corea del Sur\nJennie es embajadora de marcas como Channel, Calvin Klein, Porsche" );
        } else if (opcion === 3) {
            alert("Nombre completo: Park Roseanne (Rosé)\nEdad: 27\nPaís de origen: Nueva Zelanda\nRosé es embajadora de marcas como Puma, Tiffany & Co, Yves Saint Laurent");
        } else if (opcion === 4) {
            alert("Nombre completo: Manoban Lalisa (Lisa)\nEdad: 26\nPaís de origen: Tailandia\nLisa es embajadora de marcas como Louis Vuitton, Bvlgari");
        } else if (opcion !== 0) {
            alert("Opción no válida. Intenta nuevamente.");
        }

    } while (opcion !== 0);  

    alert("Gracias por usar el simulador de Blackpink.");
}
datosBlackpink();