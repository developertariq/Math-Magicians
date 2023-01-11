import React, { Component } from 'react';
import calculate from '../logic/Calculate';

class Calculator extends Component {
  constructor(propbs) {
    super(propbs);
    this.state = {
      value: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    const buttonName = event.target.getAttribute('data-value');
    this.setState((state) => calculate(state, buttonName));
  }

  render() {
    const { value, next, operation } = this.state;
    return (
      <div className="calculator">
        <div className="display">
          {value}
          {operation}
          {next}
        </div>
        <div className="keypad">
          <button data-value="AC" className="key" type="button" onClick={this.handleClick}>AC</button>
          <button data-value="+/-" className="key" type="button" onClick={this.handleClick}>+/-</button>
          <button data-value="%" className="key" type="button" onClick={this.handleClick}>%</button>
          <button data-value="÷" className="key color-button" type="button" onClick={this.handleClick}>÷</button>
          <button data-value="7" className="key" type="button" onClick={this.handleClick}>7</button>
          <button data-value="8" className="key" type="button" onClick={this.handleClick}>8</button>
          <button data-value="9" className="key" type="button" onClick={this.handleClick}>9</button>
          <button data-value="x" className="key color-button" type="button" onClick={this.handleClick}>x</button>
          <button data-value="4" className="key" type="button" onClick={this.handleClick}>4</button>
          <button data-value="5" className="key" type="button" onClick={this.handleClick}>5</button>
          <button data-value="6" className="key" type="button" onClick={this.handleClick}>6</button>
          <button data-value="-" className="key color-button" type="button" onClick={this.handleClick}>-</button>
          <button data-value="1" className="key" type="button" onClick={this.handleClick}>1</button>
          <button data-value="2" className="key" type="button" onClick={this.handleClick}>2</button>
          <button data-value="3" className="key" type="button" onClick={this.handleClick}>3</button>
          <button data-value="+" className="key color-button" type="button" onClick={this.handleClick}>+</button>
          <button data-value="0" className="key double-size" type="button" onClick={this.handleClick}>0</button>
          <button data-value="." className="key" type="button" onClick={this.handleClick}>.</button>
          <button data-value="=" className="key color-button" type="button" onClick={this.handleClick}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
