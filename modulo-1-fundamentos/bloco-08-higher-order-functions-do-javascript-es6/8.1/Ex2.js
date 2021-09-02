const contestResult = (pComb) => {
  const result = combination();
  if (checkWinner(pComb.toString(), result.toString()) === true) {
    console.log("Parabéns você ganhou");
  } else {
    console.log("Tente novamente");
  }
};

const randomNumbers = () => {
  min = Math.ceil(1);
  max = Math.floor(5);
  return Math.floor(Math.random() * (max - min + 1) + min);
  // fonte: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
};

const combination = () => {
  const result = [];
  for (let i = 0; i < 5; i += 1) {
    result.push(randomNumbers());
  }
  return result;
};

const checkWinner = (pComb, rComb) => {
  if (pComb === rComb) {
    return true;
  } else {
    return false;
  }
};

const playerGame = [1, 2, 3, 4, 5];

contestResult(playerGame);
