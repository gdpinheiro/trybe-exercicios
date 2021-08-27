window.onload = function () {
  gerarEstados();
};

// Variáveis
let emailInput = document.getElementById("input-email");
let dataInput = document.getElementById("input-data");
let campos = document.getElementsByClassName("campos");
let form = document.querySelector("form");
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

//Verificar Dados
document.getElementById("input-data").DatePickerX.init();
validation.init();

// Consolidação dos Dados
let modal = document.querySelector(".modal");
addListeners("#modal-close", "click", closeModal);

function openModal() {
  if (validation.isValid() === true) {
    let corpoModal = document.querySelector(".modal-card-body");
    for (let i = 0; i < campos.length; i += 1) {
      let feedback = document.createElement("p");
      feedback.innerText = campos[i].name + ": " + campos[i].value;
      corpoModal.appendChild(feedback);
    }
    modal.classList.add("is-active");
    modal.classList.add("is-clipped");
  }
}

function closeModal() {
  modal.classList.remove("is-active");
  modal.classList.remove("is-clipped");
}

// Botão de Enviar
addListeners("#btn-enviar", "click", btnActions);

function btnActions(elem) {
  elem.preventDefault();
  openModal();
}

// Botão de Limpar
addListeners("#btn-limpar", "click", cleanFields);

function cleanFields(elem) {
  elem.preventDefault();
  for (let i = 0; i < campos.length; i += 1) {
    campos[i].value = "";
  }
}
