import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const uploadFile = (formData) => {
  return axiosInstance.post("/api/user/uploadaadhar", formData);
};

export const addUser = (userData) => {
  return axiosInstance.post("/api/user", userData);
};
