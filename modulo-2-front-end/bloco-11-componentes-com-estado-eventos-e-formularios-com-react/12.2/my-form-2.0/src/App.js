import "./App.css";
import PersonalData from "./Components/PersonalData";
import LastJob from "./Components/LastJob";
import Button from "./Components/Button";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PersonalData />
          <LastJob />
          <div>
            <Button>Enviar</Button>
            <Button>Limpar</Button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
