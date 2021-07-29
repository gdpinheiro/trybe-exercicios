let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// // exercício 1
// for (let index = 0; index < numbers.length; index += 1) {
//   console.log(numbers[index]);
// }

// // exercício 2
// let soma = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   soma += numbers[index];
// }
// console.log(soma);

// // exercício 3
// let media = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   let soma = 0;
//   soma += numbers[index];
//   media = soma / numbers.length;
// }
// console.log(media);

// exercício 4
let media = 0;
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
  media = soma / numbers.length;
}
if (media > 20) {
  console.log("Valor maior que 20");
} else {
  console.log("Valor menor ou igual a 20");
}

console.log(media);
