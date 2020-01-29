var ajustes = {
  nombre: "Felipe Moyano",
  email: "f.moyano90@gmail.com",
  facebook: "felipe.moyano.90",
  google: "felipe.moy.123",
  premium: true
};

// ES5
// var nombre = ajustes.nombre,
//   email = ajustes.email,
//   facebook = ajustes.facebook;
//   google = ajustes.google;
//   premium = ajustes.premium;

//ES6
// Destructurado por el nombre de la propiedad
// No funciona si no se inicializa ... = ajustes;
// Puedo cambiar el nombre de la variable al destructurar ej: premium: dePago
// Aunque altere el orden de las propiedades funciona igual ya que busca el nombre
// Se puede inicializar variables nuevas desde acá ej: twitter
// Se puede asignar un valor por defecto a Twitter
// Si Twitter se agrega al objeto tomara ese valor por sobre el que esta por defecto
let {
  nombre,
  email,
  facebook,
  google,
  premium: dePago,
  twitter = "felipemoyano90"
} = ajustes;

console.log(nombre, email, facebook, google, dePago, twitter);
