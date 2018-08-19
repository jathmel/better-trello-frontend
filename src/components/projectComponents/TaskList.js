import React, { Component,Fragment } from 'react'
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

       <div className='tasklist'>
        {this.props.taskSelected ?
          <h3>The task has been added to your list of tasks</h3>
          :
          <Fragment>
            <h1>{this.props.selectedProject.name}</h1>
            <div className='tasks'>{task}</div>
          </Fragment>
      }
       </div>
     )
   }
}

const mapStateToProps = (state) =>{
  return {
    tasks: state.tasks,
    selectedProject: state.selectedProject,
    taskSelected: state.taskSelected
  }
}

export default connect(mapStateToProps)(TaskList)
// const task = this.props.tasks.map(task = {
//   return <Task key={task.id} task={task}/>
