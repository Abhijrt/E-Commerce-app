import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import myImage from "../images/my_image.jpeg";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="./products">Products</Nav.Link>
              <Nav.Link href="./addProducts">Add a Products</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Abhay Jirati</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <img
                  style={{ height: 40, borderRadius: 40 }}
                  src={myImage}
                  alt="my-img"
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
