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

const getEmpleado = async id => {
  const empleadoDB = empleados.find(empleado => empleado.id === id);

  if (!empleadoDB) {
    throw new Error(`No existe  un empleado con el id ${id}`);
  } else {
    return empleadoDB;
  }
};

const getSalario = async empleado => {
  const salarioDB = salarios.find(salario => salario.id === empleado.id);
  if (!salarioDB) {
    //error
    throw new Error(`No existe salario para ${empleado.nombre}`);
  } else {
    return {
      id: empleado.id,
      nombre: empleado.nombre,
      salario: salarioDB.salario
    };
  }
};

const getInformacion = async id => {
  const empleado = await getEmpleado(id);
  const resp = await getSalario(empleado);

  return `${empleado.nombre} tiene un salario de ${resp.salario}`;
};

getInformacion(1).then(console.log);
