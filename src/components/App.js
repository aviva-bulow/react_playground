import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import MainContent from './MainContent/MainContent'
import Footer from './Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
