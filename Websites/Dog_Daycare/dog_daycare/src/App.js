import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/navbar.js';
import Hero from './components/hero.js';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Hero />
      </div>
    );
  }
}

export default App;
