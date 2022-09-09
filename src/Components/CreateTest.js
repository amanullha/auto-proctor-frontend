import React, { useState } from 'react';
import { RiErrorWarningLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';

const CreateTest = () => {

    const [type, setType] = useState('socratease');


    const [quiz, setQuiz] = useState(null);

    const navigate = useNavigate();


    const onSubmit = e => {

        e.preventDefault();


        const data = { type, quiz };
        if (data.type === 'socratease' && data.quiz === 'createQuiz') {

            navigate('/dashboard/new-test')
        }
    }




    const handleQuizOnCng = (e) => {
        setQuiz(e.target.value);
    }

    const handleTypeOnCng = (e) => {
        setType(e.target.value);
    }

    return (
        <div className='bg-[#e5e5e5] w-full h-full py-10 '>

            <div className='px-10'>


                <div>

                    <h1 className='text-lg border-b-2 border-gray-300 py-2'>Create Test</h1>

                    <div className='flex items-center gap-1 py-5 text-[#32b3eb]'>
                        <RiErrorWarningLine title='How to create a TEST ?' />
                        <h1>How to Create a Socratease Test?  </h1>
                    </div>

                    <p>Socratease Quizzes are better than Google Forms. Try the <a href="http://" className='text-[#32b3eb]'>Demo Test</a> to see why. Watch the video below to see how to create Socratease Quizzes on AutoProctor</p>



                    <div className='  flex justify-center py-10'>

                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/GMbWW9h9s4g" title="Socratease Quizzes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>

                    </div>





                </div>


                <div className='bg-white py-10 px-5'>

                    <form onSubmit={onSubmit} className="flex flex-col gap-3 items-start">

                        <div className='flex gap-5  md:gap-20'>


                            <div className="flex flex-col gap-5">
                                <label>Test Type</label>
                                <label>Quiz</label>


                            </div>




                            <div className="flex flex-col gap-5 ">

                                <select onChange={handleTypeOnCng} className='px-5 py-1 border-2 bg-transparent '>
                                    <option value="socratease">Socratease Quiz</option>
                                    <option value="googleTest">Google Test</option>
                                    <option value="microsoftTest">Microsoft Test</option>
                                    <option value="otherTest">Other</option>

                                </select>

                                <select onChange={handleQuizOnCng} className='px-5 py-1 border-2 bg-transparent '>



                                    <option value="none" selected disabled hidden />

                                    <option className='text-black font-bold' disabled>New Quizzes</option>

                                    <option className='' value="createQuiz">Create Quiz</option>



                                </select>
                            </div>
                        </div>


                        {
                            quiz ? <input className='bg-[#96d9cc] px-8 rounded-2xl my-5 btn outline-none border-0 text-black hover:text-white' type="submit" />
                                :
                                <input className='bg-[#96d9cc] px-8 rounded-2xl my-5 btn outline-none border-0 text-black hover:text-white' type="submit" disabled />
                        }

                    </form>

                </div>








            </div>

        </div>
    );
};

export default CreateTest;