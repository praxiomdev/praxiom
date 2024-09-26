import logo from './praxiom.svg';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" className="App-logo">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor:"#4A00E0",stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#8E2DE2",stopOpacity:1}} />
            </linearGradient>
          </defs>
          <path d="M40,55 L65,35 L90,55 L115,35" stroke="url(#grad1)" strokeWidth="4" fill="none"/>
          <circle cx="40" cy="55" r="4" fill="#4A00E0"/>
          <circle cx="65" cy="35" r="4" fill="#6100E0"/>
          <circle cx="90" cy="55" r="4" fill="#7800E0"/>
          <circle cx="115" cy="35" r="4" fill="#8E2DE2"/>
          <text x="140" y="65" fontFamily="Arial, sans-serif" fontSize="50" fontWeight="bold" fill="url(#grad1)">Praxiom</text>
        </svg>
        <p>
          Welcome to Praxiom.dev
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
    </div>
  );
}

export default App;