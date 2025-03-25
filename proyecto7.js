// Pedir al usuario el diámetro y el grosor de la rueda
const diametro = parseFloat(prompt("Ingrese el diámetro de la rueda en metros:"));
const grosor = parseFloat(prompt("Ingrese el grosor de la rueda en metros:"));

// Variable para almacenar el mensaje de salida
let output = "<p>Proyecto 7: Clasificación de Ruedas</p>";

// Determinar el tipo de vehículo según el diámetro
if (diametro > 1.4) {
    output += "<p>La rueda es para un vehículo grande.</p>";
} else if (diametro > 0.8) {
    output += "<p>La rueda es para un vehículo mediano.</p>";
} else {
    output += "<p>La rueda es para un vehículo pequeño.</p>";
}

// Validar si el grosor es inferior al recomendado
if ((diametro > 1.4 && grosor < 0.4) || (diametro > 0.8 && grosor < 0.25)) {
    output += "<p>El grosor para esta rueda es inferior al recomendado.</p>";
}

// Mostrar la salida en el HTML
document.getElementById("output").innerHTML = output;
