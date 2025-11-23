import React, { useState } from "react"

export default function MessagePanel({ patient }) {
  const [msg, setMsg] = useState("")
  const [sent, setSent] = useState(false)

  const sendMessage = () => {
    setSent(true)
    setTimeout(() => setSent(false), 2000)
    setMsg("")
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow border max-w-xl">
      <h3 className="text-xl font-semibold mb-3">
        Message to {patient.name}
      </h3>

      <textarea
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        className="w-full border rounded p-2 h-28"
        placeholder="Write a message…"
      />

      <button
        onClick={sendMessage}
        className="mt-4 px-6 py-2 rounded bg-black text-white"
      >
        Send Message
      </button>

      {sent && (
        <p className="text-green-600 mt-3">Message Sent Successfully!</p>
      )}
    </div>
  )
}
