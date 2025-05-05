import logo from './logo.svg';
import './App.css';
import CVStyled from './cvtemplate/cvtemplate';
import InputText from './components/InputText';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>

      <div> Input: <br/>
      <InputText />
      </div>

      <div> Output: <br/>
      <CVStyled />
      </div>
    </div>
  );
}

export default App;
