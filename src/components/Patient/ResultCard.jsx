import React from "react"
import Gauge from "./RiskGauge"
import RecommendationCards from "./RecommendationCards"
import ChopperBubble from "./ChopperBubble"

export default function ResultCard({ prediction }) {
  return (
    <div className="mt-10 p-6 bg-white rounded-2xl shadow-xl border">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

        {/* RISK GAUGE */}
        <div className="flex-1 flex justify-center">
          <Gauge percent={prediction.probability} level={prediction.risk_level} />
        </div>

        {/* TEXTUAL RESULTS */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-3">Prediction Result</h2>

          <p className="text-xl mb-1">
            <span className="font-bold">Risk Level:</span> {prediction.risk_level}
          </p>

          <p className="text-xl">
            <span className="font-bold">Probability:</span> {prediction.probability}%
          </p>

          {/* Friendly Explanation */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">What this means:</h3>
            <ul className="list-disc ml-6 text-gray-700">
              {prediction.explanations.map((e, idx) => (
                <li key={idx} className="mb-1">{e}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Chopper Bubble */}
      <ChopperBubble risk={prediction.risk_level} />

      {/* Recommendations */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
        <RecommendationCards risk={prediction.risk_level} />
      </div>
    </div>
  )
}
