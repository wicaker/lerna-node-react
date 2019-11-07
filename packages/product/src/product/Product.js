import React, { useState } from "react";
import ButtonC from "./components/Button";
import Select from "./components/Select";
import ImageProduct from "./components/ImageProduct";
import axios from "axios";

class Product extends React.Component {
  state = {
    select: [1,2,3,4,5]
  }

  async handleClickButton(e, id){
    await axios.get(`/api/product/${id}`).then(res=>console.log(res)).catch(err => console.log(err))
  }
  render () {
    this.setState.beer = this.props.beer;
    return (
      <div>
        <div>
          <h4>
            <b>{this.props.beer.name}</b>
          </h4>
          <ImageProduct image={this.props.beer.image_url} name={this.props.beer.name} />
        </div>
        <Select array={this.state.select} />
        <div onClick={(e)=> {this.handleClickButton(e, this.props.beer.id)}}>
          <ButtonC color="primary" name="Details" />
        </div>
      </div>
    );
  }
};

export default Product;
