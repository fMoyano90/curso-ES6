const getUsuarioById = (id, callback) => {
  const usuario = {
    nombre: "Felipe",
    id
  };

  if (id === 20) {
    callback(`El usuario con el id ${id}, no existe`);
  } else {
    callback(null, usuario);
  }
};

getUsuarioById(20, (err, user) => {
  if (err) {
    return console.log(err);
  }

  console.log("Usuario base de datos", user);
});
