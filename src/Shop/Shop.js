import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [card, setCard] = useState([]);
    const [randomCard, setRandomCard] = useState([])

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
        if (card.length > 0) {
            const randomCardNumber = Math.floor(Math.random() * card.length + 1);
            setRandomCard(card[randomCardNumber].name);
        }
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
                    randomCard={randomCard}
                ></Card>
            </div>
        </div>
    );
};

export default Shop;