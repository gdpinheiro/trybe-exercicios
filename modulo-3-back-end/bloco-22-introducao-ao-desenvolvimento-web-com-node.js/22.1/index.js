const readline = require('readline-sync');

const targetScript = readline.keyInSelect(
  ['IMC', 'Sorteio'],
  'Escolha um script: '
);

switch (targetScript) {
  case 0:
    require('./imc');
    break;
  case 1:
    require('./sorteio');
    break;
  default:
    break;
}
