import React from "react";

const UserModal = ({ user, onClose }) => {
  console.log(user, "sinle");
  if (!user) return null; // Don't render if there's no user selected

  return (
    <div>
      {/* Backdrop */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 999,
        }}
      />
      {/* Modal */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#fff",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          borderRadius: "5px",
          zIndex: 1000,
          width: "300px",
        }}
      >
        <h2>User Details</h2>
        <ul>
          <li>{/* <img src={user} alt="no"></img> */}</li>
          {Object.entries(user).map(([key, value]) => (
            <li>
              <strong>{key}:</strong>
              {value}
            </li>
          ))}
        </ul>

        <button
          onClick={onClose}
          style={{
            marginTop: "10px",
            padding: "5px 10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "3px",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UserModal;
