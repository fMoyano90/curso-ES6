let id = Symbol.for("id");
let activo = Symbol.for("activo");

let persona = {
  [id]: "123",
  [activo]: true,
  ["codigo"]: "XY123",
  nombre: "Felipe",
  apellido: "Moyano",
  edad: 29
};
// Asi retorna todas las propiedades de persona menos los simbolos
for (key in persona) {
  console.log(key, persona[key]);
}
// Asi podemos retornar todas las propiedades que son simbolos de persona
let simbolos = Object.getOwnPropertySymbols(persona);
console.log(simbolos);

// Asi podemos barrer los simbolos y tendremos sus propiedades a mano en consola
// Agregando Symbol.keyFor podemos ver los valores de las propiedades de los simbolos

for (i in simbolos) {
  console.log(simbolos[i], Symbol.keyFor(simbolos[i]));
}
