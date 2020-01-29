// ES5
// function crearPersona(nombre, apellido, edad) {
//   return {
//     nombre: nombre,
//     apellido: apellido,
//     edad: edad
//   };
// }

// var melissa = crearPersona("Melissa", "Flores", 30);

// console.log(melissa);

//ES6
let crearPersona = (nombre, apellido, edad) => ({ nombre, apellido, edad });

let melissa = crearPersona("Melissa", "Flores", 30);

console.log(melissa);
