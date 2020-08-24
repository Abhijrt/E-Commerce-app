import React, { Component } from "react";
// importing the connect method
import { connect } from "react-redux";
// improting the product item component
import ProductItem from "./ProductItem";
// fetching the action creators
import fetchProducts, {
  addToCart,
  deleteProduct,
  updateProduct,
  cartItemFetch,
} from "../actions/products";

// importing the success message function
import { successMessageAlert } from "../actions/alert";

// function for sorting the object of array
function sortObjectArray(a, b) {
  if (eval(a.price) < eval(b.price)) {
    return -1;
  } else if (eval(a.price) > eval(b.price)) {
    return 1;
  } else {
    return 0;
  }
}

// product component
class Products extends Component {
  // initializing the state
  constructor() {
    super();
    this.state = {
      isCartItem: false,
      editId: 0,
      sort: false,
    };
  }
  // fetching the product item and cart item
  componentWillMount() {
    // console.log("STATE1", this.props);
    this.props.dispatch(fetchProducts());
    this.props.dispatch(cartItemFetch());
    // console.log("STATE2", this.props);
  }

  // handling the add to cart
  handleAddToCart = (product) => {
    // console.log("CARTID", product);
    this.props.dispatch(addToCart(product));
    successMessageAlert("Added", "This item is added to your cart");
  };

  // handling the delete item
  handleDelete = (product) => {
    this.props.dispatch(deleteProduct(product));
    successMessageAlert("Deleted", "This product is Deleted");
  };

  // handling the edit button
  onEditButton = (id) => {
    // console.log("ID", id);
    this.setState({
      editId: id,
    });
  };

  // handling the save button
  handleSave = (id, product) => {
    this.props.dispatch(updateProduct(id, product));
    successMessageAlert("Updated", "You changes are SuccessFully updated");
  };

  // handling the sort button
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
