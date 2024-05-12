import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Aos from 'aos';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


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
            <Route exact path="/" component={Hero} />
            <Route exact path="/about" component={Hero} />
            <Route path="/experience" component={Experience} />
            <Route path="/projects" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/uidesigns" component={UIDesigns} />

          </Switch>
        </main>
        <Footer />
      </>
    </Router>
  );
};

export default App;
