import React from "react";

export default function FeatureIntro() {
  return (
    <section className="py-20 bg-white border-t">  
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        <div className="pl-10 max-w-xl">
          <p className="text-sm font-semibold text-green-700 tracking-wider mb-3">
            FEATURES
          </p>

          <h2 className="text-4xl font-bold leading-snug mb-6">
            The new standard of heart prediction
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Anther Heart brings high-accuracy machine learning to everyday users — 
            helping detect risks early with clarity, softness, and confidence.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            With OCR extraction, SHAP explainability, and a friendly assistant, 
            we empower patients and hospitals with insights that are easy to understand.
          </p>
        </div>

        <div></div>

      </div>
    </section>
  );
}
