import React, { Component } from "react";

export default class AddProducts extends Component {
  render() {
    return (
      <div className="main-container">
        <form action="" method="POST">
          <label for="#name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter product name"
            required
          />
          <br />
          <label for="#description">Description</label>
          <input
            type="text"
            id="description"
            placeholder="Write Description"
            required
          />
          <br />
          <label for="#price">Price</label>
          <input type="number" id="price" placeholder="Give price" required />
          <br />
          <label for="#rating">Rating</label>
          <input type="number" placeholder="Give Rating" id="rating" required />
          <br />
          <label for="#image">Image URL</label>
          <input type="text" placeholder="Give Image URL" id="image" required />
          <br />
          <button>Add</button>
        </form>
      </div>
    );
  }
}
