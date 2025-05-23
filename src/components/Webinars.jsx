const webinarLinks = [
    "https://youtu.be/hFL6qRIJZ_Y?si=RAEjv5OQw1qbz5JY", 
    "https://youtu.be/w8JnDhp83gA?si=aqqHufjZ-Epd98tl",
    "https://youtu.be/QkiW1tPP02s?si=1Hf0Jky8XFSJXTf_",
    "https://youtu.be/ouZrZa5pLXk?si=6ANFqdaHkbdJPul0",
    "https://youtu.be/LGzwoPJ3sE0?si=zmUIfPeB4eTmbIVH",
    "https://youtu.be/JiwZQNYlGQI?si=3e5HspcZkxW_-Amo",
  ];
  
  export default function Webinars() {
    return (
      <div className="flex flex-col min-h-screen">
       
        {/* Main */}
        <main className="flex-grow px-6 py-10 flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full">
            {webinarLinks.map((link, idx) => (
              <a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fef4ee] p-6 rounded-lg flex justify-center items-center hover:shadow-lg transition"
              >
                <img
                  src="/icons/Webinars.svg" 
                  alt="Webinar"
                  className="w-24 h-24 object-contain"
                />
              </a>
            ))}
          </div>
        </main>
  
       
      </div>
    );
  }
  