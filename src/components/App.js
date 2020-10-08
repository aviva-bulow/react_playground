import React from 'react';
import './App.css';
import MyNavbar from './Navbar/Navbar';
import MainContent from './MainContent/MainContent'
import Footer from './Footer/Footer'

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
