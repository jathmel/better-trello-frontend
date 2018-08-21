import React, { Component } from 'react'
import { allProjects } from '../../actions'
import { connect } from 'react-redux'
import Project from './Project'
import TaskList from './TaskList'

class ProjectList extends Component {
  state

  componentDidMount() {
    this.props.allProjects()
  }

  render(){
    const project = this.props.projects.map(project => {
      return <Project key={project.id} project={project}/>
    })
    return(
        <div
          className='project'>{project}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    projectSelected: state.projectSelected
  }
}

export default connect(mapStateToProps, {allProjects})(ProjectList)
