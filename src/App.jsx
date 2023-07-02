import React from 'react'
import { useEffect } from 'react';
import Aos from 'aos';

import "../src/App.css";

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/UI/Hero';
import Experience from './components/UI/Experience';
import Portfolio from './components/UI/Portfolio';
import Contact from './components/UI/Contact';
import UIDesigns from './components/UI/UIDesigns';
const App = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <Experience/>
        <Portfolio/>
        <UIDesigns/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App