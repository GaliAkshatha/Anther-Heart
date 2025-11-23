import React, { useState, useRef, useEffect } from "react"

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I'm Chopper. How can I help you today?" }
  ])
  const [input, setInput] = useState("")
  const endRef = useRef(null)

  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = () => {
    if (!input.trim()) return

    const newUserMsg = { from: "user", text: input }
    setMessages((prev) => [...prev, newUserMsg])

    // Bot reply logic
    setTimeout(() => {
      const reply = generateBotReply(input)
      setMessages((prev) => [...prev, { from: "bot", text: reply }])
    }, 500)

    setInput("")
  }

  const generateBotReply = (msg) => {
    msg = msg.toLowerCase()

    if (msg.includes("upload")) return "To upload your report, go to the Patient Dashboard and select 'Upload Report'. I’ll extract the values for you!"
    if (msg.includes("predict")) return "After filling your details, press 'Predict'. I'll show your risk level and explain the reasons too!"
    if (msg.includes("doctor")) return "The Doctor Dashboard shows SHAP feature importance, patient analytics, and trends."
    if (msg.includes("hospital")) return "Hospital Dashboard displays patient counts, risk levels, and allows sending messages."
    if (msg.includes("risk")) return "Risk is calculated using an ML model trained on heart disease data and SHAP explanations."
    if (msg.includes("hello") || msg.includes("hi")) return "Hi there! Chopper is here to help you ♥"
    if (msg.includes("cholesterol")) return "Cholesterol is a fat-like substance in blood. High levels increase heart risk, so it's important to monitor it."
    if (msg.includes("glucose")) return "Glucose is your blood sugar level. High glucose can indicate diabetes risk."
    if (msg.includes("bp") || msg.includes("blood pressure")) return "Blood pressure has two values – systolic and diastolic. High BP means your heart is working harder."

    return "I'm not sure about that, but I can help with prediction, uploading reports, dashboards, or health basics!"
  }

  return (
    <>
      {/* Floating Button */}
      <div 
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-pink-500 hover:bg-pink-600 w-16 h-16 rounded-full shadow-xl cursor-pointer flex items-center justify-center"
      >
        <img 
          src="/src/assets/chopper.png" 
          alt="Chopper" 
          className="w-12 h-12"
        />
      </div>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-28 right-6 w-80 bg-white shadow-xl rounded-2xl border flex flex-col overflow-hidden">

          {/* Header */}
          <div className="bg-pink-500 text-white p-3 font-semibold flex justify-between">
            <span>Chopper Assistant</span>
            <button onClick={() => setOpen(false)} className="font-bold">×</button>
          </div>

          {/* Chat Area */}
          <div className="p-3 h-80 overflow-y-auto">
            {messages.map((m, i) => (
              <div 
                key={i}
                className={`my-2 flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div 
                  className={`px-3 py-2 rounded-xl max-w-[70%] text-sm ${
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

          {/* Input Bar */}
          <div className="p-2 flex border-t">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 border rounded-xl px-2 py-1 text-sm"
              placeholder="Ask something..."
            />
            <button 
              onClick={sendMessage}
              className="ml-2 bg-black text-white px-3 py-1 rounded-xl"
            >
              Send
            </button>
          </div>

        </div>
      )}
    </>
  )
}
