// Precio base del helado
const precioBase = 50;

// Pedir al usuario el topping
const topping = prompt("¿Qué topping deseas? (Oreo, KitKat, Brownie)").toLowerCase();

// Variable para almacenar el precio total
let precioTotal = precioBase;

// Variable para almacenar el mensaje de salida
let output = "<p>Proyecto 8: Precio de Helado</p>";

// Determinar el precio según el topping elegido
if (topping === "oreo") {
    precioTotal += 10;
    output += "<p>Elegiste topping de Oreo. Precio total: " + precioTotal + " MXN</p>";
} else if (topping === "kitkat") {
    precioTotal += 15;
    output += "<p>Elegiste topping de KitKat. Precio total: " + precioTotal + " MXN</p>";
} else if (topping === "brownie") {
    precioTotal += 20;
    output += "<p>Elegiste topping de Brownie. Precio total: " + precioTotal + " MXN</p>";
} else {
    output += "<p>No tenemos este topping, lo sentimos.</p>";
    output += "<p>El precio del helado sin topping es: " + precioBase + " MXN</p>";
}

// Mostrar la salida en el HTML
document.getElementById("output").innerHTML = output;
