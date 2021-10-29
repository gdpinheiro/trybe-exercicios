import React, { Component } from "react";

class Button extends Component {
  render() {
    const { funcao, children } = this.props;
    return <button onClick={funcao}>{children}</button>;
  }
}

export default Button;
