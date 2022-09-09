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

const NewTest = () => {


    const navigate = useNavigate();

    const [question, setQuestion] = useState({

        title: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        answer: [],
        questionType: '',
        point: 1,

    });

    const setQuestionPoint = (e) => {

        const q = question;
        q.point = e.target.value;
        setQuestion(q);
        console.log(question);
    }




    const [questionType, setQuestionType] = useState('mcq')

    const handleOnTypeChange = e => {
        setQuestionType(e.target.value);
    }




    const warningToast = (text = 'warning') => {


        toast.warn(text, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    }
    const successToast = (text = 'success') => {


        toast.success(text, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    }


    const handleSave = () => {


        if (parseInt(question.point) <= 0) {
            warningToast("Add some points!")
            return;
        }

        else if (question.title.length === 0) {
            warningToast("Add question title")
            return;
        }


        let flag = true;

        for (let i = 1; i <= 4; i++) {

            if (question['option' + i].length === 0) {
                warningToast(`Add text at option ${i}`);
                flag = false;
                return;
            }
        }

        if (flag && question.answer.length === 0) {
            warningToast("Select right answer options")
            return;
        }



        const headers = {
            'Authorization': 'Bearer my-token',
            'My-Custom-Header': 'foobar'
        };


        axios.post('https://hidden-ocean-35645.herokuapp.com/add-question', question, { headers })
            .then(response => {
                console.log('response: ', response);

                if (response.data.acknowledged) {

                    successToast("Successfully new question added!");

                    setTimeout(() => {
                        navigate('/')


                    }, 2000);



                }
            });




    }




    return (
        <div className='bg-white w-full h-full py-10 '>

            <div className='px-10'>


                <div className='flex justify-between mx-5 items-center border-b-2 border-b-gray-400  py-5'>

                    <h1 className=''>Socratease Quiz</h1>

                    <div className='flex items-center'>
                        <FiSettings className='cursor-pointer' />
                        <div className='flex items-center mx-5 cursor-pointer active:bg-green-200 px-2'>
                            <HiSaveAs />
                            Save
                        </div>





                        <h1 onClick={handleSave} className='active:bg-green-200 rounded-md uppercase bg-[#4ca667] px-3 py-1 text-sm text-white cursor-pointer'>save & back</h1>
                    </div>





                </div>


                <div className='flex flex-col items-start  mx-5 gap-5 border-2 border-gray-200 my-10 px-5  py-5 shadow-md'>

                    <div className='flex justify-between items-center w-full'>

                        <div className='flex items-center gap-2'>
                            <CgMenuGridO size={25} />

                            <h1>Question </h1>
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

                            <input onChange={setQuestionPoint} className='bg-transparent w-12 border-2 border-gray-200' type="number" name="point" id="point" />

                        </div>


                    </div>


                    {/* New question  */}
                    <div className='w-full'>

                        {
                            questionType === 'mcq' ? <CreateShortQuestion question={question} setQuestion={setQuestion} /> : <CreateTextQuestion question={question} setQuestion={setQuestion} />
                        }



                    </div>





                </div>











            </div>

        </div>
    );
};

export default NewTest;