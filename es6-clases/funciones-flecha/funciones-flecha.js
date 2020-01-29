var miFuncion2 = function(valor) {
  return valor;
};

let miFuncion1 = valor => valor;

// console.log(miFuncion2("Hola desde función ES5"));
// console.log(miFuncion1("Hola desde función de flecha ES6"));

var sumar2 = function(num1, num2) {
  return num1 + num2;
};

let sumar1 = (num1, num2) => num1 + num2;

// console.log(sumar2(2, 2));
// console.log(sumar1(2, 2));

var saludar2 = function() {
  return "Hola Mundo desde función normal";
};

let saludar1 = () => "Hola Mundo desde función de flecha";

// console.log(saludar2());
// console.log(saludar1());

var saludarPersona = function(nombre) {
  var salida = "Hola " + nombre;
  return salida;
};

let saludarPersona2 = nombre => {
  let salida = `Hola ${nombre}`;
  return salida;
};

// console.log(saludarPersona("Felipe"));
// console.log(saludarPersona2("Eva"));

var obtenerLibro = function(id) {
  return {
    id: id,
    nombre: "Harry Potter"
  };
};

let obtenerLibro2 = id => ({ id: id, nombre: "Harry Potter" });

// console.log(obtenerLibro(2));
// console.log(obtenerLibro2(2));
