function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function createDay() {
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let lItem = document.createElement("li");

    lItem.innerText = dezDaysList[i];

    if (
      dezDaysList[i] === 24 ||
      dezDaysList[i] === 25 ||
      dezDaysList[i] === 31
    ) {
      lItem.className = "day holiday";
    } else if (
      dezDaysList[i] === 4 ||
      dezDaysList[i] === 11 ||
      dezDaysList[i] === 18 ||
      dezDaysList[i] === 25
    ) {
      lItem.className = "day friday";
    } else {
      lItem.className = "day";
    }

    document.querySelector("#days").appendChild(lItem);
  }
}

createDay();

function createBtn(nome) {
  let btn = document.createElement("button");

  btn.innerText = nome;

  btn.setAttribute("id", "btn-holiday");

  document.querySelector(".buttons-container").appendChild(btn);
}

createBtn("Feriados");

document.querySelector("#btn-holiday").addEventListener("click", clickColor);
let holidayToggle = false;

function clickColor() {
  if (holidayToggle === false) {
    let holidays = document.querySelectorAll(".holiday");

    for (let i = 0; i < holidays.length; i += 1) {
      holidays[i].style.backgroundColor = "red";
    }

    holidayToggle = true;
  } else {
    let holidays = document.querySelectorAll(".holiday");

    for (let i = 0; i < holidays.length; i += 1) {
      holidays[i].style.backgroundColor = "rgb(238,238,238)";
    }

    holidayToggle = false;
  }
}
