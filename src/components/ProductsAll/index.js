import React, { Component } from 'react';
import FilterableProductTable from 'components/FilterableProductTable/index';

class ProductsAll extends Component {

    render() {
        return (
            <section>
                <h3>Products:</h3>
                <FilterableProductTable products={this.props.products} />
            </section>
        );
    }
}

export default ProductsAll;