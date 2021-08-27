window.onload = function () {
  gerarEstados();
};

// Variáveis
let emailInput = document.getElementById("input-email");
let dataInput = document.getElementById("input-data");
let campos = document.getElementsByClassName("campos");
let dadosValidos = false;

// Add Event Listeners
function addListeners(targetElement, targetEvent, targetFunction) {
  let elementArray = document.querySelectorAll(targetElement);
  for (let i = 0; i < elementArray.length; i += 1) {
    document
      .querySelectorAll(targetElement)
      [i].addEventListener(targetEvent, targetFunction);
  }
}

// Gerar Estados
const listaEstados = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];
const siglaEstados = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];

function gerarEstados(estado, sigla) {
  let select = document.getElementById("select-estado");

  for (let i = 0; i < listaEstados.length; i += 1) {
    let estadoNovo = document.createElement("option");
    estadoNovo.innerText = listaEstados[i];
    estadoNovo.setAttribute("value", siglaEstados[i]);
    select.appendChild(estadoNovo);
  }
}

// Verificar Vazios
function verificarVazios(input) {
  for (let i = 0; i < campos.length; i += 1) {
    if (campos[i].value === "") {
      dadosValidos = false;
      window.alert("O campo " + campos[i].name + " é inválido");
    } else {
      dadosValidos = true;
    }
  }
}

// Verificar Email

function verificarEmail(email) {
  let emailPattern = new RegExp(/(.*)(\@)(.*)/);
  let check = emailInput.value.match(emailPattern);
  let validEmail = false;

  if (check !== null) {
    if (check[2] === true) {
      validEmail = true;
    }
  } else {
    window.alert("Email Inválido");
  }
}

//Verificar Data

function verificarData(data) {
  let datePattern = new RegExp(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
  let check = dataInput.value.match(datePattern);
  let validData = false;

  if (check !== null) {
    if (
      verificarNumero(check[1], 0, 32) === true &&
      verificarNumero(check[2], 0, 12) === true &&
      check[3] > 1
    ) {
      validData = true;
    } else {
      window.alert("Formato de Data Inválido");
    }
  } else {
    window.alert("Formato de Data Inválido");
  }
}

// Verificar Números

function verificarNumero(num, min, max) {
  if (num > min && num < max) {
    return true;
  } else {
    return false;
  }
}

// Consolidação dos Dados
function consolidacao(type) {
  let divFeedback = document.getElementById("feedback");
  if (dadosValidos === true) {
    for (let i = 0; i < campos.length; i += 1) {
      let feedback = document.createElement("p");
      feedback.innerText = campos[i].value;
      divFeedback.appendChild(feedback);
    }
  } else {
    for (let i = 0; i < campos.length; i += 1) {
      if (campos[i].value === "") {
        let feedback = document.createElement("p");
        feedback.innerText = "O campo " + campos[i].name + " é inválido.";
        divFeedback.appendChild(feedback);
      }
    }
  }
}

// Botão de Enviar
addListeners("#btn-enviar", "click", btnActions);

function btnActions(elem) {
  elem.preventDefault();
  verificarVazios();
  verificarEmail();
  verificarData();
  consolidacao();
}
