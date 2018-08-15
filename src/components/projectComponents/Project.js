import React from 'react'
import { selectedProject, projectTasks } from '../../actions'
import { connect } from 'react-redux'
import '../../stylesheets/project.css'

 const Project = props => {
   console.log(props.project);
   const handleClick = (e) => {
     console.log(props.project.tasks);
     props.selectedProject(props.project)
     props.projectTasks(props.project.tasks)

   }

   return (
     <div  className='container' id='project' >
      <div className='card' onClick= {(e) => handleClick(e) }>{props.project.name}</div>
     </div>
   )
 }

 const mapStateToProps = (state, projectProps) => {
   const selected = state.selectedProject.id === projectProps.project.id
   return {
     selected,
     tasks: selectedProject.tasks,
     selected: state.selected

   }
 }

 // const mapDispatchToProps = (dispatch) => {
 //
 // }

 export default connect(mapStateToProps, { selectedProject, projectTasks }) (Project)
