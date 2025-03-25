// Mostrar el título del proyecto en el HTML
document.getElementById("output").innerHTML = "<p>Proyecto 10: Cálculo de Costo de Viaje</p>";

// Definir los precios por kilómetro según el tipo de vehículo
const tarifas = {
    coche: 0.20,
    moto: 0.10,
    autobus: 0.50
};

// Preguntar al usuario qué tipo de vehículo tiene
let vehiculo = prompt("¿Qué tipo de vehículo usas? (Coche, Moto, Autobús)").toLowerCase();

// Verificar si el vehículo es válido
if (!tarifas[vehiculo]) {
    document.getElementById("output").innerHTML += "<p>Tipo de vehículo no válido. Inténtalo de nuevo.</p>";
} else {
    // Solicitar al usuario la distancia recorrida en kilómetros
    let kmsRecorridos = parseFloat(prompt("¿Cuántos kilómetros recorriste?"));

    // Solicitar al usuario la cantidad de litros consumidos
    let litrosConsumidos = parseFloat(prompt("¿Cuántos litros consumiste?"));

    // Verificar valores numéricos válidos
    if (isNaN(kmsRecorridos) || isNaN(litrosConsumidos) || kmsRecorridos <= 0 || litrosConsumidos < 0) {
        document.getElementById("output").innerHTML += "<p>Por favor, ingresa valores numéricos válidos.</p>";
    } else {
        // Calcular el precio base según los kilómetros recorridos
        let precioBase = tarifas[vehiculo] * kmsRecorridos;

        // Calcular el cargo extra por litros consumidos
        let extraLitros = litrosConsumidos > 100 ? 10 : 5;

        // Calcular el total a pagar
        let totalPagar = precioBase + extraLitros;

        // Mostrar los resultados en la página
        document.getElementById("output").innerHTML += `
            <p>Tipo de vehículo: <strong>${vehiculo.toUpperCase()}</strong></p>
            <p>Distancia recorrida: ${kmsRecorridos} km</p>
            <p>Litros consumidos: ${litrosConsumidos} L</p>
            <p>Tarifa por kilómetro: ${tarifas[vehiculo]} MXN</p>
            <p>Cargo extra por litros: ${extraLitros} MXN</p>
            <p><strong>Total a pagar: ${totalPagar.toFixed(2)} MXN</strong></p>
        `;
    }
}