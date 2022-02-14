const readline = require('readline-sync');

function guessTheNumber() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  const userNumber = readline.questionInt('Digite um número: ');

  if (userNumber === randomNumber) {
    console.log('Parabéns, número correto!');
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`);
  }

  const playAgain = readline.question('Deseja jogar novamente? (S/N) ');

  if (playAgain === 'S' || playAgain === 's') {
    guessTheNumber();
  }
}

guessTheNumber();

module.exports = guessTheNumber;
