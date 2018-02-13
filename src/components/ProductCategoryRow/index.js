import React, { Component } from 'react';
import ProdList from 'components/ProdList/index';

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
          <tbody>
            <tr>
              <td color="2"><b>Sporting Goods</b></td>
            </tr>
            {sport}
            <tr>
              <td color="2"><b>Electronics</b></td>
            </tr>
            {electro}
          </tbody>
      )
  }
}

export default ProductCategoryRow;