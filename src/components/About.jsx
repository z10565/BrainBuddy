import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      

      {/* Main Content */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-10 py-20">
        {/* Text Content */}
        <div className="space-y-6">
          <p>
            It combines AI-powered symptom screening for parents with a gamified
            learning environment designed to improve attention, memory, and
            emotional regulation.
          </p>
          <p>
            Developed in collaboration with child psychologists, educators, and
            experienced developers, <span className="font-semibold">Nazar</span>{" "}
            offers a safe, engaging space where children can build cognitive
            skills through play — while giving parents clear, accessible
            insights based on trusted behavioral frameworks like the Vanderbilt
            scale.
          </p>
          <p>
            While not a diagnostic tool,{" "}
            <span className="font-semibold">Nazar</span> serves as an early
            intervention and support system for families navigating
            attention-related challenges. It is intended to complement, not
            replace, professional assessment and care.
          </p>
        </div>

        {/* Image with Text Overlay */}
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src="/photos/kids5.jpeg"
            alt="Child using device"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-xl font-semibold text-center px-4">
              <span className="text-yellow-500">Nazar</span> is a web-based{" "}
              <span className="text-yellow-500">ADHD support platform</span> for
              children aged 5–14.
            </div>
          </div>
        </div>
      </main>

     
    </div>
  );
}
