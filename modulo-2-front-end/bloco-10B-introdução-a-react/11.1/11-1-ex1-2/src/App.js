import logo from "./logo.svg";
import "./App.css";

const Task = (value) => {
  return <li>{value}</li>;
};

const compromissos = ["Estudar", "Comer", "Jogar", "Dormir"];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          {compromissos.map((comp) => {
            return Task(comp);
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
