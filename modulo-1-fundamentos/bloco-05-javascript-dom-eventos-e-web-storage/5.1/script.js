/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
        1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
        2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
        3. Crie uma função que mude a cor do quadrado vermelho para branco.
        4. Crie uma função que corrija o texto da tag <h1>.
        5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
        6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

function changeP(className, paragraph) {
  for (
    let i = 0;
    i < document.getElementsByClassName(className).length;
    i += 1
  ) {
    document.getElementsByClassName(className)[i].innerText = paragraph;
  }
}

changeP(
  "center-content",
  "Magna pariatur occaecat adipisicing laboris incididunt laboris dolor adipisicing mollit duis elit quis irure. Officia id cillum magna deserunt elit sit labore tempor cillum proident. Culpa id labore quis officia cillum ut quis mollit laboris consequat proident pariatur."
);

function changeBgColor(className, color) {
  for (
    let i = 0;
    i < document.getElementsByClassName(className).length;
    i += 1
  ) {
    document.getElementsByClassName(className)[i].style.backgroundColor = color;
  }
}

changeBgColor("main-content", "rgb(76,164,109)");
