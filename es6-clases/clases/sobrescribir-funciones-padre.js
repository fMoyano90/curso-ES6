class Rectangulo {
  constructor(alto, largo) {
    this.alto = alto;
    this.largo = largo;
  }

  getArea() {
    return this.alto * this.largo;
  }
}

let rectangulo = new Rectangulo(3, 2);

console.log(rectangulo.getArea());

class Cuadrado extends Rectangulo {
  constructor(alto) {
    super(alto, alto);
  }

  // Puedo sobreescribir la funcion de padre, dentro del padre queda como estaba
  // y en la clase extendida cambiara
  getArea() {
    return "Cuadrado: " + this.alto * this.alto;
  }
}

let cuadrado = new Cuadrado(5);

console.log(cuadrado.getArea());
console.log(cuadrado instanceof Cuadrado);
console.log(cuadrado instanceof Rectangulo);
