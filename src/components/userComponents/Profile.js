import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';
class Profile extends Component {
  componentDidMount() {
    this.props.user
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
