let frutas = ["platano", "pera", "uva"];

let [fruta1, fruta2] = frutas;

console.log(fruta1);
console.log(fruta2);

let [, , fruta3] = frutas;
console.log(fruta3);

// Puede sobreponer una variable
let otraFruta = "manzana";

[otraFruta] = frutas;

console.log(otraFruta);

// Intercambiar los valores de dos variables

let a = 1;
let b = 2;
let temp;

temp = a;
a = b;
b = temp;

console.log(a, b);

// Con la destructuración podemos cambiar asi los valores

[a, b] = [b, a];

console.log(a, b);

//

let objArr = [
  "Hola",
  { mensaje: "Hola desde objeto" },
  1,
  true,
  function() {
    return "Hola desde una función";
  }
];

let [mensaje1, mensajeObjeto, numero, booleano, funcion] = objArr;

console.log("mensaje1:" + mensaje1);
console.log("mensajeObj:" + mensajeObjeto.mensaje);
console.log("numero:" + numero);
