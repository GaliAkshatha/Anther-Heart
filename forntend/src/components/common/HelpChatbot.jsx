import React, { useState, useRef, useEffect } from "react";

export default function HelpChatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! I'm Chopper. How can I assist you today?" }
  ]);
  const [input, setInput] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { from: "user", text: input }]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: botReply(input) }
      ]);
    }, 400);

    setInput("");
  };

  const botReply = (msg) => {
    msg = msg.toLowerCase();

    if (msg.includes("report") || msg.includes("upload"))
      return "You can upload your medical report in the Patient Dashboard → Upload Report.";
    if (msg.includes("predict"))
      return "After filling your form, press Predict. I'll show your results!";
    if (msg.includes("doctor"))
      return "The Doctor Dashboard shows analytics and SHAP explanations.";
    if (msg.includes("hospital"))
      return "The Hospital Dashboard shows patient counts and risk levels.";
    if (msg.includes("hi") || msg.includes("hello"))
      return "Hi! Chopper is happy to help you ❤️";

    return "I'm here to help with predictions, uploads, dashboards, and health basics!";
  };

  return (
    <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl border flex flex-col h-[550px]">

      {/* Header */}
      <div className="bg-pink-500 text-white p-3 rounded-t-2xl font-semibold">
        Chopper Assistant
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`my-2 flex ${
              m.from === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-3 py-2 rounded-xl max-w-[75%] text-sm ${
                m.from === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-pink-100 text-gray-700"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
        <div ref={endRef}></div>
      </div>

      {/* Input */}
      <div className="flex p-3 border-t">
        <input
          className="flex-1 border px-3 py-2 rounded-xl"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className="ml-2 px-4 py-2 bg-black text-white rounded-xl"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
