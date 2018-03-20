import React, { Component } from 'react';
import ProdList from 'components/ProdList';
import ProdListInfo from 'components/ProdListInfo';

class ProductCategoryRow extends Component {

  render() {
      const stockOnly = this.props.stockOnly;
      const filterText = this.props.filterText;
      /*const sport = [];
      const electro = [];*/

      const rows = [];
      let lastCategory = null;

      this.props.products.forEach((product) => {
          if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            return;
          }
          if (stockOnly && !product.stocked) {
              return;
          }
          /*if (product.category === 'Sporting Goods') {
              sport.push(
                  <ProdList product={product} key={product.name} />
              );
          }
          if (product.category === 'Electronics') {
              electro.push(
                  <ProdList product={product} key={product.name} />
              );
          }*/
          if (product.category !== lastCategory) {
              rows.push(
                  <ProdListInfo
                      category={product.category}
                      key={product.category} />
              );
          }
          rows.push(
              <ProdList
                  product={product}
                  key={product.name}
              />
          );
          lastCategory = product.category;
      });


      return (
          <tbody>
            {/*<tr>
              <td colSpan="2"><b>Sporting Goods</b></td>
            </tr>
            {sport}
            <tr>
              <td colSpan="2"><b>Electronics</b></td>
            </tr>
            {electro}*/}
            {rows}
          </tbody>
      )
  }
}

export default ProductCategoryRow;