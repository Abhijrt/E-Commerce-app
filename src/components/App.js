import React from "react";
import NavBar from "./NavBar";
import AddProducts from "./AddProducts";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Products from "./Products";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path="/" exact component={Products} />
        <Route path="/addProducts" component={AddProducts} />
        <Route path="/products" component={Products} />
        <AddProducts />
      </div>
    </Router>
  );
}

export default App;
