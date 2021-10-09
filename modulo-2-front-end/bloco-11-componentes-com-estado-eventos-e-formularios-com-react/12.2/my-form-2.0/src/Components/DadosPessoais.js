import React, { Component } from "react";
import CidadeInput from "./CidadeInput";
import NomeInput from "./NomeInput";
import EstadoInput from "./EstadoInput";
import Input from "./Input";
import Radio from "./Radio";

class DadosPessoais extends Component {
  render() {
    const {
      nome,
      email,
      cpf,
      endereco,
      cidade,
      estado,
      moradia,
      alterarEstado,
    } = this.props;
    return (
      <fieldset>
        <NomeInput
          type="text"
          name="nome"
          value={nome}
          maxlength="40"
          alterarEstado={alterarEstado}
        >
          Nome:{" "}
        </NomeInput>
        <Input
          type="text"
          name="email"
          value={email}
          maxlength="50"
          alterarEstado={alterarEstado}
        >
          Email:{" "}
        </Input>
        <Input
          type="text"
          name="cpf"
          value={cpf}
          maxlength="11"
          alterarEstado={alterarEstado}
        >
          CPF:{" "}
        </Input>
        <Input
          type="text"
          name="endereco"
          value={endereco}
          maxlength="200"
          alterarEstado={alterarEstado}
        >
          Endereço:{" "}
        </Input>
        <CidadeInput
          type="text"
          name="cidade"
          value={cidade}
          maxlength="28"
          alterarEstado={alterarEstado}
        >
          Cidade:{" "}
        </CidadeInput>
        <EstadoInput value={estado} alterarEstado={alterarEstado}>
          Estado:{" "}
        </EstadoInput>
        <div>
          <Radio name="moradia" value={moradia} alterarEstado={alterarEstado}>
            Apartamento:{" "}
          </Radio>
          <Radio name="moradia" value={moradia} alterarEstado={alterarEstado}>
            Casa:{" "}
          </Radio>
        </div>
      </fieldset>
    );
  }
}

export default DadosPessoais;
