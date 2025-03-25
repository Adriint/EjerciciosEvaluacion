
document.getElementById("output").innerHTML = "<p>Proyecto 10: Cálculo de Costo de Viaje</p>";


const tarifas = {
    coche: 0.20,
    moto: 0.10,
    autobus: 0.50
};


let vehiculo = prompt("¿Qué tipo de vehículo usas? (Coche, Moto, Autobús)").toLowerCase();


if (!tarifas[vehiculo]) {
    document.getElementById("output").innerHTML += "<p>Tipo de vehículo no válido. Inténtalo de nuevo.</p>";
} else {
    
    let kmsRecorridos = parseFloat(prompt("¿Cuántos kilómetros recorriste?"));

    
    let litrosConsumidos = parseFloat(prompt("¿Cuántos litros consumiste?"));

    
    if (isNaN(kmsRecorridos) || isNaN(litrosConsumidos) || kmsRecorridos <= 0 || litrosConsumidos < 0) {
        document.getElementById("output").innerHTML += "<p>Por favor, ingresa valores numéricos válidos.</p>";
    } else {
        
        let precioBase = tarifas[vehiculo] * kmsRecorridos;

        
        let extraLitros = litrosConsumidos > 100 ? 10 : 5;

       
        let totalPagar = precioBase + extraLitros;

        
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