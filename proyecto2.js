document.getElementById("output").innerHTML = "<p>Proyecto 2: FizzBuzz</p>";

let resultado = "";

// Recorremos los números del 1 al 100
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        resultado += "FizzBuzz<br>";
    } else if (i % 3 === 0) {
        resultado += "Fizz<br>";
    } else if (i % 5 === 0) {
        resultado += "Buzz<br>";
    } else {
        resultado += i + "<br>";
    }
}

// Mostramos el resultado en la página
document.getElementById("output").innerHTML += `<p>${resultado}</p>`;
