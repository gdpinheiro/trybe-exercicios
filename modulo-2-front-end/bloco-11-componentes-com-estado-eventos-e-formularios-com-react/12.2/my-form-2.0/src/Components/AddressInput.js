import React, { Component } from "react";

class AddressInput extends Component {
  render() {
    const { name, text } = this.props;
    return (
      <div>
        {text}: <input type="text" name={name} />
      </div>
    );
  }
}

export default AddressInput;
