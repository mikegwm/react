import React, { Component } from 'react';


class TodoListItem extends Component {

	deletetodolist(){
		console.log('test');
	}

  render() {

    return (
      <li className="TodoList">
      {this.props.todolist.task} <a href="#" onClick={this.deletetodolist.bind(this)}>x</a>
      </li>
    );
  }
}

export default TodoListItem;