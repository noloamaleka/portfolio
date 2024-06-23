import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { ThemeProvider } from './components/ThemeContext';
import { Hero } from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Projects  from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
