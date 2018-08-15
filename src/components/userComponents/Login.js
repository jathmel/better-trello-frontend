import React, { Component } from 'react'
import { connect } from  'react-redux'
import { getTeamMember } from '../../adapters/Adapters'


class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = event => {
    console.log(event.target);
    this.setState({
      [event.target.name]: event.target.value
    }, () => { console.log('state', this.state);})
  }

  handleSubmit = event => {
    console.log(this.props);
    event.preventDefault()
    getTeamMember(this.state)
      .then (data => {
        this.props.dispatch({
          type: 'LOGIN',
          payload: {
            currentMember: data
          }
      })
     })
  }

  render(){
    return(
      <div>
        <form onSubmit={ (event)=> this.handleSubmit(event) }>
          <label>email</label>
          <input type='email' name='email' onChange={ (event) => this.handleChange(event) } value={this.state.email } />
          <label>password</label>
          <input type='password' name='password' onChange={ (event) => this.handleChange(event) } value={this.state.password } />
          <input type='submit' value='Login'/>
        </form>
      </div>
    )
  }

}
// mapDispatchToProps = dispatch => {
//   return {
//
//   }
// }
export default connect()(Login);
