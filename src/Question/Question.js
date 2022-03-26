import React from 'react';

const Question = () => {
    return (
        <div>
            <p>How React Works</p>
            <p>We know that the component works in React Js. Renders the react component, refills everything and shows it on the website. With this React creates a virtual DOM and puts all the content in the virtual DOM. When we add new content, React compares the new virtual DOM with its previous virtual DOM and uploads only that new content.</p>

            <p>how usestate works</p>
            <p>
                useState is a  Hook.It is  allow to state variables in a functional component.When I pass the initial state to this function. And it returns a variable with the current state value.The another function to update this value. I think This way useState works.
            </p>
        </div>
    );
};

export default Question;