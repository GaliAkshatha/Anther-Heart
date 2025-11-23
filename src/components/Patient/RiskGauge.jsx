import React, { useEffect, useState } from "react"

export default function RiskGauge({ percent, level }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let start = 0
    const end = percent
    const duration = 900
    const interval = 20

    const inc = (end - start) / (duration / interval)

    const anim = setInterval(() => {
      start += inc
      if (start >= end) {
        start = end
        clearInterval(anim)
      }
      setValue(Math.round(start))
    }, interval)
  }, [percent])

  const color =
    level === "Low" ? "#4ade80" :
    level === "Medium" ? "#facc15" :
    "#f87171"

  return (
    <div className="relative w-40 h-40">
      <svg className="w-full h-full">
        <circle cx="80" cy="80" r="70" stroke="#e5e7eb" strokeWidth="15" fill="none" />
        <circle
          cx="80"
          cy="80"
          r="70"
          stroke={color}
          strokeWidth="15"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="440"
          strokeDashoffset={440 - (440 * value) / 100}
          style={{ transition: "stroke-dashoffset 0.3s ease" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center font-semibold text-xl">
        {value}%
      </div>
    </div>
  )
}
