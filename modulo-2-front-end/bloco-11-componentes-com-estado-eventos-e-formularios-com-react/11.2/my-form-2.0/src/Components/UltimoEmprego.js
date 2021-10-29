import React, { Component } from "react";
import Input from "./Input";
import TextArea from "./TextArea";

class UltimoEmprego extends Component {
  constructor() {
    super();
    this.state = {
      alerta: 0,
    };
  }
  cuidado = () => {
    if (this.state.alerta === 0) {
      window.alert("Preencha com cuidado esta informação.");
    }
    this.setState({ alerta: 1 });
  };
  render() {
    const { curriculo, cargo, descricaoCargo, alterarEstado } = this.props;
    return (
      <fieldset>
        <TextArea
          name="curriculo"
          value={curriculo}
          maxlength="1000"
          alterarEstado={alterarEstado}
        >
          Resumo do currículo:{" "}
        </TextArea>
        <TextArea
          name="cargo"
          value={cargo}
          maxlength="500"
          alterarEstado={alterarEstado}
          cuidado={this.cuidado}
        >
          Cargo:{" "}
        </TextArea>
        <Input
          type="text"
          name="descricaoCargo"
          value={descricaoCargo}
          maxlength="500"
          alterarEstado={alterarEstado}
        >
          Descrição do cargo:{" "}
        </Input>
      </fieldset>
    );
  }
}

export default UltimoEmprego;
