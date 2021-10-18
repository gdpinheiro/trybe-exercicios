import React, { Component } from "react";
import Pokemon from "./Pokemon";
import data from "./data";

export class Pokedex extends Component {
  render() {
    return data.map((elem) => <Pokemon data={elem} />);
  }
}

export default Pokedex;
