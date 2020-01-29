function creadorClase(definicionClase) {
  return new definicionClase();
}

let objeto = creadorClase(
  class {
    constructor() {
      this.nombre = undefined;
      this.edad = 30;
    }
    saludar() {
      console.log("Hola!");
    }
  }
);

objeto.saludar();

class Cuadrado {
  constructor(lado) {
    this.lado = lado;
  }
  getArea() {
    return this.lado * this.lado;
  }
}

function imprimirCuadrado(cuadrado) {
  if (!(cuadrado instanceof Cuadrado)) {
    console.error("El parametro no es un cuadrado");
    return;
  }
  console.log(cuadrado.getArea());
}

// let mesa = new Cuadrado(10);
let mesa = "123";

imprimirCuadrado(mesa);
