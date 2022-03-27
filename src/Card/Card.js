import React from 'react';
import './Card.css'

const Card = ({ card, removeData, choseOne, randomCard }) => {
    return (
        <div className='card'>
            <h1> Product List </h1>
            {
                card.map(item => <h3 key={item.id}>
                    {item.name}</h3>)
            }
            <button className='btn-chose' onClick={() => choseOne(card)}>Chose me For batter one</button>

            {
                <h3>
                    <p>This is For You :</p>
                    {randomCard}
                </h3>
            }
            <button className='btn-remove' onClick={() => removeData(card)}>Clear</button>
        </div>
    );
};

export default Card;