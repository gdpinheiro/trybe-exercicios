function encode(string) {
  let array = string.split("");
  for (let i = 0; i < array.length; i += 1) {
    switch (array[i]) {
      case "a":
        array.splice(i, 1, "1");
        break;
      case "e":
        array.splice(i, 1, "2");
        break;
      case "i":
        array.splice(i, 1, "3");
        break;
      case "o":
        array.splice(i, 1, "4");
        break;
      case "u":
        array.splice(i, 1, "5");
        break;
      default:
        break;
    }
  }
  return array.join("");
}

module.exports = encode;
