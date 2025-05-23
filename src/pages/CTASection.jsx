import { useNavigate } from "react-router-dom";
export default function CTASection() {
  const navigate = useNavigate();
  return (
    <section
      className="relative bg-cover bg-center w-full h-[415px]"
      style={{ backgroundImage: "url('/photos/kids4.jpg')" }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-4xl mx-auto px-6 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Unlock Your Child's Potential
        </h1>
        <p className="mb-6 text-base md:text-lg max-w-xl">
          Join our community and discover tools to support your child's focus
          and learning journey.
        </p>
        <div className="flex gap-4">
          <button onClick={()=>navigate("/thank-you")} className="bg-white text-black px-6 py-2 rounded hover:bg-gray-100 transition hover:bg-red-500 hover:text-white transition">
            Sign Up
          </button>
          <button onClick={()=>navigate("/comingsoon")} className="border border-white px-6 py-2 rounded hover:bg-red-100 hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
