let salarioBruto = 3000;
let salarioINSS = 0;
let valorIR = 0;

if (salarioBruto < 1556.94) {
  let INSSaliquota8 = (salarioBruto *= 0.92);
  salarioINSS = INSSaliquota8;
} else if (salarioBruto < 2594.92) {
  let INSSaliquota9 = (salarioBruto *= 0.91);
  salarioINSS = INSSaliquota9;
} else if (salarioBruto < 5189.82) {
  let INSSaliquota11 = (salarioBruto *= 0.89);
  salarioINSS = INSSaliquota11;
} else {
  let INSSaliquota570 = (salarioBruto -= 570.88);
  salarioINSS = INSSaliquota570;
}

if (salarioINSS < 1908.98) {
  let IRisento = salarioINSS;
  valorIR = IRisento;
} else if (salarioINSS < 2826.65) {
  let IRaliquota7 = (salarioINSS *= 0.075);
  valorIR = IRaliquota7 - 142.8;
} else if (salarioINSS < 3751.05) {
  let IRaliquota15 = (salarioINSS *= 0.15) - 354.8;
  valorIR = IRaliquota15;
} else if (salarioINSS < 4664.68) {
  let IRaliquota22 = (salarioINSS *= 0.225) - 636.13;
  valorIR = IRaliquota22;
} else {
  let IRaliquota27 = (salarioINSS *= 0.275) - 869.36;
  valorIR = IRaliquota27;
}

let salarioLiquido = salarioBruto - valorIR;

console.log(salarioBruto);
console.log(salarioINSS);
console.log(valorIR);
console.log(salarioLiquido);
