import React, { Component } from 'react'
import { selectedTask } from '../../actions'
import { addTaskForTeamMember } from '../../adapters/Adapters'
import { connect } from 'react-redux'
import { Button, Card, CardBody, CardImage,CardTitle, CardText, Fa} from 'mdbreact'


const Task = props => {

const handleClick = (event) => {
  event
    console.log(props.task.team_member_project_id);
    props.selectedTask(props.task)
    addTaskForTeamMember(props.task.id, 1)
    // debugger
  }
    console.log(props.selectedTask);
    return(
      <Card>
          <CardImage src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" alt="Card image cap" top hover overlay="white-slight"/>
          <CardBody>
            <CardTitle tag="h5">{props.task.title}</CardTitle>
            <CardText>{props.task.description}</CardText>
            <Button color="light-blue" size="md" onClick={(event) => handleClick(event)}>Add Task</Button>
          </CardBody>
        </Card>
    )

}
const mapStateToProps = (state) => {
  return {
    selectedTask: state.selectedTask
  }
}

export default connect(mapStateToProps, { selectedTask })(Task)
