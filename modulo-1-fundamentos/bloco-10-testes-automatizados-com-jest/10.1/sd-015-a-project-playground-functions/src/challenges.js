// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let removed = [];
  removed.push(array[array.length - 1]);
  removed.push(array[0]);
  return removed.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  array.sort((a, b) => a - b);
  function highestValue(value) {
    return value >= array[array.length - 1];
  }
  let filtered = array.filter(highestValue);
  return filtered.length;
}
// fonte: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      result.push('fizz');
    } else if (array[i] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  let array = string.split('');
  for (let i = 0; i < array.length; i += 1) {
    switch (array[i]) {
      case 'a':
        array.splice(i, 1, '1');
        break;
      case 'e':
        array.splice(i, 1, '2');
        break;
      case 'i':
        array.splice(i, 1, '3');
        break;
      case 'o':
        array.splice(i, 1, '4');
        break;
      case 'u':
        array.splice(i, 1, '5');
        break;
      default:
        break;
    }
  }
  return array.join('');
}

function decode(string) {
  let array = string.split('');
  for (let i = 0; i < array.length; i += 1) {
    switch (array[i]) {
      case '1':
        array.splice(i, 1, 'a');
        break;
      case '2':
        array.splice(i, 1, 'e');
        break;
      case '3':
        array.splice(i, 1, 'i');
        break;
      case '4':
        array.splice(i, 1, 'o');
        break;
      case '5':
        array.splice(i, 1, 'u');
        break;
      default:
        break;
    }
  }
  return array.join('');
}

console.log(decode('h3 th2r2!'));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
