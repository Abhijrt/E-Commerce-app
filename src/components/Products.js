import React, { Component } from "react";

import { connect } from "react-redux";
import ProductItem from "./ProductItem";
import fetchProducts, {
  addToCart,
  deleteProduct,
  updateProduct,
  cartItemFetch,
} from "../actions/products";

import { successMessageAlert, errorMessageAlert } from "../actions/alert";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      isCartItem: false,
      editId: 0,
    };
  }
  componentWillMount() {
    // console.log("STATE1", this.props);
    this.props.dispatch(fetchProducts());
    this.props.dispatch(cartItemFetch());
    // console.log("STATE2", this.props);
  }

  handleAddToCart = (product) => {
    // console.log("CARTID", product);
    this.props.dispatch(addToCart(product));
    successMessageAlert("Added", "This item is added to your cart");
  };

  handleDelete = (product) => {
    this.props.dispatch(deleteProduct(product));
    successMessageAlert("Deleted", "This product is Deleted");
  };

  onEditButton = (id) => {
    // console.log("ID", id);
    this.setState({
      editId: id,
    });
  };

  handleSave = (id, product) => {
    this.props.dispatch(updateProduct(id, product));
    successMessageAlert("Updated", "You changes are SuccessFully updated");
  };

  render() {
    console.log("PROPS", this.props);
    const { products } = this.props;
    const { editId } = this.state;
    // console.log("CART", products);
    // console.log(editId);
    // console.log("Products123435", products);
    return (
      <div className="main-container">
        <div className="product-heading">
          <div className="heading">Products</div>
          <div className="sort-btn">Sort by Price</div>
        </div>
        <div>
          {/* <ProductItem /> */}
          {products.map((product) => {
            return (
              <ProductItem
                key={product.id}
                product={product}
                editMode={product.id === editId}
                isCartItem={this.state.isCartItem}
                onCartButtonClick={this.handleAddToCart}
                onDeleteButtonClick={this.handleDelete}
                onEditButton={this.onEditButton}
                handleSave={this.handleSave}
              />
            );
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
