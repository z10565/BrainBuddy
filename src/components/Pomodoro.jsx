import React, { useState, useEffect } from "react";

const PomodoroTimer = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes
  const [isRunning, setIsRunning] = useState(false);
  const [session, setSession] = useState("Focus");

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timer);
      const nextSession = session === "Focus" ? "Break" : "Focus";
      const nextTime = nextSession === "Focus" ? 25 * 60 : 5 * 60;
      setSession(nextSession);
      setTimeLeft(nextTime);
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, session]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSession("Focus");
    setTimeLeft(25 * 60);
  };

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div className="text-center p-4 border rounded shadow-md max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-2">Pomodoro Timer</h2>
      <p className="text-lg mb-4">{session} Session</p>
      <div className="text-4xl font-mono mb-4">{formatTime(timeLeft)}</div>
      <div className="space-x-2">
        <button
          onClick={toggleTimer}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={resetTimer}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default PomodoroTimer;