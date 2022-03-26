import React from 'react';
import './Card.css'

const Card = ({ card, removeData, choseOne, }) => {
    let number = 1;



    return (
        <div className='card'>
            <h1> product name </h1>
            {
                card.map(item => <h3 key={item.id}>
                    No.{number++} {item.name}</h3>)

            }



            <button onClick={() => choseOne(card)}>Chose me For batter one</button>
            <p>This is For You :</p>


            <button onClick={() => removeData(card)}>Clear</button>
        </div>
    );
};

export default Card;