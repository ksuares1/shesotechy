import React from "react";
import "./index.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">ShesoTechy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">About</Nav.Link>
             <Nav.Link href="/contact">Contact</Nav.Link> 
             <Nav.Link href="/blog">Blog</Nav.Link> 
            <NavDropdown href="/Portfolio" title="Portfolio" id="basic-nav-dropdown">
              <NavDropdown.Item href="/workwithme">Work with Me</NavDropdown.Item>
              <NavDropdown.Item href="/schedule">Schedule an Appointment</NavDropdown.Item>
              <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button> 
          </Form>
        </Navbar.Collapse>
      </Navbar>

    )
}
export default NavBar;
