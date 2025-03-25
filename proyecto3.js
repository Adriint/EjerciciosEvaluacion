document.getElementById("output").innerHTML = "<p>Proyecto 3: Invertir un Arreglo</p>";

// Arreglo original
let arreglo = [5, 1, 8, 6, 3];
let arregloNuevo = [];

// Usamos un bucle for para invertir el arreglo
for (let i = arreglo.length - 1; i >= 0; i--) {
    arregloNuevo.push(arreglo[i]);
}

// Mostramos los arreglos en la página
document.getElementById("output").innerHTML += `<p>Arreglo Original: [${arreglo.join(", ")}]</p>`;
document.getElementById("output").innerHTML += `<p>Arreglo Invertido: [${arregloNuevo.join(", ")}]</p>`;
