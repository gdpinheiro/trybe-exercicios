// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;

let h1Ex1 = document.createElement("h1");

document.body.appendChild(h1Ex1);

// 2. Adicione a tag main com a classe main-content como filho da tag body ;

let mainEx2 = document.createElement("main");

document.body.appendChild(mainEx2);

mainEx2.className = "main-content";

// 3. Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let sectionEx3 = document.createElement("section");

document.getElementsByClassName("main-content")[0].appendChild(sectionEx3);

sectionEx3.className = "center-content";

// 4. Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let pEx4 = document.createElement("p");

document.getElementsByClassName("center-content")[0].appendChild(pEx4);

pEx4.innerText =
  "Culpa minim cupidatat labore nulla pariatur Lorem dolor. Anim aliqua magna aute culpa Lorem sunt. Quis occaecat commodo dolor est laboris exercitation laboris cillum est velit amet. Sint esse mollit nisi aliquip occaecat cillum. Cupidatat occaecat reprehenderit cillum sit voluptate veniam commodo.";

// 5. Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

let sectionEx5 = document.createElement("section");

document.getElementsByClassName("main-content")[0].appendChild(sectionEx5);

sectionEx5.className = "left-content";

// 6. Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

let sectionEx6 = document.createElement("section");

document.getElementsByClassName("main-content")[0].appendChild(sectionEx6);

sectionEx6.className = "right-content";

// 7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;

// 8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

// 9. Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
