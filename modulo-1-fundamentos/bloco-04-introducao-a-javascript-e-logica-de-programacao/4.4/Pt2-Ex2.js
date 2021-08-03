function bigger(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[numbers.length - 1];
}

console.log(bigger([2, 3, 6, 7, 10, 1]));
