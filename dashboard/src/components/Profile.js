import React, { useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import API_URL, { API_URL2 } from "../api";

const Profile = () => {
  const { user, setUser } = useContext(GeneralContext);

  const handleLogout = async () => {
    try {
      await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
      localStorage.removeItem("username");
      localStorage.removeItem("email");
      setUser(null);
      window.location.href = API_URL2; // Redirect to frontend login
    } catch (error) {
      console.error("Logout failed:", error);
      // Even if backend fails, clear local state
      localStorage.removeItem("username");
      localStorage.removeItem("email");
      setUser(null);
      window.location.href = API_URL2;
    }
  };

  if (!user) {
    return (
      <div className="profile-container">
        <p>Loading user profile...</p>
      </div>
    );
  }

  return (
    <div className="profile-container" style={{ padding: "20px" }}>
      <h2>User Profile</h2>
      <div className="profile-details" style={{ marginTop: "40px" }}>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <button
          onClick={handleLogout}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#e74c3c",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
