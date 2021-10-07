import React, { Component } from "react";

const conteudos = [
  {
    conteudo: "High Order Functions",
    bloco: 8,
    status: "Aprendido",
  },
  {
    conteudo: "Composicao de Componentes",
    bloco: 11,
    status: "Aprendendo",
  },
  {
    conteudo: "Composicao de Estados",
    bloco: 12,
    status: "Aprenderei",
  },
  {
    conteudo: "Redux",
    bloco: 16,
    status: "Aprenderei",
  },
];

class Content extends Component {
  render() {
    return conteudos.map((elem) => {
      return (
        <p>
          O conteúdo é: {elem.conteudo}
          <br />
          Status: {elem.status}
          <br />
          Bloco: {elem.bloco}
        </p>
      );
    });
  }
}

export default Content;
