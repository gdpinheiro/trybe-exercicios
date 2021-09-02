// Ex 2 - Longest Word

let longestWord = (string) => {
  let phrase = string.split(" ").sort((a, b) => a.length - b.length);
  return phrase[phrase.length - 1];
};

console.log(
  longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")
);
