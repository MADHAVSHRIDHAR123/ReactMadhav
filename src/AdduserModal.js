import React, { useState } from "react";

const AddUserModal = ({ onClose, onAddUser }) => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser(formData);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add User</h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((key) => (
            <div key={key}>
              <label>{key}</label>
              <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleChange}
              />
            </div>
          ))}
          <button type="submit">Add User</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;
