import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProdList extends Component {

  render() {
    const product = this.props.product;
    const name = product.stocked ?
        product.name :
        <span style={{color: 'red'}}>
            {product.name}
        </span>;

    return (
      <tr>
        <td><Link to={`/products/${product.id}`}>{name}</Link></td>
        <td>{product.price}</td>
      </tr>
    )
  }
}

export default ProdList;