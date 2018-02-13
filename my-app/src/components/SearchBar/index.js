import React, { Component } from 'react';

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

export default SearchBar;