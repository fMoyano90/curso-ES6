let persona1 = {
  nombre: "Felipe",
  edad: 29
};
let persona2 = {
  nombre: "Eva",
  edad: 25,
  direccion: "direccion 123",
  conduce: true,
  vehiculo: true,
  vegetariano: false,
  casado: true
};

persona1 = {
  ...persona2,
  ...persona1
};

console.log(persona1);
console.log(persona2);
