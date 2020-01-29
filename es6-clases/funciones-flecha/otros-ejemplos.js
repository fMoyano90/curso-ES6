var restar = (a, b) => a - b;

console.log(typeof restar);
console.log(restar instanceof Function);

// var restar2 = new restar(1, 2);

function ejemplo(x, y) {
  ((a, b) => {
    console.log(arguments[0]);
  })();
}

ejemplo(10, 20);

function parametros() {
  let nombres = (arguments => {
    return `${arguments[0]} - ${arguments[1]}`;
  })(arguments);
  console.log(nombres);
}
parametros("Fernando", 31);
