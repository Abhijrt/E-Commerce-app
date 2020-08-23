import React, { Component } from "react";

import { connect } from "react-redux";
import ProductItem from "./ProductItem";
import fetchProducts from "../actions/products";

class Products extends Component {
  componentWillMount() {
    // console.log("STATE1", this.props);
    this.props.dispatch(fetchProducts());
    // console.log("STATE2", this.props);
  }
  render() {
    const { products } = this.props;
    console.log("Products123435", products);
    return (
      <div className="main-container">
        <div className="product-heading">
          <div className="heading">Products</div>
          <div className="sort-btn">Sort by Price</div>
        </div>
        <div>
          {/* <ProductItem /> */}
          {products.map((product) => {
            return <ProductItem key={product.id} product={product} />;
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products.products,
  };
}

export default connect(mapStateToProps)(Products);
