// import logo from './logo.svg';
import React from 'react';
import Home from './Home';
import './App.css';

function App() {
  const coin = process.env.PUBLIC_URL + '/images/coin.png'; // Adjust the path if your image is in a different location

  return (
    <div className="App">
      <header className="App-header">
        <div 
          className="coin" 
          style={{ backgroundImage: `url(${coin})` }}
        />
        <p>
          Welcome
        </p>
        <Home />
      </header>
    </div>
  );
}

export default App;

