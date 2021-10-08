import React, { Component } from "react";

class Estado extends Component {
  render() {
    const siglaEstados = [
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
        Estado:{" "}
        <select>
          {siglaEstados.map((elem) => {
            return (
              <option value={elem} key={elem}>
                {elem}{" "}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default Estado;
