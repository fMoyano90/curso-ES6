let autoGuardado = {
  archivo: "app.js",
  cursor: {
    linea: 7,
    columna: 16
  },
  ultimoArchivo: {
    archivo: "index.html",
    cursor: {
      linea: 8,
      columna: 20
    }
  },
  otroNodo: {
    subNodo: {
      cursor: {
        liena: 11,
        columna: 11
      }
    }
  }
};

// Destucturación normal
let { cursor: cursorActivo } = autoGuardado;
console.log(cursorActivo);

// Destructuracion de objeto anidado
let {
  ultimoArchivo: { cursor }
} = autoGuardado;
console.log(cursor);

// Destructuración de objeto anidado en dos categorias
// Puede ser tan profundo como sea

let {
  otroNodo: {
    subNodo: { cursor: superNodo }
  }
} = autoGuardado;

console.log(superNodo);

// Otra forma de destructurar el objeto con multiples nodos

let otroSuperNodo = autoGuardado.otroNodo.subNodo.cursor;

console.log(otroSuperNodo);
