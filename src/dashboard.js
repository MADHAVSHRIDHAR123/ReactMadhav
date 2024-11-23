import React, { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
import UserList from "./list";
const Dashboard = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const username = localStorage.getItem("name"); // Replace with dynamic username if needed
  const code = localStorage.getItem("accessToken");

  const handleSignOut = () => {
    navigate("/");
    localStorage.clear();
    // Add sign-out logic here (e.g., clear authentication, redirect to login page)
  };

  useEffect(() => {
    const fetchUer = async () => {
      const reponse = await fetch(
        "https://dev.dhanxpert.com/API/api/admin/user",
        {
          method: "GET",
          headers: {
            Authorization: code,
          },
        }
      );
      if (!reponse.ok) {
        console.log("error");
      }
      const data = await reponse.json();
      console.log(data, "dataa");

      setUser(data.data);
    };
    fetchUer();
  }, []);

  return (
    <div>
      <Header username={username} onSignOut={handleSignOut} />
      <UserList user={user} />

      <Footer />
    </div>
  );
};

export default Dashboard;
