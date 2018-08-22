import React from 'react'
import { selectedProject, projectTasks } from '../../actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// import '../../stylesheets/project.css'
// import { FlippingCard, CardUp, Card, CardBody, CardImage,CardTitle, CardText, Fa} from 'mdbreact'

 class Project extends React.Component {
   state = {
     flipped: false
   }

   renderMember = () =>{
     return this.props.project.team_members.map(member => <li>member.name</li> )
   }

   handleFlip = () => {
     this.setState({flipped: !this.state.flipped})
   }
   // console.log(props.project);
   handleClick = (e) => {
     console.log(this.props.project.tasks);
     this.props.selectedProject(this.props.project)
     this.props.projectTasks(this.props.project.tasks)
     this.props.history.push('/tasks')
   }
   // console.log(props.project.name);
   render(){
   return (
    <div className="scene">
        <div className={this.state.flipped ? 'card is-flipped' : 'card'} onClick={this.handleFlip}>
          <div className="card__face card__face--front" >
            <div>
              {this.props.project.name}
            </div>
              <div>
                {this.props.project.description}
              </div>
              <button className='button' onClick={(e)=> this.handleClick(e)}>Tasks</button>
          </div>
          <div className="card__face card__face--back">
          <h2>Team Members</h2>
          <ul>
          {this.renderMember()}
          </ul>
          </div>
        </div>
    </div>
  )}
 }


 const mapStateToProps = (state, projectProps) => {
   const selected = state.selectedProject.id === projectProps.project.id
   return {
     selected,
     tasks: selectedProject.tasks,
     projectSelected: state.projectSelected

   }
 }


 // const mapDispatchToProps = (dispatch) => {
 //
 // }

 export default withRouter(connect(mapStateToProps, { selectedProject, projectTasks }) (Project))






 // <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
 //   <div class="flipper">
 //     <div class="front">
 //       <!-- front content -->
 //     </div>
 //     <div class="back">
 //       <!-- back content -->
 //     </div>
 //   </div>
 // </div>
