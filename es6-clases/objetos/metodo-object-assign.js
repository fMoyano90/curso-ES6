function mezclar(objReceptor, objDonador) {
    Object.keys(objDonador).forEach(function (key) {
        objReceptor[key] = objDonador[key];
    });

    return objReceptor;
}

var objReceptor = {};
var objDonador = {
    // nombre: "mi-archivo.js"
    get nombre() {
        return "mi-archivo.js";
    }
};

// console.log(objDonador.nombre);
// console.log(mezclar(objReceptor, objDonador)); ES5

console.log(Object.assign(objReceptor, objDonador));

console.log(objDonador);
