import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function AdminWelcome() {
  const location = useLocation();
  const name = location.state?.name || "Employee";

  return (
    <div>
      <h1>Welcome, {name}!</h1>
      <Link to="/">Logout</Link>
    </div>
  );
}
