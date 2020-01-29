let nombreMetodo = "gritarNombre";

class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  decirNombre() {
    console.log(this.nombre);
  }

  // Metodo computado
  // Son metodos cuyo nombre se puede recibir de una variable
  [nombreMetodo]() {
    console.log(this.nombre.toUpperCase());
  }

  // Con la palabra reservada static hacemos un metodo estatico
  // Los metodos estaticos son esos metodos que podemos llamar sin inicializar una clase
  static crear(nombre) {
    return new Persona(nombre);
  }
}

let yo = Persona.crear("Fernando");

console.log(yo);
