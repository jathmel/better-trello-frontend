import React, { Component } from 'react';
import { Container, Row, Col, Input, Button, Fa, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import { createProject } from '../../adapters/Adapters'

class ProjectForm extends Component  {

    state = {
      modal: false,
      name: '',
      description: ''
    }


  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleChange = event => {
    console.log(event.target);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    console.log(event.target);
    event.preventDefault()
    createProject(this.state.name, this.state.description)
    .then(data => console.log(data))
  }

  render() {
    return(
      <Container>
        <Row>
          <Col md="6">
            <Button color="info" onClick={this.toggle}>Create New Project</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className="cascading-modal">
              <div className="modal-header primary-color white-text">
                <h4 className="title">
                  <Fa className="fa fa-desktop" /> Project</h4>
                <button type="button" className="close" onClick={this.toggle}>
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <ModalBody className="grey-text">
                <Input size="sm" label="Project Name" icon="desktop" group type="text" name='name' onChange={ (event) => this.handleChange(event) } value={this.state.name } success="right"/>
                <Input size="sm" type="textarea" rows="2" label="Description" icon="pencil" name='description' onChange={ (event) => this.handleChange(event) } value={this.state.description }/>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
                <Button color="primary" onClick={(event) => {this.handleSubmit(event)}}>Create</Button>
              </ModalFooter>
            </Modal>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default ProjectForm;
