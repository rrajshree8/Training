import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/products" exact component={Products} />
        <Route path="/contact" exact component={Contact} />
      </div>
    </Router>
  );
};

export default App;
