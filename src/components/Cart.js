import React, { Component } from "react";
// importing the action creators
import { cartItemFetch, removeFromCart } from "../actions/products";
// imprting the connect method for connecting store to component
import { connect } from "react-redux";
import ProductItem from "./ProductItem";
// importing the success message
import { successMessageAlert } from "../actions/alert";

// this is the cart component
class Cart extends Component {
  // initializing the state
  constructor() {
    super();

    this.state = {
      isCartItem: true,
    };
  }
  // for fetching the cart items
  componentWillMount() {
    // console.log("FIRST");

    this.props.dispatch(cartItemFetch());
    // console.log("SECOND");
  }
  // handling the remove item from cart
  handleRemoveFromCart = (product) => {
    // console.log("REMOVE", product);
    // calling the remove from cart method
    this.props.dispatch(removeFromCart(product));
    // calling the success messge
    successMessageAlert("Removed", "This Item is Remove From Your Cart");
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
