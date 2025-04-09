import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
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
    Aos.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20 md:pt-24">
          <div className="container mx-auto px-4">
            <Switch>
              <Route exact path="/" component={Hero} />
              <Route exact path="/about" component={Hero} />
              <Route path="/experience" component={Experience} />
              <Route path="/projects" component={Portfolio} />
              <Route path="/contact" component={Contact} />
              <Route path="/uidesigns" component={UIDesigns} />
              {/* Add a catch-all route */}
              <Route path="*" component={Hero} />
            </Switch>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;