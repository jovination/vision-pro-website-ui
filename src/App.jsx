import React from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import HeroWrap from './components/Herowrap/HeroWrap';
import FooterWrap from './components/Footerwrap/FooterWrap';

function App() {
  return (
    <div className="container">
      <NavBar />
      <HeroWrap />
      <FooterWrap />
    </div>
  );
}

export default App;
