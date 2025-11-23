import React from "react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        <div>
          <h2 className="text-2xl font-semibold mb-4">Anther Heart</h2>
          <p className="text-gray-400">Your companion for early heart-risk understanding.</p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Documentation</li>
            <li>ML Model Guide</li>
            <li>Dataset Info</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Help Center</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>

      </div>

      <p className="text-center text-gray-500 mt-10">
        © {new Date().getFullYear()} Gali Akshatha — All rights reserved.
      </p>
    </footer>
  )
}
