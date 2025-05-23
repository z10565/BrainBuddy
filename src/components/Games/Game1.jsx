import { useState, useEffect } from "react";

const pixelImages = [
  "❤️", "🖤", "⭐", "🌟", "🍀", "🔥", "🎯", "👾"
];

const shuffleArray = (array) => {
  return [...array, ...array]
    .sort(() => Math.random() - 0.5)
    .map((item, index) => ({ id: index, content: item, flipped: false, matched: false }));
};

export default function Game1() {
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    setCards(shuffleArray(pixelImages));
  }, []);

  useEffect(() => {
    if (firstCard && secondCard) {
      setDisabled(true);
      if (firstCard.content === secondCard.content) {
        setCards(prevCards => 
          prevCards.map(card =>
            card.content === firstCard.content
              ? { ...card, matched: true }
              : card
          )
        );
        resetTurn();
      } else {
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map(card =>
              card.id === firstCard.id || card.id === secondCard.id
                ? { ...card, flipped: false }
                : card
            )
          );
          resetTurn();
        }, 1000);
      }
    }
  }, [firstCard, secondCard]);

  const handleCardClick = (card) => {
    if (disabled) return;
    if (card.flipped || card.matched) return;

    setCards(prevCards =>
      prevCards.map(c =>
        c.id === card.id ? { ...c, flipped: true } : c
      )
    );

    if (!firstCard) {
      setFirstCard(card);
    } else {
      setSecondCard(card);
      setMoves(m => m + 1);
    }
  };

  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setDisabled(false);
  };

  const resetGame = () => {
    setCards(shuffleArray(pixelImages));
    setFirstCard(null);
    setSecondCard(null);
    setMoves(0);
    setDisabled(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-pink-300 p-4">
      <h1 className="text-4xl font-bold mb-6 text-pink-700">Memory Match Game</h1>
      <p className="mb-4 text-gray-700">Moves: {moves}</p>

      <div className="grid grid-cols-4 gap-4">
        {cards.map(card => (
          <div
            key={card.id}
            className={`w-20 h-20 flex items-center justify-center rounded-lg text-2xl cursor-pointer transition-transform transform ${
              card.flipped || card.matched ? "bg-white" : "bg-pink-200"
            }`}
            onClick={() => handleCardClick(card)}
          >
            {card.flipped || card.matched ? card.content : ""}
          </div>
        ))}
      </div>

      <button
        onClick={resetGame}
        className="mt-6 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition"
      >
        Reset Game
      </button>
    </div>
  );
}
