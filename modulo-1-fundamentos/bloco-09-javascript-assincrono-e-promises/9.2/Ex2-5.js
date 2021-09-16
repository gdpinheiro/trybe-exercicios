const getNumbers = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
  // Fonte: developer.mozilla.org
};

const createArray = () => {
  return new Array(10).fill(0).map((elem) => (elem = getNumbers(1, 50)));
};

const squareNumbers = (array) => array.map((elem) => elem * elem);

const sumNumbers = (array) => array.reduce((total, cur) => (total += cur));

const divideNumbers = (array) => {
  const dividedArray = [];
  dividedArray.push(array / 2);
  dividedArray.push(array / 3);
  dividedArray.push(array / 5);
  dividedArray.push(array / 10);
  return dividedArray;
};

const numbersPromise = new Promise((resolve, reject) => {
  const numbersArray = createArray();
  const squared = squareNumbers(numbersArray);
  const sumOfArray = sumNumbers(squared);
  if (sumOfArray < 8000) {
    resolve(sumOfArray);
  } else {
    reject();
  }
})
  .then((result) => divideNumbers(result))
  .then(
    (result) =>
      new Promise((resolve, reject) => {
        result.reduce((total, cur) => (total += cur));
      })
  )
  .catch(() =>
    console.log("É mais de oito mil! Essa promise deve estar quebrada!")
  );
