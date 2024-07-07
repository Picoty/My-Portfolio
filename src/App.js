import React from 'react';
import "./App.css"
import Header from './components/header';
import About from './components/About';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Experience from './components/Experience';
import Contacts from './components/contact';
import Services from './components/Services';

function App() {
  return (
    <>
     
     <Header />
     <Nav/>
     <About /> 
     <Experience/>
     <Services/>
     <Contacts/>
     <Footer/>
     
    </>
  );
}

export default App;
