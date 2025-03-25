document.getElementById("output").innerHTML = "<p>Proyecto 1: Lotería</p>";

// Solicitar dos números al usuario entre 1 y 50
let num1 = parseInt(prompt("Ingresa el primer número entre 1 y 50:"));
let num2 = parseInt(prompt("Ingresa el segundo número entre 1 y 50:"));

// Verificar que los números sean válidos
if (isNaN(num1) || isNaN(num2) || num1 < 1 || num1 > 50 || num2 < 1 || num2 > 50) {
    document.getElementById("output").innerHTML += "<p>Por favor, ingresa números válidos entre 1 y 50.</p>";
} else {
    let resultado = "";

    // Recorrer los números del 1 al 50
    for (let i = 1; i <= 50; i++) {
        if (i === num1 || i === num2) {
            resultado += "¡Lotería!<br>";
        } else {
            resultado += i + "<br>";
        }
    }

    // Mostrar el resultado en la página
    document.getElementById("output").innerHTML += `<p>${resultado}</p>`;
}
