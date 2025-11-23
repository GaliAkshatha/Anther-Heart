import React from "react";

export default function AboutML() {
  return (
    <div className="pt-32 max-w-6xl mx-auto px-6">

      <h1 className="text-4xl font-bold mb-6">About Our ML Model</h1>

      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Anther Heart uses a finely-tuned <span className="font-semibold">XGBoost Classification Model</span>
        trained on multiple health indicators to predict heart-related risks
        with reliable accuracy.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Key Features</h2>
      <ul className="list-disc ml-6 text-gray-700 text-lg space-y-2">
        <li>Uses 12 major medical parameters including BP, cholesterol, glucose, etc.</li>
        <li>SMOTE used for class balancing</li>
        <li>StandardScaler applied for normalization</li>
        <li>SHAP integrated for interpretability</li>
        <li>XGBoost tuned for maximum predictive performance</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-3">Explainability with SHAP</h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        Every prediction includes a friendly explanation showing which health factors
        contributed the most. This helps patients stay informed and doctors understand
        the reasoning behind the model’s output.
      </p>

    </div>
  );
}
