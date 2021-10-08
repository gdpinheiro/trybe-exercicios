import React, { Component } from "react";

class TextInput extends Component {
  inputLengthValidation = () => {
    if (this.props.limit) {
    }
  };

  render() {
    const { name, text, value } = this.props;
    return (
      <div>
        {text}:{" "}
        <input
          type="text"
          name={name}
          value={value}
          onChange={this.inputLengthValidation}
        />
      </div>
    );
  }
}

export default TextInput;
