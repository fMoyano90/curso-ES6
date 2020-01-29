// let items = new Set();

// // Los elementos repetidos se omiten

// items.add(10);
// items.add(11);
// items.add(8);
// items.add(7);
// items.add(7);
// items.add(7);
// items.add("7");

// console.log(items.size);

// Otra forma de agregar
let items = new Set([2, 3, 4, 5, 6, 6, 6, 7]);
console.log(items);

// como saber si el elemento 7 existe
console.log(items.has(7));
