import React from 'react';
import './App.css';
import './AboutMe'
import AboutMe from './AboutMe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AboutMe />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
