import React from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Link to="/">Logout</Link>
    </div>
  );
}
