import React, { Component } from 'react';
import ProdList from 'components/ProdList';
import {
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class ProductCategoryRow extends Component {

  render() {
      const stockOnly = this.props.stockOnly;
      const filterText = this.props.filterText;
      const sport = [];
      const electro = [];

      this.props.products.forEach((product) => {
          if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            return;
          }
          if (stockOnly && !product.stocked) {
              return;
          }
          if (product.category === 'Sporting Goods') {
              sport.push(
                  <ProdList product={product} key={product.name} />
              );
          }
          if (product.category === 'Electronics') {
              electro.push(
                  <ProdList product={product} key={product.name} />
              );
          }
      });


      return (
          <TableBody>
            <TableRow>
              <TableRowColumn colSpan="2"><b>Sporting Goods</b></TableRowColumn>
            </TableRow>
            {sport}
            <TableRow>
              <TableRowColumn colSpan="2"><b>Electronics</b></TableRowColumn>
            </TableRow>
            {electro}
          </TableBody>
      )
  }
}

export default ProductCategoryRow;