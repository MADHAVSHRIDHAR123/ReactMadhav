import React, { useState } from "react";

const AddUserModal = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    gender: "",
    dateOfBirth: "",
    altMobileNumber: "",
    meritalStatus: "",
  });
  const handleSubmit = () => {};
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    console.log(formData, "dada");
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div>
      <div>
        <h2>Add User</h2>
        <form
          onSubmit={handleSubmit}
          style={{ maxWidth: "400px", margin: "0 auto" }}
        >
          <div>
            <label style={{ display: "block ", marginBottom: "5px" }}>
              First name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter you name"
              value={formData.firstName}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            ></input>
          </div>
          <div>
            <label style={{ display: "block ", marginBottom: "5px" }}>
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter youname"
              value={formData.lastName}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            ></input>
          </div>
          <div>
            <label style={{ display: "block ", marginBottom: "5px" }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            ></input>
          </div>
          <div>
            <label style={{ display: "block ", marginBottom: "5px" }}>
              Mobile
            </label>
            <input
              type="text"
              name="mobileNumber"
              placeholder="Enter Mobile"
              value={formData.mobileNumber}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            ></input>
          </div>
          <div>
            <label style={{ display: "block ", marginBottom: "5px" }}>
              Gender
            </label>
            <select
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label style={{ display: "block ", marginBottom: "5px" }}>
              Dob
            </label>
            <input
              type="date"
              name="dateOfBirth"
              placeholder="Enter Dob"
              value={formData.dateOfBirth}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            ></input>
          </div>
          <div>
            <label style={{ display: "block ", marginBottom: "5px" }}>
              Alternate mobileNumber
            </label>
            <input
              type="text"
              name="altMobileNumber"
              placeholder="Enter number"
              value={formData.altMobileNumber}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            ></input>
          </div>
          <div>
            <label style={{ display: "block ", marginBottom: "5px" }}>
              Maritial Status
            </label>
            <select
              type="text"
              name="meritalStatus"
              value={formData.meritalStatus}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <option value="">Select status</option>
              <option value="Married">Married</option>
              <option value="Single">Single</option>
            </select>
          </div>
          <div style={{ display: "flex" }}>
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "green",
                color: "white",
                border: "none",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;
