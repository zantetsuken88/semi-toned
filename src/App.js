import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='background' >
          <div className='flames'/>
        </div>
        <svg>
          <filter id='turbulence' x='0' y='0' width='100%' height='100%'>
            <feTurbulence id='flame-filter' numOctaves='5' seed='2' baseFrequency='0.05 0.01' type='fractalNoise'/>
            <feDisplacementMap scale='20' in='SourceGraphic'/>
            <animate xlinkHref='#flame-filter' attributeName='baseFrequency' dur='60s' keyTimes='0;0.5;1'
             values='0.02 0.06;0.04 0.08;0.02 0.06' repeatCount='indefinite'/>
          </filter>
        </svg>
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
    </div>
  );
}

export default App;
