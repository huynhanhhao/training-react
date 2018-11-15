import React, { Component } from 'react';
import Item from './Item';

class Product extends Component {

    render() {
        return (
            <div id="products" className="row list-group">
                <Item>San pham Iphone</Item>
                <Item>San pham Iphone</Item>
                <Item>San pham Iphone</Item>
                <Item>San pham Iphone</Item>
                <Item>San pham Iphone</Item>
                <Item>San pham Iphone</Item>
            </div>
        );
    }
}

export default Product;