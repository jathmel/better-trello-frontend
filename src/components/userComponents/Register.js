import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTeamMember } from '../../adapters/Adapters'
import { userActions } from '../../actions'

class Register extends Component {
  state = {

    user: {
      name: '',
      email: '',
      password: '',
      submitted: false
    }
  }

  handleChange = event => {
    console.log(event.target);
    this.setState({
      [event.target.name]: event.target.value
    }, () => {console.log('register state', this.state)})
  }

  handleChange = event => {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({submitted: true})
    const {user} = this.state
    const { dispatch } = this.props
    if (user.name && user.email && user.password) {
      dispatch(userActions.register(user));
    }

  }
  render(){
    return(
    <div className="col-md-6 col-md-offset-3">
      <h2>Register</h2>
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <div className={'form-group' + (this.state.submitted && !this.state.user.name ? ' has-error' : '')}>
            <label htmlFor="Name">Name</label>
            <input type='text' name='name' onChange={(event) => this.handleChange(event) } value={this.state.name}/>
            { this.state.submitted && !this.state.user.name &&
              <div className="help-block">First Name is required</div>
            }
        </div>
        <div className={'form-group' + (this.state.submitted && !this.state.user.email ? ' has-error' : '')}>
          <label htmlFor="username">Email</label>
          <input type='email' name='email' onChange={(event) => this.handleChange(event) } value={this.state.email}/>
          {this.state.submitted && !this.state.user.email &&
            <div className="help-block">Username is required</div>
          }
        </div>
        <div className={'form-group' + (this.state.submitted && !this.state.user.password ? ' has-error' : '')}>
          <label htmlFor="password">Password</label>
          <input type='password' name='password' onChange={(event) => this.handleChange(event) } value={this.state.password}/>
          {this.state.submitted && !this.state.user.password &&
            <div className="help-block">Password is required</div>
          }
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Register</button>
            {this.props.registering &&
              <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
            }
          </div>
      </form>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {registering} = state.Registration
  return {
    registering
  }
}
export default connect(mapStateToProps)(Register)
