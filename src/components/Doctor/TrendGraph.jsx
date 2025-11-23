import React from "react"

export default function TrendGraph() {
  const points = [20, 40, 50, 60, 70, 65, 80] // demo risk values

  const max = Math.max(...points)

  return (
    <div className="bg-white p-6 rounded-xl shadow border">
      <svg width="100%" height="200">
        <polyline
          fill="none"
          stroke="#2563eb"
          strokeWidth="4"
          points={points.map((p, i) => `${i * 60},${200 - (p/max)*180}`).join(" ")}
        />
      </svg>
      <p className="text-gray-600 text-sm mt-2">Demo trend of risk over time</p>
    </div>
  )
}
