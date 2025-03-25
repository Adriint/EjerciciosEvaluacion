// Definir la lista de libros
const library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true,
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true,
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false,
    }
];

// Filtrar libros con estado de lectura "true"
const booksRead = library.filter(book => book.readingStatus);

// Crear una salida con los libros leídos
let output = "<p>Proyecto 6: Libros Leídos</p>";
booksRead.forEach(book => {
    output += `<p><strong>${book.title}</strong> - ${book.author}</p>`;
});

// Mostrar la salida en el HTML
document.getElementById("output").innerHTML = output;
