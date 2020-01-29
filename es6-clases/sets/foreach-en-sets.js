let personas = new Set(["Fernando", "Felipe", "Eva"]);

personas.forEach(function(valor, llave, setOriginal) {
  console.log(valor, llave, setOriginal);
  console.log(setOriginal === personas);
});
