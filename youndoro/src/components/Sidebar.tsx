import { HiChevronRight } from "react-icons/hi2";
import { GiTomato } from "react-icons/gi";
import { IoTime, IoTimer, IoCalendar } from "react-icons/io5";
import { Link } from "react-router-dom";

interface SidebarProps {
  isActive: boolean;
  setActive: (value: boolean) => void;
}

export default function Sidebar({ isActive, setActive }: SidebarProps) {
  if (isActive) {
    return (
      <div className="bg-zinc-900 w-[100%] h-[100%]  self-start border-r-2 border-gray-500 transition-transform duration-500 ease-in-out">
        <div className="p-3 flex justify-start  items-center h-[10%]">
          <button
            onClick={() => setActive(!isActive)}
            className="cursor-pointer text-white hover:bg-gray-600 p-3 border-2 border-gray-500 rounded-xl transition-colors"
          >
            <HiChevronRight className="w-4 h-4 rotate-180" />
          </button>
        </div>
        <div className="h-[90%] flex   flex-col text-white space-y-4 justify-start   pt-5">
          <Link
            to="/"
            className="cursor-pointer flex   flex-row gap-4 items-center grp p-3 pl-5 text-gray-400 hover:text-white  transition-all duration-500 cursor-pointer"
          >
            <GiTomato className="w-8 h-8" />
            <h1 className="text-l font-bold ">Pomodoro</h1>
          </Link>
          <Link
            to="/GlobalTime"
            className="cursor-pointer flex flex-row gap-4 items-center  grp p-3 pl-5 text-gray-400 hover:text-white transition-all duration-500 cursor-pointer"
          >
            <IoTime className="w-8 h-8" />
            <h1 className="text-l font-bold ">Global time</h1>
          </Link>
          <Link
            to="/DailyPlanner"
            className="cursor-pointer flex flex-row gap-4 items-center  grp p-3 pl-5 text-gray-400 hover:text-white transition-all duration-500 cursor-pointer"
          >
            <IoCalendar className="w-8 h-8" />
            <h1 className="text-l font-bold ">Daily Planner</h1>
          </Link>
            <Link to="/Timer" className="cursor-pointer flex flex-row gap-4 items-center  grp p-3 pl-5 text-gray-400 hover:text-white transition-all duration-500 cursor-pointer">
              <IoTimer className="w-8 h-8" />
              <h1 className="text-l font-bold ">Timer</h1>
            </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 w-[100%] h-[100%] self-start border-r-2 border-gray-500">
      <div className="p-2 flex justify-center items-center h-[10%]">
        <button
          onClick={() => setActive(!isActive)}
          className="cursor-pointer text-white hover:bg-gray-600 p-3 border-2 border-gray-500 rounded-xl transition-colors"
        >
          <HiChevronRight className="w-4 h-4" />
        </button>
      </div>
      <div className="h-[90%] flex items-center flex-col text-white space-y-4  justify-start pt-5">
        <div className=" p-3 text-gray-400 hover:text-white  rounded-lg transition-all duration-200 cursor-pointer">
          <Link to="/">
            <GiTomato className="w-8 h-8" />
          </Link>
        </div>
        <div className=" p-3 text-gray-400 hover:text-white  rounded-lg transition-all duration-200 cursor-pointer">
          <Link to="/GlobalTime">
            <IoTime className="w-8 h-8" />
          </Link>
        </div>
        <div className=" p-3 text-gray-400 hover:text-white  rounded-lg transition-all duration-200 cursor-pointer">
          <Link to="/DailyPlanner">
            <IoCalendar className="w-8 h-8" />
          </Link>
        </div>
        <div className=" p-3 text-gray-400 hover:text-white  rounded-lg transition-all duration-200 cursor-pointer">
          <Link to="/Timer">
            <IoTimer className="w-8 h-8" />
          </Link>
        </div>
      </div>
    </div>
  );
}
