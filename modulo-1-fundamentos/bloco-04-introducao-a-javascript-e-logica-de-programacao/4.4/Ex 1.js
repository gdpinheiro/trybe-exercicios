let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

// console.log("Bem vinda, " + info.personagem);

info["recorrete"] = "sim";

// for (let key in info) {
//   console.log(key);
// }

// for (let key in info) {
//   console.log(info[key]);
// }

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrete: "sim",
};

if (info.recorrete === info2.recorrete) {
  let recorrentes = "Ambos recorrentes";

  console.log(
    info.personagem +
      " e " +
      info2.personagem +
      "\n" +
      info.origem +
      " e " +
      info2.origem +
      "\n" +
      info.nota +
      " e " +
      info2.nota +
      "\n" +
      recorrentes
  );
}
