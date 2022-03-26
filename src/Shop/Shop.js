import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [card, setCard] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const addToCard = (product) => {
        if (card.indexOf(product) !== -1) return;
        const newCard = [...card, product];
        setCard(newCard)
    }
    const removeData = (card) => { setCard([]) };
    const choseOne = (card) => {
        const random = Math.round(Math.random() * card.length);
        if (random === card.length) {
            setCard([], card)
        }
        console.log(random)
    }

    return (
        <div className='product-gallery'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id}
                        product={product}
                        addToCard={addToCard}
                    ></Product>)
                }
            </div>
            <div className="card-container">

                <Card card={card}
                    removeData={removeData}
                    choseOne={choseOne}
                ></Card>
            </div>
        </div>
    );
};

export default Shop;