function techList(array, name) {
  if (array.length != 0) {
    array.sort();
    let output = [];
    for (let i = 0; i < array.length; i += 1) {
      output.push({
        tech: array[i],
        name: name,
      });
    }
    return output.sort();
  } else {
    return "Vazio!";
  }
}

module.exports = techList;
