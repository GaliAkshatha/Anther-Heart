import React, { useState, useEffect } from "react"
import ShapTable from "./ShapTable"
import PatientList from "./PatientList"
import TrendGraph from "./TrendGraph"

export default function DoctorDashboard() {

  const [selectedPatient, setSelectedPatient] = useState(null)
  const [shapData, setShapData] = useState(null)

  const handleView = async (patient) => {
    setSelectedPatient(patient)

    const res = await fetch("http://127.0.0.1:5000/api/predict/doctor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(patient)
    })

    const data = await res.json()
    setShapData(data)
  }

  return (
    <div className="pt-28 px-6 max-w-6xl mx-auto">
      
      <h1 className="text-3xl font-semibold mb-6">Doctor Dashboard</h1>

      {/* Patient Table */}
      <PatientList onView={handleView} />

      {/* SHAP Analysis */}
      {shapData && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">
            SHAP Feature Impact (For Selected Patient)
          </h2>
          <ShapTable data={shapData} />
        </div>
      )}

      {/* Trend Graph */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Predicted Risk Trend</h2>
        <TrendGraph />
      </div>
    </div>
  )
}
