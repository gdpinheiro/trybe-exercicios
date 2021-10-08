import React, { Component } from "react";
import AddressInput from "./AddressInput";
import CityInput from "./CityInput";
import Estado from "./Estado";
import NameInput from "./NameInput";
import TextInput from "./TextInput";
import TipoRadio from "./TipoRadio";

class PersonalData extends Component {
  constructor() {
    super();
    this.state = {
      nome: "",
      email: "",
      cpf: "",
      endereco: "",
      cidade: "",
      estado: "",
      tipoMoradia: "",
    };
  }

  render() {
    return (
      <fieldset>
        <NameInput
          name="nome"
          text="Nome completo"
          limit="40"
          value={this.state.nome}
        />
        <TextInput
          name="email"
          text="Email"
          limit="50"
          value={this.state.email}
        />
        <TextInput name="cpf" text="CPF" limit="11" value={this.state.cpf} />
        <AddressInput
          name="endereco"
          text="Endereço"
          limit="200"
          value={this.state.endereco}
        />
        <CityInput
          name="cidade"
          text="Cidade"
          limit="28"
          value={this.state.cidade}
        />
        <Estado />
        <div>
          <TipoRadio
            name="tipoMoradia"
            text="Apartamento"
            value={this.state.tipoMoradia}
          />
          <TipoRadio
            name="tipoMoradia"
            text="Casa"
            value={this.state.tipoMoradia}
          />
        </div>
      </fieldset>
    );
  }
}

export default PersonalData;
