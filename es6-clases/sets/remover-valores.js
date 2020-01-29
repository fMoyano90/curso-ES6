let items = new Set([1, 2, 3, 4, 5]);

console.log(items.size);

// Borrar 1 item en este caso el numero 3
items.delete(3);
console.log(items.size);
console.log(items);

// Borrar todos los items
items.clear();
console.log(items.size);
console.log(items);
