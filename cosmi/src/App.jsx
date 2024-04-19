import React from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import HeroWrap from './components/Herowrap/HeroWrap';

function App() {
  return (
    <div className="container">
      <NavBar />
      <HeroWrap />
    </div>
  );
}

export default App;
