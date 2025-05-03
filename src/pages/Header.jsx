// import { Link } from "react-router-dom";

// export default function Header() {
//   return (
//     <header className="border-b border-gray-200">
//       <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4">
//         <div className="font-bold text-lg">Logo</div>
//         <nav className="hidden md:flex space-x-6 text-sm">
//           <Link to="/screening" className="hover:underline">
//             Screening
//           </Link>
//           <Link to="/about" className="hover:underline">
//             About Us
//           </Link>
//           <Link to="/contact" className="hover:underline">
//             Contact Us
//           </Link>
//           <Link to="/resources" className="hover:underline">
//             Resources
//           </Link>
//         </nav>
//         <div className="flex items-center space-x-2">
//           <button className="text-sm px-4 py-1 border border-black rounded hover:bg-red-100 hover:text-black transition">
//             Help
//           </button>

//           <button className="text-sm px-4 py-1 bg-black text-white rounded hover:bg-red-500 hover:text-white transition">
//             Start
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }


import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate(); // Get the navigate function
  const [showResources, setShowResources] = useState(false);

  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4">
        <div
          className="font-bold text-lg cursor-pointer"
          onClick={() => navigate("/")}
        >
          BrainBuddy
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm relative">
          <button onClick={() => navigate("/screening")} className="hover:underline">Screening</button>
          <button onClick={() => navigate("/comingsoon")} className="hover:underline">About</button>
          <button onClick={() => navigate("/contact")} className="hover:underline">Contact</button>

          {/* Resources */}
          <div className="relative">
            <button
              onClick={() => setShowResources(true)}
              className="hover:underline"
            >
              Resources
            </button>
            {showResources && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border rounded shadow p-4 z-50">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold">Resources</span>
                  <button
                    onClick={() => setShowResources(false)}
                    className="text-gray-500 hover:text-red-500"
                    aria-label="Close"
                  >
                    <FaTimes size={16} />
                  </button>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>
                    <button onClick={() => navigate("/articles")} className="hover:underline">
                      Blog Articles
                    </button>
                  </li>
                  <li>
                    <button onClick={() => navigate("/webinars")} className="hover:underline">
                      Webinars
                    </button>
                  </li>
                  <li>
                    <button onClick={() => navigate("/comingsoon")} className="hover:underline">
                      FAQs
                    </button>
                  </li>
                  <li>
                    <button onClick={() => navigate("/comingsoon")} className="hover:underline">
                      Testimonials
                    </button>
                  </li>
                  <li>
                    <button onClick={() => navigate("/games")} className="hover:underline">
                      Games
                    </button>
                  </li>
                  <li>
                    <button onClick={() => navigate("/comingsoon")} className="hover:underline">
                      Parenting Tips
                    </button>
                  </li>
                  <li>
                    <button onClick={() => navigate("/timer")} className="hover:underline">
                      Pomodoro Timer
                    </button>
                  </li>
                  <li>
                    <button onClick={() => navigate("/thank-you")} className="hover:underline">
                      Community Support
                    </button>
                  </li>
                  <li>
                    <button onClick={() => navigate("/noADHD")} className="hover:underline">
                      I don't have ADHD
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
        
      </div>
    </header>
  );
}
