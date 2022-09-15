import React from 'react';

const Drag = ({ question, index }) => {
    console.log("drag: ", question);
    return (
        <div className='flex gap-5 mx-5 my-5'>

            <h1>{index}</h1>
            <h1>{question.questionID}</h1>

        </div>
    );
};

export default Drag;