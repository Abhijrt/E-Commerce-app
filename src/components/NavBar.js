import React, { Component } from "react";
// importing the bootstrap component
import { Navbar, Nav } from "react-bootstrap";
// importing the image
import myImage from "../images/my_image.jpeg";
// importing the connect method
import { connect } from "react-redux";

import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    const { carts } = this.props;
    const cartCount = carts.length;
    console.log(cartCount);
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>
            <Link class="link" to="/">
              E-Commerce
            </Link>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link class="link" to="/products">
                  Products
                </Link>{" "}
              </Nav.Link>
              <Nav.Link>
                <Link class="link" to="/addProducts">
                  Add a Products
                </Link>{" "}
              </Nav.Link>
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
              <Nav.Link eventKey={2}>
                <Link class="link" to="/carts">
                  <i
                    id="cart-icon"
                    className="fa fa-shopping-cart"
                    // aria-hidden="true"
                  ></i>
                  <span id="cart-count">{cartCount}</span>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("CAT", state);
  return {
    carts: state.products.carts,
  };
}

export default connect(mapStateToProps)(NavBar);
