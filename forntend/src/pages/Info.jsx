import React from "react";

export default function Info() {
  return (
    <div className="pt-32 max-w-6xl mx-auto px-6">

      <h1 className="text-4xl font-bold mb-6">How Anther Heart Works</h1>

      <div className="space-y-8 text-gray-700 text-lg leading-relaxed">

        <p>
          Anther Heart is designed to make heart-risk evaluation simple, friendly,
          and accessible for everyone.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Step-by-Step Flow</h2>
          <ul className="list-decimal ml-6 space-y-2">
            <li>Upload your medical report OR fill the health form manually.</li>
            <li>OCR extracts values automatically from uploaded reports.</li>
            <li>Missing fields are identified and asked to fill.</li>
            <li>Data is sent to our ML engine.</li>
            <li>Prediction is generated with confidence percentage.</li>
            <li>Friendly explanations + recommendations appear.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
