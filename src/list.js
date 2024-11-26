import React, { useEffect, useState } from "react";
import UserModal from "./UserModel";
import { useNavigate } from "react-router-dom";
import AddUserModal from "./AdduserModal";
const UserList = ({ user }) => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState(null);
  const handleSlected = (user) => {
    setSelected(user);
  };
  const handleClose = (user) => {
    setSelected(null);
  };
  const handleAdd = (user) => {
    navigate("/adduser");
  };

  return (
    <div>
      <h2>User List</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {user?.map((userData) => (
          <li
            key={userData.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            <span>{userData.firstName}</span>
            <span>{userData.email}</span>
            <div>
              <button
                onClick={() => handleAdd()}
                style={{
                  marginRight: "10px",
                  padding: "5px 10px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Add
              </button>
              <button
                onClick={() => handleSlected(userData)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#ff4d4d",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                View
              </button>
            </div>
          </li>
        ))}
      </ul>
      {selected && <UserModal user={selected} onClose={handleClose} />}
    </div>
  );
};

export default UserList;
