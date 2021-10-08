import React, { Component } from "react";
import TextAreaInput from "./TextAreaInput";
import TextInput from "./TextInput";

class LastJob extends Component {
  render() {
    return (
      <fieldset>
        <TextAreaInput text="Resumo do currículo" limit="1000" />
        <TextAreaInput text="Cargo" limit="40" />
        <TextInput text="Descrição do cargo" limit="500" />
      </fieldset>
    );
  }
}

export default LastJob;
