// Desafio 10
function techList(array, name) {
  if (array.length != 0) {
    array.sort();
    let output = [];
    for (let i = 0; i < array.length; i += 1) {
      output.push({
        tech: array[i],
        name: name,
      });
    }
    return output.sort();
  } else {
    return 'Vazio!';
  }
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
