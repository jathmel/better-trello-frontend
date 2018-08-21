import React from 'react'
import { selectedProject, projectTasks } from '../../actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import '../../stylesheets/project.css'
import { Button,FlippingCard, CardUp, Card, CardBody, CardImage,CardTitle, CardText, Fa} from 'mdbreact'

 class Project extends React.Component {
   state = {
     flipped: false
   }

   handleFlipping = () => {
     this.setState({flipped: !this.state.flipper})
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
         <Card className="card-image face front" style={{backgroundImage: "url('https://mdbootstrap.com/img/Photos/Horizontal/City//6-col/img%20(47).jpg')"}}>
          <div className="text-white text-center d-flex align-items-center rgbs-indigo-strong py-5 px-4">
            <div>
              <h5 className="orange-text"><Fa icon="desktop"/>Software</h5>
              <CardTitle tag="h3" className=" orange-text pt-2"><strong>{this.props.project.name}</strong></CardTitle>
              <p className='orange-text'>When it comes time to interview, companies are going to be looking for that additional work.
              That's when I'll ramp up and spend some evenings and even weekends creating personal projects.
              They might not be the fanciest pieces...they might not be the next Facebook, but they are something that showcases
               the work that Im capable of doing.</p>
               <a className="rotate-btn" data-card="card-1" onClick={this.handleFlipping}><Fa icon="repeat"/> Click here to rotate</a><br/>
              <Button color="deep-orange" onClick= {(e) => this.handleClick(e) }><Fa icon="clone left"/>Tasks</Button>
            </div>
          </div>
        </Card>

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
