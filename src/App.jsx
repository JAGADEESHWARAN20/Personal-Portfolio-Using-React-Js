import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Aos from 'aos';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TermsAndConditions from './components/UI/TermsAndConditions'; // Import the TermsAndConditions component
import PrivacyPolicy from './components/UI/PrivacyPolicy'; // Import the PrivacyPolicy component

// Other components
import Hero from './components/UI/Hero';
import Experience from './components/UI/Experience';
import Portfolio from './components/UI/Portfolio';
import Contact from './components/UI/Contact';
import UIDesigns from './components/UI/UIDesigns';

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Router>
      <>
        <Header />
        <main>
          <Switch>
            <Route path="/terms-and-conditions" component={TermsAndConditions} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route exact path="/" component={Home} />
          </Switch>
          <Hero />
          <Experience />
          <Portfolio />
          <UIDesigns />
          <Contact />
        </main>
        <Footer />
      </>
    </Router>
  );
};

const Home = () => {
  // Content for your home page
  return (
    <>
      <Hero />
      <Experience />
      <Portfolio />
      <UIDesigns />
      <Contact />
    </>
  );
};

export default App;
