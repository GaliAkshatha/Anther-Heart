import React, { useState } from "react"
import HospitalStats from "./HospitalStats"
import HospitalPatientTable from "./HospitalPatientTable"
import MessagePanel from "./MessagePanel"

export default function HospitalDashboard() {
  const [selectedPatient, setSelectedPatient] = useState(null)

  return (
    <div className="pt-28 max-w-6xl mx-auto px-6">
      <h1 className="text-3xl font-semibold mb-6">Hospital Dashboard</h1>

      {/* Metrics */}
      <HospitalStats />

      {/* Main Table */}
      <div className="mt-10">
        <HospitalPatientTable onSelect={(p) => setSelectedPatient(p)} />
      </div>

      {/* Message Panel */}
      {selectedPatient && (
        <div className="mt-10">
          <MessagePanel patient={selectedPatient} />
        </div>
      )}
    </div>
  )
}
