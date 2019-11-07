import React, { Component } from 'react';
import Product from '../product/Product';
import axios from 'axios';
// import '../components/Wishlist'
import './index.css'
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/productAction";

class Products extends Component {
  state = {
    beer : []
  }

  async componentDidMount() {
    console.log("propsss", this.props)
  //   let response = await axios.get('http://localhost:4000/products');
  //   console.log(response)
  //   this.setState({beer: response.data})
  }
  render () {
    console.log("propsss", this.props)
    let AllWishlists = (<div></div>);
    if(this.props.product.products.length > 0) {
      AllWishlists = this.props.product.products.map(item => {
        return (
          <div key={item.id} className='grid-item'>
          <Product beer={item}  />
          </div>
        )
      });
    }
    return (
      <div className='grid-container'>
      {AllWishlists}
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
