function crearJugador(
  nickname,
  { hp, sp, clase } = { hp: 100, sp: 50, clase: "mago" }
) {
  // Asi se puede hacer enviando el parametro opciones,
  // el problema es que cuando otro desarrollador
  // quiera enviar las opciones no podra saber que enviar
  // almenos que habra la función y lea el codigo.

  // opciones = opciones || {};

  // let hp = opciones.hp,
  //   sp = opciones.sp,
  //   clase = opciones.clase;

  // Pero se pueden enviar los paramentros destructurados {hp, sp, clase}
  // asi sin mas tenemos el mismo resultado

  console.log(nickname, hp, sp, clase);

  // Codigo para crear jugador...
}

crearJugador("Strider", {
  hp: 100,
  sp: 80,
  clase: "Warrior"
});
