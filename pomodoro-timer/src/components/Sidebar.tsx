
import { HiChevronRight } from 'react-icons/hi2'
import { GiTomato } from 'react-icons/gi'
import { IoTime, IoTimer, IoCalendar } from 'react-icons/io5'

interface SidebarProps
{
    isActive: boolean;
    setActive: (value:boolean) => void;
}

export default function Sidebar ({isActive, setActive} :  SidebarProps)
{

    if (isActive)
    {
        return (
            <div className="bg-gray-800 w-[100%] h-[100%]  self-start border-r-2 border-gray-500 transition-transform duration-500 ease-in-out">
                <div className="p-3 flex justify-start  items-center h-[10%]">
                    <button
                        onClick={() => setActive(!isActive)}
                        className="cursor-pointer text-white hover:bg-gray-600 p-3 border-2 border-gray-500 rounded-xl transition-colors"
                        >
                        <HiChevronRight className="w-4 h-4 rotate-180" />
                    </button>
                </div>
                <div className='h-[90%] flex   flex-col text-white space-y-4 justify-start   pt-5'>
                    <div className="cursor-pointer flex flex-row gap-4 items-center grp p-3 pl-5 text-gray-400 hover:text-white  transition-all duration-200 cursor-pointer">
                        <GiTomato className="w-8 h-8" />
                        <h1 className='text-xl font-bold '>Promodoro</h1>
                    </div>
                    <div className="cursor-pointer flex flex-row gap-4 items-center  grp p-3 pl-5 text-gray-400 hover:text-white transition-all duration-200 cursor-pointer">
                        <IoTime className="w-8 h-8" />
                        <h1 className='text-xl font-bold '>Global time</h1>
                    </div>
                    <div className="cursor-pointer flex flex-row gap-4 items-center  grp p-3 pl-5 text-gray-400 hover:text-white transition-all duration-200 cursor-pointer">
                        <IoCalendar className="w-8 h-8" />
                        <h1 className='text-xl font-bold '>Daily Planner</h1>
                    </div>
                    <div className="cursor-pointer flex flex-row gap-4 items-center  grp p-3 pl-5 text-gray-400 hover:text-white transition-all duration-200 cursor-pointer">
                        <IoTimer className="w-8 h-8" />
                        <h1 className='text-xl font-bold '>Timer</h1>
                    </div>
                </div>
            </div>
    )}

        return (
            <div className="bg-gray-800 w-[100%] h-[100%] self-start border-r-2 border-gray-500">
            <div className="p-2 flex justify-center items-center h-[10%]">
                <button
                    onClick={() => setActive(!isActive)}
                    className="cursor-pointer text-white hover:bg-gray-600 p-3 border-2 border-gray-500 rounded-xl transition-colors"
                    >
                    <HiChevronRight className="w-4 h-4" />
                </button>
            </div>
            <div className='h-[90%] flex items-center flex-col text-white space-y-4  justify-start pt-5'>
                <div className=" p-3 text-gray-400 hover:text-white  rounded-lg transition-all duration-200 cursor-pointer">
                    <GiTomato className="w-8 h-8" />
                </div>
                <div className=" p-3 text-gray-400 hover:text-white  rounded-lg transition-all duration-200 cursor-pointer">
                    <IoTime className="w-8 h-8" />
                </div>
                <div className=" p-3 text-gray-400 hover:text-white  rounded-lg transition-all duration-200 cursor-pointer">
                    <IoCalendar className="w-8 h-8" />
                </div>
                <div className=" p-3 text-gray-400 hover:text-white  rounded-lg transition-all duration-200 cursor-pointer">
                    <IoTimer className="w-8 h-8" />
                </div>
            </div>
        </div>
    )
}
