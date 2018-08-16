import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './components/userComponents/Register'
import Login from './components/userComponents/Login'
import Profile from './components/userComponents/Profile'
import ProjectList from './components/projectComponents/ProjectList'
import TaskList from './components/projectComponents/TaskList'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    console.log('render app', this.props.loggedIn);
    return (
      <div className="container">
      { this.props.loggedIn ?
        <Profile />
        :
        <div><Login/>
        <Register/> </div>
      }
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

export default connect(mapStateToProps)(App);

//
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h1 className="App-title">Welcome to React</h1>
// </header>
// <p className="App-intro">
//   To get started, edit <code>src/App.js</code> and save to reload.
// </p>
