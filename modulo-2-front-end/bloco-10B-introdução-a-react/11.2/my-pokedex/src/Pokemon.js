import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

export class Pokemon extends Component {
  render() {
    const pokemonData = this.props.data;
    const pokemonWeight = pokemonData.averageWeight;

    return (
      <div key={uuidv4()} className="pokemonCard">
        <div className="pokemonStats">
          <p className="pokemonName">Name: {pokemonData.name}</p>
          <p className="pokemonType">Type: {pokemonData.type}</p>
          <p className="pokemonWeight">
            Average Weight: {pokemonWeight.value}{" "}
            {pokemonWeight.measurementUnit}
          </p>
        </div>
        <img
          src={pokemonData.image}
          alt={`Imagem do pokemon ${pokemonData.name}`}
          className="pokemonImage"
        />
      </div>
    );
  }
}

export default Pokemon;
