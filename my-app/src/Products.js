import React, { Component } from 'react';


class ProdList extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    const product = this.props.product;
    const name = product.stocked ?
        product.name :
        <span style={{color: 'red'}}>
            {product.name}
        </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    )
  }
}

class ProductCategoryRow extends Component {
  constructor(props) {
      super(props);
  }

  render() {
      const stockOnly = this.props.stockOnly;
      const filterText = this.props.filterText;
      const sport = [];
      const electro = [];

      this.props.products.forEach((product) => {
          /*if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            return;
          }*/
          if (stockOnly && !product.stocked) {
              return;
          }
          if (product.category == 'Sporting Goods') {
              sport.push(
                  <ProdList product={product} key={product.name} />
              );
          }
          if (product.category == 'Electronics') {
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

class ProductTable extends Component {
  constructor(props) {
      super(props);
  }

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

class SearchBar extends Component {
  constructor(props) {
      super(props);
      this.handleText = this.handleText.bind(this);
      this.handleCheck = this.handleCheck.bind(this);
      this.showStatus = this.showStatus.bind(this);

  }

  handleText(e) {
    this.props.onHandleText(e.target.value);
  }
  handleCheck(e) {
    this.props.onHandleCheck(e.target.checked);
  }
  showStatus(e) {
      this.props.onShowStatus(e.preventDefault());
  }

  render() {
      return (
          <form>
            <input type="text" placeholder="Search..."
                   value={this.props.filterText}
                   onChange={this.handleText} />
            <button onClick={this.showStatus}>Show status</button><br/>
            <input type="checkbox"
                   checked={this.props.stockOnly}
                   onChange={this.handleCheck} />
            Only show products in stock
            <br/>
          </form>
      )
  }
}

class FilterableProductTable extends Component {
  constructor(props) {
      super(props);
      this.handleText = this.handleText.bind(this);
      this.handleCheck = this.handleCheck.bind(this);
      this.showStatus = this.showStatus.bind(this);

      this.state = {
          filterText: '',
          stockOnly: false
      };
  }

  handleText(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleCheck(stockOnly) {
    this.setState({
      stockOnly: stockOnly
    })
  }

  showStatus(e) {
     console.log(`${this.state.filterText} - ${this.state.stockOnly}`);
  }

  render() {
      return (
          <section>
            <SearchBar
                onHandleText={this.handleText}
                onHandleCheck={this.handleCheck}
                onShowStatus={this.showStatus}
                stockOnly={this.state.stockOnly}
                filterText={this.state.filterText}
            />
            <br/>
            <ProductTable
                products={this.props.products}
                stockOnly={this.state.stockOnly}
                filterText={this.state.filterText}
            />
          </section>
      )
  }
}

export default FilterableProductTable;