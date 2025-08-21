import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import "./Welcome.css";

export default function Welcome() {
  const navigate = useNavigate();
  const location = useLocation();
  const userName = location.state?.name || "User";

  const handleLogout = () => navigate("/login");

  return (
    <div className="welcome-container">
      <div className="top-right-buttons">
        <button className="icon-btn" onClick={() => navigate("/")}>
          <FaHome size={20} />
        </button>
        <button className="icon-btn" onClick={handleLogout}>
          <FaSignOutAlt size={20} />
        </button>
      </div>

      <h1>Welcome {userName}</h1>
      <p>You have successfully logged in.</p>
    </div>
  );
}
