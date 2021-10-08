import React, { Component } from "react";

class TipoRadio extends Component {
  render() {
    return (
      <label>
        {this.props.text}
        <input type="radio" name={this.props.name} />
      </label>
    );
  }
}

export default TipoRadio;
