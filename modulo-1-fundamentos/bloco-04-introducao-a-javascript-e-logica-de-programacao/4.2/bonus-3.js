let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let multiplicacao = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index < numbers.length - 1) {
    multiplicacao.push(numbers[index] * numbers[index + 1]);
  } else {
    multiplicacao.push(numbers[numbers.length - 1] * 2);
  }
}

console.log(multiplicacao);
