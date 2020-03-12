import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
      <Link to="/"><Navbar.Brand >COVID PY</Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link >Informacion</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar
