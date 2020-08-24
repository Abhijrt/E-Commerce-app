import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { addToProducts } from "../actions/products";

import { successMessageAlert } from "../actions/alert";

class AddProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      description: "",
      rating: 0,
      imageURL: "",
    };
    this.formRef = createRef();
  }

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

  handleAddToProduct = (e) => {
    e.preventDefault();
    this.props.dispatch(addToProducts(this.state));
    successMessageAlert("Added", "SuccessFully Updated");
    this.formRef.current.reset();
  };

  render() {
    return (
      <div className="main-container-form">
        <form ref={this.formRef} method="POST">
          <label for="#name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter product name"
            onChange={(e) => this.handleChange("name", e.target.value)}
            required
          />
          <br />
          <label for="#description">Description</label>
          <input
            type="text"
            id="description"
            placeholder="Write Description"
            onChange={(e) => this.handleChange("description", e.target.value)}
            required
          />
          <br />
          <label for="#price">Price</label>
          <input
            type="number"
            id="price"
            placeholder="Give price"
            onChange={(e) => this.handleChange("price", e.target.value)}
            required
          />
          <br />
          <label for="#rating">Rating</label>
          <input
            type="number"
            placeholder="Give Rating"
            onChange={(e) => this.handleChange("rating", e.target.value)}
            id="rating"
            required
          />
          <br />
          <label for="#image">Image URL</label>
          <input
            type="text"
            placeholder="Give Image URL"
            onChange={(e) => this.handleChange("imageURL", e.target.value)}
            id="image"
            required
          />
          <br />
          <button onClick={this.handleAddToProduct}>Add</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state);
  return {};
}

export default connect(mapStateToProps)(AddProducts);
