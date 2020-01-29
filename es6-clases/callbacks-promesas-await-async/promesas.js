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

const getEmpleado = id => {
  return new Promise((resolve, reject) => {
    const empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
      reject(`No existe empleado con el id ${id}`);
    } else {
      resolve(empleadoDB);
    }
  });
};

const getSalario = empleado => {
  return new Promise((resolve, reject) => {
    const salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
      reject(`No existe salario para  ${empleado.nombre}`);
    } else {
      resolve({
        id: empleado.id,
        nombre: empleado.nombre,
        salario: salarioDB.salario
      });
    }
  });
};

getEmpleado(1)
  .then(getSalario)
  .then(console.log)
  .catch(err => console.log(err));
