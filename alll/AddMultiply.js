 App.js
 import logo from './logo.svg';
 import './App.css';
 import AddMultiply from './components/AddMultiply';
 function App() {
  return (
    <div className="App">
 <AddMultiply/>
    </div>
  );
 }
 export default App;
 AddMultiply.js
 import React, { Component } from 'react';
 export class AddMultiply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Num1: 0,
            Num2: 0,
            result: null,
        };
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    add = () => {
        const n1 = parseFloat(this.state.Num1);
        const n2 = parseFloat(this.state.Num2);
        const ans = n1 + n2;
        this.setState({ result: `Addition Result: ${ans}` });
    }
    multiply = () => {
        const n1 = parseFloat(this.state.Num1);
        const n2 = parseFloat(this.state.Num2);
        const ans = n1 * n2;
        this.setState({ result: `Multiplication Result: ${ans}` });
    }
    render() {
        return (
            <div>
                <h1>Add and Multiply</h1>
                <input
                    type="number"
                    name="Num1"
                    value={this.state.Num1}
                    onChange={this.handleChange}
                    placeholder="Enter first number"
                />
                <input
                    type="number"
                    name="Num2"
                    value={this.state.Num2}
                    onChange={this.handleChange}
                    placeholder="Enter second number"
                />
                <button onClick={this.add}>Add</button>
                <button onClick={this.multiply}>Multiply</button>
                {this.state.result && <h2>{this.state.result}</h2>}
            </div>
        );
    }
 }
 export default AddMultiply;