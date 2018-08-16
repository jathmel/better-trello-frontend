import React, { Component } from 'react'
import { connect } from 'react-redux'

class Profile extends Component {
  componentDidMount() {
    this.props.currentMember
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
