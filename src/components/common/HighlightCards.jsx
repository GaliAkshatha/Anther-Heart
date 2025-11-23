import React from "react"

export default function HighlightCards() {
  const items = [
    {
      title: "AI-Powered Early Detection",
      desc: "Analyzes key heart health indicators instantly using ML models."
    },
    {
      title: "Soft, Friendly Explanations",
      desc: "Get simple language explanations instead of scary medical jargon."
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {items.map((item, i) => (
          <div
            key={i}
            className="p-8 rounded-2xl border bg-white shadow-lg
                       hover:shadow-[0_0_25px_rgba(0,0,0,0.12)]
                       hover:-translate-y-1 transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}

      </div>
    </section>
  )
}
