import React, { Component } from "react";

class TextAreaInput extends Component {
  render() {
    const { name, text } = this.props;
    return (
      <div>
        {text}: <textarea name={name} cols="30" rows="5"></textarea>
      </div>
    );
  }
}

export default TextAreaInput;
