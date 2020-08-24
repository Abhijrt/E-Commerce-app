import React, { Component } from "react";
import { cartItemFetch, removeFromCart } from "../actions/products";
import { connect } from "react-redux";
import ProductItem from "./ProductItem";

class Cart extends Component {
  constructor() {
    super();

    this.state = {
      isCartItem: true,
    };
  }
  componentWillMount() {
    // console.log("FIRST");

    this.props.dispatch(cartItemFetch());
    // console.log("SECOND");
  }
  handleRemoveFromCart = (product) => {
    // console.log("REMOVE", product);
    this.props.dispatch(removeFromCart(product));
  };
  render() {
    const { carts } = this.props.products;
    var totalSum = 0;
    carts.map((cart) => {
      var price = parseInt(cart.price);
      totalSum += price;
    });
    // console.log("CARTITEM", this.props);
    // console.log("CARTSINCARTS", carts);
    return (
      <div className="main-container">
        <div className="product-heading">
          <div className="heading">Products</div>
          <div className="total">
            Total: <span id="total-sum">{totalSum}</span>{" "}
          </div>
        </div>
        <div>
          {carts.length > 0 ? (
            carts.map((cart) => {
              return (
                <ProductItem
                  key={cart.id}
                  product={cart}
                  isCartItem={this.state.isCartItem}
                  onCartButtonClick={this.handleRemoveFromCart}
                  //   onCartButtonClick={this.handleAddToCart}
                />
              );
            })
          ) : (
            <div>No item in your cart</div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state);
  return {
    products: state.products,
    carts: state.carts,
  };
}

export default connect(mapStateToProps)(Cart);
