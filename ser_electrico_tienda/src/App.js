import logo from './logo.svg';
import Content from './Components/Content/Content';
import NavBar from './Components/NavBar/NavBar';
import './App.css';

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
      </header>

       <NavBar/>
       <h1>Este es el segundo desafio</h1>
       <Content/>
    </div>
  );
}
export default App;