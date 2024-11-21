import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
// import UserList from "./UserList";

const Dashboard = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ]);

  const username = localStorage.getItem("name"); // Replace with dynamic username if needed

  const handleSignOut = () => {
    navigate("/");
    localStorage.clear();
    // Add sign-out logic here (e.g., clear authentication, redirect to login page)
  };

  // const handleEdit = (id) => {
  //   console.log(`Edit user with ID: ${id}`);
  //   // Add edit logic here
  // };

  // const handleDelete = (id) => {
  //   console.log(`Delete user with ID: ${id}`);
  //   setUsers(users.filter((user) => user.id !== id));
  // };

  return (
    <div>
      <Header username={username} onSignOut={handleSignOut} />
      {/* <main style={{ padding: "20px" }}>
        <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
      </main> */}
      <Footer />
    </div>
  );
};

export default Dashboard;
