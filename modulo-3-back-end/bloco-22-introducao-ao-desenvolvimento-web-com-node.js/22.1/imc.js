const readline = require('readline-sync');

function calcularIMC() {
  const peso = readline.questionFloat('Qual seu peso?');
  const altura = readline.question('Qual sua altura?');

  const imc = parseFloat((peso / (altura ^ 2)).toFixed(2));

  let situacao = '';

  if (imc < 18.5) {
    situacao = 'Abaixo do peso (magreza)';
  } else if (imc >= 18.5 && imc <= 24.9) {
    situacao = 'Peso normal';
  } else if (imc >= 25 && imc <= 29.9) {
    situacao = 'Acima do peso (sobrepeso)';
  } else if (imc >= 30 && imc <= 34.9) {
    situacao = 'Obesidade grau I';
  } else if (imc >= 35 && imc <= 39.9) {
    situacao = 'Obesidade grau II';
  } else {
    situacao = 'Obesidade graus III e IV';
  }

  console.log(`IMC: ${imc}. Situação: ${situacao}`);
}

calcularIMC();

module.exports = calcularIMC;
