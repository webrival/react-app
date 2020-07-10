import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
          <Navbar.Brand href='/'>Prototype</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'></Nav>
            <Nav>
              <NavItem>
                <Link to='/' className='nav-link'>
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link to='/about' className='nav-link'>
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link to='/contact' className='nav-link mr-sm-5'>
                  Contact Me
                </Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
