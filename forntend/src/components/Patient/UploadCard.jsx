import React, { useState } from "react"

export default function UploadCard({ onExtract }) {
  const [loading, setLoading] = useState(false)

  const handleUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    setLoading(true)

    const formData = new FormData()
    formData.append("file", file)

    const res = await fetch("http://127.0.0.1:5000/api/ocr/upload", {
      method: "POST",
      body: formData
    })

    const data = await res.json()
    setLoading(false)

    onExtract(data.extracted, data.missing_fields)
  }

  return (
    <div className="mt-6 p-6 bg-white rounded-xl shadow border w-full">
      <h2 className="text-xl font-semibold mb-4">Upload Lab Report</h2>

      <input 
        type="file" 
        accept="image/*"
        onChange={handleUpload}
        className="mt-3"
      />

      {loading && <p className="mt-4 text-gray-600">Extracting data…</p>}
    </div>
  )
}
