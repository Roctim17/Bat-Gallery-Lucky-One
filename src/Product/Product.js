import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, price } = props.product;
    return (
        <div>
            <div className="product">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h3>$ {price}</h3>
                <button className='btn-card'>Add to Card</button>
            </div>
        </div>
    );
};

export default Product;