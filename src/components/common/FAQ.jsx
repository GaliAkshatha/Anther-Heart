import React, { useState } from "react"

const data = [
  {
    q: "What is Anther Heart?",
    a: "An AI-assisted platform that predicts heart disease risk using your health data."
  },
  {
    q: "Is my data safe?",
    a: "Yes—your data is processed securely and only used for prediction."
  },
  {
    q: "Do I need a report?",
    a: "You can upload your report OR simply fill the form manually."
  }
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h2>

      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow p-4 rounded mb-3 cursor-pointer"
          onClick={() => setOpen(open === index ? null : index)}
        >
          <div className="flex justify-between">
            <h3 className="font-medium">{item.q}</h3>
            <span>{open === index ? "−" : "+"}</span>
          </div>

          {open === index && <p className="mt-2 text-gray-600">{item.a}</p>}
        </div>
      ))}
    </div>
  )
}
