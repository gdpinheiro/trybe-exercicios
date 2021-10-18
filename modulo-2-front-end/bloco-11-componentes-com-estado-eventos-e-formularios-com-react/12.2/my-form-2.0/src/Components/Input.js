import React, { Component } from "react";

class Input extends Component {
  render() {
    const { type, name, value, maxlength, children, alterarEstado } =
      this.props;
    return (
      <div>
        {children}
        <input
          type={type}
          name={name}
          value={value}
          maxLength={maxlength}
          onChange={alterarEstado}
        />
      </div>
    );
  }
}

export default Input;
