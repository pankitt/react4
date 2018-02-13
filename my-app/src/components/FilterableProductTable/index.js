import React, { Component } from 'react';
import ProductTable from '../ProductTable/index';
import SearchBar from '../SearchBar/index';

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

  showStatus() {
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