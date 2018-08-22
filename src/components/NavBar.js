import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Container, Mask, View} from 'mdbreact';
import { BrowserRouter as Router , Link} from 'react-router-dom';
import { connect } from 'react-redux'

class NavBar extends React.Component {
      state = {
        collapse: false,
        isWideEnough: false
      };


onClick= () => {
    this.setState({
      collapse: !this.state.collapse
  });
}
handleLogOut = () => {
  this.props.localStorage.removeItem('token')
}

render(){
console.log(this.props.currentMember.name);
    return (
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
      <a class="navbar-brand" href="/profile"><strong>{this.props.currentMember.name}</strong></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Logout</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/projects">Projects</a>
                </li>
            </ul>
        </div>
    </nav>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currentMember: state.currentMember
  }
}


export default connect(mapStateToProps)(NavBar);
