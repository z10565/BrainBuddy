const team = [
  {
    name: "Zarina",
    role: "Full-Stack Developer",
    desc: "Passionate about helping children reach their full potential through innovative strategies and support.",
    img: "/photos/ZarinaPhoto.JPG",
  },
  {
    name: "Dilnaz",
    role: "Project Manager",
    desc: "Focusing on emotional well-being and behavioral strategies for children with ADHD.",
    img: "/photos/Dilnaz.jpg",
  },
  {
    name: "Azhar",
    role: "Game developer",
    desc: "Developing resources that empower parents and support children's academic growth.",
    img: "/photos/Azhar.jpg",
  },
];

export default function Team() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-xl font-bold mb-8 text-center">Our Team</h2>
      <p className="text-center">Meet the dedicated professionals behind our platform.</p>
      <div className="grid md:grid-cols-3 gap-8">
        {team.map((m, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white rounded-lg shadow p-6"
          >
            <img
              src={m.img}
              alt={m.name}
              className="w-20 h-20 rounded-full mb-4 object-cover"
            />
            <div className="font-bold">{m.name}</div>
            <div className="text-xs text-gray-500 mb-2">{m.role}</div>
            <div className="text-gray-600 text-center text-sm">{m.desc}</div>
          </div>
        ))}
      </div>
      {/* <div className="text-center mt-8">
        <button className="border border-black px-5 py-2 rounded text-sm">
          Open Positions
        </button>
      </div> */}
    </section>
  );
}
