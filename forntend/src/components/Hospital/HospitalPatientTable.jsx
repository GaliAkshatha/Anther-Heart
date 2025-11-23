import React, { useState } from "react"

export default function HospitalPatientTable({ onSelect }) {

  const sampleData = [
    { name: "Akash R", age: 45, risk: "High", status: "Admitted", room: 201 },
    { name: "Meena L", age: 61, risk: "Medium", status: "Discharged", room: "-" },
    { name: "Ravi G", age: 38, risk: "Low", status: "Admitted", room: 118 },
    { name: "Pooja N", age: 52, risk: "High", status: "Admitted", room: 309 },
    { name: "Krish J", age: 29, risk: "Low", status: "Discharged", room: "-" },
  ]

  const [patients, setPatients] = useState(sampleData)
  const [filter, setFilter] = useState("All")

  const filterData = patients.filter(p =>
    filter === "All" ? true : p.risk === filter
  )

  const sortBy = (key) => {
    const sorted = [...patients].sort((a, b) => {
      if (key === "age") return a.age - b.age
      if (key === "name") return a.name.localeCompare(b.name)
      return 0
    })
    setPatients(sorted)
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow border">
      
      {/* Filters */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">Patient List</h3>

        <select
          className="border px-3 py-1 rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Low">Low Risk</option>
          <option value="Medium">Medium Risk</option>
          <option value="High">High Risk</option>
        </select>
      </div>

      {/* Table */}
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2 cursor-pointer" onClick={() => sortBy("name")}>Name</th>
            <th className="cursor-pointer" onClick={() => sortBy("age")}>Age</th>
            <th>Risk Level</th>
            <th>Status</th>
            <th>Room</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {filterData.map((p, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-50">
              <td className="py-2">{p.name}</td>
              <td>{p.age}</td>
              <td>
                <span className={
                  p.risk === "High" ? "text-red-600" :
                  p.risk === "Medium" ? "text-yellow-600" :
                  "text-green-600"
                }>
                  {p.risk}
                </span>
              </td>
              <td>{p.status}</td>
              <td>{p.room}</td>

              <td>
                <button
                  onClick={() => onSelect(p)}
                  className="px-3 py-1 bg-black text-white rounded text-sm"
                >
                  Message
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  )
}
