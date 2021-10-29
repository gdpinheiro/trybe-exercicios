import React, { Component } from "react";

class Input extends Component {
  render() {
    const { name, value, children, alterarEstado } = this.props;
    return (
      <label>
        {children}
        <input
          type="radio"
          name={name}
          value={value}
          onChange={alterarEstado}
        />{" "}
      </label>
    );
  }
}

export default Input;
