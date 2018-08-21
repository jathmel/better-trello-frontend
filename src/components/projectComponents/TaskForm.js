import React from 'react';
import { connect } from 'react-redux'
import { Container, Row, Col, Input, Button, Fa, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import { createTask, assignTaskToProject } from '../../adapters/Adapters'

class TaskForm extends React.Component  {

    state = {
      modal: false,
      title: '',
      category: '',
      description: '',
      priority: ''

    }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleSubmit = event => {
    console.log(event.target);
    event.preventDefault()
    const {title, category, description, priority} = this.state
    createTask({title, category, description, priority})
    .then(data => {
      console.log(data)
      const task_id = data.id
      const project_id = this.props.selectedProject.id
      assignTaskToProject({task_id, project_id})
        .then(res => console.log(res))
    })
  }

  render() {
    return(
      <Container>
        <Row>
          <Col md="6">
            <Button color="info" onClick={this.toggle}>Add New Task</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className="cascading-modal">
              <div className="modal-header primary-color white-text">
                <h4 className="title">
                  <Fa className="fa fa-tasks" /> New Task</h4>
                <button type="button" className="close" onClick={this.toggle}>
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <ModalBody className="grey-text">
                <Input size="sm" label="Title" icon="tag" group type="text" name='title' onChange={ (event) => this.handleChange(event) } value={this.state.name }/>
                <Input size="sm" label="Category" icon="folder" group type="folder"  name='category' onChange={ (event) => this.handleChange(event) } value={this.state.category }/>
                <Input size="sm" label="Priority" icon="tag" group type="hourglass" name='priority' onChange={ (event) => this.handleChange(event) } value={this.state.priority }/>                <Input size="sm"  id='date' icon="calendar" group type="date" validate error="wrong" success="right"/>
                <Input size="sm" type="textarea" rows="2" label="Description" icon="pencil" name='description' onChange={ (event) => this.handleChange(event) } value={this.state.description }/>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
                <Button color="primary" onClick={(event) => {
                  this.handleSubmit(event),
                  this.toggle()
                }} >Create Task</Button>
              </ModalFooter>
            </Modal>
          </Col>
        </Row>
      </Container>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    selectedProject: state.selectedProject
  }
}

export default connect(mapStateToProps)(TaskForm);
