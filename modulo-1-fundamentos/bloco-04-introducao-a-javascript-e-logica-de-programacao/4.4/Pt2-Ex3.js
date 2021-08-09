function bigger(numbers) {
  numbers.sort((b, a) => a - b);
  return numbers[numbers.length - 1];
}

console.log(bigger([2, 4, 6, 7, 10, 0, -3]));
