import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';
import { InfinitySpin } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const AllQuestions = () => {


    const [questionType, setQuestionType] = useState('all');
    const [deleteQuestionID, setDeleteQuestionID] = useState('');

    const handleTypeChange = e => {

        setQuestionType(e.target.value);
    }




    const { isLoading, error, data: questions, refetch } = useQuery('repoData', () =>
        fetch(`https://hidden-ocean-35645.herokuapp.com/get-all-questions?questionType=${questionType}`).then(res =>
            res.json()
        ))


    useEffect(() => {
        refetch();
    }, [questionType])





    const handleQuestionDelete = () => {


        const _id = deleteQuestionID;

        const headers = {
            'Authorization': 'Bearer my-token',
            'My-Custom-Header': 'foobar'
        };
        axios.delete(`https://hidden-ocean-35645.herokuapp.com/delete-question?deleteQuestionId=${_id}`, { headers })
            .then((res) => {

                console.log("delete response: ", res);

                if (res.data.deletedCount === 1) {

                    toast.success("Question deleted Successfully!");
                    refetch();
                }

            });


    }




    if (isLoading) {

        return (
            <div className='bg-white w-full h-full py-10 '>

                <div className='px-10 flex justify-center items-center'>

                    <InfinitySpin
                        width='200'
                        color="#4fa94d"
                    />

                </div></div>

        )
    }
    if (error) {

        return (
            <div className='bg-white w-full h-full py-10 '>

                <div className='px-10 flex justify-center items-center'>

                    <p className='text-red-600 text-center'>{error?.message}</p>

                </div></div>

        )
    }

    console.log(questions);

    return (
        <div className='bg-white w-full h-full py-10 '>

            <div className='px-10'>

                <div className='flex justify-between items-center w-full'>

                    <div className='flex items-center gap-2'>
                        <CgMenuGridO size={25} />

                        <h1>Questions </h1>
                    </div>

                    <div className='flex items-center'>

                        <select onChange={handleTypeChange} className='bg-transparent pl-2 pr-5 py-1 border-2 border-gray-200' name="questionType" id="cars">
                            <option selected value="all">All</option>
                            <option value="mcq">MCQ</option>
                            <option value="textQuestion">Short Text</option>

                        </select>

                        <AiOutlineQuestionCircle className=' ml-2 text-[#60a5fa]' />


                    </div>



                </div>


                <div>





                    <div className="overflow-x-auto py-10">


                        <table className="table w-full py-5">
                            {/* <!-- head --> */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Question Title</th>
                                    <th>Point</th>
                                    <th>Question Type</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>


                                {
                                    questions?.map((q, i) => {
                                        return (
                                            <tr>
                                                <th>{i + 1}</th>
                                                <td>{q.title}</td>
                                                <td>{q.point}</td>
                                                <td>{q.questionType}</td>
                                                <td >
                                                    <label
                                                        onClick={() => setDeleteQuestionID(q._id)}
                                                        htmlFor="question-delete-modal"
                                                        className='hover:bg-red-100 hover:text-black px-3 py-1 rounded-xl cursor-pointer active:bg-red-800 active:text-white select-none'>Delete</label>

                                                </td>
                                            </tr>
                                        )

                                    })
                                }



                            </tbody>
                        </table>
                    </div>



                </div>














                <input type="checkbox" id="question-delete-modal" className="modal-toggle" />


                <div className="modal">

                    <div className="modal-box">

                        <h3 className="font-bold text-lg">Are you sure?</h3>



                        <div className="modal-action">


                            <label htmlFor="question-delete-modal" className="btn bg-green-700 outline-none border-0 px-5">NO</label>
                            <label onClick={handleQuestionDelete} htmlFor="question-delete-modal" className="btn bg-red-700 outline-none border-0 px-5">YES</label>
                        </div>

                    </div>


                </div>








            </div>
        </div >
    );
};

export default AllQuestions;