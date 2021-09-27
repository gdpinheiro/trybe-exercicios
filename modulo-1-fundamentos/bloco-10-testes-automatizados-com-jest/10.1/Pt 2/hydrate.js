// Crie uma função de boas vindas ao Bar da Trybe!
//  Segundo as regras desse bar, a cada bebida deve-se beber um copo de água para que não se tenha ressaca.
//  Crie a função hydrate que recebe uma string, e retorne a sugestão de quantos copos de água você deve beber. Exemplos:

//  String recebida:
//    "1 cerveja"
//  String retornada:
//    "1 copo de água"
//  String recebida:
//    "1 cachaça, 5 cervejas e 1 copo de vinho"
//  String retornada:
//    "7 copos de água"
//  String recebida:
//    "1 cachaça, 5 cervejas e 1 copo de vinho"
//  String retornada:
//    "7 copos de água"

// Notas

// Para simplificar, consideraremos que qualquer coisa com um número à frente é uma bebida e que a sua string sempre virá com o formato quantidade (em número) + tipo da bebida.

// O número na frente de cada bebida está no intervalo entre 1 e 9.

// Dica: pesquise por algo similar a get all integers inside a string js.

// O que será verificado:

// Retorne a sugestão de quantos copos de água deve-se beber ao receber uma string

function hydrate(numeroBebida) {
  const splitString = numeroBebida.split(" ");
  const filteredNumbers = splitString.filter((elem) => {
    const integerNumber = parseInt(elem);
    return Number.isInteger(integerNumber);
  });
  const reducedNumbers = filteredNumbers.reduce(
    (acc, cur) => parseInt(acc) + parseInt(cur),
    0
  );
  if (reducedNumbers > 1) {
    return `${reducedNumbers} copos de água`;
  }
  return `1 copo de água`;
}

module.exports = hydrate;
