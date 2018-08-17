import React, { Component } from 'react'
import { connect } from  'react-redux'
import { getTeamMember } from '../../adapters/Adapters'
import '../../stylesheets/forms.css'
import { Link } from 'react-router-dom'
import { userActions } from '../../actions'


class Login extends Component {
  state = {
    email: '',
    password: '',
    submitted: false
  }

  handleChange = event => {
    console.log(event.target);
    this.setState({
      [event.target.name]: event.target.value
    }, () => { console.log('state', this.state);})
  }

  // handleSubmit = event => {
  //   console.log(this.props);
  //   event.preventDefault()
  //   this.this.setState({submmited: true})
  //   getTeamMember(this.state)
  //     .then (data => {
  //       this.props.dispatch({
  //         type: 'LOGIN',
  //         payload: {
  //           currentMember: data
  //         }
  //     })
  //   })}

     handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        const { dispatch } = this.props;
        if (email && password) {
            dispatch(userActions.login({email, password}));
        }
    }




  render(){
    console.log("props", this.props.dispatch)
    return(

      <div className='col-md-6 col-md-offset-3'>
      <h2>LOGIN</h2>
        <form onSubmit={ (event)=> this.handleSubmit(event) }>
          <div className={'form-group' + (this.state.submitted && !this.state.email ? ' has-error' : '')}>
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' onChange={ (event) => this.handleChange(event) } value={this.state.email }/>
            <small id="emailHelp" className="form-text text-muted">We will definitely share your email with people.</small>
            {this.state.submitted && !this.state.email &&
              <div className="help-block">Username is required</div>
            }
          </div>
          <div className={'form-group' + (this.state.submitted && !this.state.password ? ' has-error' : '')}>
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' onChange={ (event) => this.handleChange(event) } value={this.state.password }/>
            {this.state.submitted && !this.state.password &&
              <div className="help-block">Password is required</div>
            }
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <div className="form-group">
              <button className="btn btn-primary">Login</button>
              {this.props.loggingIn &&
                  <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
              }
              {/*<Link to="/register" className="btn btn-link">Register</Link>*/}
          </div>
        </form>
    </div>
    )
  }

}

const mapStateToProps = (state) => {
    const { loggingIn } = state.Authentication;
    return {
        loggingIn
    };
}
// mapDispatchToProps = dispatch => {
//   return {
//
//   }
// }
export default connect(mapStateToProps)(Login);
