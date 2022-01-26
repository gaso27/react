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
          Estamos trabajando para INTENTAR <br></br>
          que los ojos, al revisar esta app, <br></br>
          le duelan lo menos posible
        </p>
        <a
          className="App-link"
          href="https://www.buenosaires.gob.ar/hospitalsantalucia/guardia-del-hospital-oftalmologico-santa-lucia"
          target="_blank"
          rel="noopener noreferrer"
        >
          De no ser asi, aqui tiene una guardia Oftalmológica
        </a>
      </header>
        <h1>Este es el segundo desafio</h1>
        <Content/>
    </div>
  );
}
export default App;