import React from "react";
// importing the Components
import NavBar from "./NavBar";
import AddProducts from "./AddProducts";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Products from "./Products";
import { connect } from "react-redux";
import Cart from "./Cart";

class App extends React.Component {
  render() {
    // console.log("STATEAPP", this.props.store);
    // console.log("DISPATCH", this.props);
    return (
      <Router>
        <div className="app">
          <NavBar />
          <Route path="/" exact component={Products} />
          <Route path="/addProducts" exact component={AddProducts} />
          <Route path="/products" exact component={Products} />
          <Route path="/carts" exact component={Cart} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state);
  return {};
}

export default connect(mapStateToProps)(App);
