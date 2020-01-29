let mapa = new Map([
  ["nombre", "Felipe"],
  ["edad", 29]
]);

// mapa.forEach(function(valor, llave, mapaOrigen) {
//   console.log(`Llave: ${llave}, Valor: ${valor}`);
//   console.log(mapaOrigen);
// });

// Tambien se puede hacer lo mismo con una funcion de flecha

mapa.forEach((valor, llave) => console.log(`Llave: ${llave}, Valor: ${valor}`));
