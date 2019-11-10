import React from 'react';
import logo from './images/harry-potter-logo.png';
import './App.css';
import Survey from './components/Survey';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          Harry Potter Survey
        <Survey />

      </header>
    </div>
  );
}

export default App;
