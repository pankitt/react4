import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class ProdList extends Component {

  render() {
    const product = this.props.product;
    const name = product.stocked ?
        product.name :
        <span style={{color: 'red'}}>
            {product.name}
        </span>;

    return (
      <TableRow>
        <TableRowColumn><Link to={`/products/${product.number}`}>{name}</Link></TableRowColumn>
        <TableRowColumn>{product.price}</TableRowColumn>
      </TableRow>
    )
  }
}

export default ProdList;