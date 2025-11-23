import React from "react"

export default function HospitalStats() {

  // Demo values - replace with backend later
  const stats = {
    total: 148,
    admitted: 72,
    discharged: 58,
    highRisk: 28,
    stable: 120
  }

  const items = [
    { label: "Total Patients", value: stats.total, color: "bg-blue-500" },
    { label: "Currently Admitted", value: stats.admitted, color: "bg-green-500" },
    { label: "Discharged", value: stats.discharged, color: "bg-gray-500" },
    { label: "High Risk", value: stats.highRisk, color: "bg-red-500" },
    { label: "Stable Condition", value: stats.stable, color: "bg-yellow-500" }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {items.map((i, idx) => (
        <div key={idx} className={`p-5 rounded-xl shadow text-white ${i.color}`}>
          <h3 className="text-2xl font-bold">{i.value}</h3>
          <p className="mt-1">{i.label}</p>
        </div>
      ))}
    </div>
  )
}
