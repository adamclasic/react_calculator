/* eslint-disable */ 
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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    // this.setState({
    //   total: 22,
    //   next: 1,
    //   operation: '+',
    // });
    this.setState(calculate(this.state, buttonName));
    console.log('this is calculate()');
    console.log(calculate(this.state, buttonName));
    console.log('this is buttonName');
    console.log(buttonName);
  }

  render() {
    return (
      <div className="App">
        <Display count={this.state.next || this.state.total || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
