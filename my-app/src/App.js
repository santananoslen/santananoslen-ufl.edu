import React from 'react';
import logo from './IMG_4067.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          noslen santana <br></br>my chicks hatched today :)
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          see more chicks
        </a>
      </header>
    </div>
  );
}

export default App;
