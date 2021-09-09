const assert = require("assert");

const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra A maiúscula ou minúscula.

function containsA() {
  let result = names.reduce((acc, cur, index) => {
    // console.log(acc);
    // console.log(cur);
    // console.log(index);
  }, 0);
  // console.log(result);
  return result;
}

assert.deepStrictEqual(containsA(), 20);
