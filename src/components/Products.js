import React, { Component } from "react";

import { connect } from "react-redux";
import ProductItem from "./ProductItem";
import fetchProducts, {
  addToCart,
  deleteProduct,
  updateProduct,
  cartItemFetch,
} from "../actions/products";

import { successMessageAlert } from "../actions/alert";

function sortObjectArray(a, b) {
  if (eval(a.price) < eval(b.price)) {
    return -1;
  } else if (eval(a.price) > eval(b.price)) {
    return 1;
  } else {
    return 0;
  }
}

class Products extends Component {
  constructor() {
    super();
    this.state = {
      isCartItem: false,
      editId: 0,
      sort: false,
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

  onClickSortByprice = () => {
    let { sort } = this.state;
    this.setState({
      sort: !sort,
    });
  };

  render() {
    // console.log("PROPS", this.props);
    let { products } = this.props;
    let { editId, sort } = this.state;
    // console.log("CART", products);
    // console.log(editId);
    // console.log("Products123435", products);
    if (sort) {
      let newArray = [];
      newArray = [...products];
      // console.log("NEWARRAY", newArray);
      products = newArray.sort(sortObjectArray);
    } else {
      products = this.props.products;
    }
    return (
      <div className="main-container">
        <div className="product-heading">
          <div className="heading">Products</div>

          <div className="sort-btn" onClick={this.onClickSortByprice}>
            {!sort ? "Sort by Price" : <i className="fa fa-times"></i>}
          </div>
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
