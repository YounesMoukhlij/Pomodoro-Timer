import { HiOutlineArrowsPointingOut, HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { FaRegSquare, FaRegCheckSquare } from "react-icons/fa";
import { IoCalendar } from "react-icons/io5";
import { useState, useEffect } from "react";

export default function Content() {
  const [isWide, setWide] = useState(false);
  const [timer, setTimer] = useState(25 * 60);
  const [mode, isMode] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setPause] = useState(false);
  const [progress, setProgress] = useState(0);

  function formatTime(seconds: number) {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");

    return `${m} : ${s}`;
  }

  function resetTime() {
    if (mode == "focus") setTimer(25 * 60);
    else if (mode == "short") setTimer(5 * 60);
    else if (mode == "long") setTimer(10 * 60);
  }

  const getTotalTime = () => {
    if (mode === "focus") return 25 * 60;
    if (mode === "short") return 5 * 60;
    if (mode === "long") return 10 * 60;
    return 25 * 60; // default
  };

  useEffect(() => {
    if (!isRunning) return;

    if (timer > 0) {
      const totalTime = getTotalTime();
      setProgress(((totalTime - timer) / totalTime) * 100);

      if (!isPaused) {
        const interval = setInterval(() => {
          setTimer((prev) => {
            return prev - 1;
          });
        }, 1000);

        return () => clearInterval(interval);
      }
    } else {
      setIsRunning(false);
    }
  }, [timer, isRunning, isPaused, progress]);

  return (
    <div
      className={`text-white  bg-black h-full w-full flex-col md:flex-row flex items-center justify-center  gap-5 p-5 `}
    >
      {/* <div className="bg-zinc-900 border-2 border-gray-400  w-full md:w-[50%] h-[100%] rounded-3xl flex flex-col justify-center items-center">
        <div className="p-5 w-[100%] h-[10%] w-full  flex  flex-row items-center justify-between overflow-scroll">
          <div className="w-[50%] h-[100%] flex items-center p-2  gap-5">
            <div className="flex items-center justify-center ">
              <button className="flex items-center justify-center gap-2 rounded-lg bg-gray-700 p-2 cursor-pointer">
                <FaRegSquare className="w-5 h-5 text-white" />
                <h1>pending</h1>
              </button>
            </div>
            <div>
              <button className="flex items-center justify-center gap-2 cursor-pointer">
                <FaRegCheckSquare className="w-5 h-5 text-white" />
                <h1>Completed</h1>
              </button>
            </div>
          </div>
          <div className=" w-[50%] h-[100%]  flex items-center justify-end gap-2">
            <button className="flex items-center justify-center gap-2 p-2 bg-gray-700 rounded-lg cursor-pointer">
              <IoCalendar className="w-5 h-5 text-white" />
              <h2>21 Nov</h2>
            </button>
            <button className="flex items-center justify-center cursor-pointer">
              <HiChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button className="flex items-center justify-center cursor-pointer">
              <HiChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
        <div className="h-[90%] w-full  flex items-center justify-center gap-1">
          <div className="p-5 gap-3 h-[50%] w-[50%] text-2xl flex flex-col justify-center items-center">
            <FaRegCheckSquare className="w-10 h-10 text-gray-500 opacity-50" />
            <h1 className="opacity-70 text-gray-500 text-2xl">no Tasks Today</h1>
            <button className="cursor-pointer border-b border-b-gray-200">
              <h2 className="text-underline text-3xl">Add a new Task</h2>
            </button>
          </div>
        </div>
      </div> */}
      <div
        className={`bg-zinc-900  border-2 border-gray-400 w-full md:w-[50%] h-[100%] rounded-3xl flex flex-col justify-center items-center`}
      >
        <div className="p-5 w-[100%] h-[10%] w-full  flex  flex-row items-center justify-between">
          <div
            className={` w-[100%] h-[100%]  flex items-center justify-end gap-2`}
          >
            <button className="flex items-center justify-center gap-2 p-2   cursor-pointer">
              <HiOutlineArrowsPointingOut
                className={` w-6 h-6 text-gray-500`}
                onClick={() => {
                  setWide(!isWide);
                }}
              />
            </button>
          </div>
        </div>

        {/* left section // down */}
        <div className="h-[90%] w-full  flex items-center justify-center gap-1 ">
          <div className="p-5 gap-3   h-[90%] w-[90%] text-2xl flex flex-col justify-center items-center">
            <div className="flex justify-evenly items-center   h-[10%] w-[100%]">
              <h1
                className={` text-sm font-bold md:text-xl p-3 rounded-xl text-gray-400 cursor-pointer ${mode == "focus" ? "bg-gray-800" : ""} `}
                onClick={() => {
                  setTimer(25 * 60);
                  isMode("focus");
                  setIsRunning(false);
                }}
              >
                Focus
              </h1>
              <h1
                className={`text-sm font-bold md:text-xl p-3 rounded-xl text-gray-400 cursor-pointer ${mode == "short" ? "bg-gray-800" : ""} `}
                onClick={() => {
                  setTimer(5 * 60);
                  isMode("short");
                  setIsRunning(false);
                }}
              >
                Short Break
              </h1>
              <h1
                className={`text-sm font-bold md:text-xl p-3 rounded-xl text-gray-400 cursor-pointer ${mode == "long" ? "bg-gray-800" : ""} `}
                onClick={() => {
                  setTimer(10 * 60);
                  isMode("long");
                  setIsRunning(false);
                }}
              >
                Long Break
              </h1>
            </div>
            <div className="h-[30%] w-full flex-col flex items-center justify-center">
              <h1 className="cursor-pointer text-5xl font-bold md:text-7xl">
                {formatTime(timer)}
              </h1>
            </div>
            <div className="w-[80%] h-2 bg-gray-800 rounded-full ">
              <div
                className="h-2 bg-yellow-400 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="flex items-center justify-center gap-3 h-[30%] w-full  ">
              <h1
                className="text-sm font-bold md:text-xl  hover:bg-gray-700 hover:rounded-xl text-gray-400 cursor-pointer p-2"
                onClick={() => setTimer(timer + 25 * 60)}
              >
                + 25 min
              </h1>
              <h1
                className="text-sm font-bold md:text-xl  hover:bg-gray-700 hover:rounded-xl text-gray-400 cursor-pointer p-2"
                onClick={() => setTimer(timer + 10 * 60)}
              >
                + 10 min
              </h1>
              <h1
                className="text-sm font-bold md:text-xl  hover:bg-gray-700 hover:rounded-xl text-gray-400 cursor-pointer p-2"
                onClick={() => setTimer(timer + 5 * 60)}
              >
                + 5 min
              </h1>
              <h1
                className="text-sm font-bold md:text-xl  hover:bg-gray-700 hover:rounded-xl text-gray-400 cursor-pointer p-2"
                onClick={() => setTimer(timer + 1 * 60)}
              >
                + 1 min
              </h1>
            </div>
            <div className="h-[10%] w-full  flex justify-center items-center">
              <button
                className={`bg-gray-700 w-[20%] text-sm font-bold md:text-xl rounded-lg cursor-pointer p-2 ${isRunning ? "hidden" : "block"}`}
                onClick={() => setIsRunning(true)}
              >
                Start
              </button>

              <button
                className={`bg-gray-700 w-[20%]  rounded-lg text-sm font-bold md:text-xl cursor-pointer p-2 m-2 ${isRunning ? "block" : "hidden"}`}
                onClick={() => {
                  setPause(!isPaused);
                }}
              >
                {isPaused ? "Resume" : "Pause"}
              </button>
              <button
                className={`bg-gray-700 w-[20%]  rounded-lg  text-sm font-bold md:text-xl cursor-pointer p-2 m-2 ${isRunning ? "block" : "hidden"}`}
                onClick={() => {
                  setIsRunning(false);
                  resetTime();
                }}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
