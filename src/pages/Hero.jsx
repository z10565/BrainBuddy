import { useNavigate } from "react-router-dom";
export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center py-12 px-4 gap-8">
      <div className="flex-1">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Unlock Your Child's Potential with Our Platform
        </h1>
        <p className="mb-6 text-gray-600">
          Welcome to our innovative platform designed to help parents identify
          and support their children's learning, emotional, and social needs.
          Every feature is a move toward a focused and engaging learning
          experience!
        </p>
        <div className="flex space-x-3">
          <button onClick={()=>navigate("/screening")} className="bg-black text-white px-5 py-2 rounded text-sm hover:bg-red-500 hover:text-white transition">
            Get Started
          </button>
          <button onClick={()=>navigate("/comingsoon")} className="border border-black px-5 py-2 rounded text-sm hover:bg-red-100 hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <img
          src="src/photos/kids1.jpg"
          alt="Happy kids"
          className="rounded-lg w-full max-w-md object-cover"
        />
      </div>
    </section>
  );
}
