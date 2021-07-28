let custo = 10;
let venda = 20;

if (custo > 0 && venda > 0) {
  let custoTotal = custo * 1.2;
  let lucro = venda - custoTotal;
  console.log(lucro);
} else {
  console.log("Erro: Os valores não podem ser menores que zero");
}
