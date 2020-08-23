import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    // const { product } = this.props;
    return (
      <div className="main-container-item">
        <div className="left-block">
          <img src="" alt="product-img" />
        </div>
        <div className="middle-block">
          <div>RED CHAIR</div>
          <div>Price: Rs 4000</div>
          <div>Rating</div>
        </div>
        <div className="right-block">
          <p>Description</p>
        </div>
      </div>
    );
  }
}
