function tareaAsincrona() {
  let promesa = new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log("Proceso Asincrono Terminado!");
    }, 3000);
  });

  return promesa;
}

tareaAsincrona().then(
  function() {
    console.log("Todo OK!");
  },
  function() {
    console.log("Todo MAL!");
  }
);

console.log("Código secuencial");

// function resolve() {
//   console.log("Todo OK!");
// }
// function reject() {
//   console.log("Todo MAL");
// }
