function saludarRest(saludo, ...nombres) {
  for (i in nombres) {
    console.log(`${saludo} ${nombres[i]}`);
  }
}

function saludarSpread(saludo, ...nombres) {
  console.log(`${saludo} ${nombres}`);
}

saludarRest("Hola", "Fernando", "Maria", "Elian", "Eva");

let personas = ["Melissa", "Felipe", "Juan"];

saludarSpread("Que tal!", personas);

let partes = ["brazos", "piernas"];
let cuerpo = ["cabeza", "cuello", ...partes, "pies", "dedos"];
