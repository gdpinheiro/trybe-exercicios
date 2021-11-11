import fetch from "node-fetch";

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

function toUpperCase(string) {
  return string.toUpperCase();
}

function firstLetter(string) {
  return string[0];
}

function stringConcat(stringA, stringB) {
  return stringA + stringB;
}

function fetchDog() {
  const dog = fetch("https://dog.ceo/api/breeds/image/random")
    .then((data) => data.json())
    .then((data) => console.log(data));
}

fetchDog();

export { getRandomNumber, toUpperCase, firstLetter, stringConcat, fetchDog };
