import React from "react"

export default function Features() {
  const features = [
    { title: "High-Accuracy ML Model", desc: "Trained on multiple datasets with optimized XGBoost tuning." },
    { title: "OCR Report Extraction", desc: "Upload medical reports — values are extracted automatically." },
    { title: "Friendly SHAP Explanations", desc: "Get soft and patient-safe explanations of key factors." },
    { title: "Interactive Chatbot", desc: "Ask questions anytime — your AI guide is always available." },
    { title: "Doctor Dashboard", desc: "Advanced insights for doctors with raw SHAP values and trends." },
    { title: "Hospital Admin Panel", desc: "Patient tables, sorting, alerts, and analytics tools." }
  ]

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-10">Why Anther Heart?</h2>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-8 bg-white border rounded-xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
