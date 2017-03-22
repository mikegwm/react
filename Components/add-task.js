import React, { Component } from 'react';
import uuid from 'uuid';

class AddTask extends Component {

  constructor(){
    super();
    this.state = {
      newtodolist:{}
    }
  }

  handleSubmit(e){
    if(this.refs.task.value === ''){
      alert('Please enter task');
    } else {
      this.setState({newtodolist:{
        id: uuid.v4(),
        task: this.refs.task.value, 
      }}, function(){
        // console.log(this.state);
        this.props.AddTask(this.state.newtodolist);
      });
    }
    e.preventDefault();
  }

  render() {
    return (
      <div>
      <h3>Add Task</h3>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div><br/>
        <input type ="text" ref="task"/>
        </div>
        <input type="submit" value="Add"/>
      </form>
      <br/>
      </div>
    );
  }
}

export default AddTask;