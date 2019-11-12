import React, { Component } from 'react';
import Product from '../product/Product';
import './index.css'
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/productAction";

class Products extends Component {
  render () {
    let AllProducts = (<div></div>);
    if(this.props.product.products.length > 0) {
      AllProducts = this.props.product.products.map(item => {
        return (
          <div key={item.id} className='grid-item'>
          <Product beer={item}  />
          </div>
        )
      });
    }
    return (
      <div className='grid-container'>
      {AllProducts}
      </div>
    )
  }
}

//connect redux store to component
const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  actionCreators
)(Products);
