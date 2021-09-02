const greetPeople = (people) => {
  const greeting = 'Hello ';
  const result = []
  for (const person in people) {
    result.push(greeting + people[person])
  }
  return result;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

const assert = require('assert')
assert.deepStrictEqual(greetPeople(parameter), result, 'O resultado está errado')