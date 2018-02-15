import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ProductName extends Component {

    render() {
        const num = this.props.obj.match.params.number;
        const products = this.props.products;
        // const item = products[num];
        const find = id => products.find(p => p.number === Number(id));
        const item = find(num);

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