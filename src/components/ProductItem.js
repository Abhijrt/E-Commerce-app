import React, { Component } from "react";
import myImage from "../images/my_image.jpeg";

export default class ProductItem extends Component {
  addToCart = (id) => {
    console.log("Product ID", id);
  };

  render() {
    const { product } = this.props;
    // console.log("Hii");

    return (
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
          <div
            className="add-btn"
            onClick={this.addToCart.bind(this, product.id)}
          >
            Add To Cart
          </div>
          <div className="edit-icon">
            <i className="fa fa-pencil"></i>
            <i className="fas fa-trash"></i>
          </div>
        </div>
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
