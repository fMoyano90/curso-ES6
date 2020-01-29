// ES5
// var persona = {};

// var apellido = "Apellido";

// persona["primer nombre"] = "Fernando";
// persona[apellido] = "Herrera";

// console.log(persona["primer nombre"]);
// console.log(persona[apellido]);

// var persona = {
//   "primer nombre": "Eva"
// };

// console.log(persona["primer nombre"]);

//ES6
var apellido = "primer apellido";

var persona = {
  "primer nombre": "Fernando",
  [apellido]: "Herrera"
};

console.log(persona["primer nombre"]);
console.log(persona[apellido]);

var subFijo = " nombre";

var persona = {
  ["primer" + subFijo]: "Melissa",
  ["nombre" + subFijo]: "Karen"
};

console.log(persona["primer nombre"]);
console.log(persona["primer" + subFijo]);
