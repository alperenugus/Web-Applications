import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import 'bootstrap/dist/css/bootstrap.min.css';


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
