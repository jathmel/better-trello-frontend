import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';
import {getCurrentMember } from '../../adapters/Adapters'
class Profile extends Component {
  componentDidMount() {
    const id = localStorage.getItem('token')
    // this.props.currentMember
    getCurrentMember(id).then(member => {console.log(member);})
  }


  render(){
    return(
      <div>
      <h1>{this.props.currentMember.name}</h1>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    currentMember: state.currentMember
  }
}
export default connect(mapStateToProps)(Profile)
