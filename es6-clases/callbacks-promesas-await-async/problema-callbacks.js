const empleados = [
  {
    id: 1,
    nombre: "Felipe"
  },
  {
    id: 2,
    nombre: "Eva"
  },
  {
    id: 3,
    nombre: "Juan"
  }
];

const salarios = [
  {
    id: 1,
    salario: 1000
  },
  {
    id: 2,
    salario: 2000
  }
];

const getEmpleado = (id, callback) => {
  const empleadoDB = empleados.find(empleado => empleado.id === id);

  if (!empleadoDB) {
    callback(`No existe empleado con el id ${id}`);
  } else {
    callback(null, empleadoDB);
  }
};

const getSalario = (empleado, callback) => {
  const salarioDB = salarios.find(salario => salario.id === empleado.id);
  if (!salarioDB) {
    callback(`No existe salario para  ${empleado.nombre}`);
  } else {
    callback(null, {
      id: empleado.id,
      nombre: empleado.nombre,
      salario: salarioDB
    });
  }
};

// USO

getEmpleado(3, (err, empleado) => {
  if (err) {
    return console.log(err);
  }

  getSalario(empleado, (err, resp) => {
    if (err) {
      return console.log(err);
    }
    console.log(`El salario de ${resp.nombre} es de ${resp.salario.salario}`);
  });
});
