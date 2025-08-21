import { useState, useRef, useEffect } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { FaRepeat } from "react-icons/fa6";
import { GiTomato } from "react-icons/gi";
import { IoTime, IoTimer, IoCalendar } from "react-icons/io5";
import {
  FaUser,
  FaLinkedin,
  FaGithub,
  FaMusic,
  FaBackward,
  FaForward,
  FaPlay,
  FaPause,
} from "react-icons/fa6";

// 1024 katqwad l9adia

export default function Header() {
  const [isBurger, setBurger] = useState(false);
  const [isMusic, setMusic] = useState(false);
  const [tracks, setTracks] = useState<any>(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isLoop, setIsLoop] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [tTime, setTime] = useState("");

  function musicHandler() {
    setMusic(!isMusic);
    if (isMusic == false) fetchMusic();
  }
  const fetchMusic = async () => {
    try {
      let token = import.meta.env.VITE_SONG_API;
      const res = await fetch(
        "https://freesound.org/apiv2/search/text/?query=calm+music&fields=id,name,previews&token=" +
          token
      );

      const response = await res.json();
      setTracks(response);
    } catch {
      console.log("Fetch Failed");
    }
  };

  // Play or pause the audio
  const handlePlayPause = () => {
    if (!tracks?.results?.length) return;
    const url = tracks.results[currentTrackIndex]?.previews["preview-hq-mp3"];
    if (!audioRef.current) {
      audioRef.current = new Audio(url);
      audioRef.current.onended = () => {
        if (isLoop) {
          audioRef.current!.currentTime = 0;
          audioRef.current!.play();
        } else {
          setIsPlaying(false);
        }
      };
      audioRef.current.ontimeupdate = () =>
        setTrackProgress(audioRef.current!.currentTime);
    } else {
      audioRef.current.loop = isLoop;
    }
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Next track
  const handleNext = () => {
    if (!tracks?.results?.length) return;
    let nextIndex = (currentTrackIndex + 1) % tracks.results.length;
    setCurrentTrackIndex(nextIndex);
    setIsPlaying(false);
    setTrackProgress(0);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
  };

  // Previous track
  const handlePrev = () => {
    if (!tracks?.results?.length) return;
    let prevIndex =
      (currentTrackIndex - 1 + tracks.results.length) % tracks.results.length;
    setCurrentTrackIndex(prevIndex);
    setIsPlaying(false);
    setTrackProgress(0);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
  };

  // When track changes, load new audio
  useEffect(() => {
    if (!tracks?.results?.length) return;
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setTrackProgress(0);
    setIsPlaying(false);
  }, [currentTrackIndex, tracks]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Helper to format time
  function formatTime(seconds: number) {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="  border-yellow-200 w-full h-full bg-zinc-900  flex items-center justify-center border-b-2 border-gray-500 transition-scale-10 duration-400">
      <div className=" w-[50%] md:w-[20%]  h-[100%]  flex md:justify-start  md:gap-2  items-center lg:w-[50%]">
        <HiOutlineBars3
          className="cursor-pointer md:hidden text-white w-8 h-8"
          onClick={() => {
            setBurger(!isBurger);
          }}
        />
        <img
          src="./pomodoro.png"
          alt="icon"
          className="w-5 h-5 m-3 md:w-8 md:h-8 md:m-3  md:ml-5  "
        />
        <h1 className="text-gray-300 tracking-widest font-[miniver] font-bold drop-shadow-[0_2px_8px_rgba(251,191,36,0.7)]  text-xl font-bold md:text-2xl">
          YounDoro
        </h1>
      </div>
      <div className="md:w-[80%] h-[100%] w-[50%]  flex p-4 justify-between md:justify-evenly items-center text-gray-400">
        <div className="hidden md:block w-[20%]">
          <button className="cursor-pointer  p-2  hover:text-white rounded-l">
            <a href="https://github.com/YounesMoukhlij/">
              <h2 className="font-poppins font-semibold md:text-xl">
                Portofolio
              </h2>
            </a>
          </button>
        </div>
        <div className="hidden md:block w-[20%]">
          <button className="cursor-pointer   p-2  hover:text-white rounded-l">
            <a href="https://linkedin.com/in/YounesMoukhlij/">
              <h2 className=" font-poppins font-semibold md:text-xl">
                LinkedIn
              </h2>
            </a>
          </button>
        </div>
        <div className="hidden md:block w-[20%]">
          <button className="cursor-pointer  p-2  hover:text-white rounded-l">
            <a href="https://github.com/YounesMoukhlij/">
              <h2 className="font-poppins font-semibold md:text-xl">Github</h2>
            </a>
          </button>
        </div>
        <div
          className={`md:block md:w-[20%] ${
            isMusic ? "text-yellow-100" : "text-gray-400"
          }`}
        >
          <button
            className={`  cursor-pointer  p-2  hover:text-white rounded-l flex  justify-center  items-center gap-2   `}
            onClick={musicHandler}
          >
            <h2 className={`font-poppins font-semibold md:text-xl  `}>Play</h2>
            <FaMusic className="w-4 h-4" />
          </button>
        </div>
        <div className="w-[40%]  md:w-[20%] flex  justify-center items-center">
          <p className="font-poppins font-semibold md:text-xl text-white">
            {tTime}
          </p>
        </div>
      </div>

      {/* Music Section*/}
      <div
        className={` absolute md:top-21 md:right-5 top-1  h-[200px] w-[300px] border-1 border-white bg-gray-200/20 rounded-2xl backdrop-blur-xl  transform-all duration-400 shadow-xl
                ${
                  isMusic
                    ? "  translate-y-20 md:translate-y-1"
                    : " -translate-y-60 md:-translate-y-100"
                }
            `}
      >
        <h1 className="text-white text-sm md:text-l p-5 text-center  overflow-scroll">
          {tracks?.results?.[currentTrackIndex]?.name.split(".mp3")[0] ||
            "Work in Calm"}
        </h1>
        {/* Track progress slider */}
        <div className="flex flex-col items-center w-full px-6 mt-2">
          <input
            type="range"
            min={0}
            max={audioRef.current?.duration || 100}
            value={trackProgress}
            onChange={(e) => {
              if (audioRef.current) {
                audioRef.current.currentTime = Number(e.target.value);
                setTrackProgress(Number(e.target.value));
              }
            }}
            className="outline-none w-full cursor-pointer accent-yellow-500 h-2 w-2 rounded-lg appearance-none bg-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <div className="flex justify-between w-full text-md text-white mt-1">
            <span>{formatTime(trackProgress)}</span>
            <span>{formatTime(audioRef.current?.duration || 0)}</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6 mt-4">
          <button
            className="p-2 hover:bg-gray-300 rounded-full transition-colors"
            onClick={handlePrev}
          >
            <FaBackward className="cursor-pointer w-6 h-6 text-white" />
          </button>
          <button
            className="p-2 hover:bg-gray-300 rounded-full transition-colors"
            onClick={handlePlayPause}
          >
            {isPlaying ? (
              <FaPause className="cursor-pointer w-6 h-6 text-white" />
            ) : (
              <FaPlay className="cursor-pointer w-6 h-6 text-white" />
            )}
          </button>
          <button
            className="p-2 hover:bg-gray-300 rounded-full transition-colors"
            onClick={handleNext}
          >
            <FaForward className="cursor-pointer w-6 h-6 text-white" />
          </button>
          <button
            className={`p-2 rounded-full transition-colors ${
              isLoop ? "bg-yellow-400 text-black" : "hover:bg-gray-300"
            }`}
            onClick={() => setIsLoop((l) => !l)}
            title="Toggle Loop"
          >
            <FaRepeat className="cursor-pointer w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Burger List */}
      <div
        className={`absolute flex flex-col md:hidden top-0 left-0 w-[50%] h-[100%]
                bg-gray-800/70 backdrop-blur-2xl backdrop-saturate-150
                border border-gray-400/30 z-20
                transform transition-transform duration-300 ease-in-out
                ${isBurger ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-3 flex justify-end items-center h-[5%] ">
          <HiOutlineXMark
            className="cursor-pointer md:hidden text-white w-5 h-5"
            onClick={() => setBurger(false)}
          />
        </div>

        <div className="  h-[45%] flex items-center flex-col text-white space-y-4 justify-start pt-5 ">
          <div className="gap-4 w-full flex p-3 text-gray-400 hover:text-white rounded-lg transition-all duration-200 cursor-pointer">
            <GiTomato className="w-6 h-6" />
            <h1 className="text-sm font-bold">Pomodoro</h1>
          </div>
          <div className="gap-4 w-full flex p-3 text-gray-400 hover:text-white rounded-lg transition-all duration-200 cursor-pointer">
            <IoTime className="w-6 h-6" />
            <h1 className="text-sm font-bold">Global time</h1>
          </div>
          <div className="gap-4 w-full flex p-3 text-gray-400 hover:text-white rounded-lg transition-all duration-200 cursor-pointer">
            <IoCalendar className="w-6 h-6" />
            <h1 className="text-sm font-bold">Daily Planner</h1>
          </div>
          <div className="gap-4 w-full flex p-3 text-gray-400 hover:text-white rounded-lg transition-all duration-200 cursor-pointer">
            <IoTimer className="w-6 h-6" />
            <h1 className="text-sm font-bold">Timer</h1>
          </div>
        </div>

        <hr className="mx-5 text-white opacity-50" />

        <div className="h-[45%] flex flex-col   pt-15 text-white space-y-4    border-yellow-500">
          <div className="flex justify-start gap-4 w-full flex p-3 text-gray-400 hover:text-white rounded-lg transition-all duration-200 cursor-pointer">
            <FaUser className="w-6 h-6" />
            <a href="https://github.com/YounesMoukhlij/">
              <h2 className="font-poppins text-sm font-semibold">Portofolio</h2>
            </a>
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
          <h1 className="text-sm font-small text-gray-300">Younes Moukhlij</h1>
        </div>
      </div>
    </div>
  );
}
