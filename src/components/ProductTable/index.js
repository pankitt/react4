import React, { Component } from 'react';
import ProductCategoryRow from 'components/ProductCategoryRow';

class ProductTable extends Component {

  render() {
      return (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <ProductCategoryRow
                products={this.props.products}
                stockOnly={this.props.stockOnly}
                filterText={this.props.filterText}
            />
          </table>
      )
  }
}

export default ProductTable;