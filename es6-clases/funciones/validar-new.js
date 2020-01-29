function Persona(nombre) {
  if (typeof new.target !== "undefined") {
    this.nombre = nombre;
  } else {
    throw new Error("Esta función debe ser utilizada con un new");
  }
  this.nombre = nombre;
}

var persona = new Persona("Felipe");
var noEsPersona = Persona.call(persona, "Felipe");
