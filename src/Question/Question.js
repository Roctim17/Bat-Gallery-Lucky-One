import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
            <h3>How React Works</h3>
            <p>We know that the component works in React Js. Renders the react component, refills everything and shows it on the website. With this React creates a virtual DOM and puts all the content in the virtual DOM. When we add new content, React compares the new virtual DOM with its previous virtual DOM and uploads only that new content.</p>

            <h3>how useState works</h3>
            <p>
                we know that, useState is a  Hook. It is  allow to state variables in a functional component. When someone pass the initial state to this function. Then it returns a variable with the current state value.To update this value we use another function. And that function is useState. So I think This way useState works.
            </p>
        </div>
    );
};

export default Question;