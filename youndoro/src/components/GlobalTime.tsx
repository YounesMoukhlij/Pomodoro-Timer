import { useState, useEffect } from "react";

const timezones = [
  { label: "Local Time", value: Intl.DateTimeFormat().resolvedOptions().timeZone },
  { label: "GMT+0 (UTC)", value: "UTC" },
  { label: "GMT+1 (London)", value: "Europe/London" },
  { label: "GMT+2 (Cairo)", value: "Africa/Cairo" },
  { label: "GMT+3 (Moscow)", value: "Europe/Moscow" },
  { label: "GMT+5 (Pakistan)", value: "Asia/Karachi" },
  { label: "GMT+8 (Beijing)", value: "Asia/Shanghai" },
  { label: "GMT+9 (Tokyo)", value: "Asia/Tokyo" },
  { label: "GMT-5 (New York)", value: "America/New_York" },
  { label: "GMT-8 (Los Angeles)", value: "America/Los_Angeles" },
];

export default function GlobalTime() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timezone, setTimezone] = useState(timezones[0].value);

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white bg-black h-full w-full flex flex-col items-center justify-center gap-5 p-5">
      <h1 className="text-3xl font-bold mb-4">Global Time</h1>
      <select
        className="text-white  cursor-pointer border-2 p-4 rounded-xl mb-4 pr-4 "
        value={timezone}
        onChange={e => setTimezone(e.target.value)}
      >
        {timezones.map(tz => (
          <option key={tz.value} value={tz.value}>{tz.label}</option>
        ))}
      </select>
      <div className="text-5xl font-mono">
        {currentTime.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
          timeZone: timezone,
        })}
      </div>
      <div className="text-xl mt-2">
        {currentTime.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: timezone,
        })}
      </div>
    </div>
  );
}
