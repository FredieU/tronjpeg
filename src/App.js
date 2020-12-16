import React from 'react';
import './App.css';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/">Portraits</a>
        <a href="/">Travel</a>
        <p>Tron.jpeg</p>
        <a href="/">Commisions</a>
        <a href="/">Contact</a>
      </header>
      <Container />
    </div>
  );
}

export default App;
