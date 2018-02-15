import React, { Component } from 'react';
import ProductCategoryRow from 'components/ProductCategoryRow';
import {
  Table,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';

class ProductTable extends Component {

  render() {
      return (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Price</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <ProductCategoryRow
                products={this.props.products}
                stockOnly={this.props.stockOnly}
                filterText={this.props.filterText}
            />
          </Table>
      )
  }
}

export default ProductTable;