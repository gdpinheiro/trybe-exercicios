import React, { Component } from "react";
import DadosPessoais from "./Components/DadosPessoais";
import UltimoEmprego from "./Components/UltimoEmprego";
import Button from "./Components/Button";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      nome: "",
      email: "",
      cpf: "",
      endereco: "",
      cidade: "",
      estado: "",
      moradia: "",
      curriculo: "",
      cargo: "",
      descricaoCargo: "",
    };
  }

  enviar = () => {
    console.log("Enviado");
  };

  limpar = () => {
    console.log("Limpo");
  };

  alterarEstado = ({ target }) => {
    const { name } = target;
    const value = target.type === "radio" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { state } = this;
    return (
      <div>
        <DadosPessoais
          nome={state.nome}
          email={state.email}
          cpf={state.cpf}
          endereco={state.endereco}
          cidade={state.cidade}
          estado={state.estado}
          moradia={state.moradia}
          alterarEstado={this.alterarEstado}
          limiteCaractere={this.limiteCaracteres}
        />
        <UltimoEmprego
          curriculo={state.curriculo}
          cargo={state.cargo}
          descricaoCargo={state.descricaoCargo}
          alterarEstado={this.alterarEstado}
          limiteCaractere={this.limiteCaracteres}
        />
        <Button funcao={this.enviar}>Enviar</Button>
        <Button funcao={this.limpar}>Limpar</Button>
      </div>
    );
  }
}

export default Form;
