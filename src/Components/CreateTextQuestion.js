import React, { useState } from 'react';

const CreateTextQuestion = ({ question, setQuestion }) => {


    const onCgTitle = e => {

        const q = question;
        q.title = e.target.value;

        q.questionType = 'mcq';

        setQuestion(q);
        // console.log(question);

    }

    const onCg = e => {

        const q = question;

        if (e.target.type === 'checkbox' && e.target.checked) {

            const newAns = [e.target.value][0];

            if (q.answer.indexOf(newAns) === -1) {
                q.answer.push(newAns);
            }

        }
        else if (e.target.type === 'checkbox' && e.target.checked === false) {

            const newAns = [e.target.value][0];

            const newAnsArray = q.answer.filter(f => f !== newAns);


            q.answer = [...newAnsArray];

        }
        else {
            q[e.target.name] = e.target.value;
        }

        setQuestion(q);
        console.log(question.answer);
    }






    return (
        <div className='w-full'>

            <div className="w-full">

                <input onChange={onCgTitle} className='py-1 bg-transparent border-2 border-gray-200 w-full px-2' placeholder='Question Text' type="text" name="question" id="" />

            </div>


            <div>

                <form onChange={onCg} className='py-5 flex flex-col gap-5'>

                    <div className=' flex items-center gap-2' id="1">

                        <input type="checkbox" id="question" name="ans" value="1" className='w-4 h-4' />
                        {/* <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"> */}

                        <input className='bg-transparent border-2 border-gray-200 px-2 ' type="text" name="option1" id="" placeholder="Option 1" />

                        {/* <button className='cursor-pointer active:font-bold'>X</button> */}
                    </div>


                    <div className=' flex items-center gap-2' id="2">
                        <input type="checkbox" id="question" name="ans" value="2" className='w-4 h-4' />
                        <input className='bg-transparent border-2 border-gray-200 px-2 ' type="text" name="option2" id="" placeholder="Option 2" />

                        {/* <button className='cursor-pointer active:font-bold'>X</button> */}
                    </div>


                    <div className=' flex items-center gap-2' id="3">
                        <input type="checkbox" id="question" name="ans" value="3" className='w-4 h-4' />
                        <input className='bg-transparent border-2 border-gray-200 px-2 ' type="text" name="option3" id="" placeholder="Option 3" />

                        {/* <button className='cursor-pointer active:font-bold'>X</button> */}
                    </div>


                    <div className=' flex items-center gap-2' id="4">
                        <input type="checkbox" id="question" name="ans" value="4" className='w-4 h-4' />
                        <input className='bg-transparent border-2 border-gray-200 px-2 ' type="text" name="option4" id="" placeholder="Option 4" />

                        {/* <button className='cursor-pointer active:font-bold'>X</button> */}
                    </div>


                </form>

            </div>

        </div>
    );
};


export default CreateTextQuestion;