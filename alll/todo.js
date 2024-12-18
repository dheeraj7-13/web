import React from "react";
import './App.css'
// import Greet from './Components/Greet';
//import Form from './Components/Form';
import ReactDOM from 'react-dom/client';
import Calculator from './Components/Calculator';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ToDoList from  './Components/ToDoList';
function App(){
 return(
   // <div className="container"> 
   // {/*<Greet name="Anuj " Surname="Singh"/>
   //   <Greet name="Abhay" Surname="Jain"/>
   //   <Welcome/>
   //   <ProductImg im={pimg1}></ProductImg>
   //   <ProductImg im={pimg2}/>
   //   <Counter></Counter>*/}
     
   //   <Calculator></Calculator>
   // </div>
   
   <BrowserRouter>
   <Routes>
     <Route path = "/" element={<Layout/>}></Route>
   </Routes>
   </BrowserRouter>
 );
}
export default App;
todolist.js
import React from 'react'
import { useState } from 'react';
export default function Contact() {
 const [tasks, setTasks] = useState([]);
 const [input, setInput] = useState('');
 const addTask = () => {
   if (input.trim()) {
     setTasks([...tasks, { text: input, completed: false }]);
     setInput('');
   }
 };
 const toggleTask = (index) => {
   const newTasks = tasks.map((task, i) => 
     i === index ? { ...task, completed: !task.completed } : task
   );
   setTasks(newTasks);
 };
 const deleteTask = (index) => {
   const newTasks = tasks.filter((_, i) => i !== index);
   setTasks(newTasks);
 };
 return (
   <div className="app">
     <header className="header">
       <h1>To-Do List</h1>
     </header>
     <div className="input-container">
       <input 
         type="text" 
         value={input}
         onChange={(e) => setInput(e.target.value)}
         placeholder="Add a new task"
       />
       <button onClick={addTask}>Add</button>
     </div>
     <ul className="task-list">
       {tasks.map((task, index) => (
         <li key={index} className={task.completed ? 'task completed' : 'task'}>
           <span onClick={() => toggleTask(index)}>{task.text}</span>
           <button onClick={() => deleteTask(index)}>Delete</button>
         </li>
))}
</ul>
</div>
);
}