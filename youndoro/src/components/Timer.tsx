
import { useState, useRef } from "react";


export default function Timer()
{
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  // In browsers, setInterval returns a number, not NodeJS.Timeout
  const intervalRef = useRef<number | null>(null);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const start = () => {
    if (isRunning) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const pause = () => {
    setIsRunning(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const reset = () => {
    setIsRunning(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setSeconds(0);
  };

  return (
    <div className="text-white bg-black h-full w-full flex-col md:flex-row flex items-center justify-center gap-5 p-5">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold">Timer</h1>
        <div className="text-6xl font-mono">{formatTime(seconds)}</div>
        <div className="flex gap-4 mt-4">
          <button
            onClick={start}
            disabled={isRunning}
            className="bg-green-500 px-4 py-2 rounded font-bold disabled:opacity-50"
          >
            Start
          </button>
          <button
            onClick={pause}
            disabled={!isRunning}
            className="bg-yellow-500 px-4 py-2 rounded font-bold disabled:opacity-50"
          >
            Pause
          </button>
          <button
            onClick={reset}
            className="bg-red-500 px-4 py-2 rounded font-bold"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

