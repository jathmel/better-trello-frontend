import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { Switch, Route, Redirect, withRouter} from 'react-router-dom'

import Register from './components/userComponents/Register'
import Login from './components/userComponents/Login'
import Profile from './components/userComponents/Profile'
import ProjectList from './components/projectComponents/ProjectList'
import ProjectForm from './components/projectComponents/ProjectForm'
import TaskList from './components/projectComponents/TaskList'
import TaskForm from './components/projectComponents/TaskForm'
import NavBar from './components/NavBar.js'


class App extends Component {
  render() {
    console.log('render app', this.props.loggedIn);
    return (
    <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path='/' render={ props => {
            return <Redirect to='/login'/>
          }}/>
          <Route path='/login' render={props =>{
            return <Login/>
          }}/>
          <Route path='/register' render={props => {
            return <Register/>
          }}/>
          <Route path='/profile' render={props => {
            return <Profile/>
          }}/>
          <Route path='/projects' render={props => {
            return (<Fragment>
            <ProjectForm/>
            <ProjectList/>
            </Fragment>)
          }}/>
          <Route path='/tasks' render={props => {
            return (<Fragment>
              <TaskForm/>
              <TaskList/>
            </Fragment>)
          }}/>
          <Route path='/logout' render={props => {
            return <Redirect to='/login'/>
          }}/>
        </Switch>
    </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log('In App', state);
  return {
    loggedIn: state.loggedIn
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateUser: (user) => dispatch(updateUser(user))
//   }
// }

export default withRouter(connect(mapStateToProps)(App));

//
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h1 className="App-title">Welcome to React</h1>
// </header>
// <p className="App-intro">
//   To get started, edit <code>src/App.js</code> and save to reload.
// </p>
