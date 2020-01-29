// Los simbolos al ser primitivos no se pueden usar con new, en otras palabras
// los simbolos no tienen constructor

let primerNombre = Symbol("primer nombre");
let segundoNombre = Symbol();

let persona = { [segundoNombre]: "Ignacio" };

persona[primerNombre] = "Felipe";
// Asi podemos leer
console.log(persona[primerNombre]);
console.log(persona[segundoNombre]);

console.log(primerNombre);
console.log(segundoNombre);

let simbolo1 = Symbol("simbolo");
let simbolo2 = Symbol("simbolo");

console.log(simbolo1 == simbolo2);
console.log(simbolo1 === simbolo2);
console.log(Object.is(simbolo1, simbolo2));

// La caracteristica principal de los simbolos es que siempre son diferentes
// Esto asegura que al crear una libreria por ejemplo,
console.log(typeof primerNombre);

// Un simbolo no se puede convertir en string
console.log("Mi simbolo: " + primerNombre);
console.log("pimer nombre" in persona);
