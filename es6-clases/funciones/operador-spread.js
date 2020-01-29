var numeros = [1, 5, 10, 20, 100, 243];

// ES5 var max = Math.max.apply(Math, numeros);
// Operador Spread ES6

var max = Math.max(...numeros);

console.log(max);
