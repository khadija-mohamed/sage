import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Sage </p>
        <div nav>
        <ul>
          <ol> About Us </ol>
          <ol> Login </ol>
          <ol> Register </ol>
        </ul>
        </div>
      </header>
      <div className="main">
        <h1>Sage</h1>
        </div>      
        <footer className="footer">
        <ul>
          <ol> Follow Us </ol>
          <ol> Contact Us </ol>
        </ul>
      </footer>
    </div>
  );
}

export default App;
