import React, { Component } from 'react'
import { connect } from 'react-redux'


const Task = props => {


    console.log(props.task);
    return(
      <div>
        <h2>{props.task.title}</h2>
      </div>
    )

}

export default (Task)
