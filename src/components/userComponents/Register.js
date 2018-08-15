import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTeamMember } from '../../adapters/Adapters'

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  }

  handleChange = event => {
    console.log(event.target);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    createTeamMember(this.state)
    .then(data => {
      console.log(data);
      this.props.dispatch({
      type: 'REGISTER',
      payload: {
        currentMember: data
      }
    })}
  )

  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name:</label>
        <input type='text' name='name' onChange={(event) => this.handleChange(event) } value={this.state.name}/>
        <label>Email:</label>
        <input type='email' name='email' onChange={(event) => this.handleChange(event) } value={this.state.email}/>
        <label>Password</label>
        <input type='password' name='password' onChange={(event) => this.handleChange(event) } value={this.state.password}/>
        <input type='submit' value='Register'/>
      </form>
    )
  }
}
export default connect()(Register)
