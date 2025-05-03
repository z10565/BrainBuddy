import { useState, useEffect } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminCode, setAdminCode] = useState("");

  useEffect(() => {
    const isAdminFlag = localStorage.getItem("isAdmin") === "true";
    setIsAdmin(isAdminFlag);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("contactMessages")) || [];
    const updated = [...existing, formData];
    localStorage.setItem("contactMessages", JSON.stringify(updated));
    setFormData({ name: "", email: "", message: "" });
  };

  const handleDownload = () => {
    const messages = JSON.parse(localStorage.getItem("contactMessages")) || [];
    const blob = new Blob([JSON.stringify(messages, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "contactMessages.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleAdminLogin = () => {
    if (adminCode === "brainbuddy123") {
      localStorage.setItem("isAdmin", "true");
      setIsAdmin(true);
    } else {
      alert("Invalid code.");
    }
    setAdminCode("");
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setIsAdmin(false);
  };

  return (
    <section className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <div className="flex gap-4">
          <button type="submit" className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
            Send Message
          </button>

          {isAdmin && (
            <button
              type="button"
              onClick={handleDownload}
              className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300"
            >
              Download Messages
            </button>
          )}
        </div>
      </form>

      {!isAdmin ? (
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Admin Login</h3>
          <div className="flex gap-2">
            <input
              type="password"
              value={adminCode}
              onChange={(e) => setAdminCode(e.target.value)}
              placeholder="Enter admin code"
              className="border p-2 rounded"
            />
            <button
              onClick={handleAdminLogin}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Login
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-4">
          <button
            onClick={handleLogout}
            className="text-sm text-red-500 underline hover:text-red-700"
          >
            Log out of admin mode
          </button>
        </div>
      )}
    </section>
  );
}




// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export default function Contact() {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [isAdmin, setIsAdmin] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const query = new URLSearchParams(location.search);
//     const adminCode = query.get("admin");
//     if (adminCode === "secretcode123") {
//       setIsAdmin(true);
//     }
//   }, [location]);

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const stored = JSON.parse(localStorage.getItem("contactMessages")) || [];
//     localStorage.setItem("contactMessages", JSON.stringify([...stored, formData]));
//     setFormData({ name: "", email: "", message: "" });
//   };

//   const handleDownload = () => {
//     const messages = JSON.parse(localStorage.getItem("contactMessages")) || [];
//     const blob = new Blob([JSON.stringify(messages, null, 2)], { type: "application/json" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "contactMessages.json";
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <section className="max-w-3xl mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="border p-2 rounded"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="border p-2 rounded"
//           required
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={formData.message}
//           onChange={handleChange}
//           className="border p-2 rounded"
//           required
//         />
//         <div className="flex gap-4">
//           <button
//             type="submit"
//             className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
//           >
//             Send Message
//           </button>

//           {isAdmin && (
//             <button
//               type="button"
//               onClick={handleDownload}
//               className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300"
//             >
//               Download Messages
//             </button>
//           )}
//         </div>
//       </form>
//     </section>
//   );
// }


// /contact?admin=brainbuddyAdminZarina special URL
