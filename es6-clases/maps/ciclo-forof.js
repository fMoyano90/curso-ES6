let numeros = [100, 20, 30, 50, 200];

// Ciclo For tradicional

// for (var i = 0; i < numeros.length; i++) {
//   console.log(numeros[i]);
// }

// Ciclo For In

// for (let i in numeros) {
//   console.log(numeros[i]);
// }

// Ciclo For Of

for (let numero of numeros) {
  console.log(numero);
}

let personas = [
  { nombre: "Felipe", edad: 29 },
  { nombre: "Eva", edad: 25 },
  { nombre: "Elian", edad: 2 },
  { nombre: "Benjamin", edad: 8 },
  { nombre: "Bonnie", edad: 5 },
  { nombre: "Flor", edad: 1 }
];

for (let per of personas) {
  console.log(per.nombre, per.edad);
}

// Lo mismo con un Set

let personas2 = new Set();

personas2.add({ nombre: "Felipe", edad: 29 });
personas2.add({ nombre: "Eva", edad: 25 });
personas2.add({ nombre: "Elian", edad: 2 });
personas2.add({ nombre: "Benjamin", edad: 8 });

for (let per of personas2) {
  console.log(per.nombre, per.edad);
}

// No es necesario que sean objetos pueden ser valores planos

let personas3 = new Set();

personas3.add("Felipe");
personas3.add("Eva");
personas3.add("Elian");
personas3.add("Benjamin");

for (let per of personas3) {
  console.log(per);
}

// Lo mismo con un Map

let personas4 = new Map([
  ["nombre", "Felipe"],
  ["nombre", "Eva"]
]);

// Este ejemplo solo mostrara el ultimo registro "Eva" ya que un mapa no puede tener
// valores duplicados, por lo que el primer nombre es felipe y al encontrar el
// segundo nombre Eva, la variable toma este valor para nombre
for (let per of personas4) {
  console.log(per);
}

let persona = new Map([
  ["nombre", "Felipe"],
  ["apellido", "Moyano"]
]);

// Sin let antes de datos igual funciona, en este caso datos quedara con el valor
// del último registro, en otras palabras queda como si fuera declarado con var
for (datos of persona) {
  console.log(datos);
}

console.log(datos);
