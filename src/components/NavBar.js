import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';

class NavBar extends Component {
  render(){
    return(
      // <section className='mt-5'>
      <Navbar className="mb-1 navbar navbar-expand-lg navbar-dark purple lighten-1">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-5" aria-controls="navbarSupportedContent-5" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent-5">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link waves-effect waves-light" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link waves-effect waves-light" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link waves-effect waves-light" href="#">Pricing</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown
                            </a>
                            <div className="dropdown-menu dropdown-purple" aria-labelledby="navbarDropdownMenuLink-5">
                                <a className="dropdown-item waves-effect waves-light" href="#">Action</a>
                                <a className="dropdown-item waves-effect waves-light" href="#">Another action</a>
                                <a className="dropdown-item waves-effect waves-light" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                    <Dropdown>
                    <ul className="navbar-nav ml-auto nav-flex-icons">
                        <li className="nav-item">
                            <a className="nav-link waves-effect waves-light">1 <i className="fa fa-envelope"></i></a>
                        </li>
                        <li className="nav-item avatar dropdown">
                            <a className="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" className="img-fluid rounded-circle z-depth-0" alt="avatar image"/></a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-purple" aria-labelledby="navbarDropdownMenuLink-5">
                                <a className="dropdown-item waves-effect waves-light" href="#">Action</a>
                                <a className="dropdown-item waves-effect waves-light" href="#">Another action</a>
                                <a className="dropdown-item waves-effect waves-light" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                    </Dropdown>
                </div>
            </Navbar>
        // </section>
    )
  }

}
export default (NavBar)
