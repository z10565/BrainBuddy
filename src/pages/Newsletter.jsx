// export default function Newsletter() {
//   return (
//     <section className="max-w-7xl mx-auto py-12 px-4 flex flex-col md:flex-row items-center gap-8">
//       <div className="flex-1">
//         <h2 className="text-xl font-bold mb-2">Join Our Parenting Community</h2>
//         <p className="text-gray-600 mb-5">
//           Subscribe for expert tips and updates on supporting your child's
//           attention and learning journey.
//         </p>
//         <form
//           action="https://formspree.io/f/manoewgg"
//           method="POST"
//           className="flex space-x-2"
//         >
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email Address"
//             className="border border-gray-300 rounded px-4 py-2 flex-1"
//             required
//           />
//           <button
//             type="submit"
//             className="bg-black text-white px-5 py-2 rounded text-sm hover:bg-red-500 hover:text-white transition"
//           >
//             Sign Up
//           </button>
//         </form>

//         <p className="text-gray-600 mt-5">
//           By clicking Sign Up, you agree to our Terms and Conditions.
//         </p>
//       </div>
//       <div className="flex-1 flex justify-center">
//         <img
//           src="src/photos/kids3.jpg"
//           alt="Parent and child"
//           className="w-[616px] h-[400px] object-cover"
//         />
//       </div>
//     </section>
//   );
// }



import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save email to local file or API (if set up)
    const blob = new Blob([`Email: ${email}\n`], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "subscribers.txt";
    link.href = url;
    link.click();

    // Redirect to thank you page
    navigate("/thank-you");
  };

  return (
    <section className="max-w-7xl mx-auto py-12 px-4 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-2">Join Our Parenting Community</h2>
        <p className="text-gray-600 mb-5">
          Subscribe for expert tips and updates on supporting your child's attention and learning journey.
        </p>
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Your Email Address"
            className="border border-gray-300 rounded px-4 py-2 flex-1"
          />
          <button className="bg-black text-white px-5 py-2 rounded text-sm hover:bg-red-500 transition">
            Sign Up
          </button>
        </form>
        <p className="text-gray-600 mt-5">By clicking Sign Up, you agree to our Terms and Conditions.</p>
      </div>
      <div className="flex-1 flex justify-center">
        <img
          src="src/photos/kids3.jpg"
          alt="Parent and child"
          className="w-[616px] h-[400px] object-cover"
        />
      </div>
    </section>
  );
}

