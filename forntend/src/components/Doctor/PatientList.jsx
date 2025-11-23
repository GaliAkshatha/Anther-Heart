import React, { useState } from "react"

export default function PatientList({ onView }) {

  // TEMPORARY DEMO DATA
  const samplePatients = [
    { Age: 45, Sex: 1, Height: 165, Weight: 70, RestingBP: 130, DiastolicBP: 85, Cholesterol: 200, Glucose: 110, Smoking: 0, AlcoholIntake: 1, PhysicalActivity: 2 },
    { Age: 52, Sex: 0, Height: 150, Weight: 68, RestingBP: 140, DiastolicBP: 90, Cholesterol: 230, Glucose: 140, Smoking: 1, AlcoholIntake: 0, PhysicalActivity: 1 },
    { Age: 37, Sex: 1, Height: 175, Weight: 90, RestingBP: 150, DiastolicBP: 100, Cholesterol: 250, Glucose: 160, Smoking: 1, AlcoholIntake: 1, PhysicalActivity: 0 },
  ]

  const [patients, setPatients] = useState(samplePatients)
  const [sortKey, setSortKey] = useState(null)

  const sortBy = (key) => {
    const sorted = [...patients].sort((a, b) => a[key] - b[key])
    setPatients(sorted)
    setSortKey(key)
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow border">
      <h3 className="text-xl font-semibold mb-4">Patient Records</h3>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2 cursor-pointer" onClick={() => sortBy("Age")}>Age</th>
            <th className="cursor-pointer" onClick={() => sortBy("Cholesterol")}>Cholesterol</th>
            <th className="cursor-pointer" onClick={() => sortBy("Glucose")}>Glucose</th>
            <th className="cursor-pointer" onClick={() => sortBy("RestingBP")}>BP</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {patients.map((p, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-50">
              <td className="py-2">{p.Age}</td>
              <td>{p.Cholesterol}</td>
              <td>{p.Glucose}</td>
              <td>{p.RestingBP}/{p.DiastolicBP}</td>
              <td>
                <button 
                  onClick={() => onView(p)}
                  className="px-3 py-1 bg-black text-white rounded text-sm"
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}
