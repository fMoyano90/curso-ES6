var manejador = {
  id: "123",

  init: function() {
    // ES6
    document.addEventListener(
      "click",
      event => this.clickEnPagina(event.type),
      false
    );

    // ES5
    // document.addEventListener(
    //   "click",
    //   function(event) {
    //     this.clickEnPagina(event.type);
    //   }.bind(this),
    //   false
    // );
  },

  clickEnPagina: function(type) {
    console.log("Manejando " + type + " para el id: " + this.id);
  }
};
