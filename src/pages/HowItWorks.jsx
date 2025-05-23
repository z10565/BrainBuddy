const steps = [
  {
    title: "How It Works",
    desc: "Start with a free screening to identify potential challenges your child may face.",
    buttonPrimary:"Start",
    buttonSecondary:"Learn",
    img: "/icons/Shape.svg",
  },
  {
    title: "Engaging Learning",
    desc: "Access games tailored for your child's needs.",
    button: "Play",
    img: "/icons/gamepad.svg",
  },
  {
    title: "Track progress and tips",
    desc: "Monitor growth with personalized insights and expert advice.",
    button: "Explore",
    img: "/icons/lighting.svg",
  },
];

export default function HowItWorks() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-xl font-bold mb-8 text-center">
        Discover Your Child's Potential
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow p-6 flex flex-col items-center transition-shadow hover:shadow-lg"
          >
            {s.img && (
              <img src={s.img} alt={s.title} className="w-7 h-7 mb-4" />
            )}
            <h3 className="font-bold mb-2">{s.title}</h3>
            <p className="text-gray-600 text-center">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
