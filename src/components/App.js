/* eslint-disable react/prefer-stateless-function, react/destructuring-assignment,
react/no-access-state-in-setstate, no-unused-vars */
import React, { Component } from 'react';
import './App.css';
import calculate from '../logic/calculate';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
