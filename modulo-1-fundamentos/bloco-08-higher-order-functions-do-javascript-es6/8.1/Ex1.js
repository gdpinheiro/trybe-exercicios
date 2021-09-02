const newEmployees = () => {
  const employees = {
    id1: employeObject('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: employeObject('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: employeObject('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const employeObject = (nome) => {
  let separados = nome.split(' ')
  let email = `${separados.join('_')}@trybe.com`
  const empID = {
    nomeCompleto: nome,
    email: email.toLowerCase(),
  }
  return empID
}

console.log(newEmployees())