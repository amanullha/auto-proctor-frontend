import React from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai'
import { MdAccountCircle, MdArchive, MdShoppingBag } from 'react-icons/md';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { TbCircleDashed } from 'react-icons/tb';
import { BsQuestionDiamondFill } from 'react-icons/bs';

// const Dashboard = ({ children }) => {
const Dashboard = () => {



    const location = useLocation();
    const paths = location.pathname.split('/');
    const path = paths[paths.length - 1];
    // location.pathname

    // const history = useHistory()
    // history.location.pathname

    console.log("loc: ",);
    // console.log("his: ", history);



    // console.log(children);




    const boardList = <ul className=' flex flex-col gap-5 border-b-2 lg:border-b-0 py-5 '>

        {/* <li className='cursor-pointer lg:hidden ml-4 text-black hover:bg-violet-900 '>User</li> */}



        <li className={`lg:hidden cursor-pointer relative hover:bg-violet-900 ${path === 'user' ? 'lg:bg-[#133e64] lg:border-l-4' : ''} hover:bg-[#01213c]`}>



            <NavLink to='' className={`bg-transparent lg:ml-8 mt-[3px] text-black lg:text-white  hover:text-white`}> User</NavLink>


        </li>

        <li className={`cursor-pointer relative hover:bg-violet-900 ${path === '' ? 'lg:bg-[#133e64] lg:border-l-4' : ''} hover:bg-[#01213c]`}>

            <AiFillHome size={50} className='absolute active:bg-transparent  hidden lg:block' />

            <NavLink to='' className={`bg-transparent lg:ml-8 mt-[3px] text-black lg:text-white hover:text-white `}> Home</NavLink>


        </li>

        <li className={`cursor-pointer relative hover:bg-violet-900 ${path === 'all-questions' ? 'lg:bg-[#133e64] lg:border-l-4' : ''} hover:bg-[#01213c]`}>

            <BsQuestionDiamondFill size={50} className='absolute active:bg-transparent  hidden lg:block' />

            <NavLink to='/dashboard/all-questions' className={`bg-transparent lg:ml-8 mt-[3px] text-black lg:text-white hover:text-white `}> All Questions</NavLink>


        </li>
        <li className={`cursor-pointer relative hover:bg-violet-900 ${path === 'archived' ? 'lg:bg-[#133e64] lg:border-l-4' : ''} hover:bg-[#01213c]`}>

            <MdArchive size={50} className='absolute active:bg-transparent  hidden lg:block' />

            <NavLink to='/dashboard/archived' className='bg-transparent lg:ml-8 mt-[3px] text-black lg:text-white hover:text-white'> Archived Tests</NavLink>


        </li>
        <li className={`cursor-pointer relative hover:bg-violet-900 ${path === 'more-features' ? 'lg:bg-[#133e64] lg:border-l-4' : ''} hover:bg-[#01213c]`}>

            <HiOutlineDocumentText size={50} className='absolute active:bg-transparent  hidden lg:block' />

            <NavLink to='/dashboard/more-features' className='bg-transparent lg:ml-8 mt-[3px] text-black lg:text-white hover:text-white'> More Features</NavLink>


        </li>
        {/* <li className='cursor-pointer '>Archived Tests</li> */}
        {/* <li className='cursor-pointer'>More Features</li> */}
    </ul>


    const historyList = <ul className=' flex flex-col gap-5 lg:border-b-0 border-b-2 py-5 lg:py-0'>

        <li className='cursor-pointer relative hover:bg-violet-900'>

            <TbCircleDashed size={50} className='absolute active:bg-transparent hidden lg:block' />

            <NavLink to='' className='bg-transparent lg:ml-8 mt-[3px] text-black lg:text-white'>  Uses</NavLink>


        </li>
        <li className='cursor-pointer relative hover:bg-violet-900'>

            <MdShoppingBag size={50} className='absolute active:bg-transparent  hidden lg:block' />

            <NavLink to='/' className='bg-transparent lg:ml-8 mt-[3px] text-black lg:text-white'>  Purchase History</NavLink>


        </li>
        <li className='cursor-pointer relative hover:bg-violet-900'>

            <MdAccountCircle size={50} className='absolute active:bg-transparent hidden lg:block' />

            <NavLink to='' className='bg-transparent lg:ml-8 mt-[3px] text-black lg:text-white'>  Account</NavLink>


        </li>
        {/* <li className='cursor-pointer'>Usage</li>
        <li className='cursor-pointer'>Purchase History</li>
        <li className='cursor-pointer'>Account</li> */}
    </ul>


    const headerList = <ul className='border-b-2 lg:border-b-0 py-5 lg:hidden'>

        <li className='cursor-pointer'> <NavLink className='bg-transparent text-black' to="/pricing">Pricing</NavLink> </li>
        <li className='cursor-pointer'> <NavLink className='bg-transparent text-black' to="faqs">FAQs</NavLink> </li>
        <li className='cursor-pointer'> <NavLink className='bg-transparent text-black' to="/help">Help</NavLink> </li>

    </ul>


    return (
        <div>
            <div className=' '>



                <div className="drawer drawer-mobile ">


                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />


                    <div className="drawer-content flex flex-col items-center justify-center pt-16 z-50">


                        {/* <!-- Page content here --> */}

                        <Outlet />
                        {/* {children} */}




                        {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                    </div>



                    <div className="drawer-side lg:mt-16">




                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>





                        <ul className="menu overflow-y-auto w-80 lg:bg-[#023059] lg:text-white bg-white mt-16 lg:mt-0 text-black">


                            <div className="lg:hidden m-0 p-0 bg-gradient-to-r from-[#4b60c4] to-[#00a36d]">

                                <Link to="/" className='flex items-center justify-center py-2 gap-3'>

                                    <img className='w-8' src='https://cdn.autoproctor.co/static/img/icons/ap-logo.svg' alt="" srcSet="" />

                                    <a className="tracking-wider" style={{ fontFamily: 'Montserrat', fontSize: '30px' }}>AutoProctor</a>
                                </Link>


                            </div>


                            <ul className=''>
                                {/* <!-- Sidebar content here --> */}
                                {
                                    boardList
                                }

                                {
                                    historyList
                                }

                                {
                                    headerList
                                }

                                <ul className='lg:hidden pl-4 flex flex-col gap-5 py-5'>
                                    <li className='cursor-pointer'>Logout</li>
                                </ul>
                            </ul>



                        </ul>

                    </div>


                </div>

            </div>

        </div>
    );
};

export default Dashboard;