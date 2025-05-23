import React, { useState, useEffect, useRef } from 'react';

const Game2 = () => {
  const [score, setScore] = useState(0);
  const [grid, setGrid] = useState(Array(9).fill(null));
  const [timeLeft, setTimeLeft] = useState(30);
  const [level, setLevel] = useState(1);
  const [intervalTime, setIntervalTime] = useState(10000);
  const [isMusicOn, setIsMusicOn] = useState(true);
  const musicRef = useRef(null);
  const [gameOver, setGameOver] = useState(false);


  useEffect(() => {
    musicRef.current = new Audio('/sounds/background.mp3');
    musicRef.current.loop = true;
    musicRef.current.volume = 0.4;

    if (isMusicOn) {
      musicRef.current.play();
    }

    return () => {
      musicRef.current.pause();
    };
  }, [isMusicOn]);

  useEffect(() => {
    if (musicRef.current) {
      if (isMusicOn) {
        musicRef.current.play();
      } else {
        musicRef.current.pause();
      }
    }
  }, [isMusicOn]);

  const handleClick = (type) => {
    if (type === 'smile') {
      setScore(score + 1);
    } else if (type === 'angry') {
      setScore(score - 1);
    }
  };

  useEffect(() => {
    const moleInterval = setInterval(() => {
      const newGrid = Array(9).fill(null).map(() =>
        Math.random() < 0.4 ? (Math.random() < 0.5 ? 'smile' : 'angry') : null
      );
      setGrid(newGrid);
    }, intervalTime);
  
    const countdown = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(moleInterval);
          clearInterval(countdown);
          setGameOver(true); 
          return 0;
        }        
      });
    }, 1000);
  
    return () => {
      clearInterval(moleInterval);
      clearInterval(countdown);
    };
  }, [intervalTime]);
  

  useEffect(() => {
    const newLevel = Math.floor(score / 10) + 1;
    setLevel(newLevel);
    setIntervalTime(Math.max(500, 10000 - newLevel * 100));
  }, [score]);

  if (gameOver) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Game Over!</h1>
        <p className="text-lg mb-6">Your score: {score}</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          Play Again
        </button>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 space-y-6 p-4">
      <h1 className="text-3xl font-bold text-blue-700">Whack-a-Mole 🎯</h1>
      <div className="text-xl">⏱ Time Left: {timeLeft}s</div>
      <div className="text-xl">⭐ Score: {score}</div>
      <div className="text-xl">🎮 Level: {level}</div>

      <button
        onClick={() => setIsMusicOn((prev) => !prev)}
        className="px-4 py-2 bg-yellow-300 rounded-lg shadow hover:bg-yellow-400 transition"
      >
        {isMusicOn ? '🔊 Music On (Click to Mute)' : '🔇 Music Off (Click to Play)'}
      </button>

      <div className="grid grid-cols-3 gap-4">
        {grid.map((type, index) => (
          <button
            key={index}
            onClick={() => type && handleClick(type)}
            className={`w-24 h-24 rounded-full text-3xl transition-all duration-200 ${
              type === 'smile'
                ? 'bg-green-400 hover:scale-110'
                : type === 'angry'
                ? 'bg-red-400 hover:scale-110'
                : 'bg-gray-300'
            }`}
          >
            {type === 'smile' ? '😊' : type === 'angry' ? '😠' : ''}
          </button>
        ))}
      </div>

      {timeLeft === 0 && (
        <div className="mt-4 text-2xl font-semibold text-red-600">Game Over!</div>
      )}
    </div>
  );
};

export default Game2;
