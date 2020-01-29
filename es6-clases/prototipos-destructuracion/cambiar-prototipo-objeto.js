let gato = {
  sonido() {
    console.log("Miau");
  },
  chillido() {
    console.log("MIAU!!!");
  }
};

let perro = {
  sonido() {
    console.log("Guau!");
  }
};

let angora = Object.create(gato);

console.log(Object.getPrototypeOf(angora) === gato);

angora.sonido();
angora.chillido();

//  Cambiar el prototipo de gato a perro

Object.setPrototypeOf(angora, perro);

console.log(Object.getPrototypeOf(angora) === gato);

angora.sonido();
angora.chillido();
