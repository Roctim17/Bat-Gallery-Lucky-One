import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className='product-gallery'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="card-container">
                <Card></Card>
            </div>
        </div>
    );
};

export default Shop;