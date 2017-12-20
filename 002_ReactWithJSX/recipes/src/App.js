/*jshint esversion: 6 */

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import appData from './store/data';
import Instructions from './components/Instructions';
import IngredientList from './components/IngredientList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Delicious Recipes</h1>
        </header>
        <section className="App-intro">
          <IngredientList list={appData[0].ingredients} />
          <Instructions title="Cooking Instructions" steps={appData[0].steps} />
        </section>
      </div>
    );
  }
}

export default App;
