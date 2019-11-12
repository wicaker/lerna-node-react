import React, { Component } from "react";
import { Table, Container, Row, Col } from "reactstrap";
import "./index.css";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/productAction";

class ProductDetails extends Component {
  state = {
    beer: ""
  };

  componentWillMount() {
    this.props.product.products.forEach(product => {
      if (product.id == this.props.match.params.id) {
        this.setState({ beer: product });
      }
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs="12"><h1 style={{textAlign: "center"}}>{this.state.beer.name}</h1></Col>
        </Row>
        <Row>
          <Col xs="6">
            <img
              src={this.state.beer.image_url}
              width="200"
              height="300"
              alt={this.state.beer.name}
            />
            <p>{this.state.beer.description}</p>
          </Col>
          <Col xs="6">
            <Table borderless>
              <tbody>
                <tr>
                  <th>first_brewed</th>
                  <td>: {this.state.beer.first_brewed}</td>
                </tr>
                <tr>
                  <th>abv</th>
                  <td>: {this.state.beer.abv}</td>
                </tr>
                <tr>
                  <th>ibu</th>
                  <td>: {this.state.beer.ibu}</td>
                </tr>
                <tr>
                  <th>brewers_tips</th>
                  <td>: {this.state.beer.brewers_tips}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

//connect redux store to component
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(ProductDetails);
