let a = 60;
let b = 60;
let c = 60;

if (a < 0) {
  console.log("a não é um ângulo válido");
} else if (b < 0) {
  console.log("b não é um ângulo válido");
} else if (c < 0) {
  console.log("c não é um ângulo válido");
} else {
  console.log("Ângulos válidos");
}

if (a + b + c == 180) {
  console.log(true);
} else {
  console.log(false);
}
