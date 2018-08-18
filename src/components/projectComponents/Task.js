import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Card, CardBody, CardImage,CardTitle, CardText, Fa} from 'mdbreact'


const Task = props => {

const handleClick = (event) => {
    console.log(event);
  }
    console.log(props.task);
    return(
      <Card className="card-image" style={{backgroundImage: "url('https://mdbootstrap.com/img/Photos/Horizontal/City//6-col/img%20(47).jpg')"}}>
       <div className="text-white text-center d-flex align-items-center rgbs-indigo-strong py-5 px-4">
         <div>
           <h5 className="orange-text"><Fa icon="desktop"/>Software</h5>
           <CardTitle tag="h3" className=" orange-text pt-2"><strong>{props.task.title}</strong></CardTitle>
           <p className='orange-text'>When it comes time to interview, companies are going to be looking for that additional work.
           That's when I'll ramp up and spend some evenings and even weekends creating personal projects.
           They might not be the fanciest pieces...they might not be the next Facebook, but they are something that showcases
            the work that Im capable of doing.</p>
           <Button color="deep-orange" onClick= {(event) => handleClick(event) }><Fa icon="clone left"/>Tasks</Button>
         </div>
       </div>
      </Card>
    )

}

export default (Task)
