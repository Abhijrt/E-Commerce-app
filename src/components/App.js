import React from "react";
import NavBar from "./NavBar";
import AddProducts from "./AddProducts";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Products from "./Products";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    // console.log("STATEAPP", this.props.store);
    // console.log("DISPATCH", this.props);
    return (
      <Router>
        <div className="app">
          <NavBar />
          <Products store={this.props.store} dispatch={this.props.dispatch} />
          {/* <Route path="/" component={Products} /> */}
          <Route path="/addProducts" component={AddProducts} />
          <Route path="/products" component={Products} />
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
