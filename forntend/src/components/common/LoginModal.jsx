import React from "react"

export default function LoginModal({ open, onClose, onLogin }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-80">
        <h3 className="text-xl font-semibold mb-4">Select Login Type</h3>

        <div className="space-y-3">
          <button onClick={() => onLogin("patient")} className="w-full py-2 bg-black text-white rounded">Patient</button>
          <button onClick={() => onLogin("doctor")} className="w-full py-2 bg-black text-white rounded">Doctor</button>
          <button onClick={() => onLogin("hospital")} className="w-full py-2 bg-black text-white rounded">Hospital</button>
        </div>

        <button className="mt-4 text-gray-600 underline" onClick={onClose}>Cancel</button>
      </div>
    </div>
  )
}
