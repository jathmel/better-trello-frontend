// import { combineReducers } from 'redux';
// import exampleReducer from './exampleReducer'
//import top level reducers

const initialState = {
  projects:[],
  selectedProject: {},
  tasks: [],
  selectedTask: {},
  loggedIn: false,
  currentMember: {},
  projectSelected: false,
  taskSelected: false
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
    console.log('reducer login', state.currentMember)
    return{
      ...state, loggedIn: true, currentMember: action.payload.currentMember
    }
    case 'REGISTER':
    state.currentMember
    return{
      ...state, loggedIn: true, currentMember: action.payload.currentMember
    }
    case 'LOAD_PROJECTS':
      return{
        ...state, projects: action.payload.projects
      }
      case 'SELECTED_PROJECT':
        return {
          ...state, selectedProject: action.payload.project, projectSelected: true
        }
      case 'LOAD_TASKS':
      return {
        ...state, tasks: action.payload.tasks
      }
      case 'SELECTED_TASK':
        return {
          ...state, selectedTask: action.payload.task, taskSelected: true
        }

      break;
    default:
      return state

  }
}

export default rootReducer;
