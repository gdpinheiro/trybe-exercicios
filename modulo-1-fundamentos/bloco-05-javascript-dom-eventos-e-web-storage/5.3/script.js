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

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const fridays = [4, 11, 18, 25];

// Exercício 1

function createDay() {
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let lItem = document.createElement("li");

    lItem.innerText = dezDaysList[i];

    if (dezDaysList[i] === 24 || dezDaysList[i] === 31) {
      lItem.className = "day holiday";
    } else if (
      dezDaysList[i] === 4 ||
      dezDaysList[i] === 11 ||
      dezDaysList[i] === 18
    ) {
      lItem.className = "day friday";
    } else if (dezDaysList[i] === 25) {
      lItem.className = "day holiday friday";
    } else {
      lItem.className = "day";
    }

    document.querySelector("#days").appendChild(lItem);
  }
}

createDay();

// Exercício 2

function createBtn(name, id) {
  let btn = document.createElement("button");

  btn.innerText = name;

  btn.setAttribute("id", id);

  document.querySelector(".buttons-container").appendChild(btn);
}

createBtn("Feriados", "btn-holiday");

// Exercício 3

document.querySelector("#btn-holiday").addEventListener("click", clickColor);
let holidayToggle = false;

function clickColor() {
  if (holidayToggle === false) {
    let holidays = document.querySelectorAll(".holiday");

    for (let i = 0; i < holidays.length; i += 1) {
      holidays[i].style.backgroundColor = "lightgreen";
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

// Exercício 4

createBtn("Sexta-feira", "btn-friday");

// Exercício 5

document.querySelector("#btn-friday").addEventListener("click", clickText);

let fridayToggle = false;

function clickText() {
  let friday = document.querySelectorAll(".friday");

  if (fridayToggle === false) {
    for (let i = 0; i < friday.length; i += 1) {
      friday[i].innerText = "SEXTA";
    }

    fridayToggle = true;
  } else {
    for (let i = 0; i < friday.length; i += 1) {
      friday[i].innerText = fridays[i];
    }

    fridayToggle = false;
  }
}

// Exercício 6

let dayMouse = document.querySelectorAll(".day");

dayMouse.forEach((element) => {
  element.addEventListener("mouseover", dayOver);

  element.addEventListener("mouseout", dayOut);

  element.addEventListener("click", clickDayTask);
});

function dayOver(targetDay) {
  let changeSize = targetDay.target;

  changeSize.style.fontSize = 40 + "px";
}

function dayOut(targetDay) {
  let changeSize = targetDay.target;

  changeSize.style.fontSize = 20 + "px";
}

// Exercício 7

function createTask(name) {
  let task = document.createElement("span");

  task.innerText = name;

  task.setAttribute("class", "my-tasks");

  document.querySelector(".my-tasks").appendChild(task);
}

createTask("Cozinhar");

// Exercício 8

function createSub(color) {
  let sub = document.createElement("div");

  sub.className = "task";

  sub.setAttribute("style", "background-color: " + color);

  document.querySelector(".my-tasks").appendChild(sub);
}

createSub("green");

// Exercício 9

let taskMouse = document.querySelectorAll(".task");

taskMouse.forEach((element) => {
  element.addEventListener("click", clickTask);
});

let taskToggle = false;

function clickTask() {
  let task = document.querySelectorAll(".task");

  if (taskToggle === false) {
    for (let i = 0; i < task.length; i += 1) {
      task[i].className = "task selected";
    }

    taskToggle = true;
  } else {
    for (let i = 0; i < task.length; i += 1) {
      task[i].className = "task";
    }

    taskToggle = false;
  }
}

// Exercício 10

let taskList = document.getElementsByClassName("my-tasks")[0];

let selectedTask = taskList.getElementsByClassName("selected");

let dayTaskToggle = false;

function clickDayTask(targetDay) {
  let dayTask = targetDay.target;

  if (dayTaskToggle === false) {
    dayTask.style.color = selectedTask[0].style.backgroundColor;

    dayTask.classList.add("selected");

    console.log(dayTask.classList);

    dayTaskToggle = true;
  } else {
    dayTask.style.color = "rgb(119,119,119)";

    dayTask.classList.remove("selected");

    console.log(dayTask.classList);

    dayTaskToggle = false;
  }
}

// Exercício Bônus
