function decode(string) {
  let array = string.split("");
  for (let i = 0; i < array.length; i += 1) {
    switch (array[i]) {
      case "1":
        array.splice(i, 1, "a");
        break;
      case "2":
        array.splice(i, 1, "e");
        break;
      case "3":
        array.splice(i, 1, "i");
        break;
      case "4":
        array.splice(i, 1, "o");
        break;
      case "5":
        array.splice(i, 1, "u");
        break;
      default:
        break;
    }
  }
  return array.join("");
}

module.exports = decode;
