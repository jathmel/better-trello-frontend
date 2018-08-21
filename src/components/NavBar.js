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

render() {
    return (
          <div className='navbarContainerDiv'>
          <nav class="navbar navbar-expand-lg navbar-dark primary-color">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
      aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
          <li class="nav-item active">
              <a class="nav-link" href="/login">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="logout"onClick={()=> this.handleLogOut()}>Features</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="/projects">Projects</a>
          </li>
          <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
          </li>
      </ul>
  </div>
</nav>


      </div>
    );
  }
}

export default connect()(NavBar);
