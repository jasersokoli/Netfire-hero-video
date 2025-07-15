import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import ExampleSection from './components/ExampleSection.tsx';
import Footer from './components/Footer.tsx';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ExampleSection />
      <Footer />
    </div>
  );
}

export default App;
