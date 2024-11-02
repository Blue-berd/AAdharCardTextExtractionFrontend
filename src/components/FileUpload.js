// FileUpload.js
import React, { useState } from "react";
import { uploadFile } from "../apis/apis";
import "./FileUpload.css";

const FileUpload = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("aadharCard", file);

    try {
      const response = await uploadFile(formData);
      if (response.data.success) {
        onUploadSuccess(response.data.details);
      } else {
        console.error("Failed to upload: ", response.data);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="upload-form">
      <input type="file" onChange={handleFileChange} accept="image/*" />
      <button onClick={handleUpload}>Upload and Extract</button>
    </div>
  );
};

export default FileUpload;
