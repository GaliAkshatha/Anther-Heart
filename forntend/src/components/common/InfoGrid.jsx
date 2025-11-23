import React from "react"

export default function InfoGrid() {
  const items = [
    { title: "Fast Predictions", desc: "Get results in under 1 second." },
    { title: "Cross-Device Access", desc: "Use on mobile, desktop, or tablet." },
    { title: "Secure Data Processing", desc: "Your health data stays private." },
    { title: "Smart Workflow", desc: "Designed for patients, doctors & hospitals." },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        {items.map((item, i) => (
          <div
            key={i}
            className="p-6 border rounded-xl bg-gray-50 shadow hover:shadow-xl transition"
          >
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}

      </div>
    </section>
  )
}
