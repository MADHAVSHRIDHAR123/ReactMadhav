import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./login";

import Accordian from "./accordian";
import Dashboard from "./dashboard";
import AddUserModal from "./AdduserModal";
const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Login
            title="Welcome back"
            description="Login to your admin account"
          />
        }
      />
      <Route path="/accordian" element={<Accordian />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/adduser" element={<AddUserModal />} />
    </Routes>
  );
};

export default AppRouter;
