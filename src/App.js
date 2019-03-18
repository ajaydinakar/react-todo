import React, { Component } from 'react'
import TodoItems from './TodoItems';
import TodoList from './components/todolist/TodoList';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/Nav/NavBar';

export class App extends Component {
  render() {
    return (
      <div className="background">
        <NavBar/>>
<TodoList/>
      </div>
    )
  }
}

export default App
