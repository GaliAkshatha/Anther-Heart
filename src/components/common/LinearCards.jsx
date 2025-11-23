import React from "react";

export default function LinearCards() {
  return (
    <div className="relative w-full mt-10">

      {/* GRID LINES */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Vertical */}
        <div className="absolute inset-y-0 left-[15%] w-px bg-gray-200"></div>
        <div className="absolute inset-y-0 left-1/2 w-px bg-gray-200"></div>
        <div className="absolute inset-y-0 left-[85%] w-px bg-gray-200"></div>

        {/* Horizontal (NO top line now!) */}
        <div className="absolute left-0 right-0 top-[360px] h-px bg-gray-200"></div>
        <div className="absolute left-0 right-0 top-[740px] h-px bg-gray-200"></div>
        <div className="absolute left-0 right-0 top-[1120px] h-px bg-gray-200"></div>
      </div>

      {/* ROW 1 */}
      <div className="relative z-10 max-w-[1600px] mx-auto grid grid-cols-2 py-20">

        <div className="col-span-1 flex justify-center pr-10">
          <div className="w-[80%] h-60 bg-gradient-to-b from-green-50 to-white rounded-2xl shadow-md"></div>
        </div>

        <div className="col-span-1 pl-20">
          <p className="text-green-700 font-semibold tracking-wide mb-2">ML ACCURACY</p>
          <h2 className="text-3xl font-bold mb-3">High-accuracy prediction</h2>
          <p className="text-gray-700 text-lg max-w-[440px]">
            Our optimized XGBoost model delivers precise, reliable evaluations using
            multiple health indicators.
          </p>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="relative z-10 max-w-[1600px] mx-auto grid grid-cols-2 py-20">
        <div className="col-span-1 flex justify-center pr-10">
          <div className="w-[80%] h-60 bg-gradient-to-b from-yellow-50 to-white rounded-2xl shadow-md"></div>
        </div>

        <div className="col-span-1 pl-20">
          <p className="text-green-700 font-semibold tracking-wide mb-2">OCR SUPPORT</p>
          <h2 className="text-3xl font-bold mb-3">Smart report extraction</h2>
          <p className="text-gray-700 text-lg max-w-[440px]">
            Upload lab results — values are auto-detected and corrected for hassle-free predictions.
          </p>
        </div>
      </div>

      {/* ROW 3 */}
      <div className="relative z-10 max-w-[1600px] mx-auto grid grid-cols-2 py-20">
        <div className="col-span-1 flex justify-center pr-10">
          <div className="w-[80%] h-60 bg-gradient-to-b from-blue-50 to-white rounded-2xl shadow-md"></div>
        </div>

        <div className="col-span-1 pl-20">
          <p className="text-green-700 font-semibold tracking-wide mb-2">EXPLAINABILITY</p>
          <h2 className="text-3xl font-bold mb-3">Friendly SHAP explanations</h2>
          <p className="text-gray-700 text-lg max-w-[440px]">
            Understand why predictions happen — friendly explanations help patients stay calm and informed.
          </p>
        </div>
      </div>

    </div>
  );
}
