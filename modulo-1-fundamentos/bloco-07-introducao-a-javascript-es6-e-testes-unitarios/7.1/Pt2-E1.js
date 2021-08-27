// Ex 1 - Factorial

const factorial = (number) => {
  let result = number;
  if (number === 0) {
    result = 1;
  }
  while (number > 1) {
    result *= number -= 1;
  }
  return result;
};

console.log(factorial(4));
