let id = Symbol.for("id");
let numero = 10;
let texto = "10";
let bool = true;
let nan = NaN;

console.log(numero + nan);
//console.log("Mi simbolo es:" + id);

// JavaSript es muy flexible, permite sumar numeros con textos, o con booleanos
// pero los simbolos no tienen esta condición, si intentamos convertir un simbolo
// en string o bien en un número dará un error.
// Sin embargo lo podemos concatenar con una coma para poder ver el texto junto
// aL simbolo.

console.log("Mi simbolo es:", id);

// podemos convertir el simbolo a string usando String

console.log("Mi simbolo es: " + String(id));
