import React, { Component } from 'react';
import uuid from 'uuid';
import TodoList from './Components/todo-list';
import AddTask from './Components/add-task';
import logo from './logo.svg';
import './App.css';



class App extends Component {

  constructor(){
    super();
    this.state = {
      todolist: []
    }
  }

  componentWillMount(){
    this.setState({todolist: [
      {
        id:uuid.v4(),
        task: 'eat',
      },
      {
        id:uuid.v4(),
        task: 'sleep',
      }
      ]});
  }

  handleAddTask(task){
    // console.log(task);
    let todolist = this.state.todolist;
    todolist.push(task);
    this.setState({task:task});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <h1>My To-Do List</h1>
            <AddTask AddTask={this.handleAddTask.bind(this)}/>
          <TodoList todolist={this.state.todolist}/>
        </p>
      </div>
    );
  }
}

export default App;