const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1 - Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addKeyValue = (object, key, value) => {
  let newKey = key
  object[newKey] = value
}

addKeyValue(lesson2, 'turno', 'manhã')

// 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = object => {
  let keyList = Object.keys(object)
  // console.log(keyList);
}

listKeys(lesson2)

// 3 - Crie uma função para mostrar o tamanho de um objeto.

const objectSize = object => {
  let obSize = Object.keys(object).length
  // console.log(obSize);
}

objectSize(lesson2)

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listValues = object => {
  let valuesList = Object.values(object)
  // console.log(valuesList);
}

listValues(lesson2)

// 5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3.

const al1 = {}
const al2 = {}
const al3 = {}

addKeyValue(al1, 'lesson1', Object.entries(lesson1))
addKeyValue(al2, 'lesson2', Object.entries(lesson2))
addKeyValue(al3, 'lesson3', Object.entries(lesson3))

const allLessons = Object.assign({}, al1, al2, al3)

// console.log(allLessons);

// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const sumStudents = () => {
  const lessons = Object.entries(allLessons)
  let result = 0;
  for (index in lessons) {
    const nStud = lessons[index][1][1][1]
    result += nStud
  }
  // console.log(result);
}

sumStudents()

// 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

const returnValue = (object, position) => Object.values(object)[position]

// console.log(returnValue(lesson1, 0))

// 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

const checkPair = (object, key, value) => {
  // Key
  const arrayKeys = Object.keys(object)
  const chkKey = arrayKeys.includes(key)
  const index = arrayKeys.indexOf(key)
  const validKey = Object.is(arrayKeys[index], key)
  console.log(validKey);

  // Value
  const arrayValue = Object.values(object)
  const chkValue = arrayValue.includes(value)
  const validValue = Object.is(arrayValue[index], value)
  console.log(validValue);

  // Pair check
  if (validKey === true && validValue === true) {
    return true
  } else {
    return false
  }
}

console.log(checkPair(lesson1, 'materia', 'Maria Clara'))