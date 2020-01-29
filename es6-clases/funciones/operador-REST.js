function agregar_alumno(arr_alumnos, ...alumnos) {
  console.log(arguments);

  for (let i = 0; i < alumnos.length; i++) {
    arr_alumnos.push(alumnos[i]);
  }

  return arr_alumnos;
}

let alumnos_arr = ["Fernando"];
let alumnos_arr2 = agregar_alumno(
  alumnos_arr,
  "Maria",
  "Pedro",
  "Susana",
  "Juan",
  "Felipe"
);

console.log(alumnos_arr2);
