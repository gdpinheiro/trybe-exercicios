import "./App.css";
import React, { Component } from "react";
import Form from "./Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Envie seu currículo
          <Form />
        </header>
      </div>
    );
  }
}

export default App;
