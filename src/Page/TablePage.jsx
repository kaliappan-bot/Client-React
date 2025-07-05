// src/Page/TablePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function TablePage() {
  return (
    <div className="min-h-screen bg-[#7FFF00] text-black font-sans p-6">
      <h1 className="text-2xl font-bold mb-4">Navigation Table</h1>
      <table className="w-full border border-black border-collapse">
        <thead>
          <tr>
            <th className="border border-black px-3 py-2">Date</th>
            <th className="border border-black px-3 py-2">Link</th>
            <th className="border border-black px-3 py-2">Commands</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black px-3 py-2">17-03-2025</td>
            <td className="border border-black px-3 py-2">
              <Link to="/home" className="text-blue-600 underline">Go to Home Page</Link>
            </td>
            <td className="border border-black px-3 py-2">—</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
