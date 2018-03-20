import React, { Component } from 'react';

class ProdListInfo extends Component {

  render() {
    const category = this.props.category;

    return (
      <tr>
          <td colSpan="2"><b>{category}</b></td>
      </tr>
    )
  }
}

export default ProdListInfo;