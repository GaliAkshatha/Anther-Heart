import React, { useState, useRef, useEffect } from "react";

export default function PageChatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I'm Chopper. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { from: "user", text: input }]);

    setTimeout(() => {
      setMessages(prev => [...prev, { from: "bot", text: botReply(input) }]);
    }, 400);

    setInput("");
  };

  const botReply = (msg) => {
    msg = msg.toLowerCase();

    if (msg.includes("upload")) return "To upload your report, go to the Patient Dashboard → Upload Report.";
    if (msg.includes("predict")) return "After filling your details, press Predict to see your result!";
    if (msg.includes("doctor")) return "Doctor Dashboard shows SHAP analysis and patient insights.";
    if (msg.includes("hello") || msg.includes("hi")) return "Hi! Chopper is happy to help ❤️";

    return "I'm here to assist with uploading, predicting, dashboards, and health basics!";
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white shadow-xl rounded-2xl border flex flex-col h-[550px]">

      {/* Header */}
      <div className="bg-pink-500 text-white p-3 rounded-t-2xl font-semibold">
        Chopper Assistant
      </div>

      {/* Chat Area */}
      <div className="p-3 flex-1 overflow-y-auto bg-gray-50">
        {messages.map((m, i) => (
          <div key={i} className={`my-2 flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
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
      <div className="p-3 border-t flex">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 border px-3 py-2 rounded-xl"
          placeholder="Ask something..."
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-4 py-2 bg-black text-white rounded-xl"
        >
          Send
        </button>
      </div>

    </div>
  );
}
