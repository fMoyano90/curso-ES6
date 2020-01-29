// Clases en ES5

function Persona(nombre) {
  this.nombre = nombre;

  this.gritarNombre = function() {
    console.log(this.nombre.toUpperCase());
  };
}

Persona.prototype.decirNombre = function() {
  console.log(this.nombre);
};

let fernando = new Persona("nombre");

fernando.gritarNombre();
fernando.decirNombre();

console.log(fernando instanceof Persona);
console.log(fernando instanceof Object);
