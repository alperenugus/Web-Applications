import React from 'react';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  return (
    <div className="container">

      <div className="jumbotron">
        <h1>To Do List</h1>
        <ToDoList></ToDoList>
      </div>

    </div>
  );
}

export default App;
