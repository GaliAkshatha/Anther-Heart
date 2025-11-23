import React from "react"

export default function ShapTable({ data }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow border">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="py-2">Feature</th>
            <th>Value</th>
            <th>Impact (SHAP)</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-50">
              <td className="py-2 font-medium">{row.feature}</td>
              <td>{row.value}</td>
              <td className={row.impact > 0 ? "text-red-600" : "text-green-600"}>
                {row.impact.toFixed(4)}
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}
