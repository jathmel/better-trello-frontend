import React, { Component } from 'react'
import {connect} from 'react-redux'
import Task from './Task'

class TaskList extends Component {
  componentDidMount() {
    this.props.tasks
  }
   render(){
     console.log( 'in tasklist', this.props);
     return(


       <div>
        <h1>Hello from task list</h1>
       </div>
     )
   }
}

const mapStateToProps = (state) =>{
  return{
    tasks: state.tasks
  }
}

export default (TaskList)
// const task = this.props.tasks.map(task = {
//   return <Task key={task.id} task={task}/>
