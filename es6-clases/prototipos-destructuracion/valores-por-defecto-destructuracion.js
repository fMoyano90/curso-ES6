let frutas = ["platano", "pera"];

let [fruta1, fruta2 = "manzana"] = frutas;

console.log(fruta1);
console.log(fruta2);

let opciones = {
  nombre: "Felipe",
  apellido: "Gomez"
};

let { nombre, apellido = "Moyano" } = opciones;

console.log(nombre, apellido);
