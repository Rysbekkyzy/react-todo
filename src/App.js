import React, { useState } from 'react'
// import './App.css';
import  ToDoList from './React-todo/Todo';

function App() {
  const  [ todos, setTodos] = useState(
  {id: 1, completed: false, title: 'learn jS'},
  {id: 2, completed: false, title: 'write js'},
  {id: 3, completed: false, title: 'repeat jS'})

  // let  todos = []

  function toggleToDo (id){
    setTodos(todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    )
  }
  return (
    <div className="App">
     <ToDoList todos={todos} onToggle={toggleToDo}/>
  
    </div>
  );
}

export default App;
