// Mostrar el título del proyecto en el HTML
document.getElementById("output").innerHTML = "<p>Proyecto 9: Cálculo de Pago de Curso</p>";

// Definir los costos de los programas
const precios = {
    course: { precio: 4999, duracion: 2 },
    carrera: { precio: 3999, duracion: 6 },
    master: { precio: 2999, duracion: 12 }
};

// Preguntar al usuario qué programa desea
let programa = prompt("¿Qué programa deseas tomar? (Course, Carrera, Master)").toLowerCase();

// Verificar si el programa es válido
if (!precios[programa]) {
    document.getElementById("output").innerHTML += "<p>Programa no válido. Inténtalo de nuevo.</p>";
} else {
    let precioMensual = precios[programa].precio;
    let duracion = precios[programa].duracion;

    // Preguntar si tiene beca
    let beca = prompt("¿Tienes alguna beca? (Facebook, Google, Jesua, Ninguna)").toLowerCase();
    let descuento = 0;

    // Aplicar el descuento según la beca
    if (beca === "facebook") {
        descuento = 0.2;
    } else if (beca === "google") {
        descuento = 0.15;
    } else if (beca === "jesua") {
        descuento = 0.5;
    }

    // Calcular el precio final con descuento
    let precioConDescuento = precioMensual * (1 - descuento);
    let precioTotal = precioConDescuento * duracion;

    // Mostrar el resultado en la página
    document.getElementById("output").innerHTML += `
        <p>Elegiste el programa: <strong>${programa.toUpperCase()}</strong></p>
        <p>Precio mensual sin descuento: ${precioMensual} MXN</p>
        <p>Descuento aplicado: ${descuento * 100}%</p>
        <p>Precio mensual con descuento: ${precioConDescuento.toFixed(2)} MXN</p>
        <p>Duración del curso: ${duracion} meses</p>
        <p>Total a pagar por el curso: ${precioTotal.toFixed(2)} MXN</p>
    `;
}
