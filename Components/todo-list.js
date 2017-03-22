import React, { Component } from 'react';
import TodoListItem from './todo-list-item';

class TodoList extends Component {

  deleteTask(id){
    this.props.onDelete(id);
  }

  render() {

    let tlitem;
  if (this.props.todolist) {
    tlitem = this.props.todolist.map(todolist => {
      // console.log(todolist);
       return(
         <TodoListItem onDelete={this.deleteTask.bind(this)} key={todolist.task} todolist = {todolist}/>
         );
    });
  }

    return (
      <div className="TodoList">
      {tlitem}
      </div>
    );
  }
}

export default TodoList;