import React, { useEffect, useState } from 'react';

const Shop = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            {
                products.map(product => console.log(product))
            }

        </div>
    );
};

export default Shop;