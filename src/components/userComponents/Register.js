import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTeamMember } from '../../adapters/Adapters'
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';
import '../../stylesheets/form.css'
import { withRouter, Link } from 'react-router-dom'

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
      localStorage.setItem('token', data.id)
      this.props.dispatch({
      type: 'REGISTER',
      payload: {
        currentMember: data
      }
    })}
  )
  this.props.history.push('/profile')
  }
  render(){
    return (
      <Container>
              <section className="form-dark">
                <Row>
                  <Col md="5">
                    <Card className="card-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)', width: '28rem'}}>
                      <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
                        <div className="text-center">
                          <h3 className="green-text mb-5 mt-4 font-weight-bold"><strong>REGISTER</strong></h3>
                        </div>
                        <Input label="Your Name" group type="text" name='name' onChange={(event) => this.handleChange(event) } value={this.state.name} validate />
                        <Input label="Your Email" group type="text" name='email' onChange={(event) => this.handleChange(event) } value={this.state.email} validate />
                        <Input label="Your Password" group type="password" name='password' onChange={(event) => this.handleChange(event) } value={this.state.password} validate/>
                        <Row className="d-flex align-items-center mb-4">
                          <div className="text-center mb-3 col-md-12">
                            <Button color="success" rounded type="button" className="btn-block z-depth-1" onClick={this.handleSubmit}>Register</Button>
                          </div>
                        </Row>
                        <Col md="12">
                          <p className="font-small white-text d-flex justify-content-end">Have an account? <Link to='/login' className="green-text ml-1 font-weight-bold"> Login</Link></p>
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
export default withRouter(connect()(Register))
