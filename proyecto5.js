document.getElementById("output").innerHTML = "<p>Proyecto 5: Encontrar Números Pares</p>";

// Arreglo de entrada
let arreglo = [3, 4, 5, 12, 6, 1, 13];
let arregloPar = [];

// Recorremos el arreglo para encontrar los números pares
for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
        arregloPar.push(arreglo[i]);
    }
}

// Mostramos los resultados en la página
document.getElementById("output").innerHTML += `<p>Arreglo Original: [${arreglo.join(", ")}]</p>`;
document.getElementById("output").innerHTML += `<p>Arreglo de Números Pares: [${arregloPar.join(", ")}]</p>`;
