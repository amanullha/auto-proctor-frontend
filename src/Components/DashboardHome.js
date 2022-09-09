import React from 'react';
import { BsShieldFillCheck, BsStopwatchFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

const DashboardHome = () => {

    const navigate = useNavigate();

    const handleCreateTest = () => {
        navigate('/dashboard/create-test')
    }


    return (
        <div className='bg-[#e5e5e5] w-full h-full py-10 '>

            <div>


                <div className='flex   justify-evenly'>


                    <div className='bg-white px-4 py-2 flex flex-col md:flex-row  items-center gap-2 rounded-lg'>
                        <div className='flex items-center gap-2'>
                            <h1>Balance: </h1>
                            <BsStopwatchFill />
                            <h1>Timer: 20</h1>

                        </div>
                        <div className='flex items-center gap-2'>

                            <BsShieldFillCheck />
                            <h1>Proctor: 25</h1>

                        </div>

                    </div>




                    <div>
                        <button className='active:bg-gray-400 cursor-pointer  rounded-2xl mx-2 bg-[#96d9cc] text-black px-5 py-2 outline-none'>Subscribe</button>
                        <button onClick={handleCreateTest} className='active:bg-gray-400 rounded-2xl mx-2 bg-[#96d9cc] text-black px-5 py-2'>Create Test</button>

                    </div>
                </div>






            </div>

        </div>
    );
};

export default DashboardHome;