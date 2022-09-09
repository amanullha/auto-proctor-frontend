import React from 'react';
import { MdOutlineNotificationsActive } from 'react-icons/md'
import { BiMenu } from 'react-icons/bi'
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {



    const headerList = <ul className=' items-center gap-5 hidden lg:flex'>

        <li className='cursor-pointer font-bold tracking-wide text-lg'> <NavLink to="/pricing">Pricing</NavLink> </li>
        <li className='cursor-pointer font-bold tracking-wide text-lg'> <NavLink to="/faqs">FAQs</NavLink> </li>
        <li className='cursor-pointer font-bold tracking-wide text-lg'> <NavLink to="/help">Help</NavLink> </li>

    </ul>





    return (
        <div className='bg-[#023059] text-white hero fixed top-0 z-50 shadow-lg'>

            <div className="navbar px-8 mx:px-12 lg:px-16">




                <div className="flex-1 gap-2 items-center">

                    <div className='lg:hidden z-50'>
                        <label htmlFor="my-drawer-2" className=" swap swap-rotate pt-2 mr-2">

                            <BiMenu size={30} />

                        </label>
                    </div>

                    <Link to="/" className='flex items-center gap-3'>
                        <img className='w-8' src='https://cdn.autoproctor.co/static/img/icons/ap-logo.svg' alt="" srcSet="" />

                        <a className="tracking-wider" style={{ fontFamily: 'Montserrat', fontSize: '30px' }}>AutoProctor</a>
                    </Link>

                </div>


                <div className="flex-none gap-5">



                    {headerList}

                    <div className="dropdown dropdown-end flex gap-5">






                        <label tabIndex="0" className='hidden lg:block' >
                            <div className="font-bold tracking-wide text-lg">
                                Profile
                            </div>
                        </label>


                        <ul tabIndex="0" className=" mt-9 p-2 shadow menu menu-compact dropdown-content text-white rounded-box w-52 bg-[#023059]">

                            <li>
                                <a className="justify-between ">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>


                        </ul>

                        <div className='lg:hidden'>
                            <MdOutlineNotificationsActive size={25} />
                        </div>
                    </div>





                </div>


            </div>

        </div>
    );
};

export default NavBar;