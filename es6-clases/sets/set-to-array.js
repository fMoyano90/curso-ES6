let numeros = [1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 1, 2, 3, 4, 5, 8];

let setNumeros = new Set(numeros);

console.log(setNumeros);

// Con el operados SPREAD convertimos un Set en un Array
// let arrayNumeros = [...setNumeros];

// Un ejemplo para su uso es eliminar los duplicados
let eliminaDuplicados = items => [...new Set(items)];

let arrayNumeros = eliminaDuplicados(numeros);

console.log(arrayNumeros);
