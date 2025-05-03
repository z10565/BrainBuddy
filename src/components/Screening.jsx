import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const questions = [
  "How often does your child have trouble sustaining attention on tasks?",
  "How often does your child seem to not listen when spoken to directly?",
  "How often does your child have difficulty organizing tasks and activities?",
  "How often does your child avoid tasks that require sustained mental effort?",
  "How often does your child lose things necessary for tasks or activities?",
  "How often is your child easily distracted by extraneous stimuli?",
  "How often does your child fidget with hands or feet or squirm in seat?",
  "How often does your child leave seat when remaining seated is expected?",
  "How often does your child talk excessively?",
  "How often does your child have difficulty waiting for their turn?",
];

export default function ADHDScreeningChat() {
  const [messages, setMessages] = useState([
    { type: "bot", text: "👋 Hi there! I'm here to help you screen for potential signs of ADHD in your child (ages 6-12). Ready to get started?" }
  ]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { type: "user", text: input }];
    setMessages(newMessages);

    const updatedAnswers = [...answers, input];
    setAnswers(updatedAnswers);

    setInput("");

    setTimeout(() => {
      if (step < questions.length) {
        setMessages((prev) => [
          ...prev,
          { type: "bot", text: questions[step] }
        ]);
        setStep((prev) => prev + 1);
      } else {
        finishScreening(updatedAnswers);
      }
    }, 500);
  };

  const finishScreening = (allAnswers) => {
    // Simple scoring system example (can replace with GPT API call later)
    const highFrequencyWords = ["very often", "often", "frequently", "always"];
    const score = allAnswers.reduce((acc, answer) => {
      const lower = answer.toLowerCase();
      return highFrequencyWords.some(word => lower.includes(word)) ? acc + 1 : acc;
    }, 0);

    let riskLevel = "Low";
    if (score >= 7) riskLevel = "High";
    else if (score >= 4) riskLevel = "Moderate";

    setMessages((prev) => [
      ...prev,
      { type: "bot", text: `✅ Thank you! Based on your responses, the preliminary risk assessment is: **${riskLevel}**.` },
      { type: "bot", text: "👉 Please note: this is not a diagnosis. For a full evaluation, consult a healthcare professional." }
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[80vh] max-w-2xl mx-auto mt-10 border rounded-lg shadow-lg overflow-hidden">
      {/* Chat area */}
      <div className="flex-1 bg-white p-4 overflow-y-auto">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-4 flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`px-4 py-2 rounded-lg max-w-[80%] text-sm ${
              msg.type === "user" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input area */}
      <div className="bg-gray-50 p-4 border-t flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your answer here..."
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSend}
          className="ml-2 bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600"
        >
          <FaPaperPlane size={18} />
        </button>
      </div>
    </div>
  );
}
