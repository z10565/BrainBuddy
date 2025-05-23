import React from "react";
import { useNavigate } from "react-router-dom";

export default function Unlock() {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center py-12 px-4 gap-8">
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-4">Unlock Your Child's Full Potential Today</h2>
        <p className="mb-4 text-gray-600">
          Our platform offers parents the tools to identify challenges through early detection, gamified learning, and expert advice. Start your journey today!
        </p>
        <div className="flex space-x-10">
          <div>
            <div className="font-semibold">For Parents</div>
            <div className="text-xs text-gray-500">Screening, tips, and support</div>
          </div>
          <div>
            <div className="font-semibold">For Children</div>
            <div className="text-xs text-gray-500">Engaging, gamified learning</div>
          </div>
        </div>
        <div className="mt-6 flex space-x-3">
          <button
            className="bg-black text-white px-5 py-2 rounded text-sm hover:bg-red-500 hover:text-white transition"
            onClick={() => navigate("/comingsoon")}
          >
            Learn More
          </button>
          <button
            className="border border-black px-5 py-2 rounded text-sm hover:bg-red-100 hover:text-black transition"
            onClick={() => navigate("/thank-you")}
          >
            Sign Up
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <img src="/photos/kids2.jpg" alt="Child at piano" className="rounded-lg w-full max-w-md object-cover" />
      </div>
    </section>
  );
}
