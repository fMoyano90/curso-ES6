// La herencia no es mas que transferir propiedades y metodos a un hijo

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

// Ahora por ejemplo si quisieramos hacer lo mismo con un cuadrado necesitariamos
// los mismos datos para sacar su area, por lo que podemos heredar todo lo del cuadrado
// en vez de crear una clase nueva

class Cuadrado extends Rectangulo {
  constructor(alto) {
    super(alto, alto);
  }
}

let cuadrado = new Cuadrado(5);

console.log(cuadrado.getArea());
console.log(cuadrado instanceof Cuadrado);
console.log(cuadrado instanceof Rectangulo);
