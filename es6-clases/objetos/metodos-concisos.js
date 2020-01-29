// ES5
// var persona = {
//   nombre: "Felipe",

//   getNombre: function() {
//     console.log(this.nombre);
//   }
// };

// persona.getNombre();

// ES6
let persona = {
  nombre: "Felipe",

  getNombre() {
    console.log(this.nombre);
  }
};

persona.getNombre();
