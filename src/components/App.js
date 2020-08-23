import React from "react";
import NavBar from "./NavBar";
import AddProducts from "./AddProducts";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Products from "./Products";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <Route path="/" component={Products} />
          <Route path="/addProducts" component={AddProducts} />
          <Route path="/products" component={Products} />
        </div>
      </Router>
    );
  }
}

export default App;
