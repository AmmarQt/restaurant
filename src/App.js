import logo from "./logo.svg";
import "./App.css";
import storedimage from "./image.png";

function App() {
  return (
    <div className="App">
      <h1 className="App-header">
        <strong>Cookies & beyond</strong>
      </h1>
      <p className="App">
        <strong>where cookies maniace gathers</strong>
      </p>
      <img className="Stored-Image" src={storedimage}></img>
    </div>
  );
}

export default App;
