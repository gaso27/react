import logo from './logo.svg';
import Content from './components/Content/Content';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

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
        <h1>Este es el segundo desafio</h1>
        <Content/>
    </div>
  );
}
export default App;