/* eslint-disable react/prefer-stateless-function, react/destructuring-assignment,
react/no-access-state-in-setstate, no-unused-vars */
import React, { Component } from 'react';
import './App.css';
import calculate from '../logic/calculate';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState(calculate(this.state, buttonName));
  }

  render() {
    return (
      <div className="App">
        <Display count={this.state.next || this.state.total || '0'} />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
