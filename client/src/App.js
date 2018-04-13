import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Navbar />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
