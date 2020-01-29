// Las clases se pueden definir como expresiones al igual que las funciones
// Ahora refrescaremos la memoria
// Esta es una función echa expresión

let miFuncion = function() {
  console.log("Hola Mundo!");
};

let otraFuncion = miFuncion;

console.log(typeof otraFuncion);

otraFuncion();

// Ahora lo veremos con una clase

let Persona = class {
  constructor() {
    this.nombre = "Felipe";
    this.edad = 29;
    this.direccion = "Mi casa";
  }

  decirNombre() {
    console.log("Hola mundo!");
  }
};

let fernando = new Persona();

console.log(typeof fernando);
console.log(fernando instanceof Persona);
