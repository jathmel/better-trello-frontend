import React, { Component } from 'react'
import {connect} from 'react-redux'
import Task from './Task'


class TaskList extends Component {
  componentDidMount() {
    this.props.tasks
  }
   render(){
     console.log( 'in tasklist', this.props.selectedProject);
     const task = this.props.tasks.map(task => {
       return <Task key={task.id} task={task}/>})
     return(

       <div>
        <h1>{this.props.selectedProject.name}</h1>
        <div>{task}</div>
       </div>
     )
   }
}

const mapStateToProps = (state) =>{
  return {
    tasks: state.tasks,
    selectedProject: state.selectedProject
  }
}

export default connect(mapStateToProps)(TaskList)
// const task = this.props.tasks.map(task = {
//   return <Task key={task.id} task={task}/>
