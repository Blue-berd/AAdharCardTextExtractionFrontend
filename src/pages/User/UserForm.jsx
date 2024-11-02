import React, { useState } from "react";
import { addUser } from "../../apis/apis";
import FileUpload from "../../components/FileUpload";
import "./UserForm.css";

const UserForm = () => {
  const [details, setDetails] = useState({
    name: "",
    vid: "",
    dob: "",
    gender: "",
    aadhaarNumber: "",
  });

  const handleUploadSuccess = (extractedDetails) => {
    setDetails({
      name: extractedDetails.name,
      aadhaarNumber: extractedDetails.aadhaarNumber,
      dob: extractedDetails.dob,
      gender: extractedDetails.gender,
      vid: extractedDetails.vid,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addUser(details);
      if (response.data.success) {
        alert("User added successfully!");
      } else {
        alert("Failed to add user: " + response.data.message);
      }
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div className="container">
      <h2>Upload Indian aadhar Card</h2>
      <FileUpload onUploadSuccess={handleUploadSuccess} />

      <div className="details-form">
        <h3>Or fill details manually:</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={details.name} />
          </div>
          <div className="form-group">
            <label htmlFor="aadhaarNumber">Aadhar Number:</label>
            <input
              type="text"
              id="aadhaarNumber"
              value={details.aadhaarNumber}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input type="text" id="dob" value={details.dob} />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <input type="text" id="gender" value={details.gender} />
          </div>
          <div className="form-group">
            <label htmlFor="vid">VID Number:</label>
            <input type="text" id="vid" value={details.vid} />
          </div>
          <button type="submit">Submit User Details</button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
