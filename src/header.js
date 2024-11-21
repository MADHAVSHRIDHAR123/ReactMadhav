import React from "react";

const Header = ({ username, onSignOut }) => {
  return (
    <header
      style={{ padding: "10px", backgroundColor: "#007bff", color: "#fff" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Hi, {username}!</h1>
        <button
          onClick={onSignOut}
          style={{
            backgroundColor: "#ff4d4d",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Sign Out
        </button>
      </div>
    </header>
  );
};

export default Header;
