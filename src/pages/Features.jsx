const features = [
  {
    img: "/icons/Shape.svg",
    title: "Screening Questionnaire for Early Detection",
    desc: "Identify unique strengths and challenges with our effective ADHD screening questionnaire.",
  },
  {
    img: "/icons/gamepad.svg",
    title: "Gamified Learning for Enhanced Engagement",
    desc: "Interactive games and activities to make learning fun and rewarding.",
  },
  {
    img: "/icons/community.svg",
    title: "Expert Parenting Tips for Support",
    desc: "Access valuable strategies and actionable tips curated by pediatric and child development experts.",
  },
];

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-xl font-bold mb-8">
        Empowering Parents, Engaging Kids
      </h2>
      <p>
        Our platform offers a comprehensive approach to understanding and
        supporting your child's attention needs. With clinically-informed tools
        and engaging resources, we make it easier for parents to help their
        children thrive.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow p-6 flex flex-col items-start transition-shadow hover:shadow-lg"
          >
            <div className="mb-4">
              <img src={f.img} alt={f.title} className="w-7 h-7" />
            </div>
            <h3 className="font-bold mb-2">{f.title}</h3>
            <p className="text-gray-600 mb-4">{f.desc}</p>
            {/* <button className="text-sm text-black border-b border-black hover:border-red-800">
              Learn More
            </button> */}
          </div>
        ))}
      </div>
    </section>
  );
}
