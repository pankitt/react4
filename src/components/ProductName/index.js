import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ProductName extends Component {

    render() {
        const id = this.props.obj.match.params.number;
        const products = this.props.products;
        const item = products[id];
        if (!item) return <div>Product not found</div>;

        return (
            <section>
                <h3>Product name:</h3>

                <div>
                  <p>{item.name} ({item.category}) - {item.price}</p>
                  <p><Link to='/products'>Back</Link></p>
                </div>
            </section>
        );
    }
}

export default ProductName;