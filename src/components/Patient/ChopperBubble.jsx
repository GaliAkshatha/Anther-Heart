import React from "react"

export default function ChopperBubble({ risk }) {
  const messages = {
    Low: "Your heart seems happy! Keep up the healthy routine!",
    Medium: "A little care can lower your risk a lot. I’m here with you!",
    High: "Don't worry! We can act early and improve your heart health together."
  }

  return (
    <div className="flex items-center gap-3 mt-10">
      <img 
        src="/src/assets/chopper.png"
        className="w-20 h-20 rounded-full shadow border"
      />

      <div className="bg-pink-100 border border-pink-300 p-3 rounded-xl shadow text-gray-700 max-w-sm">
        {messages[risk]}
      </div>
    </div>
  )
}
