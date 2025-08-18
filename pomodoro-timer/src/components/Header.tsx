import { useState } from 'react'
import { HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2'

import { HiChevronRight } from 'react-icons/hi2'
import { GiTomato } from 'react-icons/gi'
import { IoTime, IoTimer, IoCalendar } from 'react-icons/io5'
import { FaUser, FaLinkedin, FaGithub } from 'react-icons/fa6'

export default function Header ()
{
    const [isBurger, setBurger] = useState(false);

    return (
        <div className=" w-full h-full bg-gray-800  flex items-center justify-center border-b-2 border-gray-500 transition-scale-10 duration-400">
            <div className=" w-[50%] md:w-[30%] h-[100%] pl-5 flex md:justify-start gap-5 md:gap-0 items-center md:w-[40%] lg:w-[50%] ">
                <HiOutlineBars3 className='cursor-pointer md:hidden text-white w-8 h-8' onClick={()=> {setBurger(!isBurger)}}/>
                <img src="./pomodoro.png" alt="icon" className="w-8 h-8 md:m-3 hidden  ml-15  md:block"/>
                <h1 className="text-gray-300 tracking-wide font-mono text-xl font-bold md:text-2xl">Pomodoro</h1>
            </div>
            <div className=" w-[50%] md:w-[80%] h-[100%] flex p-4 justify-between md:justify-evenly items-center text-gray-400 md:w-[60%] lg:w-[50%]">
                <div>
                    <button className="hidden md:block cursor-pointer  p-2  hover:text-white rounded-l">
                        <h2 className="font-poppins font-semibold md:text-xl">Portofolio</h2>
                    </button>
                </div>
                <div>
                    <button className="hidden md:block cursor-pointer   p-2  hover:text-white rounded-l">
                        <h2 className=" font-poppins font-semibold md:text-xl">LinkedIn</h2>
                    </button>
                </div>
                <div>
                    <button className="hidden md:block cursor-pointer  p-2  hover:text-white rounded-l">
                        <h2 className="font-poppins font-semibold md:text-xl">Github</h2>
                    </button>
                </div>
                <div>
                    <p className="font-poppins font-semibold md:text-xl text-white">12:90 PM</p>
                </div>
            </div>




            {/* Burger List */}
            <div className={`absolute flex flex-col md:hidden top-0 left-0 w-[50%] h-[100%]
                bg-gray-800/70 backdrop-blur-2xl backdrop-saturate-150
                border border-gray-400/30 z-20
                transform transition-transform duration-300 ease-in-out
                ${isBurger ? 'translate-x-0' : '-translate-x-full'}`}>

                <div className='p-3 flex justify-end items-center h-[5%] '>
                    <HiOutlineXMark className='cursor-pointer md:hidden text-white w-5 h-5' onClick={() => setBurger(false)}/>
                </div>

                <div className='  h-[45%] flex items-center flex-col text-white space-y-4 justify-start pt-5 '>
                    <div className="gap-4 w-full flex p-3 text-gray-400 hover:text-white rounded-lg transition-all duration-200 cursor-pointer">
                        <GiTomato className="w-6 h-6" />
                        <h1 className='text-sm font-bold'>Pomodoro</h1>
                    </div>
                    <div className="gap-4 w-full flex p-3 text-gray-400 hover:text-white rounded-lg transition-all duration-200 cursor-pointer">
                        <IoTime className="w-6 h-6" />
                        <h1 className='text-sm font-bold'>Global time</h1>
                    </div>
                    <div className="gap-4 w-full flex p-3 text-gray-400 hover:text-white rounded-lg transition-all duration-200 cursor-pointer">
                        <IoCalendar className="w-6 h-6" />
                        <h1 className='text-sm font-bold'>Daily Planner</h1>
                    </div>
                    <div className="gap-4 w-full flex p-3 text-gray-400 hover:text-white rounded-lg transition-all duration-200 cursor-pointer">
                        <IoTimer className="w-6 h-6" />
                        <h1 className='text-sm font-bold'>Timer</h1>
                    </div>
                </div>

                <hr  className='mx-5 text-white opacity-50'/>

                <div className='h-[45%] flex flex-col   pt-15 text-white space-y-4    border-yellow-500'>
                    <div className="flex justify-start gap-4 w-full flex p-3 text-gray-400 hover:text-white rounded-lg transition-all duration-200 cursor-pointer">
                        <FaUser className="w-6 h-6" />
                            <h2 className="font-poppins text-sm font-semibold">Portofolio</h2>
                    </div>
                    <div className="flex justify-start gap-4 w-full flex p-3 text-gray-400 hover:text-white rounded-lg transition-all duration-200 cursor-pointer">
                        <FaLinkedin className="w-6 h-6" />
                            <h2 className=" font-poppins text-sm font-semibold">LinkedIn</h2>
                    </div>
                    <div className="flex justify-start gap-4 w-full flex p-3 text-gray-400 hover:text-white rounded-lg transition-all duration-200 cursor-pointer">
                        <FaGithub className="w-6 h-6" />
                            <h2 className="font-poppins text-sm font-semibold">Github</h2>
                    </div>
                </div>

                <div className="h-[5%] flex flex-col justify-center items-center">
                    <h1 className='text-sm font-small text-gray-300'>Younes Moukhlij</h1>
                </div>

                </div>
            </div>


    )
}
