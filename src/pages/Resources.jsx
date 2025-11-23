import React from "react";

export default function Resources() {
  return (
    <div className="pt-32 max-w-6xl mx-auto px-6">

      <h1 className="text-4xl font-bold mb-6">Resources</h1>

      <p className="text-gray-700 text-lg mb-8">
        Here are some helpful materials, external references,
        and health education content to support heart wellness.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="p-6 shadow-md border rounded-xl">
          <h3 className="text-xl font-semibold">Heart Health Guidelines</h3>
          <p className="text-gray-600 mt-2">General safety and daily-care tips.</p>
          <a className="text-green-700 mt-3 inline-block" href="#">
            View
          </a>
        </div>

        <div className="p-6 shadow-md border rounded-xl">
          <h3 className="text-xl font-semibold">Dataset Reference</h3>
          <p className="text-gray-600 mt-2">Learn how the training dataset was prepared.</p>
          <a className="text-green-700 mt-3 inline-block" href="#">
            View
          </a>
        </div>

        <div className="p-6 shadow-md border rounded-xl">
          <h3 className="text-xl font-semibold">ML Documentation</h3>
          <p className="text-gray-600 mt-2">Technical breakdown for students & developers.</p>
          <a className="text-green-700 mt-3 inline-block" href="#">
            View
          </a>
        </div>

      </div>
    </div>
  );
}
