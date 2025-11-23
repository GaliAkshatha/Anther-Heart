import React, { useState } from "react"

export default function InputForm({ onSubmit }) {
  const fields = [
    "Age","Sex","Height","Weight","RestingBP","DiastolicBP",
    "Cholesterol","Glucose","Smoking","AlcoholIntake","PhysicalActivity","BMI"
  ]

  const [form, setForm] = useState({
    Age: "", Sex: "", Height: "", Weight: "",
    RestingBP: "", DiastolicBP: "", Cholesterol: "",
    Glucose: "", Smoking: "", AlcoholIntake: "",
    PhysicalActivity: "", BMI: ""
  })

  const handleChange = (k, v) => {
    const updated = { ...form, [k]: v }

    if (k === "Height" || k === "Weight") {
      const h = parseFloat(updated.Height)
      const w = parseFloat(updated.Weight)

      if (h > 0 && w > 0) {
        updated.BMI = (w / ((h / 100) ** 2)).toFixed(2)
      }
    }

    setForm(updated)
  }

  return (
    <div className="mt-6 p-6 bg-white rounded-xl shadow border">
      <h2 className="text-xl font-semibold mb-4">Fill Your Details</h2>

      <div className="grid grid-cols-2 gap-4">
        {fields.map((key) => (
          <div key={key}>
            <label className="text-sm">{key}</label>
            <input
              value={form[key]}
              onChange={(e) => handleChange(key, e.target.value)}
              className="w-full border rounded px-3 py-1 mt-1"
            />
          </div>
        ))}
      </div>

      <button
        className="mt-6 px-6 py-2 bg-black text-white rounded"
        onClick={() => onSubmit(form)}
      >
        Predict
      </button>
    </div>
  )
}
