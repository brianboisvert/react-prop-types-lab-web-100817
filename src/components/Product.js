// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';
import { range } from 'react-range-proptypes';

class Product extends React.Component {
  render() {
    return (
      <div>Product</div>
    )
  }
}
  Product.propTypes = {
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    hasWatermark: PropTypes.bool,
    color: PropTypes.oneOf([
      'white',
      'eggshell-white',
      'salmon',
    ]).isRequired,
    weight: range(80, 300).isRequired,
  }

  Product.defaultProps = {
    hasWatermark: false
  }


export default Product;
