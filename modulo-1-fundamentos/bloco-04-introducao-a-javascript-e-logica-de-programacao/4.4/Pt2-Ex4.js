function characters(array) {
  return array.reduce((a, b) => (a.length < b.length ? b : a));
}

console.log(
  characters(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
);
