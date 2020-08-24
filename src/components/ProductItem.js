import React, { Component } from "react";

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      description: "",
      rating: 0,
      imageURL: "",
    };
  }

  componentDidMount() {
    const {
      id,
      name,
      rating,
      price,
      description,
      imageURL,
    } = this.props.product;
    this.setState({ id, name, rating, price, description, imageURL });
  }

  handleAddToCart = (product) => {
    // console.log("Product ID", product);
    // // console.log("this.props", this.props.dispatch);
    // this.props.dispatch(addToCart(id));
    this.props.onCartButtonClick(product);
  };

  handleRemoveFromCart = (product) => {
    // console.log("REMOVE", product);
    this.props.onCartButtonClick(product);
  };

  handleDelete = (product) => {
    this.props.onDeleteButtonClick(product);
  };

  handleEdit = (id) => {
    // console.log("ID", id);
    this.props.onEditButton(id);
  };

  handleChange = (type, value) => {
    if (type === "name") {
      this.setState({ name: value });
    } else if (type === "rating") {
      this.setState({ rating: value });
    } else if (type === "description") {
      this.setState({ description: value });
    } else if (type === "price") {
      this.setState({ price: value });
    } else if (type === "imageURL") {
      this.setState({ imageURL: value });
    }
  };

  handleUpdate = (id) => {
    // e.preventDefault();
    this.props.handleSave(id, this.state);
    this.props.onEditButton(" ");
  };

  handleCancel = (id) => {
    this.props.onEditButton(" ");
  };

  render() {
    // console.log("PROPS", this.props);
    const { product, isCartItem, editMode } = this.props;
    const { id, name, rating, price, description, imageURL } = this.state;
    // console.log("Hii", p);
    // console.log(isCartItem);
    // var id = product.id;
    return (
      <div>
        {!editMode && (
          <div className="main-container-item">
            <div className="left-block">
              <img src={product.imageURL} alt="product-img" />
            </div>
            <div className="middle-block">
              <div className="product-name">{product.name}</div>
              <p className="description">{product.description}</p>
              <div className="product-rating">{product.rating}</div>
            </div>
            <div className="right-block">
              <div className="product-price">
                Price:<br></br> Rs {product.price}
              </div>

              {isCartItem ? (
                <div
                  className="add-btn"
                  onClick={() => this.handleRemoveFromCart(product)}
                >
                  Remove from Cart
                </div>
              ) : (
                <div
                  className="add-btn"
                  onClick={() => this.handleAddToCart(product)}
                >
                  Add To Cart
                </div>
              )}
              {!isCartItem ? (
                <div className="edit-icon">
                  <i
                    onClick={() => this.handleEdit(id)}
                    className="fa fa-pencil"
                  ></i>
                  <i
                    onClick={() => this.handleDelete(product)}
                    className="fas fa-trash"
                  ></i>
                </div>
              ) : null}
            </div>
          </div>
        )}
        {editMode && (
          <div className="main-container-item">
            <div className="left-block">
              <img src={imageURL} alt="product-img" />
            </div>
            <div className="middle-block">
              <div className="product-name">
                <input
                  type="text"
                  value={name}
                  required
                  onChange={(e) => {
                    this.handleChange("name", e.target.value);
                  }}
                />
              </div>
              <p className="description">
                <textarea
                  type="text"
                  value={description}
                  required
                  onChange={(e) => {
                    this.handleChange("decsription", e.target.value);
                  }}
                />
              </p>
              <div className="product-rating">
                <input
                  type="text"
                  value={rating}
                  required
                  onChange={(e) => {
                    this.handleChange("rating", e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="right-block">
              <div className="product-price">
                Price:<br></br> Rs{" "}
                <input
                  type="text"
                  value={price}
                  required
                  onChange={(e) => {
                    this.handleChange("price", e.target.value);
                  }}
                />
              </div>
              {!isCartItem ? (
                <div className="edit-icon">
                  <i
                    onClick={() => this.handleCancel(id)}
                    className="fa fa-times"
                  ></i>
                  <i
                    onClick={() => this.handleUpdate(id)}
                    className="fas fa-check"
                  ></i>
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>

      // <div className="main-container-item">
      //   <div className="left-block">
      //     <img src={myImage} alt="product-img" />
      //   </div>
      //   <div className="middle-block">
      //     <div className="product-name">RED CHAIR</div>
      //     <p className="description">Description</p>
      //     <div className="product-rating">Rating</div>
      //   </div>
      //   <div className="right-block">
      //     <div className="product-price">
      //       Price:<br></br> Rs 4000
      //     </div>
      //     <div className="edit-icon"></div>
      //   </div>
      // </div>
    );
  }
}

export default ProductItem;
