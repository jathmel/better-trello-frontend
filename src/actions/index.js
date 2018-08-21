
import { getProjects, getTeamMember } from '../adapters/Adapters'


export * from './alertActions'
export * from './userActions'
export const allProjects = () => {
    return (dispatch) => {getProjects().then(data => {
      // console.log(data);
    dispatch({
      type: 'LOAD_PROJECTS',
      payload: {
        projects: data
      }
    })
  })
  }
}

export const selectedProject = (project) => {
  return {
    type: 'SELECTED_PROJECT',
    payload: {
      project
    }
  }
}
export const projectTasks = (tasks) => {
  return{
    type: 'LOAD_TASKS',
    payload:{
      tasks: tasks
    }
  }
}

export const selectedTask = (task) => {

  return {
    type: 'SELECTED_TASK',
    payload: {
      task
    }
  }
}
export const currentMember = () => {
  return (dispatch) => {getTeamMember().then(data => {
    debugger
    dispatch({
      type: 'LOGIN',
      payload:{
        currentMember: data
      }

    })
  })
  }
}


// export const projectTasks = () =>{
//
// }
// export const allProjects = () => {
//   debugger
//   getProjects().then(data => {
//     console.log(data);
//     dispatch({
//       type: 'LOAD_PROJECTS',
//       payload: {
//         projects: data
//       }
//     })
//   })
//
//   return fetch('http://localhost:3000/api/v1/projects')
//   .then(response => response.json())
