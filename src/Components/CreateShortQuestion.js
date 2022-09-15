import React, { useState } from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import { ImCross } from 'react-icons/im';
import { TiDelete } from 'react-icons/ti';

const CreateShortQuestion = ({ question, addQuestionTitle, questionSerial, handleQuestionOptions, handleQuestionAnswer }) => {


    const [dragItemIndex, setDragItemIndex] = useState();
    const [dragOverItemIndex, setDragOverItemIndex] = useState();


    let ln = 0;
    for (let p of question.options) {

        if (p?.length > 0) ln++;
    }
    if (question.options.length === 0 || ln === question.options.length) {
        question.options.push("")
    }





    const handleOption = (event) => {

        const key = event.key;



        let id = event.target.id;

        const _options = [...question.options];

        if (key === 'Backspace') {

            let len = _options[id]?.length;

            _options[id] = _options[id].slice(0, len - 1);
        }
        else {

            _options[id] = _options[id] + key;

        }


        handleQuestionOptions({ questionId: questionSerial, updateOptions: _options })


    }

    const optionDelete = id => {

        const _options = question.options.filter((op, i) => i !== id);

        console.log(_options);

        handleQuestionOptions({ questionId: questionSerial, updateOptions: _options })

    }










    // Drag and Drop functions start here 


    const handleDragStart = index => {
        setDragItemIndex(index)

    };

    const handleDragOver = event => {
        event.preventDefault();
    }

    const handleDrop = () => {

        let _options = [...question.options];

        const moveItem = _options.splice(dragItemIndex, 1)[0];

        _options.splice(dragOverItemIndex, 0, moveItem);

        handleQuestionOptions({ questionId: questionSerial, updateOptions: _options })

    }










    const handleDragEnter = index => {
        //if (index)
        setDragOverItemIndex(index)
        //   else return;

    }

    const handleDragLeave = (event) => {
        setDragOverItemIndex(undefined)
    }

    const handleDragEnd = event => {
        setDragItemIndex(undefined);
        setDragOverItemIndex(undefined);
    }







    return (
        <div className='w-full'>






            <form className='py-5 flex flex-col gap-5'>

                {
                    question.options.map((option, index) =>

                        <div
                            // onDragOver={handleDragOver}
                            // onDrop={() => handleDrop(index)}
                            // onDragEnter={() => handleDragEnter(index)}

                            key={index}

                            className=' flex items-center gap-2' id="1">


                            <div
                                draggable
                                onDragStart={() => handleDragStart(index)}
                                onDragOver={handleDragOver}
                                onDrop={() => handleDrop(index)}
                                onDragEnter={() => handleDragEnter(index)}
                                onDragLeave={handleDragLeave}
                                onDragEnd={handleDragEnd}
                                className="cursor-move  "

                            >
                                <CgMenuGridO


                                    size={15} />

                            </div>


                            <input onClick={() => handleQuestionAnswer({ questionId: questionSerial, updateAnswer: [index] })} type="radio" id="question" name="ans" value={index} className='w-5 h-5' />

                            <input onKeyUp={handleOption} className='bg-transparent border-2 border-gray-200 px-2 ' type="text" name="option" id={index} placeholder={`Option ${index + 1}`} value={option} />

                            <ImCross onClick={() => optionDelete(index)} className='cursor-pointer active:font-bold ' />
                        </div>)
                }





            </form>



        </div>
    );
};

export default CreateShortQuestion;