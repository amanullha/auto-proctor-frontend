import React, { useState } from 'react';
import { FiSettings } from 'react-icons/fi'
import { HiSaveAs } from 'react-icons/hi'
import { CgMenuGridO } from 'react-icons/cg'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import CreateShortQuestion from './CreateShortQuestion';
import CreateTextQuestion from './CreateTextQuestion';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import '../Assets/style.css'

const NewQuestion = ({ handleDragStart, handleDragOver, handleDrop, handleDragEnter, handleDragLeave, handleDragEnd, questionSerial, question, deleteQuestion, addQuestionTitle, handleQuestionOptions, handleQuestionAnswer, handleQuestionPoint, handleQuestionType }) => {

    const navigate = useNavigate();

    console.log("new question id ", questionSerial);







    const [questionType, setQuestionType] = useState(question.questionType)

    const handleOnTypeChange = e => {

        const qType = e.target.value;

        handleQuestionType({ questionId: questionSerial, updateQuestionType: qType });
        setQuestionType(qType);

    }






    const handleSave = () => {


        // if (parseInt(question.point) <= 0) {
        //     warningToast("Add some points!")
        //     return;
        // }

        // else if (question.title.length === 0) {
        //     warningToast("Add question title")
        //     return;
        // }


        // let flag = true;

        // for (let i = 1; i <= 4; i++) {

        //     if (question['option' + i].length === 0) {
        //         warningToast(`Add text at option ${i}`);
        //         flag = false;
        //         return;
        //     }
        // }

        // if (flag && question.answer.length === 0) {
        //     warningToast("Select right answer options")
        //     return;
        // }



        // const headers = {
        //     'Authorization': 'Bearer my-token',
        //     'My-Custom-Header': 'foobar'
        // };


        // axios.post('https://hidden-ocean-35645.herokuapp.com/add-question', question, { headers })
        //     .then(response => {
        //         console.log('response: ', response);

        //         if (response.data.acknowledged) {

        //             successToast("Successfully new question added!");

        //             setTimeout(() => {
        //                 navigate('/')


        //             }, 2000);



        //         }
        //     });




    }




    return (


        <div
            // onDragOver={handleDragOver}
            // onDrop={() => handleDrop(questionSerial)}
            // onDragEnter={() => handleDragEnter(questionSerial)}
            // onDragLeave={handleDragLeave}
            // onDragEnd={handleDragEnd}


            className=' bg-white w-full h-full  questionParen relative shadow-md border-2 border-gray-200 hover:shadow-2xl my-5'>

            <div


                className=' flex items-center'>





                <div
                    onDragOver={handleDragOver}
                    onDrop={() => handleDrop(questionSerial)}
                    onDragEnter={() => handleDragEnter(questionSerial)}

                    className='w-full  flex flex-col items-start  gap-5  my-10 px-5  '>

                    <div className='flex justify-between items-center w-full '>

                        <div className='flex items-center gap-2 '>





                            <div
                                draggable
                                onDragStart={() => handleDragStart(questionSerial)}
                                onDragOver={handleDragOver}
                                onDrop={() => handleDrop(questionSerial)}
                                onDragEnter={() => handleDragEnter(questionSerial)}
                                onDragLeave={handleDragLeave}
                                onDragEnd={handleDragEnd}
                                className="cursor-move  "

                            >
                                <CgMenuGridO


                                    size={25} />

                            </div>






                            {/* <h1>Question: {questionSerial + 1}   id : {question.questionID}</h1> */}
                            <h1>Question: {questionSerial + 1} </h1>
                        </div>

                        <div className='flex items-center'>

                            <select onChange={handleOnTypeChange} className='bg-transparent pl-2 pr-5 py-1 border-2 border-gray-200' name="questionType" id="cars">
                                <option selected value="mcq">MCQ</option>
                                <option value="shortText">Short Text</option>

                            </select>

                            <AiOutlineQuestionCircle className=' ml-2 text-[#60a5fa]' />


                        </div>
                        <div className='flex gap-2 items-center'>
                            <label>Point</label>

                            <input onChange={(e) => handleQuestionPoint({ questionId: questionSerial, updatePoint: e.target.value })} className='pl-2 bg-transparent w-12 border-2 border-gray-200' type="number" name="point" id="point" placeholder={question.point} />

                        </div>


                    </div>


                    {/* New question  */}
                    <div className='w-full'>


                        <div className="w-full">

                            <input onKeyUp={addQuestionTitle} className='py-1 bg-transparent border-2 border-gray-200 w-full px-2' placeholder='Question Text' type="text" name="question" id={questionSerial} value={question.title} />

                        </div>


                        {
                            questionType === 'mcq' ? <CreateShortQuestion key={questionSerial} question={question} addQuestionTitle={addQuestionTitle} questionSerial={questionSerial} handleQuestionOptions={handleQuestionOptions} handleQuestionAnswer={handleQuestionAnswer} /> : <CreateTextQuestion key={questionSerial} question={question} addQuestionTitle={addQuestionTitle} questionSerial={questionSerial} handleQuestionOptions={handleQuestionOptions} handleQuestionAnswer={handleQuestionAnswer} />
                        }



                    </div>





                </div>


            </div>


            <RiDeleteBin6Fill onClick={() => deleteQuestion(question.questionID)} size={20} className={`hover:bg-red-300 rounded-full cursor-pointer active:text-red-600 absolute top-[49%] -right-8 ${questionSerial + 1 ? 'block' : 'hidden'}`} />

        </div>
    );
};

export default NewQuestion;