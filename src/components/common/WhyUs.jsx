import React from "react";

export default function WhyUs() {
  return (
    <div className="w-full pt-10 pb-24 bg-white">

      <h2 className="text-4xl font-bold text-center mb-12">
        Why Anther Heart?
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">

        <div className="p-6 rounded-2xl shadow-lg bg-white border">
          <h3 className="text-xl font-semibold mb-2">High-Accuracy ML Model</h3>
          <p className="text-gray-600">Trained on multiple datasets with optimized XGBoost tuning.</p>
        </div>

        <div className="p-6 rounded-2xl shadow-lg bg-white border">
          <h3 className="text-xl font-semibold mb-2">OCR Report Extraction</h3>
          <p className="text-gray-600">Upload medical reports — values are extracted automatically.</p>
        </div>

        <div className="p-6 rounded-2xl shadow-lg bg-white border">
          <h3 className="text-xl font-semibold mb-2">Friendly SHAP Explanations</h3>
          <p className="text-gray-600">Get soft and patient-safe explanations of key factors.</p>
        </div>

        <div className="p-6 rounded-2xl shadow-lg bg-white border">
          <h3 className="text-xl font-semibold mb-2">Interactive Chatbot</h3>
          <p className="text-gray-600">Your AI guide is always available for quick help.</p>
        </div>

        <div className="p-6 rounded-2xl shadow-lg bg-white border">
          <h3 className="text-xl font-semibold mb-2">Doctor Dashboard</h3>
          <p className="text-gray-600">Advanced insights for doctors with raw SHAP values and trends.</p>
        </div>

        <div className="p-6 rounded-2xl shadow-lg bg-white border">
          <h3 className="text-xl font-semibold mb-2">Hospital Admin Panel</h3>
          <p className="text-gray-600">
            Patient tables, sorting, alerts, and analytics tools.
          </p>
        </div>

      </div>
    </div>
  );
}
