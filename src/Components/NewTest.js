import React, { useState } from 'react';
import { FiSettings } from 'react-icons/fi'
import { HiSaveAs } from 'react-icons/hi'
import { BsFileEarmarkPlus } from 'react-icons/bs'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import NewQuestion from './NewQuestion';
import Drag from './Drag';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
let questionId = 2;


const NewTest = () => {


    const questionStructure = {
        questionID: 1,
        title: '',
        options: ["", ""],
        answer: [],
        questionType: "mcq",
        point: 1,

    }
    const [questions, setQuestions] = useState([{ ...questionStructure }]);


    const [dragItemIndex, setDragItemIndex] = useState();
    const [dragOverItemIndex, setDragOverItemIndex] = useState();

    const navigate = useNavigate();

    // console.log(dragOverItemIndex);

    const addQuestion = () => {

        const newQ = { ...questionStructure };

        newQ.questionID = questionId;
        questionId = questionId + 1;

        const updateQustions = [...questions, newQ];

        setQuestions(updateQustions);

    }

    const deleteQuestion = (qId) => {


        const updateQustions = questions.filter(q => q.questionID !== qId);

        setQuestions(updateQustions);

    }



    const addQuestionTitle = (event) => {

        const key = event.key;
        const id = event.target.id;

        const _questions = [...questions];



        if (key === 'Backspace') {

            let len = _questions[id]?.title?.length;

            _questions[id].title = _questions[id]?.title?.slice(0, len - 1);
        }
        else if (key) {

            _questions[id].title = _questions[id]?.title + key;

        }
        setQuestions(_questions);



    }

    const handleQuestionOptions = ({ questionId, updateOptions }) => {

        const _questions = [...questions];

        _questions[questionId].options = [...updateOptions];

        setQuestions(_questions);

    }

    const handleQuestionAnswer = ({ questionId, updateAnswer }) => {

        const _questions = [...questions];

        _questions[questionId].answer = [...updateAnswer];

        setQuestions(_questions);


        console.log("checked: ", _questions);

    }

    const handleQuestionPoint = ({ questionId, updatePoint }) => {

        const _questions = [...questions];

        _questions[questionId].point = parseInt(updatePoint);

        setQuestions(_questions);

    }
    const handleQuestionType = ({ questionId, updateQuestionType }) => {

        const _questions = [...questions];

        _questions[questionId].questionType = updateQuestionType;

        setQuestions(_questions);

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




    const saveQuestions = () => {


        const _questions = [...questions];

        _questions.map((question, serial) => {

            if (parseInt(question?.point) <= 0) {
                warningToast("Add some points to the question number ", serial + 1, ' !');
                return;
            }
            else if (question?.title?.length === 0) {
                warningToast("Add question title to the question number ", serial + 1);
                return;
            }


            let len = 0;

            question?.options?.map(a => {

                console.log("text: ", a);

                if (a.length === 0) len++;
            })


            if (len === question?.options?.length) {

                warningToast("Add some options to the question number ", serial + 1);
                return;
            }

            if (question?.answer?.length === 0) {
                warningToast("Select right option/options to the question number ", serial + 1);
                return;
            }



        })


        const headers = {
            'Authorization': 'Bearer my-token',
            'My-Custom-Header': 'foobar'
        };


        // axios.post('https://hidden-ocean-35645.herokuapp.com/add-questions', questions, { headers })


        axios.post('https://hidden-ocean-35645.herokuapp.com/add-questions', questions, { headers })
            .then(response => {
                console.log('response: ', response);

                if (response.data.acknowledged) {

                    successToast("Successfully new questions added!");

                    setTimeout(() => {
                        navigate('/')


                    }, 1000);



                }
            });






    }










    // Drag and Drop functions start here 


    const handleDragStart = index => {

        setDragItemIndex(index)

    };

    const handleDragOver = event => {
        event.preventDefault();
    }

    const handleDrop = () => {


        const _questions = [...questions];


        const moveItem = _questions.splice(dragItemIndex, 1)[0];


        _questions.splice(dragOverItemIndex, 0, moveItem);


        setQuestions(_questions);

    }

    const handleDragEnter = index => {
        // if (index)
        setDragOverItemIndex(index)
        //  else return;

    }

    const handleDragLeave = (event) => {
        setDragOverItemIndex(undefined)
    }

    const handleDragEnd = event => {
        setDragItemIndex(undefined);
        setDragOverItemIndex(undefined);
    }







    return (
        <div className='  w-full h-full py-10 '>

            <div className='px-10  max-w-[1000px] pb-20'>


                <div className='flex justify-between mx-5 items-center border-b-2 border-b-gray-400  py-5'>

                    <h1 className='select-none'>Socratease Quiz</h1>

                    <div className='flex items-center'>
                        <FiSettings className='cursor-pointer' />
                        <div className='flex items-center mx-5 cursor-pointer active:bg-green-200 px-2 select-none'>
                            <HiSaveAs />
                            Save
                        </div>





                        <h1 onClick={saveQuestions} className='active:bg-green-200 rounded-md uppercase bg-[#4ca667] px-3 py-1 text-sm text-white cursor-pointer'>save & back</h1>
                    </div>





                </div>








                <div className=''>

                    {
                        questions.map((data, index) =>
                            <NewQuestion

                                handleDragStart={handleDragStart}
                                handleDragOver={handleDragOver}
                                handleDrop={handleDrop}
                                handleDragEnter={handleDragEnter}
                                handleDragLeave={handleDragLeave}
                                handleDragEnd={handleDragEnd}

                                questionSerial={index}
                                question={data}
                                key={index}

                                deleteQuestion={deleteQuestion}

                                addQuestionTitle={addQuestionTitle}
                                handleQuestionOptions={handleQuestionOptions}
                                handleQuestionAnswer={handleQuestionAnswer}
                                handleQuestionPoint={handleQuestionPoint}
                                handleQuestionType={handleQuestionType}



                            />



                        )


                    }





                </div>




                <div className='flex gap-5 justify-center my-10'>
                    <button onClick={addQuestion} className='bg-[#e5e7eb8d] hover:bg-[#E5E7EB] flex items-center gap-2 px-5 py-2  rounded-md'>
                        <BsFileEarmarkPlus />
                        <p className='text-gray-500'>Add Question</p>
                    </button>

                    <button onClick={saveQuestions} className='bg-[#733cf3] hover:bg-[#8b5cf6] text-white flex items-center gap-2 px-5 py-2 rounded-md select-none'>
                        <AiOutlineCloudUpload size={25} />
                        <p>Save Questions </p>
                    </button>

                </div>






            </div>

        </div>
    );
};





// function NewQuestion({ handleDragStart, handleDragOver, handleDrop, handleDragEnter, handleDragLeave, handleDragEnd, index, question }) {

//     console.log("in fun ", question);

//     return (
//         <div draggable className='flex gap-5 bg-green-300 my-5'>


//             <p
//                 draggable
//                 onDragStart={() => handleDragStart(index)}
//                 onDragOver={handleDragOver}
//                 onDrop={() => handleDrop(index)}
//                 onDragEnter={() => handleDragEnter(index)}
//                 onDragLeave={handleDragLeave}
//                 onDragEnd={handleDragEnd}
//                 className="cursor-move py-2 px-5 bg-slate-500 "

//             >=</p>
//             <h1>{question?.questionID}</h1>

//         </div>
//     )
// }



export default NewTest;