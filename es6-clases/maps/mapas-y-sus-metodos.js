// Los mapas tienen una llave y un valor

let mapa = new Map();

// Para agregarlos se manda el par de llave y valor
// Si agregamos solo la llave el valor será undefined
// Tambien podemos agregar arreglos como llave y como valor

mapa.set("nombre", "Felipe");
mapa.set("edad", 29);
// mapa.set({}, { hola: "Hola Mundo!" });

console.log(mapa);
console.log(mapa.size);

// Aca llamo al mapa por la llave "nombre" lo cual retornara "Felipe"
// lo mismo puedo hacer con la edad
// con el metodo has() puedo consultar si existe la llave dentro del Map
console.log(mapa.get("nombre")); // Felipe
console.log(mapa.get("edad")); // 29
console.log(mapa.get("apellido")); // undefined

console.log(mapa.has("nombre")); // true
console.log(mapa.has("apellido")); // true

// Para borrar una llave con su valor
mapa.delete("nombre");
console.log(mapa.has("nombre"));
console.log(mapa.get("nombre")); // undefined

// Para borrar solo el valor de una llave
mapa.set("edad");
console.log(mapa.get("edad")); // undefined
