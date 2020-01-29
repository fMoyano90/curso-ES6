// Clases ES6

class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  decirNombre() {
    console.log(this.nombre);
  }
}

let fernando = new Persona("Fernando");

fernando.decirNombre();

console.log(fernando instanceof Persona);
console.log(fernando instanceof Object);
