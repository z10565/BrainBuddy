import React from "react";
import { useNavigate } from "react-router-dom";

const resources = [
  { title: "Webinars", image: "/icons/Webinars.svg", link: "/webinars" },
  { title: "Articles", image: "/icons/Aricles.svg", link: "/articles" },
  { title: "Games", image: "/icons/Games.svg", link: "/games" },
  { title: "Pomodoro Timer", image: "/icons/Timer.svg", link: "/timer" },
];

export default function NoADHDPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-between">

      <main className="text-center px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">What if I don’t have ADHD?</h1>
        <p className="mb-2">Happy to hear that!</p>
        <p className="text-gray-600 mb-12">If you believe you don't have ADHD, we have resources for you too, particularly if you're having difficulty concentrating.</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {resources.map((res, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-pink-50 hover:bg-pink-100 cursor-pointer"
              onClick={() => navigate(res.link)}
            >
              <img src={res.image} alt={res.title} className="w-24 h-24 mb-4" />
              <h3 className="font-semibold text-lg text-center">{res.title}</h3>
            </div>
          ))}
        </div>
      </main>

     
    </div>
  );
}