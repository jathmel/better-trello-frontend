import React, { Component } from 'react'
import { connect } from  'react-redux'
import { getTeamMember } from '../../adapters/Adapters'
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';
import '../../stylesheets/form.css'
import { withRouter, Link } from 'react-router-dom'




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

  handleSubmit = event => {
    console.log(this.props);
    event.preventDefault()
    getTeamMember(this.state)
      .then (data => {
        localStorage.setItem('token', data.id)
        this.props.dispatch({
          type: 'LOGIN',
          payload: {
            currentMember: data
          }
      })
      console.log("this is before redirect", this.props.history);
      this.props.history.push('/profile')
      console.log("this is after redirect", this.props.history);
    })
  }

  render(){
    console.log("props", this.props.dispatch)
    return(
      <Container>
              <section className="form-dark">
                <Row>
                  <Col md="5">
                    <Card className="card-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)', width: '28rem'}}>
                      <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
                        <div className="text-center">
                          <h3 className="green-text mb-5 mt-4 font-weight-bold"><strong>LOGIN</strong></h3>
                        </div>
                        <Input label="Your email" group type="text" name='email' onChange={ (event) => this.handleChange(event) } value={this.state.email } validate/>
                        <Input label="Your password" group type="password" name='password' onChange={ (event) => this.handleChange(event) } value={this.state.password } validate/>
                        <Row className="d-flex align-items-center mb-4">
                          <div className="text-center mb-3 col-md-12">
                            <Button color="success" rounded type="button" className="btn-block z-depth-1" onClick={(event)=>this.handleSubmit(event)}>Login</Button>
                          </div>
                        </Row>
                        <Col md="12">
                          <p className="font-small white-text d-flex justify-content-end">Dont have an account? <Link  to='/register' className="green-text ml-1 font-weight-bold"> Register</Link></p>
                        </Col>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </section>
            </Container>
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
export default withRouter(connect()(Login));
