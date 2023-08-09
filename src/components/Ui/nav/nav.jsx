import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsFillCaretDownFill } from 'react-icons/bs';
import logo from '../../../img/navLogo.jpg';
import './nav.css';

const Navigation = () => {
  return (
    <div className="mainNav">
      <Navbar expand="lg" variant="light" className="navbar">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="" className="logoImg" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <NavDropdown title="Services" id="services-dropdown">
                <NavDropdown.Item as={Link} to="/service">
                  Whole Home Remodels
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/service/roomadd">
                  Room Additions
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/service/adu">
                  ADU / Granny Flats
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/service/bathroom">
                  Bathroom Remodels
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/service/kitchen">
                  Kitchen Remodels
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/service/design">
                  Design - Build
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/service/outdoor">
                  Outdoor Living
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/service/universal">
                  Universal Design
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/service/commercial">
                  Commercial Remodeling
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="About Us" id="aboutus-dropdown">
                <NavDropdown.Item as={Link} to="/about">
                  About Us
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about/process">
                  Our Process
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about/testimonials">
                  Testimonials
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            </Nav>
            <Nav>
              <div className="navSchedule">
                <p>+1 512-588-3997</p>
                <Nav.Link style={{color:`#FFF`}} className="navBtn" href="https://www.honeybook.com/widget/arise_contractors_group_250096/cf_id/640231f32ec3cc0c94007001">
                  Schedule your consultation
                </Nav.Link>
              </div>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    
  );
};

export default Navigation;
