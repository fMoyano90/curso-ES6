var saludo1 = (function(nombre) {
  return "Hola " + nombre;
})("Felipe");

console.log(saludo1);

var saludo2 = (nombre => `Hola ${nombre}`)("Felipe");

console.log(saludo2);
