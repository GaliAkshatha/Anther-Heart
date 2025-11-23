import React from "react";
import screenshot from "../../assets/screenshot.png";

export default function Hero({ onLogin }) {
  return (
    <section className="pt-40 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <div>
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Your heart speaks in signals —
            <span className="block text-gray-700 mt-2">
              we help you understand them before it’s too late.
            </span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Anther Heart uses advanced machine learning to analyze heart-related data,
            explain results softly, and support patients, doctors, and hospitals.
          </p>

          <button
            onClick={onLogin}
            className="px-8 py-3 bg-black text-white text-lg rounded-lg hover:bg-gray-800 transition"
          >
            Try Now
          </button>
        </div>

        {/* RIGHT SCREENSHOT */}
        <div className="flex justify-center">
          <img
            src={screenshot}
            alt="Dashboard Preview"
            className="rounded-xl shadow-xl border"
          />
        </div>

      </div>
    </section>
  );
}

