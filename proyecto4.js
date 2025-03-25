document.getElementById("output").innerHTML = "<p>Proyecto 4: Encontrar el Número Mayor</p>";

// Arreglo de entrada
let arreglo = [4, 5, 1, 8, 3];

// Inicializamos el número mayor con el primer elemento del arreglo
let numeroMayor = arreglo[0];

// Recorremos el arreglo para encontrar el mayor
for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > numeroMayor) {
        numeroMayor = arreglo[i];
    }
}

// Mostramos el arreglo y el número mayor en la página
document.getElementById("output").innerHTML += `<p>Arreglo: [${arreglo.join(", ")}]</p>`;
document.getElementById("output").innerHTML += `<p>Número Mayor: ${numeroMayor}</p>`;
