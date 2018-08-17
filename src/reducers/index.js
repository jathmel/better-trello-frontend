// import { combineReducers } from 'redux';
// import exampleReducer from './exampleReducer'
//import top level reducers
import { combineReducers } from 'redux'
import { Authentication } from './AuthenticationReducer';
import { Registration } from './RegistrationReducer';
const initialState = {
  projects:[],
  selectedProject: {},
  tasks: [],
  selectedTasks: {},
  loggedIn: false,
  currentMember: {},
  selected: false
}
// (state = initialState, action)

const rootReducer = combineReducers({
  Authentication,
  Registration
  // switch (action.type) {
  //   case 'LOGIN':
  //   console.log('reducer login', state.currentMember)
  //   return{
  //     ...state, loggedIn: true, currentMember: action.payload.currentMember
  //   }
  //   case 'REGISTER':
  //   state.currentMember
  //   return{
  //     ...state, loggedIn: true, currentMember: action.payload.currentMember
  //   }
  //   case 'LOAD_PROJECTS':
  //     return{
  //       ...state, projects: action.payload.projects
  //     }
  //     case 'SELECTED_PROJECT':
  //       return {
  //         ...state, selectedProject: action.payload.project, selected: true
  //       }
  //     case 'LOAD_TASKS':
  //     return {
  //       ...state, tasks: action.payload.tasks
  //     }
  //
  //     break;
  //   default:
  //     return state
  //
  // }
})

export default rootReducer;
