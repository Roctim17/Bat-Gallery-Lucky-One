import React from 'react';
import './Product.css'

const Product = ({ product, addToCard }) => {
    const { img, name, price } = product;
    return (
        <div>
            <div className="product">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h3>${price}</h3>
                <button onClick={() => addToCard(product)} className='btn-card'>Add to Card</button>
            </div>
        </div>
    );
};

export default Product;