const getNombre = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Felipe");
    }, 3000);
  });
};

const saludo = async () => {
  const nombre = await getNombre();
  return `Hola ${nombre}`;
};

saludo().then(mensaje => {
  console.log(mensaje);
});

// getNombre().then(nombre => {
//   console.log(nombre);
// });
