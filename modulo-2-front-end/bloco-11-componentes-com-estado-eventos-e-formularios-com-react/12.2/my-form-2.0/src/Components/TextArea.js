import React, { Component } from "react";

class TextArea extends Component {
  render() {
    const { name, value, maxlength, children, alterarEstado, cuidado } =
      this.props;
    return (
      <div>
        {children}
        <textarea
          name={name}
          value={value}
          cols="30"
          rows="5"
          maxLength={maxlength}
          onChange={alterarEstado}
          onMouseEnter={cuidado}
        ></textarea>
      </div>
    );
  }
}

export default TextArea;
