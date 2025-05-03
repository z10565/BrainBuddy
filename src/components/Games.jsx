import { useNavigate } from 'react-router-dom';
import gameImage from '/src/icons/Games.svg'; 

function Games() {
  const navigate = useNavigate();

  const handleCardClick = (index) => {
    navigate(`/game${index + 1}`);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-8">Choose Your Game</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className="bg-pink-100 p-6 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
          >
            <img src={gameImage} alt={`Game ${index + 1}`} className="w-full h-40 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Games;

