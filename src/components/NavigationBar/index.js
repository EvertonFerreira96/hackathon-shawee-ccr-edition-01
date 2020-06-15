import React from 'react';
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import * as logomarca from '../../assets/images/logomarca.png';

import './styles.css';

function NavigationBar() {
  return (
    <div >
      <Navbar collapseOnSelect expand="lg" className='nav' variant='dark'>
      <Navbar.Brand href="#home">
        <Image src={logomarca}></Image>
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#A">QUIZ</Nav.Link>
        <Nav.Link href="#B">B</Nav.Link>
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/C.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/C.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/C.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/C.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      
    </Navbar.Collapse>
  </Navbar>
    </div>
    
  );
}

export default NavigationBar;