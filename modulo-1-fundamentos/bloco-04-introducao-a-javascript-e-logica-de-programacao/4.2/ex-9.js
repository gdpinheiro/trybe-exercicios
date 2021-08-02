let array = [];

for (let index = 1; index <= 25; index += 1) {
  array.push(index);
}

let resultadoDivisao = [];

for (let index = 0; index < array.length; index += 1) {
  resultadoDivisao.push(array[index] / 2);
}

console.log(array);
console.log(resultadoDivisao);
