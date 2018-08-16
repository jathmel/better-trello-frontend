import React, { Component } from 'react'
import { connect } from  'react-redux'
import { getTeamMember } from '../../adapters/Adapters'
import '../../stylesheets/forms.css'


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

      <div className='col-md-6 col-md-offset-3'>
      <h2>LOGIN</h2>
        <form onSubmit={ (event)=> this.handleSubmit(event) }>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' onChange={ (event) => this.handleChange(event) } value={this.state.email }/>
            <small id="emailHelp" className="form-text text-muted">We will definitely share your email with people.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' onChange={ (event) => this.handleChange(event) } value={this.state.password }/>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
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
