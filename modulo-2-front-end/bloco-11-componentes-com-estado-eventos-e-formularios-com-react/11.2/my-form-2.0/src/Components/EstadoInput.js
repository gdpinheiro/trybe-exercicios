import React, { Component } from "react";

class EstadoInput extends Component {
  render() {
    const { estado, children, alterarEstado } = this.props;

    const estados = [
      "AC",
      "AL",
      "AP",
      "AM",
      "BA",
      "CE",
      "DF",
      "ES",
      "GO",
      "MA",
      "MT",
      "MS",
      "MG",
      "PA",
      "PB",
      "PR",
      "PE",
      "PI",
      "RJ",
      "RN",
      "RS",
      "RO",
      "RR",
      "SC",
      "SP",
      "SE",
      "TO",
    ];
    return (
      <div>
        {children}
        <select value={estado} onChange={alterarEstado}>
          {estados.map((elem) => {
            return (
              <option key={elem} value={elem}>
                {elem}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default EstadoInput;
