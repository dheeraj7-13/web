App.js
 import React from 
'react';
 import logo from './logo.svg';
 import './App.css';
 import Greet from './components/Greet';
 import Message from './components/Message';
 import Counter from './components/Counter';
 import { Form } from './components/Form';
 import Calculator from './components/Calculator';
 function App() {
  return (
    <div className="App">
      {/* <Message/> */}
      {/* <Counter/> */}
       <Calculator/>
     
    </div>
  );
 }
 export default App;
 App.css
 
  
.App {
  align-items: center;
  text-align: center;
  background-color: greenyellow;
 
  color: brown;
 }
 .App-logo {
  height: 40vmin;
  pointer-events: none;
 }
 @media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
 }
 .App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
 }
 .App-link {
  color: #61dafb;
 }
 @keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
 }
Calculator.js
 import React, { useState } from 
'react';
 function Calculator() {
    const [val, setVal] = useState("");
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1 className='display-5 fw-bolder text-primary'>Simple Calculator</h1>
                </div>
            </div>
            <div>
                <input type='text' value={val} readOnly />
            </div>
            <div>
                <button className='button' value="1" onClick={(e) => setVal(val + 
e.target.value)}>1</button>
                <button className='button' value="2" onClick={(e) => setVal(val + 
e.target.value)}>2</button>
                <button className='button' value="3" onClick={(e) => setVal(val + 
e.target.value)}>3</button>
                <button className='button' value="+" onClick={(e) => setVal(val + 
e.target.value)}>+</button>
            </div>
            <div>
                <button className='button' value="4" onClick={(e) => setVal(val + 
e.target.value)}>4</button>
                <button className='button' value="5" onClick={(e) => setVal(val + 
e.target.value)}>5</button>
                <button className='button' value="6" onClick={(e) => setVal(val + 
e.target.value)}>6</button>
                <button className='button' value="-" onClick={(e) => setVal(val + 
e.target.value)}>-</button>
            </div>
            <div>
                <button className='button' value="7" onClick={(e) => setVal(val + 
e.target.value)}>7</button>
                <button className='button' value="8" onClick={(e) => setVal(val + 
e.target.value)}>8</button>
                <button className='button' value="9" onClick={(e) => setVal(val + 
e.target.value)}>9</button>
                <button className='button' value="*" onClick={(e) => setVal(val + 
e.target.value)}>*</button>
            </div>
            <div>
                <button className='button' onClick={() => setVal("")}>C</button>
                <button className='button' value="0" onClick={(e) => setVal(val + 
e.target.value)}>0</button>
                <button className='button' onClick={() => {
                    try {
                        const result = new Function('return ' + val)();
                        setVal(result.toString());
                    } catch (error) {
                        setVal("Error");
                    }
                }}>=</button>
                <button className='button' value="/" onClick={(e) => setVal(val + 
e.target.value)}>/</button>
            </div>
        </div>
    );
 }
 export default Calculator;
